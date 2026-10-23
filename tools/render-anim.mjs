#!/usr/bin/env node
// Usage:
//   node tools/render-anim.mjs <injury-id> [--sheet 12]        → tools/output/anim-<id>-sheet.png (contact sheet of N frames across the whole animation)
//   node tools/render-anim.mjs <injury-id> --times 0,2.5,7     → tools/output/anim-<id>-t<time>.png (one PNG per global time)
// Depends on tools/anim-preview.html (owned by A1): ?id=<injury>&t=<seconds> or ?id=<injury>&sheet=<n>; it sets window.__ready = true when drawn
// and window.__animErrors = [] (any engine warnings, e.g. unknown structure ids).
// Requires `npm run build` so data/injuries/<id>.json exists.
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { serve, browser, openPage, ROOT } from "./lib/harness.mjs";
const a = process.argv.slice(2);
const opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
const ids = a.filter((x, i) => !x.startsWith("--") && !(a[i - 1] || "").startsWith("--"));
if (!ids.length) { console.error("usage: node tools/render-anim.mjs <injury-id> [--sheet 12 | --times 0,2,4]"); process.exit(1); }
const out = join(ROOT, "tools/output"); mkdirSync(out, { recursive: true });
const srv = await serve(); const b = await browser();
let bad = 0;
for (const id of ids) {
  const jobs = a.includes("--times") ? opt("--times").split(",").map((t) => ({ q: `t=${t}`, name: `anim-${id}-t${t}` })) : [{ q: `sheet=${opt("--sheet", "12")}`, name: `anim-${id}-sheet` }];
  for (const j of jobs) {
    const { page, errors, ctx } = await openPage(b, `${srv.url}/tools/anim-preview.html?id=${id}&${j.q}`, { width: a.includes("--times") ? 960 : 1600, height: 900 });
    try { await page.waitForFunction(() => window.__ready, null, { timeout: 20000 }); } catch { errors.push("timeout waiting for window.__ready"); }
    const animErrors = await page.evaluate(() => window.__animErrors || []);
    await page.screenshot({ path: join(out, `${j.name}.png`), fullPage: true });
    const all = [...errors, ...animErrors];
    console.log(`${id} ${j.q}: → tools/output/${j.name}.png${all.length ? "\n  problems:\n   " + all.join("\n   ") : ""}`);
    if (all.length) bad++;
    await ctx.close();
  }
}
await b.close(); await srv.close();
process.exit(bad ? 1 : 0);
