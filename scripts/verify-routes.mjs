import fs from 'node:fs';
import path from 'node:path';

const routes = JSON.parse(fs.readFileSync('src/content/routesMetadata.json', 'utf8'));
const distDir = 'dist';

function unescapeHtml(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

let allPassed = true;
const results = [];

for (const r of routes) {
  const filePath = r.path === '/' 
    ? path.join(distDir, 'index.html') 
    : path.join(distDir, r.path.slice(1), 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error('Missing file:', filePath);
    allPassed = false;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Title match
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const rawTitle = titleMatch ? titleMatch[1] : '';
  const decodedTitle = unescapeHtml(rawTitle);
  const titleLen = decodedTitle.length;

  // 2. Canonical match
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : '';

  // 3. h1 match inside #root
  const rootMatch = content.match(/<div id="root">([\s\S]*?)<\/div>/);
  const h1Match = rootMatch ? rootMatch[1].match(/<h1[^>]*>([\s\S]*?)<\/h1>/) : null;
  const rawH1 = h1Match ? h1Match[1].trim() : '';
  const decodedH1 = unescapeHtml(rawH1);

  const isTitleOk = titleLen >= 45 && titleLen <= 60 && rawTitle.length <= 65;
  const expectedCanonical = 'https://vooolabs.in' + (r.path === '/' ? '/' : r.path);
  const isCanonicalOk = canonical === expectedCanonical;
  const isH1Ok = decodedH1 === r.h1;

  if (!isTitleOk || !isCanonicalOk || !isH1Ok) {
    allPassed = false;
  }

  results.push({
    path: r.path,
    titleLen,
    isTitleOk,
    isCanonicalOk,
    isH1Ok,
    h1: decodedH1
  });
}

console.table(results);
console.log('All files verified and valid:', allPassed);
if (!allPassed) {
  process.exit(1);
}
