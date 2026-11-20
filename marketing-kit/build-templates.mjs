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

console.log('[build-templates] Generating all marketing-kit templates and SVGs (Light & Dark Parity)...');

/* ═══════════════════════════════════════════════════════════════════════
   1. LOGOS (templates/logos/)
   ═══════════════════════════════════════════════════════════════════════ */
const logosDir = path.join(templatesDir, 'logos');
fs.mkdirSync(logosDir, { recursive: true });

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
    bg: '#0A0F1E',
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
fs.mkdirSync(gbpDir, { recursive: true });

// 2.1 GBP Logos (Light & Dark)
fs.writeFileSync(
  path.join(gbpDir, 'gbp-logo-light.html'),
  createHtmlPage({
    width: 720,
    height: 720,
    bg: '#FFFFFF',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
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

fs.writeFileSync(
  path.join(gbpDir, 'gbp-logo-dark.html'),
  createHtmlPage({
    width: 720,
    height: 720,
    bg: '#0A0F1E',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative;">
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

// 2.2 GBP Covers (Dark & Light)
fs.writeFileSync(
  path.join(gbpDir, 'gbp-cover-dark.html'),
  createHtmlPage({
    width: 1024,
    height: 576,
    bg: '#0A0F1E',
    content: `
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div style="position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.18) 0%, rgba(124, 58, 237, 0.10) 40%, transparent 70%);"></div>

      <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 56px 64px; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 56px; line-height: 1; letter-spacing: 2px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #FFFFFF; margin-left: 12px;">LABS</span>
          </div>
          <div style="padding: 8px 18px; border-radius: 9999px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: #CBD5E1; letter-spacing: 1.5px; text-transform: uppercase;">
            Digital Product Studio
          </div>
        </div>

        <div>
          <h1 style="font-family: 'Inter', sans-serif; font-size: 38px; font-weight: 800; color: #FFFFFF; line-height: 1.2; letter-spacing: -1px; max-width: 780px;">
            Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
          </h1>
          <p style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 400; color: #94A3B8; margin-top: 14px; letter-spacing: -0.2px;">
            Custom Websites &bull; Custom Web Apps &bull; Business Software &bull; Search &amp; AI
          </p>
        </div>

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

// Copy gbp-cover-dark.html to gbp-cover.html for backward compatibility
fs.copyFileSync(path.join(gbpDir, 'gbp-cover-dark.html'), path.join(gbpDir, 'gbp-cover.html'));

fs.writeFileSync(
  path.join(gbpDir, 'gbp-cover-light.html'),
  createHtmlPage({
    width: 1024,
    height: 576,
    bg: '#FFFFFF',
    content: `
      <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div style="position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.10) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%);"></div>

      <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 56px 64px; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 56px; line-height: 1; letter-spacing: 2px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #0A0F1E; margin-left: 12px;">LABS</span>
          </div>
          <div style="padding: 8px 18px; border-radius: 9999px; background: #F8FAFC; border: 1px solid #E2E8F0; font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #0A0F1E; letter-spacing: 1.5px; text-transform: uppercase;">
            Digital Product Studio
          </div>
        </div>

        <div>
          <h1 style="font-family: 'Inter', sans-serif; font-size: 38px; font-weight: 800; color: #020617; line-height: 1.2; letter-spacing: -1px; max-width: 780px;">
            Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
          </h1>
          <p style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500; color: #475569; margin-top: 14px; letter-spacing: -0.2px;">
            Custom Websites &bull; Custom Web Apps &bull; Business Software &bull; Search &amp; AI
          </p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid #E2E8F0; font-family: 'Inter', sans-serif; font-size: 13px;">
          <div style="color: #64748B; font-weight: 500;">
            <span style="color: #F97316; font-family: 'JetBrains Mono', monospace; font-weight: 700; text-transform: uppercase; margin-right: 6px;">Hubs:</span>
            Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #4285F4; letter-spacing: 1px;">
            vooolabs.in
          </div>
        </div>
      </div>`
  }),
  'utf8'
);

// 2.3 GBP Service Cards (Dark & Light Parity)
const serviceDefinitions = [
  {
    base: 'gbp-service-websites',
    num: '01',
    accent: '#4285F4',
    title: 'Business Websites',
    lead: 'Websites Engineered to Turn Visitors into Direct Inquiries.',
    bullets: [
      'Sub-second load speeds with zero layout shifts',
      'Seamless WhatsApp instant communication routing',
      'Modern Next/React architecture built for high conversions'
    ]
  },
  {
    base: 'gbp-service-webapps',
    num: '02',
    accent: '#7C3AED',
    title: 'Custom Web Apps & Portals',
    lead: 'Browser Apps Built for Any Screen with Zero App Store Friction.',
    bullets: [
      'Instant access across desktop, tablet, and mobile browsers',
      'Zero 30% App Store fees or gatekeeper deployment delays',
      'Tailored client portals, dashboards, and booking engines'
    ]
  },
  {
    base: 'gbp-service-software',
    num: '03',
    accent: '#F97316',
    title: 'Custom Business Software',
    lead: 'Internal Operations Software Shaped Around How You Work.',
    bullets: [
      'Replace chaotic spreadsheets with custom internal ERP & CRM',
      'Real-time inventory tracking and multi-tier role permissions',
      'Automated invoice generation and operational workflows'
    ]
  },
  {
    base: 'gbp-service-seo-ai',
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

for (const sc of serviceDefinitions) {
  // Dark variant
  const darkContent = `
    <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"></div>
    <div style="position: absolute; top: -120px; right: -120px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, ${sc.accent}25 0%, transparent 70%);"></div>

    <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 72px 80px; display: flex; flex-direction: column; justify-content: space-between;">
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

      <div style="max-width: 960px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: ${sc.accent}; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">
          Core Capability &bull; ${sc.title}
        </div>
        <h2 style="font-family: 'Inter', sans-serif; font-size: 46px; font-weight: 800; color: #FFFFFF; line-height: 1.18; letter-spacing: -1.2px; margin-bottom: 36px;">
          ${sc.lead}
        </h2>

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

      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="font-family: 'Inter', sans-serif; font-size: 15px; color: #94A3B8;">
          Digital Product Studio &bull; Modern Full-Stack Engineering
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 600; color: #FFFFFF;">
          vooolabs.in
        </div>
      </div>
    </div>`;

  fs.writeFileSync(
    path.join(gbpDir, `${sc.base}-dark.html`),
    createHtmlPage({ width: 1200, height: 900, bg: '#0A0F1E', content: darkContent }),
    'utf8'
  );
  fs.writeFileSync(
    path.join(gbpDir, `${sc.base}.html`),
    createHtmlPage({ width: 1200, height: 900, bg: '#0A0F1E', content: darkContent }),
    'utf8'
  );

  // Light variant
  const lightContent = `
    <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 48px 48px;"></div>
    <div style="position: absolute; top: -120px; right: -120px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, ${sc.accent}15 0%, transparent 70%);"></div>

    <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 72px 80px; display: flex; flex-direction: column; justify-content: space-between;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 52px; line-height: 1; letter-spacing: 2px;">
          <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
          <span style="color: #0A0F1E; margin-left: 12px;">LABS</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; padding: 10px 20px; border-radius: 9999px; background: #FFFFFF; border: 1px solid #E2E8F0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${sc.accent};"></span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #0F172A; letter-spacing: 1.5px;">SYSTEM ${sc.num}</span>
        </div>
      </div>

      <div style="max-width: 960px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: ${sc.accent}; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">
          Core Capability &bull; ${sc.title}
        </div>
        <h2 style="font-family: 'Inter', sans-serif; font-size: 46px; font-weight: 800; color: #020617; line-height: 1.18; letter-spacing: -1.2px; margin-bottom: 36px;">
          ${sc.lead}
        </h2>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${sc.bullets.map(b => `
            <div style="display: flex; align-items: center; gap: 16px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 16px 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
              <div style="width: 24px; height: 24px; border-radius: 50%; background: ${sc.accent}15; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${sc.accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; color: #1E293B;">${b}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid #E2E8F0;">
        <div style="font-family: 'Inter', sans-serif; font-size: 15px; color: #64748B;">
          Digital Product Studio &bull; Modern Full-Stack Engineering
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 700; color: #4285F4;">
          vooolabs.in
        </div>
      </div>
    </div>`;

  fs.writeFileSync(
    path.join(gbpDir, `${sc.base}-light.html`),
    createHtmlPage({ width: 1200, height: 900, bg: '#F8FAFC', content: lightContent }),
    'utf8'
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3. WHATSAPP (templates/whatsapp/)
   ═══════════════════════════════════════════════════════════════════════ */
const waDir = path.join(templatesDir, 'whatsapp');
fs.mkdirSync(waDir, { recursive: true });

// 3.1 DP Light & Dark
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

// 3.2 Catalog Card Dark & Light
const waCatalogDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
  
  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 72px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
      </div>
      <div style="padding: 10px 20px; border-radius: 9999px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #10B981; letter-spacing: 1px;">
        OFFICIAL CATALOG
      </div>
    </div>

    <div>
      <h2 style="font-family: 'Inter', sans-serif; font-size: 40px; font-weight: 800; color: #FFFFFF; line-height: 1.2; letter-spacing: -1px;">
        Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
      </h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #94A3B8; margin-top: 10px;">
        Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </p>
    </div>

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

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
      <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #94A3B8;">
        Digital Product Studio &bull; Maharashtra, India
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 600; color: #4285F4;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(waDir, 'whatsapp-catalog-card-dark.html'),
  createHtmlPage({ width: 1080, height: 1080, bg: '#0A0F1E', content: waCatalogDark }),
  'utf8'
);
fs.writeFileSync(
  path.join(waDir, 'whatsapp-catalog-card.html'),
  createHtmlPage({ width: 1080, height: 1080, bg: '#0A0F1E', content: waCatalogDark }),
  'utf8'
);

const waCatalogLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 40px 40px;"></div>
  
  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 72px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 14px;">LABS</span>
      </div>
      <div style="padding: 10px 20px; border-radius: 9999px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #059669; letter-spacing: 1px;">
        OFFICIAL CATALOG
      </div>
    </div>

    <div>
      <h2 style="font-family: 'Inter', sans-serif; font-size: 40px; font-weight: 800; color: #020617; line-height: 1.2; letter-spacing: -1px;">
        Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
      </h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #475569; margin-top: 10px;">
        Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #4285F4; margin-bottom: 6px;">01 &bull; WEBSITES</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #0F172A;">Custom Websites</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #64748B; margin-top: 4px;">Sub-second speed, interactive motion, WhatsApp direct routing.</div>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #7C3AED; margin-bottom: 6px;">02 &bull; WEB APPS</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #0F172A;">Web Apps &amp; Portals</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #64748B; margin-top: 4px;">Zero app store friction, cross-device client dashboards &amp; SaaS.</div>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #F97316; margin-bottom: 6px;">03 &bull; SOFTWARE</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #0F172A;">Business Software</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #64748B; margin-top: 4px;">Tailored ERP/CRM, inventory control, automated workflows.</div>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #10B981; margin-bottom: 6px;">04 &bull; DISCOVERY</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #0F172A;">Search &amp; AI Engine</div>
        <div style="font-family: 'Inter', sans-serif; font-size: 13px; color: #64748B; margin-top: 4px;">Technical Google SEO, ChatGPT/Perplexity AI &amp; Maps 3-Pack.</div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid #E2E8F0;">
      <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">
        Digital Product Studio &bull; Maharashtra, India
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #4285F4;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(waDir, 'whatsapp-catalog-card-light.html'),
  createHtmlPage({ width: 1080, height: 1080, bg: '#F8FAFC', content: waCatalogLight }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   4. LINKEDIN (templates/linkedin/)
   ═══════════════════════════════════════════════════════════════════════ */
const liDir = path.join(templatesDir, 'linkedin');
fs.mkdirSync(liDir, { recursive: true });

// 4.1 LinkedIn Logo (Dark & Light)
fs.writeFileSync(
  path.join(liDir, 'linkedin-logo-dark.html'),
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

fs.writeFileSync(
  path.join(liDir, 'linkedin-logo-light.html'),
  createHtmlPage({
    width: 400,
    height: 400,
    bg: '#FFFFFF',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 320px; height: 320px; border-radius: 50%; border: 1.5px solid #E2E8F0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #FFFFFF 55%, #F8FAFC 100%);">
          <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 50px; line-height: 1; letter-spacing: 2px; margin-bottom: 8px;">
            <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
            <span style="color: #0A0F1E; margin-left: 8px;">LABS</span>
          </div>
          <div style="font-family: 'Inter', sans-serif; font-size: 9px; font-weight: 700; color: #64748B; letter-spacing: 2.5px; text-transform: uppercase;">Digital Product Studio</div>
        </div>
      </div>`
  }),
  'utf8'
);

// 4.2 LinkedIn Cover (Dark & Light)
const liCoverDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 24px 24px;"></div>
  <div style="position: absolute; top: -50px; right: -50px; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.20) 0%, rgba(124, 58, 237, 0.10) 40%, transparent 70%);"></div>

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
  </div>`;

fs.writeFileSync(
  path.join(liDir, 'linkedin-cover-dark.html'),
  createHtmlPage({ width: 1128, height: 191, bg: '#0A0F1E', content: liCoverDark }),
  'utf8'
);
fs.writeFileSync(
  path.join(liDir, 'linkedin-cover.html'),
  createHtmlPage({ width: 1128, height: 191, bg: '#0A0F1E', content: liCoverDark }),
  'utf8'
);

const liCoverLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 24px 24px;"></div>
  <div style="position: absolute; top: -50px; right: -50px; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 0 48px 0 240px;">
    <div>
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 34px; line-height: 1; letter-spacing: 2px; margin-bottom: 8px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 8px;">LABS</span>
        <span style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: #64748B; margin-left: 14px; letter-spacing: 1px; text-transform: uppercase;">&bull; Digital Product Studio</span>
      </div>
      <div style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; color: #020617; letter-spacing: -0.2px;">
        Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
      </div>
      <div style="font-family: 'Inter', sans-serif; font-size: 12px; color: #64748B; margin-top: 4px;">
        Custom Websites &bull; Web Apps &bull; Business Software &bull; Search &amp; AI &bull; Maharashtra, India
      </div>
    </div>

    <div style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #4285F4; letter-spacing: 1px;">
      vooolabs.in
    </div>
  </div>`;

fs.writeFileSync(
  path.join(liDir, 'linkedin-cover-light.html'),
  createHtmlPage({ width: 1128, height: 191, bg: '#FFFFFF', content: liCoverLight }),
  'utf8'
);

// 4.3 LinkedIn Post (Dark & Light)
const liPostDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div style="position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.16) 0%, rgba(124, 58, 237, 0.10) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 56px 64px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 56px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #FFFFFF; margin-left: 12px;">LABS</span>
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #94A3B8; letter-spacing: 1.5px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

    <div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">
        Architectural Philosophy
      </div>
      <h2 style="font-family: 'Inter', sans-serif; font-size: 44px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1px; max-width: 860px;">
        First make it work. <br><span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Then make it beautiful.</span>
      </h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #94A3B8; margin-top: 16px; max-width: 800px; line-height: 1.5;">
        We design and engineer bespoke web applications, high-performance websites, and operational business systems built for precision and scale.
      </p>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
      <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">
        Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 600; color: #FFFFFF;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(liDir, 'linkedin-post-dark.html'),
  createHtmlPage({ width: 1200, height: 627, bg: '#0A0F1E', content: liPostDark }),
  'utf8'
);
fs.writeFileSync(
  path.join(liDir, 'linkedin-post.html'),
  createHtmlPage({ width: 1200, height: 627, bg: '#0A0F1E', content: liPostDark }),
  'utf8'
);

const liPostLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div style="position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.10) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 56px 64px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 56px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 12px;">LABS</span>
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #64748B; letter-spacing: 1.5px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

    <div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">
        Architectural Philosophy
      </div>
      <h2 style="font-family: 'Inter', sans-serif; font-size: 44px; font-weight: 800; color: #020617; line-height: 1.15; letter-spacing: -1px; max-width: 860px;">
        First make it work. <br><span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Then make it beautiful.</span>
      </h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #475569; margin-top: 16px; max-width: 800px; line-height: 1.5;">
        We design and engineer bespoke web applications, high-performance websites, and operational business systems built for precision and scale.
      </p>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid #E2E8F0;">
      <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">
        Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #4285F4;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(liDir, 'linkedin-post-light.html'),
  createHtmlPage({ width: 1200, height: 627, bg: '#FFFFFF', content: liPostLight }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   5. INSTAGRAM (templates/instagram/)
   ═══════════════════════════════════════════════════════════════════════ */
const igDir = path.join(templatesDir, 'instagram');
fs.mkdirSync(igDir, { recursive: true });

// 5.1 DP Dark & Light
fs.writeFileSync(
  path.join(igDir, 'instagram-dp-dark.html'),
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

fs.writeFileSync(
  path.join(igDir, 'instagram-dp-light.html'),
  createHtmlPage({
    width: 800,
    height: 800,
    bg: '#FFFFFF',
    content: `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 620px; height: 620px; border-radius: 50%; border: 2px solid #E2E8F0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, #FFFFFF 60%, #F8FAFC 100%);">
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

// 5.2 Instagram Post (Dark & Light)
const igPostDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"></div>
  <div style="position: absolute; top: -150px; right: -150px; width: 650px; height: 650px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.20) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 88px 80px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
      </div>
      <div style="padding: 10px 22px; border-radius: 9999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #CBD5E1; letter-spacing: 1.5px; text-transform: uppercase;">
        Studio Architecture
      </div>
    </div>

    <div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;">
        Engineering Standard
      </div>
      <h1 style="font-family: 'Inter', sans-serif; font-size: 58px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1.8px;">
        Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
      </h1>
      <p style="font-family: 'Inter', sans-serif; font-size: 20px; color: #94A3B8; margin-top: 24px; line-height: 1.55; max-width: 860px;">
        From high-speed public web products to complex internal operational dashboards, we engineer systems that drive measurable business impact.
      </p>
    </div>

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

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
      <div style="font-family: 'Inter', sans-serif; font-size: 15px; color: #94A3B8;">
        Maharashtra &bull; India
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: #4285F4;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(igDir, 'instagram-post-dark.html'),
  createHtmlPage({ width: 1080, height: 1350, bg: '#0A0F1E', content: igPostDark }),
  'utf8'
);
fs.writeFileSync(
  path.join(igDir, 'instagram-post.html'),
  createHtmlPage({ width: 1080, height: 1350, bg: '#0A0F1E', content: igPostDark }),
  'utf8'
);

const igPostLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 48px 48px;"></div>
  <div style="position: absolute; top: -150px; right: -150px; width: 650px; height: 650px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(124, 58, 237, 0.08) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 88px 80px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 14px;">LABS</span>
      </div>
      <div style="padding: 10px 22px; border-radius: 9999px; background: #FFFFFF; border: 1px solid #E2E8F0; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #0F172A; letter-spacing: 1.5px; text-transform: uppercase;">
        Studio Architecture
      </div>
    </div>

    <div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;">
        Engineering Standard
      </div>
      <h1 style="font-family: 'Inter', sans-serif; font-size: 58px; font-weight: 800; color: #020617; line-height: 1.15; letter-spacing: -1.8px;">
        Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
      </h1>
      <p style="font-family: 'Inter', sans-serif; font-size: 20px; color: #475569; margin-top: 24px; line-height: 1.55; max-width: 860px;">
        From high-speed public web products to complex internal operational dashboards, we engineer systems that drive measurable business impact.
      </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #4285F4;">01 &bull; SYSTEM</div>
          <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #0F172A; margin-top: 2px;">Business Websites</div>
        </div>
        <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">Sub-second speed</div>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #7C3AED;">02 &bull; SYSTEM</div>
          <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #0F172A; margin-top: 2px;">Web Apps &amp; Portals</div>
        </div>
        <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">Zero app store friction</div>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #F97316;">03 &bull; SYSTEM</div>
          <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #0F172A; margin-top: 2px;">Business Software</div>
        </div>
        <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">Custom ERP / CRM</div>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #10B981;">04 &bull; SYSTEM</div>
          <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #0F172A; margin-top: 2px;">Search &amp; AI Engine</div>
        </div>
        <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">Google SEO &amp; Maps</div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid #E2E8F0;">
      <div style="font-family: 'Inter', sans-serif; font-size: 15px; color: #64748B;">
        Maharashtra &bull; India
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: #4285F4;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(igDir, 'instagram-post-light.html'),
  createHtmlPage({ width: 1080, height: 1350, bg: '#F8FAFC', content: igPostLight }),
  'utf8'
);

// 5.3 Instagram Story (Dark & Light)
const igStoryDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"></div>
  <div style="position: absolute; top: 100px; right: -150px; width: 750px; height: 750px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.22) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 260px 80px 260px 80px; display: flex; flex-direction: column; justify-content: space-between;">
    <div>
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 72px; line-height: 1; letter-spacing: 2px; margin-bottom: 20px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #FFFFFF; margin-left: 14px;">LABS</span>
      </div>
      <div style="display: inline-block; padding: 10px 22px; border-radius: 9999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #CBD5E1; letter-spacing: 2px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

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

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
      <div style="font-family: 'Inter', sans-serif; font-size: 16px; color: #94A3B8;">
        Maharashtra &bull; India
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; color: #4285F4; letter-spacing: 1px;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(igDir, 'instagram-story-dark.html'),
  createHtmlPage({ width: 1080, height: 1920, bg: '#0A0F1E', content: igStoryDark }),
  'utf8'
);
fs.writeFileSync(
  path.join(igDir, 'instagram-story.html'),
  createHtmlPage({ width: 1080, height: 1920, bg: '#0A0F1E', content: igStoryDark }),
  'utf8'
);

const igStoryLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 48px 48px;"></div>
  <div style="position: absolute; top: 100px; right: -150px; width: 750px; height: 750px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(124, 58, 237, 0.08) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 260px 80px 260px 80px; display: flex; flex-direction: column; justify-content: space-between;">
    <div>
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 72px; line-height: 1; letter-spacing: 2px; margin-bottom: 20px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 14px;">LABS</span>
      </div>
      <div style="display: inline-block; padding: 10px 22px; border-radius: 9999px; background: #FFFFFF; border: 1px solid #E2E8F0; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #0F172A; letter-spacing: 2px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

    <div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #F97316; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 18px;">
        Engineering Digital Products
      </div>
      <h1 style="font-family: 'Inter', sans-serif; font-size: 64px; font-weight: 800; color: #020617; line-height: 1.12; letter-spacing: -2px;">
        Obsession &amp; <br><span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Scale.</span>
      </h1>
      <p style="font-family: 'Inter', sans-serif; font-size: 22px; color: #475569; margin-top: 28px; line-height: 1.5; max-width: 880px;">
        We engineer custom business websites, progressive web applications, internal tools, and search dominance for ambitious companies.
      </p>
    </div>

    <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #0F172A; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 18px;">
        Core Engineering Systems
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; color: #1E293B;">
        <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #4285F4;">01</span> Business Websites</div>
        <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #7C3AED;">02</span> Custom Web Apps &amp; Portals</div>
        <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #F97316;">03</span> Custom Business Software</div>
        <div style="display: flex; align-items: center; gap: 12px;"><span style="color: #10B981;">04</span> Technical SEO &amp; AI Search</div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid #E2E8F0;">
      <div style="font-family: 'Inter', sans-serif; font-size: 16px; color: #64748B;">
        Maharashtra &bull; India
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; color: #4285F4; letter-spacing: 1px;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(igDir, 'instagram-story-light.html'),
  createHtmlPage({ width: 1080, height: 1920, bg: '#F8FAFC', content: igStoryLight }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   6. BUSINESS VISITING CARD (templates/business-card/)
   ═══════════════════════════════════════════════════════════════════════ */
const bcDir = path.join(templatesDir, 'business-card');
fs.mkdirSync(bcDir, { recursive: true });

// 1050x600 px (3.5" x 2" standard business card at 300 DPI equivalent)
const bcDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 30px 30px;"></div>
  <div style="position: absolute; top: -60px; right: -60px; width: 340px; height: 340px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.20) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 48px 56px; display: flex; flex-direction: column; justify-content: space-between;">
    <!-- Top Row: Logo & Studio Tag -->
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 48px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #FFFFFF; margin-left: 10px;">LABS</span>
      </div>
      <div style="padding: 6px 14px; border-radius: 9999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #CBD5E1; letter-spacing: 1.5px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

    <!-- Center: Founder Name & Systems -->
    <div style="display: flex; justify-content: space-between; align-items: flex-end;">
      <div>
        <div style="font-family: 'Inter', sans-serif; font-size: 28px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px;">
          Vrushabh Shinde
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 600; color: #4285F4; margin-top: 4px; letter-spacing: 0.5px;">
          Founder &amp; Systems Architect
        </div>
        <div style="font-family: 'Inter', sans-serif; font-size: 12px; color: #94A3B8; margin-top: 8px;">
          Precision Engineering &bull; Modern Architecture &bull; Measurable Scale
        </div>
      </div>

      <div style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #CBD5E1; line-height: 1.8;">
        <div><span style="color: #94A3B8;">M:</span> <span style="color: #FFFFFF; font-weight: 600;">+91 76202 36178</span></div>
        <div><span style="color: #94A3B8;">E:</span> <span style="color: #4285F4; font-weight: 600;">hello@vooolabs.in</span></div>
        <div><span style="color: #94A3B8;">W:</span> <span style="color: #FFFFFF; font-weight: 600;">vooolabs.in</span></div>
      </div>
    </div>

    <!-- Bottom: Hubs & 4 Systems -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-family: 'Inter', sans-serif; font-size: 11px; color: #64748B;">
      <div>
        <span style="color: #F97316; font-weight: 700;">Hubs:</span> Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; color: #94A3B8; font-size: 10px;">
        Websites &bull; Web Apps &bull; Business Software &bull; Search &amp; AI
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(bcDir, 'business-card-dark.html'),
  createHtmlPage({ width: 1050, height: 600, bg: '#0A0F1E', content: bcDark }),
  'utf8'
);

const bcLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 30px 30px;"></div>
  <div style="position: absolute; top: -60px; right: -60px; width: 340px; height: 340px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 48px 56px; display: flex; flex-direction: column; justify-content: space-between;">
    <!-- Top Row: Logo & Studio Tag -->
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 48px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 10px;">LABS</span>
      </div>
      <div style="padding: 6px 14px; border-radius: 9999px; background: #FFFFFF; border: 1px solid #E2E8F0; font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #0F172A; letter-spacing: 1.5px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

    <!-- Center: Founder Name & Systems -->
    <div style="display: flex; justify-content: space-between; align-items: flex-end;">
      <div>
        <div style="font-family: 'Inter', sans-serif; font-size: 28px; font-weight: 800; color: #020617; letter-spacing: -0.5px;">
          Vrushabh Shinde
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #4285F4; margin-top: 4px; letter-spacing: 0.5px;">
          Founder &amp; Systems Architect
        </div>
        <div style="font-family: 'Inter', sans-serif; font-size: 12px; color: #64748B; margin-top: 8px;">
          Precision Engineering &bull; Modern Architecture &bull; Measurable Scale
        </div>
      </div>

      <div style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #1E293B; line-height: 1.8;">
        <div><span style="color: #64748B;">M:</span> <span style="color: #0F172A; font-weight: 700;">+91 76202 36178</span></div>
        <div><span style="color: #64748B;">E:</span> <span style="color: #4285F4; font-weight: 700;">hello@vooolabs.in</span></div>
        <div><span style="color: #64748B;">W:</span> <span style="color: #0F172A; font-weight: 700;">vooolabs.in</span></div>
      </div>
    </div>

    <!-- Bottom: Hubs & 4 Systems -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid #E2E8F0; font-family: 'Inter', sans-serif; font-size: 11px; color: #64748B;">
      <div>
        <span style="color: #F97316; font-weight: 700;">Hubs:</span> Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; color: #475569; font-size: 10px; font-weight: 600;">
        Websites &bull; Web Apps &bull; Business Software &bull; Search &amp; AI
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(bcDir, 'business-card-light.html'),
  createHtmlPage({ width: 1050, height: 600, bg: '#FFFFFF', content: bcLight }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   7. LETTERHEAD & PROPOSAL BANNER (templates/letterhead/)
   ═══════════════════════════════════════════════════════════════════════ */
const lhDir = path.join(templatesDir, 'letterhead');
fs.mkdirSync(lhDir, { recursive: true });

// 1600x320 px (Letterhead / Proposal / Quotation Header Banner)
const lhDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 32px 32px;"></div>
  <div style="position: absolute; top: -50px; right: -50px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.18) 0%, rgba(124, 58, 237, 0.10) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 48px 64px; display: flex; align-items: center; justify-content: space-between;">
    <div>
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 54px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #FFFFFF; margin-left: 12px;">LABS</span>
      </div>
      <div style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; color: #CBD5E1; margin-top: 10px; letter-spacing: -0.2px;">
        Digital Product Studio &bull; <span style="color: #94A3B8; font-weight: 500;">Engineering Digital Products with Obsession &amp; Scale</span>
      </div>
    </div>

    <div style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #94A3B8; line-height: 1.8;">
      <div><span style="color: #FFFFFF; font-weight: 700;">Web:</span> <span style="color: #4285F4;">vooolabs.in</span></div>
      <div><span style="color: #FFFFFF; font-weight: 700;">Email:</span> hello@vooolabs.in</div>
      <div><span style="color: #FFFFFF; font-weight: 700;">Hubs:</span> Satara &bull; Pune &bull; Nashik &bull; Kolhapur</div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(lhDir, 'letterhead-header-dark.html'),
  createHtmlPage({ width: 1600, height: 320, bg: '#0A0F1E', content: lhDark }),
  'utf8'
);

const lhLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 32px 32px;"></div>
  <div style="position: absolute; top: -50px; right: -50px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 48px 64px; display: flex; align-items: center; justify-content: space-between;">
    <div>
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 54px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 12px;">LABS</span>
      </div>
      <div style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; color: #1E293B; margin-top: 10px; letter-spacing: -0.2px;">
        Digital Product Studio &bull; <span style="color: #64748B; font-weight: 500;">Engineering Digital Products with Obsession &amp; Scale</span>
      </div>
    </div>

    <div style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #475569; line-height: 1.8;">
      <div><span style="color: #0F172A; font-weight: 700;">Web:</span> <span style="color: #4285F4; font-weight: 700;">vooolabs.in</span></div>
      <div><span style="color: #0F172A; font-weight: 700;">Email:</span> hello@vooolabs.in</div>
      <div><span style="color: #0F172A; font-weight: 700;">Hubs:</span> Satara &bull; Pune &bull; Nashik &bull; Kolhapur</div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(lhDir, 'letterhead-header-light.html'),
  createHtmlPage({ width: 1600, height: 320, bg: '#FFFFFF', content: lhLight }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   8. UNIVERSAL SOCIAL OPEN GRAPH CARD (templates/social-card/)
   ═══════════════════════════════════════════════════════════════════════ */
const scDir = path.join(templatesDir, 'social-card');
fs.mkdirSync(scDir, { recursive: true });

// 1200x630 px (Standard universal OpenGraph & Twitter Card)
const ogDark = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div style="position: absolute; top: -100px; right: -100px; width: 550px; height: 550px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.20) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 64px 72px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 58px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #FFFFFF; margin-left: 12px;">LABS</span>
      </div>
      <div style="padding: 8px 18px; border-radius: 9999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #CBD5E1; letter-spacing: 1.5px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

    <div>
      <h1 style="font-family: 'Inter', sans-serif; font-size: 48px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1.5px; max-width: 900px;">
        Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
      </h1>
      <p style="font-family: 'Inter', sans-serif; font-size: 19px; color: #94A3B8; margin-top: 16px; line-height: 1.5;">
        Custom Websites &bull; Web Apps &amp; Portals &bull; Business Software &bull; Search &amp; AI Engine
      </p>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
      <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">
        Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: #4285F4;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(scDir, 'og-card-dark.html'),
  createHtmlPage({ width: 1200, height: 630, bg: '#0A0F1E', content: ogDark }),
  'utf8'
);

const ogLight = `
  <div style="position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div style="position: absolute; top: -100px; right: -100px; width: 550px; height: 550px; border-radius: 50%; background: radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%);"></div>

  <div style="width: 100%; height: 100%; position: relative; z-index: 10; padding: 64px 72px; display: flex; flex-direction: column; justify-content: space-between;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-family: 'CrazyBlocks', sans-serif; font-size: 58px; line-height: 1; letter-spacing: 2px;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0A0F1E; margin-left: 12px;">LABS</span>
      </div>
      <div style="padding: 8px 18px; border-radius: 9999px; background: #FFFFFF; border: 1px solid #E2E8F0; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #0F172A; letter-spacing: 1.5px; text-transform: uppercase;">
        Digital Product Studio
      </div>
    </div>

    <div>
      <h1 style="font-family: 'Inter', sans-serif; font-size: 48px; font-weight: 800; color: #020617; line-height: 1.15; letter-spacing: -1.5px; max-width: 900px;">
        Engineering Digital Products with <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsession &amp; Scale.</span>
      </h1>
      <p style="font-family: 'Inter', sans-serif; font-size: 19px; color: #475569; margin-top: 16px; line-height: 1.5;">
        Custom Websites &bull; Web Apps &amp; Portals &bull; Business Software &bull; Search &amp; AI Engine
      </p>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid #E2E8F0;">
      <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B;">
        Maharashtra &bull; Satara &bull; Pune &bull; Nashik &bull; Kolhapur
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: #4285F4;">
        vooolabs.in
      </div>
    </div>
  </div>`;

fs.writeFileSync(
  path.join(scDir, 'og-card-light.html'),
  createHtmlPage({ width: 1200, height: 630, bg: '#FFFFFF', content: ogLight }),
  'utf8'
);

/* ═══════════════════════════════════════════════════════════════════════
   9. EMAIL SIGNATURES (templates/email-signature/)
   ═══════════════════════════════════════════════════════════════════════ */
const sigDir = path.join(templatesDir, 'email-signature');
fs.mkdirSync(sigDir, { recursive: true });

// 9.1 Founder Signature (Without defensive ownership badge)
const founderSig = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>VOOO LABS — Founder Email Signature</title>
</head>
<body style="margin: 0; padding: 24px; background: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

  <!-- START OF EMAIL SIGNATURE -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #1E293B; max-width: 540px; background: #FFFFFF;">
    <tr>
      <td valign="top" style="padding-right: 18px; vertical-align: top;">
        <img src="https://vooolabs.in/images/vrushabh-shinde.jpg" width="80" height="80" alt="Vrushabh Shinde" style="display: block; width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid #E2E8F0;" />
      </td>

      <td valign="top" style="border-left: 2px solid #4285F4; padding-left: 18px; vertical-align: top;">
        <div style="font-size: 16px; font-weight: 700; color: #020617; letter-spacing: -0.3px; line-height: 1.2;">
          Vrushabh Shinde
        </div>
        <div style="font-size: 12px; font-weight: 600; color: #475569; margin-top: 3px; letter-spacing: 0.2px;">
          Founder &amp; Systems Architect &bull; <span style="color: #4285F4; font-weight: 700;">VOOO LABS</span>
        </div>
        
        <div style="font-size: 11px; color: #64748B; margin-top: 5px;">
          Engineering Digital Products with Obsession &amp; Scale
        </div>

        <div style="height: 1px; background: #E2E8F0; margin: 10px 0;"></div>

        <table cellpadding="0" cellspacing="0" border="0" style="font-size: 12px; color: #334155; line-height: 1.6;">
          <tr>
            <td style="padding-right: 6px; color: #94A3B8; font-family: monospace; font-size: 11px;">W:</td>
            <td><a href="https://vooolabs.in" target="_blank" style="color: #4285F4; text-decoration: none; font-weight: 600;">vooolabs.in</a></td>
            <td style="padding: 0 10px; color: #CBD5E1;">&bull;</td>
            <td style="padding-right: 6px; color: #94A3B8; font-family: monospace; font-size: 11px;">E:</td>
            <td><a href="mailto:hello@vooolabs.in" style="color: #334155; text-decoration: none;">hello@vooolabs.in</a></td>
          </tr>
          <tr>
            <td style="padding-right: 6px; color: #10B981; font-family: monospace; font-size: 11px;">M:</td>
            <td><a href="https://wa.me/917620236178" target="_blank" style="color: #334155; text-decoration: none;">+91 76202 36178</a> <span style="font-size: 10px; color: #10B981; font-weight: 600;">(WhatsApp)</span></td>
            <td style="padding: 0 10px; color: #CBD5E1;">&bull;</td>
            <td style="padding-right: 6px; color: #94A3B8; font-family: monospace; font-size: 11px;">L:</td>
            <td style="color: #64748B;">Maharashtra, India</td>
          </tr>
        </table>

        <div style="margin-top: 10px; font-size: 11px;">
          <a href="https://linkedin.com/in/vrushabh-shinde-43338125b/" target="_blank" style="color: #0A66C2; text-decoration: none; font-weight: 600; margin-right: 14px;">LinkedIn &rarr;</a>
          <a href="https://github.com/vooolabs" target="_blank" style="color: #24292F; text-decoration: none; font-weight: 600; margin-right: 14px;">GitHub &rarr;</a>
          <span style="color: #94A3B8; font-size: 10px;">Satara &bull; Pune &bull; Nashik &bull; Kolhapur</span>
        </div>
      </td>
    </tr>
  </table>
  <!-- END OF EMAIL SIGNATURE -->

</body>
</html>`;

fs.writeFileSync(path.join(sigDir, 'founder-signature.html'), founderSig, 'utf8');

// 9.2 Studio Signature (Without defensive ownership badge)
const studioSig = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>VOOO LABS — Studio Corporate Email Signature</title>
</head>
<body style="margin: 0; padding: 24px; background: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

  <!-- START OF EMAIL SIGNATURE -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #1E293B; max-width: 560px; background: #FFFFFF;">
    <tr>
      <td valign="top" style="padding-right: 18px; vertical-align: top;">
        <a href="https://vooolabs.in" target="_blank" style="text-decoration: none; display: block;">
          <img src="https://vooolabs.in/images/google-business/vooolabs-google-business-logo-white.png" width="84" height="84" alt="VOOO LABS" style="display: block; width: 84px; height: 84px; border-radius: 14px; border: 1px solid #E2E8F0;" />
        </a>
      </td>

      <td valign="top" style="border-left: 2px solid #7C3AED; padding-left: 18px; vertical-align: top;">
        <div style="font-size: 16px; font-weight: 800; color: #020617; letter-spacing: -0.2px; line-height: 1.2;">
          VOOO LABS &bull; <span style="font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 1px;">Digital Product Studio</span>
        </div>
        <div style="font-size: 11px; font-weight: 500; color: #475569; margin-top: 3px;">
          Custom Websites &bull; Web Apps &bull; Business Software &bull; Search &amp; AI
        </div>

        <div style="height: 1px; background: #E2E8F0; margin: 10px 0;"></div>

        <table cellpadding="0" cellspacing="0" border="0" style="font-size: 12px; color: #334155; line-height: 1.6;">
          <tr>
            <td style="padding-right: 6px; color: #94A3B8; font-family: monospace; font-size: 11px;">WEB:</td>
            <td><a href="https://vooolabs.in" target="_blank" style="color: #4285F4; text-decoration: none; font-weight: 600;">vooolabs.in</a></td>
            <td style="padding: 0 10px; color: #CBD5E1;">&bull;</td>
            <td style="padding-right: 6px; color: #94A3B8; font-family: monospace; font-size: 11px;">EMAIL:</td>
            <td><a href="mailto:hello@vooolabs.in" style="color: #334155; text-decoration: none;">hello@vooolabs.in</a></td>
          </tr>
          <tr>
            <td style="padding-right: 6px; color: #10B981; font-family: monospace; font-size: 11px;">CALL:</td>
            <td><a href="tel:+917620236178" style="color: #334155; text-decoration: none;">+91 76202 36178</a></td>
            <td style="padding: 0 10px; color: #CBD5E1;">&bull;</td>
            <td style="padding-right: 6px; color: #94A3B8; font-family: monospace; font-size: 11px;">HUBS:</td>
            <td style="color: #64748B;">Maharashtra (Satara &bull; Pune &bull; Nashik &bull; Kolhapur)</td>
          </tr>
        </table>

        <div style="margin-top: 10px; display: flex; align-items: center; gap: 12px; font-size: 11px;">
          <a href="https://linkedin.com/company/vooolabs" target="_blank" style="color: #0A66C2; text-decoration: none; font-weight: 600; margin-right: 12px;">LinkedIn &rarr;</a>
          <a href="https://github.com/vooolabs" target="_blank" style="color: #24292F; text-decoration: none; font-weight: 600; margin-right: 12px;">GitHub &rarr;</a>
        </div>
      </td>
    </tr>
  </table>
  <!-- END OF EMAIL SIGNATURE -->

</body>
</html>`;

fs.writeFileSync(path.join(sigDir, 'studio-signature.html'), studioSig, 'utf8');

// 9.3 Minimal Signature
const minimalSig = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>VOOO LABS — Minimal Email Signature</title>
</head>
<body style="margin: 0; padding: 24px; background: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

  <!-- START OF EMAIL SIGNATURE -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.4; color: #1E293B; max-width: 480px; background: #FFFFFF;">
    <tr>
      <td valign="top" style="border-left: 3px solid #4285F4; padding-left: 14px;">
        <div style="font-size: 15px; font-weight: 800; color: #020617; line-height: 1.2;">
          <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span> LABS
          <span style="font-size: 11px; font-weight: 600; color: #64748B; text-transform: uppercase; margin-left: 8px;">&bull; Digital Product Studio</span>
        </div>
        <div style="font-size: 11px; color: #475569; margin-top: 4px;">
          <a href="https://vooolabs.in" target="_blank" style="color: #4285F4; text-decoration: none; font-weight: 600;">vooolabs.in</a> &bull;
          <a href="mailto:hello@vooolabs.in" style="color: #334155; text-decoration: none;">hello@vooolabs.in</a> &bull;
          <a href="https://wa.me/917620236178" target="_blank" style="color: #334155; text-decoration: none;">+91 76202 36178</a>
        </div>
        <div style="font-size: 10px; color: #94A3B8; margin-top: 4px;">
          Maharashtra (Satara &bull; Pune &bull; Nashik &bull; Kolhapur) &bull; Precision Engineering
        </div>
      </td>
    </tr>
  </table>
  <!-- END OF EMAIL SIGNATURE -->

</body>
</html>`;

fs.writeFileSync(path.join(sigDir, 'minimal-signature.html'), minimalSig, 'utf8');

console.log('[build-templates] All templates successfully created in Light and Dark variants.');
