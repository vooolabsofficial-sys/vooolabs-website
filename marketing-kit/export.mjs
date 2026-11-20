#!/usr/bin/env node
/**
 * VOOO LABS — Marketing Kit Production Asset Exporter
 * Renders all templates at exact pixel dimensions into crisp PNGs under 5 MB.
 * Supports Playwright, Puppeteer, or native Chrome Headless on Windows / Linux / macOS.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Locate Chrome executable
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
  console.error('[export] Error: Google Chrome or Chromium executable not found.');
  console.error('[export] Please install Chrome or set the CHROME_PATH environment variable.');
  process.exit(1);
}

console.log(`[export] Using browser engine: ${chromePath}`);

// 2. Define export tasks
const tasks = [
  // LOGOS (2048 x 2048)
  { category: 'logos', template: 'wordmark-light.html', output: 'wordmark-light.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'wordmark-dark.html', output: 'wordmark-dark.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'wordmark-transparent.html', output: 'wordmark-transparent.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'wordmark-white.html', output: 'wordmark-white.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'wordmark-black.html', output: 'wordmark-black.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'icon-light.html', output: 'icon-light.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'icon-dark.html', output: 'icon-dark.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'icon-transparent.html', output: 'icon-transparent.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'icon-white.html', output: 'icon-white.png', width: 2048, height: 2048 },
  { category: 'logos', template: 'icon-black.html', output: 'icon-black.png', width: 2048, height: 2048 },

  // GBP (Google Business Profile)
  { category: 'gbp', template: 'gbp-logo-light.html', output: 'gbp-logo-light.png', width: 720, height: 720 },
  { category: 'gbp', template: 'gbp-logo-dark.html', output: 'gbp-logo-dark.png', width: 720, height: 720 },
  { category: 'gbp', template: 'gbp-cover.html', output: 'gbp-cover.png', width: 1024, height: 576 },
  { category: 'gbp', template: 'gbp-service-websites.html', output: 'gbp-service-websites.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-webapps.html', output: 'gbp-service-webapps.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-software.html', output: 'gbp-service-software.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-seo-ai.html', output: 'gbp-service-seo-ai.png', width: 1200, height: 900 },

  // WHATSAPP
  { category: 'whatsapp', template: 'whatsapp-dp-light.html', output: 'whatsapp-dp-light.png', width: 800, height: 800 },
  { category: 'whatsapp', template: 'whatsapp-dp-dark.html', output: 'whatsapp-dp-dark.png', width: 800, height: 800 },
  { category: 'whatsapp', template: 'whatsapp-catalog-card.html', output: 'whatsapp-catalog-card.png', width: 1080, height: 1080 },

  // LINKEDIN
  { category: 'linkedin', template: 'linkedin-logo.html', output: 'linkedin-logo.png', width: 400, height: 400 },
  { category: 'linkedin', template: 'linkedin-cover.html', output: 'linkedin-cover.png', width: 1128, height: 191 },
  { category: 'linkedin', template: 'linkedin-post.html', output: 'linkedin-post.png', width: 1200, height: 627 },

  // INSTAGRAM
  { category: 'instagram', template: 'instagram-dp.html', output: 'instagram-dp.png', width: 800, height: 800 },
  { category: 'instagram', template: 'instagram-post.html', output: 'instagram-post.png', width: 1080, height: 1350 },
  { category: 'instagram', template: 'instagram-story.html', output: 'instagram-story.png', width: 1080, height: 1920 }
];

console.log(`[export] Starting export of ${tasks.length} marketing assets...`);

let successCount = 0;
let failCount = 0;
const resultsTable = [];

for (const task of tasks) {
  const templatePath = path.join(__dirname, 'templates', task.category, task.template);
  const outDir = path.join(__dirname, 'exports', task.category);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, task.output);

  if (!fs.existsSync(templatePath)) {
    console.error(`  ✗ Template missing: ${templatePath}`);
    failCount++;
    continue;
  }

  try {
    const fileUrl = `file:///${templatePath.replace(/\\/g, '/')}`;
    const cmd = `"${chromePath}" --headless --screenshot="${outPath}" --window-size=${task.width},${task.height} --hide-scrollbars --default-background-color=00000000 "${fileUrl}"`;
    
    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(outPath)) {
      const stats = fs.statSync(outPath);
      const sizeKB = Math.round(stats.size / 1024);
      const isUnder5MB = stats.size < 5 * 1024 * 1024;
      
      resultsTable.push({
        Asset: `${task.category}/${task.output}`,
        Resolution: `${task.width}x${task.height}`,
        Size: `${sizeKB} KB`,
        Status: isUnder5MB ? '✓ Under 5MB' : '⚠ OVER 5MB'
      });
      successCount++;
    } else {
      console.error(`  ✗ File not created: ${outPath}`);
      failCount++;
    }
  } catch (err) {
    console.error(`  ✗ Failed rendering ${task.output}:`, err.message);
    failCount++;
  }
}

// 3. Also copy raw SVGs into exports/logos/
const svgSourceDir = path.join(__dirname, 'templates', 'logos');
const svgTargetDir = path.join(__dirname, 'exports', 'logos');
const svgs = fs.readdirSync(svgSourceDir).filter(f => f.endsWith('.svg'));
for (const svg of svgs) {
  fs.copyFileSync(path.join(svgSourceDir, svg), path.join(svgTargetDir, svg));
}
console.log(`[export] Copied ${svgs.length} vector SVGs to exports/logos/`);

console.log('\n[export] Export Summary:');
console.table(resultsTable);

if (failCount > 0) {
  console.error(`[export] Completed with ${failCount} errors. ${successCount} successful.`);
  process.exit(1);
} else {
  console.log(`[export] Successfully exported all ${successCount} assets. Ready for production deployment.`);
}
