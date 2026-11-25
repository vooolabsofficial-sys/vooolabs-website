#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const fontPath = path.join(projectRoot, 'public', 'fonts', 'crazy-blocks', 'crazyblocks.otf');
if (!fs.existsSync(fontPath)) {
  console.error('[favicons] Error: font not found at', fontPath);
  process.exit(1);
}
const fontB64 = fs.readFileSync(fontPath).toString('base64');

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  const defaultPaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(os.homedir(), 'AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'),
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ];
  for (const p of defaultPaths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const chromePath = findChrome();
if (!chromePath) {
  console.error('[favicons] Chrome executable not found.');
  process.exit(1);
}

// Helper to create valid standard ICO buffer containing PNG frames
function createIco(pngFrames) {
  const count = pngFrames.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + (count * dirEntrySize);

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(count, 4); // image count

  const dirEntries = [];
  const imageBuffers = [];

  for (const frame of pngFrames) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(frame.width >= 256 ? 0 : frame.width, 0);
    entry.writeUInt8(frame.height >= 256 ? 0 : frame.height, 1);
    entry.writeUInt8(0, 2); // color count (0 for 256+)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(frame.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    dirEntries.push(entry);
    imageBuffers.push(frame.buffer);
    offset += frame.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

// Generate the HTML template for rendering the icon
function generateHtml(size, borderRadiusPercent = 22) {
  const borderRadius = Math.round(size * (borderRadiusPercent / 100));
  // In CrazyBlocks, letter V has optical center slightly above bottom
  const fontSize = Math.round(size * 0.72);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    @font-face {
      font-family: 'CrazyBlocks';
      src: url('data:font/otf;base64,${fontB64}') format('opentype');
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: ${size}px;
      height: ${size}px;
      overflow: hidden;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-container {
      width: ${size}px;
      height: ${size}px;
      border-radius: ${borderRadius}px;
      background: #0A0F1E;
      border: ${Math.max(1, Math.round(size * 0.03))}px solid rgba(255, 255, 255, 0.12);
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 2px ${Math.max(2, Math.round(size * 0.1))}px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .ambient-glow {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 35%, rgba(66, 133, 244, 0.35) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 80%);
      pointer-events: none;
    }
    .letter-v {
      font-family: 'CrazyBlocks', sans-serif;
      font-size: ${fontSize}px;
      line-height: 1;
      background: linear-gradient(135deg, #4285F4 0%, #5B5BD6 35%, #7C3AED 70%, #F97316 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      transform: translateY(${Math.round(size * 0.02)}px);
      filter: drop-shadow(0 ${Math.max(1, Math.round(size * 0.03))}px ${Math.max(2, Math.round(size * 0.06))}px rgba(0,0,0,0.5));
    }
  </style>
</head>
<body>
  <div class="icon-container">
    <div class="ambient-glow"></div>
    <span class="letter-v">V</span>
  </div>
</body>
</html>`;
}

console.log('[favicons] Rendering crisp square Vooo Labs favicon suite...');

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'favicons-build-'));
const publicDir = path.join(projectRoot, 'public');

const sizesToRender = [16, 32, 48, 96, 180, 192, 512];
const renderedBuffers = {};

for (const size of sizesToRender) {
  const htmlContent = generateHtml(size, 22);
  const tempHtml = path.join(tempDir, `icon-${size}.html`);
  const tempPng = path.join(tempDir, `icon-${size}.png`);

  fs.writeFileSync(tempHtml, htmlContent);

  const fileUrl = `file:///${tempHtml.replace(/\\/g, '/')}`;
  const cmd = `"${chromePath}" --headless=new --disable-gpu --no-sandbox --hide-scrollbars --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --user-data-dir="${tempDir}/profile-${size}" --screenshot="${tempPng}" --window-size=${size},${size} "${fileUrl}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
    if (fs.existsSync(tempPng)) {
      renderedBuffers[size] = fs.readFileSync(tempPng);
      console.log(`  ✓ Rendered ${size}x${size} PNG (${renderedBuffers[size].length} bytes)`);
    } else {
      console.error(`  ✗ Missing output for ${size}x${size}`);
    }
  } catch (err) {
    console.error(`  ✗ Chrome render error for ${size}x${size}:`, err.message);
  }
}

// 1. Write PNG files to public/
if (renderedBuffers[48]) {
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), renderedBuffers[48]);
  console.log('  → Saved public/favicon-48x48.png (Google Search Standard)');
}

if (renderedBuffers[96]) {
  fs.writeFileSync(path.join(publicDir, 'favicon-96x96.png'), renderedBuffers[96]);
  console.log('  → Saved public/favicon-96x96.png (High-DPI Desktop)');
}

if (renderedBuffers[180]) {
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), renderedBuffers[180]);
  console.log('  → Saved public/apple-touch-icon.png (Apple iOS 180x180)');
}

if (renderedBuffers[192]) {
  fs.writeFileSync(path.join(publicDir, 'favicon-192x192.png'), renderedBuffers[192]);
  console.log('  → Saved public/favicon-192x192.png (Android PWA)');
}

if (renderedBuffers[512]) {
  fs.writeFileSync(path.join(publicDir, 'favicon-512x512.png'), renderedBuffers[512]);
  console.log('  → Saved public/favicon-512x512.png (App Store / PWA)');
}

// 2. Generate multi-resolution public/favicon.ico (16, 32, 48)
if (renderedBuffers[16] && renderedBuffers[32] && renderedBuffers[48]) {
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: renderedBuffers[16] },
    { width: 32, height: 32, buffer: renderedBuffers[32] },
    { width: 48, height: 48, buffer: renderedBuffers[48] }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('  → Saved public/favicon.ico (Multi-resolution 16/32/48 ICO)');
}

// 3. Generate 100% 1:1 Square public/favicon.svg (48x48)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <defs>
    <style>
      @font-face {
        font-family: 'CrazyBlocks';
        src: url('data:font/otf;base64,${fontB64}') format('opentype');
      }
      .ambient-glow {
        fill: url(#ambGlow);
      }
      .brand-v {
        font-family: 'CrazyBlocks', -apple-system, sans-serif;
        font-size: 34px;
        font-weight: 900;
        fill: url(#vGrad);
        text-anchor: middle;
        dominant-baseline: central;
      }
    </style>
    <linearGradient id="vGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4285F4"/>
      <stop offset="35%" stop-color="#5B5BD6"/>
      <stop offset="70%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#F97316"/>
    </linearGradient>
    <radialGradient id="ambGlow" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#4285F4" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#7C3AED" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0A0F1E" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- 1:1 Square Container (Squircle) -->
  <rect width="48" height="48" rx="11" fill="#0A0F1E"/>
  <rect width="48" height="48" rx="11" class="ambient-glow"/>
  <rect width="46" height="46" x="1" y="1" rx="10" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <!-- CrazyBlocks Letter V -->
  <text x="24" y="25" class="brand-v">V</text>
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
console.log('  → Saved public/favicon.svg (48x48 1:1 Square SVG)');

// 4. Generate public/site.webmanifest
const manifest = {
  name: "VOOO LABS",
  short_name: "VOOO LABS",
  description: "Enterprise-grade business websites, custom web apps, and internal software engineered in Maharashtra, India.",
  start_url: "/",
  display: "standalone",
  background_color: "#0A0F1E",
  theme_color: "#0A0F1E",
  icons: [
    {
      src: "/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
};

fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('  → Saved public/site.webmanifest');

// Cleanup temp directory
try {
  fs.rmSync(tempDir, { recursive: true, force: true });
} catch {
  // ignore
}

console.log('\n🎉 [favicons] All favicon assets generated successfully!');
