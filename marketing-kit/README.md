# VOOO LABS — Official Marketing & Brand Asset Kit
**Self-Contained Brand Design Tokens, Templates & Production Exporter**  
*Maintained outside `public/` and `src/` to ensure zero impact on production bundle size.*

---

## 1. Quick Start: Regenerating All Assets (PowerShell)

Whenever you adjust copy, service descriptions, or brand colors, run the following PowerShell command from the repository root:

```powershell
node marketing-kit/export.mjs
```

If you modify template layouts or SVGs in `marketing-kit/build-templates.mjs`, rebuild templates first:

```powershell
node marketing-kit/build-templates.mjs
node marketing-kit/export.mjs
```

All 26 assets will be rendered into `marketing-kit/exports/` at exact platform dimensions as crisp PNGs under 5 MB each.

---

## 2. Visual Inspection Gallery (`preview.html`)

To visually inspect all color swatches, typography specimens, and exported marketing assets side-by-side:

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
│   ├── gbp/                    # 2 GBP Logos, 1 Cover banner, 4 Service cards
│   ├── whatsapp/               # 2 Avatars (Light/Dark), 1 Business catalog card
│   ├── linkedin/               # 1 Company Logo, 1 Cover banner, 1 Feed post
│   ├── instagram/              # 1 Profile DP, 1 4:5 Feed post, 1 9:16 Story
│   └── email-signature/        # 3 Email Signatures (Founder, Studio, Minimal)
└── exports/                    # Production rendered PNGs & SVGs (< 5 MB)
    ├── logos/                  # 10 PNGs (2048x2048) + 10 vector SVGs
    ├── gbp/                    # 7 PNGs (720x720, 1024x576, 1200x900)
    ├── whatsapp/               # 3 PNGs (800x800, 1080x1080)
    ├── linkedin/               # 3 PNGs (400x400, 1128x191, 1200x627)
    ├── instagram/              # 3 PNGs (800x800, 1080x1350, 1080x1920)
    └── email-signature/        # 3 Preview PNGs (Founder, Studio, Minimal)
```

---

## 4. Platform Specifications & Safe-Zone Rules

| Platform | Asset Name | Dimensions | Aspect Ratio | Safe-Zone Specification |
| :--- | :--- | :--- | :--- | :--- |
| **Logos** | `wordmark-*.png` | 2048 × 2048 px | 1:1 | High-res master wordmark in Light, Dark, Trans, White, Black |
| **Logos** | `icon-*.png` | 2048 × 2048 px | 1:1 | Master icon in Light, Dark, Trans, White, Black |
| **Logos** | `*.svg` | Vector | Scale | Standalone vector SVGs with embedded base64 CrazyBlocks font |
| **GBP** | `gbp-logo-light.png` | 720 × 720 px | 1:1 | 20% outer circular safe zone (centered within 576px circle) |
| **GBP** | `gbp-logo-dark.png` | 720 × 720 px | 1:1 | 20% outer circular safe zone (centered within 576px circle) |
| **GBP** | `gbp-cover.png` | 1024 × 576 px | 16:9 | Minimal studio brand banner, zero phone numbers |
| **GBP** | `gbp-service-*.png` | 1200 × 900 px | 4:3 | 4 Service Cards: Websites, Web Apps, Software, SEO & AI |
| **WhatsApp** | `whatsapp-dp-*.png` | 800 × 800 px | 1:1 | Circular avatar crop safe (centered within 640px circle) |
| **WhatsApp** | `whatsapp-catalog-card.png` | 1080 × 1080 px | 1:1 | Square 4-systems catalog card |
| **LinkedIn** | `linkedin-logo.png` | 400 × 400 px | 1:1 | Company page profile photo |
| **LinkedIn** | `linkedin-cover.png` | 1128 × 191 px | 5.9:1 | Bottom-left 200px clear to prevent overlap with company avatar |
| **LinkedIn** | `linkedin-post.png` | 1200 × 627 px | 1.91:1 | Standard feed landscape post |
| **Instagram**| `instagram-dp.png` | 800 × 800 px | 1:1 | Circular avatar crop safe |
| **Instagram**| `instagram-post.png` | 1080 × 1350 px | 4:5 | Portrait feed post (optimal Instagram engagement) |
| **Instagram**| `instagram-story.png` | 1080 × 1920 px | 9:16 | Top 250px and bottom 250px clear of critical copy/logos |

---

## 5. Visual Aesthetics & Studio Governance

- **Aesthetic:** Minimal consumer-grade engineering studio.
- **Strictly Prohibited:** Generic neon synthwave, cyberpunk gradients, stock illustrations, and cluttered promotional claims.
- **Font Stack:**
  - Wordmark: `'CrazyBlocks', sans-serif`
  - UI / Headlines / Body: `'Inter', sans-serif`
  - Technical / Eyebrows: `'JetBrains Mono', monospace`
- **Ownership:** 100% Client Source Code Ownership. Direct architecture. Zero vendor lock-in.
