#!/usr/bin/env node
/**
 * VOOO LABS — Campaign & WhatsApp Pro Template Generator
 * Builds all 35 HTML templates for:
 * 1. WhatsApp Business Pro (1 Cover + 4 Catalog Cards)
 * 2. 30-Day Social Campaign (Day 01 to Day 30 in 1080x1440 3:4 ratio)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wpDir = path.join(__dirname, 'whatsapp-pro');
const campDir = path.join(__dirname, 'campaign-30-days', 'templates');

fs.mkdirSync(wpDir, { recursive: true });
fs.mkdirSync(campDir, { recursive: true });

function getWordmark(color = '#FFFFFF', size = 32) {
  return `<span style="font-family: 'CrazyBlocks', sans-serif; font-size: ${size}px; letter-spacing: 1.5px; line-height: 1; display: inline-flex; align-items: baseline;">
    <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
    <span style="color: ${color}; margin-left: 6px;">LABS</span>
  </span>`;
}

function getIconMark(size = 32) {
  return `<span style="font-family: 'CrazyBlocks', sans-serif; font-size: ${size}px; letter-spacing: 1px; line-height: 1;">
    <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
  </span>`;
}

function wrapHtml({ title, width, height, bg, cssPath, content }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <link rel="stylesheet" href="${cssPath}">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: ${width}px;
      height: ${height}px;
      overflow: hidden;
      background: ${bg};
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, ${bg === '#0A0F1E' ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.035)'} 1px, transparent 1px),
        linear-gradient(to bottom, ${bg === '#0A0F1E' ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.035)'} 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div class="grid-bg"></div>
  ${content}
</body>
</html>`;
}

console.log('[build-campaign] Generating WhatsApp Pro assets...');

// ═══════════════════════════════════════════════════════════════════════
// 1. WHATSAPP BUSINESS PRO COVER (1920x1080)
// Bottom 35% center is reserved for overlapping circular avatar
// ═══════════════════════════════════════════════════════════════════════
const wpCoverContent = `
  <div style="position: relative; width: 100%; height: 100%; padding: 80px 100px; display: flex; flex-direction: column; justify-content: space-between; z-index: 10;">
    <!-- Top Row: Brand & Engineering Badge -->
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        ${getWordmark('#FFFFFF', 54)}
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 600; color: #94A3B8; letter-spacing: 2px; text-transform: uppercase; margin-top: 10px;">
          Digital Product Studio &bull; Precision Architecture
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); padding: 12px 24px; border-radius: 9999px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #10B981; box-shadow: 0 0 10px #10B981;"></span>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #FFFFFF; letter-spacing: 1.5px;">PROD // READY</span>
      </div>
    </div>

    <!-- Center/Upper Block: Headline & Tagline -->
    <div style="max-width: 1100px; margin-top: -60px;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 700; color: #4285F4; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;">
        CORE CAPABILITY &bull; SCALABLE ARCHITECTURE
      </div>
      <h1 style="font-size: 64px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1.8px;">
        Engineering digital systems <span style="background: linear-gradient(90deg, #4285F4, #7C3AED, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">built to scale.</span>
      </h1>
      <p style="font-size: 22px; color: #94A3B8; margin-top: 20px; line-height: 1.5; max-width: 860px;">
        High-performance websites, custom web applications, internal operational software, and precision search optimization.
      </p>
    </div>

    <!-- Bottom Row: Flanked side text, leaving center 40% empty for WhatsApp circular avatar -->
    <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08);">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #94A3B8;">
        <span style="color: #4285F4; font-weight: 700;">SYSTEMS:</span> Web &bull; Apps &bull; Software &bull; Search
      </div>
      
      <!-- Central Empty Safe Zone Marker (invisible layout space) -->
      <div style="width: 450px;"></div>

      <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #94A3B8; text-align: right;">
        <span style="color: #FFFFFF; font-weight: 700;">HUB:</span> Maharashtra, India &bull; <span style="color: #4285F4;">vooolabs.in</span>
      </div>
    </div>
  </div>
`;

fs.writeFileSync(
  path.join(wpDir, 'whatsapp-cover.html'),
  wrapHtml({ title: 'VOOO LABS — WhatsApp Cover', width: 1920, height: 1080, bg: '#0A0F1E', cssPath: '../shared/brand.css', content: wpCoverContent }),
  'utf8'
);

// ═══════════════════════════════════════════════════════════════════════
// 2. FOUR WHATSAPP CATALOG CARDS (1080x1080)
// ═══════════════════════════════════════════════════════════════════════

// 2.1 Catalog 01: Websites (Dark)
const cat01Content = `
  <div style="position: relative; width: 100%; height: 100%; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; z-index: 10;">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
        ${getWordmark('#FFFFFF', 36)}
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #4285F4; letter-spacing: 1.5px; padding: 6px 14px; border-radius: 9999px; background: rgba(66,133,244,0.12); border: 1px solid rgba(66,133,244,0.3);">
          SYSTEM 01 // WEBSITES
        </div>
      </div>
      <h2 style="font-size: 42px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1px;">
        Websites built for speed and authority.
      </h2>
      <p style="font-size: 16px; color: #94A3B8; margin-top: 12px; line-height: 1.5;">
        Sub-second load speeds, clean semantic DOM structure, and frictionless conversion architecture.
      </p>
    </div>

    <!-- Custom SVG Browser & Speed Visual -->
    <div style="background: #05070E; border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
      <!-- Browser Top bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display: flex; gap: 8px;">
          <div style="width: 10px; height: 10px; border-radius: 50%; background: #EF4444;"></div>
          <div style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B;"></div>
          <div style="width: 10px; height: 10px; border-radius: 50%; background: #10B981;"></div>
        </div>
        <div style="background: rgba(255,255,255,0.06); padding: 4px 16px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #CBD5E1;">
          https://vooolabs.in &bull; SSL Encrypted
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #10B981; background: rgba(16,185,129,0.12); padding: 3px 10px; border-radius: 4px;">
          100 / 100 PERFORMANCE
        </div>
      </div>

      <!-- Layout Wireframe Blocks -->
      <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; gap: 14px;">
          <div style="flex: 2; height: 100px; background: rgba(66,133,244,0.08); border: 1px solid rgba(66,133,244,0.25); border-radius: 10px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="width: 40%; height: 8px; background: #4285F4; border-radius: 4px;"></div>
            <div style="width: 80%; height: 6px; background: rgba(255,255,255,0.2); border-radius: 4px;"></div>
            <div style="width: 60%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 4px;"></div>
          </div>
          <div style="flex: 1; height: 100px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 800; color: #10B981;">0.4s</div>
            <div style="font-size: 10px; color: #94A3B8; text-transform: uppercase; margin-top: 4px;">TTFB Speed</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <div style="height: 60px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 10px;">
            <div style="width: 30%; height: 6px; background: #4285F4; border-radius: 3px;"></div>
            <div style="width: 70%; height: 4px; background: rgba(255,255,255,0.15); border-radius: 3px; margin-top: 10px;"></div>
          </div>
          <div style="height: 60px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 10px;">
            <div style="width: 30%; height: 6px; background: #7C3AED; border-radius: 3px;"></div>
            <div style="width: 70%; height: 4px; background: rgba(255,255,255,0.15); border-radius: 3px; margin-top: 10px;"></div>
          </div>
          <div style="height: 60px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 10px;">
            <div style="width: 30%; height: 6px; background: #F97316; border-radius: 3px;"></div>
            <div style="width: 70%; height: 4px; background: rgba(255,255,255,0.15); border-radius: 3px; margin-top: 10px;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.08); font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #94A3B8;">
      <span>Zero Plugin Bloat &bull; Custom Code</span>
      <span style="color: #FFFFFF; font-weight: 700;">vooolabs.in</span>
    </div>
  </div>
`;

fs.writeFileSync(
  path.join(wpDir, 'catalog-01-websites.html'),
  wrapHtml({ title: 'VOOO LABS — Websites Catalog', width: 1080, height: 1080, bg: '#0A0F1E', cssPath: '../shared/brand.css', content: cat01Content }),
  'utf8'
);

// 2.2 Catalog 02: Web Apps (Light)
const cat02Content = `
  <div style="position: relative; width: 100%; height: 100%; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; z-index: 10;">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
        ${getWordmark('#0F172A', 36)}
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #7C3AED; letter-spacing: 1.5px; padding: 6px 14px; border-radius: 9999px; background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.25);">
          SYSTEM 02 // WEB APPS
        </div>
      </div>
      <h2 style="font-size: 42px; font-weight: 800; color: #020617; line-height: 1.15; letter-spacing: -1px;">
        Custom web apps &amp; client portals.
      </h2>
      <p style="font-size: 16px; color: #475569; margin-top: 12px; line-height: 1.5;">
        Secure role-based dashboards, authenticated client portals, and real-time operational platforms.
      </p>
    </div>

    <!-- Custom SVG Dashboard Wireframe -->
    <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px solid #F1F5F9;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 28px; height: 28px; border-radius: 6px; background: rgba(124,58,237,0.1); display: flex; align-items: center; justify-content: center; color: #7C3AED; font-weight: 800; font-size: 13px;">P</div>
          <span style="font-weight: 700; font-size: 14px; color: #0F172A;">Client Portal Console</span>
        </div>
        <div style="display: flex; gap: 8px;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 3px 8px; border-radius: 4px; color: #475569;">ROLE: ADMIN</span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); padding: 3px 8px; border-radius: 4px; color: #059669;">SYNC: ACTIVE</span>
        </div>
      </div>

      <!-- Dashboard Cards -->
      <div style="margin-top: 18px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px;">
          <div style="font-size: 11px; color: #64748B;">Active Sessions</div>
          <div style="font-size: 22px; font-weight: 800; color: #0F172A; margin-top: 4px;">1,420</div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px;">
          <div style="font-size: 11px; color: #64748B;">API Latency</div>
          <div style="font-size: 22px; font-weight: 800; color: #7C3AED; margin-top: 4px;">42ms</div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px;">
          <div style="font-size: 11px; color: #64748B;">Uptime SLA</div>
          <div style="font-size: 22px; font-weight: 800; color: #10B981; margin-top: 4px;">99.98%</div>
        </div>
      </div>

      <!-- Table Wireframe Rows -->
      <div style="margin-top: 16px; border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden;">
        <div style="background: #F1F5F9; padding: 8px 14px; font-size: 11px; font-weight: 700; color: #475569; display: flex; justify-content: space-between;">
          <span>PROJECT / SERVICE</span>
          <span>STATUS</span>
        </div>
        <div style="padding: 10px 14px; border-bottom: 1px solid #F1F5F9; font-size: 12px; color: #1E293B; display: flex; justify-content: space-between; align-items: center;">
          <span>Enterprise Portal Migration</span>
          <span style="font-size: 10px; font-weight: 700; color: #059669; background: #ECFDF5; padding: 2px 8px; border-radius: 9999px;">DEPLOYED</span>
        </div>
        <div style="padding: 10px 14px; font-size: 12px; color: #1E293B; display: flex; justify-content: space-between; align-items: center;">
          <span>Automated Client Billing Node</span>
          <span style="font-size: 10px; font-weight: 700; color: #2563EB; background: #EFF6FF; padding: 2px 8px; border-radius: 9999px;">PROCESSING</span>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid #E2E8F0; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #64748B;">
      <span>Zero App Store Friction &bull; Instant Access</span>
      <span style="color: #0F172A; font-weight: 700;">vooolabs.in</span>
    </div>
  </div>
`;

fs.writeFileSync(
  path.join(wpDir, 'catalog-02-webapps.html'),
  wrapHtml({ title: 'VOOO LABS — Web Apps Catalog', width: 1080, height: 1080, bg: '#F8FAFC', cssPath: '../shared/brand.css', content: cat02Content }),
  'utf8'
);

// 2.3 Catalog 03: Software (Dark)
const cat03Content = `
  <div style="position: relative; width: 100%; height: 100%; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; z-index: 10;">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
        ${getWordmark('#FFFFFF', 36)}
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #F97316; letter-spacing: 1.5px; padding: 6px 14px; border-radius: 9999px; background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.3);">
          SYSTEM 03 // SOFTWARE
        </div>
      </div>
      <h2 style="font-size: 42px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -1px;">
        CRM, ERP &amp; internal business systems.
      </h2>
      <p style="font-size: 16px; color: #94A3B8; margin-top: 12px; line-height: 1.5;">
        Replace 14 fragile spreadsheets with a single connected system shaped around how your team works.
      </p>
    </div>

    <!-- Custom Connected Node Graph Visual -->
    <div style="background: #05070E; border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 32px 24px; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 2;">
        
        <!-- Node 1: Inflow -->
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; width: 160px; text-align: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(66,133,244,0.15); margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: #4285F4;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #FFFFFF;">Lead Inflow</div>
          <div style="font-size: 10px; color: #94A3B8; margin-top: 4px;">Direct Capture</div>
        </div>

        <!-- Arrow -->
        <div style="color: #F97316; font-size: 20px; font-weight: 800;">&rarr;</div>

        <!-- Node 2: Pipeline Core -->
        <div style="background: rgba(249,115,22,0.08); border: 1px solid rgba(249,115,22,0.3); border-radius: 12px; padding: 16px; width: 180px; text-align: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: #F97316; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: #FFFFFF;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #FFFFFF;">Automated Pipeline</div>
          <div style="font-size: 10px; color: #FDBA74; margin-top: 4px;">Zero Double-Entry</div>
        </div>

        <!-- Arrow -->
        <div style="color: #F97316; font-size: 20px; font-weight: 800;">&rarr;</div>

        <!-- Node 3: Billing & Dispatch -->
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; width: 160px; text-align: center;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(16,185,129,0.15); margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: #10B981;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          </div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #FFFFFF;">GST &amp; Dispatch</div>
          <div style="font-size: 10px; color: #94A3B8; margin-top: 4px;">Instant Settlement</div>
        </div>
      </div>

      <div style="margin-top: 24px; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 12px; color: #94A3B8;">Spreadsheets Replaced: <b>14 Active Files</b></span>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700;">100% RECONCILED</span>
      </div>
    </div>

    <!-- Bottom Row -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.08); font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #94A3B8;">
      <span>Full Code Ownership &bull; Zero Recurring SaaS Rent</span>
      <span style="color: #FFFFFF; font-weight: 700;">vooolabs.in</span>
    </div>
  </div>
`;

fs.writeFileSync(
  path.join(wpDir, 'catalog-03-software.html'),
  wrapHtml({ title: 'VOOO LABS — Software Catalog', width: 1080, height: 1080, bg: '#0A0F1E', cssPath: '../shared/brand.css', content: cat03Content }),
  'utf8'
);

// 2.4 Catalog 04: SEO & AI (Light)
const cat04Content = `
  <div style="position: relative; width: 100%; height: 100%; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; z-index: 10;">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
        ${getWordmark('#0F172A', 36)}
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #10B981; letter-spacing: 1.5px; padding: 6px 14px; border-radius: 9999px; background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.25);">
          SYSTEM 04 // DISCOVERY
        </div>
      </div>
      <h2 style="font-size: 42px; font-weight: 800; color: #020617; line-height: 1.15; letter-spacing: -1px;">
        Rank on Google. Get cited by AI Search.
      </h2>
      <p style="font-size: 16px; color: #475569; margin-top: 12px; line-height: 1.5;">
        Technical search architecture and structured schema that make your business machine-readable for ChatGPT, Perplexity &amp; Google.
      </p>
    </div>

    <!-- Custom Search & AI Signal Diagram -->
    <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
      <!-- Query Bar -->
      <div style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 10px; padding: 12px 18px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4285F4" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span style="font-family: 'Inter', sans-serif; font-size: 14px; color: #0F172A; font-weight: 600;">"top digital product studio in Maharashtra"</span>
        </div>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700;">#1 VERIFIED</span>
      </div>

      <div style="margin-top: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <!-- Google Card -->
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #4285F4; text-transform: uppercase;">
            GOOGLE MAPS &bull; 3-PACK
          </div>
          <div style="font-size: 14px; font-weight: 700; color: #0F172A; margin-top: 6px;">VOOO LABS</div>
          <div style="font-size: 11px; color: #64748B; margin-top: 4px;">5.0 &starf;&starf;&starf;&starf;&starf; &bull; Software &amp; Tech Studio</div>
          <div style="font-size: 10px; color: #059669; font-weight: 600; margin-top: 6px;">High Intent Calls &amp; Navigation</div>
        </div>

        <!-- AI Citation Card -->
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #10B981; text-transform: uppercase;">
            AI CITATION &bull; GEO READY
          </div>
          <div style="font-size: 14px; font-weight: 700; color: #0F172A; margin-top: 6px;">Source [1]: vooolabs.in</div>
          <div style="font-size: 11px; color: #64748B; margin-top: 4px;">JSON-LD Knowledge Graph Verified</div>
          <div style="font-size: 10px; color: #2563EB; font-weight: 600; margin-top: 6px;">Parsed by ChatGPT &amp; Perplexity</div>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid #E2E8F0; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #64748B;">
      <span>Structured Schema &bull; Zero Cloaking &bull; Lasting Authority</span>
      <span style="color: #0F172A; font-weight: 700;">vooolabs.in</span>
    </div>
  </div>
`;

fs.writeFileSync(
  path.join(wpDir, 'catalog-04-seo-ai.html'),
  wrapHtml({ title: 'VOOO LABS — Search & AI Catalog', width: 1080, height: 1080, bg: '#F8FAFC', cssPath: '../shared/brand.css', content: cat04Content }),
  'utf8'
);

console.log('[build-campaign] WhatsApp Pro templates generated.');

// ═══════════════════════════════════════════════════════════════════════
// 3. 30-DAY SOCIAL CAMPAIGN (1080x1440, 3:4 RATIO, 100px SAFE MARGINS)
// ═══════════════════════════════════════════════════════════════════════

console.log('[build-campaign] Generating 30-Day Campaign templates...');

const campaignDays = [
  {
    day: '01',
    theme: 'dark',
    archetype: 'Editorial Poster',
    eyebrow: 'DAY 01 // MANIFESTO',
    headline: "Software shouldn't slow your business down.",
    microcopy: "Every tool you use should accelerate decisions, eliminate friction, and compound your operational momentum.",
    accent: '#4285F4',
    visualType: 'quote-metric',
    metric: '< 100ms',
    metricLabel: 'Interaction Latency'
  },
  {
    day: '02',
    theme: 'light',
    archetype: 'Split Comparison',
    eyebrow: 'DAY 02 // ARCHITECTURE',
    headline: "Template Website vs. Engineered Platform",
    microcopy: "Off-the-shelf templates accumulate plugin bloat. Custom engineering delivers sub-second load times and exact workflows.",
    accent: '#7C3AED',
    visualType: 'split',
    leftTitle: 'Template Website',
    leftItems: ['48 third-party plugins', '3.8s mobile load time', 'Annual license lock-in'],
    rightTitle: 'Engineered Platform',
    rightItems: ['Zero unnecessary dependencies', '0.4s sub-second speed', '100% owned source code']
  },
  {
    day: '03',
    theme: 'dark',
    archetype: 'System Flowchart',
    eyebrow: 'DAY 03 // PERFORMANCE',
    headline: "How a 1-second load time actually gets built.",
    microcopy: "Sub-second speed isn't luck. It's static route pre-rendering, modern asset compression, and zero unnecessary scripts.",
    accent: '#10B981',
    visualType: 'flowchart',
    steps: ['Edge DNS (15ms)', 'Pre-rendered HTML (80ms)', 'Async Compression (120ms)', 'Interactive Paint (< 300ms)']
  },
  {
    day: '04',
    theme: 'light',
    archetype: 'Editorial Poster',
    eyebrow: 'DAY 04 // PERSPECTIVE',
    headline: "Your website is your hardest-working salesperson. Stop paying it in templates.",
    microcopy: "When your primary storefront runs 24/7, precision architecture communicates competence before you ever speak.",
    accent: '#F97316',
    visualType: 'statement',
    highlight: '24/7 Digital Representation'
  },
  {
    day: '05',
    theme: 'dark',
    archetype: 'UI Wireframe',
    eyebrow: 'DAY 05 // OPERATIONS',
    headline: "Still running a growing business on 14 spreadsheets?",
    microcopy: "Version conflicts, broken formulas, and manual copy-pasting stop here. Replace file chaos with a unified internal dashboard.",
    accent: '#F97316',
    visualType: 'sheet-vs-db',
    sheetsCount: '14 Sheets',
    unifiedView: 'One Operational Hub'
  },
  {
    day: '06',
    theme: 'light',
    archetype: 'Structured Checklist',
    eyebrow: 'DAY 06 // DIAGNOSTIC',
    headline: "4 signs your current website is quietly losing leads.",
    microcopy: "Fix the silent bottlenecks before investing more in traffic and paid advertising.",
    accent: '#EF4444',
    visualType: 'checklist',
    items: [
      'Mobile load time exceeds 3 seconds',
      'Generic contact forms without instant notifications',
      'No structured schema markup for search engines',
      'Cluttered navigation burying primary services'
    ]
  },
  {
    day: '07',
    theme: 'dark',
    archetype: 'Quiet Conversion',
    eyebrow: 'DAY 07 // STUDIO BRIEF',
    headline: "Planning a digital upgrade this quarter?",
    microcopy: "Tell us what your business needs. We design the architecture, engineer the code, and launch without drama.",
    accent: '#4285F4',
    visualType: 'cta',
    ctaText: 'Fixed Milestones &bull; Direct Technical Lead &bull; Zero Fluff'
  },
  {
    day: '08',
    theme: 'light',
    archetype: 'System Flowchart',
    eyebrow: 'DAY 08 // AI SEARCH & DISCOVERY',
    headline: "Customers don't just Google you anymore. They ask AI.",
    microcopy: "Generative search models cite clean, machine-readable JSON-LD schemas. If AI engines can't parse your data, you don't exist.",
    accent: '#10B981',
    visualType: 'ai-search-diagram'
  },
  {
    day: '09',
    theme: 'dark',
    archetype: 'UI Wireframe',
    eyebrow: 'DAY 09 // SPEED BENCHMARK',
    headline: "Pretty design means nothing if mobile takes 6 seconds to load.",
    microcopy: "Over 70% of high-intent buyers leave slow websites within 3 seconds. Real engineering prioritizes performance first.",
    accent: '#4285F4',
    visualType: 'speed-comparison'
  },
  {
    day: '10',
    theme: 'light',
    archetype: 'Split Comparison',
    eyebrow: 'DAY 10 // ASSET VALUE',
    headline: "Renting Software Forever vs. Owning Your System",
    microcopy: "Per-seat SaaS subscriptions increase every year. A custom-built tool belongs to your company forever with zero recurring lock-in.",
    accent: '#7C3AED',
    visualType: 'split',
    leftTitle: 'SaaS Rental Model',
    leftItems: ['Per-user monthly fee increases', 'Features change without notice', 'You never own the software'],
    rightTitle: 'Custom Owned System',
    rightItems: ['One-time engineering investment', 'Built strictly around your workflow', 'Deploy to your own cloud']
  },
  {
    day: '11',
    theme: 'dark',
    archetype: 'System Flowchart',
    eyebrow: 'DAY 11 // AUTOMATION',
    headline: "One inquiry. Zero manual follow-up chaos.",
    microcopy: "Every form submission instantly updates your CRM, notifies your sales lead on WhatsApp, and sends a branded receipt.",
    accent: '#10B981',
    visualType: 'flowchart',
    steps: ['Inquiry Received', 'Webhook Routing', 'Instant WhatsApp Alert', 'Automated PDF Receipt']
  },
  {
    day: '12',
    theme: 'light',
    archetype: 'Editorial Poster',
    eyebrow: 'DAY 12 // MYTH BUSTER',
    headline: "Myth: We'll fix SEO after the website launches.",
    microcopy: "Search visibility is determined by semantic DOM tree structure, URL architecture, and server response headers—not added later with plugins.",
    accent: '#4285F4',
    visualType: 'myth'
  },
  {
    day: '13',
    theme: 'dark',
    archetype: 'UI Wireframe',
    eyebrow: 'DAY 13 // INTERFACE DESIGN',
    headline: "Good software needs zero training manual.",
    microcopy: "If your staff needs a 40-page PDF to create an invoice or update inventory, the software was poorly designed.",
    accent: '#7C3AED',
    visualType: 'ui-clean'
  },
  {
    day: '14',
    theme: 'light',
    archetype: 'Quiet Conversion',
    eyebrow: 'DAY 14 // STUDIO ETHOS',
    headline: "Zero bloat. Zero fake promises. Full code ownership.",
    microcopy: "We don't sell generic templates or lock your business into proprietary agency traps. You own every line of code we ship.",
    accent: '#0F172A',
    visualType: 'pillars',
    pillars: ['Engineered Performance', 'Measurable Architecture', 'Full IP Ownership']
  },
  {
    day: '15',
    theme: 'dark',
    archetype: 'UI Wireframe',
    eyebrow: 'DAY 15 // VERTICAL FOCUS: EDTECH',
    headline: "Built for Institutes & EdTech: Turn inquiries into enrollments.",
    microcopy: "Custom portals for admissions, course schedules, fee receipts, and student communication without app store hurdles.",
    accent: '#4285F4',
    visualType: 'edtech-ui'
  },
  {
    day: '16',
    theme: 'light',
    archetype: 'System Flowchart',
    eyebrow: 'DAY 16 // LOCAL AUTHORITY',
    headline: "Built for Local Brands: Dominate Google Maps & Search.",
    microcopy: "Connect local schema, verified geo-coordinates, and high-speed service landing pages to capture nearby high-intent buyers.",
    accent: '#10B981',
    visualType: 'maps-funnel'
  },
  {
    day: '17',
    theme: 'dark',
    archetype: 'UI Wireframe',
    eyebrow: 'DAY 17 // VERTICAL FOCUS: OPERATIONS',
    headline: "Built for Operations: Billing, inventory, and roles in one place.",
    microcopy: "Tailored to how your team actually works. Real-time stock status, GST invoice generation, and role-based permissions.",
    accent: '#F97316',
    visualType: 'erp-ui'
  },
  {
    day: '18',
    theme: 'light',
    archetype: 'Structured Checklist',
    eyebrow: 'DAY 18 // CONVERSION ANATOMY',
    headline: "Anatomy of a high-converting homepage.",
    microcopy: "Clear value proposition within 3 seconds, instant social proof, frictionless inquiry trigger, and sub-second rendering.",
    accent: '#4285F4',
    visualType: 'checklist',
    items: [
      'Above-the-fold value proposition without generic jargon',
      'Sub-second First Contentful Paint (< 0.8s)',
      'Clear, single-action primary call-to-action',
      'Structured technical proof & verifiable credentials'
    ]
  },
  {
    day: '19',
    theme: 'dark',
    archetype: 'Editorial Poster',
    eyebrow: 'DAY 19 // CORE PRINCIPLE',
    headline: "Cheap software is the most expensive mistake a business makes twice.",
    microcopy: "Rebuilding a broken system after a year costs three times more than engineering it properly the first time.",
    accent: '#EF4444',
    visualType: 'statement',
    highlight: 'Build Once. Build Properly.'
  },
  {
    day: '20',
    theme: 'light',
    archetype: 'System Flowchart',
    eyebrow: 'DAY 20 // SECURITY ARCHITECTURE',
    headline: "Speed gets attention. Security earns trust.",
    microcopy: "Role-based access control, encrypted database sessions, automated backups, and zero third-party tracking scripts.",
    accent: '#059669',
    visualType: 'flowchart',
    steps: ['HTTPS / HSTS (TLS 1.3)', 'Strict Role Permissions', 'Encrypted Database Sessions', 'Automated Daily Snapshots']
  },
  {
    day: '21',
    theme: 'dark',
    archetype: 'Quiet Conversion',
    eyebrow: 'DAY 21 // SYSTEM AUDIT',
    headline: "Not sure why your website isn't bringing inquiries?",
    microcopy: "Send us your domain. We'll run a full Core Web Vitals audit and check your schema markup—no sales calls, just actionable data.",
    accent: '#4285F4',
    visualType: 'audit-cta'
  },
  {
    day: '22',
    theme: 'light',
    archetype: 'System Flowchart',
    eyebrow: 'DAY 22 // DELIVERY METHODOLOGY',
    headline: "How we go from idea to live system—without surprises.",
    microcopy: "Clear milestones, daily progress visibility, and fixed project scope. No endless delays, no mystery invoices.",
    accent: '#7C3AED',
    visualType: 'flowchart',
    steps: ['01 / Architecture Blueprint', '02 / Core Engineering', '03 / Speed & Security Audit', '04 / Production Launch']
  },
  {
    day: '23',
    theme: 'dark',
    archetype: 'Split Comparison',
    eyebrow: 'DAY 23 // CLARITY OF FOCUS',
    headline: "Cluttered Agency Sites vs. Focused Digital Products",
    microcopy: "Marketing fluff and flashy animations distract visitors. Fast, clear, functional interfaces turn visitors into buyers.",
    accent: '#F97316',
    visualType: 'split',
    leftTitle: 'Cluttered Agency Sites',
    leftItems: ['Autoplay videos & popups', 'Confusing corporate buzzwords', 'Slow mobile rendering'],
    rightTitle: 'Focused Digital Products',
    rightItems: ['Immediate value proposition', 'Sub-second page transitions', 'Direct WhatsApp / call trigger']
  },
  {
    day: '24',
    theme: 'light',
    archetype: 'Quiet Conversion',
    eyebrow: 'DAY 24 // ASSET INTEGRITY',
    headline: "Why your domain, code, and database should always be in your name.",
    microcopy: "Never let an agency hold your digital assets hostage. We build directly in your accounts so you retain total control.",
    accent: '#0F172A',
    visualType: 'ownership-badges'
  },
  {
    day: '25',
    theme: 'dark',
    archetype: 'UI Wireframe',
    eyebrow: 'DAY 25 // MOBILE REALITY',
    headline: "Desktop-first design is dead. Most first impressions happen on mobile.",
    microcopy: "If your mobile navigation is clunky or buttons are hard to tap, you've already lost the prospect before they read a word.",
    accent: '#4285F4',
    visualType: 'mobile-frame'
  },
  {
    day: '26',
    theme: 'light',
    archetype: 'Editorial Poster',
    eyebrow: 'DAY 26 // AUTOMATED SCALE',
    headline: "Don't build a website to just have one. Build a system that works while you sleep.",
    microcopy: "A true digital product captures leads, answers questions, qualifies prospects, and runs workflows without your intervention.",
    accent: '#10B981',
    visualType: 'statement',
    highlight: 'Always-On Operations'
  },
  {
    day: '27',
    theme: 'dark',
    archetype: 'System Flowchart',
    eyebrow: 'DAY 27 // CONNECTED ECOSYSTEM',
    headline: "Website + CRM + SEO: When all three talk to each other.",
    microcopy: "Isolated tools cause data silos. Connected systems automatically sync inquiries, track conversion sources, and update records.",
    accent: '#7C3AED',
    visualType: 'ecosystem'
  },
  {
    day: '28',
    theme: 'light',
    archetype: 'Quiet Conversion',
    eyebrow: 'DAY 28 // CORPORATE TRUST',
    headline: "Registered, structured, and built for long-term partnerships.",
    microcopy: "Official Udyam-registered enterprise, GST compliant, legal NDAs, and dedicated post-launch support agreements.",
    accent: '#059669',
    visualType: 'trust-grid'
  },
  {
    day: '29',
    theme: 'dark',
    archetype: 'Structured Checklist',
    eyebrow: 'DAY 29 // CLIENT CLARITY',
    headline: "3 questions every business asks before hiring a tech studio.",
    microcopy: "Clarity upfront prevents frustration later.",
    accent: '#4285F4',
    visualType: 'checklist-qa',
    qas: [
      { q: 'Who owns the final code?', a: '100% in your company name. Zero lock-in.' },
      { q: 'What is the delivery timeline?', a: 'Fixed milestones with delivery in 2–4 weeks.' },
      { q: 'How is support handled?', a: 'Direct WhatsApp & helpdesk SLA agreements.' }
    ]
  },
  {
    day: '30',
    theme: 'light',
    archetype: 'Quiet Conversion',
    eyebrow: 'DAY 30 // INITIATE',
    headline: "Ready to engineer what's next for your business?",
    microcopy: "Whether you need a high-performance website, custom client portal, or internal ERP, let's discuss your system architecture.",
    accent: '#4285F4',
    visualType: 'closing-kickoff'
  }
];

function generateCampaignVisual(item) {
  const isDark = item.theme === 'dark';
  const cardBg = isDark ? '#05070E' : '#FFFFFF';
  const borderCol = isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0';
  const textMuted = isDark ? '#94A3B8' : '#64748B';
  const textMain = isDark ? '#FFFFFF' : '#0F172A';

  switch (item.visualType) {
    case 'split':
      return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%;">
          <div style="background: ${isDark ? 'rgba(255,255,255,0.03)' : '#F8FAFC'}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 32px 28px;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #94A3B8; text-transform: uppercase; margin-bottom: 20px;">
              ${item.leftTitle}
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${item.leftItems.map(it => `
                <div style="display: flex; align-items: flex-start; gap: 12px; font-size: 16px; color: ${textMuted}; line-height: 1.4;">
                  <span style="color: #EF4444; font-weight: 800; font-size: 18px; line-height: 1;">&times;</span>
                  <span>${it}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div style="background: ${isDark ? 'rgba(66,133,244,0.06)' : '#FFFFFF'}; border: 2px solid ${item.accent}; border-radius: 16px; padding: 32px 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: ${item.accent}; text-transform: uppercase; margin-bottom: 20px;">
              ${item.rightTitle}
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${item.rightItems.map(it => `
                <div style="display: flex; align-items: flex-start; gap: 12px; font-size: 16px; color: ${textMain}; font-weight: 600; line-height: 1.4;">
                  <span style="color: #10B981; font-weight: 800; font-size: 18px; line-height: 1;">&check;</span>
                  <span>${it}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

    case 'flowchart':
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 36px 32px; width: 100%;">
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${item.steps.map((step, idx) => `
              <div style="display: flex; align-items: center; justify-content: space-between; background: ${isDark ? 'rgba(255,255,255,0.03)' : '#F8FAFC'}; border: 1px solid ${borderCol}; border-radius: 12px; padding: 20px 24px;">
                <div style="display: flex; align-items: center; gap: 18px;">
                  <span style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 800; color: ${item.accent};">0${idx + 1}</span>
                  <span style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: ${textMain};">${step}</span>
                </div>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: #10B981; background: rgba(16,185,129,0.12); padding: 4px 10px; border-radius: 9999px;">OPTIMIZED</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'checklist':
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 36px 32px; width: 100%;">
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${item.items.map((it, idx) => `
              <div style="display: flex; align-items: center; gap: 18px; padding: 18px 22px; background: ${isDark ? 'rgba(255,255,255,0.03)' : '#F8FAFC'}; border: 1px solid ${borderCol}; border-radius: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: ${item.accent}20; color: ${item.accent}; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  0${idx + 1}
                </div>
                <div style="font-size: 17px; font-weight: 600; color: ${textMain}; line-height: 1.4;">
                  ${it}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'checklist-qa':
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 32px; width: 100%;">
          <div style="display: flex; flex-direction: column; gap: 18px;">
            ${item.qas.map(qa => `
              <div style="background: ${isDark ? 'rgba(255,255,255,0.03)' : '#F8FAFC'}; border: 1px solid ${borderCol}; border-radius: 12px; padding: 20px 24px;">
                <div style="font-size: 17px; font-weight: 700; color: ${textMain}; margin-bottom: 6px;">${qa.q}</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 600; color: ${item.accent};">&rarr; ${qa.a}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'quote-metric':
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 48px; width: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: ${item.accent}; font-weight: 700; text-transform: uppercase;">Engineered Standard</div>
            <div style="font-size: 26px; font-weight: 800; color: ${textMain}; margin-top: 8px;">Sub-Second Responsiveness</div>
            <div style="font-size: 15px; color: ${textMuted}; margin-top: 6px;">Zero unnecessary script execution or blocking renders</div>
          </div>
          <div style="text-align: right; background: rgba(66,133,244,0.08); border: 1px solid rgba(66,133,244,0.25); border-radius: 14px; padding: 24px 32px;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 44px; font-weight: 900; color: #4285F4; line-height: 1;">${item.metric}</div>
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #94A3B8; text-transform: uppercase; margin-top: 8px;">${item.metricLabel}</div>
          </div>
        </div>
      `;

    case 'sheet-vs-db':
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 36px 32px; width: 100%;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2); border-radius: 12px; padding: 24px;">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #EF4444; text-transform: uppercase;">The Spreadsheet Trap</div>
              <div style="font-size: 20px; font-weight: 800; color: ${textMain}; margin-top: 8px;">14 Disconnected Files</div>
              <div style="font-size: 14px; color: ${textMuted}; margin-top: 10px; line-height: 1.4;">Formula errors &bull; Broken sync &bull; Manual copy-paste</div>
            </div>
            <div style="background: rgba(249,115,22,0.08); border: 2px solid #F97316; border-radius: 12px; padding: 24px;">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #F97316; text-transform: uppercase;">Unified Database</div>
              <div style="font-size: 20px; font-weight: 800; color: ${textMain}; margin-top: 8px;">Single Source of Truth</div>
              <div style="font-size: 14px; color: ${textMain}; font-weight: 600; margin-top: 10px; line-height: 1.4;">Real-time sync &bull; Role permissions &bull; Zero errors</div>
            </div>
          </div>
        </div>
      `;

    case 'speed-comparison':
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 36px 32px; width: 100%;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); border-radius: 12px; padding: 24px; text-align: center;">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 42px; font-weight: 800; color: #EF4444;">6.2s</div>
              <div style="font-size: 14px; font-weight: 700; color: ${textMain}; margin-top: 4px;">Standard Heavy Site</div>
              <div style="font-size: 12px; color: #EF4444; font-weight: 600; margin-top: 8px;">74% Bounce Rate</div>
            </div>
            <div style="background: rgba(16,185,129,0.08); border: 2px solid #10B981; border-radius: 12px; padding: 24px; text-align: center;">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 42px; font-weight: 800; color: #10B981;">0.8s</div>
              <div style="font-size: 14px; font-weight: 700; color: ${textMain}; margin-top: 4px;">Vooo Labs Engineered</div>
              <div style="font-size: 12px; color: #10B981; font-weight: 700; margin-top: 8px;">Instant First Impression</div>
            </div>
          </div>
        </div>
      `;

    case 'ai-search-diagram':
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 36px 32px; width: 100%;">
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div style="background: ${isDark ? 'rgba(255,255,255,0.04)' : '#F8FAFC'}; border: 1px solid ${borderCol}; border-radius: 10px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 15px; color: ${textMain}; font-weight: 600;">Traditional SEO: Keyword Stuffing</span>
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #EF4444; font-weight: 700;">OUTDATED</span>
            </div>
            <div style="background: rgba(16,185,129,0.08); border: 2px solid #10B981; border-radius: 10px; padding: 18px 20px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 16px; color: ${textMain}; font-weight: 700;">AI Engine Citation: Structured JSON-LD</div>
                <div style="font-size: 12px; color: ${textMuted}; margin-top: 4px;">Machine-readable knowledge graph for ChatGPT &amp; Perplexity</div>
              </div>
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 800;">CURRENT STANDARD</span>
            </div>
          </div>
        </div>
      `;

    default:
      return `
        <div style="background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 16px; padding: 36px 32px; width: 100%;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: ${textMain};">
              Precision Engineering Studio
            </div>
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: ${item.accent};">
              vooolabs.in &bull; Maharashtra, India
            </div>
          </div>
        </div>
      `;
  }
}

// Generate the 30 HTML files
for (const dayItem of campaignDays) {
  const isDark = dayItem.theme === 'dark';
  const bg = isDark ? '#0A0F1E' : '#FFFFFF';
  const textMain = isDark ? '#FFFFFF' : '#0F172A';
  const textMuted = isDark ? '#94A3B8' : '#64748B';
  const borderCol = isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0';

  const dayHtml = `
    <!-- Top & Bottom 100px Safe Zones enforced via padding -->
    <div style="position: relative; width: 100%; height: 100%; padding: 100px 84px; display: flex; flex-direction: column; justify-content: space-between; z-index: 10;">
      
      <!-- Header: Eyebrow + Brand -->
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${dayItem.accent};"></span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: ${dayItem.accent}; letter-spacing: 2px;">
            ${dayItem.eyebrow}
          </span>
        </div>
        ${getWordmark(textMain, 26)}
      </div>

      <!-- Core Content: Headline + Visual + Microcopy -->
      <div style="display: flex; flex-direction: column; gap: 32px; margin-top: -30px;">
        <div>
          <h1 style="font-size: 50px; font-weight: 800; color: ${textMain}; line-height: 1.16; letter-spacing: -1.5px; max-width: 900px;">
            ${dayItem.headline}
          </h1>
          <p style="font-size: 18px; color: ${textMuted}; margin-top: 18px; line-height: 1.55; max-width: 820px;">
            ${dayItem.microcopy}
          </p>
        </div>

        <!-- Visual Block -->
        <div>
          ${generateCampaignVisual(dayItem)}
        </div>
      </div>

      <!-- Footer Row: Subtext & Domain -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid ${borderCol};">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: ${textMuted};">
          ${dayItem.archetype} &bull; Maharashtra, India
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: #4285F4;">
          vooolabs.in
        </div>
      </div>

    </div>
  `;

  fs.writeFileSync(
    path.join(campDir, `day-${dayItem.day}.html`),
    wrapHtml({
      title: `VOOO LABS — Day ${dayItem.day}`,
      width: 1080,
      height: 1440,
      bg: bg,
      cssPath: '../../shared/brand.css',
      content: dayHtml
    }),
    'utf8'
  );
}

console.log('[build-campaign] All 30 campaign day templates generated successfully.');
