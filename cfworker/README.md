# Corelix Contact Form — Cloudflare Worker

Cloudflare Worker that receives contact form submissions from `corelix.io/contact.html` and forwards them to a Telegram chat.

## Architecture

```
Browser (corelix.io) → POST https://contact.corelix.io/submit → CF Worker → Telegram Bot API
```

- **Rate limiting**: Max 5 submissions per IP per hour (via Cloudflare KV)
- **CORS**: Locked to `corelix.io` origin
- **Validation**: Required fields, email format
- **Math captcha**: Client-side only (prevents basic bots)

## Setup

### 1. Create a Telegram Bot

1. Open Telegram and message [@BotFather](https://t.me/BotFather)
2. Send `/newbot` and follow the prompts
3. Copy the bot token (e.g., `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)
4. Add the bot to your target group/channel
5. Get the chat ID:
   - For groups: add the bot, send a message, then visit `https://api.telegram.org/bot<TOKEN>/getUpdates` and find `chat.id`
   - For your personal chat: message the bot, then check `getUpdates`

### 2. Create a Cloudflare KV Namespace

```bash
npx wrangler kv namespace create CONTACT_KV
```

Note the namespace ID from the output.

### 3. Create the Worker

```bash
# From this directory
npx wrangler init corelix-contact-worker
cp contact-worker.js src/index.js
```

### 4. Configure `wrangler.toml`

```toml
name = "corelix-contact-worker"
main = "src/index.js"
compatibility_date = "2024-12-01"

[[kv_namespaces]]
binding = "CONTACT_KV"
id = "<your-kv-namespace-id>"
```

### 5. Set Environment Variables

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
# Paste your bot token when prompted

npx wrangler secret put TELEGRAM_CHAT_ID
# Paste your chat ID when prompted
```

Set `ALLOWED_ORIGIN` as a plaintext variable in `wrangler.toml`:

```toml
[vars]
ALLOWED_ORIGIN = "https://corelix.io"
```

### 6. Deploy

```bash
npx wrangler deploy
```

### 7. Set Up Custom Domain (`contact.corelix.io`)

1. Go to **Cloudflare Dashboard → Workers & Pages → your worker → Settings → Triggers**
2. Under **Custom Domains**, add `contact.corelix.io`
3. Cloudflare automatically creates the DNS record and TLS certificate

Alternatively, add a **Route** if you already have the domain proxied:

```
contact.corelix.io/submit*
```

## Environment Variables

| Variable | Type | Description |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | Secret | Bot token from @BotFather |
| `TELEGRAM_CHAT_ID` | Secret | Target chat/group ID (negative for groups) |
| `ALLOWED_ORIGIN` | Variable | CORS origin, default `https://corelix.io` |

## KV Namespace

| Binding | Purpose |
|---|---|
| `CONTACT_KV` | Rate limiting — stores `rate:<ip>` keys with 1-hour TTL |

## Testing Locally

```bash
npx wrangler dev
```

Then send a test POST:

```bash
curl -X POST http://localhost:8787/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "inquiryType": "general",
    "subject": "Test",
    "message": "Hello from local dev"
  }'
```

## Form Fields

| Field | Required | Notes |
|---|---|---|
| `name` | Yes | Sender name |
| `email` | Yes | Validated format |
| `inquiryType` | Yes | One of: `general`, `support`, `enterprise`, `partnership`, `data_protection`, `other` |
| `organization` | No | Shown when `enterprise` or `partnership` selected |
| `subject` | Yes | Message subject |
| `message` | Yes | Message body |
| `timestamp` | No | ISO 8601 timestamp (set by client) |
