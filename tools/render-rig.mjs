#!/usr/bin/env node
// OWNER: A2. Renders the figure-rig previews to tools/output/ (open them with the Read tool).
//   node tools/render-rig.mjs                       → rig-sheet-lateral-p<N>.png + rig-sheet-anterior-p<N>.png (every POSE_PRESETS id, names)
//   node tools/render-rig.mjs --view lateral        → one view only;  --per 24 (presets per page)  --kit older-adult
//   node tools/render-rig.mjs --injury acl-rupture  → rig-moi-<id>.png (that injury's moi phase at 8 times; --n 12)
//   node tools/render-rig.mjs --figures             → rig-figures.png (exercise thumbnails at 160×120 on a light page)
//   node tools/render-rig.mjs --kits                → rig-kits.png
//   node tools/render-rig.mjs --pose foosh          → rig-pose-foosh.png (large, both views)
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { serve, browser, openPage, ROOT } from "./lib/harness.mjs";
const a = process.argv.slice(2);
const opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
const out = join(ROOT, "tools/output"); mkdirSync(out, { recursive: true });
const { POSE_PRESETS } = await import("../js/anim/catalogue.js");
const jobs = [];
if (a.includes("--injury")) for (const id of opt("--injury").split(",")) jobs.push({ q: `mode=moi&injury=${id}&n=${opt("--n", 8)}`, name: `rig-moi-${id}`, w: 1400 });
else if (a.includes("--figures")) jobs.push({ q: `mode=figures&view=${opt("--view", "lateral")}`, name: `rig-figures${a.includes("--view") ? "-" + opt("--view") : ""}`, w: 1440 });
else if (a.includes("--kits")) jobs.push({ q: "mode=kits", name: "rig-kits", w: 1200 });
else if (a.includes("--pose")) for (const id of opt("--pose").split(",")) jobs.push({ q: `mode=pose&pose=${id}&props=${opt("--props", "")}`, name: `rig-pose-${id}`, w: 1200 });
else {
  const per = +opt("--per", 24), pages = Math.ceil(Object.keys(POSE_PRESETS).length / per);
  const views = a.includes("--view") ? [opt("--view")] : ["lateral", "anterior"];
  const only = a.includes("--page") ? [+opt("--page")] : [...Array(pages).keys()];
  for (const view of views) for (const p of only) jobs.push({ q: `mode=sheet&view=${view}&page=${p}&per=${per}&kit=${opt("--kit", "athlete")}`, name: `rig-sheet-${view}-p${p}`, w: 1500 });
}
const srv = await serve(); const b = await browser();
let bad = 0;
for (const j of jobs) {
  const { page, errors, ctx } = await openPage(b, `${srv.url}/tools/rig-preview.html?${j.q}`, { width: j.w, height: 900 });
  try { await page.waitForFunction(() => window.__ready, null, { timeout: 30000 }); } catch { errors.push("timeout waiting for window.__ready"); }
  const pe = await page.evaluate(() => window.__errors || []);
  await page.screenshot({ path: join(out, `${j.name}.png`), fullPage: true });
  const all = [...errors, ...pe];
  console.log(`→ tools/output/${j.name}.png${all.length ? "\n  problems:\n   " + all.join("\n   ") : ""}`);
  if (all.length) bad++;
  await ctx.close();
}
await b.close(); await srv.close();
process.exit(bad ? 1 : 0);
