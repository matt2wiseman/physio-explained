#!/usr/bin/env node
// `npm test`: run every automated check in order and stop at the first failure.
//   1. content validation (schema, references, animation ids)       node scripts/build.mjs --check
//   2. built data is current                                        node scripts/build.mjs, then git diff on data/
//   3. every injury animation renders with no console errors        tools/scan-render.sh
//   4. every route loads without errors or overflow at 360px        node tests/smoke.mjs
// Needs Playwright (preinstalled in the build environment). The evidence audit is a separate, slower process: see docs/qa/.
import { spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const steps = [
  ["Validate content", "node", ["scripts/build.mjs", "--check"], (out) => /0 errors/.test(out)],
  ["Rebuild data", "node", ["scripts/build.mjs"], (out) => /0 errors/.test(out) || /wrote data\/index\.json/.test(out)],
  ["Render every animation", "bash", ["tools/scan-render.sh"], (out) => /0 page\(s\) with console errors/.test(out)],
  ["Smoke test every route", "node", ["tests/smoke.mjs", "--width", "360"], (out) => /, 0 failure/.test(out)],
];
let failed = false;
for (const [name, cmd, args, ok] of steps) {
  process.stdout.write(`\n== ${name}\n`);
  const r = spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const out = (r.stdout || "") + (r.stderr || "");
  process.stdout.write(out.split("\n").slice(-12).join("\n"));
  if (r.status !== 0 || !ok(out)) { console.log(`\nFAILED: ${name}`); failed = true; break; }
}
console.log(failed ? "\nTESTS FAILED" : "\nALL TESTS PASSED");
process.exit(failed ? 1 : 0);
