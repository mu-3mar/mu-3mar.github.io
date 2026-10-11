# Asset Inventory — Muhammad Ammar Brand

Catalog of all brand-related assets for the portfolio at https://ammar-ml.vercel.app.
Paths are relative to the project root unless stated otherwise.

---

## 1. Logo & Brand Mark

### Primary Personal Logo

| Property | Value |
|---|---|
| File | `public/images/personal-logo.svg` |
| Format | SVG (vector) |
| Dimensions | `width="980" height="630"`, `viewBox="0 0 490 315"` |
| Aspect ratio | ~1.555 : 1 (landscape) |
| Colors | White `#F5F5F5` + Gold `#FFC006` on **transparent** background |
| Composition | Geometric eye-and-hand inspired mark; two path groups (white + gold) |
| Usage | Header brand mark (rendered at `4rem × 4rem` via `background-size: contain`) |

**Clear-space guidance (inferred from usage):** The logo is displayed in a 4rem square container centered. For reuse, preserve the transparent background and keep a clear space equal to at least the height of the gold accent element around the mark.

### Favicon / App Icon

| Property | Value |
|---|---|
| File | `public/favicon.svg` |
| Format | SVG |
| Dimensions | `viewBox="0 0 64 64"`, rounded square (`rx="12"`) |
| Background | `#111111` (brand dark) |
| Mark | Same personal logo, scaled and centered on the dark rounded square |
| Referenced from | `index.html` line 5: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` |

> **No PWA / apple-touch-icon / manifest** is currently configured. For future apps, generate 192×192 and 512×512 PNG variants from `favicon.svg`.

---

## 2. Imagery

### Portrait Illustration

| Property | Value |
|---|---|
| Source | `src/assets/portrait.png` (imported into App.tsx) |
| Build output | `dist/assets/portrait-*.png` |
| Usage | Home hero visual + About page portrait |
| Treatment | `object-fit: contain`, `drop-shadow(0 24px 40px rgba(0,0,0,0.28))`; ambient gold radial glow behind it |
| Style | Black-and-white line/cartoon illustration of the person with a laptop |

> The gold glow behind the portrait is **not part of the PNG** — it's a CSS `::before` pseudo-element (`radial-gradient` gold, `blur(28px)`).

### Project Cover Images

All stored in `public/images/projects/`, rendered with `object-fit: cover` at `height: 260px` inside project cards.

| File | Used for |
|---|---|
| `project-industrial-quality-control-cover.png` | Real-Time Industrial Quality Control System |
| `project-nyc-taxi-duration-cover.png` | NYC Taxi Trip Duration Prediction |
| `project-road-accident-risk-prediction-cover.png` | Road Accident Risk Prediction |
| `project-ai-body-measurement-cover.png` | AI Body Measurement System |
| `project-sign-language-recognition-cover.png` | Sign Language Recognition |
| `placeholder-project.svg` | Fallback placeholder (unused if real images exist) |

A graceful empty-state div (`.project-image-empty`) is rendered if an image fails to load.

---

## 3. Document Assets

| File | Usage |
|---|---|
| `public/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf` | CV download link in header, contact page, and footer-adjacent area. Download attribute sets the filename. |

---

## 4. Iconography

### 4.1 UI Icons (Lucide)

Library: [`lucide-react`](https://www.npmjs.com/package/lucide-react) v1.55.0
- **Style:** Outlined, 24×24 default viewBox, clean geometric strokes.
- **Icons used:** `ArrowRight`, `FileDown`, `Mail`, `Menu`, `Phone`, `X`.
- **Sizing:** Explicit `size={18}` on CTA arrows, `size={20}` on mobile toggle, `size={18}` on contact list icons.
- **Color:** Inherits `currentColor`; contact-list icons are forced to `var(--accent)`.

### 4.2 Technology / Brand Logos

Library: [`@icons-pack/react-simple-icons`](https://www.npmjs.com/package/@icons-pack/react-simple-icons) v13.15.1
- **Style:** Official single-color brand SVG paths; rendered white (`#F5F5F5`) with `opacity: 0.92`.
- **Used in:** Floating logo fields on Home and Skills pages (17 technologies).
- **Technologies:** Python, NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow, Keras, OpenCV, Ultralytics (YOLO), MediaPipe, FastAPI, Docker, ONNX, Firebase, Git, GitHub, Linux.
- **Effect:** Each logo has `drop-shadow(0 4px 16px rgba(0,0,0,0.48))` and a gentle infinite drift animation.

### 4.3 Custom Inline SVGs

- **LinkedIn icon** — hand-coded path in `App.tsx` (`LinkedInIcon` component), `fill="currentColor"`, viewBox `0 0 24 24`.
- **Kaggle icon** — hand-coded path in `App.tsx` (`KaggleIcon` component), `fill="currentColor"`, viewBox `0 0 24 24`.
- **GitHub icon** — also available via `SiGithub` from simple-icons, but the contact list reuses the same component.

---

## 5. Legacy / Unused Assets

| File | Status |
|---|---|
| `public/icons.svg` | **Unused.** Contains old Bluesky, Discord, GitHub, social icons with hardcoded `#08060d`/`#aa3bff` colors from a prior design. Not referenced by the current app. Safe to remove or ignore. |
| `src/assets/hero.png` | **Unused.** Present in `src/assets/` but not imported anywhere. |
| `dist/` folder | Build output (auto-generated); mirrors `public/` + bundled assets. |

---

## 6. External Dependencies (visual)

| Dependency | Version | Role | Recommendation for future projects |
|---|---|---|---|
| `lucide-react` | ^1.55.0 | UI icon set | **Keep.** Consistent, accessible, outlined style matches the brand. |
| `@icons-pack/react-simple-icons` | ^13.15.1 | Technology brand logos | **Keep** for tech-stack showcases. Verify each logo's current-color rendering. |
| Font (Inter) | — | Body/heading typeface | **NOT loaded from CDN.** Relies on system-installed Inter; falls back to `Segoe UI`. For future projects, either bundle Inter or load from Google Fonts if exact rendering matters. |

---

## 7. Asset Handling Rules for Future Projects

1. **Store brand-critical assets locally** (logo, favicon, portrait) under version control — do not rely on external image hosts for the primary brand mark.
2. **Use SVG for the logo and favicon** to keep them crisp at all sizes.
3. **Technology logos come from `react-simple-icons`** — render them in a single color (white on dark, or accent-tinted) to stay on-brand; do not use multi-color vendor logos as decorative elements.
4. **Project/feature images:** prefer landscape 16:10 or 4:3, optimized PNG/WebP. Provide an empty-state fallback.
5. **PWA icons:** Generate from `favicon.svg` at 192×192 and 512×512 if adding a manifest.
