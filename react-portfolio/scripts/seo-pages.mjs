/*
  Después de `vite build`: escribe el HTML de cada caso (dist/work/<caso>.html) y el sitemap.

  La app es de una sola página: sin esto, todas las URL servirían el <head> de la portada
  (su título, su descripción y su canónica). Cada caso recibe aquí los suyos, sacados de
  src/content/seo.json, el mismo archivo que usa la app al navegar (useSeo). Netlify sirve
  /work/<caso> desde work/<caso>.html sin redirigir.
*/
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const seo = JSON.parse(readFileSync('src/content/seo.json', 'utf8'));
const home = readFileSync('dist/index.html', 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const HOME = seo.pages['/'];

function swap(html, find, value) {
  if (!html.includes(find)) throw new Error(`seo-pages: no encuentro ${find}`);
  return html.split(find).join(value);
}

for (const [path, page] of Object.entries(seo.pages)) {
  if (path === '/') continue;
  const url = seo.site + path;
  let html = home;
  html = swap(html, `<title>${HOME.title}</title>`, `<title>${esc(page.title)}</title>`);
  html = swap(html, `content="${esc(HOME.title)}"`, `content="${esc(page.title)}"`);
  html = swap(html, `content="${esc(HOME.description)}"`, `content="${esc(page.description)}"`);
  html = swap(html, `<link rel="canonical" href="${seo.site}/" />`, `<link rel="canonical" href="${url}" />`);
  html = swap(html, `<meta property="og:url" content="${seo.site}/" />`, `<meta property="og:url" content="${url}" />`);
  html = swap(html, `<meta property="og:type" content="profile" />`, `<meta property="og:type" content="article" />`);
  html = html.replace(/\s*<meta property="profile:[^>]*>/g, '');
  // La ficha de Laura (ProfilePage + Person) vive en la portada; el caso solo dice de quién es
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${seo.site}/#website` },
    author: { '@id': `${seo.site}/#person` },
  };
  html = html.replace(/<script type="application\/ld\+json" data-seo="home">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  const out = `dist${path}.html`;
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

const urls = Object.keys(seo.pages).map((p) => `  <url><loc>${seo.site}${p}</loc></url>`).join('\n');
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`seo-pages: ${Object.keys(seo.pages).length - 1} casos y sitemap.xml`);
