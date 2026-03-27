// Corelix Contact Form — Cloudflare Worker
//
// Environment variables (set in CF Worker settings):
//   TELEGRAM_BOT_TOKEN  — Telegram bot token from @BotFather
//   TELEGRAM_CHAT_ID    — Target Telegram chat/group ID
//   ALLOWED_ORIGIN      — CORS origin (default: https://corelix.io)
//
// KV namespace binding:
//   CONTACT_KV          — Cloudflare KV namespace for rate limiting

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || 'https://corelix.io',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const data = await request.json();

      const required = ['name', 'email', 'inquiryType', 'subject', 'message'];
      for (const field of required) {
        if (!data[field] || !data[field].trim()) {
          return new Response(JSON.stringify({ error: `Missing field: ${field}` }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return new Response(JSON.stringify({ error: 'Invalid email' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const rateLimitKey = `rate:${ip}`;
      const current = parseInt(await env.CONTACT_KV?.get(rateLimitKey) || '0');
      if (current >= 5) {
        return new Response(JSON.stringify({ error: 'Too many requests. Try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      await env.CONTACT_KV?.put(rateLimitKey, String(current + 1), { expirationTtl: 3600 });

      const typeLabels = {
        general: 'General Question',
        support: 'Technical Support',
        enterprise: 'Sales & Enterprise',
        partnership: 'Partnership',
        data_protection: 'Data Protection Request',
        other: 'Other',
      };

      const lines = [
        '📬 *New Contact Form Submission*',
        '',
        `*Name:* ${escapeMarkdown(data.name)}`,
        `*Email:* ${escapeMarkdown(data.email)}`,
        `*Type:* ${typeLabels[data.inquiryType] || data.inquiryType}`,
        data.organization ? `*Organization:* ${escapeMarkdown(data.organization)}` : null,
        `*Subject:* ${escapeMarkdown(data.subject)}`,
        '',
        '*Message:*',
        escapeMarkdown(data.message),
        '',
        `_Sent from corelix.io at ${data.timestamp || new Date().toISOString()}_`,
        `_IP: ${ip}_`,
      ].filter(Boolean).join('\n');

      const tgResponse = await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: env.TELEGRAM_CHAT_ID,
            text: lines,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (!tgResponse.ok) {
        console.error('Telegram error:', await tgResponse.text());
        throw new Error('Failed to send notification');
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.error('Worker error:', err);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};

function escapeMarkdown(text) {
  return text.replace(/[_*\[\]()~`>#+\-=|{}.!\\]/g, '\\$&');
}
