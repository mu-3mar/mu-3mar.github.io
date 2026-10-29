# MA Design System — Brand Identity

> **Owner:** Muhammad Ammar
> **Purpose:** A portable identity reference. Any new site built under this brand should feel like it belongs to the same family — **not a pixel-perfect clone**.
> **Source of truth:** extracted from `src/styles/theme.css`, `src/styles/main.css`, `src/config/theme.config.ts`, `src/components/common/FloatingLogoField.tsx`.

---

## 1. How to use this document

This file has two layers. Respect the layers when starting a new project.

| Layer | Meaning | Freedom |
| --- | --- | --- |
| **CORE** | Signature elements that make the brand recognizable. Do not change. | Fixed |
| **FLEX** | Supporting decisions. Re-tune per project while staying in the same spirit. | Flexible |

**The rule of thumb:** a visitor should be able to open two different sites of mine side by side and say *"same person, different project"* — never *"different person"*. Same DNA, different expression.

---

## 2. Brand Core

- **Personality:** precise, technical, warm-industrial. Confident, not loud. Dark-first.
- **One accent, used sparingly.** A single orange-red carries every emphasis. No second accent hue.
- **Warm charcoal, never neutral gray.** All dark surfaces carry a warm brown/red undertone.
- **Big, heavy, tightly-tracked type.** Display headings are heavy weight with negative letter-spacing.
- **Soft geometry.** Rounded panels, pill controls, hairline 1px borders.
- **Quiet motion.** Motion is subtle, slow, continuous — never bouncy or flashy.

Mood words: `dark-first` · `warm charcoal` · `single accent` · `hairline borders` · `pill shapes` · `ambient glow` · `calm drift`

---

## 3. Color System

### 3.1 Brand Accent (CORE — the single most important token)

**Brand Orange-Red — `#F04B24`.** This is the identity. It marks active state, primary action, focus, and emphasis. It is a *scarce* resource: if everything is accented, nothing is.

| Token | Dark theme | Light theme | Use |
| --- | --- | --- | --- |
| `--accent` | `#F04B24` | `#F04B24` | Fills, borders, active state |
| `--accent-fg` | `#F04B24` | `#D93C1A` | Accent-colored **text/icons** on the page background |
| `--accent-hover` | `#FF7048` | `#D93C1A` | Hover fill |
| `--accent-active` | `#D93C1A` | `#A92D19` | Pressed fill |
| `--accent-soft` | `rgba(240,75,36,0.15)` | `rgba(240,75,36,0.10)` | Tinted backgrounds (chips, icon tiles) |
| `--accent-strong` | `rgba(240,75,36,0.28)` | `rgba(240,75,36,0.22)` | Borders on tinted elements |
| `--accent-glow` | `rgba(240,75,36,0.20)` | `rgba(240,75,36,0.12)` | Focus rings, soft shadows |
| `--accent-text` | `#FFFFFF` | `#FFFFFF` | Text/icons **inside** an accent fill |

> **Contrast rule (CORE):** text placed *on* an accent fill is always `#FFFFFF`. Accent used *as text* on the page background uses `--accent-fg` (darkened in light theme for WCAG AA).

### 3.2 Dark Theme — Warm Charcoal Surface Ramp (CORE direction, FLEX exact steps)

Surfaces ascend a warm ramp. Never use pure black or cool/blue-gray.

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#141211` | Page base |
| `--bg-soft` | `#1C1816` | Secondary base |
| `--panel` | `#211B18` | Cards, panels |
| `--panel-strong` | `#2A221E` | Nested/raised surfaces, inputs |
| `--panel-hover` | `#2E2521` | Hover surface |
| `--border` | `#382A25` | Standard 1px border |
| `--border-subtle` | `#2D221E` | Dividers, faint borders |
| `--header-bg` | `rgba(20,18,17,0.85)` | Glass header fill |
| `--header-border` | `rgba(255,248,245,0.08)` | Glass header hairline |

### 3.3 Light Theme (FLEX — warm off-white, not pure white)

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#FFF8F5` | Warm paper base |
| `--bg-soft` | `#F7EEE9` | Secondary base |
| `--panel` | `#FFFFFF` | Cards |
| `--panel-strong` | `#F3E8E2` | Nested surfaces, inputs |
| `--panel-hover` | `#FAF2ED` | Hover surface |
| `--border` | `#EBDCD5` | Standard border |
| `--border-subtle` | `rgba(41,32,29,0.06)` | Dividers |
| `--header-bg` | `rgba(255,248,245,0.88)` | Glass header fill |
| `--header-border` | `rgba(41,32,29,0.08)` | Glass header hairline |

### 3.4 Text Ramp

| Token | Dark | Light | Role |
| --- | --- | --- | --- |
| `--text` | `#FFF8F5` | `#29201D` | Primary — warm white / warm near-black |
| `--muted` | `#C7BBB5` | `#6E625C` | Body copy, secondary |
| `--soft` | `#A99A93` | `#806D64` | Meta, captions, footer |
| `--placeholder` | `rgba(199,187,181,0.40)` | `rgba(41,32,29,0.38)` | Input placeholders |

> **CORE:** text colors are always *warm* (red/yellow undertone), never cool gray. This is what keeps dark and light themes in the same family.

### 3.5 Semantic Colors

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--danger` | `#ff6b6b` | `#dc2626` | Errors |
| `--success` | `#4ade80` | `#16a34a` | Success |
| Live/active indicator | `#22c55e` | `#22c55e` | Pulsing "currently active" dot |

Semantic hues are additive only — they never replace the accent.

### 3.6 Ambient Gradients (CORE — signature brand glow)

A single warm radial glow sits behind the page. This is the brand's "light source".

```css
--ambient-top-gradient: radial-gradient(circle at top, rgba(240, 75, 36, 0.10), transparent 38%);
--portrait-glow:        radial-gradient(circle at center, rgba(240, 75, 36, 0.16), transparent 62%);
```

Applied as `background: var(--ambient-top-gradient), var(--bg);` on `body`.

---

## 4. Typography

**Font family (CORE):** `Inter`, with system fallbacks.

```css
font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

**Negative tracking is part of the identity (CORE).** Large text is always tightened; the bigger the text, the tighter.

| Style | Size | Weight | Letter-spacing | Line-height |
| --- | --- | --- | --- | --- |
| Display / hero name | `clamp(2.8rem, 5.5vw, 5.8rem)` | 900 | `-0.07em` | `0.95` |
| Page title (h1) | `clamp(2.2rem, 3.5vw, 3.6rem)` | 800 | `-0.05em` | `1.1` |
| Section heading (h2) | `clamp(2.2rem, 3.2vw, 3.4rem)` | 800 | `-0.06em` | `1.05` |
| Headline / sub-hero | `clamp(1.3rem, 2.2vw, 2.1rem)` | 700 | `-0.04em` | `1.25` |
| Professional title | `clamp(1.2rem, 2vw, 1.8rem)` | 600 | `-0.03em` | — |
| Card title | `1.35rem` | 700 | `-0.03em` | `1.3` |
| Panel heading | `1.25rem` | 700 | `-0.02em` | — |
| Body | `0.95–1.08rem` | 400 | normal | `1.6–1.75` |
| Nav link | `0.94rem` | 500 | `-0.01em` | `1` |
| Eyebrow / label | `0.78rem` | 700 | `+0.18em`, uppercase | — |

**Rules:**
- Display text: weight 800–900, tracking `-0.05em` to `-0.07em`.
- Body text: weight 400, never tightened, `--muted` color, line-height ≥ 1.6.
- Use `clamp()` for all display sizes so type scales fluidly (CORE).
- Eyebrows are the one place allowed **positive** tracking: uppercase, wide, accent-colored.

---

## 5. Layout, Spacing & Radius

- **Max content width (CORE):** `1400px`, centered. Applied to header, content, and footer.
- **Page padding:** `2.2rem 2rem 4rem` (desktop) → `1.5rem 1.2rem 3rem` (mobile).
- **Breakpoints:** `980px` (layout collapses to single column, nav → mobile menu) and `640px` (phone tuning).
- **Section entrance:** sections are spaced with `padding: 1.5rem 0 0`.

### 5.1 Radius Scale

| Element | Radius |
| --- | --- |
| Nav bar, chips, filters, tags, pills, badges | `999px` / `9999px` (full pill) |
| Cards (`project-card`) | `1.5rem` |
| Panels / groups (`skill-group`, `detail-panel`) | `1.2rem` – `1.3rem` |
| Media frames (`detail-image-wrap`) | `1.4rem` |
| Buttons, icon tiles, inputs | `0.85rem` – `0.95rem` |
| Small chips (`.chip`) | `0.55rem` |

**CORE shape language:** two families only — **fully-rounded pills** for interactive controls, and **soft rounded rectangles** (`0.85rem`–`1.5rem`) for surfaces. No sharp corners, no square buttons.

---

## 6. Surfaces, Borders & Elevation

- **Hairline borders (CORE):** every surface is defined by `1px solid var(--border)`. The border does more work than the shadow.
- **Glassmorphism header (CORE):**

```css
backdrop-filter: blur(14px);
-webkit-backdrop-filter: blur(14px);
background: var(--header-bg);
border-bottom: 1px solid var(--header-border);
```

- **Card shadow:**

```css
/* dark */  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
/* light */ --shadow-card: 0 4px 20px rgba(41, 32, 29, 0.06);
```

- **Accent glow shadow** (used on primary buttons, active nav, badges): `0 2px 10px var(--accent-glow)` up to `0 6px 20px var(--accent-glow)`.
- Elevation is communicated by surface-step + border + a *soft* shadow — never by a hard drop shadow.

---

## 7. Component Shape Language

| Component | Spec |
| --- | --- |
| **Primary button** | Accent fill, white text, radius `0.95rem`, weight 700, hover `translateY(-2px)` + stronger glow |
| **Secondary button** | `--panel` fill, 1px border, text color; hover turns accent border + `accent-soft` bg + `translateY(-2px)` |
| **Nav bar** | Pill container (`9999px`) on `--panel-strong` with 1px border; active link = accent fill, white text |
| **Icon button** | `2.85rem` square, radius `0.95rem`, `--panel` + 1px border, hover → accent |
| **Chip / filter / tag** | Full pill, `--panel` + 1px border; active = accent fill + white text |
| **Card** | `--panel` fill, 1px border, `1.5rem` radius, `--shadow-card`; hover lifts `-6px` + accent border |
| **Panel** | `--panel` fill, 1px border, `1.2–1.4rem` radius, padded `1.8rem` |
| **Input** | `--panel-strong` fill, radius `0.85rem`; focus = accent border + `0 0 0 3px var(--accent-glow)` |
| **Eyebrow label** | 0.78rem, uppercase, `+0.18em`, accent, weight 700 |
| **Timeline node** | 2px vertical track, accent dot with 3px panel-colored ring; active node pulses green |
| **List bullet** | Custom `•` in accent color, indented `1.2rem` |

**Interaction feedback (CORE):** every hover is a tiny map — `translateY(-2px)` (controls), `-4px` (tiles), `-6px` (cards), `translateX(4px)` (horizontal cards), or `translateX(-4px)` (back link). Links in card footers grow their gap on hover instead of moving.

---

## 8. Motion & Animation

### 8.1 Timing Tokens (CORE)

| Context | Duration | Easing |
| --- | --- | --- |
| Interactive hover / focus | `180ms` | `ease` |
| Theme / color surface change | `220ms` | `ease` |
| Image zoom, small transforms | `240ms` – `300ms` | `ease` |
| Section entrance | `420ms` | `ease` |

### 8.2 Entrance Animation (signature)

```css
.page-section { animation: fadeInUp 420ms ease both; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 8.3 Ambient / Idle Motion

- **Floating tech-logo field** — the brand's "living background":
  - Each icon drifts along its own **irregular 8-waypoint closed orbit** (`logoSwim`), never a clean circle.
  - Duration `11–29s`, `ease-in-out`, `infinite`, direction randomized per icon.
  - Layered 3D lean (`logoLean`): `rotateX/Y ±7deg`, `rotateZ ±5deg`, `scale 0.93→1.06`, alternating.
  - Depth opacity `0.82–1.0`; field opacity `0.88` (dark) / `0.80` (light), `1` on hover.
  - **Deterministic randomness:** seeded PRNG (FNV-1a hash → mulberry32) keyed by `${variant}-${name}`, so motion is stable across reloads.
  - **Non-overlap guarantee:** each icon's travel is capped at half the distance to its nearest neighbour minus margins (`GLYPH_FACTOR 1.18`, `ORBIT_MARGIN 8px`). Horizontal and vertical travel are computed independently so icons near an edge still drift.
- Hover on an ambient icon: accent color + `drop-shadow(0 0 16px var(--accent-glow))`.
- Pulsing live indicator: green ring expanding every `2.2s`.
- Theme toggle icon rotates `20deg` on hover (`240ms`).

### 8.4 Motion Rules (CORE)

1. Motion is **slow and calm**. Nothing snaps or bounces.
2. Hover feedback is **subtle displacement + accent color**, never scale-heavy.
3. Idle motion must be **deterministic** (seeded), not re-randomized per render.
4. Idle elements must **never overlap or collide**.
5. **Always respect reduced motion:**

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

---

## 9. Iconography & Imagery

- **Tech/skill icons:** real brand marks (Simple Icons) mixed with line icons (Lucide) at ~1.8px stroke weight.
- Icons inherit `currentColor`; they turn accent on hover.
- Icon tiles: `rectangular-soft` (`0.8rem`) with `accent-soft` fill + `accent-strong` border.
- Project media: `16 / 10` aspect ratio, `object-fit: cover`, gentle `scale(1.04)` on card hover.
- Portraits sit on a circular **accent radial glow** with `blur(28px)`.

---

## 10. Logo System & Assets

### 10.1 Asset inventory & naming convention

Assets are named by **role**, not by version. Keep these exact filenames in every project so the code, the generator script, and this document all transfer unchanged.

| Role | File(s) | Purpose |
| --- | --- | --- |
| Master logo | `/images/logo.png` (+ `logo-light.png`, `logo-dark.png`) | Transparent RGBA source that everything else is derived from |
| Header brand mark (animated) | `/logo-animated.html` (+ `logo-animated-dark.html`, `logo-animated-light.html`) | The moving logo in the site header |
| Tab icon (favicon) | `/favicon.svg`, `/favicon.ico`, `/favicon-32.png`, `/favicon-48.png`, `/favicon.png` (64) | Browser tab + bookmarks |
| Installable app icons | `/icon-192.png`, `/icon-512.png`, `/manifest.webmanifest` | Home-screen icon after "Install" |
| Monogram fallback | rendered text, e.g. `MA` | Weight 800, `--accent-fg` color, `0.95rem` radius tile |
| Profile avatars | `/images/profile_dark_theme.png`, `/images/profile_light_theme.png` | Portrait per theme |

`logo-dark.png` is produced by **inverting the visible pixels** of the master (not by inverting alpha). The master is the single source of truth; the variants are generated.

### 10.2 How the code consumes a logo file (format detection)

The brand mark component resolves a logo through a fixed four-step cascade:

1. **Theme pick** — `light → logoLightUrl`, `dark → logoDarkUrl`, fallback `logoUrl`.
2. **`.html` in the path → iframe embed.** The URL is appended with `?theme=<theme>&v=<n>` and rendered in a transparent, non-scrolling, `aria-hidden` iframe.
3. **Anything else (PNG/SVG/JPG) → `<img>`**, with an `onError` handler.
4. **`logoType: 'text'`, missing path, or image error → monogram tile** (`logoText`).

The frame is always `.brand-logo-wrap` — `5.6rem × 3.8rem`, fully transparent background, `scale(1.08)` on hover.

> **What this means when handing over a new logo:** the file *extension declares the behaviour*. Hand over an animated `.html` and it automatically becomes the animated header mark. Hand over only images and it renders statically. Hand over nothing broken and it degrades to the monogram. No component code changes are ever needed — only the branding paths are registered.

### 10.3 The animated logo — how the animation is built

The animated logo is a **single self-contained HTML file**: one inline `<svg>` plus one inline `<script>`. No external libraries, no build step.

**Structure**
- Root SVG: `width="1080" height="1080" viewBox="100 240 880 600"`.
- Two overlapping states inside that one SVG:
  - `#logo` — the static monogram drawing (the resting state).
  - `#morph` — four empty paths (`#m0`–`#m3`) that only exist during a transition.
- A `#lid` rect (`LID_H = 40.86`) used for the "wink".

**Driving function**
- A single `render(t)` where `t` is **elapsed seconds**, driven by `requestAnimationFrame`. Motion is purely time-based — never scroll- or event-triggered.
- The loop is seamless and self-resetting: `t = ((t % LOOP) + LOOP) % LOOP` with `LOOP = 6`.

**The 6-second loop**

| Time (s) | Phase | Detail |
| --- | --- | --- |
| `0.00 – 1.40` | Logo at rest | `#logo` visible, `#morph` hidden |
| `1.40 – 1.95` | Logo → letters | 4 pieces break apart **left piece first**, `0.05s` stagger, `0.4s` per morph, `inOutCubic` |
| `1.95 – 3.20` | Letters held | Morph hidden, letter state shown |
| `3.20 – 3.75` | Letters → logo | Merge back, **right glyph first**, same stagger/easing |
| `3.75 – 4.25` | Pop | Wrapper scale `100% → 120% → 96% → 100%` (`outCubic` + `inOutSine`) |
| `4.90 – 5.20` | Wink | `#lid` height `0 → 40.86 → 0` (`outCubic` in, `inOutSine` out) |

**Morph technique**
Each of the four paths carries a matched **point set** for `src` and `dst`. Every frame, the `d` attribute is rebuilt by linearly interpolating point-by-point and re-emitted as `M`/`L`/`Z`. Point counts must match between `src` and `dst` for the morph to be plausible.

**Scale & color**
- The pop is applied to the wrapper group `#lg`: `translate(540,540) scale(s) translate(-540,-540)` — scaling about the canvas center.
- All shapes paint with `currentColor`; the page sets `--logo-color` (default `#F04B24`). Static shape styling: `fill: currentColor; stroke: currentColor; stroke-width: 12px; paint-order: stroke fill` (the stroke gives the mark its bold, rounded weight).

**URL parameters (the host contract)**

| Param | Effect |
| --- | --- |
| `?theme=dark` / `?theme=light` | Theme selection (both currently use the brand accent `#F04B24`) |
| `?color=<hex>` | Overrides the logo color entirely |
| `?manual` | Disables autoplay so the host can drive `window.render(t)` itself |

**Rules for a new animated logo (CORE):**
1. Ship it as **one self-contained HTML file** — inline SVG + inline script, zero external dependencies.
2. Transparent background, `overflow: hidden`, `color-scheme: normal`.
3. Keep `render(t)` **time-based** and make the loop seamless.
4. Accept `?theme=`, `?color=`, and `?manual` so the host keeps control.
5. Paint with `currentColor` so the brand accent token drives it.
6. It will run inside an iframe — stay transparent, and expect `requestAnimationFrame` to throttle when offscreen.

### 10.4 Three logos, three different jobs

This is the part that is easy to get wrong: **the animated logo is never the tab icon and never the installed app icon.**

| Job | Where it appears | Asset used | Notes |
| --- | --- | --- | --- |
| **Header brand mark** | Top-left of the site, in-page only | `logo-animated.html` | Themed via `?theme=`; iframe-embedded |
| **Browser tab (favicon)** | Browser tab strip, bookmarks bar | `favicon.svg` + `favicon.ico` + 32/48/64 PNG | Square, logo-derived, white silhouette stroke |
| **Installed app icon** | Home screen / desktop after "Install" | `icon-192.png`, `icon-512.png` via `manifest.webmanifest` | `purpose: "any maskable"`, `theme_color` & `background_color` = `#141211` |
| **Static / share / fallback** | OG-style cards, loaders, anywhere an img is needed | `logo.png` family | Static, transparent, tightly cropped |

Declared in `index.html` as the tab icon set (with cache-busting `?v=N` on every link):
`favicon-32.png`, `favicon-48.png`, `favicon.png`, `favicon.svg`, `favicon.ico`, and `apple-touch-icon → icon-192.png`.
Declared in `manifest.webmanifest` as the install icon set: `icon-192.png` and `icon-512.png`, both `any maskable`.

**CORE:** the tab icon and the install icon are always **static square PNG/SVG derived from the master**; the animated HTML logo is exclusively the in-page header mark. Bump the `?v=` number whenever a logo file changes.

### 10.5 The asset generation pipeline

`scripts/generate_logos.py` (Pillow + NumPy) turns one master into the whole icon set:

1. Open `public/images/logo.png` as RGBA and **crop transparent padding** (alpha `> 15` bounding box).
2. Save the cleaned master as `logo.png` and `logo-light.png`; invert the visible pixels for `logo-dark.png`.
3. For each target size (favicons `16/32/48/64`, install icons `192/512`): scale to fit with a `1–2px` margin, center on a square transparent canvas, then stamp a **white silhouette stroke** by dilating the alpha mask (`MaxFilter`, `3px` at ≤64, `5px` above). This is what keeps the hair-thin parts of the mark readable on a dark browser tab.
4. Emit `favicon.ico` with 16/32/48/64 frames, and write `favicon.svg` as a base64-embedded PNG.

**What this demands of the master file (CORE):**
- RGBA PNG with a **genuinely transparent** background (alpha, not a white/black box).
- A solid, high-contrast mark — the silhouette-stroke trick assumes a strong alpha silhouette.
- Roughly square; padding is cropped automatically.
- At least **512px** tall so the install icon stays crisp.

### 10.6 Hand-over contract for a new site

Hand over these files, and the system already knows what to do:

| You hand over | The system does |
| --- | --- |
| `logo.png` — transparent RGBA master, ≥512px | Crops it, derives `logo-light`/`logo-dark`, then generates tab icons + PWA install icons. **Required** for tab/install icons. |
| `logo-animated.html` — self-contained, `currentColor`, `?theme`/`?color`/`?manual` | Wires it as the animated header mark via the iframe path. Optional — without it the header logo is static. |
| A monogram string (e.g. `MA`) | Uses it as the fallback tile when no image loads. |

**Degradation is graceful:** with only an image you get a static header logo but working tab/install icons; with only an animated HTML you get the animated header but **cannot** derive tab/install icons (the PNG master is mandatory for those).

**Registration is configuration, not code:** paths live in the branding config (`logoType`, `logoUrl`, `logoDarkUrl`, `logoLightUrl`, `logoText`) and the theme names live in the manifest (`theme_color` / `background_color` = `#141211`).

---

## 11. Accessibility

- Accent-as-text uses `--accent-fg`, darkened in light theme, to hold WCAG AA.
- Text on accent fills is always `#FFFFFF`.
- Focus is always visible: accent border + `0 0 0 3px var(--accent-glow)` ring.
- Respect `prefers-reduced-motion` (see §8.4).
- Support both themes via `data-theme="dark" | "light"` on `<html>`, with `color-scheme` set accordingly.

---

## 12. Copy-Paste Token Block

Drop this into a new project as `brand-tokens.css` and build from it.

```css
:root, [data-theme='dark'] {
  color-scheme: dark;

  /* Surfaces — warm charcoal */
  --bg: #141211;
  --bg-soft: #1C1816;
  --panel: #211B18;
  --panel-strong: #2A221E;
  --panel-hover: #2E2521;
  --border: #382A25;
  --border-subtle: #2D221E;
  --header-bg: rgba(20, 18, 17, 0.85);
  --header-border: rgba(255, 248, 245, 0.08);

  /* Text — warm */
  --text: #FFF8F5;
  --muted: #C7BBB5;
  --soft: #A99A93;
  --placeholder: rgba(199, 187, 181, 0.40);

  /* Brand accent — one hue only */
  --accent: #F04B24;
  --accent-fg: #F04B24;
  --accent-hover: #FF7048;
  --accent-active: #D93C1A;
  --accent-soft: rgba(240, 75, 36, 0.15);
  --accent-strong: rgba(240, 75, 36, 0.28);
  --accent-glow: rgba(240, 75, 36, 0.20);
  --accent-text: #FFFFFF;

  /* Semantic */
  --danger: #ff6b6b;
  --success: #4ade80;

  /* Elevation & ambience */
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --ambient-top-gradient: radial-gradient(circle at top, rgba(240, 75, 36, 0.10), transparent 38%);
  --portrait-glow: radial-gradient(circle at center, rgba(240, 75, 36, 0.16), transparent 62%);
}

[data-theme='light'] {
  color-scheme: light;

  --bg: #FFF8F5;
  --bg-soft: #F7EEE9;
  --panel: #FFFFFF;
  --panel-strong: #F3E8E2;
  --panel-hover: #FAF2ED;
  --border: #EBDCD5;
  --border-subtle: rgba(41, 32, 29, 0.06);
  --header-bg: rgba(255, 248, 245, 0.88);
  --header-border: rgba(41, 32, 29, 0.08);

  --text: #29201D;
  --muted: #6E625C;
  --soft: #806D64;
  --placeholder: rgba(41, 32, 29, 0.38);

  --accent: #F04B24;
  --accent-fg: #D93C1A;
  --accent-hover: #D93C1A;
  --accent-active: #A92D19;
  --accent-soft: rgba(240, 75, 36, 0.10);
  --accent-strong: rgba(240, 75, 36, 0.22);
  --accent-glow: rgba(240, 75, 36, 0.12);
  --accent-text: #FFFFFF;

  --danger: #dc2626;
  --success: #16a34a;

  --shadow-card: 0 4px 20px rgba(41, 32, 29, 0.06);
  --ambient-top-gradient: radial-gradient(circle at top, rgba(240, 75, 36, 0.08), transparent 40%);
  --portrait-glow: radial-gradient(circle at center, rgba(240, 75, 36, 0.14), transparent 65%);
}
```

---

## 13. New-Project Checklist

Copy this into any new build and confirm each line:

- [ ] Dark-first, with a warm charcoal (`#141211` family) surface ramp — no cool grays, no pure black.
- [ ] Single accent `#F04B24`, used only for active/primary/emphasis.
- [ ] White `#FFFFFF` text on accent fills; `--accent-fg` for accent-as-text.
- [ ] Type is Inter; displays are weight 800–900 with `-0.05em` to `-0.07em` tracking.
- [ ] Interactive controls are full pills; surfaces are soft-rounded (`0.85rem`–`1.5rem`).
- [ ] Every surface defined by a `1px` hairline border.
- [ ] Sticky glass header with `blur(14px)`.
- [ ] Warm radial accent glow behind the page top.
- [ ] Motion: `180ms` hover, `420ms` `fadeInUp` entrance, calm and deterministic, reduced-motion respected.
- [ ] Max content width `1400px`.
- [ ] Logo assets follow the role-based naming (`logo.png` master, `logo-animated.html`, `favicon.*`, `icon-192/512.png`).
- [ ] Master logo is a transparent RGBA PNG ≥512px, so tab and install icons can be generated from it.
- [ ] Animated logo (if used) is one self-contained HTML file, `currentColor`-based, and accepts `?theme` / `?color` / `?manual`.
- [ ] Tab icon = static `favicon.*`; install icon = static `icon-192/512.png` via the manifest. The animated logo is header-only.
- [ ] Icon links carry a bumped `?v=N` cache-buster; manifest `theme_color` / `background_color` = `#141211`.
- [ ] "Same family, not identical": layout, section order, and surface steps may differ — the tokens above stay.

---

*Made by Muhammad Ammar.*
