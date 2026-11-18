#!/usr/bin/env node
// Smoke test for the built site. Serves the repository root, opens every route in a headless browser at a phone width
// and fails on: a failed network request (other than Google Fonts), an uncaught page error, an empty page, or horizontal
// overflow. Usage: node tests/smoke.mjs [--width 360]
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
const WIDTH = +arg("--width", 360);
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml" };

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]); if (p.endsWith("/")) p += "index.html";
  try { const d = await readFile(join(ROOT, p)); res.setHeader("content-type", TYPES[extname(p)] || "application/octet-stream"); res.end(d); }
  catch { res.statusCode = 404; res.end("not found"); }
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}/index.html`;

const index = JSON.parse(readFileSync(join(ROOT, "data/index.json"), "utf8"));
const ids = (index.injuries || index).map((i) => i.id);
const routes = ["home", "library", "library.knee", "bodymap", "compare", "healing", "glossary", "about", "saved", "search.knee",
  ...ids.map((i) => `injury.${i}`)];

const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: WIDTH, height: 800 } })).newPage();
let failures = 0; const current = { route: "" };
const fail = (msg) => { failures++; console.log(`FAIL ${current.route}: ${msg}`); };
page.on("response", (r) => { if (r.status() >= 400 && !/fonts\.g/.test(r.url())) fail(`HTTP ${r.status()} ${r.url().replace(base.replace("index.html", ""), "/")}`); });
page.on("pageerror", (e) => fail(`page error: ${e.message}`));

for (const route of routes) {
  current.route = route;
  await page.goto(`${base}#${route}`, { waitUntil: "load" });
  await page.waitForTimeout(route.startsWith("injury.") ? 450 : 700);
  const info = await page.evaluate(() => ({
    text: (document.querySelector("main")?.innerText || "").trim().length,
    over: document.documentElement.scrollWidth - window.innerWidth,
  }));
  if (info.text < 200) fail(`page is nearly empty (${info.text} characters)`);
  if (info.over > 1) fail(`horizontal overflow of ${info.over}px at ${WIDTH}px wide`);
}
await browser.close(); server.close();
console.log(`smoke: ${routes.length} routes at ${WIDTH}px, ${failures} failure(s)`);
process.exit(failures ? 1 : 0);
