import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const fontPath = path.join(projectRoot, 'public', 'fonts', 'crazy-blocks', 'crazyblocks.otf');
if (!fs.existsSync(fontPath)) {
  console.error(`Font not found at ${fontPath}`);
  process.exit(1);
}

const fontB64 = fs.readFileSync(fontPath).toString('base64');

// Target directories
const outPublicDir = path.join(projectRoot, 'public', 'images', 'google-business');
fs.mkdirSync(outPublicDir, { recursive: true });

const artifactDir = path.resolve('C:/Users/vrushabh/.gemini/antigravity/brain/fe5232f1-b916-4baf-b931-9cb2baa8d428/google-business-assets');
fs.mkdirSync(artifactDir, { recursive: true });

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

console.log('[gbp-assets] Generating Google Business Profile Assets...');

/* ═══════════════════════════════════════════════════════════════════════
   1. LOGO TEMPLATES (1200 x 1200 px - 1:1 Square)
   Safe Zone: Google crops profile images to a circle with ~80% diameter (960px).
   All primary brand elements are placed strictly within the 850px safe circle.
   ═══════════════════════════════════════════════════════════════════════ */

// 1A. LOGO - Studio White Edition
const htmlLogoWhite = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'CrazyBlocks';
    src: url('data:font/otf;base64,${fontB64}') format('opentype');
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 1200px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    overflow: hidden;
  }
  /* Subtle ambient lighting */
  .bg-glow {
    position: absolute;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 133, 244, 0.06) 0%, rgba(124, 58, 237, 0.04) 40%, transparent 70%);
  }
  .card {
    width: 900px;
    height: 900px;
    border-radius: 50%;
    border: 2px solid rgba(226, 232, 240, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 10;
    background: radial-gradient(circle, #FFFFFF 60%, #F8FAFC 100%);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.04);
  }
  .brand-logo {
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-family: 'CrazyBlocks', sans-serif;
    font-size: 130px;
    line-height: 1;
    letter-spacing: 4px;
    margin-bottom: 24px;
  }
  .c-v { color: #4285F4; }
  .c-o1 { color: #5B5BD6; }
  .c-o2 { color: #7C3AED; }
  .c-o3 { color: #F97316; }
  .c-labs {
    color: #0A0F1E;
    margin-left: 20px;
  }
  .divider {
    width: 90px;
    height: 4px;
    background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316);
    border-radius: 2px;
    margin-bottom: 24px;
  }
  .subtitle {
    font-size: 26px;
    font-weight: 700;
    color: #0A0F1E;
    letter-spacing: 7px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .descriptor {
    font-size: 20px;
    font-weight: 500;
    color: #64748B;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .location-pill {
    margin-top: 28px;
    padding: 8px 22px;
    border-radius: 9999px;
    background: #F1F5F9;
    border: 1px solid #E2E8F0;
    color: #334155;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
  }
</style>
</head>
<body>
  <div class="bg-glow"></div>
  <div class="card">
    <div class="brand-logo">
      <span class="c-v">V</span><span class="c-o1">O</span><span class="c-o2">O</span><span class="c-o3">O</span>
      <span class="c-labs">LABS</span>
    </div>
    <div class="divider"></div>
    <div class="subtitle">Digital Product Studio</div>
    <div class="descriptor">Websites &bull; Web Apps &bull; Software &bull; SEO</div>
    <div class="location-pill">MAHARASHTRA &bull; INDIA</div>
  </div>
</body>
</html>`;

// 1B. LOGO - Studio Luxury Dark Edition
const htmlLogoDark = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'CrazyBlocks';
    src: url('data:font/otf;base64,${fontB64}') format('opentype');
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 1200px;
    background: #0A0F1E;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    overflow: hidden;
  }
  .bg-glow {
    position: absolute;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 133, 244, 0.16) 0%, rgba(124, 58, 237, 0.12) 35%, rgba(10, 15, 30, 0) 70%);
  }
  .card {
    width: 900px;
    height: 900px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 10;
    background: radial-gradient(circle, #0F172A 50%, #0A0F1E 100%);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  }
  .brand-logo {
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-family: 'CrazyBlocks', sans-serif;
    font-size: 130px;
    line-height: 1;
    letter-spacing: 4px;
    margin-bottom: 24px;
  }
  .c-v { color: #4285F4; }
  .c-o1 { color: #5B5BD6; }
  .c-o2 { color: #7C3AED; }
  .c-o3 { color: #F97316; }
  .c-labs {
    color: #FFFFFF;
    margin-left: 20px;
  }
  .divider {
    width: 90px;
    height: 4px;
    background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316);
    border-radius: 2px;
    margin-bottom: 24px;
  }
  .subtitle {
    font-size: 26px;
    font-weight: 700;
    color: #F8FAFC;
    letter-spacing: 7px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .descriptor {
    font-size: 20px;
    font-weight: 500;
    color: #94A3B8;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .location-pill {
    margin-top: 28px;
    padding: 8px 22px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #CBD5E1;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
  }
</style>
</head>
<body>
  <div class="bg-glow"></div>
  <div class="card">
    <div class="brand-logo">
      <span class="c-v">V</span><span class="c-o1">O</span><span class="c-o2">O</span><span class="c-o3">O</span>
      <span class="c-labs">LABS</span>
    </div>
    <div class="divider"></div>
    <div class="subtitle">Digital Product Studio</div>
    <div class="descriptor">Websites &bull; Web Apps &bull; Software &bull; SEO</div>
    <div class="location-pill">MAHARASHTRA &bull; INDIA</div>
  </div>
</body>
</html>`;

/* ═══════════════════════════════════════════════════════════════════════
   2. COVER BANNER TEMPLATES (1920 x 1080 px - 16:9 Landscape)
   Google Business Profile Cover Photo / Banner
   ═══════════════════════════════════════════════════════════════════════ */

// 2A. COVER - Studio Dark Luxury Edition (Flagship)
const htmlCoverDark = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'CrazyBlocks';
    src: url('data:font/otf;base64,${fontB64}') format('opentype');
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1920px;
    height: 1080px;
    background: #0A0F1E;
    color: #FFFFFF;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    overflow: hidden;
    padding: 72px 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Grid overlay */
  .grid-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* Radial Brand Glows */
  .glow-top-right {
    position: absolute;
    top: -200px;
    right: -200px;
    width: 850px;
    height: 850px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 133, 244, 0.22) 0%, rgba(124, 58, 237, 0.15) 40%, transparent 70%);
    pointer-events: none;
  }
  .glow-bottom-left {
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 750px;
    height: 750px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(249, 115, 22, 0.16) 0%, rgba(124, 58, 237, 0.12) 40%, transparent 70%);
    pointer-events: none;
  }

  /* Top Header Bar */
  .top-bar {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-logo {
    display: flex;
    align-items: baseline;
    font-family: 'CrazyBlocks', sans-serif;
    font-size: 84px;
    line-height: 1;
    letter-spacing: 3px;
  }
  .c-v { color: #4285F4; }
  .c-o1 { color: #5B5BD6; }
  .c-o2 { color: #7C3AED; }
  .c-o3 { color: #F97316; }
  .c-labs {
    color: #FFFFFF;
    margin-left: 18px;
  }
  .badge-studio {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 28px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #E2E8F0;
    text-transform: uppercase;
  }
  .badge-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10B981;
    box-shadow: 0 0 12px #10B981;
  }

  /* Hero Main Content */
  .hero-content {
    position: relative;
    z-index: 10;
    margin: 40px 0 20px 0;
  }
  .headline {
    font-size: 64px;
    font-weight: 800;
    letter-spacing: -1.5px;
    line-height: 1.15;
    color: #FFFFFF;
    max-width: 1400px;
  }
  .headline span {
    background: linear-gradient(90deg, #4285F4 0%, #7C3AED 50%, #F97316 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sub-headline {
    margin-top: 18px;
    font-size: 24px;
    font-weight: 400;
    color: #94A3B8;
    letter-spacing: -0.2px;
  }

  /* 4 Pillars Grid */
  .pillars-grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 32px 0;
  }
  .pillar-card {
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 18px;
    padding: 28px 24px;
    backdrop-filter: blur(10px);
  }
  .pillar-number {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .p-1 { color: #4285F4; }
  .p-2 { color: #5B5BD6; }
  .p-3 { color: #7C3AED; }
  .p-4 { color: #F97316; }
  .pillar-title {
    font-size: 22px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 8px;
    line-height: 1.25;
  }
  .pillar-desc {
    font-size: 15px;
    color: #94A3B8;
    line-height: 1.5;
  }

  /* Bottom Footer Hub */
  .bottom-hub {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .locations-list {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 18px;
    font-weight: 600;
    color: #CBD5E1;
    letter-spacing: 1px;
  }
  .locations-list .hub-label {
    color: #F97316;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    margin-right: 4px;
  }
  .locations-list span.dot {
    color: #475569;
  }
  .studio-contacts {
    display: flex;
    align-items: center;
    gap: 28px;
    font-size: 18px;
    color: #94A3B8;
    font-weight: 500;
  }
  .studio-contacts b {
    color: #4285F4;
    font-weight: 700;
  }
</style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="glow-top-right"></div>
  <div class="glow-bottom-left"></div>

  <!-- Top bar -->
  <div class="top-bar">
    <div class="brand-logo">
      <span class="c-v">V</span><span class="c-o1">O</span><span class="c-o2">O</span><span class="c-o3">O</span>
      <span class="c-labs">LABS</span>
    </div>
    <div class="badge-studio">
      <div class="badge-dot"></div>
      Official Google Business Profile
    </div>
  </div>

  <!-- Hero headline -->
  <div class="hero-content">
    <h1 class="headline">
      Engineering Digital Products with <span>Obsession &amp; Scale.</span>
    </h1>
    <p class="sub-headline">
      100% Client Source Code Ownership &bull; Direct Architecture &bull; Zero Vendor Lock-In &bull; Maharashtra, India
    </p>
  </div>

  <!-- 4 Pillars -->
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-number p-1">01 &bull; SYSTEM</div>
      <div class="pillar-title">Custom Websites</div>
      <div class="pillar-desc">Ultra-fast, high-converting business websites with custom interactive motion.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-number p-2">02 &bull; SYSTEM</div>
      <div class="pillar-title">Web Apps &amp; Portals</div>
      <div class="pillar-desc">Full-stack browser web applications, client portals &amp; SaaS running on any device.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-number p-3">03 &bull; SYSTEM</div>
      <div class="pillar-title">Business Software</div>
      <div class="pillar-desc">Tailored internal operations software, ERP/CRM dashboards &amp; automation engines.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-number p-4">04 &bull; SYSTEM</div>
      <div class="pillar-title">Search &amp; AI Engine</div>
      <div class="pillar-desc">Technical Google SEO, ChatGPT/Perplexity AI search visibility &amp; Google Maps pack.</div>
    </div>
  </div>

  <!-- Bottom info -->
  <div class="bottom-hub">
    <div class="locations-list">
      <span class="hub-label">Hubs:</span>
      <span>Maharashtra</span>
      <span class="dot">&bull;</span>
      <span>Satara</span>
      <span class="dot">&bull;</span>
      <span>Pune</span>
      <span class="dot">&bull;</span>
      <span>Nashik</span>
      <span class="dot">&bull;</span>
      <span>Kolhapur</span>
    </div>
    <div class="studio-contacts">
      <span>Web: <b>vooolabs.in</b></span>
      <span>Email: <b>hello@vooolabs.in</b></span>
      <span>Call/WhatsApp: <b>+91 76202 36178</b></span>
    </div>
  </div>
</body>
</html>`;

// 2B. COVER - Studio White Edition (Light Clean Corporate)
const htmlCoverWhite = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'CrazyBlocks';
    src: url('data:font/otf;base64,${fontB64}') format('opentype');
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1920px;
    height: 1080px;
    background: #FFFFFF;
    color: #0A0F1E;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    overflow: hidden;
    padding: 72px 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Grid overlay */
  .grid-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* Ambient radial glows */
  .glow-top-right {
    position: absolute;
    top: -200px;
    right: -200px;
    width: 850px;
    height: 850px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(124, 58, 237, 0.08) 40%, transparent 70%);
    pointer-events: none;
  }
  .glow-bottom-left {
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 750px;
    height: 750px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(249, 115, 22, 0.10) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%);
    pointer-events: none;
  }

  /* Top Header Bar */
  .top-bar {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-logo {
    display: flex;
    align-items: baseline;
    font-family: 'CrazyBlocks', sans-serif;
    font-size: 84px;
    line-height: 1;
    letter-spacing: 3px;
  }
  .c-v { color: #4285F4; }
  .c-o1 { color: #5B5BD6; }
  .c-o2 { color: #7C3AED; }
  .c-o3 { color: #F97316; }
  .c-labs {
    color: #0A0F1E;
    margin-left: 18px;
  }
  .badge-studio {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 28px;
    border-radius: 9999px;
    background: #F1F5F9;
    border: 1px solid #E2E8F0;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #1E293B;
    text-transform: uppercase;
  }
  .badge-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10B981;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }

  /* Hero Main Content */
  .hero-content {
    position: relative;
    z-index: 10;
    margin: 40px 0 20px 0;
  }
  .headline {
    font-size: 64px;
    font-weight: 800;
    letter-spacing: -1.5px;
    line-height: 1.15;
    color: #0A0F1E;
    max-width: 1400px;
  }
  .headline span {
    background: linear-gradient(90deg, #4285F4 0%, #7C3AED 50%, #F97316 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sub-headline {
    margin-top: 18px;
    font-size: 24px;
    font-weight: 500;
    color: #475569;
    letter-spacing: -0.2px;
  }

  /* 4 Pillars Grid */
  .pillars-grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 32px 0;
  }
  .pillar-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 18px;
    padding: 28px 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  }
  .pillar-number {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .p-1 { color: #4285F4; }
  .p-2 { color: #5B5BD6; }
  .p-3 { color: #7C3AED; }
  .p-4 { color: #F97316; }
  .pillar-title {
    font-size: 22px;
    font-weight: 700;
    color: #0A0F1E;
    margin-bottom: 8px;
    line-height: 1.25;
  }
  .pillar-desc {
    font-size: 15px;
    color: #64748B;
    line-height: 1.5;
  }

  /* Bottom Footer Hub */
  .bottom-hub {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    border-top: 1px solid #E2E8F0;
  }
  .locations-list {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 18px;
    font-weight: 600;
    color: #334155;
    letter-spacing: 1px;
  }
  .locations-list .hub-label {
    color: #F97316;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    margin-right: 4px;
  }
  .locations-list span.dot {
    color: #94A3B8;
  }
  .studio-contacts {
    display: flex;
    align-items: center;
    gap: 28px;
    font-size: 18px;
    color: #475569;
    font-weight: 500;
  }
  .studio-contacts b {
    color: #4285F4;
    font-weight: 700;
  }
</style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="glow-top-right"></div>
  <div class="glow-bottom-left"></div>

  <!-- Top bar -->
  <div class="top-bar">
    <div class="brand-logo">
      <span class="c-v">V</span><span class="c-o1">O</span><span class="c-o2">O</span><span class="c-o3">O</span>
      <span class="c-labs">LABS</span>
    </div>
    <div class="badge-studio">
      <div class="badge-dot"></div>
      Official Google Business Profile
    </div>
  </div>

  <!-- Hero headline -->
  <div class="hero-content">
    <h1 class="headline">
      Engineering Digital Products with <span>Obsession &amp; Scale.</span>
    </h1>
    <p class="sub-headline">
      100% Client Source Code Ownership &bull; Direct Architecture &bull; Zero Vendor Lock-In &bull; Maharashtra, India
    </p>
  </div>

  <!-- 4 Pillars -->
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-number p-1">01 &bull; SYSTEM</div>
      <div class="pillar-title">Custom Websites</div>
      <div class="pillar-desc">Ultra-fast, high-converting business websites with custom interactive motion.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-number p-2">02 &bull; SYSTEM</div>
      <div class="pillar-title">Web Apps &amp; Portals</div>
      <div class="pillar-desc">Full-stack browser web applications, client portals &amp; SaaS running on any device.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-number p-3">03 &bull; SYSTEM</div>
      <div class="pillar-title">Business Software</div>
      <div class="pillar-desc">Tailored internal operations software, ERP/CRM dashboards &amp; automation engines.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-number p-4">04 &bull; SYSTEM</div>
      <div class="pillar-title">Search &amp; AI Engine</div>
      <div class="pillar-desc">Technical Google SEO, ChatGPT/Perplexity AI search visibility &amp; Google Maps pack.</div>
    </div>
  </div>

  <!-- Bottom info -->
  <div class="bottom-hub">
    <div class="locations-list">
      <span class="hub-label">Hubs:</span>
      <span>Maharashtra</span>
      <span class="dot">&bull;</span>
      <span>Satara</span>
      <span class="dot">&bull;</span>
      <span>Pune</span>
      <span class="dot">&bull;</span>
      <span>Nashik</span>
      <span class="dot">&bull;</span>
      <span>Kolhapur</span>
    </div>
    <div class="studio-contacts">
      <span>Web: <b>vooolabs.in</b></span>
      <span>Email: <b>hello@vooolabs.in</b></span>
      <span>Call/WhatsApp: <b>+91 76202 36178</b></span>
    </div>
  </div>
</body>
</html>`;

const items = [
  { name: 'vooolabs-google-business-logo-white', html: htmlLogoWhite, width: 1200, height: 1200 },
  { name: 'vooolabs-google-business-logo-dark', html: htmlLogoDark, width: 1200, height: 1200 },
  { name: 'vooolabs-google-business-cover-dark', html: htmlCoverDark, width: 1920, height: 1080 },
  { name: 'vooolabs-google-business-cover-white', html: htmlCoverWhite, width: 1920, height: 1080 },
  // Also 1200x675 standard cover formats
  { name: 'vooolabs-google-business-cover-1200x675-dark', html: htmlCoverDark, width: 1200, height: 675 },
  { name: 'vooolabs-google-business-cover-1200x675-white', html: htmlCoverWhite, width: 1200, height: 675 }
];

for (const item of items) {
  const tmpHtml = path.join(os.tmpdir(), `${item.name}.html`);
  const tmpPng = path.join(os.tmpdir(), `${item.name}.png`);
  fs.writeFileSync(tmpHtml, item.html, 'utf8');

  try {
    const cmd = `"${chromePath}" --headless --screenshot="${tmpPng}" --window-size=${item.width},${item.height} --hide-scrollbars "file:///${tmpHtml.replace(/\\/g, '/')}"`;
    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(tmpPng)) {
      // Copy to public folder
      const targetPublic = path.join(outPublicDir, `${item.name}.png`);
      fs.copyFileSync(tmpPng, targetPublic);

      // Copy to artifacts folder
      const targetArtifact = path.join(artifactDir, `${item.name}.png`);
      fs.copyFileSync(tmpPng, targetArtifact);

      const stats = fs.statSync(targetPublic);
      console.log(`  ✓ Generated ${item.name}.png [${item.width}x${item.height}] (${Math.round(stats.size / 1024)} KB)`);
    } else {
      console.error(`  ✗ Failed to create ${item.name}.png`);
    }
  } catch (err) {
    console.error(`  ✗ Error rendering ${item.name}:`, err.message);
  }
}

console.log('[gbp-assets] Completed generating Google Business Profile assets in public/images/google-business/ and artifacts.');
