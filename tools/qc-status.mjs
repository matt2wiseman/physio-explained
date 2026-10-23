#!/usr/bin/env node
// QC dashboard: progress per team/agent, validation status, engine file coverage. Usage: node tools/qc-status.mjs [--errors]
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";
import { ROOT } from "./lib/harness.mjs";
import * as A from "../js/anim/catalogue.js";
const cat = JSON.parse(readFileSync(join(ROOT, "content/catalogue.json"), "utf8"));
const byAgent = {};
for (const c of cat) (byAgent[c.agent] ||= []).push(c);
let out = "";
try { out = execSync("node scripts/build.mjs --check", { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }); } catch (e) { out = e.stdout || ""; }
const status = {};
let cur = null;
for (const line of out.split("\n")) {
  const m = line.match(/^[✗!] content\/injuries\/[^/]+\/([^.]+)\.js\s+\((\d+) errors, (\d+) warnings\)/);
  if (m) { cur = m[1]; status[cur] = { e: +m[2], w: +m[3], lines: [] }; continue; }
  if (cur && /^\s+(ERROR|warn)/.test(line)) status[cur].lines.push(line.trim());
}
const rows = [];
for (const [agent, list] of Object.entries(byAgent)) {
  let written = 0, ok = 0, err = 0;
  for (const c of list) {
    const f = join(ROOT, "content/injuries", c.region, c.id + ".js");
    if (!existsSync(f)) continue;
    written++;
    if (status[c.id]?.e) err++; else ok++;
  }
  rows.push(`${agent.padEnd(5)} ${String(written).padStart(2)}/${list.length} written  ${ok} valid  ${err ? err + " with errors" : ""}`);
}
console.log("CONTENT\n" + rows.join("\n"));
console.log("\n" + out.split("\n").filter((l) => /checked|catalogue:/.test(l)).join("\n"));
const scenes = Object.keys(A.SCENES).filter((s) => existsSync(join(ROOT, "js/anim/scenes", s + ".js")));
const micro = Object.keys(A.MICRO_TISSUES).filter((s) => existsSync(join(ROOT, "js/anim/micro", s + ".js")));
const eng = ["index", "player", "camera", "timeline", "rig", "poses", "props", "moi", "closeup", "closeup-fx"].map((f) => `${f}${existsSync(join(ROOT, "js/anim", f + ".js")) ? "✓" : "·"}`);
console.log(`\nENGINE  ${eng.join(" ")}  micro/index${existsSync(join(ROOT, "js/anim/micro/index.js")) ? "✓" : "·"}`);
console.log(`scenes ${scenes.length}/${Object.keys(A.SCENES).length}   micro tissues ${micro.length}/${Object.keys(A.MICRO_TISSUES).length}`);
const plat = ["index.html", "js/app.js", "js/router.js", "js/store.js", "js/util/dom.js", "js/views/home.js", "js/views/library.js", "js/views/injury.js", "js/views/search.js", "js/views/glossary.js", "js/views/bodymap.js", "js/views/compare.js", "js/views/saved.js", "js/views/healing.js", "js/views/about.js", "js/search/engine.js", "js/components/injury-card.js", "js/components/searchbox.js", "js/components/healing-timeline.js", "js/components/exercise-program.js", "js/components/special-tests.js", "js/components/bodymap-svg.js", "js/components/references.js", "js/components/evidence-badge.js", "data/glossary.json"];
console.log(`PLATFORM ${plat.filter((p) => existsSync(join(ROOT, p))).length}/${plat.length}: missing ${plat.filter((p) => !existsSync(join(ROOT, p))).map((p) => p.split("/").pop()).join(", ") || "none"}`);
const req = readFileSync(join(ROOT, "docs/REQUESTS.md"), "utf8").split("\n").filter((l) => l.startsWith("- ["));
console.log(`REQUESTS logged: ${req.length}`);
if (process.argv.includes("--errors")) for (const [id, s] of Object.entries(status)) if (s.e) console.log(`\n${id}:\n  ${s.lines.filter((l) => l.startsWith("ERROR")).slice(0, 8).join("\n  ")}`);
