#!/usr/bin/env node
// Usage: node tools/screenshot.mjs <route-hash> [--width 390] [--height 844] [--dark] [--full] [--out name]
//   e.g. node tools/screenshot.mjs injury.acl-rupture --width 390 --dark   → tools/output/<name>.png, prints console errors
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { serve, browser, openPage, ROOT } from "./lib/harness.mjs";
const a = process.argv.slice(2);
const opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
const route = a[0] && !a[0].startsWith("--") ? a[0] : "home";
const width = +opt("--width", 1280), height = +opt("--height", 900);
const name = opt("--out", `page-${route.replace(/[^a-z0-9.-]/gi, "_")}-${width}${a.includes("--dark") ? "-dark" : ""}`);
const out = join(ROOT, "tools/output"); mkdirSync(out, { recursive: true });
const srv = await serve(); const b = await browser();
const { page, errors } = await openPage(b, `${srv.url}/index.html#${route}`, { width, height, dark: a.includes("--dark") });
await page.waitForTimeout(+opt("--wait", 1200));
const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
await page.screenshot({ path: join(out, `${name}.png`), fullPage: a.includes("--full") });
console.log(`→ tools/output/${name}.png${overflow ? "\n  WARNING: horizontal overflow" : ""}${errors.length ? "\n  console errors:\n   " + errors.join("\n   ") : "\n  no console errors"}`);
await b.close(); await srv.close();
