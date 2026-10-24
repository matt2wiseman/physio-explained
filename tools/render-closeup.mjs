#!/usr/bin/env node
// OWNER: A8. Renders close-up frames via tools/closeup-preview.html.
// Usage:
//   node tools/render-closeup.mjs <injury-id> [--phase <i>] [--t 3.2 | --times 0,2.5,7 | --sheet 9] [--mirror]
//        → tools/output/closeup-<id>-t<t>.png | closeup-<id>-sheet.png   (needs data/injuries/<id>.json — npm run build)
//   node tools/render-closeup.mjs --scene <scene-id> [--demo] [--types bone,physis,generic,scene] [--cols 4] [--t 0]
//        → tools/output/closeup-scene-<id>[-demo].png
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { serve, browser, openPage, ROOT } from "./lib/harness.mjs";
const a = process.argv.slice(2);
const opt = (k, d) => { const i = a.indexOf(k); return i >= 0 && a[i + 1] !== undefined ? a[i + 1] : d; };
const flags = new Set(["--demo", "--mirror"]);
const pos = a.filter((x, i) => !x.startsWith("--") && !((a[i - 1] || "").startsWith("--") && !flags.has(a[i - 1])));
const scene = opt("--scene");
if (!scene && !pos.length) { console.error("usage: node tools/render-closeup.mjs <injury-id> [--sheet 9 | --t 3 | --times a,b] | --scene <id> [--demo]"); process.exit(1); }
const out = join(ROOT, "tools/output"); mkdirSync(out, { recursive: true });
const mir = a.includes("--mirror") ? "&mirror=1" : "";
const jobs = [];
if (scene) {
  const demo = a.includes("--demo");
  const q = `scene=${scene}${demo ? "&demo=1" : ""}${opt("--types") ? "&types=" + opt("--types") : ""}${opt("--cols") ? "&cols=" + opt("--cols") : ""}${opt("--t") ? "&t=" + opt("--t") : ""}${mir}`;
  jobs.push({ q, name: `closeup-scene-${scene}${demo ? "-demo" + (opt("--types") ? "-" + opt("--types").replace(/,/g, "_") : "") : ""}`, width: demo ? 1600 : 1000 });
} else for (const id of pos) {
  const ph = opt("--phase") !== undefined ? `&phase=${opt("--phase")}` : "";
  if (a.includes("--times") || a.includes("--t")) for (const t of (opt("--times") || opt("--t")).split(",")) jobs.push({ q: `id=${id}${ph}&t=${t}${mir}`, name: `closeup-${id}-t${t}`, width: 1000 });
  else jobs.push({ q: `id=${id}${ph}&sheet=${opt("--sheet", "9")}${opt("--cols") ? "&cols=" + opt("--cols") : ""}${mir}`, name: `closeup-${id}-sheet`, width: 1600 });
}
const srv = await serve(); const b = await browser();
let bad = 0;
for (const j of jobs) {
  const { page, errors, ctx } = await openPage(b, `${srv.url}/tools/closeup-preview.html?${j.q}`, { width: j.width, height: 700 });
  try { await page.waitForFunction(() => window.__ready, null, { timeout: 30000 }); } catch { errors.push("timeout waiting for window.__ready"); }
  const warns = await page.evaluate(() => [...new Set(window.__closeupWarnings || [])]);
  await page.screenshot({ path: join(out, `${j.name}.png`), fullPage: true });
  const all = [...errors, ...warns];
  console.log(`${j.q} → tools/output/${j.name}.png${all.length ? "\n  problems:\n   " + all.join("\n   ") : ""}`);
  if (all.length) bad++;
  await ctx.close();
}
await b.close(); await srv.close();
process.exit(bad ? 1 : 0);
