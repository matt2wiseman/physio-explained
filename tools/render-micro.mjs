#!/usr/bin/env node
// Micro-phase contact sheets (owner A7).
// Usage:
//   node tools/render-micro.mjs ligament [tendon …]          → tools/output/micro-<tissue>.png (every stage, labelled)
//   node tools/render-micro.mjs --all                        → every MICRO_TISSUES id
//   node tools/render-micro.mjs muscle --p 0.3               sample a different in-stage progress (default 0.7)
//   node tools/render-micro.mjs ligament --stage failure [--frames 6]   → micro-<tissue>-<stage>.png motion strip
//   node tools/render-micro.mjs ligament --variant intra-articular       → micro-<tissue>-<variant>.png
//   --cols 3 / --width 1600   layout of the sheet
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { serve, browser, openPage, ROOT } from "./lib/harness.mjs";
const a = process.argv.slice(2);
const opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
let ids = a.filter((x, i) => !x.startsWith("--") && !(a[i - 1] || "").startsWith("--"));
if (a.includes("--all")) ids = Object.keys((await import(join(ROOT, "js/anim/catalogue.js"))).MICRO_TISSUES);
if (!ids.length) { console.error("usage: node tools/render-micro.mjs <tissue>… [--all] [--p 0.7] [--stage id --frames 6] [--variant v] [--cols n]"); process.exit(1); }
const out = join(ROOT, "tools/output"); mkdirSync(out, { recursive: true });
const stage = opt("--stage"), variant = opt("--variant");
const qs = new URLSearchParams();
if (opt("--p")) qs.set("p", opt("--p"));
if (stage) { qs.set("stage", stage); qs.set("frames", opt("--frames", "6")); }
if (variant) qs.set("variant", variant);
if (opt("--cols")) qs.set("cols", opt("--cols"));
const srv = await serve(); const b = await browser();
let bad = 0;
for (const id of ids) {
  const name = `micro-${id}${stage ? "-" + stage : ""}${variant ? "-" + variant : ""}`;
  const { page, errors, ctx } = await openPage(b, `${srv.url}/tools/micro-preview.html?tissue=${id}&${qs}`, { width: Number(opt("--width", 1600)), height: 900 });
  try { await page.waitForFunction(() => window.__ready, null, { timeout: 20000 }); } catch { errors.push("timeout waiting for window.__ready"); }
  const microErrors = await page.evaluate(() => window.__microErrors || []);
  await page.screenshot({ path: join(out, `${name}.png`), fullPage: true });
  const all = [...new Set([...errors, ...microErrors])];
  console.log(`${id}: → tools/output/${name}.png${all.length ? "\n  problems:\n   " + all.join("\n   ") : ""}`);
  if (all.length) bad++;
  await ctx.close();
}
await b.close(); await srv.close();
process.exit(bad ? 1 : 0);
