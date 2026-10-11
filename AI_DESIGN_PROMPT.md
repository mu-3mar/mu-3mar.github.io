# AI Design Prompt — Muhammad Ammar Brand Identity

> Reusable prompt to give a coding agent when starting a new website, web app, dashboard, or landing page under the **Muhammad Ammar** personal brand.
>
> The agent must follow the brand identity documented in `BRAND_IDENTITY.md` and `design-tokens.css` while adapting the layout and components to the new product's needs.

---

## Prompt (copy and paste)

```
You are building a new digital product for Muhammad Ammar's personal brand.

Your job is to implement the product's functionality and layout WHILE strictly
following the existing visual brand identity. Do NOT redesign the brand. Reuse
the design tokens and component patterns exactly.

## Brand identity to follow

Read these files in the project root (they are authoritative):
- BRAND_IDENTITY.md  — full visual specification
- design-tokens.css  — verified CSS custom properties (colors, type, spacing, radius, motion)
- ASSET_INVENTORY.md — logo, icons, images, fonts

Apply the tokens from design-tokens.css as the source of truth for all colors,
typography, spacing, border radius, borders, shadows, transitions, and z-index.

## Non-negotiable brand rules (MUST preserve)

1. Background is #111111 (near-black, NEVER pure #000). Add a faint gold radial
   glow at the top: radial-gradient(circle at top, rgba(244,223,61,0.07), transparent 30%).
2. The ONLY accent color is gold #f4df3d. Use it for: primary CTAs, active nav
   links, focus rings, timeline dots, list bullets, and small highlights.
   Never use gold for large body text.
3. Text on gold surfaces must be #111111 (dark), NOT white.
4. Font stack: Inter, 'Segoe UI', Helvetica, Arial, sans-serif.
   (Inter is not bundled; rely on system fallback unless explicitly loaded.)
5. Display headings: font-weight 900, negative letter-spacing (-0.07em to -0.08em),
   line-height ~1. Body text: rgba(255,255,255,0.76), line-height 1.7.
   Eyebrows/labels: uppercase, letter-spacing 0.12em–0.18em, rgba(255,255,255,0.62).
6. Buttons are pills (border-radius: 999px). Primary = gold fill with dark text.
   Secondary = transparent with 1px rgba(255,255,255,0.12) border.
7. Cards/panels: border-radius 1.2rem, 1px solid rgba(255,255,255,0.12),
   background rgba(255,255,255,0.02).
8. Sticky header: translucent rgba(17,17,17,0.76) with backdrop-filter: blur(14px),
   1px bottom border rgba(255,255,255,0.08). Active nav link = gold text + 2px gold underline.
9. Focus-visible states: 2px solid #f4df3d outline (offset 2–4px).
10. Interactive transitions: 180ms ease. Section entrance: fadeInUp 420ms ease.
11. Use the personal logo (public/images/personal-logo.svg) and favicon
    (public/favicon.svg) exactly as provided — do not recolor or distort them.
12. UI icons: lucide-react (outlined). Tech logos: @icons-pack/react-simple-icons,
    rendered single-color white with opacity 0.92.
13. Breakpoints: <=980px (nav -> hamburger, grids -> 1 column), <=640px (tighter).
14. Honor prefers-reduced-motion: disable animations and smooth scroll.

## What you MAY adapt to the product

- Number, order, and content of sections.
- Grid column counts (2, 3, or 4 as needed) — collapse to 1 at <=980px.
- Hero layout (split, centered, full-bleed).
- Whether to use floating tech logos (decorative, optional).
- Specific hover micro-interactions as long as duration stays ~180ms.
- Image aspect ratios and illustration choices.
- Icon selection within lucide-react.

## What you MUST NOT do

- Do not introduce a second accent color or any non-gold colored accents.
- Do not use pure black #000 or bright backgrounds.
- Do not put white text on gold.
- Do not use serif or decorative display fonts.
- Do not add loud animations, particles, or heavy textures.
- Do not recolor, stretch, or apply effects to the brand logo.
- Do not use multi-color technology logos as decoration.
- Do not hardcode colors — always use the design tokens.

## Implementation notes

- Import design-tokens.css (or copy the :root variables) into your global styles.
- Max content width: 1400px. Desktop container padding: 2rem; mobile: 1.2rem.
- Build components matching the patterns in BRAND_IDENTITY.md section 6
  (header, buttons, section header, cards, chips, inputs, footer, mobile menu).
- If the product needs forms, reuse the contact-form input styling.
- If the product needs a dashboard, reuse the card/panel + gold-highlight pattern.

Build the product now, applying the brand identity above to every visual decision.
```

---

## Quick Token Reference (for the agent)

| Token | Value |
|---|---|
| `--color-bg` | `#111111` |
| `--color-accent` | `#f4df3d` |
| `--color-text` | `#ffffff` |
| `--color-text-muted` | `rgba(255,255,255,0.76)` |
| `--color-text-soft` | `rgba(255,255,255,0.62)` |
| `--color-border` | `rgba(255,255,255,0.12)` |
| `--radius-pill` | `999px` |
| `--radius-card` | `1.2rem` |
| `--radius-input` | `0.85rem` |
| `--container-max-width` | `1400px` |
| `--bp-tablet` | `980px` |
| `--bp-mobile` | `640px` |
| `--duration-fast` | `180ms` |
| `--duration-section` | `420ms` |

For the complete token set, always read `design-tokens.css`.
