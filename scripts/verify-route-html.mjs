import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES_SEO } from '../src/components/SEO/seoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const distDir = resolve(rootDir, 'dist');

console.log('=== VERIFYING GENERATED STATIC ROUTE HTML SHELLS ===\n');

let allPassed = true;
const assetSummary = [];

for (const [routePath, expected] of Object.entries(ROUTES_SEO)) {
  const filePath = routePath === '/'
    ? resolve(distDir, 'index.html')
    : resolve(distDir, routePath.slice(1), 'index.html');

  if (!existsSync(filePath)) {
    console.error(`❌ [FAIL] Missing file for route ${routePath}: ${filePath}`);
    allPassed = false;
    continue;
  }

  const html = readFileSync(filePath, 'utf8');

  // Helper extraction
  const getTagMatch = (regex) => {
    const m = html.match(regex);
    return m ? m[1] : null;
  };
  const countMatches = (regex) => (html.match(regex) || []).length;

  const unescapeHtml = (str) => (str ? str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'") : str);

  const title = unescapeHtml(getTagMatch(/<title>(.*?)<\/title>/));
  const desc = unescapeHtml(getTagMatch(/<meta name="description" content="(.*?)" \/>/));
  const canonical = getTagMatch(/<link rel="canonical" href="(.*?)" \/>/);
  const ogTitle = unescapeHtml(getTagMatch(/<meta property="og:title" content="(.*?)" \/>/));
  const ogDesc = unescapeHtml(getTagMatch(/<meta property="og:description" content="(.*?)" \/>/));
  const ogUrl = getTagMatch(/<meta property="og:url" content="(.*?)" \/>/);
  const ogImage = getTagMatch(/<meta property="og:image" content="(.*?)" \/>/);
  const ogImageAlt = unescapeHtml(getTagMatch(/<meta property="og:image:alt" content="(.*?)" \/>/));
  const twCard = getTagMatch(/<meta name="twitter:card" content="(.*?)" \/>/);
  const twTitle = unescapeHtml(getTagMatch(/<meta name="twitter:title" content="(.*?)" \/>/));
  const twDesc = unescapeHtml(getTagMatch(/<meta name="twitter:description" content="(.*?)" \/>/));
  const twImage = getTagMatch(/<meta name="twitter:image" content="(.*?)" \/>/);
  const ogWidth = getTagMatch(/<meta property="og:image:width" content="(.*?)" \/>/);
  const ogHeight = getTagMatch(/<meta property="og:image:height" content="(.*?)" \/>/);
  const ogImageType = getTagMatch(/<meta property="og:image:type" content="(.*?)" \/>/);
  const hasJsonLd = html.includes('id="person-schema"');
  const emptyRoot = /<div id="root">\s*<\/div>/.test(html);

  // Counts
  const titleCount = countMatches(/<title>/g);
  const descCount = countMatches(/<meta name="description"/g);
  const canonicalCount = countMatches(/<link rel="canonical"/g);
  const ogImageCount = countMatches(/<meta property="og:image"/g);

  // Real file existence assertion: parse absolute og:image and twitter:image URLs
  let ogFileExists = false;
  let ogDiskPath = '';
  try {
    const parsedOg = new URL(ogImage);
    const relPath = parsedOg.pathname.replace(/^\/+/, '');
    ogDiskPath = resolve(distDir, relPath);
    ogFileExists = existsSync(ogDiskPath);
  } catch {
    ogFileExists = false;
  }

  let twFileExists = false;
  let twDiskPath = '';
  try {
    const parsedTw = new URL(twImage);
    const relPath = parsedTw.pathname.replace(/^\/+/, '');
    twDiskPath = resolve(distDir, relPath);
    twFileExists = existsSync(twDiskPath);
  } catch {
    twFileExists = false;
  }

  const checks = [
    { name: 'title', pass: title === expected.title, actual: title, expected: expected.title },
    { name: 'description', pass: desc === expected.description, actual: desc, expected: expected.description },
    { name: 'canonical', pass: canonical === expected.canonical, actual: canonical, expected: expected.canonical },
    { name: 'og:title', pass: ogTitle === expected.title, actual: ogTitle, expected: expected.title },
    { name: 'og:description', pass: ogDesc === expected.description, actual: ogDesc, expected: expected.description },
    { name: 'og:url', pass: ogUrl === expected.canonical, actual: ogUrl, expected: expected.canonical },
    { name: 'og:image match', pass: ogImage === expected.ogImage, actual: ogImage, expected: expected.ogImage },
    { name: 'og:image dist file exists', pass: ogFileExists, actual: ogFileExists ? `Found (${ogDiskPath})` : `MISSING (${ogDiskPath})`, expected: 'File exists on disk' },
    { name: 'og:image:width', pass: ogWidth === (expected.ogImageWidth || '1200'), actual: ogWidth, expected: expected.ogImageWidth || '1200' },
    { name: 'og:image:height', pass: ogHeight === (expected.ogImageHeight || '630'), actual: ogHeight, expected: expected.ogImageHeight || '630' },
    { name: 'og:image:type', pass: ogImageType === (expected.ogImageType || 'image/png'), actual: ogImageType, expected: expected.ogImageType || 'image/png' },
    { name: 'og:image:alt', pass: ogImageAlt === (expected.ogImageAlt || null), actual: ogImageAlt, expected: expected.ogImageAlt || null },
    { name: 'twitter:card', pass: twCard === 'summary_large_image', actual: twCard, expected: 'summary_large_image' },
    { name: 'twitter:title', pass: twTitle === expected.title, actual: twTitle, expected: expected.title },
    { name: 'twitter:description', pass: twDesc === expected.description, actual: twDesc, expected: expected.description },
    { name: 'twitter:image match', pass: twImage === expected.ogImage, actual: twImage, expected: expected.ogImage },
    { name: 'twitter:image dist file exists', pass: twFileExists, actual: twFileExists ? `Found (${twDiskPath})` : `MISSING (${twDiskPath})`, expected: 'File exists on disk' },
    { name: 'JSON-LD', pass: hasJsonLd === (routePath === '/'), actual: hasJsonLd, expected: routePath === '/' },
    { name: 'empty #root', pass: emptyRoot, actual: emptyRoot, expected: true },
    { name: 'single title tag', pass: titleCount === 1, actual: titleCount, expected: 1 },
    { name: 'single desc tag', pass: descCount === 1, actual: descCount, expected: 1 },
    { name: 'single canonical tag', pass: canonicalCount === 1, actual: canonicalCount, expected: 1 },
    { name: 'single og:image tag', pass: ogImageCount === 1, actual: ogImageCount, expected: 1 },
  ];

  const assetStats = ogFileExists ? statSync(ogDiskPath) : null;
  assetSummary.push({
    route: routePath,
    url: ogImage,
    distPath: ogDiskPath.replace(rootDir + '\\', '').replace(rootDir + '/', ''),
    sizeBytes: assetStats ? assetStats.size : 0,
    exists: ogFileExists && twFileExists,
  });

  const failedChecks = checks.filter((c) => !c.pass);
  if (failedChecks.length === 0) {
    console.log(`✅ [PASS] ${routePath.padEnd(22)} (All ${checks.length} checks passed)`);
  } else {
    console.error(`❌ [FAIL] ${routePath}:`);
    for (const f of failedChecks) {
      console.error(`     - ${f.name}: expected "${f.expected}", got "${f.actual}"`);
    }
    allPassed = false;
  }
}

console.log('\n--- SOCIAL ASSET AUDIT TABLE ---');
console.table(assetSummary);

if (!allPassed) {
  process.exit(1);
} else {
  console.log('\n🎉 ALL 7 STATIC ROUTE HTML SHELLS FULLY VALIDATED!');
}
