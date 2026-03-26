# Corelix Brand Guidelines

**Version:** 1.0  
**Last Updated:** March 2026  
**Owner:** Corelix.io Brand Team

---

## Table of Contents

1. [Brand Overview](#1-brand-overview)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Logo](#4-logo)
5. [Iconography](#5-iconography)
6. [Photography & Imagery](#6-photography--imagery)
7. [Voice & Tone](#7-voice--tone)
8. [Spacing & Layout](#8-spacing--layout)
9. [Component Patterns](#9-component-patterns)
10. [Motion & Animation](#10-motion--animation)
11. [EU Identity Elements](#11-eu-identity-elements)
12. [Accessibility](#12-accessibility)
13. [Quick Reference](#13-quick-reference)

---

## 1. Brand Overview

### Name

**Corelix** — always capitalized with a capital C and lowercase remaining letters. The legal entity is **Corelix.io**. Never written as "CORELIX," "corelix," or "CoreLix."

### Tagline

**Primary:**  
> "The European PaaS for the Sovereign Era"

**Alternative taglines** (use contextually):

| Tagline | Best used for |
|---|---|
| "Your infrastructure, your sovereignty." | Hero sections, landing pages |
| "European resilience, global performance." | Performance-focused contexts, benchmarks |
| "Deploy with confidence." | CTAs, onboarding, developer-facing copy |

### Brand Personality

Corelix speaks with the confidence of an established institution, not the bravado of a startup.

| Trait | What it means in practice |
|---|---|
| **Trustworthy & reassuring** | Lead with facts and guarantees, not promises. Reference specific certifications, data residency, and regulatory compliance. |
| **Technical but accessible** | Respect the reader's intelligence without drowning them in jargon. A CTO and a junior developer should both feel at home. |
| **European identity** | Sophisticated, understated, precise. Think Scandinavian design sensibility applied to cloud infrastructure. |
| **Confident & factual** | Institutional tone. We state what we do and back it with evidence. No superlatives, no hype. |
| **Warm but professional** | Approachable without being casual. We are colleagues, not buddies. |

### Target Audience

- European startups and SMEs deploying self-hosted infrastructure
- DevOps teams seeking a PaaS they own and control
- Companies subject to GDPR, CLOUD Act, DORA, and NIS-2 compliance requirements
- Organizations choosing European sovereignty over hyperscaler convenience
- The French tech ecosystem and broader EU developer community

---

## 2. Color Palette

### Overview

The Corelix palette is built around a soft teal primary that communicates trust and stability, warmed by cream and coral accents. Every color is intentionally muted — we never shout.

### CSS Custom Properties

All colors are defined as CSS custom properties on `:root`. Use these variables exclusively; never hard-code hex values.

```css
:root {
  /* Primary — Soft Teal */
  --color-primary-50:  #EDF5F6;
  --color-primary-100: #D4E8EA;
  --color-primary-200: #A8D1D5;
  --color-primary-300: #7BB9BF;
  --color-primary-400: #5BA0A7;
  --color-primary-500: #4A7C82;
  --color-primary-600: #3D6268;
  --color-primary-700: #2F4E52;
  --color-primary-800: #233A3D;
  --color-primary-900: #172627;

  /* Secondary — Warm Cream */
  --color-secondary-50:  #FFFDFB;
  --color-secondary-100: #FBF7F2;
  --color-secondary-200: #F5F0EB;
  --color-secondary-300: #EDE5DC;
  --color-secondary-400: #DDD3C6;

  /* Accent Coral */
  --color-coral-300: #F0B5A0;
  --color-coral-400: #EC9E83;
  --color-coral-500: #E8926C;
  --color-coral-600: #D47A54;

  /* Accent Periwinkle */
  --color-periwinkle-300: #A3ADF8;
  --color-periwinkle-400: #8E9AF6;
  --color-periwinkle-500: #7C8CF5;
  --color-periwinkle-600: #5D6FE8;

  /* Success — Sage Green */
  --color-success-400: #72C0A0;
  --color-success-500: #5DAE8B;
  --color-success-600: #4A9474;

  /* Warning — Warm Amber */
  --color-warning-400: #EDC480;
  --color-warning-500: #E8B86C;

  /* Neutral — Warm Slate */
  --color-neutral-50:  #FAFAF8;
  --color-neutral-100: #F5F4F0;
  --color-neutral-200: #E8E6E1;
  --color-neutral-300: #D1CFCA;
  --color-neutral-400: #A8A59E;
  --color-neutral-500: #8A8780;
  --color-neutral-600: #6B6862;
  --color-neutral-700: #4A4844;
  --color-neutral-800: #2D2B28;
  --color-neutral-900: #1A1917;
}
```

### Primary — Soft Teal

Conveys trust, stability, and a distinctly European identity. The primary teal is the most recognizable Corelix color.

| Swatch | Variable | Hex | Usage |
|---|---|---|---|
| ![#EDF5F6](https://via.placeholder.com/16/EDF5F6/EDF5F6) | `--color-primary-50` | `#EDF5F6` | Subtle backgrounds, hover state fills |
| ![#D4E8EA](https://via.placeholder.com/16/D4E8EA/D4E8EA) | `--color-primary-100` | `#D4E8EA` | Light tinted backgrounds, selected states |
| ![#A8D1D5](https://via.placeholder.com/16/A8D1D5/A8D1D5) | `--color-primary-200` | `#A8D1D5` | Borders on teal elements, progress bars |
| ![#7BB9BF](https://via.placeholder.com/16/7BB9BF/7BB9BF) | `--color-primary-300` | `#7BB9BF` | Secondary buttons, icon tints |
| ![#5BA0A7](https://via.placeholder.com/16/5BA0A7/5BA0A7) | `--color-primary-400` | `#5BA0A7` | Links (hover state), active borders |
| ![#4A7C82](https://via.placeholder.com/16/4A7C82/4A7C82) | `--color-primary-500` | `#4A7C82` | **Primary buttons, links, key UI elements** |
| ![#3D6268](https://via.placeholder.com/16/3D6268/3D6268) | `--color-primary-600` | `#3D6268` | Hover/pressed state for primary buttons |
| ![#2F4E52](https://via.placeholder.com/16/2F4E52/2F4E52) | `--color-primary-700` | `#2F4E52` | Active/focus states |
| ![#233A3D](https://via.placeholder.com/16/233A3D/233A3D) | `--color-primary-800` | `#233A3D` | Dark teal backgrounds, footer |
| ![#172627](https://via.placeholder.com/16/172627/172627) | `--color-primary-900` | `#172627` | Darkest teal, near-black alternative |

**Accessibility:** Primary-500 (`#4A7C82`) on white (`#FFFFFF`) achieves a contrast ratio of **4.6:1** (AA for large text). For body text on white, use Primary-700 or darker. Primary-500 on Secondary-200 (`#F5F0EB`) achieves **4.3:1** (AA large text).

### Secondary — Warm Cream

Provides warmth and approachability. Used for backgrounds and large surface areas.

| Swatch | Variable | Hex | Usage |
|---|---|---|---|
| ![#FFFDFB](https://via.placeholder.com/16/FFFDFB/FFFDFB) | `--color-secondary-50` | `#FFFDFB` | Near-white alternative background |
| ![#FBF7F2](https://via.placeholder.com/16/FBF7F2/FBF7F2) | `--color-secondary-100` | `#FBF7F2` | Card backgrounds, alternating sections |
| ![#F5F0EB](https://via.placeholder.com/16/F5F0EB/F5F0EB) | `--color-secondary-200` | `#F5F0EB` | **Section backgrounds, feature blocks** |
| ![#EDE5DC](https://via.placeholder.com/16/EDE5DC/EDE5DC) | `--color-secondary-300` | `#EDE5DC` | Borders on cream elements |
| ![#DDD3C6](https://via.placeholder.com/16/DDD3C6/DDD3C6) | `--color-secondary-400` | `#DDD3C6` | Dividers, decorative borders |

### Accent Coral

Injects energy and warmth. Inspired by Mediterranean warmth — a "French touch." Use sparingly for CTAs and highlights.

| Swatch | Variable | Hex | Usage |
|---|---|---|---|
| ![#F0B5A0](https://via.placeholder.com/16/F0B5A0/F0B5A0) | `--color-coral-300` | `#F0B5A0` | Light accent backgrounds |
| ![#EC9E83](https://via.placeholder.com/16/EC9E83/EC9E83) | `--color-coral-400` | `#EC9E83` | Tags, badges |
| ![#E8926C](https://via.placeholder.com/16/E8926C/E8926C) | `--color-coral-500` | `#E8926C` | **Accent buttons, important highlights** |
| ![#D47A54](https://via.placeholder.com/16/D47A54/D47A54) | `--color-coral-600` | `#D47A54` | Hover/pressed for coral elements |

**Accessibility:** Coral-500 on white has a contrast ratio of approximately **3.1:1** — use only for large text (18px+) or decorative elements, never for small body text. Pair with dark text labels when used as a background.

### Accent Periwinkle

Represents innovation and technology. Used for technical content, developer features, and data visualization.

| Swatch | Variable | Hex | Usage |
|---|---|---|---|
| ![#A3ADF8](https://via.placeholder.com/16/A3ADF8/A3ADF8) | `--color-periwinkle-300` | `#A3ADF8` | Light tech accent |
| ![#8E9AF6](https://via.placeholder.com/16/8E9AF6/8E9AF6) | `--color-periwinkle-400` | `#8E9AF6` | Badges, code block accents |
| ![#7C8CF5](https://via.placeholder.com/16/7C8CF5/7C8CF5) | `--color-periwinkle-500` | `#7C8CF5` | **Tech features, API highlights** |
| ![#5D6FE8](https://via.placeholder.com/16/5D6FE8/5D6FE8) | `--color-periwinkle-600` | `#5D6FE8` | Hover/pressed for periwinkle |

**Accessibility:** Periwinkle-500 on white has a contrast ratio of approximately **3.4:1** — large text only. Use Periwinkle-600 (`#5D6FE8`, ~4.7:1) for text that must meet AA body text standards.

### Success — Sage Green

Growth, sustainability, and positive outcomes. Used for success states, confirmations, and environmental messaging.

| Swatch | Variable | Hex | Usage |
|---|---|---|---|
| ![#72C0A0](https://via.placeholder.com/16/72C0A0/72C0A0) | `--color-success-400` | `#72C0A0` | Success badges, progress indicators |
| ![#5DAE8B](https://via.placeholder.com/16/5DAE8B/5DAE8B) | `--color-success-500` | `#5DAE8B` | **Success messages, checkmarks** |
| ![#4A9474](https://via.placeholder.com/16/4A9474/4A9474) | `--color-success-600` | `#4A9474` | Success text on light backgrounds |

### Warning — Warm Amber

Attention without alarm. Used for warnings, trial notices, and cautionary messaging.

| Swatch | Variable | Hex | Usage |
|---|---|---|---|
| ![#EDC480](https://via.placeholder.com/16/EDC480/EDC480) | `--color-warning-400` | `#EDC480` | Warning badge backgrounds |
| ![#E8B86C](https://via.placeholder.com/16/E8B86C/E8B86C) | `--color-warning-500` | `#E8B86C` | **Warning icons, alert borders** |

### Neutral — Warm Slate

The backbone of the interface. All text, borders, and structural elements use this scale. Deliberately warm — never a cold blue-grey.

| Swatch | Variable | Hex | Usage |
|---|---|---|---|
| ![#FAFAF8](https://via.placeholder.com/16/FAFAF8/FAFAF8) | `--color-neutral-50` | `#FAFAF8` | **Page background** |
| ![#F5F4F0](https://via.placeholder.com/16/F5F4F0/F5F4F0) | `--color-neutral-100` | `#F5F4F0` | Card backgrounds, input fields |
| ![#E8E6E1](https://via.placeholder.com/16/E8E6E1/E8E6E1) | `--color-neutral-200` | `#E8E6E1` | **Borders, dividers, table lines** |
| ![#D1CFCA](https://via.placeholder.com/16/D1CFCA/D1CFCA) | `--color-neutral-300` | `#D1CFCA` | Disabled borders, placeholder icons |
| ![#A8A59E](https://via.placeholder.com/16/A8A59E/A8A59E) | `--color-neutral-400` | `#A8A59E` | Placeholder text, disabled text |
| ![#8A8780](https://via.placeholder.com/16/8A8780/8A8780) | `--color-neutral-500` | `#8A8780` | **Secondary text, captions, metadata** |
| ![#6B6862](https://via.placeholder.com/16/6B6862/6B6862) | `--color-neutral-600` | `#6B6862` | Tertiary text, subtle labels |
| ![#4A4844](https://via.placeholder.com/16/4A4844/4A4844) | `--color-neutral-700` | `#4A4844` | Secondary headings |
| ![#2D2B28](https://via.placeholder.com/16/2D2B28/2D2B28) | `--color-neutral-800` | `#2D2B28` | **Primary body text** |
| ![#1A1917](https://via.placeholder.com/16/1A1917/1A1917) | `--color-neutral-900` | `#1A1917` | **Headings, high-emphasis text** |

**Accessibility:** Neutral-800 (`#2D2B28`) on Neutral-50 (`#FAFAF8`) achieves **14.1:1** contrast (AAA). Neutral-500 (`#8A8780`) on white achieves **3.7:1** (AA large text only — appropriate for captions and secondary text at 16px+).

### Color Usage Rules

1. **Never use more than two accent colors on the same screen.** Teal + one accent (coral or periwinkle) is the standard pairing.
2. **Cream backgrounds alternate with white** to create visual rhythm between page sections.
3. **Coral is reserved for energy moments** — primary CTAs, pricing highlights, important callouts. It should occupy less than 5% of any page's surface area.
4. **Periwinkle is reserved for technical contexts** — code, API, developer tooling, and data visualization.
5. **Neutral-800 is the default text color**, not black (`#000000`). Pure black is never used.
6. **Teal is never used as a text color** on white backgrounds at sizes below 18px — insufficient contrast. Use Neutral-800 or Neutral-900 for text.

---

## 3. Typography

### Font Stack

```css
:root {
  --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body: 'DM Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}
```

### Display Font — Plus Jakarta Sans

**Source:** [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)  
**Loaded weights:** 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)  
**Character:** Modern geometric sans-serif with warm, rounded terminals. Friendly yet authoritative — conveys both technical competence and human warmth.

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
```

**Usage:**
- All headings (h1–h6)
- Navigation links
- Button labels
- Badge/tag text
- Pricing figures
- Feature titles

### Body Font — DM Sans

**Source:** [Google Fonts](https://fonts.google.com/specimen/DM+Sans)  
**Loaded weights:** 400 (Regular), 500 (Medium), 600 (SemiBold)  
**Character:** Clean, geometric, and highly legible. Slightly wider than average — reads well on screens at small sizes. Has a subtle European sophistication.

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

**Usage:**
- Body text and paragraphs
- Descriptions and summaries
- Form labels and help text
- Table content
- List items
- Footer text

### Monospace Font — JetBrains Mono

**Source:** [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)  
**Loaded weight:** 400 (Regular)  
**Character:** Developer-focused, optimized for code readability. Increased letter height and distinctive character forms reduce ambiguity (e.g., `0` vs `O`, `l` vs `1`).

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
```

**Usage:**
- Code blocks and inline code
- Terminal commands and CLI examples
- Technical specifications
- API endpoint paths
- Configuration values

### Type Scale

```css
h1 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.5rem);  /* 36px → 56px */
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--color-neutral-900);
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);  /* 28px → 40px */
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: var(--color-neutral-900);
}

h3 {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);  /* 20px → 28px */
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-neutral-900);
}

h4 {
  font-family: var(--font-display);
  font-size: 1.25rem;  /* 20px */
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-neutral-800);
}

body, p {
  font-family: var(--font-body);
  font-size: 1rem;  /* 16px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-neutral-800);
}

.text-small {
  font-size: 0.88rem;  /* ~14px */
  line-height: 1.5;
}

.text-caption {
  font-size: 0.8rem;  /* ~13px */
  line-height: 1.4;
  color: var(--color-neutral-500);
}

code, pre {
  font-family: var(--font-mono);
  font-size: 0.875rem;  /* 14px */
  font-weight: 400;
}
```

### Typography Rules

1. **Never use more than two font families on one page** — display + body. Mono is reserved for code contexts.
2. **Headings always use Plus Jakarta Sans.** No exceptions.
3. **Body text always uses DM Sans.** No exceptions.
4. **Maximum line length for body text: 70 characters** (~600px). Wider than this hurts readability.
5. **Paragraph spacing: 1.5em** between paragraphs, not double line breaks.
6. **No uppercase headings.** Sentence case for all headings ("Deploy with confidence" not "DEPLOY WITH CONFIDENCE").
7. **No italic for emphasis** in headings. Use weight variation (semibold → bold) instead.

---

## 4. Logo

### Logo Mark

The Corelix logo mark is a rounded square containing concentric circles:

```
┌────────────────┐
│                │
│    ┌──────┐    │
│    │ ┌──┐ │    │
│    │ │██│ │    │
│    │ └──┘ │    │
│    └──────┘    │
│                │
└────────────────┘

Outer: Rounded square, 8px radius at 32px size
Middle: White ring (stroke)
Center: White solid circle (fill)
```

**Symbolism:**
- **Center dot** — The core: your infrastructure, your data
- **Ring** — The platform: protection and orchestration
- **Outer boundary** — The sovereign container: European jurisdiction, your control

### Construction

| Property | Value |
|---|---|
| Shape | Rounded rectangle |
| Corner radius | 25% of width (8px at 32px) |
| Fill | `--color-primary-500` (`#4A7C82`) |
| Inner ring | White (`#FFFFFF`), stroke width 12.5% of logo size |
| Center dot | White (`#FFFFFF`), solid fill, 18.75% of logo size |

### Minimum Size

The logo mark must never be rendered smaller than **24px** (width and height). At sizes below this, the concentric circles become indistinct.

### Clear Space

Maintain a minimum clear space of **50% of the logo's width** on all sides. No other graphic elements, text, or page edges may encroach on this space.

```
        ←── 50% ──→
        ┌──────────┐
   50%  │          │  50%
   ↕    │   LOGO   │  ↕
        │          │
        └──────────┘
        ←── 50% ──→
```

### Color Variations

| Variation | Background | Logo Fill | Inner Elements | Use Case |
|---|---|---|---|---|
| **Full color** (default) | Any light | `#4A7C82` (Teal) | White | Marketing, website, print |
| **Reversed** | Dark (`#1A1917`+) | White | `#4A7C82` (Teal) | Dark backgrounds, dark sections |
| **Monochrome light** | Dark | White | Transparent/dark | Dark UIs, single-color contexts |
| **Monochrome dark** | Light | `#2D2B28` | White | Grayscale print, watermarks |

### Logo + Wordmark (Lockup)

The full lockup combines the logo mark with the "Corelix" wordmark:

```
[■] Corelix
 ↑       ↑
Logo   Plus Jakarta Sans, weight 800, 1.25rem
mark   Color: --color-neutral-900 (or white on dark)
```

- Logo and wordmark are **always left-aligned** horizontally.
- Vertical gap between logo mark and wordmark baseline: **8px** at default size.
- The wordmark may appear to the **right of** or **below** the logo mark.
- Horizontal arrangement is preferred for navigation bars; stacked for favicons and small spaces.

### Logo Misuse

Never:
- Stretch or distort the logo
- Rotate or skew the logo
- Apply drop shadows, glows, or 3D effects
- Change the logo colors outside approved variations
- Place the logo on a busy or low-contrast background
- Outline or stroke the outer boundary
- Animate the logo (subtle fade-in on page load is acceptable)
- Recreate the logo in a different typeface
- Use the logo mark as a bullet point or decorative element

---

## 5. Iconography

### Style

All icons follow a consistent stroke-based style:

| Property | Value |
|---|---|
| ViewBox | `0 0 24 24` |
| Stroke width | `2` |
| Line cap | `round` |
| Line join | `round` |
| Fill | `none` (stroke-only) |
| Color | `currentColor` (inherits from parent) |

This aligns with the conventions of [Heroicons](https://heroicons.com/) (outline) and [Lucide](https://lucide.dev/).

### Icon Template

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- paths here -->
</svg>
```

### Icon Backgrounds

When icons appear in feature grids or benefit lists, place them on a tinted square background:

```css
.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container--primary {
  background: rgba(74, 124, 130, 0.1);   /* Teal 10% */
  color: var(--color-primary-500);
}

.icon-container--coral {
  background: rgba(232, 146, 108, 0.1);  /* Coral 10% */
  color: var(--color-coral-500);
}

.icon-container--periwinkle {
  background: rgba(124, 140, 245, 0.1);  /* Periwinkle 10% */
  color: var(--color-periwinkle-500);
}

.icon-container--success {
  background: rgba(93, 174, 139, 0.1);   /* Sage 10% */
  color: var(--color-success-500);
}
```

Opacity for the tinted background should range between **8% and 15%** depending on the color's luminance.

### Icon Sizing

| Context | Size | Container |
|---|---|---|
| Inline with text | 16px | None |
| Feature card | 24px | 48px square |
| Hero illustration | 32px | 64px square |
| Navigation | 20px | None |

---

## 6. Photography & Imagery

### Preferred Approach

Corelix favors **abstract, minimal illustrations** over photography. When visuals are needed:

1. **First choice:** Custom SVG illustrations in brand colors (teal line work on cream)
2. **Second choice:** Abstract geometric patterns or data visualizations
3. **Third choice:** Architecture/infrastructure photography with brand color treatment
4. **Last resort:** Stock photography (see constraints below)

### Illustration Style

- Line weight consistent with icon style (stroke-width 2 equivalent)
- Brand colors only — teal, cream, coral, periwinkle
- Geometric and architectural — grids, nodes, connections, infrastructure metaphors
- Subtle gradients using teal-500 → teal-300 or coral-500 → coral-300
- No heavy drop shadows or 3D effects

### Photography Guidelines

When photography is required:

**Do use:**
- European landscapes and architecture (especially French, Nordic, Swiss)
- Clean, modern workspaces with natural light
- Server rooms and data centers (with blue-teal lighting preferred)
- Abstract close-ups of technology (circuits, fiber optics, network cables)
- Candid, natural people shots in professional European settings

**Don't use:**
- Stock photos of "diverse teams pointing at screens"
- American cityscapes (NYC skyline, Silicon Valley campuses)
- Overly staged handshake or high-five photos
- Dark, dramatic hacker-aesthetic imagery
- Photos with text overlays baked into the image

### Color Treatment

Apply a subtle tint overlay to all photography to integrate it with the brand palette:

```css
.image-tinted {
  position: relative;
}

.image-tinted::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(74, 124, 130, 0.08),   /* Teal tint */
    rgba(245, 240, 235, 0.12)   /* Cream tint */
  );
  mix-blend-mode: multiply;
}
```

---

## 7. Voice & Tone

### Principles

| Principle | Description |
|---|---|
| **Factual over aspirational** | State what exists, not what might be. Numbers, certifications, and technical specifics. |
| **Institutional confidence** | We don't need to convince — we present evidence and let the reader decide. |
| **European precision** | Specific where it matters (GDPR Article references, data center locations, exact feature counts). Vague when precision would be misleading. |
| **Respectful of the reader** | No dumbing down, no jargon for jargon's sake. Meet the reader at their level. |
| **Warm professionalism** | Think: a trusted architect presenting plans. Not cold, not gushing. |

### Writing Style

- **Sentence case** for all headings and UI elements. Not Title Case, never ALL CAPS.
- **Oxford comma** in lists (for clarity).
- **Active voice** preferred. Passive voice permitted for regulatory/formal contexts.
- **Short paragraphs** — 2-3 sentences maximum.
- **No exclamation marks** in marketing copy. One per page maximum in UI notifications.

### Do vs. Don't

| Do | Don't |
|---|---|
| "Corelix processes data exclusively within the EU. No US subsidiary exposure." | "We're crushing it with the most insane cloud platform ever built!!!" |
| "11 enterprise features ship free under the MIT license." | "Get our AMAZING free tier with UNLIMITED features!!!" |
| "Deploy to your own servers in under 10 minutes." | "Revolutionary deployment technology that will change everything!" |
| "Built for organizations subject to DORA and NIS-2." | "We're the BEST platform for compliance, PERIOD." |
| "Coolify powers the core. We add what enterprises need." | "We're so much better than Coolify it's not even funny." |
| "Your data never leaves your infrastructure." | "We take security SUPER seriously (trust us)." |

### Terminology

| Use | Avoid |
|---|---|
| Self-hosted PaaS | Cloud platform |
| Data sovereignty | Data privacy (too vague) |
| Deploy | Ship (too casual) |
| Infrastructure | Stack (too informal) |
| Organization | Company (unless specifically about a legal entity) |
| Feature | Capability (too vague) |
| European | EU-based (unless specifically about the legal union) |

### Regulatory References

When mentioning regulatory frameworks, be precise:

- **GDPR** — General Data Protection Regulation (EU 2016/679)
- **CLOUD Act** — Clarifying Lawful Overseas Use of Data Act (US, 2018)
- **DORA** — Digital Operational Resilience Act (EU 2022/2554)
- **NIS-2** — Network and Information Security Directive (EU 2022/2555)
- **Schrems II** — CJEU ruling C-311/18 (invalidating Privacy Shield)

Don't abbreviate on first use. Provide the full name followed by the abbreviation in parentheses.

---

## 8. Spacing & Layout

### Content Width

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;  /* 24px horizontal padding */
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;  /* 32px on tablet+ */
  }
}

@media (min-width: 1280px) {
  .container {
    padding: 0 3rem;  /* 48px on large screens */
  }
}
```

### Section Spacing

```css
section {
  padding: 4rem 0;   /* 64px vertical on mobile */
}

@media (min-width: 768px) {
  section {
    padding: 6rem 0;  /* 96px on tablet */
  }
}

@media (min-width: 1024px) {
  section {
    padding: 8rem 0;  /* 128px on desktop */
  }
}
```

### Spacing Scale

Use a consistent spacing scale based on `0.25rem` (4px) increments:

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `0.25rem` (4px) | Icon-to-text gap |
| `--space-2` | `0.5rem` (8px) | Tight element spacing |
| `--space-3` | `0.75rem` (12px) | Form field gaps |
| `--space-4` | `1rem` (16px) | Paragraph spacing |
| `--space-5` | `1.25rem` (20px) | Card internal padding (compact) |
| `--space-6` | `1.5rem` (24px) | Element-to-element gaps |
| `--space-8` | `2rem` (32px) | **Card-to-card gaps, grid gaps** |
| `--space-10` | `2.5rem` (40px) | Subsection spacing |
| `--space-12` | `3rem` (48px) | Large internal spacing |
| `--space-16` | `4rem` (64px) | Section spacing (mobile) |
| `--space-24` | `6rem` (96px) | Section spacing (tablet) |
| `--space-32` | `8rem` (128px) | Section spacing (desktop) |

### Border Radius

```css
:root {
  --radius-sm: 0.375rem;  /* 6px — inputs, small buttons */
  --radius-md: 0.5rem;    /* 8px — default buttons */
  --radius-lg: 0.75rem;   /* 12px — cards, modals */
  --radius-xl: 1rem;      /* 16px — large cards, hero elements */
  --radius-full: 9999px;  /* Pill shapes — badges, tags */
}
```

### Grid System

```css
.grid-features {
  display: grid;
  gap: var(--space-8);
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-features {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Layout Principles

1. **Generous whitespace** — content should breathe. When in doubt, add more space, not less.
2. **Alternating backgrounds** — alternate between `--color-neutral-50` (warm white) and `--color-secondary-200` (cream) for visual rhythm.
3. **Left-aligned by default** — center alignment only for hero headlines and short CTA blocks.
4. **Asymmetric grids permitted** — 60/40 or 55/45 splits for text + image layouts. Avoid strict 50/50.

---

## 9. Component Patterns

### Buttons

```css
.btn {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.938rem;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-lg);
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

/* Primary */
.btn-primary {
  background: var(--color-primary-500);
  color: white;
  box-shadow: 0 1px 3px rgba(74, 124, 130, 0.3);
}

.btn-primary:hover {
  background: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(74, 124, 130, 0.25);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(74, 124, 130, 0.3);
}

/* Secondary (outline) */
.btn-secondary {
  background: transparent;
  color: var(--color-primary-500);
  border: 1.5px solid var(--color-primary-300);
}

.btn-secondary:hover {
  background: var(--color-primary-50);
  border-color: var(--color-primary-500);
  transform: translateY(-1px);
}

/* Accent (coral — use sparingly) */
.btn-accent {
  background: var(--color-coral-500);
  color: white;
  box-shadow: 0 1px 3px rgba(232, 146, 108, 0.3);
}

.btn-accent:hover {
  background: var(--color-coral-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(232, 146, 108, 0.25);
}
```

### Cards

```css
.card {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 10px 40px rgba(45, 43, 40, 0.08);
  border-color: var(--color-neutral-300);
}

.card--featured {
  border-color: var(--color-primary-200);
  box-shadow: 0 4px 20px rgba(74, 124, 130, 0.1);
}

.card--featured:hover {
  border-color: var(--color-primary-400);
  box-shadow: 0 10px 40px rgba(74, 124, 130, 0.15);
}
```

### Badges & Tags

```css
.badge {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge--free {
  background: rgba(93, 174, 139, 0.1);
  color: var(--color-success-600);
}

.badge--pro {
  background: rgba(232, 146, 108, 0.1);
  color: var(--color-coral-600);
}

.badge--new {
  background: rgba(124, 140, 245, 0.1);
  color: var(--color-periwinkle-600);
}

.badge--eu {
  background: rgba(74, 124, 130, 0.1);
  color: var(--color-primary-600);
}
```

### Tables

```css
table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
}

th {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.875rem;
  text-align: left;
  padding: 1rem;
  color: var(--color-neutral-600);
  border-bottom: 2px solid var(--color-neutral-200);
}

td {
  padding: 1rem;
  border-bottom: 1px solid var(--color-neutral-200);
  color: var(--color-neutral-800);
}

/* Highlighted column (for Corelix in comparison tables) */
.col-highlight {
  background: var(--color-primary-50);
}

.col-highlight th {
  color: var(--color-primary-700);
  border-bottom-color: var(--color-primary-300);
}
```

### Code Blocks

```css
pre {
  background: var(--color-neutral-900);
  color: #E2E0DC;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
}

code {
  font-family: var(--font-mono);
  font-size: 0.875em;
}

/* Inline code */
p code, li code {
  background: var(--color-neutral-100);
  padding: 0.15em 0.4em;
  border-radius: var(--radius-sm);
  color: var(--color-primary-700);
}
```

---

## 10. Motion & Animation

### Timing

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-enter: cubic-bezier(0, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 1, 1);
}
```

### Hover Interactions

Hover effects should be subtle and purposeful:

```css
/* Gentle lift — cards, buttons */
.hoverable {
  transition: transform var(--duration-normal) var(--easing-default),
              box-shadow var(--duration-normal) var(--easing-default);
}

.hoverable:hover {
  transform: translateY(-1px);  /* Max -2px for larger elements */
}

/* Border color change — inputs, cards */
.border-interactive {
  transition: border-color var(--duration-fast) var(--easing-default);
}

.border-interactive:hover {
  border-color: var(--color-primary-300);
}
```

### Scroll Animations

Elements fade in as they enter the viewport. Use staggered delays for grouped items.

```css
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-slow) var(--easing-enter),
              transform var(--duration-slow) var(--easing-enter);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger > :nth-child(1) { transition-delay: 0ms; }
.stagger > :nth-child(2) { transition-delay: 100ms; }
.stagger > :nth-child(3) { transition-delay: 200ms; }
.stagger > :nth-child(4) { transition-delay: 300ms; }
.stagger > :nth-child(5) { transition-delay: 400ms; }
.stagger > :nth-child(6) { transition-delay: 500ms; }
```

### Reduced Motion

Always respect the user's motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Animation Rules

1. **No bouncing, spinning, or pulsing** — these read as attention-seeking and undermine institutional trust.
2. **No parallax scrolling** — it causes motion sickness and is associated with startup aesthetics.
3. **Maximum 500ms for any animation** — anything longer feels sluggish.
4. **Scroll animations trigger once** — elements don't re-animate when scrolling back up.
5. **Page load: content-first** — critical content (hero text, navigation) appears immediately. Decorative elements may fade in.
6. **Loading states use subtle opacity pulse**, not spinners:

```css
.loading {
  animation: pulse 2s var(--easing-default) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

## 11. EU Identity Elements

### EU Stars Badge

A gold-stars-on-blue-circle badge communicating EU jurisdiction.

```svg
<svg width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="11" fill="#003399"/>
  <!-- 12 gold stars arranged in a circle -->
  <!-- Each star is a 5-pointed polygon at 30-degree intervals -->
  <g fill="#FFCC00" transform="translate(12,12)">
    <!-- Stars at radius 8, each ~2px wide -->
  </g>
</svg>
```

**Usage:**
- Footer "Made in Europe" section
- Trust badges near CTAs
- Compliance pages
- About page

**Rules:**
- Never modify the EU flag colors (blue: `#003399`, gold: `#FFCC00`)
- Always pair with text context — the badge alone doesn't explain what it means
- Minimum size: 20px

### French Flag Accent

Vertical blue-white-red stripes for "Made in France" messaging.

```svg
<svg width="20" height="14" viewBox="0 0 20 14" fill="none">
  <rect width="6.67" height="14" fill="#002395"/>
  <rect x="6.67" width="6.67" height="14" fill="#FFFFFF"/>
  <rect x="13.33" width="6.67" height="14" fill="#ED2939"/>
</svg>
```

**Usage:**
- "Concu en France" / "Designed in France" badges
- Footer alongside company registration details
- About page

### Trust Badges

| Badge | Icon | Color | Use Case |
|---|---|---|---|
| GDPR Compliant | Shield + checkmark | Teal | Data handling sections |
| EU Data Residency | EU stars + server | Teal | Infrastructure sections |
| Made in France | French flag + text | Neutral | Footer, about page |
| DORA/NIS-2 Ready | Shield + document | Teal | Compliance pages |
| MIT Licensed | Open padlock | Success green | Pricing, open source sections |

### Badge CSS Pattern

```css
.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid var(--color-primary-200);
  color: var(--color-primary-700);
  background: white;
}

.trust-badge svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
```

---

## 12. Accessibility

### Contrast Requirements

All text must meet **WCAG 2.1 Level AA** minimum contrast ratios:

| Content Type | Minimum Ratio | Standard |
|---|---|---|
| Body text (< 18px) | 4.5:1 | AA |
| Large text (≥ 18px or 14px bold) | 3:1 | AA |
| UI components & graphics | 3:1 | AA |
| Enhanced (optional) | 7:1 | AAA |

**Verified pairings:**

| Foreground | Background | Ratio | Pass |
|---|---|---|---|
| Neutral-800 (`#2D2B28`) | White (`#FFFFFF`) | 14.3:1 | AAA |
| Neutral-800 (`#2D2B28`) | Neutral-50 (`#FAFAF8`) | 14.1:1 | AAA |
| Neutral-900 (`#1A1917`) | White (`#FFFFFF`) | 17.5:1 | AAA |
| Neutral-500 (`#8A8780`) | White (`#FFFFFF`) | 3.7:1 | AA (large) |
| Primary-500 (`#4A7C82`) | White (`#FFFFFF`) | 4.6:1 | AA (large) |
| Primary-700 (`#2F4E52`) | White (`#FFFFFF`) | 8.5:1 | AAA |
| White (`#FFFFFF`) | Primary-500 (`#4A7C82`) | 4.6:1 | AA (large) |

### Focus States

Every interactive element must have a visible focus indicator:

```css
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Remove default outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Touch Targets

All interactive elements must maintain a minimum touch target of **44x44 pixels** (WCAG 2.5.5):

```css
.interactive-element {
  min-width: 44px;
  min-height: 44px;
}

/* For inline links and small buttons, use padding to meet the target */
.inline-link {
  padding: 0.5rem;
  margin: -0.5rem;  /* Maintain visual alignment */
}
```

### Semantic HTML

- Use heading hierarchy (`h1` → `h2` → `h3`) without skipping levels.
- Use `<nav>` for navigation, `<main>` for primary content, `<section>` for thematic grouping.
- Use `<button>` for actions, `<a>` for navigation. Never use `<div>` with `onclick`.
- Form fields must have associated `<label>` elements (not placeholder-only labeling).
- Tables must have `<thead>`, `<tbody>`, and `<th scope="col|row">`.

### Screen Reader Guidance

- All images require meaningful `alt` text (or `alt=""` and `aria-hidden="true"` for decorative images).
- Icon-only buttons require `aria-label`.
- Status changes (success/error messages) use `role="alert"` or `aria-live="polite"`.
- Navigation landmarks use `aria-label` when multiple `<nav>` elements exist.
- Skip link as first focusable element: "Skip to main content."

### Color Independence

Never convey information through color alone. Pair color with:
- Text labels
- Icons or shapes
- Patterns or borders

Example: a "Pro" badge uses coral background AND the text "PRO" — the text communicates meaning independently of color.

---

## 13. Quick Reference

### Color Cheat Sheet

| Role | Variable | Hex |
|---|---|---|
| Primary action | `--color-primary-500` | `#4A7C82` |
| Primary hover | `--color-primary-600` | `#3D6268` |
| Page background | `--color-neutral-50` | `#FAFAF8` |
| Section background (alt) | `--color-secondary-200` | `#F5F0EB` |
| Body text | `--color-neutral-800` | `#2D2B28` |
| Headings | `--color-neutral-900` | `#1A1917` |
| Secondary text | `--color-neutral-500` | `#8A8780` |
| Borders | `--color-neutral-200` | `#E8E6E1` |
| Accent (energy) | `--color-coral-500` | `#E8926C` |
| Accent (tech) | `--color-periwinkle-500` | `#7C8CF5` |
| Success | `--color-success-500` | `#5DAE8B` |
| Warning | `--color-warning-500` | `#E8B86C` |

### Typography Cheat Sheet

| Element | Font | Weight | Size |
|---|---|---|---|
| h1 | Plus Jakarta Sans | 800 | clamp(2.25rem, 5vw, 3.5rem) |
| h2 | Plus Jakarta Sans | 700 | clamp(1.75rem, 3.5vw, 2.5rem) |
| h3 | Plus Jakarta Sans | 700 | clamp(1.25rem, 2.5vw, 1.75rem) |
| h4 | Plus Jakarta Sans | 700 | 1.25rem |
| Body | DM Sans | 400 | 1rem |
| Small | DM Sans | 400 | 0.88rem |
| Caption | DM Sans | 400 | 0.8rem |
| Code | JetBrains Mono | 400 | 0.875rem |
| Button | Plus Jakarta Sans | 600 | 0.938rem |
| Badge | Plus Jakarta Sans | 600 | 0.75rem |
| Nav link | Plus Jakarta Sans | 500 | 0.938rem |

### Spacing Cheat Sheet

| Context | Value |
|---|---|
| Max content width | 1200px |
| Card gap | 2rem |
| Element gap | 1.5rem |
| Section padding (mobile) | 4rem |
| Section padding (desktop) | 8rem |
| Card padding | 2rem |
| Card border-radius | 1rem (xl) |
| Button border-radius | 0.75rem (lg) |
| Badge border-radius | 9999px (pill) |

### Animation Cheat Sheet

| Type | Duration | Easing |
|---|---|---|
| Hover (fast) | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Transition (normal) | 250ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Scroll reveal | 400ms | `cubic-bezier(0, 0, 0.2, 1)` |
| Stagger delay | +100ms per item | — |
| Hover lift | -1px to -2px | — |

---

## Appendix: Full CSS Variables

Copy this block into any project to bootstrap the Corelix design system:

```css
:root {
  /* Colors */
  --color-primary-50: #EDF5F6;
  --color-primary-100: #D4E8EA;
  --color-primary-200: #A8D1D5;
  --color-primary-300: #7BB9BF;
  --color-primary-400: #5BA0A7;
  --color-primary-500: #4A7C82;
  --color-primary-600: #3D6268;
  --color-primary-700: #2F4E52;
  --color-primary-800: #233A3D;
  --color-primary-900: #172627;

  --color-secondary-50: #FFFDFB;
  --color-secondary-100: #FBF7F2;
  --color-secondary-200: #F5F0EB;
  --color-secondary-300: #EDE5DC;
  --color-secondary-400: #DDD3C6;

  --color-coral-300: #F0B5A0;
  --color-coral-400: #EC9E83;
  --color-coral-500: #E8926C;
  --color-coral-600: #D47A54;

  --color-periwinkle-300: #A3ADF8;
  --color-periwinkle-400: #8E9AF6;
  --color-periwinkle-500: #7C8CF5;
  --color-periwinkle-600: #5D6FE8;

  --color-success-400: #72C0A0;
  --color-success-500: #5DAE8B;
  --color-success-600: #4A9474;

  --color-warning-400: #EDC480;
  --color-warning-500: #E8B86C;

  --color-neutral-50: #FAFAF8;
  --color-neutral-100: #F5F4F0;
  --color-neutral-200: #E8E6E1;
  --color-neutral-300: #D1CFCA;
  --color-neutral-400: #A8A59E;
  --color-neutral-500: #8A8780;
  --color-neutral-600: #6B6862;
  --color-neutral-700: #4A4844;
  --color-neutral-800: #2D2B28;
  --color-neutral-900: #1A1917;

  /* Typography */
  --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body: 'DM Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(45, 43, 40, 0.05);
  --shadow-md: 0 4px 12px rgba(45, 43, 40, 0.08);
  --shadow-lg: 0 10px 40px rgba(45, 43, 40, 0.08);
  --shadow-primary: 0 4px 12px rgba(74, 124, 130, 0.25);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-enter: cubic-bezier(0, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 1, 1);
}
```

---

*This document is the single source of truth for the Corelix visual identity. When in doubt, refer here. When this document is silent, choose the more restrained option.*
