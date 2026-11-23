#!/usr/bin/env node
/**
 * VOOO CHESS 3D — Official "Classic Handcrafted Cherry Wood & Ivory" Production Suite
 * Features:
 * - 4 Handcrafted Wood & Ivory 3D Clash Action Scenes
 * - Integrated official CrazyBlocks "VOOO CHESS" branding with exact website brand colors
 *   (V: #4285F4, O: #5B5BD6, O: #7C3AED, O: #F97316, CHESS: #0F172A) + Clean Golden 3D Badge
 * - 100% Scalable responsive typography (uses vw and % so 1024, 512, 192, 180 all scale with zero clipping)
 * - 2 High-Res Mobile Splash Screens (Android 1080x1920 & iOS 1242x2688) in Wood & Ivory theme
 * - Standard Store Formats: 1024x1024, 512x512, 192x192, 180x180
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
const templatesDir = path.join(__dirname, 'templates', 'cherry-wood');
const exportsDir = path.join(projectRoot, 'marketing-kit', 'exports', 'chess-app', 'cherry-wood-ivory');

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
  console.error('[build-wood] Chrome executable not found.');
  process.exit(1);
}

const woodVariations = [
  {
    id: 1,
    file: 'wood-01-triumph-crown.jpg',
    name: 'Triumphant Crown Strike (Flagship)',
    badge: 'Flagship Edition',
    desc: 'Mirror-polished dark cherry wood pawn strikes the bone-white ivory king; the king is toppled backwards in defeat with the royal 24K gold crown suspended in mid-air over a checkered maple board.'
  },
  {
    id: 2,
    file: 'wood-02-pawn-crowned.jpg',
    name: 'Crowned Wood Champion (The Kingmaker)',
    badge: 'Kingmaker Edition',
    desc: 'The cherry wood pawn stands triumphant wearing the royal 24K gold and velvet crown atop its head, with the defeated ivory king lying beside it on the chessboard.'
  },
  {
    id: 3,
    file: 'wood-03-hex-clash.jpg',
    name: 'Dynamic Collision Clash',
    badge: 'Dynamic Clash',
    desc: 'Close-up high-energy collision: cherry wood pawn physically impacts the ivory king on a hexagonal wooden pedestal with lacquer gleam and golden contact sparks.'
  },
  {
    id: 4,
    file: 'wood-04-classic-staunton.jpg',
    name: 'Artisan Staunton Heritage',
    badge: 'Artisan Heritage',
    desc: 'Handcrafted classic Staunton cherry wood pawn toppling a bone-white ivory king with gold cross finial popping off over a handcrafted walnut board.'
  }
];

console.log('[build-wood] Generating responsive HTML templates for Handcrafted Cherry Wood & Ivory...');

woodVariations.forEach(v => {
  const idStr = String(v.id).padStart(2, '0');
  const imgPath = path.resolve(sourceDir, v.file);
  const imgB64 = fs.readFileSync(imgPath).toString('base64');
  const imgDataUri = `data:image/jpeg;base64,${imgB64}`;

  // 1. Branded 3D Icon with CrazyBlocks "VOOO CHESS" + Golden "3D" Badge (100% Scalable)
  const htmlBranded = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — ${v.name} (Branded)</title>
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
      bottom: 4.5%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border: 1.5px solid rgba(255, 255, 255, 0.95);
      box-shadow: 0 12px 36px rgba(120, 53, 15, 0.2), 0 2px 10px rgba(0, 0, 0, 0.08);
      padding: 1.2% 3.6%;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
    .brand-vooo {
      font-family: 'CrazyBlocks', sans-serif;
      font-size: 4.4vw;
      letter-spacing: 0.15vw;
      display: inline-flex;
      align-items: baseline;
    }
    .brand-badge-3d {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 900;
      font-size: 2.5vw;
      color: #B45309;
      background: #FEF3C7;
      border: 1px solid #FDE68A;
      padding: 0.1vw 0.8vw;
      border-radius: 0.6vw;
      margin-left: 0.9vw;
      display: inline-flex;
      align-items: center;
      box-shadow: 0 2px 6px rgba(217, 119, 6, 0.12);
    }
  </style>
</head>
<body>
  <img src="${imgDataUri}" alt="${v.name}" class="art">
  <div class="brand-pill">
    <div class="brand-vooo">
      <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
      <span style="color: #0F172A; margin-left: 1vw;">CHESS</span>
    </div>
    <div class="brand-badge-3d">3D</div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(templatesDir, `icon-branded-${idStr}.html`), htmlBranded, 'utf8');

  // 2. Pure 3D Art (Full Bleed Store Master)
  const htmlPure = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — ${v.name} (Pure 3D)</title>
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
  <img src="${imgDataUri}" alt="${v.name}">
</body>
</html>`;

  fs.writeFileSync(path.join(templatesDir, `icon-pure-${idStr}.html`), htmlPure, 'utf8');
});

// 3. Generate 2 Handcrafted Wood & Ivory Mobile Splash Screens
console.log('[build-wood] Generating Handcrafted Wood & Ivory Mobile Splash Screens...');

function generateWoodSplashHtml(width, height, isAndroid) {
  const heroImgPath = path.resolve(sourceDir, 'wood-01-triumph-crown.jpg');
  const heroB64 = fs.readFileSync(heroImgPath).toString('base64');
  const heroDataUri = `data:image/jpeg;base64,${heroB64}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — ${isAndroid ? 'Android' : 'iOS'} Wood &amp; Ivory Splash</title>
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
      background: radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FDFBF7 55%, #F7F3EB 100%);
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
      color: #92400E;
    }
    .hero-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .icon-frame {
      width: ${isAndroid ? '580px' : '680px'};
      height: ${isAndroid ? '580px' : '680px'};
      border-radius: ${isAndroid ? '130px' : '155px'};
      box-shadow: 0 40px 90px rgba(120, 53, 15, 0.22), 0 15px 35px rgba(0,0,0,0.08);
      overflow: hidden;
      background: #FFFFFF;
      margin-bottom: 56px;
      border: 5px solid #FFFFFF;
    }
    .icon-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .app-title {
      font-size: ${isAndroid ? '82px' : '98px'};
      letter-spacing: 2.5px;
      line-height: 1;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
    }
    .title-vooo {
      font-family: 'CrazyBlocks', sans-serif;
      display: flex;
      align-items: baseline;
    }
    .title-3d {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 900;
      font-size: ${isAndroid ? '52px' : '62px'};
      color: #B45309;
      background: #FEF3C7;
      border: 2px solid #FDE68A;
      padding: 4px 18px;
      border-radius: 14px;
      margin-left: 16px;
      box-shadow: 0 4px 14px rgba(217, 119, 6, 0.14);
      display: inline-flex;
      align-items: center;
    }
    .app-subtitle {
      font-size: ${isAndroid ? '22px' : '26px'};
      font-weight: 800;
      letter-spacing: 3px;
      color: #78350F;
      text-transform: uppercase;
      margin-bottom: 40px;
    }
    .loading-bar-wrap {
      width: 300px;
      height: 7px;
      background: rgba(120, 53, 15, 0.1);
      border-radius: 9999px;
      overflow: hidden;
    }
    .loading-bar-fill {
      width: 82%;
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
  <div class="top-badge">CLASSIC HANDCRAFTED WOOD &amp; IVORY</div>

  <div class="hero-container">
    <div class="icon-frame">
      <img src="${heroDataUri}" alt="Vooo Chess 3D Handcrafted Clash">
    </div>
    <div class="app-title">
      <div class="title-vooo">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        <span style="color: #0F172A; margin-left: 20px;">CHESS</span>
      </div>
      <div class="title-3d">3D</div>
    </div>
    <div class="app-subtitle">Real Hand-Carved Checkmate in Pure 3D</div>
    <div class="loading-bar-wrap">
      <div class="loading-bar-fill"></div>
    </div>
  </div>

  <div class="bottom-tag">ENGINEERED BY VOOO LABS</div>
</body>
</html>`;
}

fs.writeFileSync(path.join(templatesDir, 'splash-wood-android.html'), generateWoodSplashHtml(1080, 1920, true), 'utf8');
fs.writeFileSync(path.join(templatesDir, 'splash-wood-ios.html'), generateWoodSplashHtml(1242, 2688, false), 'utf8');

console.log('[build-wood] Queueing export tasks for Wood & Ivory suite...');

const tasks = [];

// 1. 1024x1024 Master Branded PNGs (4 files)
woodVariations.forEach(v => {
  const idStr = String(v.id).padStart(2, '0');
  tasks.push({
    name: `wood-icon-${idStr}-1024`,
    templatePath: path.resolve(templatesDir, `icon-branded-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-1024', `wood-icon-${idStr}.png`),
    width: 1024,
    height: 1024,
    desc: 'App Store Master 1024x1024 (Branded)'
  });
});

// 2. 512x512 Google Play Store Official Icons (4 files)
woodVariations.forEach(v => {
  const idStr = String(v.id).padStart(2, '0');
  tasks.push({
    name: `wood-icon-${idStr}-512`,
    templatePath: path.resolve(templatesDir, `icon-branded-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-512', `wood-icon-${idStr}.png`),
    width: 512,
    height: 512,
    desc: 'Google Play Store 512x512 (Branded)'
  });
});

// 3. 192x192 Android xxxhdpi Launcher Icons (4 files)
woodVariations.forEach(v => {
  const idStr = String(v.id).padStart(2, '0');
  tasks.push({
    name: `wood-icon-${idStr}-192`,
    templatePath: path.resolve(templatesDir, `icon-branded-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-192', `wood-icon-${idStr}.png`),
    width: 192,
    height: 192,
    desc: 'Android xxxhdpi 192x192'
  });
});

// 4. 180x180 Apple iOS @3x Launcher Icons (4 files)
woodVariations.forEach(v => {
  const idStr = String(v.id).padStart(2, '0');
  tasks.push({
    name: `wood-icon-${idStr}-180`,
    templatePath: path.resolve(templatesDir, `icon-branded-${idStr}.html`),
    outputPath: path.resolve(exportsDir, 'png-180', `wood-icon-${idStr}.png`),
    width: 180,
    height: 180,
    desc: 'Apple iOS @3x 180x180'
  });
});

// 5. Wood & Ivory Mobile Splash Screens (2 files)
tasks.push({
  name: 'splash-wood-android',
  templatePath: path.resolve(templatesDir, 'splash-wood-android.html'),
  outputPath: path.resolve(exportsDir, 'splash', 'splash-wood-android.png'),
  width: 1080,
  height: 1920,
  desc: 'Android Full HD Wood Splash 1080x1920'
});

tasks.push({
  name: 'splash-wood-ios',
  templatePath: path.resolve(templatesDir, 'splash-wood-ios.html'),
  outputPath: path.resolve(exportsDir, 'splash', 'splash-wood-ios.png'),
  width: 1242,
  height: 2688,
  desc: 'iOS Pro Max Wood Splash 1242x2688'
});

console.log(`[build-wood] Rendering all ${tasks.length} Handcrafted Wood & Ivory assets with Chrome...`);

const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-wood-clean-'));
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
      console.log(`  [${i + 1}/${tasks.length}] Rendered: ${task.name} (${task.width}x${task.height}, ${sizeKB} KB)`);
    } else {
      console.error(`  [${i + 1}/${tasks.length}] ✗ Missing: ${task.outputPath}`);
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
  console.error(`[build-wood] Finished with ${failCount} errors.`);
  process.exit(1);
} else {
  console.log(`\n🎉 [build-wood] Successfully exported all ${successCount} Handcrafted Wood & Ivory assets!`);
}
