# Brand Audit — Muhammad Ammar Visual Identity

> Verification status of all findings in `BRAND_IDENTITY.md` and `design-tokens.css`.
> Date: 2026-10-11
> Sources: live site https://ammar-ml.vercel.app + source code at `mu-3mar.github.io`

---

## Verification Legend

- ✅ **Verified** — Confirmed directly from source code (`src/App.css`, `src/App.tsx`, `src/index.css`, `index.html`, `package.json`) and/or live network requests.
- 📷 **Measured** — Confirmed from live screenshots and rendered output.
- 🔍 **Inferred** — Reasonable conclusion from context, but not explicitly stated in code.
- ❓ **Unverified** — Could not be confirmed; requires further investigation or a decision.

---

## 1. Colors

| Finding | Status | Evidence |
|---|---|---|
| `--bg: #111111` | ✅ | `src/App.css:2` |
| `--bg-soft: #171717` | ✅ | `src/App.css:3` |
| `--panel: rgba(255,255,255,0.02)` | ✅ | `src/App.css:4` |
| `--panel-strong: rgba(255,255,255,0.045)` | ✅ | `src/App.css:5` |
| `--border: rgba(255,255,255,0.12)` | ✅ | `src/App.css:6` |
| `--text: #ffffff` | ✅ | `src/App.css:7` |
| `--muted: rgba(255,255,255,0.76)` | ✅ | `src/App.css:8` |
| `--soft: rgba(255,255,255,0.62)` | ✅ | `src/App.css:9` |
| `--accent: #f4df3d` (gold) | ✅ | `src/App.css:10` |
| `--accent-soft: rgba(244,223,61,0.14)` | ✅ | `src/App.css:11` |
| `--accent-strong: rgba(244,223,61,0.22)` | ✅ | `src/App.css:12` |
| `--danger: #ffb4b4` | ✅ | `src/App.css:13` |
| `--success: #a7f3a6` | ✅ | `src/App.css:14` |
| Body radial gold glow at top | ✅ | `src/App.css:27-29` |
| Header translucent `rgba(17,17,17,0.76)` + blur(14px) | ✅ | `src/App.css:92-94` |
| Logo white `#F5F5F5` + gold `#FFC107` | ✅ | `public/images/personal-logo.svg` |
| Placeholder color `rgba(255,255,255,0.44)` | ✅ | `src/App.css:846` |

---

## 2. Typography

| Finding | Status | Evidence |
|---|---|---|
| Font stack `Inter, 'Segoe UI', Helvetica, Arial, sans-serif` | ✅ | `src/index.css:2`, `src/App.css:31` |
| **No web font loaded** (no Google Fonts / `@font-face`) | ✅ | Network requests show no font requests; `index.html` has no font `<link>` |
| Hero name `clamp(2.8rem, 5vw, 5.5rem)`, weight 900 | ✅ | `src/App.css:1179-1184` (overrides earlier 3-7rem definition) |
| Hero professional title gold, `clamp(1.35rem, 2.5vw, 2rem)`, weight 900 | ✅ | `src/App.css:1192-1197` |
| Section title `clamp(2.2rem, 3vw, 3.8rem)`, tracking -0.07em | ✅ | `src/App.css:379-384` |
| Eyebrow `0.76rem`, tracking 0.18em, uppercase | ✅ | `src/App.css:367-373` |
| Meta label `0.7rem`, tracking 0.12em, uppercase | ✅ | `src/App.css:573-580` |
| Nav link `0.96rem`, tracking -0.02em | ✅ | `src/App.css:132-140` |
| Body line-height 1.7 (cards/lists), 1.8 (hero summary) | ✅ | `src/App.css:284, 454` |

**Note:** There are duplicate/overriding rules in `App.css` (e.g., `.hero-title` appears twice with different `clamp` values). The **later** definition (lines 1179+) wins per CSS cascade. The tokens reflect the effective values.

---

## 3. Layout & Spacing

| Finding | Status | Evidence |
|---|---|---|
| Max width `1400px` | ✅ | `src/App.css:84` |
| Container padding `2rem` (desktop), `1.2rem` (≤980px) | ✅ | `src/App.css:100, 1710-1711` |
| Page content `2.2rem 2rem 4rem` | ✅ | `src/App.css:215` |
| Section padding `1.5rem 0 0` | ✅ | `src/App.css:218-220` |
| Grid gap `1rem` | ✅ | `src/App.css:394` |
| Breakpoints: 980px and 640px | ✅ | `src/App.css:895, 938` |
| Hero grid 1.3fr / 0.8fr (desktop) | ✅ | `src/App.css:237` |
| Project grid 3 columns | ✅ | `src/App.css:398` |

---

## 4. Border Radius

| Finding | Status | Evidence |
|---|---|---|
| Buttons/chips `999px` | ✅ | `src/App.css:301, 468` |
| Cards `1.2rem` | ✅ | `src/App.css:406` |
| Inputs/social `0.85rem` | ✅ | `src/App.css:164, 838` |
| Filter chips `1rem` | ✅ | `src/App.css:502` |
| Favicon `rx="12"` (≈12px on 64 canvas) | ✅ | `public/favicon.svg` |

---

## 5. Effects & Motion

| Finding | Status | Evidence |
|---|---|---|
| `fadeInUp` 420ms ease | ✅ | `src/App.css:220-232` |
| Default transition 180ms ease | ✅ | `src/App.css:129, 305, etc.` |
| Floating logo drift (4 paths, 10–14.8s) | ✅ | `src/App.css:1249-1272, App.tsx:72` |
| Portrait drop-shadow `0 24px 40px rgba(0,0,0,0.28)` | ✅ | `src/App.css:364` |
| Floating logo drop-shadow `0 4px 16px rgba(0,0,0,0.48)` | ✅ | `src/App.css:1246` |
| Portrait gold glow `blur(28px)` | ✅ | `src/App.css:355` |
| `floatTech` 12s keyframe exists but class `.floating-tech` is unused | 🔍 | Class defined but not referenced in `App.tsx`; likely legacy. |
| `prefers-reduced-motion` disables all animations | ✅ | `src/App.css:1807-1817` |

---

## 6. Logo & Assets

| Finding | Status | Evidence |
|---|---|---|
| `personal-logo.svg` 490×315 viewBox, transparent, white+gold | ✅ | File read |
| Logo rendered at `4rem × 4rem` in header | ✅ | `src/App.css:1141-1142` |
| `favicon.svg` 64×64, `#111111` bg, rounded, contains logo | ✅ | File read |
| Favicon linked in `index.html` | ✅ | `index.html:5` |
| `lucide-react` for UI icons | ✅ | `package.json`, `App.tsx` imports |
| `@icons-pack/react-simple-icons` for tech logos | ✅ | `package.json`, `App.tsx` imports |
| LinkedIn & Kaggle as inline SVG | ✅ | `App.tsx:83-103` |
| No PWA manifest / apple-touch-icon | ✅ | No manifest file or `<link rel="manifest">` in HTML |
| `portrait.png` is a black-and-white illustration | 📷 | Screenshot + `src/assets/portrait.png` |
| `icons.svg` in `public/` is **unused** (legacy) | 🔍 | Not referenced in `App.tsx` or HTML; contains old purple/black icons |

---

## 7. Inferred Items (Not Explicitly in Code)

| Item | Basis |
|---|---|
| **Logo clear-space rule** | Inferred from the 4rem square container usage. Not specified in code. |
| **Minimum logo display size** | Inferred from favicon (32–64px effective). No explicit min-size rule. |
| **`--font-family-mono` token** | Added as a recommendation; the current site does **not** use monospace anywhere. |
| **Color contrast ratios** | Calculated from verified HEX values; not measured with a contrast tool. |
| **"Must preserve" / "must avoid" rules** | Design-system recommendations derived from the observed patterns, not stated by the original author. |

---

## 8. Unresolved Questions

1. **Should Inter be loaded from Google Fonts?** Currently it's not loaded, so rendering falls back to `Segoe UI` on most systems. A decision is needed for future projects whether to bundle/load Inter for brand consistency.
2. **Is there a light-mode variant of the logo?** `personal-logo.svg` has a transparent background with white+gold marks — it would be invisible on white. No light variant exists.
3. **PWA icons:** No `manifest.json` or `apple-touch-icon`. For apps, 192×192 and 512×512 PNGs should be generated from `favicon.svg`.
4. **`icons.svg` legacy file:** Should it be removed? It's not referenced by the current app.
5. **`.floating-tech` / `floatTech` animation:** Defined but unused — likely a leftover from a previous design iteration.

---

## 9. Deliverable Completeness

| Deliverable | Status | Notes |
|---|---|---|
| `BRAND_IDENTITY.md` | ✅ Complete | Full spec with 12 sections |
| `design-tokens.css` | ✅ Complete | All verified tokens + reduced-motion + keyframes |
| `ASSET_INVENTORY.md` | ✅ Complete | Logo, icons, images, fonts, deps |
| `AI_DESIGN_PROMPT.md` | ✅ Complete | Copy-paste prompt + quick token ref |
| `BRAND_AUDIT.md` | ✅ Complete | This file |

---

## 10. Screenshot Reference

Screenshots were captured during the audit (stored in `/tmp/trae/screenshots/`):

- `portfolio-full-page.png` — Home page hero
- `projects-page.png` — Projects grid with filter chips
- `about-page.png` — About page with info cards
- `contact-page.png` — Contact form and info
- `skills-page.png` — Floating technology logos
- `project-detail-page.png` — Project detail layout

These confirm the rendered output matches the source code values.
