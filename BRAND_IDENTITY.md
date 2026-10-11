# Muhammad Ammar — Visual Brand Identity Specification

> Authoritative human-readable brand identity for the personal brand of **Muhammad Ammar** (Machine Learning Engineer).
> Extracted from the live portfolio at https://ammar-ml.vercel.app and verified against its source code.
> Companion files: `design-tokens.css`, `ASSET_INVENTORY.md`, `AI_DESIGN_PROMPT.md`, `BRAND_AUDIT.md`.

---

## 1. Brand Overview & Visual Direction

### 1.1 Personality & Philosophy

The brand is **dark, precise, and quietly premium**. It communicates engineering rigor and technical depth without visual noise. The design language is:

- **Minimalist** — near-black backgrounds, generous whitespace, a single accent color.
- **Sophisticated** — tight letter-spacing, heavy-weight display type, soft gold accents.
- **Technical** — floating technology logos, data/computer-vision subject matter, monospace-adjacent precision.
- **Approachable** — a friendly illustrated portrait, warm gold highlight, smooth micro-interactions.

### 1.2 How ML/AI/Engineering is Communicated

- **Dark canvas + gold highlight** evokes a "premium tooling / developer console" aesthetic familiar to engineers.
- **Floating technology logos** (Python, PyTorch, FastAPI, etc.) animate gently in the background of the Home and Skills pages, signaling the technical stack.
- **Typography is data-dense but calm** — heavy display headings contrast with muted, well-spaced body text.
- **Project cards** emphasize real engineering artifacts (YOLO, ONNX, TensorRT, FastAPI) with clean metadata and chip taxonomies.

### 1.3 The Dark/Gold Relationship

- The surface is `#111111` (near-black, not pure black — avoids harsh contrast).
- The accent is a warm **gold `#f4df3d`** used sparingly: active nav links, CTAs, the professional title, focus rings, timeline dots, and list bullets.
- Gold is **never** used for large body text; it is a highlight color only.
- A subtle radial gold glow bleeds from the top of the page and behind the portrait, adding depth without decoration.

### 1.4 Recognizable Brand Signatures (Must Preserve)

1. Near-black `#111111` background with a faint gold radial glow at the top.
2. Single gold accent `#f4df3d` for CTAs, active states, and highlights.
3. Heavy, tightly-tracked display headings (font-weight 900, negative letter-spacing).
4. Translucent, blurred sticky header with a gold underline on the active link.
5. Pills/buttons with `border-radius: 999px`.
6. Rounded cards (`1.2rem`) with a 1px subtle white border and near-transparent white surface.
7. The geometric white+gold personal logo mark.
8. Floating single-color technology logos in the background of showcase sections.

### 1.5 Essential vs. Adaptive Elements

| Essential (preserve everywhere) | Adaptive (per product) |
|---|---|
| `#111111` background + gold `#f4df3d` accent | Number of sections, content density |
| Inter / system sans-serif with tight display tracking | Grid column counts (2, 3, 4 as needed) |
| Pill buttons (`999px`) and rounded cards (`1.2rem`) | Hero layout (split, centered, full-bleed) |
| Translucent blurred sticky header | Whether floating logos are used |
| Gold focus rings and active underlines | Image aspect ratios |
| Fade-in-up section entrance (420ms) | Hover micro-interaction specifics |

---

## 2. Color System

All values verified from `src/App.css` `:root` block and live rendering.

### 2.1 Core Palette

| Token | HEX / Value | RGB | Usage | Priority | Source |
|---|---|---|---|---|---|
| `--color-bg` | `#111111` | 17, 17, 17 | Page background | Core | Verified (code) |
| `--color-bg-soft` | `#171717` | 23, 23, 23 | Elevated surface (defined, lightly used) | Supporting | Verified (code) |
| `--color-surface` | `rgba(255,255,255,0.02)` | — | Card/panel background | Core | Verified (code) |
| `--color-surface-strong` | `rgba(255,255,255,0.045)` | — | Emphasized surface | Supporting | Verified (code) |
| `--color-text` | `#ffffff` | 255, 255, 255 | Headings, primary text, buttons on gold | Core | Verified (code) |
| `--color-text-muted` | `rgba(255,255,255,0.76)` | — | Body paragraphs, secondary text | Core | Verified (code) |
| `--color-text-soft` | `rgba(255,255,255,0.62)` | — | Eyebrows, meta labels, footer | Core | Verified (code) |
| `--color-accent` | `#f4df3d` | 244, 223, 61 | Gold — CTAs, active nav, highlights, focus | Core | Verified (code) |
| `--color-accent-soft` | `rgba(244,223,61,0.14)` | — | Gold tint for hover backgrounds, tech marks | Supporting | Verified (code) |
| `--color-accent-strong` | `rgba(244,223,61,0.22)` | — | Stronger gold tint | Supporting | Verified (code) |
| `--color-border` | `rgba(255,255,255,0.12)` | — | Default card/input border | Core | Verified (code) |
| `--color-border-subtle` | `rgba(255,255,255,0.08)` | — | Header bottom border, dividers | Supporting | Verified (code) |
| `--color-success` | `#a7f3a6` | 167, 243, 166 | Form success message | Supporting | Verified (code) |
| `--color-danger` | `#ffb4b4` | 255, 180, 180 | Form error message | Supporting | Verified (code) |

### 2.2 Decorative Gold (Logo & Glow)

| Token | Value | Usage |
|---|---|---|
| `--color-logo-white` | `#F5F5F5` | White paths in `personal-logo.svg` |
| `--color-logo-gold` | `#FFC107` | Gold accent inside `personal-logo.svg` (slightly warmer than UI gold) |
| `--gradient-body-top` | `radial-gradient(circle at top, rgba(244,223,61,0.07), transparent 30%)` | Ambient page-top glow |
| `--gradient-portrait-glow` | `radial-gradient(circle at center, rgba(244,223,61,0.12), transparent 62%)` | Glow behind portrait |

### 2.3 Color Usage Rules

- **Backgrounds:** Always `#111111` (or `rgba(17,17,17,0.76)` for the translucent header). Do not use pure black `#000`.
- **Text on dark:** White `#fff` for headings, `rgba(255,255,255,0.76)` for body, `rgba(255,255,255,0.62)` for meta.
- **Text on gold:** Use `#111111` (dark) — never white on gold, as contrast is poor.
- **Gold accent:** Use for primary actions, active states, focus rings, and small highlights. Do not flood large areas with gold.
- **Borders:** 1px `rgba(255,255,255,0.12)` for cards/inputs; `rgba(255,255,255,0.08)` for hairlines.
- **Gradients:** Only gold-on-transparent radial gradients for ambient glow. No multi-color linear gradients.

---

## 3. Typography System

### 3.1 Font Family

```
font-family: Inter, 'Segoe UI', Helvetica, Arial, sans-serif;
```

**Verified:** No web font is loaded (no Google Fonts / `<link>` / `@font-face` in the network requests or source). `Inter` is used only if installed on the user's system; otherwise it falls back to `Segoe UI` then the system sans-serif.

**For future projects:** If exact rendering is required, load Inter from Google Fonts or self-host it. Otherwise the system fallback is acceptable and keeps the brand lightweight.

### 3.2 Type Scale

All `clamp()` values are verified from `src/App.css`.

| Role | Size | Weight | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|
| Hero name | `clamp(2.8rem, 5vw, 5.5rem)` | 900 | 0.98 | 0 (reset from earlier -0.08) | `--color-text` |
| Hero professional title | `clamp(1.35rem, 2.5vw, 2rem)` | 900 | 1.3 | — | `--color-accent` |
| Hero headline | `clamp(1.2rem, 2vw, 1.7rem)` | 500 | 1.35 | 0 | `--color-text` |
| Section title (h2) | `clamp(2.2rem, 3vw, 3.8rem)` | (default bold) | 1 | -0.07em | `--color-text` |
| Detail page h1 | `clamp(2.4rem, 4vw, 4.2rem)` | — | 1 | -0.08em | `--color-text` |
| Card title (h3) | `clamp(1.45rem, 1.8vw, 2rem)` | — | — | -0.06em | `--color-text` |
| Panel title (h3) | `1.12rem` | — | — | -0.04em | `--color-text` |
| Body (hero summary) | `1.08rem` | 400 | 1.8 | — | `--color-text-muted` |
| Body (card/list) | (inherit) | 400 | 1.7 | — | `--color-text-muted` |
| Nav link | `0.96rem` | 400 | 1 | -0.02em | `--color-text-muted` (gold when active) |
| Eyebrow | `0.76rem` | — | — | 0.18em (uppercase) | `--color-text-soft` |
| Meta label | `0.7rem` | — | — | 0.12em (uppercase) | `--color-text-soft` |
| Chip | `0.76rem` | — | — | — | `--color-text` |
| Button | (inherit) | 700 | 1 | — | gold-on-dark or dark-on-gold |

### 3.3 Typography Rules

- **Display headings** are very heavy (900) with **negative** letter-spacing for a compact, modern feel.
- **Eyebrows and meta labels** are uppercase with wide positive letter-spacing — the "technical label" pattern.
- **Body text** uses `line-height: 1.7` (cards/lists) or `1.8` (hero summary) for readability on dark.
- **Gold text** is reserved for the professional title and active nav — never for body copy.
- Responsive scaling is achieved via `clamp()`, not media queries (except a 640px override for the hero name).

---

## 4. Logo & Brand Assets

### 4.1 Primary Logo (`personal-logo.svg`)

- **Path:** `public/images/personal-logo.svg`
- **Format:** SVG, `viewBox="0 0 490 315"`, transparent background.
- **Colors:** White `#F5F5F5` + Gold `#FFC107`.
- **Composition:** A geometric, abstract eye-and-hand-inspired mark. Two `<g>` groups: one white, one gold.
- **Display size:** Rendered in a `4rem × 4rem` square container with `background-size: contain`, centered.
- **Intended background:** Dark (`#111111`). The logo has no light variant; on light backgrounds it would need inversion (not currently provided).

### 4.2 Favicon (`favicon.svg`)

- **Path:** `public/favicon.svg`
- **Format:** SVG, `viewBox="0 0 64 64"`, rounded square (`rx="12"`), background `#111111`.
- **Mark:** The same personal logo, scaled to fit the 64×64 canvas, centered.
- **Linked in** `index.html`: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`.

### 4.3 Logo Clear-Space & Sizing (Recommended)

- **Minimum clear space:** Equal to the height of the gold accent element within the mark on all sides.
- **Minimum display size:** 32px (for favicon/app icons); 48px for in-content usage.
- **Do not:** recolor, distort, stretch, or add effects (drop shadows are applied to floating *technology* logos, not the brand mark).

### 4.4 Technology & Social Icons

- **UI icons:** `lucide-react` (outlined, 24px default).
- **Technology logos:** `@icons-pack/react-simple-icons` (official single-color paths), rendered white with `opacity: 0.92` and a drop shadow.
- **Social icons:** GitHub (simple-icons), LinkedIn & Kaggle (custom inline SVG paths using `currentColor`).
- **Consistency rule:** All non-brand icons inherit `currentColor`; only the brand logo uses its own fixed colors.

---

## 5. Layout & Page Composition

### 5.1 Container & Spacing

| Token | Value | Notes |
|---|---|---|
| Max content width | `1400px` | Applied to header, page content, footer |
| Container padding (desktop) | `2rem` left/right | |
| Container padding (≤980px) | `1.2rem` left/right | |
| Page content vertical | `2.2rem` top, `4rem` bottom | |
| Section top padding | `1.5rem` | |
| Section heading margin-bottom | `1.5rem` | |
| Grid gap (most grids) | `1rem` | |

### 5.2 Breakpoints

| Breakpoint | Trigger | Behavior |
|---|---|---|
| Desktop | ≥ 981px | Full nav, multi-column grids (2 or 3), split hero |
| Tablet/Mobile | ≤ 980px | Nav → hamburger menu; all grids collapse to 1 column; container padding → 1.2rem |
| Small mobile | ≤ 640px | Hero name → 2.6rem; summary → 1rem/1.65; floating logos → 30px; footer stacks |

### 5.3 Section Structure (Current Portfolio)

1. **Sticky Header** — translucent dark, blurred. Contains brand logo (left), nav links (center), social icons + CV download (right), hamburger (mobile).
2. **Hero** — 2-column grid (1.3fr / 0.8fr): left = name + gold title + headline + summary + CTA row; right = portrait with gold glow.
3. **Technology Stack** — full-width field of floating animated tech logos.
4. **Featured Projects** — section header + 3-column project card grid (top 3).
5. **Projects page** — filter chips + full project grid.
6. **Project Detail** — eyebrow + title + actions; image + summary blocks; 2-column detail panels.
7. **Skills page** — section header + floating tech logo field.
8. **About page** — spotlight (copy + portrait) + 3-column info grid (Education, Experience, Courses).
9. **Contact page** — 2-column: contact info card + form.
10. **Footer** — name (left), copyright (right); muted color.

### 5.4 Reusable Layout Principles

- **Single-column content flow** within a 1400px max-width container.
- **Generous vertical rhythm** between sections; sections use `fadeInUp` on mount.
- **Cards use 1.2rem border-radius**, 1px subtle border, and a near-transparent white surface.
- **Grids collapse gracefully** to 1 column at ≤980px.
- **CTAs are pill-shaped** (`999px`), with one primary (gold) and one secondary (outline).

---

## 6. Components & Design Patterns

### 6.1 Sticky Header (`.site-header`)
- **Appearance:** Translucent `rgba(17,17,17,0.76)` with `backdrop-filter: blur(14px)`, 1px bottom border `rgba(255,255,255,0.08)`.
- **Layout:** Flex, space-between; brand (left), nav (center), socials (right).
- **Z-index:** 20.
- **Responsive:** Nav + socials hidden ≤980px; hamburger button shown; mobile menu drops down.

### 6.2 Navigation Link (`.nav-link`)
- **Default:** `color: var(--muted)`, `font-size: 0.96rem`, `letter-spacing: -0.02em`.
- **Active:** `color: var(--accent)` + 2px gold underline (`::after`).
- **Hover:** `opacity: 0.92`.
- **Focus-visible:** 2px gold outline, 4px offset.

### 6.3 Social Icon Button (`.social-link`)
- **Size:** `2.4rem × 2.4rem`, `border-radius: 0.85rem`.
- **Default:** `background: rgba(255,255,255,0.02)`, 1px `var(--border)`, color white.
- **Icon size:** `1.1rem`.
- **Hover/focus:** gold color, gold border, `background: var(--accent-soft)`, 2px gold glow ring, 2px gold outline.
- **Transition:** 180ms ease.

### 6.4 Primary Button (`.primary-button`)
- **Fill:** `var(--accent)` gold, text `#111111`.
- **Border:** 1px solid gold.
- **Radius:** `999px` (pill).
- **Padding:** `0.9rem 1.3rem`.
- **Weight:** 700, `line-height: 1`.
- **Hover:** `opacity: 0.92`.
- **Icon gap:** `0.5rem` (e.g., ArrowRight).

### 6.5 Secondary Button (`.secondary-button`)
- **Fill:** transparent.
- **Border:** 1px `var(--border)`.
- **Text:** white.
- **Same radius/padding/weight as primary.**

### 6.6 Section Header (`.section-heading`)
- **Eyebrow:** `0.76rem`, uppercase, `letter-spacing: 0.18em`, `color: var(--soft)`.
- **Title (h2):** `clamp(2.2rem, 3vw, 3.8rem)`, `line-height: 1`, `letter-spacing: -0.07em`, white.
- **Margin-bottom:** `1.5rem`.

### 6.7 Project Card (`.project-card`)
- **Radius:** `1.2rem`.
- **Border:** 1px `var(--border)`.
- **Background:** `var(--panel)`.
- **Image:** `height: 260px`, `object-fit: cover`; scales to 1.03 on card hover.
- **Body padding:** `1.1rem 1rem 1.2rem`.
- **Meta:** flex space-between, `0.7rem`, uppercase, `letter-spacing: 0.12em`, soft color.
- **Title:** `clamp(1.45rem, 1.8vw, 2rem)`, `letter-spacing: -0.06em`.
- **Description:** muted, `line-height: 1.7`.
- **Chips:** up to 4 tech pills.
- **Actions:** "View project →" (left) + "GitHub" (right), weight 600.

### 6.8 Filter Chip (`.filter-chip`)
- **Default:** transparent, 1px border, `border-radius: 1rem`, padding `0.64rem 0.96rem`.
- **Active:** gold background, `#111111` text, gold border.

### 6.9 Tech Chip (`.chip`)
- **Radius:** `999px`.
- **Padding:** `0.42rem 0.7rem`.
- **Border:** 1px `var(--border)`.
- **Background:** `rgba(255,255,255,0.02)`.
- **Font-size:** `0.76rem`.

### 6.10 Detail Panel / Card (`.detail-panel`)
- **Radius:** `1.2rem`.
- **Border:** 1px `var(--border)`.
- **Background:** `var(--panel)`.
- **Padding:** `1.1rem 1.2rem`.
- **Title (h3):** `1.12rem`, `letter-spacing: -0.04em`.

### 6.11 Summary Block (`.summary-block`)
- Used for Problem/Solution/Contribution on project detail.
- Same card treatment as detail panel.
- **Meta label:** `0.7rem`, uppercase, `letter-spacing: 0.12em`, soft color.

### 6.12 Timeline Item (`.timeline-item`)
- **Layout:** flex, gap `0.8rem`.
- **Dot:** `0.7rem` circle, gold background.
- **Content:** strong title + muted paragraphs/small text.

### 6.13 Form Input (`.contact-form input/textarea`)
- **Border:** 1px `var(--border)`, `border-radius: 0.85rem`.
- **Background:** `rgba(255,255,255,0.02)`.
- **Padding:** `0.8rem 0.9rem`.
- **Placeholder:** `rgba(255,255,255,0.44)`.
- **Focus:** 2px gold outline, 2px offset.

### 6.14 Footer (`.site-footer`)
- **Layout:** flex space-between.
- **Color:** `var(--soft)`.
- **Padding:** `1rem 2rem 2.6rem` (desktop); stacks at ≤640px.

### 6.15 Mobile Menu (`.mobile-menu`)
- **Layout:** vertical flex, gap `0.8rem`.
- **Links:** `0.6rem 0.8rem` padding, `border-radius: 0.9rem`, translucent background, border.
- **Active:** gold text.
- **Socials row:** below links.

---

## 7. Effects, Motion & Decorative Language

### 7.1 Ambient Glow
- **Page top:** `radial-gradient(circle at top, rgba(244,223,61,0.07), transparent 30%)` over `#111111`.
- **Behind portrait:** `radial-gradient(circle at center, rgba(244,223,61,0.12), transparent 62%)` with `blur(28px)`.

### 7.2 Drop Shadows
| Element | Shadow |
|---|---|
| Hero portrait | `0 24px 40px rgba(0,0,0,0.28)` |
| About portrait | `0 24px 40px rgba(0,0,0,0.2)` |
| Floating tech logos | `0 4px 16px rgba(0,0,0,0.48)` |

### 7.3 Transitions
- **Default duration:** `180ms ease` — applied to opacity, color, transform, border-color, background, box-shadow across all interactive elements.

### 7.4 Keyframe Animations

| Name | Duration | Easing | Iteration | Purpose |
|---|---|---|---|---|
| `fadeInUp` | 420ms | ease | 1 (both) | Page section entrance (opacity 0→1, translateY 18px→0) |
| `floatTech` | 12s | ease-in-out | infinite alternate | Subtle vertical bob for tech chips (class present, lightly used) |
| `logoDriftA/B/C/D` | 10–14.8s (per logo) | ease-in-out | infinite alternate | Gentle horizontal/vertical drift of floating tech logos |

**Floating logo details:** Each of the 17 tech logos gets a unique position (`left%`, `top%`), size (34–54px), negative `animation-delay` (staggered by `index * -1.17s`), and one of 4 drift paths. At ≤640px, logos are forced to 30px and use smaller-amplitude drift keyframes.

### 7.5 Reduced Motion
A global `@media (prefers-reduced-motion: reduce)` block:
- Disables smooth scroll.
- Sets all animation/transition durations to `0.01ms`.
- Specifically disables floating-logo drift and resets their transform.

### 7.6 Decorative Language Rules
- **No textures, no patterns, no particle systems.** Depth comes only from subtle gold radial glows and soft drop shadows.
- **Borders are hairline and low-contrast** — never heavy or colored (except gold on focus/active).
- **Motion is slow and gentle** — nothing snaps or bounces.

---

## 8. Responsive Design & Accessibility

### 8.1 Responsive Behavior
- **≤980px:** Single-column everything; hamburger nav; 1.2rem container padding.
- **≤640px:** Smaller hero type (2.6rem), tighter summary, 30px floating logos, stacked footer.
- **Grids always collapse to 1 column** at the tablet breakpoint — no 2-column "halfway" states.

### 8.2 Touch Targets
- Social/icon buttons: `2.4rem` (≥38px) — meets touch target guidelines.
- Mobile toggle: `2.5rem`.
- Filter chips and buttons have generous padding.

### 8.3 Keyboard & Focus
- All interactive elements use `:focus-visible` with a **2px gold outline** (offset 2–4px).
- Social/icon buttons get an additional gold glow ring on focus.
- Nav links have `aria-label`s; the mobile toggle has `aria-expanded` and `aria-controls`.

### 8.4 Color Contrast
- White on `#111111`: ~21:1 (excellent).
- Muted `rgba(255,255,255,0.76)` on `#111111`: ~16:1 (excellent).
- Soft `rgba(255,255,255,0.62)` on `#111111`: ~13:1 (good).
- `#111111` on gold `#f4df3d`: ~13:1 (good).

### 8.5 Semantics
- `<header>`, `<nav>`, `<main>`, `<footer>` landmarks.
- `aria-label` on nav, social links, brand link, image fallbacks.
- `role="list"` / `role="listitem"` on floating logo fields.
- Project images use `loading="lazy"` and have alt text + error fallback.

---

## 9. Design Token System (Summary)

Full implementation in [`design-tokens.css`](./design-tokens.css). Key groupings:

- **Colors:** backgrounds, surfaces, text (3 levels), accent (gold, 4 tints), borders, status.
- **Typography:** font stack, 5 weights, 6 line-heights, full `clamp()` type scale, letter-spacing tokens.
- **Spacing:** 17-step scale (0.2rem → 4rem) + layout-specific paddings.
- **Radius:** pill (`999px`), card (`1.2rem`), input (`0.85rem`), filter (`1rem`).
- **Borders:** 1px default, 2px focus.
- **Shadows/glows:** portrait, floating-logo, focus-ring, header blur, portrait-glow blur.
- **Motion:** 180ms default, 420ms section, drift/float durations.
- **Z-index:** header 20, base 1.
- **Breakpoints:** 980px (tablet), 640px (mobile).

**Mapping to Tailwind (if used in future):** The current site does NOT use Tailwind. If adopting Tailwind, map tokens to `tailwind.config.js` under `theme.extend`:
- `colors.bg = '#111111'`, `colors.accent = '#f4df3d'`, etc.
- `borderRadius.card = '1.2rem'`, `borderRadius.pill = '999px'`.
- `fontFamily.sans = ['Inter', 'Segoe UI', ...]`.
- Extend `keyframes` and `animation` for `fadeInUp` and `floatTech`.

---

## 10. Technology & Asset Dependencies

| Dependency | Role | Future recommendation |
|---|---|---|
| `react` / `react-dom` | App framework | Use whatever framework fits; brand is framework-agnostic. |
| `react-router-dom` | Client routing | Optional; brand does not depend on routing. |
| `lucide-react` | UI icons | **Keep** — consistent outlined style. |
| `@icons-pack/react-simple-icons` | Tech brand logos | **Keep** for tech showcases; render single-color. |
| `vite` | Build tool | Use any modern bundler. |
| Inter font (system) | Typography | **Optional.** Load from Google Fonts if exact rendering needed. |
| `resend` / `express` | Contact form backend | Not visual; optional per project. |

**External image/badge services:** None. All assets are local. (Good — no external rendering risk.)

---

## 11. Rules for Future Websites Under This Brand

### ✅ Must Preserve
1. `#111111` background (not pure black) with a faint gold radial glow at the top.
2. Gold accent `#f4df3d` used only for CTAs, active states, focus, and small highlights.
3. Inter/system sans-serif with heavy (900) tightly-tracked display headings.
4. Pill buttons (`999px`) and rounded cards (`1.2rem`).
5. Translucent blurred sticky header with gold active-link underline.
6. 1px `rgba(255,255,255,0.12)` borders on cards/inputs.
7. The white+gold personal logo mark and matching favicon.
8. `fadeInUp` section entrance (420ms) and 180ms interactive transitions.
9. Gold focus outlines (`2px solid var(--accent)`).
10. Three-level text hierarchy: white / `rgba(255,255,255,0.76)` / `rgba(255,255,255,0.62)`.

### 🔄 May Adapt
- Number and order of sections.
- Grid column counts (2, 3, 4).
- Hero layout (split, centered, full-bleed image).
- Whether floating tech logos are used (they're decorative, optional).
- Specific hover micro-interactions (lift, glow, scale) as long as timing stays ~180ms.
- Image aspect ratios and illustrations.
- Icon choice within `lucide-react`.

### ❌ Must Avoid
- Pure black `#000` backgrounds or bright/colored backgrounds.
- More than one accent color (no second accent, no rainbow palettes).
- White text on gold backgrounds (use `#111111`).
- Heavy colored borders or gradients that aren't gold-on-transparent.
- Arbitrary font families or serif/display fonts that break the Inter aesthetic.
- Loud animations, bounces, or particle effects.
- Multi-color technology logos as decoration (render them single-color white).
- Stretching or recoloring the brand logo.

### 11.1 Application by Project Type

**SaaS Dashboard:** Keep the dark + gold theme; use cards for widgets, gold for primary actions/KPI highlights, muted text for data labels. Floating logos are unnecessary. Add a sidebar with the same pill/outline button styles.

**AI/ML Product Landing Page:** Reuse the hero split layout, gold CTA, and floating tech-logos field. Use the eyebrow + large-title section header pattern for feature sections. Project cards become feature cards.

**Developer Tool:** Lean into the monospace-adjacent precision — use the same dark surface, gold accent, and hairline borders. Code blocks can use a subtle `rgba(255,255,255,0.04)` surface.

**Data Analytics Platform:** Cards/charts on `#111111`; gold for the primary metric or selected series; muted gridlines. Keep the same border-radius and padding.

**Business Website:** The dark+gold palette works for a premium/technical business. Simplify the floating logos; emphasize the eyebrow + heading + CTA pattern across sections.

**Portfolio/Showcase:** This is the reference implementation. Reuse the project card, filter chips, and detail-page layout patterns directly.

---

## 12. Deliverables Index

| File | Purpose |
|---|---|
| [`BRAND_IDENTITY.md`](./BRAND_IDENTITY.md) | This file — full human-readable spec. |
| [`design-tokens.css`](./design-tokens.css) | Reusable CSS custom properties from verified values. |
| [`ASSET_INVENTORY.md`](./ASSET_INVENTORY.md) | Catalog of logo, icons, images, fonts, and external deps. |
| [`AI_DESIGN_PROMPT.md`](./AI_DESIGN_PROMPT.md) | Reusable prompt for coding agents building new branded sites. |
| [`BRAND_AUDIT.md`](./BRAND_AUDIT.md) | Verification status, inferred items, and open questions. |
