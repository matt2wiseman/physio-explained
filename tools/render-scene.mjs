#!/usr/bin/env node
// Usage: node tools/render-scene.mjs <scene-id> [more ids...]  → tools/output/scene-<id>.png  (left: plain, right: labelled ids + anchors)
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { serve, browser, openPage, ROOT } from "./lib/harness.mjs";
const ids = process.argv.slice(2);
if (!ids.length) { console.error("usage: node tools/render-scene.mjs <scene-id>..."); process.exit(1); }
const out = join(ROOT, "tools/output"); mkdirSync(out, { recursive: true });
const srv = await serve(); const b = await browser();
let bad = 0;
for (const id of ids) {
  const { page, errors: rawErrors, ctx } = await openPage(b, `${srv.url}/tools/scene-preview.html?scene=${id}`, { width: 1400, height: 760 });
  const errors = rawErrors; // filtered below (optional closeup.js import may 404 before the renderer exists)
  await page.waitForFunction(() => window.__ready, null, { timeout: 15000 });
  const missing = await page.evaluate(() => window.__missing);
  for (let i = errors.length - 1; i >= 0; i--) if (/404/.test(errors[i])) errors.splice(i, 1);
  await page.screenshot({ path: join(out, `scene-${id}.png`), fullPage: true });
  console.log(`${id}: ${missing.length ? "MISSING " + missing.join(", ") : "all catalogue structures & anchors present"}${errors.length ? "\n  console errors: " + errors.join(" | ") : ""}`);
  console.log(`  → tools/output/scene-${id}.png`);
  if (missing.length || errors.length) bad++;
  await ctx.close();
}
await b.close(); await srv.close();
process.exit(bad ? 1 : 0);
