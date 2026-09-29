import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES_SEO } from '../src/components/SEO/seoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const distDir = resolve(rootDir, 'dist');
const indexHtmlPath = resolve(distDir, 'index.html');

const startTime = performance.now();

if (!existsSync(indexHtmlPath)) {
  console.error('[SEO Prerender] Error: dist/index.html does not exist. Run "vite build" first.');
  process.exit(1);
}

const templateHtml = readFileSync(indexHtmlPath, 'utf8');

const seoMarkerRegex = /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/;
if (!seoMarkerRegex.test(templateHtml)) {
  console.error('[SEO Prerender] Error: <!-- SEO:START --> and <!-- SEO:END --> markers not found in dist/index.html.');
  process.exit(1);
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateSeoTags(data) {
  const lines = [
    `    <!-- SEO:START -->`,
    `    <title>${escapeHtml(data.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(data.description)}" />`,
    `    <meta name="robots" content="${escapeHtml(data.robots || 'index, follow')}" />`,
    `    <link rel="canonical" href="${escapeHtml(data.canonical)}" />`,
    `\n    <!-- Open Graph Metadata -->`,
    `    <meta property="og:type" content="${escapeHtml(data.ogType || 'website')}" />`,
    `    <meta property="og:site_name" content="${escapeHtml(data.ogSiteName || 'Arjun Dabhi Portfolio')}" />`,
    `    <meta property="og:title" content="${escapeHtml(data.ogTitle || data.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(data.ogDescription || data.description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(data.ogUrl || data.canonical)}" />`,
    `    <meta property="og:image" content="${escapeHtml(data.ogImage)}" />`,
  ];

  if (data.ogImageWidth || data.canonical) {
    lines.push(`    <meta property="og:image:width" content="${escapeHtml(data.ogImageWidth || '1200')}" />`);
    lines.push(`    <meta property="og:image:height" content="${escapeHtml(data.ogImageHeight || '630')}" />`);
  }

  if (data.ogImageType) {
    lines.push(`    <meta property="og:image:type" content="${escapeHtml(data.ogImageType)}" />`);
  }

  if (data.ogImageAlt) {
    lines.push(`    <meta property="og:image:alt" content="${escapeHtml(data.ogImageAlt)}" />`);
  }

  lines.push(`\n    <!-- Twitter Card Metadata -->`);
  lines.push(`    <meta name="twitter:card" content="${escapeHtml(data.twitterCard || 'summary_large_image')}" />`);
  lines.push(`    <meta name="twitter:title" content="${escapeHtml(data.twitterTitle || data.title)}" />`);
  lines.push(`    <meta name="twitter:description" content="${escapeHtml(data.twitterDescription || data.description)}" />`);
  lines.push(`    <meta name="twitter:image" content="${escapeHtml(data.twitterImage || data.ogImage)}" />`);

  if (data.jsonLd) {
    lines.push(`\n    <!-- Structured Data (JSON-LD) -->`);
    lines.push(`    <script type="application/ld+json" id="person-schema">`);
    lines.push(`      ${JSON.stringify(data.jsonLd, null, 2).replace(/\n/g, '\n      ')}`);
    lines.push(`    </script>`);
  }

  lines.push(`    <!-- SEO:END -->`);
  return lines.join('\n');
}

console.log('[SEO Prerender] Generating static HTML shells with route metadata...');

let generatedCount = 0;

for (const [routePath, routeData] of Object.entries(ROUTES_SEO)) {
  const seoTags = generateSeoTags(routeData);
  const routeHtml = templateHtml.replace(seoMarkerRegex, seoTags);

  let targetPath;
  if (routePath === '/') {
    targetPath = indexHtmlPath;
  } else {
    const relativeSubdir = routePath.startsWith('/') ? routePath.slice(1) : routePath;
    const targetDir = resolve(distDir, relativeSubdir);
    mkdirSync(targetDir, { recursive: true });
    targetPath = resolve(targetDir, 'index.html');
  }

  writeFileSync(targetPath, routeHtml, 'utf8');
  generatedCount++;
  console.log(`  ✓ ${routePath.padEnd(24)} -> dist/${routePath === '/' ? 'index.html' : routePath.slice(1) + '/index.html'}`);
}

const elapsedMs = (performance.now() - startTime).toFixed(1);
console.log(`[SEO Prerender] Successfully generated ${generatedCount} route shells in ${elapsedMs}ms.`);
