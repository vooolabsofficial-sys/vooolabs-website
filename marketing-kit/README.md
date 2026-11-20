# VOOO LABS — Official Marketing & Brand Asset Kit
**Self-Contained Brand Design Tokens, Templates & Production Exporter**  
*Maintained outside `public/` and `src/` to ensure zero impact on production website bundle size.*

---

## 1. Quick Start: Regenerating All Assets (PowerShell)

Whenever you adjust copy, service descriptions, or brand tokens, run the following PowerShell command from the repository root:

```powershell
node marketing-kit/export.mjs
```

If you modify template layouts or SVGs in `marketing-kit/build-templates.mjs`, rebuild templates first:

```powershell
node marketing-kit/build-templates.mjs
node marketing-kit/export.mjs
```

All assets will be rendered into `marketing-kit/exports/` at exact platform dimensions as crisp PNGs under 5 MB each with complete **Light & Dark Parity**.

---

## 2. Visual Inspection Gallery (`preview.html`)

To visually inspect all color swatches, typography specimens, and exported marketing assets side-by-side in both Light and Dark modes:

Open `marketing-kit/preview.html` directly in your browser:
- On Windows PowerShell:
  ```powershell
  Start-Process "marketing-kit/preview.html"
  ```
- Or double-click `preview.html` in Windows Explorer.

---

## 3. Directory Architecture

```
marketing-kit/
├── brand-tokens.json           # Authoritative JSON tokens (HEX, RGB, fonts, geometry, usage)
├── preview.html                # Visual inspection gallery with side-by-side Light/Dark previews
├── email-signature.html        # Interactive 1-click Email Signature Installer for Gmail/Outlook
├── README.md                   # This instruction manual
├── export.mjs                  # Headless Chrome asset exporter (PowerShell-friendly)
├── build-templates.mjs         # Template & SVG generator script
├── shared/
│   ├── brand.css               # Shared CSS containing @font-face with embedded CrazyBlocks font
│   ├── brand-font.js           # Base64 embedded font string
│   └── generate-shared.mjs     # Font base64 generator
├── templates/                  # Source HTML/CSS/SVG templates
│   ├── logos/                  # 5 Wordmark + 5 Icon variations (HTML + SVG)
│   ├── gbp/                    # 2 GBP Logos, 2 Cover banners, 8 Service cards (Dark & Light)
│   ├── whatsapp/               # 2 Avatars, 2 Business catalog cards (Dark & Light)
│   ├── linkedin/               # 2 Company Logos, 2 Cover banners, 2 Feed posts (Dark & Light)
│   ├── instagram/              # 2 Profile DPs, 2 4:5 Feed posts, 2 9:16 Stories (Dark & Light)
│   ├── twitter/                # 2 Header Banners, 2 Avatars (Dark & Light)
│   ├── youtube/                # 2 Channel Banners, 2 Channel Avatars (Dark & Light)
│   ├── github/                 # 2 Org Avatars, 2 Social Repository Cards (Dark & Light)
│   ├── virtual-background/     # 2 Full HD Google Meet / Zoom Backgrounds (Dark & Light)
│   ├── pitch-deck/             # 8 16:9 Client Pitch Presentation Slides (Dark & Light)
│   ├── business-card/          # 2 Visiting cards (Obsidian Dark & Clean Light)
│   ├── letterhead/             # 2 Proposal/Invoice headers + 2 A4 Printable Sheets (Dark & Light)
│   ├── social-card/            # 2 Universal OpenGraph share cards (Dark & Light)
│   ├── app-icons/              # 4 App icons (Apple touch icon, Android PWA, Favicon)
│   └── email-signature/        # 5 Zoho Mail Profiles + Minimal (hello, vrushabh, billing, support, legal)
└── exports/                    # Production rendered PNGs & SVGs (< 5 MB)
    ├── logos/                  # 10 PNGs (2048x2048) + 10 vector SVGs
    ├── gbp/                    # 11 PNGs (Logos, Covers, Service Cards)
    ├── whatsapp/               # 4 PNGs (DPs & Catalog Cards)
    ├── linkedin/               # 6 PNGs (Logos, Covers, Posts)
    ├── instagram/              # 6 PNGs (DPs, Posts, Stories)
    ├── twitter/                # 4 PNGs (Headers & Profile Avatars)
    ├── youtube/                # 4 PNGs (Banners & Channel Icons)
    ├── github/                 # 4 PNGs (Org Avatars & Social Repository Cards)
    ├── virtual-background/     # 2 PNGs (1080p Virtual Backgrounds)
    ├── pitch-deck/             # 8 PNGs (16:9 Client Presentation Slides)
    ├── business-card/          # 2 PNGs (Visiting cards @ 300 DPI)
    ├── letterhead/             # 4 PNGs (2 Headers + 2 Full A4 Documents)
    ├── social-card/            # 2 PNGs (Universal OpenGraph cards)
    ├── app-icons/              # 4 PNGs (Apple Touch Icon, Android 192/512, Favicon)
    └── email-signature/        # 8 Preview PNGs (5 Zoho Profiles + Founder, Studio, Minimal)
```

---

## 4. Platform Specifications & Safe-Zone Rules

| Platform | Asset Name | Dimensions | Aspect Ratio | Variant & Safe-Zone Specification |
| :--- | :--- | :--- | :--- | :--- |
| **Logos** | `wordmark-*.png` | 2048 × 2048 px | 1:1 | Master wordmark in Light, Dark, Trans, White, Black |
| **Logos** | `icon-*.png` | 2048 × 2048 px | 1:1 | Master icon in Light, Dark, Trans, White, Black |
| **Logos** | `*.svg` | Vector | Scale | Standalone vector SVGs with embedded base64 CrazyBlocks font |
| **GBP** | `gbp-logo-*.png` | 720 × 720 px | 1:1 | 20% outer circular safe zone (centered within 576px circle) |
| **GBP** | `gbp-cover-*.png` | 1024 × 576 px | 16:9 | Minimal studio brand banner, zero phone numbers (Dark & Light) |
| **GBP** | `gbp-service-*.png` | 1200 × 900 px | 4:3 | 4 Systems in both Dark & Light: Websites, Web Apps, Software, SEO & AI |
| **WhatsApp** | `whatsapp-dp-*.png` | 800 × 800 px | 1:1 | Circular avatar crop safe (centered within 640px circle) |
| **WhatsApp** | `whatsapp-catalog-card-*.png` | 1080 × 1080 px | 1:1 | Square 4-systems catalog card (Dark & Light) |
| **LinkedIn** | `linkedin-logo-*.png` | 400 × 400 px | 1:1 | Company page profile photo (Dark & Light) |
| **LinkedIn** | `linkedin-cover-*.png` | 1128 × 191 px | 5.9:1 | Bottom-left 200px clear to prevent overlap with company avatar |
| **LinkedIn** | `linkedin-post-*.png` | 1200 × 627 px | 1.91:1 | Standard feed landscape post (Dark & Light) |
| **Instagram**| `instagram-dp-*.png` | 800 × 800 px | 1:1 | Circular avatar crop safe (Dark & Light) |
| **Instagram**| `instagram-post-*.png` | 1080 × 1350 px | 4:5 | Portrait feed post optimal for Instagram engagement (Dark & Light) |
| **Instagram**| `instagram-story-*.png` | 1080 × 1920 px | 9:16 | Top 260px and bottom 260px clear of critical copy/logos (Dark & Light) |
| **Visiting Cards**| `business-card-*.png` | 1050 × 600 px | 3.5:2 | Standard corporate visiting card @ 300 DPI (Dark & Light) |
| **Letterhead** | `letterhead-header-*.png` | 1600 × 320 px | 5:1 | Header banner for client proposals, quotations & GST invoices |
| **Letterhead A4** | `letterhead-a4-*.png` | 1240 × 1754 px | A4 (150 DPI) | Full official printable document sheet with watermark & margins (Dark & Light) |
| **Social Card** | `og-card-*.png` | 1200 × 630 px | 1.91:1 | Universal rich-link card for Twitter/X, Discord, Slack, iMessage |
| **Twitter / X** | `twitter-header-*.png` | 1500 × 500 px | 3:1 | Official profile header with bottom-left avatar safe-zone offset (Dark & Light) |
| **Twitter / X** | `twitter-dp-*.png` | 400 × 400 px | 1:1 | High-res circular profile icon (Dark & Light) |
| **YouTube** | `youtube-banner-*.png` | 2560 × 1440 px | 16:9 | Full banner with 1546×423 px central safe zone across TV, Desktop, Mobile |
| **YouTube** | `youtube-dp-*.png` | 800 × 800 px | 1:1 | High-res channel avatar (Dark & Light) |
| **GitHub** | `github-avatar-*.png` | 500 × 500 px | 1:1 | High-res organization profile picture (Dark & Light) |
| **GitHub** | `github-social-card-*.png` | 1280 × 640 px | 2:1 | Official repository social preview card (Dark & Light) |
| **Virtual Background** | `virtual-background-*.png` | 1920 × 1080 px | 16:9 | 1080p video call background for Google Meet, Zoom, Teams (Dark & Light) |
| **Pitch Deck** | `slide-cover-*.png` | 1920 × 1080 px | 16:9 | Slide 01: Master Title & Studio Overview (Dark & Light) |
| **Pitch Deck** | `slide-systems-*.png` | 1920 × 1080 px | 16:9 | Slide 02: Core 4 Engineering Systems (Dark & Light) |
| **Pitch Deck** | `slide-process-*.png` | 1920 × 1080 px | 16:9 | Slide 03: 4-Phase Engineering Delivery Lifecycle (Dark & Light) |
| **Pitch Deck** | `slide-closing-*.png` | 1920 × 1080 px | 16:9 | Slide 04: Engagement & Direct Communication (Dark & Light) |
| **App Icons / PWA** | `apple-touch-icon.png` | 180 × 180 px | 1:1 | iOS Safari bookmark & Home Screen icon |
| **App Icons / PWA** | `android-chrome-192.png` | 192 × 192 px | 1:1 | Android PWA launcher icon |
| **App Icons / PWA** | `android-chrome-512.png` | 512 × 512 px | 1:1 | Android PWA splash & store icon |
| **App Icons / PWA** | `favicon-32.png` | 32 × 32 px | 1:1 | High-DPI browser tab favicon |

---

## 5. Visual Aesthetics & Studio Positioning

- **Studio Philosophy:** Precision Engineering · Modern Architecture · Measurable Scale.
- **Tone:** Consumer-grade engineering studio, high-clarity typography, zero gimmicks.
- **Strictly Prohibited:** Generic neon synthwave, cyberpunk gradients, stock illustrations, and cluttered promotional claims.
- **Font Stack:**
  - Wordmark: `'CrazyBlocks', sans-serif`
  - UI / Headlines / Body: `'Inter', sans-serif`
  - Technical / Eyebrows: `'JetBrains Mono', monospace`
