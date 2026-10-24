/**
 * Micro module: BONE-STRESS (bone stress injury continuum). OWNER: A7.
 * Same cortical-bone section as bone-fracture.js (boneBase).
 *   healthy → loading (repetitive sub-maximal load cycles; strain in the cortex) → microdamage (linear microcracks
 *   accumulate; nearby osteocytes die and signal) → resorption-exceeds-formation (targeted remodelling: osteoclasts
 *   excavate cavities faster than osteoblasts refill them → temporary porosity) → stress-reaction (periosteal and
 *   bone-marrow oedema, no fracture line) → stress-fracture (microcracks coalesce into a cortical fracture line) →
 *   healing (load reduced: formation catches up, cavities refill, periosteal new bone bridges the line, oedema resolves).
 */
import { el, rng, lerp, clamp, ease, fade, wave, col, mix, field, label, arrow, drawCell, blobPath, smoothPath, f, radial } from "./index.js";
import { boneBase, BONE } from "./bone-fracture.js";

const sg = (() => {
  const r = rng("bone-stress");
  // microcracks: a cluster along the future fracture line (x≈430) + scattered ones
  const cracks = [];
  const line = [[430, 108], [424, 138], [436, 172], [428, 206], [438, 240]];
  line.forEach(([x, y], i) => cracks.push({ x, y, L: 16 + r() * 10, a: 70 + (r() - 0.5) * 30, t: 0.1 + i * 0.12, onLine: true }));
  for (let i = 0; i < 9; i++) { const x = 90 + r() * 640, y = BONE.top + 14 + r() * (BONE.bot - BONE.top - 28); if (Math.abs(x - 430) < 40) continue; cracks.push({ x, y, L: 14 + r() * 16, a: (r() - 0.5) * 40, t: r() * 0.8, onLine: false }); }
  const remodel = [[300, 180], [430, 150], [430, 222], [560, 200], [200, 140]].map(([x, y], i) => ({ x, y, rx: 20 + r() * 8, ry: 7 + r() * 3, t: i * 0.12 }));
  return { cracks, line, remodel, newBone: Array.from({ length: 26 }, (_, i) => ({ x: 352 + i * 6 + r() * 4, y: BONE.top - 6 - r() * 10, k: r(), seed: i })) };
})();

function crackPath(c, k) {
  const a = (c.a * Math.PI) / 180, L = c.L * k;
  const pts = []; for (let i = 0; i <= 4; i++) { const u = i / 4 - 0.5; pts.push([c.x + Math.cos(a) * L * u + (i % 2 ? 1.5 : -1.5) * Math.sin(a), c.y + Math.sin(a) * L * u + (i % 2 ? -1.5 : 1.5) * Math.cos(a)]); }
  return "M" + pts.map(([x, y]) => `${f(x)},${f(y)}`).join(" L");
}

function render(g, { stage, progress: p }) {
  const k = ease(p);
  const order = ["healthy", "loading", "microdamage", "resorption-exceeds-formation", "stress-reaction", "stress-fracture", "healing"];
  const si = Math.max(0, order.indexOf(stage));
  field(g, { tint: "anat-bone", tintAmount: 0.04 });
  // crack visibility & state
  const crackK = (c) => (si < 2 ? 0 : si === 2 ? fade(c.t, c.t + 0.2, p) : si === 6 ? 1 - fade(0.2, 0.9, p) : 1);
  const pitK = si === 3 ? k : si === 4 || si === 5 ? 1 : si === 6 ? 1 - fade(0.1, 0.9, p) : si === 0 ? 0.35 : 0;
  const pits = sg.remodel.map((q, i) => ({ x: q.x, y: q.y, rx: (si === 0 ? (i === 0 ? 1 : 0) : 1) * q.rx * pitK * (si === 3 ? fade(q.t, q.t + 0.4, p) : 1), ry: q.ry * Math.max(0.3, pitK) }));
  const deadNear = si >= 2 && si <= 5 ? (si === 2 ? fade(0.4, 1, p) : 1) : si === 6 ? 1 - k : 0;
  const dead = (x, y) => (sg.cracks.some((c) => crackK(c) > 0.3 && Math.hypot(c.x - x, c.y - y) < 26) ? deadNear : 0);
  const oed = si === 4 ? ease(p) : si === 5 ? 1 : si === 6 ? 1 - k : 0;
  const thick = si === 4 ? k : si === 5 ? 1 : si === 6 ? 1 - 0.5 * k : 0;
  const lift = (x) => (si === 6 ? 10 * k * Math.max(0, 1 - Math.abs(x - 430) / 90) : 0) + thick * 3;
  boneBase(g, { pits, dead, marrowOedema: oed, periThick: thick, periLift: lift });
  if (oed > 0.01) el("rect", { x: 0, y: 60, width: 800, height: BONE.peri - 62, fill: col("fx-oedema", 0.8 * oed) }, g);
  // strain in the cortex during loading
  if (si === 1) el("rect", { x: 0, y: BONE.top, width: 800, height: BONE.bot - BONE.top, fill: col("fx-force", 0.16 * wave(p, 5)) }, g);
  // microcracks
  sg.cracks.forEach((c) => {
    const ck = crackK(c);
    if (ck <= 0.01) return;
    el("path", { d: crackPath(c, Math.min(1, ck * 1.2)), stroke: col("fx-injury", 0.9 * Math.min(1, ck * 1.5)), "stroke-width": 1.8, fill: "none" }, g);
  });
  // osteoclasts in cavities / osteoblasts refilling
  sg.remodel.forEach((q, i) => {
    const pk = pits[i].rx / q.rx;
    if (si === 0 && i === 0) { drawCell(g, "osteoclast", q.x + 6, q.y - 2, 5, { angle: -90, nuclei: 3 }); drawCell(g, "osteoblast", q.x - 14, q.y - 6, 3, { angle: 180 }); drawCell(g, "osteoblast", q.x - 14, q.y + 6, 3); return; }
    if (si === 3 || si === 4 || si === 5) { if (pk > 0.15) drawCell(g, "osteoclast", q.x + pits[i].rx - 6, q.y, 5.5, { angle: -90, nuclei: 4 }); if (i % 2 === 0 && pk > 0.4) drawCell(g, "osteoblast", q.x - pits[i].rx + 6, q.y - 4, 3.2, { angle: 180 }); }
    if (si === 6 && pk > 0.05) for (let j = -1; j <= 1; j += 2) drawCell(g, "osteoblast", q.x, q.y + j * pits[i].ry * 0.6, 3.2, { angle: j < 0 ? 180 : 0 });
  });
  // stress fracture line (coalescing)
  const lineK = si === 5 ? ease(p) : si === 6 ? 1 - fade(0.3, 1, p) : 0;
  if (lineK > 0.01) {
    const pts = [[431, BONE.peri - 2], ...sg.line];
    const n = Math.max(2, Math.ceil(lineK * pts.length));
    const sub = pts.slice(0, n);
    el("path", { d: smoothPath(sub), stroke: col("fx-injury", 0.3 * lineK), "stroke-width": 9, fill: "none" }, g);
    el("path", { d: smoothPath(sub), stroke: col(si === 6 ? "fx-injury" : "fx-injury", lineK), "stroke-width": 2.8, fill: "none" }, g);
  }
  // periosteal new bone (healing)
  if (si === 6) sg.newBone.forEach((b) => { if (b.k < k * 1.1) el("path", { d: blobPath(rng(b.seed), b.x, b.y - 4 * k * (1 - Math.abs(b.x - 430) / 90), 6 + 2 * b.k, { ry: 4.5, irregular: 0.35, n: 7 }), fill: col("anat-bone"), stroke: col("anat-bone-edge"), "stroke-width": 0.8 }, g); });
  // load arrows (top band, centred)
  const loadArrows = (amp, txt, colr) => {
    const hw = txt.length * 3.7 + 12;
    arrow(g, 400 - hw, 72, 400 - hw - 22 - 34 * amp, 72, { width: 4, head: 12, color: colr });
    arrow(g, 400 + hw, 72, 400 + hw + 22 + 34 * amp, 72, { width: 4, head: 12, color: colr });
    label(g, 400, 77, txt, { anchor: "middle", size: 13, color: colr || col("fx-force") });
  };
  switch (stage) {
    case "loading": {
      loadArrows(wave(p, 5), "Repetitive load cycles");
      const ticks = Math.floor(p * 24);
      let d = ""; for (let i = 0; i < ticks; i++) d += `M${560 + i * 6},66 l0,10 `;
      el("path", { d, stroke: col("fx-force", 0.8), "stroke-width": 2 }, g);
      label(g, 632, 412, "Strain concentrates in the cortex;\nbone adapts if loads are tolerable", { to: [600, 200], anchor: "end" });
      break;
    }
    case "microdamage":
      loadArrows(wave(p, 4) * 0.8, "Load continues");
      label(g, 632, 412, "Linear microcracks accumulate", { to: [sg.cracks[2].x + 6, sg.cracks[2].y], anchor: "end", opacity: fade(0.1, 0.4, p) });
      label(g, 180, 412, "Osteocytes near cracks die →\nsignal targeted remodelling", { to: [sg.cracks[7]?.x ?? 300, sg.cracks[7]?.y ?? 200], anchor: "middle", opacity: fade(0.4, 0.7, p) });
      break;
    case "resorption-exceeds-formation": {
      loadArrows(wave(p, 4) * 0.8, "Load continues");
      // balance glyph
      const gg = el("g", {}, g);
      el("rect", { x: 14, y: 392, width: 200, height: 46, rx: 6, fill: col("stage-caption-bg") }, gg);
      const tilt = 10 * k;
      el("path", { d: `M114,432 l-8,0 l8,-14 l8,14 Z`, fill: col("stage-ink-2") }, gg);
      el("path", { d: `M${f(54)},${f(418 + tilt)} L${f(174)},${f(418 - tilt)}`, stroke: col("stage-ink"), "stroke-width": 2 }, gg);
      label(gg, 56, 410 + tilt, "Resorption", { anchor: "middle", size: 11, color: col("fx-inflame") });
      label(gg, 172, 410 - tilt, "Formation", { anchor: "middle", size: 11, color: col("anat-nucleus") });
      label(g, 632, 412, "Osteoclasts excavate damaged bone faster\nthan osteoblasts refill it → porosity", { to: [sg.remodel[1].x + 14, sg.remodel[1].y], anchor: "end" });
      break;
    }
    case "stress-reaction":
      label(g, 180, 76, "Periosteal oedema", { to: [230, BONE.peri - 12], anchor: "middle", opacity: fade(0.1, 0.4, p) });
      label(g, 632, 412, "Bone-marrow oedema (seen on MRI)\n— no fracture line yet", { to: [560, 300], anchor: "end", opacity: fade(0.2, 0.5, p) });
      break;
    case "stress-fracture":
      label(g, 632, 412, "Microcracks coalesce into a\ncortical stress fracture line", { to: [436, 200], anchor: "end", opacity: fade(0.2, 0.5, p) });
      label(g, 180, 76, "Focal bone pain under load", { anchor: "middle", size: 13, color: col("fx-pain") });
      break;
    case "healing":
      loadArrows(0.15, "Relative rest", col("fx-heal"));
      label(g, 180, 412, "Then a graded return to load", { anchor: "middle", size: 13, color: col("fx-heal") });
      label(g, 632, 412, "Formation catches up: cavities refill,\nperiosteal new bone bridges the line", { to: [430, BONE.top - 8], anchor: "end", opacity: fade(0.2, 0.5, p) });
      break;
    default:
      label(g, 632, 412, "Balanced remodelling unit:\nosteoclast resorbs, osteoblasts refill", { to: [sg.remodel[0].x + 8, sg.remodel[0].y], anchor: "end" });
      label(g, 180, 76, "Periosteum", { to: [150, BONE.peri], anchor: "middle" });
      label(g, 180, 412, "Cortical bone (osteons)", { to: [120, BONE.canals[2]], anchor: "middle" });
  }
}

export default { id: "bone-stress", scale: "≈ 200 µm", render };
