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
│   ├── business-card/          # 2 Visiting cards (Obsidian Dark & Clean Light)
│   ├── letterhead/             # 2 Proposal/Invoice headers (Dark & Light)
│   ├── social-card/            # 2 Universal OpenGraph share cards (Dark & Light)
│   └── email-signature/        # 3 Email Signatures (Founder, Studio, Minimal)
└── exports/                    # Production rendered PNGs & SVGs (< 5 MB)
    ├── logos/                  # 10 PNGs (2048x2048) + 10 vector SVGs
    ├── gbp/                    # 11 PNGs (Logos, Covers, Service Cards)
    ├── whatsapp/               # 4 PNGs (DPs & Catalog Cards)
    ├── linkedin/               # 6 PNGs (Logos, Covers, Posts)
    ├── instagram/              # 6 PNGs (DPs, Posts, Stories)
    ├── business-card/          # 2 PNGs (Visiting cards @ 300 DPI)
    ├── letterhead/             # 2 PNGs (Proposal & Invoice headers)
    ├── social-card/            # 2 PNGs (Universal OpenGraph cards)
    └── email-signature/        # 3 Preview PNGs (Founder, Studio, Minimal)
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
| **Social Card** | `og-card-*.png` | 1200 × 630 px | 1.91:1 | Universal rich-link card for Twitter/X, Discord, Slack, iMessage |

---

## 5. Visual Aesthetics & Studio Positioning

- **Studio Philosophy:** Precision Engineering · Modern Architecture · Measurable Scale.
- **Tone:** Consumer-grade engineering studio, high-clarity typography, zero gimmicks.
- **Strictly Prohibited:** Generic neon synthwave, cyberpunk gradients, stock illustrations, and cluttered promotional claims.
- **Font Stack:**
  - Wordmark: `'CrazyBlocks', sans-serif`
  - UI / Headlines / Body: `'Inter', sans-serif`
  - Technical / Eyebrows: `'JetBrains Mono', monospace`
