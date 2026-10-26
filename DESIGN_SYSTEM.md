# Brand Identity & Design System Specification

> **Single Source of Truth** for the visual identity, design tokens, component architecture, and interaction patterns of this brand.  
> **Primary Purpose:** This document serves as a complete design and engineering reference for human developers and AI coding agents building new websites, web applications, or digital products under this brand. Any digital product adhering to this specification will visually, functionally, and aesthetically feel like a native product of the same company.

---

## 1. Executive Summary & Brand Foundation

### 1.1 Brand Philosophy & Visual Aesthetic
The brand identity is built around **engineering precision, modern minimalism, and technological sophistication**, balanced by **warm, organic undertones**. Unlike traditional tech brands that rely on sterile, clinical blues or cold pure blacks, this brand uses a signature **warm roasted-espresso foundation** paired with a luminous, energetic **Unified Brand Orange-Red (`#F04B24`)**.

Key aesthetic tenets:
- **Dark-Mode First, Dual-Theme Excellence:** The primary, native aesthetic is an immersive dark mode with rich espresso/onyx surfaces (`#141211`), illuminated by soft ambient radial gradients. The light mode is an inverted alabaster/cream aesthetic (`#FFF8F5`) that retains the same warm undertones and high-contrast legibility.
- **Micro-Structured Depth (Layered Panels):** Visual hierarchy is established through subtly differentiated elevation panels (`--panel`, `--panel-strong`, `--panel-hover`) framed by hairline 1px borders (`--border`, `--border-subtle`), rather than heavy drop-shadows or stark borders.
- **Deliberate Geometry & Pill Motifs:** A signature geometric motif is the **fully rounded pill** (`border-radius: 9999px`), used consistently for navigation bars, filter chips, category badges, and interactive controls. This is paired with gentle, rounded-corner container panels (`border-radius: 0.95rem` to `1.5rem`).
- **Kinetic Micro-Interactions & Ambient Motion:** The interface feels alive through organic micro-interactions: floating technical badges that drift along non-overlapping orbital paths, gentle 3D perspective tilts, an animated vector logo with subtle morphing and winking effects, and a pulsating emerald-green live-status indicator.
- **Uncompromised Accessibility (WCAG AA):** High-contrast typography, strict text-to-background contrast ratios (with accent foreground automatically adjusted to `#D93C1A` in light mode for 4.5:1+ contrast), dedicated `prefers-reduced-motion` fallbacks, and semantic ARIA labeling across all interactive patterns.

---

## 2. Color System & Design Tokens

### 2.1 Core Palette Tokens
The design system operates with a dual-theme token model managed via CSS Custom Properties. The `:root` and `[data-theme='dark']` define the dark mode baseline, while `[data-theme='light']` overrides them.

| Token Name | Dark Mode (Primary) | Light Mode (Inverted) | Semantic Role & Implementation Usage |
| :--- | :--- | :--- | :--- |
| `--bg` | `#141211` | `#FFF8F5` | Primary canvas & root viewport background. |
| `--bg-soft` | `#1C1816` | `#F7EEE9` | Secondary background for nested sections or subtle contrasting surfaces. |
| `--panel` | `#211B18` | `#FFFFFF` | Base card and component surface (cards, form containers, toggle buttons). |
| `--panel-strong` | `#2A221E` | `#F3E8E2` | Elevated surface (floating nav bar, form inputs, tech item pills, image backgrounds). |
| `--panel-hover` | `#2E2521` | `#FAF2ED` | Hover state for interactive panels and elevated items. |
| `--border` | `#382A25` | `#EBDCD5` | Standard structural border for cards, buttons, panels, and timeline rails. |
| `--border-subtle`| `#2D221E` | `rgba(41, 32, 29, 0.06)` | Secondary hairline dividers, list separators, and card footer borders. |
| `--header-bg` | `rgba(20, 18, 17, 0.85)` | `rgba(255, 248, 245, 0.88)` | Translucent frosted sticky header background (paired with blur). |
| `--header-border`| `rgba(255, 248, 245, 0.08)` | `rgba(41, 32, 29, 0.08)` | Bottom hairline border of the sticky header. |
| `--text` | `#FFF8F5` | `#29201D` | High-contrast primary text, headings, and active icons. |
| `--muted` | `#C7BBB5` | `#6E625C` | Secondary body text, descriptions, inactive nav links, and subtitles. |
| `--soft` | `#A99A93` | `#806D64` | Tertiary text, meta captions, timestamps, copyright notes, and icons. |
| `--placeholder` | `rgba(199, 187, 181, 0.40)` | `rgba(41, 32, 29, 0.38)` | Placeholder text inside form inputs and textareas. |
| `--accent` | `#F04B24` | `#F04B24` | **Brand Accent Orange-Red**: Primary button fills, active pills, brand focal points. |
| `--accent-fg` | `#F04B24` | `#D93C1A` | Foreground accent for text, eyebrow headers, and icons on light canvas (tuned for WCAG AA). |
| `--accent-hover` | `#FF7048` | `#D93C1A` | Button hover fill state (lighter coral in dark mode, deeper red in light mode). |
| `--accent-active`| `#D93C1A` | `#A92D19` | Button active/pressed fill state. |
| `--accent-soft` | `rgba(240, 75, 36, 0.15)` | `rgba(240, 75, 36, 0.10)` | Translucent tint for badges, icon containers, and interactive button hover backgrounds. |
| `--accent-strong`| `rgba(240, 75, 36, 0.28)` | `rgba(240, 75, 36, 0.22)` | Accent border for badges, tag containers, and highlight boxes. |
| `--accent-glow` | `rgba(240, 75, 36, 0.20)` | `rgba(240, 75, 36, 0.12)` | Focus rings, box-shadow glows, button elevations, and drop-shadows. |
| `--accent-text` | `#FFFFFF` | `#FFFFFF` | High-contrast pure white text & icons **inside** filled brand buttons and active chips. |
| `--danger` | `#ff6b6b` | `#dc2626` | Error text and error border indicators. |
| `--danger-bg` | `rgba(239, 68, 68, 0.14)` | `rgba(220, 38, 38, 0.08)` | Background for validation error banners and danger alerts. |
| `--success` | `#4ade80` | `#16a34a` | Success text and success border indicators. |
| `--success-bg` | `rgba(34, 197, 94, 0.14)` | `rgba(22, 163, 74, 0.08)` | Background for success notifications and confirmation states. |

### 2.2 Functional Status & Indicator Colors
- **Active State / Online Pulse:** `#22c55e` (Emerald Green). Used exclusively for active timeline dots, live career positions, and real-time operational indicators (`pulseActiveDot` animation).
- **Interactive Focus Ring:** `0 0 0 3px var(--accent-glow)` (3px soft orange glow).
- **Secondary Card Elevation Shadow:**
  - Dark: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`
  - Light: `0 4px 20px rgba(41, 32, 29, 0.06)`

---

## 3. Typography & Hierarchy

### 3.1 Font Stack
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```
- **Monospace / Code Fallback:**
  ```css
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  ```
- **Rendering Optimizations:**
  ```css
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-synthesis: none;
  ```

### 3.2 Typographic Scale & Specs

| Hierarchy Level | Font Size | Font Weight | Line Height | Letter Spacing | Color Variable | Target Elements / Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display / Name** | `clamp(2.8rem, 5.5vw, 5.8rem)` | 900 (Black) | `0.95` | `-0.07em` | `var(--text)` | Hero title, primary landing display name. Ultra-bold, ultra-tight tracking. |
| **Page Detail Title (H1)** | `clamp(2.2rem, 3.5vw, 3.6rem)` | 800 (ExtraBold) | `1.1` | `-0.05em` | `var(--text)` | Main page headings on Detail and Not-Found views. |
| **Section Title (H2)** | `clamp(2.2rem, 3.2vw, 3.4rem)` | 800 (ExtraBold) | `1.05` | `-0.06em` | `var(--text)` | Section headings across all standard page sections. |
| **Hero Headline / Subtitle**| `clamp(1.3rem, 2.2vw, 2.1rem)` | 700 (Bold) | `1.25` | `-0.04em` | `var(--text)` | Hero section secondary proposition or mission statement. |
| **Professional Role Tag** | `clamp(1.2rem, 2vw, 1.8rem)` | 600 (SemiBold)| `1.2` | `-0.03em` | `var(--accent-fg)` | Title directly beneath the main hero name. |
| **Card / Panel Heading (H3)**| `1.25rem` – `1.35rem` | 700 (Bold) | `1.3` | `-0.02em` to `-0.03em`| `var(--text)` | Project card titles, About panel headers, Detail panel section headers. |
| **Sub-Panel Subtitle** | `1.05rem` | 700 (Bold) | `1.3` | `-0.02em` | `var(--text)` | Timeline company/institution names, skill group titles. |
| **Hero Summary / Intro Body**| `1.08rem` – `1.15rem` | 400 (Regular)| `1.75` – `1.8` | `normal` | `var(--muted)` | Lead paragraphs, spotlight intro text. |
| **Standard Body Text** | `0.95rem` – `0.98rem` | 400 (Regular)| `1.6` – `1.7` | `normal` | `var(--muted)` | Descriptive copy inside cards, panels, and forms. |
| **Navigation Links** | `0.94rem` | 500 / 600 (Active)| `1.0` | `-0.01em` | `var(--muted)` / `var(--accent-text)` | Header pill nav links. |
| **Buttons / CTAs** | `0.98rem` | 700 (Bold) | `1.0` | `normal` | `var(--accent-text)` / `var(--text)` | Primary and secondary buttons. Always bold with no text wrap. |
| **Eyebrow / Overline** | `0.78rem` | 700 (Bold) | `1.2` | `0.18em` | `var(--accent-fg)` | Uppercase category/section category overline (`text-transform: uppercase`). |
| **Meta Label** | `0.76rem` | 700 (Bold) | `1.2` | `0.14em` | `var(--accent-fg)` | Uppercase block labels in detail summaries (e.g. "PROBLEM", "SOLUTION"). |
| **Project Meta / Context** | `0.72rem` – `0.80rem` | 700 (Bold) | `1.2` | `0.02em` to `0.08em` | `var(--accent-fg)` / `var(--soft)` | Context pills ("Internship", "Graduation Project"), uppercase categories. |
| **Technology Chips / Tags** | `0.78rem` | 500 (Medium) | `1.2` | `normal` | `var(--muted)` | Small tech badges inside project cards and detail panels. |
| **Captions & Timestamps** | `0.80rem` – `0.82rem` | 400 / 500 | `1.4` | `normal` | `var(--soft)` | Dates, locations, subperiod labels (`<small>`). |

---

## 4. Layout, Grid & Spatial Architecture

### 4.1 Master Container & Viewport Constraining
```css
.site-header,
.page-content,
.site-footer {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}
```
- **Full Shell Architecture:** `.page-shell` has `min-height: 100vh; display: flex; flex-direction: column; background: var(--bg); color: var(--text);`.
- **Content Padding:**
  - Desktop (> 640px): `padding: 2.2rem 2rem 4rem;`
  - Mobile (≤ 640px): `padding: 1.5rem 1.2rem 3rem;`
- **Section Spacing:** `.page-section { padding: 1.5rem 0 0; }` with smooth entrance animation (`animation: fadeInUp 420ms ease both;`).

### 4.2 Page Layout Grids

#### 1. Hero Grid (Landing Page)
- **Desktop (> 980px):**
  ```css
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.85fr);
  align-items: center;
  gap: 3rem;
  min-height: 70vh;
  ```
- **Tablet / Mobile (≤ 980px):**
  ```css
  grid-template-columns: 1fr;
  gap: 2.5rem;
  ```
  *(Visual portrait reordered to `-1` so portrait displays above copy on mobile)*

#### 2. Project Card Grid
- **Default Grid (Projects Page & Featured Section):**
  ```css
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
  ```
- **Two-Up Grid (Related Projects):**
  ```css
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  ```
- **Mobile (≤ 640px):**
  ```css
  grid-template-columns: 1fr;
  gap: 1.5rem;
  ```

#### 3. Detail Page Hero Grid
- **Desktop (> 980px):**
  ```css
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 1fr);
  gap: 2rem;
  align-items: start;
  ```
- **Mobile (≤ 980px):** Single column `grid-template-columns: 1fr; gap: 1.8rem;`.

#### 4. About Info Grid (Uniform Scrollable Panels)
- **Grid Setup:**
  ```css
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.8rem;
  align-items: stretch;
  ```
- **Panel Height Rule:** Every card panel in this grid has a fixed height (`height: 480px` on desktop, `height: 420px` on mobile ≤ 640px) with independent vertical scrolling (`overflow-y: auto`) and custom slim scrollbars.

#### 5. Contact Page Layout
- **Desktop (> 980px):**
  ```css
  grid-template-columns: minmax(280px, 1fr) minmax(0, 1.4fr);
  gap: 2.5rem;
  ```
- **Mobile (≤ 980px):** Single column `grid-template-columns: 1fr; gap: 2rem;`.

---

## 5. Spacing, Sizing & Radii Standards

### 5.1 Spacing Scale (8-Point Modular Rhythm)
All spacing, margins, and paddings align with the following base scale:

| Token / Value | Pixels | Common Application |
| :--- | :--- | :--- |
| `0.25rem` | 4px | Micro gap between header nav links; small pill gap. |
| `0.45rem` – `0.5rem` | 7.2px – 8px | Chip-row gap; internal label-to-input gap; mobile nav gap. |
| `0.75rem` – `0.85rem` | 12px – 13.6px | Social link gap; input padding; button padding-y. |
| `1.0rem` – `1.2rem` | 16px – 19.2px | Card gap; CTA row gap; header inner gap; timeline gap. |
| `1.5rem` | 24px | Card inner body padding; detail panel gap; section margin. |
| `2.0rem` | 32px | Grid gap between project cards; contact card padding. |
| `2.5rem` | 40px | Layout column gaps; footer padding-y. |
| `3.0rem` | 48px | Hero column gap; bottom padding on mobile. |
| `4.0rem` | 64px | Page content bottom padding. |

### 5.2 Border Radii Matrix

| Radius Class | Value | Computed (at 16px) | Elements Using This Radius |
| :--- | :--- | :--- | :--- |
| **Full Pill (`radius-full`)** | `9999px` | 9999px | Floating Nav Bar, Nav Links, Filter Chips, Context Badges, View Toggle, Experience Badges, Scrollbar Thumb, Timeline Dots. |
| **Large Component (`radius-2xl`)** | `1.5rem` | 24px | Master Project Cards (`.project-card`). |
| **Standard Card (`radius-xl`)** | `1.3rem` – `1.4rem` | 20.8px – 22.4px | Detail Panels, Contact Cards, Contact Form Container, Image Wrappers. |
| **Group Container (`radius-lg`)** | `1.1rem` – `1.2rem` | 17.6px – 19.2px | Summary Blocks (`.summary-block`), Skill Group Cards. |
| **Action & Control (`radius-md`)** | `0.95rem` | 15.2px | Primary Buttons, Secondary Buttons, Theme Toggle Button, Social Link Buttons, Fallback Monogram Box. |
| **Form & Input (`radius-sm`)** | `0.85rem` | 13.6px | Form `<input>`, Form `<textarea>`, Mobile Nav Links, Mobile Toggle Button. |
| **Micro Chip (`radius-xs`)** | `0.55rem` | 8.8px | Technology Chips (`.chip`). |

---

## 6. Components & Design Patterns

### 6.1 Site Header & Floating Pill Navigation
The header provides continuous brand anchor and navigation without obstructing content:

```html
<!-- Sticky Header Container -->
<header class="site-header">
  <div class="header-inner">
    <!-- Brand Logo -->
    <a class="brand" href="/" aria-label="Go to home page">
      <span class="brand-logo-wrap">
        <!-- Animated SVG iframe or <img> -->
      </span>
    </a>

    <!-- Floating Pill Navigation (Desktop) -->
    <nav class="main-nav" aria-label="Main navigation">
      <a href="/" class="nav-link active">Home</a>
      <a href="/projects" class="nav-link">Projects</a>
      <a href="/skills" class="nav-link">Skills</a>
      <a href="/about" class="nav-link">About</a>
      <a href="/contact" class="nav-link">Contact</a>
    </nav>

    <!-- Header Actions -->
    <div class="header-actions">
      <!-- Theme Toggle Button -->
      <button type="button" class="theme-toggle-btn" aria-label="Switch theme">
        <svg class="theme-icon ..."></svg>
      </button>
      <!-- Social Links (GitHub, LinkedIn, Kaggle, CV) -->
      <div class="social-links">...</div>
      <!-- Mobile Hamburger Toggle -->
      <button type="button" class="mobile-toggle" aria-label="Toggle menu">...</button>
    </div>
  </div>
</header>
```

**Key Header CSS Rules:**
- Header background: `background: var(--header-bg); backdrop-filter: blur(14px); border-bottom: 1px solid var(--header-border); position: sticky; top: 0; z-index: 50;`
- Pill Nav Bar: `background: var(--panel-strong); border: 1px solid var(--border); padding: 0.35rem 0.45rem; border-radius: 9999px; backdrop-filter: blur(8px); display: flex; align-items: center; gap: 0.25rem;`
- Nav Link Inactive: `color: var(--muted); font-size: 0.94rem; font-weight: 500; padding: 0.5rem 1.15rem; border-radius: 9999px; line-height: 1; transition: all 180ms ease;`
- Nav Link Hover: `color: var(--text); background: var(--panel-hover);`
- Nav Link Active: `color: var(--accent-text); background: var(--accent); font-weight: 600; box-shadow: 0 2px 10px var(--accent-glow);`

### 6.2 Button System
All buttons share: `display: inline-flex; align-items: center; justify-content: center; gap: 0.55rem; padding: 0.85rem 1.6rem; border-radius: 0.95rem; font-weight: 700; font-size: 0.98rem; transition: all 180ms ease; white-space: nowrap; cursor: pointer;`

#### 1. Primary Button
- Fill: `background: var(--accent); color: var(--accent-text);`
- Box Shadow: `0 4px 16px var(--accent-glow)`
- Internal Icons: Always force high-contrast white:
  ```css
  .primary-button svg {
    color: var(--accent-text);
    stroke: currentColor;
  }
  ```
- Hover: `transform: translateY(-2px); background: var(--accent-hover); box-shadow: 0 6px 20px var(--accent-glow);`
- Active / Pressed: `transform: translateY(0); background: var(--accent-active);`

#### 2. Secondary Button
- Surface: `background: var(--panel); border: 1px solid var(--border); color: var(--text);`
- Hover: `border-color: var(--accent); color: var(--accent-fg); background: var(--accent-soft); transform: translateY(-2px);`

#### 3. Icon Action Button (`.theme-toggle-btn`, `.social-link`)
- Size: Exactly `width: 2.85rem; height: 2.85rem; border-radius: 0.95rem;`
- Surface: `display: grid; place-items: center; background: var(--panel); border: 1px solid var(--border); color: var(--text);`
- Hover: `color: var(--accent-fg); border-color: var(--accent); background: var(--accent-soft); box-shadow: 0 0 0 2px var(--accent-glow); transform: translateY(-2px);`
- Sun/Moon Micro-Interaction: `theme-icon` rotates `20deg` on hover (`transform: rotate(20deg); transition: transform 240ms ease;`).

### 6.3 Project Card Component
The primary container for exhibiting work or catalog items.

```html
<article class="project-card">
  <!-- Visual Banner (16:10 ratio) -->
  <a href="/projects/project-slug" class="project-visual">
    <img src="/cover.png" alt="Project Title" class="project-img-rendered" loading="lazy" />
  </a>

  <div class="project-body">
    <!-- Meta Bar -->
    <div class="project-meta">
      <span class="project-category-badge">COMPUTER VISION</span>
      <span class="project-context-tag">Graduation Project</span>
    </div>

    <!-- Title Link -->
    <a href="/projects/project-slug" class="project-title-link">
      <h3>Project Display Title</h3>
    </a>

    <!-- Description -->
    <p>Short concise problem/solution summary.</p>

    <!-- Technology Chips -->
    <div class="chip-row">
      <span class="chip">Python</span>
      <span class="chip">PyTorch</span>
      <span class="chip">OpenCV</span>
    </div>

    <!-- Action Footer -->
    <div class="project-actions">
      <a href="/projects/project-slug">View project →</a>
      <a href="https://github.com/..." target="_blank" rel="noreferrer">
        <svg class="github-icon">...</svg>
        <span>GitHub</span>
      </a>
    </div>
  </div>
</article>
```

**Card CSS Specifications:**
- Background & Elevation: `background: var(--panel); border: 1px solid var(--border); border-radius: 1.5rem; overflow: hidden; box-shadow: var(--shadow-card);`
- Hover Lift: `transform: translateY(-6px); border-color: var(--accent);`
- Visual Aspect Ratio: `16 / 10` with image zoom on card hover (`transform: scale(1.04); transition: transform 300ms ease;`).
- Context Tag: `background: var(--accent-soft); color: var(--accent-fg); border: 1px solid var(--accent-strong); border-radius: 9999px; padding: 0.2rem 0.55rem; font-size: 0.72rem; font-weight: 700;`
- Chip Tag: `background: var(--panel-strong); border: 1px solid var(--border); color: var(--muted); border-radius: 0.55rem; padding: 0.28rem 0.68rem; font-size: 0.78rem; font-weight: 500;`

### 6.4 Filter Chips (Category Selectors)
```css
.filter-chip {
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 180ms ease;
}

.filter-chip:hover {
  color: var(--text);
  border-color: var(--accent);
}

.filter-chip.active {
  background: var(--accent);
  color: var(--accent-text);
  border-color: var(--accent);
  font-weight: 700;
}
```

### 6.5 Interactive Timeline & Career Architecture
Used on About and Experience views to render chronological milestones:
- **Timeline Track Rail:** Vertical spine: `border-left: 2px solid var(--border); padding-left: 1.5rem; padding-bottom: 1.5rem; position: relative;`
- **Milestone Dot:** Absolute position `left: -0.45rem; top: 0.25rem; width: 0.8rem; height: 0.8rem; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px var(--panel);`
- **Active Milestones (Current Employment / Active Education):**
  - Dot color switches to `#22c55e`.
  - Runs pulsing radar animation:
    ```css
    @keyframes pulseActiveDot {
      0% { box-shadow: 0 0 0 3px var(--panel), 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { box-shadow: 0 0 0 3px var(--panel), 0 0 0 7px rgba(34, 197, 94, 0); }
      100% { box-shadow: 0 0 0 3px var(--panel), 0 0 0 0 rgba(34, 197, 94, 0); }
    }
    .timeline-dot.active {
      background: #22c55e;
      animation: pulseActiveDot 2.2s infinite cubic-bezier(0.4, 0, 0.6, 1);
    }
    ```
- **Experience Node Link Card:** Nested inside timeline nodes:
  - Surface: `background: var(--panel-strong); border: 1px solid var(--border); border-radius: 1rem; padding: 1rem 1.15rem;`
  - Hover Interaction: `background: var(--panel-hover); border-color: var(--accent); transform: translateX(4px); box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);`
  - Badge Counter: `background: var(--accent); color: var(--accent-text); border-radius: 9999px; padding: 0.26rem 0.62rem; font-size: 0.76rem; font-weight: 700;` (translates `translateX(3px)` on card hover).

### 6.6 Form & Input System
- **Form Card:** `.contact-form` with `padding: 2rem; border-radius: 1.4rem; background: var(--panel); border: 1px solid var(--border); display: flex; flex-direction: column; gap: 1.2rem;`
- **Field Labels:** `display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.88rem; font-weight: 600; color: var(--text);`
- **Inputs & Textareas:**
  ```css
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.85rem 1.1rem;
    border-radius: 0.85rem;
    border: 1px solid var(--border);
    background: var(--panel-strong);
    color: var(--text);
    font-size: 0.95rem;
    transition: all 180ms ease;
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
  }
  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: var(--placeholder);
  }
  ```
- **Submit Button State:**
  - Disabled / Submitting: `opacity: 0.6; cursor: not-allowed;`
  - Unified High Contrast: Enforces `color: var(--accent-text) !important; stroke: var(--accent-text) !important;` on all child labels and SVGs.
- **Form Status Feedback Banners:**
  - Success: `background: var(--success-bg); color: var(--success); border: 1px solid var(--success); padding: 0.9rem 1.1rem; border-radius: 0.8rem; font-size: 0.92rem; font-weight: 600;`
  - Error: `background: var(--danger-bg); color: var(--danger); border: 1px solid var(--danger);`

### 6.7 Site Footer
- Layout: `padding: 2.5rem 2rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; color: var(--soft); font-size: 0.9rem;`
- Responsive Collapse: On screens ≤ 640px, stacks vertically with `flex-direction: column; gap: 0.5rem; text-align: center;`.

---

## 7. Icons & Logos

### 7.1 Icon Libraries & Sources
The project leverages two specialized icon packages, supplemented by custom inline SVGs:
1. **`lucide-react` (v1.55+):** Used for all UI controls, navigational aids, conceptual badges, and utility icons.
   - Core glyphs: `ArrowRight`, `Menu`, `X`, `Sun`, `Moon`, `Mail`, `Phone`, `FileDown`, `Send`, `Orbit`, `List`, `Brain`, `Cpu`, `Layers`, `Network`, `Database`, `Server`, etc.
   - Standard Stroke Width: Default (`2px`).
2. **`@icons-pack/react-simple-icons` (v13.15+):** Used for verified third-party brand logos.
   - Core brand glyphs: `SiPython`, `SiPytorch`, `SiTensorflow`, `SiKeras`, `SiOpencv`, `SiDocker`, `SiGithub`, `SiLinux`, `SiFastapi`, `SiNumpy`, `SiPandas`, `SiScikitlearn`, `SiUltralytics`, etc.
3. **Custom Inline SVGs:**
   - **LinkedIn:** Official silhouette geometry scaled to `22px x 22px`, styled via `fill="currentColor"`.
   - **Kaggle:** Precise vector geometry scaled to `22px x 22px`, styled via `fill="currentColor"`.

### 7.2 Icon Sizing Conventions
- `14px – 16px`: Micro-action indicators (e.g. arrow inside experience badges, project card links).
- `18px`: Standard action buttons and list icons (contact info items, form submit, GitHub button).
- `20px`: Structural headers and mobile hamburger menu icon.
- `22px`: Primary utility actions (theme toggle, social link buttons).
- `34px – 58px`: Free-floating orbital technology badges.

### 7.3 Brand Logo Architecture
The logo system features a dual-layer strategy:

1. **Interactive Vector Morphing Logo (`/logo-animated.html`):**
   - Implemented as an isolated, standalone SVG animation hosted in `/public/logo-animated.html` and embedded via a transparent `<iframe>` inside `.brand-logo-wrap` (`width: 5.6rem; height: 3.8rem`).
   - Query Parameters: Receives `?theme=dark` or `?theme=light` and dynamically injects `document.documentElement.style.setProperty('--logo-color', '#F04B24')`.
   - Micro-interaction: Continuous subtle morph with a unique "winking eye" animation loop executing between $t = 4.9s$ and $t = 5.2s$.
   - Scale & Hover: Wrapper features `transition: transform 200ms ease;` and enlarges to `transform: scale(1.08)` on hover.
2. **Monogram Fallback (`.brand-logo-monogram`):**
   - Rendered when logo is text-based or if iframe fails to load.
   - Styling: `background: var(--panel-strong); border: 1px solid var(--border); color: var(--accent-fg); font-weight: 800; font-size: 1.35rem; letter-spacing: -0.04em; border-radius: 0.95rem; width: 5.6rem; height: 3.8rem; display: grid; place-items: center;`.

---

## 8. Visual Effects, Lighting & Surfaces

### 8.1 Ambient Radial Lighting
The system uses ambient radial light sources to soften dark backgrounds and create spatial depth without harsh drop-shadows:
- **Top Ambient Glow (Applied to `<body>`):**
  - Dark: `radial-gradient(circle at top, rgba(240, 75, 36, 0.10), transparent 38%)`
  - Light: `radial-gradient(circle at top, rgba(240, 75, 36, 0.08), transparent 40%)`
  - Implementation: `background: var(--ambient-top-gradient), var(--bg);`
- **Portrait Ambient Halo (`.portrait-ambient`):**
  - Pseudo-element `::before` placed behind portraits and visual assets.
  - Dark: `radial-gradient(circle at center, rgba(240, 75, 36, 0.16), transparent 62%)`
  - Light: `radial-gradient(circle at center, rgba(240, 75, 36, 0.14), transparent 65%)`
  - Filter: `filter: blur(28px); border-radius: 50%;`

### 8.2 Glassmorphism & Translucency
- **Sticky Site Header:** `backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); background: var(--header-bg);`
- **Pill Navigation Bar:** `backdrop-filter: blur(8px); background: var(--panel-strong);`

### 8.3 Border Hairlines & Dividers
- Card and Panel Borders: Solid `1px solid var(--border)`
- Sub-dividers and List Separators: Subtle `1px solid var(--border-subtle)`
- Header Bottom Edge: Translucent hairline `1px solid var(--header-border)`

---

## 9. Animations, Transitions & Motion Design

### 9.1 Global Theme Transitions
To ensure pleasant theme switching without jarring flashes:
```css
html, body, .page-shell, .site-header, .project-card, .detail-panel,
.contact-card, .contact-form, .social-link, .theme-toggle-btn,
.filter-chip, .chip, .timeline-item {
  transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease;
}
```

### 9.2 Section Entrance (`fadeInUp`)
Applied to all primary page sections upon mount:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.page-section {
  animation: fadeInUp 420ms ease both;
}
```

### 9.3 Floating Technology Ecosystem (Orbital Physics Engine)
A signature brand element: technical badges float freely across the hero and skills pages.

#### 1. Collision-Avoidance Orbital Math
The system computes deterministic non-overlapping boundaries for every icon using a Mulberry32 PRNG and dynamic viewport measurements:
- Center coordinates are mapped: $C_i = (X_i, Y_i)$
- Safe traveling radius for each icon is clamped:
  $$\text{cap}_i = \min_{j \ne i} \left( \frac{\text{dist}(C_i, C_j) - R_i - R_j - \text{margin}}{2} \right)$$
- Every icon swims along an 8-waypoint randomized loop (`logoSwim`) with duration $T \in [11s, 29s]$.
- Combined with a 3D leaning perspective animation (`logoLean`):
  ```css
  @keyframes logoLean {
    from {
      transform: rotateX(var(--lx1)) rotateY(var(--ly1)) rotateZ(var(--lz1)) scale(var(--ls1));
    }
    to {
      transform: rotateX(var(--lx2)) rotateY(var(--ly2)) rotateZ(var(--lz2)) scale(var(--ls2));
    }
  }
  ```

#### 2. Interactive Logo Hover Highlighting
When an icon is hovered:
```css
.floating-logo:hover {
  opacity: 1;
  color: var(--accent);
  filter: drop-shadow(0 0 16px var(--accent-glow));
  z-index: 10;
}
```

### 9.4 Accessibility & Reduced Motion
The design system strictly respects user OS accessibility settings:
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

## 10. Responsive Breakpoints & Device Adaptation

### 10.1 Breakpoint System
The layout responds across three distinct viewport tiers:
1. **Desktop Tier:** `> 980px`
2. **Tablet & Foldable Tier:** `641px – 980px`
3. **Mobile Phone Tier:** `≤ 640px`

```
+-------------------------------------------------------------------------+
| Desktop (> 980px)                                                       |
| - Max Width: 1400px centered                                            |
| - Pill Nav visible; Header Actions visible                              |
| - Hero: 2-column (1.3fr copy / 0.85fr portrait)                         |
| - Detail: 2-column (1.4fr visual / 1fr summary)                         |
| - Projects Grid: repeat(auto-fill, minmax(360px, 1fr))                  |
+-------------------------------------------------------------------------+
| Tablet (980px down to 641px)                                            |
| - Pill Nav hidden; Hamburger mobile toggle active                       |
| - Hero: single-column stacked (portrait orders to top: -1)              |
| - Detail & Contact: single-column stacked                               |
+-------------------------------------------------------------------------+
| Mobile (≤ 640px)                                                        |
| - Page content padding reduced to: 1.5rem 1.2rem 3rem                   |
| - Buttons: width 100%; CTA row stacks vertically                        |
| - Project Grid: strictly 1 column (1fr)                                 |
| - About Panels: height reduced from 480px to 420px                      |
| - Footer: stacks vertically with text-align: center                     |
| - Floating Logos: size clamped to 32px                                  |
+-------------------------------------------------------------------------+
```

### 10.2 Mobile Navigation Transform
On viewports `≤ 980px`:
- Desktop `.main-nav` and `.header-actions .social-links` switch to `display: none;`.
- `.mobile-toggle` switches from `none` to `display: grid; place-items: center;`.
- Tapping reveals the `.mobile-menu` accordion drawer:
  ```css
  .mobile-menu {
    padding: 1rem 1.4rem 1.4rem;
    border-top: 1px solid var(--border-subtle);
    background: var(--header-bg);
    backdrop-filter: blur(14px);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  ```

---

## 11. Implementation Guide & Code Recipes

### 11.1 Complete Theme CSS Variables Template
Copy this CSS directly into any new application to immediately instantiate the exact brand theme:

```css
/* ==========================================================================
   Brand Design Tokens (Dark & Light Modes)
   ========================================================================== */

:root,
[data-theme='dark'] {
  --bg: #141211;
  --bg-soft: #1C1816;
  --panel: #211B18;
  --panel-strong: #2A221E;
  --panel-hover: #2E2521;
  --border: #382A25;
  --border-subtle: #2D221E;
  --header-bg: rgba(20, 18, 17, 0.85);
  --header-border: rgba(255, 248, 245, 0.08);

  --text: #FFF8F5;
  --muted: #C7BBB5;
  --soft: #A99A93;
  --placeholder: rgba(199, 187, 181, 0.40);

  /* Unified Brand Orange-Red (#F04B24) */
  --accent: #F04B24;
  --accent-fg: #F04B24;
  --accent-hover: #FF7048;
  --accent-active: #D93C1A;
  --accent-soft: rgba(240, 75, 36, 0.15);
  --accent-strong: rgba(240, 75, 36, 0.28);
  --accent-glow: rgba(240, 75, 36, 0.20);
  --accent-text: #FFFFFF;

  --danger: #ff6b6b;
  --danger-bg: rgba(239, 68, 68, 0.14);
  --success: #4ade80;
  --success-bg: rgba(34, 197, 94, 0.14);

  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --ambient-top-gradient: radial-gradient(circle at top, rgba(240, 75, 36, 0.10), transparent 38%);
  --portrait-glow: radial-gradient(circle at center, rgba(240, 75, 36, 0.16), transparent 62%);
  --logo-field-opacity: 0.88;
}

[data-theme='light'] {
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

  /* Unified Brand Orange-Red (#F04B24) - WCAG AA Contrast Tuned */
  --accent: #F04B24;
  --accent-fg: #D93C1A;
  --accent-hover: #D93C1A;
  --accent-active: #A92D19;
  --accent-soft: rgba(240, 75, 36, 0.10);
  --accent-strong: rgba(240, 75, 36, 0.22);
  --accent-glow: rgba(240, 75, 36, 0.12);
  --accent-text: #FFFFFF;

  --danger: #dc2626;
  --danger-bg: rgba(220, 38, 38, 0.08);
  --success: #16a34a;
  --success-bg: rgba(22, 163, 74, 0.08);

  --shadow-card: 0 4px 20px rgba(41, 32, 29, 0.06);
  --ambient-top-gradient: radial-gradient(circle at top, rgba(240, 75, 36, 0.08), transparent 40%);
  --portrait-glow: radial-gradient(circle at center, rgba(240, 75, 36, 0.14), transparent 65%);
  --logo-field-opacity: 0.80;
}
```

### 11.2 Theme Toggle State Engine (React + TypeScript)
Use this standard provider to manage user theme preference with zero flash of unstyled theme (FOUC):

```tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const STORAGE_KEY = 'portfolio-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'dark' || stored === 'light') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
```

### 11.3 Standard Section Header Recipe
Every major page section starts with this paired eyebrow and title structure:

```tsx
interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, className = '' }) => (
  <div className={`section-heading ${className}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
  </div>
);
```

```css
.section-heading {
  margin-bottom: 2rem;
}

.eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-fg);
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2.2rem, 3.2vw, 3.4rem);
  letter-spacing: -0.06em;
  font-weight: 800;
  line-height: 1.05;
  color: var(--text);
}
```

---

## 12. Brand Governance & Anti-Patterns

### 12.1 Strict Brand Rules (DOs)
- **DO use `#F04B24` as the primary brand anchor.** Never deviate from this unified orange-red accent for buttons, active pills, and brand highlights.
- **DO use `--accent-fg` (`#D93C1A` in light mode) for text and bare icons** to maintain WCAG AA readability against light cream backgrounds.
- **DO use pure white (`#FFFFFF`) for text and icons inside filled brand accent buttons.** Never render dark or colored icons inside a primary accent button.
- **DO wrap sticky navigation items in floating pill containers** (`border-radius: 9999px`) placed on translucent blurred backdrops.
- **DO preserve warm undertones in both themes.** The dark background is `#141211` (warm espresso), NOT pure cold black `#000000`. The light background is `#FFF8F5` (warm cream), NOT sterile `#FFFFFF`.
- **DO apply smooth transition timing** (`220ms ease`) across theme changes to prevent jarring aesthetic snapping.

### 12.2 Prohibited Practices (DON'Ts)
- **DON'T use cool blue, cyan, or purple accents.** The brand identity is grounded in warm charcoal and orange-red.
- **DON'T use sharp 90-degree corners** on interactive components. Always apply the designated radius tokens (`0.85rem`, `0.95rem`, `1.4rem`, or `9999px`).
- **DON'T use heavy, dark, drop-shadows.** Use subtle 1px hairline borders (`--border`, `--border-subtle`) and soft ambient radial glows (`--ambient-top-gradient`, `--portrait-glow`).
- **DON'T display bright pure green (`#22c55e`) for static decorative elements.** Emerald green is reserved exclusively for the live/active operational status indicator.
- **DON'T disable reduced-motion support.** Always ensure motion transforms degrade cleanly when the user requests reduced motion.
