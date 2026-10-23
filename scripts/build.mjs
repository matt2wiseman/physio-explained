#!/usr/bin/env node
// Builds data/ from content/injuries/**.js and validates everything.
//   node scripts/build.mjs            validate + write data/index.json, data/meta.json, data/injuries/<id>.json
//   node scripts/build.mjs --check    validate only (no writes)
//   node scripts/build.mjs --only acl-rupture,mcl-sprain   limit to these ids (implies quiet for others)
//   node scripts/build.mjs --strict   warnings count as errors
// Files with errors are EXCLUDED from data/ so the site keeps working while content is in progress.
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, rmSync, existsSync, renameSync } from "node:fs";
import { join, relative, dirname, basename } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateInjury, bodyAreaOf } from "./lib/validate.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const STRICT = args.includes("--strict");
const onlyArg = args.find((a) => a.startsWith("--only"));
const ONLY = onlyArg ? (onlyArg.includes("=") ? onlyArg.split("=")[1] : args[args.indexOf(onlyArg) + 1] || "").split(",").filter(Boolean) : null;

const catalogue = JSON.parse(readFileSync(join(ROOT, "content/catalogue.json"), "utf8"));
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (f.endsWith(".js")) files.push(p); } })(join(ROOT, "content/injuries"));

const results = [];
for (const file of files.sort()) {
  const id = basename(file, ".js");
  if (ONLY && !ONLY.includes(id)) continue;
  const rel = relative(ROOT, file);
  let inj, errors = [], warnings = [];
  try {
    inj = (await import(pathToFileURL(file).href + "?t=" + Date.now())).default;
    ({ errors, warnings } = validateInjury(inj, { catalogue, file: file.replace(/\\/g, "/"), folderRegion: basename(dirname(file)) }));
  } catch (e) { errors = [`import failed: ${e.message.split("\n")[0]}`]; }
  if (STRICT) { errors = errors.concat(warnings); warnings = []; }
  results.push({ id, rel, inj, errors, warnings });
}

let nErr = 0, nWarn = 0;
for (const r of results) {
  nErr += r.errors.length; nWarn += r.warnings.length;
  if (!r.errors.length && !r.warnings.length) continue;
  console.log(`\n${r.errors.length ? "✗" : "!"} ${r.rel}  (${r.errors.length} errors, ${r.warnings.length} warnings)`);
  r.errors.forEach((e) => console.log(`   ERROR  ${e}`));
  r.warnings.forEach((w) => console.log(`   warn   ${w}`));
}
const ok = results.filter((r) => !r.errors.length);
console.log(`\n${results.length} file(s) checked · ${ok.length} valid · ${nErr} errors · ${nWarn} warnings`);
if (!ONLY) {
  const have = new Set(results.map((r) => r.id));
  const missing = catalogue.filter((c) => !have.has(c.id));
  console.log(`catalogue: ${catalogue.length} planned · ${have.size} written · ${missing.length} not yet written`);
}

if (!CHECK && !ONLY) {
  // write to a temp dir then swap, so concurrent builds/page loads never see a half-written folder
  const finalDir = join(ROOT, "data/injuries");
  const outDir = join(ROOT, `data/.injuries-tmp-${process.pid}`);
  mkdirSync(outDir, { recursive: true });
  const index = [];
  for (const { inj } of ok) {
    const full = { ...inj, bodyArea: bodyAreaOf(inj.region) };
    writeFileSync(join(outDir, `${inj.id}.json`), JSON.stringify(full));
    index.push({
      id: inj.id, name: inj.name, shortName: inj.shortName, aka: inj.aka, region: inj.region, bodyArea: full.bodyArea,
      tissues: inj.tissues, onset: inj.onset, mechanismType: inj.mechanismType, populations: inj.populations, sports: inj.sports,
      urgency: inj.urgency, summary: inj.summary, keyFacts: inj.keyFacts, related: inj.related,
      grading: inj.grading?.system || null,
      keywords: {
        tests: (inj.assessment?.specialTests || []).map((t) => t.name),
        structures: [...new Set([...(inj.anatomy?.structures || []).map((s) => s.name), ...(inj.pathophysiology?.structures || []).map((s) => s.name)])],
        differentials: (inj.differentials || []).map((d) => d.name),
        mechanism: inj.mechanism?.summary || ""
      },
      refCount: inj.references?.length || 0,
      hasAnimation: !!inj.animation?.phases?.length,
      scene: inj.animation?.phases?.find((p) => p.type === "closeup")?.scene || null
    });
  }
  if (existsSync(finalDir)) rmSync(finalDir, { recursive: true, force: true });
  renameSync(outDir, finalDir);
  index.sort((a, b) => a.name.localeCompare(b.name));
  writeFileSync(join(ROOT, "data/index.json"), JSON.stringify(index));
  const regions = {};
  for (const e of index) regions[e.region] = (regions[e.region] || 0) + 1;
  writeFileSync(join(ROOT, "data/meta.json"), JSON.stringify({
    builtAt: new Date().toISOString(), injuries: index.length, planned: catalogue.length,
    references: index.reduce((s, e) => s + e.refCount, 0), regions
  }, null, 1));
  console.log(`wrote data/index.json (${index.length} injuries), data/meta.json, data/injuries/*.json`);
}
process.exit(nErr ? 1 : 0);
