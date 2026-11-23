#!/usr/bin/env node
/**
 * VOOO CHESS 3D — Production PNG Exporter
 * Renders all 15 App Icon Logos (1024x1024) and 2 Splash Screens (1080x1920)
 * into high-resolution, production-grade PNGs under 5 MB.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const marketingKitRoot = path.resolve(__dirname, '..');
const outDir = path.join(marketingKitRoot, 'exports', 'chess-app');

fs.mkdirSync(outDir, { recursive: true });

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
  console.error('[export-chess] Error: Google Chrome or Chromium executable not found.');
  process.exit(1);
}

console.log(`[export-chess] Chrome engine: ${chromePath}`);

const tasks = [];

// 15 App Icon Logos
for (let i = 1; i <= 15; i++) {
  const dayStr = String(i).padStart(2, '0');
  tasks.push({
    name: `logo-${dayStr}`,
    category: 'app-icon',
    templatePath: path.join(__dirname, 'templates', `logo-${dayStr}.html`),
    outputPath: path.join(outDir, `logo-${dayStr}.png`),
    width: 1024,
    height: 1024
  });
}

// 2 Mobile Splash Screens
tasks.push({
  name: 'splash-01-dark',
  category: 'splash-screen',
  templatePath: path.join(__dirname, 'templates', 'splash-01-dark.html'),
  outputPath: path.join(outDir, 'splash-01-dark.png'),
  width: 1080,
  height: 1920
});

tasks.push({
  name: 'splash-02-neon',
  category: 'splash-screen',
  templatePath: path.join(__dirname, 'templates', 'splash-02-neon.html'),
  outputPath: path.join(outDir, 'splash-02-neon.png'),
  width: 1080,
  height: 1920
});

console.log(`[export-chess] Rendering ${tasks.length} production PNGs...`);

let successCount = 0;
let failCount = 0;
const results = [];

for (const task of tasks) {
  if (!fs.existsSync(task.templatePath)) {
    console.error(`  ✗ Missing template: ${task.templatePath}`);
    failCount++;
    continue;
  }

  try {
    const fileUrl = `file:///${task.templatePath.replace(/\\/g, '/')}`;
    const cmd = `"${chromePath}" --headless --screenshot="${task.outputPath}" --window-size=${task.width},${task.height} --hide-scrollbars --default-background-color=00000000 "${fileUrl}"`;

    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(task.outputPath)) {
      const stats = fs.statSync(task.outputPath);
      const sizeKB = Math.round(stats.size / 1024);
      const isUnder5MB = stats.size < 5 * 1024 * 1024;

      results.push({
        Asset: task.name,
        Category: task.category,
        Resolution: `${task.width}x${task.height}`,
        Size: `${sizeKB} KB`,
        Status: isUnder5MB ? '✓ Under 5MB' : '⚠ OVER 5MB'
      });
      successCount++;
    } else {
      console.error(`  ✗ Output not created: ${task.outputPath}`);
      failCount++;
    }
  } catch (err) {
    console.error(`  ✗ Render failed for ${task.name}:`, err.message);
    failCount++;
  }
}

console.log('\n[export-chess] Summary:');
console.table(results);

if (failCount > 0) {
  console.error(`[export-chess] Finished with ${failCount} errors.`);
  process.exit(1);
} else {
  console.log(`[export-chess] All ${successCount} assets exported successfully.`);
}
