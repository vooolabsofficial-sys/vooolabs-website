#!/usr/bin/env node
/**
 * VOOO CHESS 3D — White / Light Suite Production Exporter
 * Renders all required mobile app asset formats:
 * - 1024x1024 PNG (App Store / Play Store Master)
 * - 512x512 PNG (Google Play Store Official Spec)
 * - 192x192 PNG (Android xxxhdpi Launcher)
 * - 180x180 PNG (Apple iOS @3x Launcher)
 * - 1080x1920 & 1242x2688 PNGs (Light Mobile Splash Screens)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const marketingKitRoot = path.resolve(__dirname, '..');
const whiteExports = path.join(marketingKitRoot, 'exports', 'chess-app', 'white');

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
  console.error('[export-white] Error: Chrome executable not found.');
  process.exit(1);
}

console.log(`[export-white] Browser engine: ${chromePath}`);

const tasks = [];

// 1. 1024x1024 Master PNGs (15 files)
for (let i = 1; i <= 15; i++) {
  const dayStr = String(i).padStart(2, '0');
  tasks.push({
    name: `logo-${dayStr}-1024`,
    templatePath: path.resolve(__dirname, 'templates', 'white', `logo-${dayStr}.html`),
    outputPath: path.resolve(whiteExports, 'png-1024', `logo-${dayStr}.png`),
    width: 1024,
    height: 1024,
    desc: 'App Store Master 1024x1024'
  });
}

// 2. 512x512 Google Play Store PNGs (15 files)
for (let i = 1; i <= 15; i++) {
  const dayStr = String(i).padStart(2, '0');
  tasks.push({
    name: `logo-${dayStr}-512`,
    templatePath: path.resolve(__dirname, 'templates', 'white', `logo-${dayStr}.html`),
    outputPath: path.resolve(whiteExports, 'png-512', `logo-${dayStr}.png`),
    width: 512,
    height: 512,
    desc: 'Google Play Store 512x512'
  });
}

// 3. 192x192 Android xxxhdpi Launcher Icons (15 files)
for (let i = 1; i <= 15; i++) {
  const dayStr = String(i).padStart(2, '0');
  tasks.push({
    name: `logo-${dayStr}-192`,
    templatePath: path.resolve(__dirname, 'templates', 'white', `logo-${dayStr}.html`),
    outputPath: path.resolve(whiteExports, 'png-192', `logo-${dayStr}.png`),
    width: 192,
    height: 192,
    desc: 'Android xxxhdpi 192x192'
  });
}

// 4. 180x180 iOS @3x Launcher Icons (15 files)
for (let i = 1; i <= 15; i++) {
  const dayStr = String(i).padStart(2, '0');
  tasks.push({
    name: `logo-${dayStr}-180`,
    templatePath: path.resolve(__dirname, 'templates', 'white', `logo-${dayStr}.html`),
    outputPath: path.resolve(whiteExports, 'png-180', `logo-${dayStr}.png`),
    width: 180,
    height: 180,
    desc: 'iOS @3x 180x180'
  });
}

// 5. Light Mobile Splash Screens (2 files)
tasks.push({
  name: 'splash-light-android',
  templatePath: path.resolve(__dirname, 'templates', 'white', 'splash-light-android.html'),
  outputPath: path.resolve(whiteExports, 'splash', 'splash-light-android.png'),
  width: 1080,
  height: 1920,
  desc: 'Android Full HD Splash 1080x1920'
});

tasks.push({
  name: 'splash-light-ios',
  templatePath: path.resolve(__dirname, 'templates', 'white', 'splash-light-ios.html'),
  outputPath: path.resolve(whiteExports, 'splash', 'splash-light-ios.png'),
  width: 1242,
  height: 2688,
  desc: 'iOS Pro Max Splash 1242x2688'
});

console.log(`[export-white] Starting render of ${tasks.length} production mobile app assets...`);

const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-render-'));

let successCount = 0;
let failCount = 0;
const results = [];

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  if (!fs.existsSync(task.templatePath)) {
    console.error(`  [${i + 1}/${tasks.length}] ✗ Missing template: ${task.templatePath}`);
    failCount++;
    continue;
  }

  try {
    fs.mkdirSync(path.dirname(task.outputPath), { recursive: true });
    const fileUrl = `file:///${task.templatePath.replace(/\\/g, '/')}`;
    const cmd = `"${chromePath}" --headless --disable-gpu --no-sandbox --hide-scrollbars --user-data-dir="${tempProfileDir}" --screenshot="${task.outputPath}" --window-size=${task.width},${task.height} "${fileUrl}"`;

    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(task.outputPath)) {
      const stats = fs.statSync(task.outputPath);
      const sizeKB = Math.round(stats.size / 1024);
      results.push({
        Asset: task.name,
        Resolution: `${task.width}x${task.height}`,
        Spec: task.desc,
        Size: `${sizeKB} KB`,
        Status: '✓ Valid'
      });
      successCount++;
      if ((i + 1) % 5 === 0 || i === tasks.length - 1) {
        console.log(`  [${i + 1}/${tasks.length}] Rendered: ${task.name} (${task.width}x${task.height}, ${sizeKB} KB)`);
      }
    } else {
      console.error(`  [${i + 1}/${tasks.length}] ✗ Output missing: ${task.outputPath}`);
      failCount++;
    }
  } catch (err) {
    console.error(`  [${i + 1}/${tasks.length}] ✗ Failed rendering ${task.name}:`, err.message);
    failCount++;
  }
}

// Clean up temp user profile directory
try {
  fs.rmSync(tempProfileDir, { recursive: true, force: true });
} catch {
  // ignore
}

console.log('\n[export-white] Export Summary:');
console.table(results.slice(0, 15));
console.log(`... and ${results.length - 15} more assets rendered successfully.`);

if (failCount > 0) {
  console.error(`[export-white] Finished with ${failCount} errors.`);
  process.exit(1);
} else {
  console.log(`\n🎉 [export-white] Successfully exported all ${successCount} production mobile assets across all formats!`);
}
