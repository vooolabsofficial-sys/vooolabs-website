#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');
const metadataPath = path.join(projectRoot, 'src', 'content', 'routesMetadata.json');

if (!fs.existsSync(templatePath)) {
  console.error(`[static-routes] Error: ${templatePath} not found. Run 'vite build' first.`);
  process.exit(1);
}

if (!fs.existsSync(metadataPath)) {
  console.error(`[static-routes] Error: ${metadataPath} not found.`);
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf8');
const routes = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

const SITE_URL = 'https://vooolabs.in';

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

console.log(`[static-routes] Generating pre-rendered HTML shells for ${routes.length} public routes...`);

let generatedCount = 0;

for (const route of routes) {
  const { path: routePath, title, description, h1, summary } = route;
  const canonicalUrl = `${SITE_URL}${routePath === '/' ? '/' : routePath}`;

  // 1. Validate length
  if (title.length > 65) {
    console.warn(`[static-routes] Warning: Title for '${routePath}' exceeds 65 chars (${title.length}): "${title}"`);
  }

  // 2. Perform metadata replacements
  let html = templateHtml;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // Meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${escapeAttr(description)}" />`
  );

  // Canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // OpenGraph URL
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // OpenGraph Title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${escapeAttr(title)}" />`
  );

  // OpenGraph Description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${escapeAttr(description)}" />`
  );

  // Twitter Title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`
  );

  // Twitter Description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`
  );

  // 3. Inject minimal semantic HTML shell inside <div id="root">
  const semanticShell = `
    <main class="min-h-screen bg-white text-slate-900 px-6 py-24 max-w-4xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">${escapeHtml(h1)}</h1>
      <p class="mt-4 text-slate-600 text-lg leading-relaxed">${escapeHtml(summary)}</p>
      <nav aria-label="Primary links" class="mt-8 flex flex-wrap gap-4 text-sm font-medium text-blue-600">
        <a href="/" class="hover:underline">Home</a>
        <a href="/services" class="hover:underline">Services</a>
        <a href="/services/websites" class="hover:underline">Websites</a>
        <a href="/services/web-apps" class="hover:underline">Web Apps</a>
        <a href="/services/business-software" class="hover:underline">Software</a>
        <a href="/seo-ai" class="hover:underline">SEO &amp; AI</a>
        <a href="/about" class="hover:underline">About</a>
        <a href="/contact" class="hover:underline">Contact</a>
      </nav>
    </main>`;

  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${semanticShell}</div>`
  );

  // 4. Output target paths
  if (routePath === '/') {
    fs.writeFileSync(templatePath, html, 'utf8');
  } else {
    // Generate dist/<route>/index.html
    const targetDir = path.join(distDir, routePath.replace(/^\//, ''));
    fs.mkdirSync(targetDir, { recursive: true });
    const targetIndex = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetIndex, html, 'utf8');

    // Also generate dist/<route>.html for cleanUrls fallback compatibility
    const targetFile = path.join(distDir, `${routePath.replace(/^\//, '')}.html`);
    const targetFileDir = path.dirname(targetFile);
    fs.mkdirSync(targetFileDir, { recursive: true });
    fs.writeFileSync(targetFile, html, 'utf8');
  }

  generatedCount++;
  console.log(`  ✓ [${String(title.length).padStart(2)} chars] ${routePath.padEnd(28)} -> <h1>: "${h1}"`);
}

console.log(`[static-routes] Successfully generated ${generatedCount} static route HTML files with semantic <h1> shells.`);
