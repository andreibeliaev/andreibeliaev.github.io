import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const siteUrl = "https://andreibeliaev.github.io/";
const routes = [
  ["out/index.html", siteUrl, "Andrei Beliaev | Machine Learning"],
  [
    "out/attractor/index.html",
    `${siteUrl}attractor/`,
    "Pieter de Jong Attractor | Andrei Beliaev",
  ],
];

for (const [file, canonical, title] of routes) {
  const html = readFileSync(file, "utf8");
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  assert.ok(head, `${file}: missing HTML head`);
  assert.ok(head.includes(`<title>${title}</title>`), `${file}: wrong title`);
  assert.ok(
    head.includes(`<link rel="canonical" href="${canonical}"`),
    `${file}: missing page-specific canonical URL`,
  );
  assert.ok(
    head.includes(`<meta property="og:url" content="${canonical}"`),
    `${file}: wrong sharing URL`,
  );
  assert.ok(
    /<meta name="description" content="[^"]+"/.test(head),
    `${file}: missing description`,
  );
  assert.ok(
    head.includes('<meta name="twitter:card" content="summary"'),
    `${file}: missing sharing card`,
  );
  assert.ok(
    /<meta name="google-site-verification" content="[^"]+"/.test(head),
    `${file}: preserve Google Search Console ownership verification`,
  );
  assert.ok(
    !/<meta\b[^>]*\bcontent="[^"]*noindex/i.test(head),
    `${file}: page must not block indexing`,
  );
}

const robots = readFileSync("out/robots.txt", "utf8");
assert.match(robots, /^User-agent: \*$/m);
assert.match(robots, /^Allow: \/$/m);
assert.ok(!/^Disallow:\s*\//m.test(robots), "robots.txt blocks public pages");
assert.ok(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`));

const sitemap = readFileSync("out/sitemap.xml", "utf8");
assert.match(sitemap, /<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
assert.deepEqual(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
  routes.map(([, canonical]) => canonical),
  "sitemap must list the canonical public pages without fragment URLs",
);

const notFound = readFileSync("out/404.html", "utf8");
assert.match(notFound, /<meta name="robots" content="noindex"/);
console.log("Verified page metadata, crawler files, and 404 indexing protection.");
