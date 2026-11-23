#!/usr/bin/env node
/**
 * VOOO CHESS 3D — Real 3D Studio Production Suite
 * Generates and exports genuine 3D mobile game app icons and splash screens:
 * - 100% Photorealistic 3D Renders (ZERO Cyberpunk, ZERO Neon, ZERO Dark Black Backgrounds)
 * - 10 Distinct Luxury Styles (Gold & Marble, Sapphire & Gold, Emerald Jade, Ruby Rose Gold, etc.)
 * - Standard Store Formats: 1024x1024, 512x512, 192x192, 180x180, Splash 1080x1920 & 1242x2688
 * - Integrated official CrazyBlocks "VOOO CHESS 3D" branding
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

const fontPath = path.join(projectRoot, 'public', 'fonts', 'crazy-blocks', 'crazyblocks.otf');
const fontB64 = fs.readFileSync(fontPath).toString('base64');

const sourceDir = path.join(__dirname, 'source-3d');
const templatesDir = path.join(__dirname, 'templates', 'real-3d');
const exportsDir = path.join(projectRoot, 'marketing-kit', 'exports', 'chess-app', 'real-3d');

fs.mkdirSync(templatesDir, { recursive: true });
fs.mkdirSync(path.join(exportsDir, 'png-1024'), { recursive: true });
fs.mkdirSync(path.join(exportsDir, 'png-512'), { recursive: true });
fs.mkdirSync(path.join(exportsDir, 'png-192'), { recursive: true });
fs.mkdirSync(path.join(exportsDir, 'png-180'), { recursive: true });
fs.mkdirSync(path.join(exportsDir, 'splash'), { recursive: true });

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
  console.error('[build-real-3d] Chrome executable not found.');
  process.exit(1);
}

const real3dDesigns = [
  {
    id: 1,
    file: '3d-01-gold-marble.jpg',
    name: 'Pure 24K Gold & Carrara Marble',
    theme: 'Flagship Luxury 3D',
    desc: 'Solid mirror-polished 24K gold pawn toppling a pristine white Carrara marble king; golden jewel crown flying mid-air over a sunlit marble board.'
  },
  {
    id: 2,
    file: '3d-02-royal-sapphire.jpg',
    name: 'Vooo Royal Sapphire & 24K Gold',
    theme: 'Vooo Studio Signature',
    desc: 'Glossy Royal Sapphire Blue ceramic pawn with 24K gold filigree triumphantly standing over a toppled white porcelain king with flying gold crown.'
  },
  {
    id: 3,
    file: '3d-03-emerald-jade.jpg',
    name: 'Imperial Emerald Jade & Gold',
    theme: 'Casino Prestige 3D',
    desc: 'Luminous translucent emerald jade pawn with gold trim physically ramming the white marble king, base lifting off board with flying crown.'
  },
  {
    id: 4,
    file: '3d-04-pawn-crowned.jpg',
    name: 'The Royal Kingmaker (Pawn Crowned)',
    theme: 'Triumphant Coronation',
    desc: 'The golden pawn stands victorious directly wearing the bejeweled royal golden crown, while the defeated white marble king lies toppled beside it.'
  },
  {
    id: 5,
    file: '3d-05-ruby-crystal.jpg',
    name: 'Faceted Ruby Crystal & Rose Gold',
    theme: 'Haute Joaillerie 3D',
    desc: 'Radiant crimson faceted ruby crystal pawn with victory standard standing over a fallen alabaster king and hovering rose-gold crown.'
  },
  {
    id: 6,
    file: '3d-06-cherry-wood.jpg',
    name: 'Classic Handcrafted Cherry Wood & Ivory',
    theme: 'Artisan Heritage 3D',
    desc: 'Hand-carved polished dark cherry wood pawn with warm amber grain toppling a bone-white ivory king with gold cross finial.'
  },
  {
    id: 7,
    file: '3d-07-titanium-platinum.jpg',
    name: 'Brushed Titanium Platinum & Sky Cyan',
    theme: 'Aerospace Modern 3D',
    desc: 'Sleek brushed titanium platinum pawn with subtle cyan illuminated seam standing over a toppled ceramic king with gold crown.'
  },
  {
    id: 8,
    file: '3d-08-amethyst-violet.jpg',
    name: 'Amethyst Crystal & Pearl White',
    theme: 'Mystical Grandmaster 3D',
    desc: 'Translucent amethyst purple crystal pawn with golden filigree toppling a pearl-white king on cracked impact marble tiles.'
  },
  {
    id: 9,
    file: '3d-09-solar-amber.jpg',
    name: 'Solar Honey Amber & Alabaster',
    theme: 'Warm Sunlight 3D',
    desc: 'Translucent glowing honey-amber pawn standing proudly over a toppled alabaster king with floating gold crown under warm sunbeams.'
  },
  {
    id: 10,
    file: '3d-10-gold-clash-strike.jpg',
    name: 'High-Impact Gold Strike (Action Clash)',
    theme: 'Dynamic Collision 3D',
    desc: 'Close-up high-energy collision: 24K gold pawn strikes the white Carrara marble king chest, shattering marble fragments with flying crown.'
  }
];

console.log('[build-real-3d] Generating responsive HTML templates for all 10 Real 3D designs...');

real3dDesigns.forEach(d => {
  const idStr = String(d.id).padStart(2, '0');
  const imgPath = path.resolve(sourceDir, d.file);
  const imgB64 = fs.readFileSync(imgPath).toString('base64');
  const imgDataUri = `data:image/jpeg;base64,${imgB64}`;

  // 1. Standard Pure 3D Game Icon Template (Official App Store / Play Store Flat Full Bleed)
  const htmlPure = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — Real 3D Icon ${idStr}: ${d.name}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  </style>
</head>
<body>
  <img src="${imgDataUri}" alt="${d.name}">
</body>
</html>`;

  fs.writeFileSync(path.join(templatesDir, `icon-pure-${idStr}.html`), htmlPure, 'utf8');

  // 2. Branded 3D Icon with CrazyBlocks "VOOO CHESS 3D" Glassmorphism Pill at bottom
  const htmlBranded = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — Branded 3D Icon ${idStr}: ${d.name}</title>
  <style>
    @font-face {
      font-family: 'CrazyBlocks';
      src: url('data:font/otf;base64,${fontB64}') format('opentype');
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #FFFFFF;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .art {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .brand-pill {
      position: absolute;
      bottom: 42px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(20px);
      border: 1.5px solid rgba(255, 255, 255, 0.9);
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 10px 28px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'CrazyBlocks', sans-serif;
      font-size: 38px;
      letter-spacing: 1.5px;
      white-space: nowrap;
    }
  </style>
</head>
<body>
  <img src="${imgDataUri}" alt="${d.name}" class="art">
  <div class="brand-pill">
    <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
    <span style="color: #1E293B; margin-left: 10px;">CHESS</span>
    <span style="color: #D97706; margin-left: 6px;">3D</span>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(templatesDir, `icon-branded-${idStr}.html`), htmlBranded, 'utf8');
});

// 3. Generate 2 Light Mobile Splash Screens with 3D Clash Hero & CrazyBlocks Branding
console.log('[build-real-3d] Generating 2 Light Mobile Splash Screens (Android 1080x1920 & iOS 1242x2688)...');

function generateSplashHtml(width, height, isAndroid) {
  const heroImgPath = path.resolve(sourceDir, '3d-01-gold-marble.jpg');
  const heroB64 = fs.readFileSync(heroImgPath).toString('base64');
  const heroDataUri = `data:image/jpeg;base64,${heroB64}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — ${isAndroid ? 'Android' : 'iOS'} Real 3D Splash Screen</title>
  <style>
    @font-face {
      font-family: 'CrazyBlocks';
      src: url('data:font/otf;base64,${fontB64}') format('opentype');
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: ${width}px;
      height: ${height}px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FAF8F5 65%, #F0ECE4 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: ${isAndroid ? '130px 60px 80px' : '170px 80px 100px'};
    }
    .top-badge {
      font-size: ${isAndroid ? '18px' : '22px'};
      font-weight: 800;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: #94A3B8;
    }
    .hero-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .icon-frame {
      width: ${isAndroid ? '560px' : '660px'};
      height: ${isAndroid ? '560px' : '660px'};
      border-radius: ${isAndroid ? '124px' : '150px'};
      box-shadow: 0 35px 80px rgba(217, 119, 6, 0.18), 0 12px 30px rgba(0,0,0,0.08);
      overflow: hidden;
      background: #FFFFFF;
      margin-bottom: 52px;
      border: 4px solid #FFFFFF;
    }
    .icon-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .app-title {
      font-family: 'CrazyBlocks', sans-serif;
      font-size: ${isAndroid ? '76px' : '90px'};
      letter-spacing: 2.5px;
      line-height: 1;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
    }
    .app-subtitle {
      font-size: ${isAndroid ? '22px' : '26px'};
      font-weight: 700;
      letter-spacing: 2px;
      color: #64748B;
      text-transform: uppercase;
      margin-bottom: 40px;
    }
    .loading-bar-wrap {
      width: 280px;
      height: 6px;
      background: rgba(0,0,0,0.06);
      border-radius: 9999px;
      overflow: hidden;
    }
    .loading-bar-fill {
      width: 78%;
      height: 100%;
      background: linear-gradient(90deg, #4285F4, #5B5BD6, #7C3AED, #F97316);
      border-radius: 9999px;
    }
    .bottom-tag {
      font-size: ${isAndroid ? '16px' : '19px'};
      font-weight: 800;
      letter-spacing: 4px;
      color: #94A3B8;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div class="top-badge">REAL-TIME 3D GRANDMASTER CHESS</div>

  <div class="hero-container">
    <div class="icon-frame">
      <img src="${heroDataUri}" alt="Vooo Chess 3D Hero Clash">
    </div>
    <div class="app-title">
      <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
      <span style="color: #1E293B; margin-left: 18px;">CHESS</span>
      <span style="color: #D97706; margin-left: 12px;">3D</span>
    </div>
    <div class="app-subtitle">Real Physical Checkmate in Pure 3D</div>
    <div class="loading-bar-wrap">
      <div class="loading-bar-fill"></div>
    </div>
  </div>

  <div class="bottom-tag">ENGINEERED BY VOOO LABS</div>
</body>
</html>`;
}

fs.writeFileSync(path.join(templatesDir, 'splash-android.html'), generateSplashHtml(1080, 1920, true), 'utf8');
fs.writeFileSync(path.join(templatesDir, 'splash-ios.html'), generateSplashHtml(1242, 2688, false), 'utf8');

console.log('[build-real-3d] Queueing export tasks for all 10 Real 3D designs across all resolutions...');

const tasks = [];

// 1. 1024x1024 Master App Store Icons (10 files)
real3dDesigns.forEach(d => {
  const idStr = String(d.id).padStart(2, '0');
  tasks.push({
    name: `logo-3d-${idStr}-1024`,
    templatePath: path.resolve(templatesDir, `icon-pure-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-1024', `logo-3d-${idStr}.png`),
    width: 1024,
    height: 1024,
    desc: 'App Store Master 1024x1024'
  });
});

// 2. 512x512 Google Play Store Official Icons (10 files)
real3dDesigns.forEach(d => {
  const idStr = String(d.id).padStart(2, '0');
  tasks.push({
    name: `logo-3d-${idStr}-512`,
    templatePath: path.resolve(templatesDir, `icon-pure-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-512', `logo-3d-${idStr}.png`),
    width: 512,
    height: 512,
    desc: 'Google Play Store 512x512'
  });
});

// 3. 192x192 Android xxxhdpi Launcher Icons (10 files)
real3dDesigns.forEach(d => {
  const idStr = String(d.id).padStart(2, '0');
  tasks.push({
    name: `logo-3d-${idStr}-192`,
    templatePath: path.resolve(templatesDir, `icon-pure-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-192', `logo-3d-${idStr}.png`),
    width: 192,
    height: 192,
    desc: 'Android xxxhdpi 192x192'
  });
});

// 4. 180x180 Apple iOS @3x Launcher Icons (10 files)
real3dDesigns.forEach(d => {
  const idStr = String(d.id).padStart(2, '0');
  tasks.push({
    name: `logo-3d-${idStr}-180`,
    templatePath: path.resolve(templatesDir, `icon-pure-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-180', `logo-3d-${idStr}.png`),
    width: 180,
    height: 180,
    desc: 'Apple iOS @3x 180x180'
  });
});

// 5. Light Mobile Splash Screens (2 files)
tasks.push({
  name: 'splash-real-3d-android',
  templatePath: path.resolve(templatesDir, 'splash-android.html'),
  outputPath: path.resolve(exportsDir, 'splash', 'splash-real-3d-android.png'),
  width: 1080,
  height: 1920,
  desc: 'Android Full HD Splash 1080x1920'
});

tasks.push({
  name: 'splash-real-3d-ios',
  templatePath: path.resolve(templatesDir, 'splash-ios.html'),
  outputPath: path.resolve(exportsDir, 'splash', 'splash-real-3d-ios.png'),
  width: 1242,
  height: 2688,
  desc: 'iOS Pro Max Splash 1242x2688'
});

console.log(`[build-real-3d] Rendering all ${tasks.length} Real 3D mobile assets with Headless Chrome...`);

const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-real-3d-'));
let successCount = 0;
let failCount = 0;

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  try {
    const fileUrl = `file:///${task.templatePath.replace(/\\/g, '/')}`;
    const cmd = `"${chromePath}" --headless --disable-gpu --no-sandbox --hide-scrollbars --user-data-dir="${tempProfileDir}" --screenshot="${task.outputPath}" --window-size=${task.width},${task.height} "${fileUrl}"`;
    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(task.outputPath)) {
      const sizeKB = Math.round(fs.statSync(task.outputPath).size / 1024);
      successCount++;
      if ((i + 1) % 5 === 0 || i === tasks.length - 1) {
        console.log(`  [${i + 1}/${tasks.length}] Rendered: ${task.name} (${task.width}x${task.height}, ${sizeKB} KB)`);
      }
    } else {
      console.error(`  [${i + 1}/${tasks.length}] ✗ Output missing: ${task.outputPath}`);
      failCount++;
    }
  } catch (err) {
    console.error(`  [${i + 1}/${tasks.length}] ✗ Failed: ${task.name}`, err.message);
    failCount++;
  }
}

try {
  fs.rmSync(tempProfileDir, { recursive: true, force: true });
} catch {
  // ignore
}

if (failCount > 0) {
  console.error(`[build-real-3d] Finished with ${failCount} errors.`);
  process.exit(1);
} else {
  console.log(`\n🎉 [build-real-3d] Successfully exported all ${successCount} Real 3D mobile assets across all formats!`);
}
