import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

const fontPath = path.join(projectRoot, 'public', 'fonts', 'crazy-blocks', 'crazyblocks.otf');
const fontB64 = fs.readFileSync(fontPath).toString('base64');

// 1. Write shared font data
const fontJs = `// VOOO LABS Embedded CrazyBlocks Font Data URI
export const CRAZYBLOCKS_FONT_B64 = "${fontB64}";
export const CRAZYBLOCKS_FONT_DATA_URI = "data:font/otf;base64,${fontB64}";
`;
fs.writeFileSync(path.join(__dirname, 'brand-font.js'), fontJs, 'utf8');

// 2. Write brand.css
const brandCss = `/* VOOO LABS Official Shared Brand CSS for Marketing Kit */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap');

@font-face {
  font-family: 'CrazyBlocks';
  src: url('data:font/otf;base64,${fontB64}') format('opentype');
  font-weight: 100 900;
  font-style: normal;
  font-display: block;
}

:root {
  --c-blue: #4285F4;
  --c-indigo: #5B5BD6;
  --c-purple: #7C3AED;
  --c-orange: #F97316;
  --c-emerald: #10B981;
  --c-dark: #0A0F1E;
  --c-floor: #05070E;
  --c-white: #FFFFFF;
  --c-subtle: #F8F9FC;
  --c-slate-text: #0F172A;
  --c-slate-body: #475569;
  --c-slate-muted: #94A3B8;
  --font-logo: 'CrazyBlocks', sans-serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

.font-crazyblocks {
  font-family: var(--font-logo) !important;
}

.font-mono {
  font-family: var(--font-mono) !important;
}

/* Brand Letter Colors */
.c-v { color: var(--c-blue); }
.c-o1 { color: var(--c-indigo); }
.c-o2 { color: var(--c-purple); }
.c-o3 { color: var(--c-orange); }
.c-labs-light { color: var(--c-dark); }
.c-labs-dark { color: var(--c-white); }

/* Shimmer Text */
.shimmer-text {
  background: linear-gradient(90deg, #4285F4 0%, #7C3AED 25%, #F97316 50%, #7C3AED 75%, #4285F4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

fs.writeFileSync(path.join(__dirname, 'brand.css'), brandCss, 'utf8');
console.log('[marketing-kit/shared] Successfully generated brand-font.js and brand.css');
