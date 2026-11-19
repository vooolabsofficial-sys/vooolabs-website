# VOOO LABS — Design System & Brand Architecture Specification
**Authoritative Design Guidelines & Engineering Tokens for `vooolabs.in` & Sub-Properties**  
*Version: 2.0.0 (Production Verified) · Studio Lead: Vrushabh Shinde*

---

## 1. Brand Identity & Logo Architecture

### 1.1 Logo Mark & Wordmark Anatomy
VOOO LABS relies on a bespoke typographical wordmark composed of two balanced components: **`VOOO`** and **`LABS`**.

- **Full Text String:** `VOOO LABS` (strictly uppercase; never `Vooo Labs`, `VoooLabs`, or `VOOO-LABS`).
- **Logo Font Family:** `'CrazyBlocks', sans-serif`
  - Source Path: `/fonts/crazy-blocks/crazyblocks.otf`
  - Preload Spec: `<link rel="preload" href="/fonts/crazy-blocks/crazyblocks.otf" as="font" type="font/otf" crossorigin>`
  - Class Name: `.font-crazyblocks` (`font-family: 'CrazyBlocks', sans-serif !important;`)
- **Letter Spacing:** `tracking-wider` (`0.05em` / `+50/1000em`)
- **Line Height:** `leading-none` (`1.0`)

### 1.2 Surface Variants (Light vs. Dark Canvas)

| Surface | `VOOO` Treatment | `LABS` Treatment | Code Implementation |
| :--- | :--- | :--- | :--- |
| **Light Canvas** (`#FFFFFF` / `#F8F9FC`) | Animated `.shimmer-text` (90deg Studio Gradient) | `#0F172A` (`text-slate-900` or `text-slate-950`) | `<span className="shimmer-text font-crazyblocks text-2xl sm:text-[1.85rem] tracking-wider leading-none">VOOO</span><span className="font-crazyblocks text-xl sm:text-[1.5rem] text-slate-900 ml-2 tracking-wider leading-none">LABS</span>` |
| **Dark Canvas** (`#0A0F1E` / `#05070E`) | Animated `.shimmer-text` | `#FFFFFF` (`text-white`) | `<span className="shimmer-text font-crazyblocks text-3xl sm:text-4xl tracking-wider leading-none">VOOO</span><span className="font-crazyblocks text-2xl sm:text-3xl text-white ml-2 tracking-wider leading-none">LABS</span>` |
| **Brand Preloader / Splash** | 4-Stop Letter Wave (`V` `#4285F4`, `O` `#5B5BD6`, `O` `#7C3AED`, `O` `#F97316`) | Linear Gradient: `linear-gradient(135deg, #4285F4 0%, #7C3AED 50%, #F97316 100%)` | Framer Motion elastic drop physics at 120 FPS |

### 1.3 Favicon & App Icons
- **SVG Vector Icon:** `/favicon.svg` (9.5 KB crisp multi-stop geometry)
- **Sprite Library:** `/icons.svg`
- **OpenGraph / WhatsApp Share Card:** `/og-preview.png` (Exact dimensions: `1200 x 630 px`, aspect-ratio: `1.91:1`)

### 1.4 Clear-Space & Usage Rules
- **Minimum Clear Space:** Maintain a minimum margin equal to the height of the letter `'V'` on all four sides.
- **Minimum Size:**
  - Screen: Minimum height of `24px` for mobile headers.
  - Print / Favicon: Minimum `16x16px` for vector mark, `32px` width for wordmark.
- **Rules of Conduct (Don'ts):**
  - Do NOT skew, rotate, or alter the aspect ratio of the wordmark.
  - Do NOT apply drop shadows with blur exceeding `12px` or opacity exceeding `15%`.
  - Do NOT replace the font with generic display fonts (e.g., Arial, Impact, Montserrat).
  - Do NOT enclose the wordmark in heavy skeuomorphic boxes or pill borders.

---

## 2. Color System & Architectural Tokens

### 2.1 Brand Accent Spectrum
All accents represent functional engineering layers across the studio's 4 core systems:

| Role / System | Token Name | Hex Code | RGB | CSS Variable | Semantic Meaning |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Studio Core / Blue** | `Studio Blue` | `#4285F4` | `rgb(66, 133, 244)` | `--blue` | Google ecosystem, 01 Websites, Primary focus |
| **Sub-Accent / Indigo** | `Electric Indigo` | `#5B5BD6` | `rgb(91, 91, 214)` | `--indigo` | Transitional bridge in brand shimmer |
| **02 Web Apps / Purple** | `Royal Violet` | `#7C3AED` | `rgb(124, 58, 237)` | `--purple` | Portals, SaaS architecture, API intelligence |
| **03 Software / Orange**| `Industrial Amber` | `#F97316` | `rgb(249, 115, 22)` | `--orange` | Operational CRM, Inventory, Database pipelines |
| **04 Discovery / Emerald** | `Live Emerald` | `#10B981` | `rgb(16, 185, 129)` | `--green` | WhatsApp connectivity, SEO authority, Live status |
| **WhatsApp Hover Shade**| `Deep Emerald` | `#059669` | `rgb(5, 150, 105)` | — | Active state for communication triggers |

### 2.2 Neutral Canvas & Surface System

| Layer / Purpose | Hex Code | Tailwind Equivalent | Usage Scope |
| :--- | :--- | :--- | :--- |
| **Base Light Canvas** | `#FFFFFF` | `bg-white` | Default site background, clean document canvas |
| **Subtle Architectural Wash** | `#F8F9FC` | `bg-[#F8F9FC]` | Secondary cards, pill containers, mode switch decks |
| **CAD Blueprint Grid Canvas** | `#F8FAFC` | `bg-[#F8FAFC]` | Blueprint mode background on About page |
| **Obsidian Deep Base** | `#0A0F1E` | `bg-[#0A0F1E]` | Primary dark buttons, dark callout bands, meta theme |
| **Ultra Dark Studio Floor** | `#05070E` | `bg-[#05070E]` | Studio footer, permanent base terminal canvas |
| **Muted Card Surface (Dark)**| `rgba(255,255,255,0.03)` | `bg-white/[0.03]` | Glass badges in dark closing stages |

### 2.3 Text Hierarchy Tokens

| Level | Hex Code | Tailwind Class | Recommended Weight | Context / Role |
| :--- | :--- | :--- | :--- | :--- |
| **Headline / Executive** | `#020617` | `text-slate-950` | `font-bold` (700) or `font-extrabold` (800) | H1/H2 Page titles, founder nameplate |
| **High-Contrast UI Text**| `#0F172A` | `text-slate-900` | `font-semibold` (600) | Card headlines, button labels, navigation pills |
| **Body Primary** | `#1E293B` | `text-slate-800` | `font-normal` (400) / `font-medium` (500) | Long-form reading, clause descriptions |
| **Body Secondary** | `#475569` | `text-slate-600` | `font-normal` (400) | Feature sub-bullets, secondary card copy |
| **Muted Metadata** | `#64748B` | `text-slate-500` | `font-mono text-xs` | Timestamps, CAD notes, system specs |
| **Eyebrows & Rules** | `#94A3B8` | `text-slate-400` | `font-mono text-[11px]` | Section category tags, breadcrumb paths |
| **Inverse Dark Body** | `#CBD5E1` | `text-slate-300` | `font-normal` (400) | Footer descriptions, dark card summaries |
| **Inverse White Text** | `#FFFFFF` | `text-white` | `font-bold` / `font-medium` | Dark CTA headlines, primary buttons |

### 2.4 Architectural Hairlines & Borders

| Token Name | Color / Opacity | Purpose |
| :--- | :--- | :--- |
| **Standard Hairline** | `rgba(226, 232, 240, 0.8)` (`border-slate-200/80`) | Section dividers, large feature card outlines |
| **High-Contrast Border** | `#CBD5E1` (`border-slate-300`) | Secondary buttons at rest, form input outlines |
| **Hover / Focus Border** | `#0A0F1E` (`hover:border-slate-900`) | Active interactive card or button focus |
| **Dark Section Hairline**| `rgba(255, 255, 255, 0.08)` (`border-white/[0.08]`)| Footer dividers, dark modal rims |
| **Blueprint Dashed Rule**| `rgba(148, 163, 184, 0.8)` (`border-dashed border-slate-400`)| CAD architectural mode hairlines |

---

## 3. Typography System

### 3.1 Font Family Stack
VOOO LABS imports all weights natively to prevent synthetic faux-bold blurring on Windows ClearType and macOS WebKit:

```html
<!-- Google Fonts Imports: index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

| Family | Stack | Weights Loaded | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **Inter** | `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` | 300, 400, 500, 600, 700, 800, 900 | All UI headlines, body copy, card labels, buttons |
| **JetBrains Mono** | `'JetBrains Mono', monospace` | 400, 500, 600, 700 | Eyebrows, code snippets, CAD metrics, timestamps, telemetry |
| **CrazyBlocks** | `'CrazyBlocks', sans-serif` | Custom Display | Wordmark only (`VOOO LABS`) |

### 3.2 Complete Type Scale Table

| Level / Tag | Font Family | Mobile Size | Desktop Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Inter | `2.25rem` (`36px`) | `4.25rem`–`4.5rem` (`72px`) | 800 (Extrabold) | `1.08`–`1.12` | `-0.03em` |
| **Section H2** | Inter | `1.75rem` (`28px`) | `2.75rem`–`3.0rem` (`48px`) | 700 (Bold) | `1.15`–`1.20` | `-0.025em` |
| **Card H3** | Inter | `1.25rem` (`20px`) | `1.5rem` (`24px`) | 700 (Bold) | `1.25` | `-0.02em` |
| **Subheading / Lead** | Inter | `1.0rem` (`16px`) | `1.25rem` (`20px`) | 400 (Normal) / 500 | `1.65` | `-0.01em` |
| **Body Standard** | Inter | `0.9375rem` (`15px`)| `1.0rem` (`16px`) | 400 (Normal) | `1.65` | `-0.01em` |
| **Body Small** | Inter | `0.875rem` (`14px`) | `0.875rem` (`14px`) | 400 (Normal) / 500 | `1.55` | `0` |
| **Technical Eyebrow**| JetBrains Mono| `0.6875rem` (`11px`)| `0.75rem` (`12px`) | 700 (Bold) | `1.0` | `+0.18em` (UPPERCASE) |
| **Button Label** | Inter | `0.75rem`–`0.875rem`| `0.875rem`–`1.0rem` | 600 (Semibold) | `1.0` | `-0.01em` |
| **Micro Badge** | JetBrains Mono| `0.625rem` (`10px`) | `0.6875rem` (`11px`) | 600 (Semibold) | `1.0` | `+0.14em` |

---

## 4. Layout & Spatial Architecture

### 4.1 Grid & Container Boundaries
- **Primary Page Container:** `max-w-6xl mx-auto px-6` (`1152px` content width + `24px` gutter).
- **Prose / Legal Container:** `max-w-4xl mx-auto px-6` (`896px` comfortable reading column).
- **Hero Staging Height:**
  - Standard Hero: `pt-32 sm:pt-40 pb-16 sm:pb-24` (clears floating `72px` navbar).
  - Editorial Split: 12-column grid (`lg:col-span-7` text / `lg:col-span-5` sticky visualizer).

### 4.2 Elevation, Depth & Shadow System

```css
/* Real tokens from src/index.css */
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.10);
--shadow-blue: 0 20px 60px rgba(66, 133, 244, 0.25);
--shadow-purple: 0 20px 60px rgba(124, 58, 237, 0.25);
--shadow-green: 0 20px 60px rgba(16, 185, 129, 0.25);
```

- **Card Hover Physics:**
  ```css
  .card-fluid-hover {
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 200ms ease;
  }
  .card-fluid-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -6px rgba(10, 15, 30, 0.08);
  }
  ```

### 4.3 Corner Radii (`border-radius`)
- **Interactive Pills / CTAs:** `rounded-full` (`9999px`)
- **Containers & Big Cards:** `rounded-2xl` (`16px`) to `rounded-3xl` (`24px`)
- **Input Fields & Small Tiles:** `rounded-xl` (`12px`) or `rounded-[14px]`
- **CAD / Blueprint Mode:** `rounded-sm` (`2px`) strictly

### 4.4 Z-Index Hierarchy
- `z-[-1]`: Sub-surface layout pills
- `z-0`: Ambient radial glows, background gradients
- `z-10`: Normal page content, cards, and sections
- `z-20`: Sticky floating status bars, breadcrumb markers
- `z-30`: Floating Navigation Bar (`Navbar.tsx`) & Quick Actions Bar
- `z-40`: GSAP Scan lines, optical sweep beams
- `z-50`: Modals (`StudioAiModal.tsx`), Navigation drawers, Accessibility skip link
- `z-[9999]`: View Transitions API active transform root

---

## 5. Core UI Component Patterns

### 5.1 Liquid Interactive Button System (`LiquidButton.tsx`)
All buttons feature crystal-clear, zero-subpixel-blur typography at rest, viscoelastic cursor attraction physics on hover, and an internal diagonal sheen glide:

```
[ Resting State: Static Native Grid (No GPU transform) ]
                        ↓ (Mouse Enter)
[ Active Hover: Spring Physics (stiffness: 300, damping: 20) + Sheen Gliding 170% ]
                        ↓ (Click / Tap)
[ Active Press: translateY(1px) scale(0.972) ]
```

#### Button Variants:
1. **Primary (`variant="primary"`):**
   - Background: Obsidian `#0A0F1E` $\rightarrow$ Studio Blue `#4285F4` on hover.
   - Border: `rgba(255, 255, 255, 0.18)`
   - Text: `#FFFFFF`, `font-semibold`
   - Shadow: Inset top highlight `rgba(255,255,255,0.25)`, drop shadow `0 2px 8px -2px rgba(10,15,30,0.20)`
2. **Secondary (`variant="secondary"`):**
   - Background: `#FFFFFF` $\rightarrow$ `#F8F9FC` on hover.
   - Border: `#CBD5E1` (Slate-300) $\rightarrow$ `#0A0F1E` on hover.
   - Text: `#020617` (Slate-950), `font-semibold`
3. **WhatsApp / Communication (`variant="whatsapp"`):**
   - Base: Secondary white body with glowing `8px` emerald indicator dot (`bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]`).
   - Hover: `hover:bg-emerald-50/50 hover:border-emerald-600`.
4. **White Inverted (`variant="white"`):**
   - Built for dark `#0A0F1E` sections. `#FFFFFF` background turning `#4285F4` with white text on hover.
5. **Dark Glass (`variant="dark"`):**
   - Built for ambient dark stages. `bg-white/[0.08]` with `border-white/25`.

### 5.2 Motion & Animation Timing Tokens
- **Linear / Fluid Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-liquid`)
- **Spring Overshoot Easing:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (`--ease-spring`)
- **Fast Interactive Transition:** `140ms`–`180ms` (hover colors, active scale)
- **Fluid Element Glide:** `280ms` (`--duration-liquid`)
- **Sheen Sweep Duration:** `650ms` (`--duration-sheen`)
- **Page Entrance Duration:** `350ms` (`pageVariants`) with `[0.16, 1, 0.3, 1]` ease.

---

## 6. Cross-Product Consistency Guide

When creating new subdomains, administrative tools, PDF documents, or brand collateral for VOOO LABS, adhere to these exact production specifications:

| Asset / Product | Canvas Color | Header Font | Body Font | Primary CTA Token |
| :--- | :--- | :--- | :--- | :--- |
| **`billing.vooolabs.in`** | `#FFFFFF` / `#F8F9FC` | Inter 700 (`#020617`) | Inter 400 (`#1E293B`) | Obsidian `#0A0F1E` $\rightarrow$ `#4285F4` |
| **PDF Invoices & Quotes** | `#FFFFFF` (Pure white) | Inter 800 (`#020617`)| Inter 400, Mono 500 for tables | High-contrast `#0A0F1E` with `#4285F4` rule |
| **Email Signatures** | Transparent | Inter 700 (`#020617`) | Inter 400 (`#475569`) | Studio Blue `#4285F4` link |
| **Social Media Graphics** | `#05070E` (Studio Dark)| CrazyBlocks + Inter 800 | Inter 500 (`#CBD5E1`) | Shimmer gradient: `#4285F4` $\rightarrow$ `#7C3AED` $\rightarrow$ `#F97316` |

---

## 7. Studio Sign-Off & Governance
Any proposed modification to typography, base palette, or the wordmark geometry must pass the zero-template litmus test:
1. **Zero Bloated Frameworks:** Keep markup lightweight, accessible, and fast.
2. **Zero Faux Claims:** Authentic, verified engineering statements only.
3. **100% Client Ownership:** Design and code built to stand the test of time.
