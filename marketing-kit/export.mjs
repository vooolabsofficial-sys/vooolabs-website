#!/usr/bin/env node
/**
 * VOOO LABS — Marketing Kit Production Asset Exporter
 * Renders all templates at exact pixel dimensions into crisp PNGs under 5 MB.
 * Full Light & Dark Parity across all brand channels.
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
  process.exit(1);
}

console.log(`[export] Using browser engine: ${chromePath}`);

// 2. Define export tasks (Complete Light & Dark Parity)
const tasks = [
  // ── LOGOS (2048 x 2048) ──
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

  // ── GOOGLE BUSINESS PROFILE (GBP) ──
  { category: 'gbp', template: 'gbp-logo-light.html', output: 'gbp-logo-light.png', width: 720, height: 720 },
  { category: 'gbp', template: 'gbp-logo-dark.html', output: 'gbp-logo-dark.png', width: 720, height: 720 },
  { category: 'gbp', template: 'gbp-cover-dark.html', output: 'gbp-cover-dark.png', width: 1024, height: 576 },
  { category: 'gbp', template: 'gbp-cover-light.html', output: 'gbp-cover-light.png', width: 1024, height: 576 },
  { category: 'gbp', template: 'gbp-cover.html', output: 'gbp-cover.png', width: 1024, height: 576 },
  // Services Dark & Light
  { category: 'gbp', template: 'gbp-service-websites-dark.html', output: 'gbp-service-websites-dark.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-websites-light.html', output: 'gbp-service-websites-light.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-websites.html', output: 'gbp-service-websites.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-webapps-dark.html', output: 'gbp-service-webapps-dark.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-webapps-light.html', output: 'gbp-service-webapps-light.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-webapps.html', output: 'gbp-service-webapps.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-software-dark.html', output: 'gbp-service-software-dark.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-software-light.html', output: 'gbp-service-software-light.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-software.html', output: 'gbp-service-software.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-seo-ai-dark.html', output: 'gbp-service-seo-ai-dark.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-seo-ai-light.html', output: 'gbp-service-seo-ai-light.png', width: 1200, height: 900 },
  { category: 'gbp', template: 'gbp-service-seo-ai.html', output: 'gbp-service-seo-ai.png', width: 1200, height: 900 },

  // ── WHATSAPP BUSINESS ──
  { category: 'whatsapp', template: 'whatsapp-dp-light.html', output: 'whatsapp-dp-light.png', width: 800, height: 800 },
  { category: 'whatsapp', template: 'whatsapp-dp-dark.html', output: 'whatsapp-dp-dark.png', width: 800, height: 800 },
  { category: 'whatsapp', template: 'whatsapp-catalog-card-dark.html', output: 'whatsapp-catalog-card-dark.png', width: 1080, height: 1080 },
  { category: 'whatsapp', template: 'whatsapp-catalog-card-light.html', output: 'whatsapp-catalog-card-light.png', width: 1080, height: 1080 },
  { category: 'whatsapp', template: 'whatsapp-catalog-card.html', output: 'whatsapp-catalog-card.png', width: 1080, height: 1080 },

  // ── LINKEDIN COMPANY PAGE ──
  { category: 'linkedin', template: 'linkedin-logo-dark.html', output: 'linkedin-logo-dark.png', width: 400, height: 400 },
  { category: 'linkedin', template: 'linkedin-logo-light.html', output: 'linkedin-logo-light.png', width: 400, height: 400 },
  { category: 'linkedin', template: 'linkedin-logo.html', output: 'linkedin-logo.png', width: 400, height: 400 },
  { category: 'linkedin', template: 'linkedin-cover-dark.html', output: 'linkedin-cover-dark.png', width: 1128, height: 191 },
  { category: 'linkedin', template: 'linkedin-cover-light.html', output: 'linkedin-cover-light.png', width: 1128, height: 191 },
  { category: 'linkedin', template: 'linkedin-cover.html', output: 'linkedin-cover.png', width: 1128, height: 191 },
  { category: 'linkedin', template: 'linkedin-post-dark.html', output: 'linkedin-post-dark.png', width: 1200, height: 627 },
  { category: 'linkedin', template: 'linkedin-post-light.html', output: 'linkedin-post-light.png', width: 1200, height: 627 },
  { category: 'linkedin', template: 'linkedin-post.html', output: 'linkedin-post.png', width: 1200, height: 627 },

  // ── INSTAGRAM ──
  { category: 'instagram', template: 'instagram-dp-dark.html', output: 'instagram-dp-dark.png', width: 800, height: 800 },
  { category: 'instagram', template: 'instagram-dp-light.html', output: 'instagram-dp-light.png', width: 800, height: 800 },
  { category: 'instagram', template: 'instagram-dp.html', output: 'instagram-dp.png', width: 800, height: 800 },
  { category: 'instagram', template: 'instagram-post-dark.html', output: 'instagram-post-dark.png', width: 1080, height: 1350 },
  { category: 'instagram', template: 'instagram-post-light.html', output: 'instagram-post-light.png', width: 1080, height: 1350 },
  { category: 'instagram', template: 'instagram-post.html', output: 'instagram-post.png', width: 1080, height: 1350 },
  { category: 'instagram', template: 'instagram-story-dark.html', output: 'instagram-story-dark.png', width: 1080, height: 1920 },
  { category: 'instagram', template: 'instagram-story-light.html', output: 'instagram-story-light.png', width: 1080, height: 1920 },
  { category: 'instagram', template: 'instagram-story.html', output: 'instagram-story.png', width: 1080, height: 1920 },

  // ── BUSINESS VISITING CARDS ──
  { category: 'business-card', template: 'business-card-dark.html', output: 'business-card-dark.png', width: 1050, height: 600 },
  { category: 'business-card', template: 'business-card-light.html', output: 'business-card-light.png', width: 1050, height: 600 },

  // ── LETTERHEAD & PROPOSAL HEADERS & A4 SHEETS ──
  { category: 'letterhead', template: 'letterhead-header-dark.html', output: 'letterhead-header-dark.png', width: 1600, height: 320 },
  { category: 'letterhead', template: 'letterhead-header-light.html', output: 'letterhead-header-light.png', width: 1600, height: 320 },
  { category: 'letterhead', template: 'letterhead-a4-dark.html', output: 'letterhead-a4-dark.png', width: 1240, height: 1754 },
  { category: 'letterhead', template: 'letterhead-a4-light.html', output: 'letterhead-a4-light.png', width: 1240, height: 1754 },

  // ── UNIVERSAL OPENGRAPH & SOCIAL SHARE CARDS ──
  { category: 'social-card', template: 'og-card-dark.html', output: 'og-card-dark.png', width: 1200, height: 630 },
  { category: 'social-card', template: 'og-card-light.html', output: 'og-card-light.png', width: 1200, height: 630 },

  // ── EMAIL SIGNATURES ──
  { category: 'email-signature', template: 'founder-signature.html', output: 'founder-signature.png', width: 700, height: 260 },
  { category: 'email-signature', template: 'studio-signature.html', output: 'studio-signature.png', width: 720, height: 260 },
  { category: 'email-signature', template: 'minimal-signature.html', output: 'minimal-signature.png', width: 600, height: 160 },

  // ── TWITTER / X SUITE ──
  { category: 'twitter', template: 'twitter-header-dark.html', output: 'twitter-header-dark.png', width: 1500, height: 500 },
  { category: 'twitter', template: 'twitter-header-light.html', output: 'twitter-header-light.png', width: 1500, height: 500 },
  { category: 'twitter', template: 'twitter-dp-dark.html', output: 'twitter-dp-dark.png', width: 400, height: 400 },
  { category: 'twitter', template: 'twitter-dp-light.html', output: 'twitter-dp-light.png', width: 400, height: 400 },

  // ── YOUTUBE CHANNEL SUITE ──
  { category: 'youtube', template: 'youtube-banner-dark.html', output: 'youtube-banner-dark.png', width: 2560, height: 1440 },
  { category: 'youtube', template: 'youtube-banner-light.html', output: 'youtube-banner-light.png', width: 2560, height: 1440 },
  { category: 'youtube', template: 'youtube-dp-dark.html', output: 'youtube-dp-dark.png', width: 800, height: 800 },
  { category: 'youtube', template: 'youtube-dp-light.html', output: 'youtube-dp-light.png', width: 800, height: 800 },

  // ── GITHUB ORG & OPEN SOURCE SUITE ──
  { category: 'github', template: 'github-avatar-dark.html', output: 'github-avatar-dark.png', width: 500, height: 500 },
  { category: 'github', template: 'github-avatar-light.html', output: 'github-avatar-light.png', width: 500, height: 500 },
  { category: 'github', template: 'github-social-card-dark.html', output: 'github-social-card-dark.png', width: 1280, height: 640 },
  { category: 'github', template: 'github-social-card-light.html', output: 'github-social-card-light.png', width: 1280, height: 640 },

  // ── GOOGLE MEET & ZOOM VIRTUAL BACKGROUNDS (1080P FULL HD) ──
  { category: 'virtual-background', template: 'virtual-background-dark.html', output: 'virtual-background-dark.png', width: 1920, height: 1080 },
  { category: 'virtual-background', template: 'virtual-background-light.html', output: 'virtual-background-light.png', width: 1920, height: 1080 },

  // ── 16:9 CLIENT PITCH DECK & PRESENTATION SLIDES ──
  { category: 'pitch-deck', template: 'slide-cover-dark.html', output: 'slide-cover-dark.png', width: 1920, height: 1080 },
  { category: 'pitch-deck', template: 'slide-cover-light.html', output: 'slide-cover-light.png', width: 1920, height: 1080 },
  { category: 'pitch-deck', template: 'slide-systems-dark.html', output: 'slide-systems-dark.png', width: 1920, height: 1080 },
  { category: 'pitch-deck', template: 'slide-systems-light.html', output: 'slide-systems-light.png', width: 1920, height: 1080 },
  { category: 'pitch-deck', template: 'slide-process-dark.html', output: 'slide-process-dark.png', width: 1920, height: 1080 },
  { category: 'pitch-deck', template: 'slide-process-light.html', output: 'slide-process-light.png', width: 1920, height: 1080 },
  { category: 'pitch-deck', template: 'slide-closing-dark.html', output: 'slide-closing-dark.png', width: 1920, height: 1080 },
  { category: 'pitch-deck', template: 'slide-closing-light.html', output: 'slide-closing-light.png', width: 1920, height: 1080 },

  // ── APP ICONS & PWA SUITE ──
  { category: 'app-icons', template: 'apple-touch-icon.html', output: 'apple-touch-icon.png', width: 180, height: 180 },
  { category: 'app-icons', template: 'android-chrome-192.html', output: 'android-chrome-192.png', width: 192, height: 192 },
  { category: 'app-icons', template: 'android-chrome-512.html', output: 'android-chrome-512.png', width: 512, height: 512 },
  { category: 'app-icons', template: 'favicon-32.html', output: 'favicon-32.png', width: 32, height: 32 }
];

console.log(`[export] Starting export of ${tasks.length} marketing assets with Light & Dark parity...`);

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
fs.mkdirSync(svgTargetDir, { recursive: true });
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
