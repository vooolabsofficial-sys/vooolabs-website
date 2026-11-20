#!/usr/bin/env node
/**
 * VOOO LABS — WhatsApp Pro & 30-Day Campaign Asset Exporter
 * Renders all 35 templates into crisp, production-grade PNGs under 5 MB.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const marketingKitRoot = path.resolve(__dirname, '..');

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
  console.error('[export-all] Error: Google Chrome or Chromium executable not found.');
  process.exit(1);
}

console.log(`[export-all] Browser engine: ${chromePath}`);

const tasks = [
  // ── WHATSAPP PRO SUITE ──
  {
    category: 'whatsapp-pro',
    templatePath: path.join(marketingKitRoot, 'whatsapp-pro', 'whatsapp-cover.html'),
    outDir: path.join(marketingKitRoot, 'exports', 'whatsapp-pro'),
    outputFile: 'whatsapp-cover.png',
    width: 1920,
    height: 1080
  },
  {
    category: 'whatsapp-pro',
    templatePath: path.join(marketingKitRoot, 'whatsapp-pro', 'catalog-01-websites.html'),
    outDir: path.join(marketingKitRoot, 'exports', 'whatsapp-pro'),
    outputFile: 'catalog-01-websites.png',
    width: 1080,
    height: 1080
  },
  {
    category: 'whatsapp-pro',
    templatePath: path.join(marketingKitRoot, 'whatsapp-pro', 'catalog-02-webapps.html'),
    outDir: path.join(marketingKitRoot, 'exports', 'whatsapp-pro'),
    outputFile: 'catalog-02-webapps.png',
    width: 1080,
    height: 1080
  },
  {
    category: 'whatsapp-pro',
    templatePath: path.join(marketingKitRoot, 'whatsapp-pro', 'catalog-03-software.html'),
    outDir: path.join(marketingKitRoot, 'exports', 'whatsapp-pro'),
    outputFile: 'catalog-03-software.png',
    width: 1080,
    height: 1080
  },
  {
    category: 'whatsapp-pro',
    templatePath: path.join(marketingKitRoot, 'whatsapp-pro', 'catalog-04-seo-ai.html'),
    outDir: path.join(marketingKitRoot, 'exports', 'whatsapp-pro'),
    outputFile: 'catalog-04-seo-ai.png',
    width: 1080,
    height: 1080
  }
];

// ── 30-DAY SOCIAL CAMPAIGN ──
for (let i = 1; i <= 30; i++) {
  const dayStr = String(i).padStart(2, '0');
  tasks.push({
    category: 'campaign-30-days',
    templatePath: path.join(marketingKitRoot, 'campaign-30-days', 'templates', `day-${dayStr}.html`),
    outDir: path.join(marketingKitRoot, 'exports', 'campaign-30-days'),
    outputFile: `day-${dayStr}.png`,
    width: 1080,
    height: 1440
  });
}

console.log(`[export-all] Starting export of ${tasks.length} production PNGs...`);

let successCount = 0;
let failCount = 0;
const results = [];

for (const task of tasks) {
  fs.mkdirSync(task.outDir, { recursive: true });
  const outPath = path.join(task.outDir, task.outputFile);

  if (!fs.existsSync(task.templatePath)) {
    console.error(`  ✗ Missing template: ${task.templatePath}`);
    failCount++;
    continue;
  }

  try {
    const fileUrl = `file:///${task.templatePath.replace(/\\/g, '/')}`;
    const cmd = `"${chromePath}" --headless --screenshot="${outPath}" --window-size=${task.width},${task.height} --hide-scrollbars --default-background-color=00000000 "${fileUrl}"`;

    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(outPath)) {
      const stats = fs.statSync(outPath);
      const sizeKB = Math.round(stats.size / 1024);
      const isUnder5MB = stats.size < 5 * 1024 * 1024;

      results.push({
        Asset: `${task.category}/${task.outputFile}`,
        Resolution: `${task.width}x${task.height}`,
        Size: `${sizeKB} KB`,
        Status: isUnder5MB ? '✓ Under 5MB' : '⚠ OVER 5MB'
      });
      successCount++;
    } else {
      console.error(`  ✗ Output file not found: ${outPath}`);
      failCount++;
    }
  } catch (err) {
    console.error(`  ✗ Error rendering ${task.outputFile}:`, err.message);
    failCount++;
  }
}

console.log('\n[export-all] Export Summary:');
console.table(results);

if (failCount > 0) {
  console.error(`[export-all] Finished with ${failCount} errors. ${successCount} rendered successfully.`);
  process.exit(1);
} else {
  console.log(`[export-all] Successfully rendered all ${successCount} assets under 5 MB.`);
}
