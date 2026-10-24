/**
 * Micro module: LIGAMENT (acute injury & healing). OWNER: A7.
 * View: longitudinal section, line of load horizontal. Dense regular connective tissue — crimped, aligned
 * type I collagen bundles with elongated fibroblasts between them and a small interfascicular capillary.
 * Stages: healthy → loaded (crimp straightens, toe region) → overload (fibril sliding / microfailure) →
 * failure (complete rupture, ends recoil into "mop ends") → haemorrhage (torn capillary, RBCs, platelet–fibrin clot) →
 * inflammation (neutrophils then macrophages, oedema) → proliferation (fibroblasts, disorganised type III collagen,
 * capillary sprouts) → remodelling (type III → type I realigning along load arrows; cellularity & vessels regress).
 * phase.variant "intra-articular" (e.g. ACL/PCL): synovial fluid dilutes the clot, a synovial layer caps each stump and
 * no bridging scar forms — stumps retract instead.
 * Also exports makeAcuteCollagen(cfg) — reused by tendon.js.
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, collagenFibre, capillary,
  blobPath, radial, smoothPath, f } from "./index.js";

const X0 = -30, X1 = 830, CX = 400;

function geometry(seed, cfg) {
  const r = rng(seed);
  const rows = []; let y = 88;
  for (let i = 0; i < 12; i++) { rows.push(y); y += i === 5 ? 38 : 24; }
  const VY = (rows[5] + rows[6]) / 2;
  const fibres = rows.map((y, i) => ({
    y, i, seed: 100 + i * 17, phase: (cfg.crimpRegister ? 0.08 : 0.25) * r(), w: cfg.fibreWidth + r() * 2,
    bx: CX + (r() - 0.5) * 70,                 // rupture position
    recL: 22 + r() * 34, recR: 22 + r() * 34,  // recoil (each side, px)
    ox: 150 + r() * 500, over: r() < 0.42,     // overload microfailure
    oxSlide: r() < 0.5 ? -1 : 1
  }));
  const cells = [];
  for (let i = 0; i < rows.length - 1; i++) {
    if (i === 5) continue;
    const yy = (rows[i] + rows[i + 1]) / 2;
    const n = cfg.cellsPerRow;
    for (let k = 0; k < n; k++) cells.push({ x: 40 + ((k + 0.25 + r() * 0.5) / n) * 720, y: yy + (r() - 0.5) * 3, s: 0.85 + r() * 0.3, seed: 300 + cells.length });
  }
  // gap-zone actors
  const R = rng(seed + 9);
  const inGap = (n, box) => Array.from({ length: n }, () => ({ x: box[0] + R() * (box[2] - box[0]), y: box[1] + R() * (box[3] - box[1]), a: (R() - 0.5) * 180, s: 0.8 + R() * 0.4, k: R(), seed: Math.floor(R() * 1e6) }));
  const G = [330, 92, 470, 362];
  return {
    rows, VY, fibres, cells,
    rbcs: inGap(70, [340, 110, 460, 340]).map((c) => ({ ...c, x: CX + (c.x - CX) * (0.4 + 0.6 * c.k), y: VY + (c.y - VY) * (0.25 + 0.75 * c.k) })),
    platelets: inGap(22, [350, 130, 450, 320]),
    fibrin: inGap(16, [345, 110, 455, 340]),
    neutros: inGap(11, [345, 105, 455, 345]),
    macros: inGap(6, [350, 115, 450, 335]),
    debris: inGap(12, [345, 110, 455, 340]),
    fibros: inGap(14, G),
    scar: inGap(26, G),
    vesselSprouts: [
      { from: [CX - 46, VY], pts: [[CX - 46, VY], [CX - 30, VY - 40], [CX - 6, VY - 92]] },
      { from: [CX + 46, VY], pts: [[CX + 46, VY], [CX + 26, VY + 46], [CX + 10, VY + 104]] },
      { from: [CX - 46, VY], pts: [[CX - 46, VY], [CX - 22, VY + 34], [CX + 14, VY + 52]] }
    ]
  };
}

/** Stress–strain inset (bottom-left): dot moves along toe → linear → yield → failure. */
function curveInset(g, u, injured) {
  const x0 = 18, y0 = 374, w = 168, h = 62;
  const gg = el("g", {}, g);
  el("rect", { x: x0, y: y0, width: w, height: h, rx: 6, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.15) }, gg);
  const ax = x0 + 16, ay = y0 + h - 12, aw = w - 26, ah = h - 20;
  el("path", { d: `M${ax},${ay - ah} L${ax},${ay} L${ax + aw},${ay}`, stroke: col("stage-ink-2"), "stroke-width": 1, fill: "none" }, gg);
  const curve = (s) => { // s 0..1 strain → load 0..1
    if (s < 0.22) return 0.35 * (s / 0.22) ** 2 * 0.6;
    if (s < 0.62) return 0.21 + ((s - 0.22) / 0.4) * 0.62;
    if (s < 0.8) return 0.83 + Math.sin(((s - 0.62) / 0.18) * Math.PI / 2) * 0.12;
    return 0.95 * (1 - ease((s - 0.8) / 0.2, "in")) + 0.04;
  };
  const pts = []; for (let i = 0; i <= 40; i++) { const s = i / 40; pts.push([ax + s * aw, ay - curve(s) * ah]); }
  el("rect", { x: ax + 0.62 * aw, y: ay - ah, width: 0.38 * aw, height: ah, fill: col("fx-injury", 0.12) }, gg);
  el("path", { d: smoothPath(pts), stroke: col("stage-ink"), "stroke-width": 1.6, fill: "none" }, gg);
  const [dx, dy] = [ax + u * aw, ay - curve(u) * ah];
  el("circle", { cx: dx, cy: dy, r: 4, fill: col(injured ? "fx-injury" : "fx-force"), stroke: col("stage-bg"), "stroke-width": 1 }, gg);
  const t = (x, y, s, c, a = "start") => el("text", { x, y, "font-size": 10, fill: c || col("stage-ink-2"), "text-anchor": a, "font-family": "system-ui, sans-serif", text: s }, gg);
  t(ax + 0.02 * aw, ay - 0.42 * ah, "toe");
  t(ax + 0.36 * aw, ay - 0.16 * ah, "linear");
  t(ax + 0.82 * aw, ay - ah * 0.72, "failure", col("fx-injury"), "middle");
  t(ax - 4, ay - ah + 6, "load", col("stage-ink-2"), "end").setAttribute("transform", `rotate(-90 ${ax - 4} ${ay - ah + 6})`);
  t(ax + aw, ay + 10, "strain", col("stage-ink-2"), "end");
}

export function makeAcuteCollagen(cfg) {
  const C = {
    id: "ligament", tint: "anat-ligament", fibre: "anat-ligament", edge: "anat-ligament-edge", cellKind: "fibroblast",
    cellLabel: "Fibroblast", fibreLabel: "Type I collagen bundles\n(crimped, aligned)", fibreWidth: 7, cellsPerRow: 5,
    wavelength: 30, amplitude: 4.5, crimpRegister: false, scale: "≈ 50 µm", ...cfg
  };
  const geo = geometry(C.id === "tendon" ? 2 : 1, C);
  const fibreCol = () => col(C.fibre), edgeCol = () => mix(C.edge, "stage-bg", 0.3);

  /** Draw the native fibres. mode: { crimp, stretch, broken: fn(fib) → null | {l, r, fray} } */
  function fibres(g, { crimp = 1, stretch = 0, broken = null, dim = 1, phaseShift = 0 }) {
    for (const fb of geo.fibres) {
      const sx = (x) => CX + (x - CX) * (1 + stretch);
      const common = { crimp, type: "I", width: fb.w * (1 - stretch * 2), wavelength: C.wavelength * (1 + stretch), amplitude: C.amplitude,
        phase: fb.phase + phaseShift, seed: fb.seed, color: fibreCol(), edge: edgeCol(), opacity: dim };
      const b = broken ? broken(fb) : null;
      if (!b) { collagenFibre(g, [[sx(X0), fb.y], [sx(X1), fb.y]], common); continue; }
      const fr = b.fray ?? 0.8;
      collagenFibre(g, [[sx(X0), fb.y], [b.l, fb.y + (b.dyL || 0)]], { ...common, crimp: b.crimpL ?? crimp, frayEnd: fr, frayLength: b.frayLength });
      collagenFibre(g, [[b.r, fb.y + (b.dyR || 0)], [sx(X1), fb.y]], { ...common, crimp: b.crimpR ?? crimp, frayStart: fr, frayLength: b.frayLength, seed: fb.seed + 1 });
    }
  }
  function cells(g, { stretch = 0, avoidGap = 0, kind = C.cellKind, dead = 0, opacity = 1 }) {
    for (const c of geo.cells) {
      const x = CX + (c.x - CX) * (1 + stretch);
      if (avoidGap && Math.abs(x - CX) < avoidGap) continue;
      drawCell(g, kind, x, c.y, (C.cellKind === "tenocyte" ? 7.5 : 7) * c.s, { aspect: 1 - stretch * 4, seed: c.seed, dead, opacity });
    }
  }
  const ruptureEnds = (amt, fray = 1, crimpBack = 0.8) => (fb) => {
    const k = amt;
    return { l: fb.bx - 4 - fb.recL * k, r: fb.bx + 4 + fb.recR * k, fray: fray * (0.4 + 0.6 * k), crimpL: crimpBack * k, crimpR: crimpBack * k,
      dyL: (fb.i % 2 ? 2 : -2) * k, dyR: (fb.i % 3 ? -2 : 2) * k };
  };
  const vessel = (g, o = {}) => capillary(g, [[X0, geo.VY], [CX - 120, geo.VY + 3], [CX + 120, geo.VY - 3], [X1, geo.VY]], { width: 12, seed: 5, ...o });
  const vTear = (k) => ({ at: 0.5, gap: 8 + 84 * k });

  function haematoma(g, k, { dilute = false } = {}) {
    if (k <= 0.01) return;
    const R = rng(77);
    const rx = 30 + 52 * k, ry = 50 + 110 * k;
    el("path", { d: blobPath(R, CX, geo.VY, rx, { ry, n: 12, irregular: 0.18 }), fill: dilute ? mix("anat-fluid", "fx-bleed", 0.35, 0.3) : col("fx-bleed", 0.5) }, g);
  }
  function rbcs(g, k, { dilute = false, keep = 1 } = {}) {
    const n = Math.round(geo.rbcs.length * k * keep);
    for (let i = 0; i < n; i++) {
      const c = geo.rbcs[i];
      const spread = dilute ? 1.5 : 1;
      const x = CX + (c.x - CX) * spread, y = geo.VY + (c.y - geo.VY) * Math.min(1, k * 1.3) * (dilute ? 1.1 : 1);
      drawCell(g, "rbc", x, y, 5.6 * c.s, { seed: c.seed, opacity: dilute ? 0.75 : 1, edge: c.k > 0.8 });
    }
  }
  function clot(g, k, { dilute = false } = {}) {
    if (k <= 0.02) return;
    const fibN = Math.round(geo.fibrin.length * k * (dilute ? 0.3 : 1));
    for (let i = 0; i < fibN; i++) {
      const a = geo.fibrin[i], b = geo.fibrin[(i * 7 + 3) % geo.fibrin.length];
      el("path", { d: `M${f(a.x)},${f(a.y)} Q${f((a.x + b.x) / 2 + 12)},${f((a.y + b.y) / 2)} ${f(b.x)},${f(b.y)}`, stroke: mix("anat-fat", "stage-ink", 0.5, 0.55), "stroke-width": 1.1, fill: "none" }, g);
    }
    const pn = Math.round(geo.platelets.length * k * (dilute ? 0.35 : 1));
    for (let i = 0; i < pn; i++) { const c = geo.platelets[i]; drawCell(g, "platelet", c.x, c.y, 4, { activated: clamp(k * 1.5 - 0.2), seed: c.seed }); }
  }
  function synovialCap(g, k) { // synovial lining over the stump ends (intra-articular)
    if (k <= 0.01) return;
    for (const side of [-1, 1]) {
      const pts = geo.fibres.map((fb) => [side < 0 ? fb.bx - 4 - fb.recL - 14 : fb.bx + 4 + fb.recR + 14, fb.y]);
      const d = smoothPath(pts);
      el("path", { d, stroke: mix("anat-capsule", "stage-ink", 0.3, 0.75 * k), "stroke-width": 9, fill: "none", "stroke-linecap": "round" }, g);
      pts.forEach(([x, y], i) => { if (i % 2) drawCell(g, "fibroblast", x, y, 5, { angle: 90, opacity: k, fill: mix("anat-capsule", "stage-ink", 0.5) }); });
    }
  }
  function scarFibres(g, { n, len = 1, order = 0, typeI = 0, region = 1, opacity = 1 }) {
    for (let i = 0; i < n; i++) {
      const s = geo.scar[i];
      const row = geo.fibres[i % geo.fibres.length];
      const cx = lerp(s.x, CX + (s.x - CX) * 0.3, order), cy = lerp(s.y, row.y, ease(order));
      const ang = (lerp(s.a, s.a * 0.04, ease(order)) * Math.PI) / 180;
      const L = lerp(30 + s.k * 50, row.recL + row.recR + 40, ease(order)) * len * region;
      const dx = Math.cos(ang) * L / 2, dy = Math.sin(ang) * L / 2;
      const w = lerp(2, 5.2, typeI);
      const c = typeI > 0.01 ? mix("fx-heal", C.fibre, 0.35 + typeI * 0.5) : undefined;
      collagenFibre(g, [[cx - dx, cy - dy], [cx + dx, cy + dy]], { type: typeI > 0.5 ? "I" : "III", width: w, crimp: lerp(0.9, 0.3, order), aligned: lerp(0.2, 1, order), seed: s.seed, color: c,
        edge: typeI > 0.5 ? mix("fx-heal", "stage-bg", 0.55) : undefined, opacity, wavelength: lerp(16, 26, typeI), amplitude: lerp(3, 2.5, typeI), highlight: false });
    }
  }
  function loadArrows(g, k, { label: lab = "Load", size = 1 } = {}) {
    if (k <= 0.01) return;
    const L = (28 + 24 * size) * k;
    arrow(g, 92, 66, 92 - L, 66, { width: 4.5, head: 13, label: lab, labelPos: "start", opacity: clamp(k * 1.5) });
    arrow(g, 708, 66, 708 + L, 66, { width: 4.5, head: 13, opacity: clamp(k * 1.5) });
  }
  const gapGlow = (g, k) => { if (k > 0.01) el("ellipse", { cx: CX, cy: geo.VY, rx: 90, ry: 175, fill: radial(g, "lig-gapglow", [[0, col("fx-injury", 0.28)], [1, col("fx-injury", 0)]]), opacity: k }, g); };

  function render(g, { stage, progress: p, variant }) {
    const ia = variant === "intra-articular";
    field(g, { tint: C.tint, tintAmount: 0.06 });
    switch (stage) {
      case "healthy": default: {
        vessel(g, { flow: p * 0.4 });
        fibres(g, { crimp: 1 - 0.06 * wave(p, 1), phaseShift: 0 });
        cells(g, {});
        label(g, 612, 412, C.fibreLabel, { to: [600, geo.rows[9] + 3], anchor: "start" });
        const c = geo.cells.find((q) => q.x > 200 && q.x < 330 && q.y > geo.rows[7]) || geo.cells[20];
        label(g, 200, 412, C.cellLabel, { to: [c.x, c.y], anchor: "middle" });
        label(g, 400, 76, "Capillary (sparse blood supply)", { to: [470, geo.VY - 5], anchor: "middle", size: 13, opacity: 0.9 });
        break;
      }
      case "loaded": {
        const k = ease(p), st = 0.025 * k;
        vessel(g, { flow: 0.4 + p * 0.4 });
        fibres(g, { crimp: lerp(1, 0.05, k), stretch: st });
        cells(g, { stretch: st });
        loadArrows(g, 0.3 + 0.7 * k, { label: "Tensile load" });
        curveInset(g, lerp(0.02, 0.5, k), false);
        label(g, 610, 412, k < 0.5 ? "Crimp flattens (toe region)" : "Fibres straight — elastic\n(linear) region", { to: [600, geo.rows[9]], anchor: "start" });
        break;
      }
      case "overload": {
        const k = ease(p), st = 0.03 + 0.012 * k;
        vessel(g, { flow: 0.8 });
        fibres(g, { crimp: 0, stretch: st, broken: (fb) => fb.over && k > fb.i / 30 ? { l: fb.ox - 2 - 9 * k + fb.oxSlide * 4 * k, r: fb.ox + 2 + 9 * k + fb.oxSlide * 4 * k, fray: 0.45 * k, frayLength: 16, dyL: -1.5 * k, dyR: 1.5 * k } : null });
        cells(g, { stretch: st });
        for (const fb of geo.fibres) if (fb.over && k > fb.i / 30) el("circle", { cx: fb.ox, cy: fb.y, r: 9 + 4 * k, fill: radial(g, "lig-spark", [[0, col("fx-injury", 0.7)], [1, col("fx-injury", 0)]]), opacity: 0.4 + 0.6 * wave(p, 2, fb.i / 7) }, g);
        loadArrows(g, 1, { label: "Excess load", size: 1.3 });
        curveInset(g, lerp(0.6, 0.8, k), true);
        const fb = geo.fibres.filter((q) => q.over && q.i >= 6)[0] || geo.fibres[8];
        label(g, 640, 412, "Fibrils slide & fail", { to: [fb.ox, fb.y], anchor: "middle" });
        label(g, 300, 412, "Intact fibres take more load", { anchor: "middle", size: 13, color: col("stage-ink-2") });
        break;
      }
      case "failure": {
        const k = ease(p, "out");
        gapGlow(g, 1 - 0.4 * k);
        vessel(g, { torn: vTear(k), flow: 0.2, leaky: k });
        fibres(g, { crimp: 0, broken: ruptureEnds(k, 1, 0.8) });
        cells(g, { avoidGap: 30 + 40 * k });
        loadArrows(g, 1 - k, { label: "Load", size: 1.3 });
        curveInset(g, lerp(0.82, 1, k), true);
        label(g, 560, 412, "Complete rupture: fibre ends\nrecoil into frayed 'mop ends'", { to: [geo.fibres[8].bx + geo.fibres[8].recR * k + 10, geo.fibres[8].y], anchor: "start" });
        label(g, 300, 76, "Torn capillary", { to: [CX - 10 - 40 * k, geo.VY], anchor: "middle", opacity: fade(0.2, 0.6, p) });
        break;
      }
      case "haemorrhage": {
        vessel(g, { torn: vTear(1), flow: 0.2 });
        haematoma(g, ease(p, "out") * (ia ? 1.15 : 1), { dilute: ia });
        fibres(g, { crimp: 0, broken: ruptureEnds(1, 1, 0.8) });
        cells(g, { avoidGap: 70 });
        rbcs(g, 0.15 + 0.85 * ease(p), { dilute: ia, keep: ia ? 0.55 : 1 });
        clot(g, fade(0.25, 1, p), { dilute: ia });
        label(g, 170, 76, "Torn capillary bleeds", { to: [CX - 50, geo.VY], anchor: "middle" });
        if (ia) label(g, 560, 412, "Synovial fluid dilutes the clot —\nno stable scaffold forms", { to: [CX + 40, geo.rows[9]], anchor: "start" });
        else {
          label(g, 590, 412, "Platelets + fibrin form a clot", { to: [geo.platelets[3].x, geo.platelets[3].y], anchor: "start", opacity: fade(0.3, 0.6, p) });
          label(g, 200, 412, "Red blood cells", { to: [geo.rbcs[5].x, geo.rbcs[5].y], anchor: "middle" });
        }
        break;
      }
      case "inflammation": {
        vessel(g, { torn: vTear(1), flow: 0.3, leaky: 0.5 });
        haematoma(g, ia ? 1.1 : 1, { dilute: ia });
        el("ellipse", { cx: CX, cy: geo.VY, rx: 150, ry: 190, fill: col("fx-oedema"), opacity: 0.6 }, g);
        fibres(g, { crimp: 0, broken: ruptureEnds(1, 1, 0.8) });
        cells(g, { avoidGap: 70 });
        rbcs(g, 1, { dilute: ia, keep: lerp(ia ? 0.5 : 0.9, 0.25, p) });
        clot(g, ia ? 0.4 : 1 - 0.5 * p, { dilute: ia });
        // debris (collagen fragments) being cleared
        const nd = Math.round(geo.debris.length * (1 - ease(p) * 0.85));
        for (let i = 0; i < nd; i++) { const d = geo.debris[i]; el("path", { d: `M${f(d.x - 7)},${f(d.y)} q4,-3 7,0 t7,0`, stroke: mix(C.fibre, "stage-bg", 0.3), "stroke-width": 2.2, fill: "none", transform: `rotate(${f(d.a)} ${f(d.x)} ${f(d.y)})` }, g); }
        // neutrophils first (migrate out of the vessel), then macrophages
        const nk = fade(0, 0.25, p) * (1 - fade(0.55, 0.95, p));
        geo.neutros.forEach((c, i) => {
          const m = clamp(p * 3 - i * 0.12);
          drawCell(g, "neutrophil", lerp(CX + (i % 2 ? 50 : -50), c.x, m), lerp(geo.VY, c.y, m), 8.5, { seed: c.seed, opacity: nk, phase: p });
        });
        const mk = fade(0.3, 0.7, p);
        geo.macros.forEach((c, i) => drawCell(g, "macrophage", c.x, c.y + (i % 2 ? 1 : -1) * 6 * p, 15, { seed: c.seed, opacity: mk, phase: p * 0.6, engulf: 0.4 + 0.6 * p }));
        label(g, 180, 412, "Neutrophils arrive first", { to: [geo.neutros[2].x, geo.neutros[2].y], anchor: "middle", opacity: nk });
        label(g, 600, 412, "Macrophages clear debris\n& release growth factors", { to: [geo.macros[1].x, geo.macros[1].y], anchor: "start", opacity: mk });
        label(g, 640, 76, "Oedema", { anchor: "middle", size: 13, color: col("anat-fluid") });
        break;
      }
      case "proliferation": {
        const k = ease(p);
        if (ia) {
          vessel(g, { torn: vTear(1), flow: 0.3 });
          el("ellipse", { cx: CX, cy: geo.VY, rx: 70, ry: 170, fill: mix("anat-fluid", "stage-bg", 0.5, 0.25) }, g);
          fibres(g, { crimp: 0, broken: ruptureEnds(1, lerp(1, 0.55, k), 0.8) });
          synovialCap(g, fade(0, 0.6, p));
          cells(g, { avoidGap: 70 });
          geo.fibros.slice(0, 10).forEach((c, i) => { const side = i % 2 ? 1 : -1; drawCell(g, "fibroblast", CX + side * (78 + (c.k * 30)), c.y, 7, { angle: c.a * 0.3, seed: c.seed, opacity: fade(0.1, 0.5, p) }); });
          label(g, 560, 412, "Synovial layer caps each stump —\nno bridging tissue forms", { to: [geo.fibres[8].bx + geo.fibres[8].recR + 14, geo.fibres[8].y], anchor: "start" });
          label(g, 400, 76, "Gap stays filled with synovial fluid", { anchor: "middle", size: 13, color: col("anat-fluid") });
          break;
        }
        vessel(g, { torn: vTear(1 - 0.3 * k), flow: 0.3 + p * 0.3 });
        haematoma(g, 0.9 - 0.6 * k);
        geo.vesselSprouts.forEach((s, i) => capillary(g, s.pts.map((q, j) => (j === 0 ? q : [lerp(s.pts[0][0], q[0], fade(i * 0.15, 0.7 + i * 0.1, p)), lerp(s.pts[0][1], q[1], fade(i * 0.15, 0.7 + i * 0.1, p))])), { width: 8, seed: 40 + i, rbcs: 2, flow: p }));
        fibres(g, { crimp: 0, broken: ruptureEnds(1, lerp(1, 0.5, k), 0.7) });
        scarFibres(g, { n: Math.round(6 + 18 * k), len: 0.5 + 0.5 * k });
        cells(g, { avoidGap: 70 });
        geo.macros.slice(0, 3).forEach((c) => drawCell(g, "macrophage", c.x, c.y, 13, { seed: c.seed, opacity: 1 - fade(0, 0.5, p) }));
        geo.fibros.slice(0, Math.round(5 + 9 * k)).forEach((c) => drawCell(g, "fibroblast", c.x, c.y, 7.5, { angle: c.a, seed: c.seed, phase: p }));
        label(g, 180, 412, "Fibroblasts multiply", { to: [geo.fibros[1].x, geo.fibros[1].y], anchor: "middle" });
        label(g, 590, 412, "Disorganised type III collagen", { to: [geo.scar[4].x, geo.scar[4].y], anchor: "start", opacity: fade(0.1, 0.4, p) });
        label(g, 600, 76, "New capillaries sprout", { to: [CX - 6, geo.VY - 92 * fade(0, 0.7, p)], anchor: "middle", opacity: fade(0.2, 0.5, p) });
        break;
      }
      case "remodelling": {
        const k = ease(p);
        if (ia) {
          el("ellipse", { cx: CX, cy: geo.VY, rx: 90 + 30 * k, ry: 170, fill: mix("anat-fluid", "stage-bg", 0.5, 0.25) }, g);
          vessel(g, { torn: vTear(1.3), flow: 0.3 });
          const more = (fb) => { const e = ruptureEnds(1, 0.4, 0.9)(fb); return { ...e, l: e.l - 30 * k, r: e.r + 30 * k }; };
          fibres(g, { crimp: 0, broken: more });
          for (const side of [-1, 1]) {
            const pts = geo.fibres.map((fb) => [side < 0 ? fb.bx - 4 - fb.recL - 30 * k - 12 : fb.bx + 4 + fb.recR + 30 * k + 12, fb.y]);
            el("path", { d: smoothPath(pts), stroke: mix("anat-capsule", "stage-ink", 0.3, 0.75), "stroke-width": 10, fill: "none", "stroke-linecap": "round" }, g);
          }
          cells(g, { avoidGap: 90 });
          label(g, 560, 412, "Stumps retract and round off —\nno functional bridge", { to: [geo.fibres[9].bx + geo.fibres[9].recR + 30 * k + 16, geo.fibres[9].y], anchor: "start" });
          label(g, 210, 412, "Stability must come from\nmuscle or a graft", { anchor: "middle", size: 13, color: col("stage-ink-2") });
          break;
        }
        vessel(g, { flow: 0.6 + p * 0.3 });
        geo.vesselSprouts.forEach((s, i) => capillary(g, s.pts, { width: 8, seed: 40 + i, rbcs: 1, opacity: 1 - fade(0, 0.8, p) }));
        // stumps bridged — native fibres outside the scar zone, scar fibres inside
        fibres(g, { crimp: lerp(0.4, 0.75, k), broken: (fb) => ({ l: fb.bx - 4 - fb.recL, r: fb.bx + 4 + fb.recR, fray: 0.25 * (1 - k), crimpL: lerp(0.4, 0.75, k), crimpR: lerp(0.4, 0.75, k) }) });
        scarFibres(g, { n: 24, order: k, typeI: fade(0.15, 0.85, p), len: 1 });
        cells(g, { avoidGap: 70 });
        geo.fibros.slice(0, Math.round(14 - 9 * k)).forEach((c, i) => {
          const row = geo.fibres[i % 12];
          drawCell(g, "fibroblast", c.x, lerp(c.y, row.y + 12, k), 7, { angle: lerp(c.a, 0, k), seed: c.seed });
        });
        loadArrows(g, 0.5 + 0.5 * wave(p, 2), { label: "Graded loading" });
        label(g, 600, 412, "Type III → type I collagen,\nrealigning along the line of load", { to: [CX + 20, geo.fibres[8].y], anchor: "start" });
        label(g, 200, 412, "Scar stays weaker than native\nfor months", { anchor: "middle", size: 13, color: col("stage-ink-2"), opacity: fade(0.3, 0.7, p) });
        break;
      }
    }
  }
  return { id: C.id, scale: C.scale, render, _geo: geo };
}

const ligament = makeAcuteCollagen({ id: "ligament" });
export default ligament;
