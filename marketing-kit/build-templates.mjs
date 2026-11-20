import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const fontPath = path.join(projectRoot, 'public', 'fonts', 'crazy-blocks', 'crazyblocks.otf');
const fontB64 = fs.readFileSync(fontPath).toString('base64');

const templatesDir = path.join(__dirname, 'templates');

// Common HTML wrapper helper
function createHtmlPage({ width, height, bg, content, extraStyles = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VOOO LABS Template</title>
  <link rel="stylesheet" href="../../shared/brand.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: ${width}px;
      height: ${height}px;
      overflow: hidden;
      background: ${bg};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .canvas {
      width: ${width}px;
      height: ${height}px;
      position: relative;
      overflow: hidden;
      display: flex;
    }
    ${extraStyles}
  </style>
</head>
<body>
  <div class="canvas">
    ${content}
  </div>
</body>
</html>`;
}

// Common SVG wrapper helper with embedded font
function createSvgLogo({ width = 1600, height = 400, viewBox = "0 0 1600 400", bg = null, content }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}">
  <defs>
    <style>
      @font-face {
        font-family: 'CrazyBlocks';
        src: url('data:font/otf;base64,${fontB64}') format('opentype');
      }
      .font-crazyblocks {
        font-family: 'CrazyBlocks', sans-serif;
      }
    </style>
  </defs>
  ${bg ? `<rect width="100%" height="100%" fill="${bg}" />` : ''}
  ${content}
</svg>`;
}

console.log('[build-templates] Generating all marketing-kit templates and SVGs...');

/* ═══════════════════════════════════════════════════════════════════════
   1. LOGOS (templates/logos/)
   ═══════════════════════════════════════════════════════════════════════ */
const logosDir = path.join(templatesDir, 'logos');

// 1.1 Wordmark Variations
const wordmarkVariants = [
  {
    id: 'wordmark-light',
    bg: '#FFFFFF',
    svgBg: '#FFFFFF',
    vColor: '#4285F4', o1Color: '#5B5BD6', o2Color: '#7C3AED', o3Color: '#F97316', labsColor: '#0A0F1E'
  },
  {
    id: 'wordmark-dark',
    bg: '#0A0F1E',
    svgBg: '#0A0F1E',
    vColor: '#4285F4', o1Color: '#5B5BD6', o2Color: '#7C3AED', o3Color: '#F97316', labsColor: '#FFFFFF'
  },
  {
    id: 'wordmark-transparent',
    bg: 'transparent',
    svgBg: null,
    vColor: '#4285F4', o1Color: '#5B5BD6', o2Color: '#7C3AED', o3Color: '#F97316', labsColor: '#0A0F1E'
  },
  {
    id: 'wordmark-white',
    bg: '#0A0F1E', // canvas for HTML preview, SVG transparent with white letters
    svgBg: null,
    vColor: '#FFFFFF', o1Color: '#FFFFFF', o2Color: '#FFFFFF', o3Color: '#FFFFFF', labsColor: '#FFFFFF'
  },
  {
    id: 'wordmark-black',
    bg: '#FFFFFF',
    svgBg: null,
    vColor: '#000000', o1Color: '#000000', o2Color: '#000000', o3Color: '#000000', labsColor: '#000000'
  }
];

for (const variant of wordmarkVariants) {
  // HTML (2048x2048)
  const htmlContent = `
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; padding: 120px;">
      <div style="display: flex; align-items: baseline; font-family: 'CrazyBlocks', sans-serif; font-size: 260px; line-height: 1; letter-spacing: 8px;">
        <span style="color: ${variant.vColor};">V</span><span style="color: ${variant.o1Color};">O</span><span style="color: ${variant.o2Color};">O</span><span style="color: ${variant.o3Color};">O</span>
        <span style="color: ${variant.labsColor}; margin-left: 48px;">LABS</span>
      </div>
    </div>`;

  fs.writeFileSync(
    path.join(logosDir, `${variant.id}.html`),
    createHtmlPage({ width: 2048, height: 2048, bg: variant.bg, content: htmlContent }),
    'utf8'
  );

  // SVG
  const svgContent = `
    <text x="50%" y="60%" text-anchor="middle" dominant-baseline="middle" class="font-crazyblocks" font-size="160" letter-spacing="4">
      <tspan fill="${variant.vColor}">V</tspan><tspan fill="${variant.o1Color}">O</tspan><tspan fill="${variant.o2Color}">O</tspan><tspan fill="${variant.o3Color}">O</tspan>
      <tspan fill="${variant.labsColor}" dx="24">LABS</tspan>
    </text>`;

  fs.writeFileSync(
    path.join(logosDir, `${variant.id}.svg`),
    createSvgLogo({ width: 1600, height: 400, viewBox: "0 0 1600 400", bg: variant.svgBg, content: svgContent }),
    'utf8'
  );
}

// 1.2 Icon-Only Variations (Square 2048x2048)
const iconVariants = [
  {
    id: 'icon-light',
    bg: '#FFFFFF',
    svgBg: '#FFFFFF',
    cardBg: '#FFFFFF',
    cardBorder: '2px solid rgba(226, 232, 240, 0.9)',
    vColor: '#4285F4', o1Color: '#5B5BD6', o2Color: '#7C3AED', o3Color: '#F97316'
  },
  {
    id: 'icon-dark',
    bg: '#0A0F1E',
    svgBg: '#0A0F1E',
    cardBg: '#0F172A',
    cardBorder: '2px solid rgba(255, 255, 255, 0.12)',
    vColor: '#4285F4', o1Color: '#5B5BD6', o2Color: '#7C3AED', o3Color: '#F97316'
  },
  {
    id: 'icon-transparent',
    bg: 'transparent',
    svgBg: null,
    cardBg: 'transparent',
    cardBorder: 'none',
    vColor: '#4285F4', o1Color: '#5B5BD6', o2Color: '#7C3AED', o3Color: '#F97316'
  },
  {
    id: 'icon-white',
    bg: '#0A0F1E',
    svgBg: null,
    cardBg: 'transparent',
    cardBorder: 'none',
    vColor: '#FFFFFF', o1Color: '#FFFFFF', o2Color: '#FFFFFF', o3Color: '#FFFFFF'
  },
  {
    id: 'icon-black',
    bg: '#FFFFFF',
    svgBg: null,
    cardBg: 'transparent',
    cardBorder: 'none',
    vColor: '#000000', o1Color: '#000000', o2Color: '#000000', o3Color: '#000000'
  }
];

for (const variant of iconVariants) {
  // HTML (2048x2048)
  const htmlContent = `
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
      <div style="width: 1400px; height: 1400px; border-radius: 360px; background: ${variant.cardBg}; border: ${variant.cardBorder}; display: flex; align-items: center; justify-content: center; box-shadow: 0 40px 120px rgba(0,0,0,0.12);">
        <div style="display: flex; align-items: baseline; font-family: 'CrazyBlocks', sans-serif; font-size: 340px; line-height: 1; letter-spacing: 12px;">
          <span style="color: ${variant.vColor};">V</span><span style="color: ${variant.o1Color};">O</span><span style="color: ${variant.o2Color};">O</span><span style="color: ${variant.o3Color};">O</span>
        </div>
      </div>
    </div>`;

  fs.writeFileSync(
    path.join(logosDir, `${variant.id}.html`),
    createHtmlPage({ width: 2048, height: 2048, bg: variant.bg, content: htmlContent }),
    'utf8'
  );

  // SVG
  const svgContent = `
    <g transform="translate(400, 400)">
      <rect width="800" height="800" rx="200" fill="${variant.cardBg === 'transparent' ? 'none' : variant.cardBg}" stroke="${variant.cardBorder === 'none' ? 'none' : (variant.bg === '#FFFFFF' ? '#E2E8F0' : 'rgba(255,255,255,0.15)')}" stroke-width="4" />
      <text x="400" y="470" text-anchor="middle" dominant-baseline="middle" class="font-crazyblocks" font-size="200" letter-spacing="8">
        <tspan fill="${variant.vColor}">V</tspan><tspan fill="${variant.o1Color}">O</tspan><tspan fill="${variant.o2Color}">O</tspan><tspan fill="${variant.o3Color}">O</tspan>
      </text>
    </g>`;

  fs.writeFileSync(
    path.join(logosDir, `${variant.id}.svg`),
    createSvgLogo({ width: 1600, height: 1600, viewBox: "0 0 1600 1600", bg: variant.svgBg, content: svgContent }),
    'utf8'
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   2. GOOGLE BUSINESS PROFILE (templates/gbp/)
   ═══════════════════════════════════════════════════════════════════════ */
const gbpDir = path.join(templatesDir, 'gbp');

// 2.1 gbp-logo-light.html (720x720, 20% safe zone)
fs.writeFileSync(
  path.join(gbpDir, 'gbp-logo-light.html'),
  createHtmlPage({
    width: 720,
    height: 720,
    bg: '#FFFFFF',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
        <!-- Circular 20% safe guide circle (diameter 576px) -->
        <div style="width: 540px; height: 540px; border-radius: 50%; border: 1.5px solid rgba(226, 232, 240, 0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #FFFFFF 65%, #F8FAFC 100%);">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 82px; line-height: 1; letter-spacing: 3px; margin-bottom: 14px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #0A0F1E; margin-left: 14px;">LABS</span>
          </div>
          <div style="width: 48px; height: 3px; background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); border-radius: 2px; margin-bottom: 14px;"></div>
          <div style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: #0A0F1E; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 6px;">Digital Product Studio</div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: #64748B; letter-spacing: 2px; text-transform: uppercase;">Maharashtra &bull; India</div>
        </div>
      </div>`
  }),
  'utf8'
);

// 2.2 gbp-logo-dark.html (720x720, 20% safe zone)
fs.writeFileSync(
  path.join(gbpDir, 'gbp-logo-dark.html'),
  createHtmlPage({
    width: 720,
    height: 720,
    bg: '#0A0F1E',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
        <!-- Circular 20% safe guide circle -->
        <div style="width: 540px; height: 540px; border-radius: 50%; border: 1.5px solid rgba(255, 255, 255, 0.12); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #0F172A 55%, #0A0F1E 100%); box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 82px; line-height: 1; letter-spacing: 3px; margin-bottom: 14px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
          </div>
          <div style="width: 48px; height: 3px; background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); border-radius: 2px; margin-bottom: 14px;"></div>
          <div style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: #F8FAFC; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 6px;">Digital Product Studio</div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: #94A3B8; letter-spacing: 2px; text-transform: uppercase;">Maharashtra &bull; India</div>
        </div>
      </div>`
  }),
  'utf8'
);

// 2.3 gbp-cover.html (1024x576, clean minimal brand banner, no phone number, minimal copy)
fs.writeFileSync(
  path.join(gbpDir, 'gbp-cover.html'),
  createHtmlPage({
    width: 1024,
    height: 576,
    bg: '#0A0F1E',
    content: `
      <!-- Grid background -->
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
      <!-- Ambient subtle radial glow -->
      <div style="position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.18) 0%, rgba(124, 58, 237, 0.10) 40%, transparent 70%);"></div>

      <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 56px 64px; display: flex; flex-direction: column; justify-content: space-between;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 56px; line-height: 1; letter-spacing: 2px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 12px;">LABS</span>
          </div>
          <div style="padding: 8px 18px; border-radius: 9999px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: #CBD5E1; letter-spacing: 1.5px; text-transform: uppercase;">
            Engineering Studio
          </div>
        </div>

        <!-- Center headline -->
        <div>
          <h1 style="font-family: 'Inter', sans-serif; font-size: 38px; font-weight: 800; color: #FFFFFF; line-height: 1.2; letter-spacing: -1px; max-width: 780px;">
            Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
          </h1>
          <p style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 400; color: #94A3B8; margin-top: 14px; letter-spacing: -0.2px;">
            Custom Websites &bull; Custom Web Apps &bull; Business Software &bull; Search &amp; AI
          </p>
        </div>

        <!-- Bottom hubs & domain (NO phone number) -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-family: 'Inter', sans-serif; font-size: 13px;">
          <div style="color: #64748B; font-weight: 500;">
            <span style="color: #F97316; font-family: 'JetBrains Mono', monospace; font-weight: 700; text-transform: uppercase; margin-right: 6px;">Hubs:</span>
            Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-weight: 600; color: #4285F4; letter-spacing: 1px;">
            vooolabs.in
          </div>
        </div>
      </div>`
  }),
  'utf8'
);

// 2.4 Service Cards (1200x900)
const serviceCards = [
  {
    file: 'gbp-service-websites.html',
    num: '01',
    accent: '#4285F4',
    title: 'Business Websites',
    lead: 'Websites Engineered to Turn Visitors into Direct Inquiries.',
    bullets: [
      'Sub-second load speeds with zero layout shifts',
      'Seamless WhatsApp instant communication routing',
      '100% legal source code ownership & zero lock-in'
    ]
  },
  {
    file: 'gbp-service-webapps.html',
    num: '02',
    accent: '#7C3AED',
    title: 'Custom Web Apps & Portals',
    lead: 'Browser Apps Built for Any Screen with Zero App Store Friction.',
    bullets: [
      'Instant access on desktop, tablet, and mobile browsers',
      'Zero 30% App Store commissions or gatekeeper delays',
      'Tailored client portals, dashboards, and booking engines'
    ]
  },
  {
    file: 'gbp-service-software.html',
    num: '03',
    accent: '#F97316',
    title: 'Custom Business Software',
    lead: 'Internal Operations Software Shaped Around How You Work.',
    bullets: [
      'Replace chaotic spreadsheets with custom internal ERP/CRM',
      'Real-time inventory tracking and multi-tier role permissions',
      'Automated invoice generation and operational pipelines'
    ]
  },
  {
    file: 'gbp-service-seo-ai.html',
    num: '04',
    accent: '#10B981',
    title: 'Technical SEO & AI Search',
    lead: 'Four Ways Buyers Find You: Google, AI Engines & Maps.',
    bullets: [
      'Rigorous technical Google SEO with schema architecture',
      'Generative Engine Optimization (GEO) for ChatGPT & Perplexity',
      'High-intent Google Maps 3-Pack local search authority'
    ]
  }
];

for (const sc of serviceCards) {
  const content = `
    <!-- Grid pattern -->
    <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"></div>
    <!-- Ambient glow corner -->
    <div style="position: absolute; top: -120px; right: -120px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, ${sc.accent}25 0%, transparent 70%);"></div>

    <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 72px 80px; display: flex; flex-direction: column; justify-content: space-between;">
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 52px; line-height: 1; letter-spacing: 2px;">
          <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
          <span style="color: #FFFFFF; margin-left: 12px;">LABS</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; padding: 10px 20px; border-radius: 9999px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12);">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${sc.accent};"></span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #FFFFFF; letter-spacing: 1.5px;">SYSTEM ${sc.num}</span>
        </div>
      </div>

      <!-- Core service content -->
      <div style="max-width: 960px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: ${sc.accent}; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">
          Core Capability &bull; ${sc.title}
        </div>
        <h2 style="font-family: 'Inter', sans-serif; font-size: 46px; font-weight: 800; color: #FFFFFF; line-height: 1.18; letter-spacing: -1.2px; margin-bottom: 36px;">
          ${sc.lead}
        </h2>

        <!-- 3 Feature Points -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${sc.bullets.map(b => `
            <div style="display: flex; align-items: center; gap: 16px; background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px 20px;">
              <div style="width: 24px; height: 24px; border-radius: 50%; background: ${sc.accent}20; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${sc.accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 500; color: #E2E8F0;">${b}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Footer Info -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="font-family: 'Inter', sans-serif; font-size: 15px; color: #94A3B8;">
          100% Client Source Code Ownership &bull; Direct Architecture
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 600; color: #FFFFFF;">
          vooolabs.in
        </div>
      </div>
    </div>`;

  fs.writeFileSync(
    path.join(gbpDir, sc.file),
    createHtmlPage({ width: 1200, height: 900, bg: '#0A0F1E', content }),
    'utf8'
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3. WHATSAPP (templates/whatsapp/)
   ═══════════════════════════════════════════════════════════════════════ */
const waDir = path.join(templatesDir, 'whatsapp');

// 3.1 whatsapp-dp-light.html (800x800, circular crop safe)
fs.writeFileSync(
  path.join(waDir, 'whatsapp-dp-light.html'),
  createHtmlPage({
    width: 800,
    height: 800,
    bg: '#FFFFFF',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 620px; height: 620px; border-radius: 50%; border: 2px solid rgba(226, 232, 240, 0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #FFFFFF 60%, #F8FAFC 100%);">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 96px; line-height: 1; letter-spacing: 4px; margin-bottom: 16px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #0A0F1E; margin-left: 14px;">LABS</span>
          </div>
          <div style="width: 52px; height: 4px; background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); border-radius: 2px; margin-bottom: 16px;"></div>
          <div style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: #0A0F1E; letter-spacing: 4px; text-transform: uppercase;">Digital Product Studio</div>
        </div>
      </div>`
  }),
  'utf8'
);

// 3.2 whatsapp-dp-dark.html (800x800, circular crop safe)
fs.writeFileSync(
  path.join(waDir, 'whatsapp-dp-dark.html'),
  createHtmlPage({
    width: 800,
    height: 800,
    bg: '#0A0F1E',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 620px; height: 620px; border-radius: 50%; border: 2px solid rgba(255, 255, 255, 0.12); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #0F172A 55%, #0A0F1E 100%); box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 96px; line-height: 1; letter-spacing: 4px; margin-bottom: 16px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
          </div>
          <div style="width: 52px; height: 4px; background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); border-radius: 2px; margin-bottom: 16px;"></div>
          <div style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: #F8FAFC; letter-spacing: 4px; text-transform: uppercase;">Digital Product Studio</div>
        </div>
      </div>`
  }),
  'utf8'
);

// 3.3 whatsapp-catalog-card.html (1080x1080, square 4-systems catalog)
fs.writeFileSync(
  path.join(waDir, 'whatsapp-catalog-card.html'),
  createHtmlPage({
    width: 1080,
    height: 1080,
    bg: '#0A0F1E',
    content: `
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
      
      <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 72px; display: flex; flex-direction: column; justify-content: space-between;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; line-height: 1; letter-spacing: 2px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
          </div>
          <div style="padding: 10px 20px; border-radius: 9999px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #10B981; letter-spacing: 1px;">
            OFFICIAL CATALOG
          </div>
        </div>

        <!-- Headline -->
        <div>
          <h2 style="font-family: 'Inter', sans-serif; font-size: 40px; font-weight: 800; color: #FFFFFF; line-height: 1.2; letter-spacing: -1px;">
            Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
          </h2>
          <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #94A3B8; margin-top: 10px;">
            Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
          </p>
        </div>

        <!-- 4 Quadrants -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 22px;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #4285F4; margin-bottom: 6px;">01 &bull; WEBSITES</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #FFFFFF;">Custom Websites</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #94A3B8; margin-top: 4px;">Sub-second speed, interactive motion, WhatsApp direct routing.</div>
          </div>
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 22px;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #7C3AED; margin-bottom: 6px;">02 &bull; WEB APPS</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #FFFFFF;">Web Apps &amp; Portals</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #94A3B8; margin-top: 4px;">Zero app store friction, cross-device client dashboards &amp; SaaS.</div>
          </div>
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 22px;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #F97316; margin-bottom: 6px;">03 &bull; SOFTWARE</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #FFFFFF;">Business Software</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #94A3B8; margin-top: 4px;">Tailored ERP/CRM, inventory control, automated workflows.</div>
          </div>
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 22px;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #10B981; margin-bottom: 6px;">04 &bull; DISCOVERY</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #FFFFFF;">Search &amp; AI Engine</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #94A3B8; margin-top: 4px;">Technical Google SEO, ChatGPT/Perplexity AI &amp; Maps 3-Pack.</div>
          </div>
        </div>

        <!-- Footer -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #94A3B8;">
            100% Client Source Code Ownership
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 600; color: #4285F4;">
            vooolabs.in
          </div>
        </div>
      </div>`
  }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   4. LINKEDIN (templates/linkedin/)
   ═══════════════════════════════════════════════════════════════════════ */
const liDir = path.join(templatesDir, 'linkedin');

// 4.1 linkedin-logo.html (400x400)
fs.writeFileSync(
  path.join(liDir, 'linkedin-logo.html'),
  createHtmlPage({
    width: 400,
    height: 400,
    bg: '#0A0F1E',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 320px; height: 320px; border-radius: 50%; border: 1.5px solid rgba(255, 255, 255, 0.12); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #0F172A 55%, #0A0F1E 100%);">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 50px; line-height: 1; letter-spacing: 2px; margin-bottom: 8px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 8px;">LABS</span>
          </div>
          <div style="font-family: 'Inter', sans-serif; font-size: 9px; font-weight: 700; color: #94A3B8; letter-spacing: 2.5px; text-transform: uppercase;">Digital Product Studio</div>
        </div>
      </div>`
  }),
  'utf8'
);

// 4.2 linkedin-cover.html (1128x191, keep bottom-left safe area clear for profile photo overlap!)
fs.writeFileSync(
  path.join(liDir, 'linkedin-cover.html'),
  createHtmlPage({
    width: 1128,
    height: 191,
    bg: '#0A0F1E',
    content: `
      <!-- Subtle grid background -->
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 24px 24px;"></div>
      <!-- Right ambient glow -->
      <div style="position: absolute; top: -50px; right: -50px; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.20) 0%, rgba(124, 58, 237, 0.10) 40%, transparent 70%);"></div>

      <!-- Content pushed to center & right to keep bottom-left safe for the 160px overlapping logo -->
      <div style="width: 100%; height: 100%; position: relative; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 0 48px 0 240px;">
        <div>
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 34px; line-height: 1; letter-spacing: 2px; margin-bottom: 8px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 8px;">LABS</span>
            <span style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: #94A3B8; margin-left: 14px; letter-spacing: 1px; text-transform: uppercase;">&bull; Digital Product Studio</span>
          </div>
          <div style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.2px;">
            Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
          </div>
          <div style="font-family: 'Inter', sans-serif; font-size: 12px; color: #64748B; margin-top: 4px;">
            Custom Websites &bull; Web Apps &bull; Business Software &bull; Search &amp; AI &bull; Maharashtra, India
          </div>
        </div>

        <div style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 600; color: #4285F4; letter-spacing: 1px;">
          vooolabs.in
        </div>
      </div>`
  }),
  'utf8'
);

// 4.3 linkedin-post.html (1200x627, 1.91:1)
fs.writeFileSync(
  path.join(liDir, 'linkedin-post.html'),
  createHtmlPage({
    width: 1200,
    height: 627,
    bg: '#0A0F1E',
    content: `
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div style="position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.16) 0%, rgba(124, 58, 237, 0.10) 40%, transparent 70%);"></div>

      <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 56px 64px; display: flex; flex-direction: column; justify-content: space-between;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 56px; line-height: 1; letter-spacing: 2px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 12px;">LABS</span>
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #94A3B8; letter-spacing: 1.5px; text-transform: uppercase;">
            Product Engineering
          </div>
        </div>

        <!-- Headline & Value prop -->
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">
            Architectural Philosophy
          </div>
          <h2 style="font-family: 'Inter', sans-serif; font-size: 44px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1px; max-width: 860px;">
            First make it work. <br><span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Then make it beautiful.</span>
          </h2>
          <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #94A3B8; margin-top: 16px; max-width: 800px; line-height: 1.5;">
            We engineer high-speed business websites, browser web applications, and internal software with 100% source code ownership. Zero recurring vendor lock-in.
          </p>
        </div>

        <!-- Footer -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">
            Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 600; color: #FFFFFF;">
            vooolabs.in
          </div>
        </div>
      </div>`
  }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   5. INSTAGRAM (templates/instagram/)
   ═══════════════════════════════════════════════════════════════════════ */
const igDir = path.join(templatesDir, 'instagram');

// 5.1 instagram-dp.html (800x800, circular crop safe)
fs.writeFileSync(
  path.join(igDir, 'instagram-dp.html'),
  createHtmlPage({
    width: 800,
    height: 800,
    bg: '#0A0F1E',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 620px; height: 620px; border-radius: 50%; border: 2px solid rgba(255, 255, 255, 0.12); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #0F172A 55%, #0A0F1E 100%);">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 96px; line-height: 1; letter-spacing: 4px; margin-bottom: 16px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
          </div>
          <div style="width: 52px; height: 4px; background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); border-radius: 2px; margin-bottom: 16px;"></div>
          <div style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: #F8FAFC; letter-spacing: 4px; text-transform: uppercase;">Digital Product Studio</div>
        </div>
      </div>`
  }),
  'utf8'
);

// 5.2 instagram-post.html (1080x1350, 4:5 portrait)
fs.writeFileSync(
  path.join(igDir, 'instagram-post.html'),
  createHtmlPage({
    width: 1080,
    height: 1350,
    bg: '#0A0F1E',
    content: `
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"></div>
      <div style="position: absolute; top: -150px; right: -150px; width: 650px; height: 650px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.20) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);"></div>

      <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 88px 80px; display: flex; flex-direction: column; justify-content: space-between;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; line-height: 1; letter-spacing: 2px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
          </div>
          <div style="padding: 10px 22px; border-radius: 9999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #CBD5E1; letter-spacing: 1.5px; text-transform: uppercase;">
            Studio Architecture
          </div>
        </div>

        <!-- Headline & Manifesto -->
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;">
            Engineering Standard
          </div>
          <h1 style="font-family: 'Inter', sans-serif; font-size: 58px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1.8px;">
            Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
          </h1>
          <p style="font-family: 'Inter', sans-serif; font-size: 20px; color: #94A3B8; margin-top: 24px; line-height: 1.55; max-width: 860px;">
            No generic templates. No vendor lock-in. Full private GitHub repository handover with 100% intellectual property ownership upon launch.
          </p>
        </div>

        <!-- 4 Pillars List -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #4285F4;">01 &bull; SYSTEM</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #FFFFFF; margin-top: 2px;">Business Websites</div>
            </div>
            <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #94A3B8;">Sub-second speed</div>
          </div>
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #7C3AED;">02 &bull; SYSTEM</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #FFFFFF; margin-top: 2px;">Web Apps &amp; Portals</div>
            </div>
            <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #94A3B8;">Zero app store friction</div>
          </div>
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #F97316;">03 &bull; SYSTEM</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #FFFFFF; margin-top: 2px;">Business Software</div>
            </div>
            <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #94A3B8;">Custom ERP / CRM</div>
          </div>
          <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #10B981;">04 &bull; SYSTEM</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #FFFFFF; margin-top: 2px;">Search &amp; AI Engine</div>
            </div>
            <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #94A3B8;">Google SEO &amp; Maps</div>
          </div>
        </div>

        <!-- Footer -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-family: 'Inter', sans-serif; font-size: 15px; color: #94A3B8;">
            Maharashtra &bull; India
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: #4285F4;">
            vooolabs.in
          </div>
        </div>
      </div>`
  }),
  'utf8'
);

// 5.3 instagram-story.html (1080x1920, 9:16 vertical, top/bottom 250px safe zones)
fs.writeFileSync(
  path.join(igDir, 'instagram-story.html'),
  createHtmlPage({
    width: 1080,
    height: 1920,
    bg: '#0A0F1E',
    content: `
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"></div>
      <div style="position: absolute; top: 100px; right: -150px; width: 750px; height: 750px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.22) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);"></div>

      <!-- Safe zone container: 260px top padding and 260px bottom padding -->
      <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 260px 80px 260px 80px; display: flex; flex-direction: column; justify-content: space-between;">
        
        <!-- Brand identity -->
        <div>
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 72px; line-height: 1; letter-spacing: 2px; margin-bottom: 20px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
          </div>
          <div style="display: inline-block; padding: 10px 22px; border-radius: 9999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #CBD5E1; letter-spacing: 2px; text-transform: uppercase;">
            Digital Product Studio
          </div>
        </div>

        <!-- Center message -->
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 18px;">
            Engineering Digital Products
          </div>
          <h1 style="font-family: 'Inter', sans-serif; font-size: 64px; font-weight: 800; color: #FFFFFF; line-height: 1.12; letter-spacing: -2px;">
            Obsession &amp; <br><span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Scale.</span>
          </h1>
          <p style="font-family: 'Inter', sans-serif; font-size: 22px; color: #94A3B8; margin-top: 28px; line-height: 1.5; max-width: 880px;">
            We engineer custom business websites, progressive web applications, internal tools, and search dominance for ambitious companies.
          </p>
        </div>

        <!-- Service tags card -->
        <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 32px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #CBD5E1; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 18px;">
            Core Engineering Systems
          </div>
          <div style="display: flex; flex-direction: column; gap: 14px; font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; color: #FFFFFF;">
            <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #4285F4;">01</span> Business Websites</div>
            <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #7C3AED;">02</span> Custom Web Apps &amp; Portals</div>
            <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #F97316;">03</span> Custom Business Software</div>
            <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #10B981;">04</span> Technical SEO &amp; AI Search</div>
          </div>
        </div>

        <!-- Bottom Link Safe Zone -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-family: 'Inter', sans-serif; font-size: 16px; color: #94A3B8;">
            Maharashtra &bull; India
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; color: #4285F4; letter-spacing: 1px;">
            vooolabs.in
          </div>
        </div>
      </div>`
  }),
  'utf8'
);

console.log('[build-templates] All HTML and SVG templates successfully generated.');
