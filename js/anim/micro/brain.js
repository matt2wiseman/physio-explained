/**
 * Micro module: BRAIN — neurometabolic cascade of concussion (calm, schematic; no gore). OWNER: A9.
 * Layout: neuron soma (left) → axon with membrane ion channels / Na⁺-K⁺-ATPase pumps, microtubules and mitochondria →
 * presynaptic terminal → postsynaptic dendrite (right). Capillary below (cerebral blood flow). Ion key top-left;
 * gauge panel top-right (ATP · glucose demand · blood flow).
 *   healthy → impact (rapid acceleration–deceleration jolts the tissue) → axonal-stretch (axon elongates & thins,
 *   mechanoporation of the membrane, microtubule disruption) → ionic-flux (K⁺ efflux, Na⁺/Ca²⁺ influx, indiscriminate
 *   glutamate release) → energy-crisis (pumps drive glycolysis & ATP demand up while cerebral blood flow falls;
 *   mitochondria load with Ca²⁺; ATP falls) → recovery (gradients restored, flow and ATP normalise, cytoskeleton repairs).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, capillary, smoothPath, blobPath, radial, f } from "./index.js";

const ORDER = ["healthy", "impact", "axonal-stretch", "ionic-flux", "energy-crisis", "recovery"];
const AX0 = 160, AX1 = 520, AY = 214, AH = 21, BX = 548, DX = 618;
const PUMPS = [214, 330, 446], KCH = [262, 378, 494], CACH = [292, 410];
const ION = { K: "anat-vein", Na: "fx-force", Ca: "fx-pain", Glu: "fx-heal" };

const G = (() => {
  const r = rng("brain-geo");
  const kIn = Array.from({ length: 20 }, (_, i) => ({ x: lerp(AX0 + 20, AX1 - 20, (i + r() * 0.8) / 20), y: AY + (r() - 0.5) * AH * 1.1, d: r(), side: r() < 0.5 ? -1 : 1 }));
  const naOut = Array.from({ length: 22 }, (_, i) => ({ x: lerp(AX0, AX1, (i + r()) / 22), side: r() < 0.5 ? -1 : 1, o: 16 + r() * 34, d: r() }));
  const caOut = Array.from({ length: 12 }, (_, i) => ({ x: lerp(AX0 + 20, AX1, (i + r()) / 12), side: r() < 0.5 ? -1 : 1, o: 18 + r() * 30, d: r() }));
  const glu = Array.from({ length: 16 }, () => ({ a: r() * Math.PI * 2, rr: r(), d: r(), y: (r() - 0.5) * 40 }));
  const mito = [[250, -6], [372, 6], [470, -4]];
  const dendr = [[[100, 170], [70, 120], [40, 96]], [[96, 186], [40, 170], [16, 150]], [[110, 250], [70, 290], [30, 300]], [[128, 256], [126, 300], [100, 340]], [[132, 166], [150, 118], [176, 96]]];
  return { kIn, naOut, caOut, glu, mito, dendr };
})();

function params(stage, p) {
  const s = { shake: 0, wave: 0, stretch: 0, pores: 0, mt: 0, flux: 0, glu: 0, pump: 0.2, atp: 0.9, demand: 0.35, flow: 0.8, mitoK: 0, swell: 0 };
  switch (stage) {
    case "impact": Object.assign(s, { shake: Math.sin(p * Math.PI * 7) * Math.exp(-3.2 * p), wave: p, stretch: 0.35 * fade(0.2, 0.9, p) }); break;
    case "axonal-stretch": { const k = ease(seg(p, 0, 0.7)); Object.assign(s, { stretch: lerp(0.35, 1, k), pores: k, mt: k, swell: 0.3 * fade(0.6, 1, p) }); break; }
    case "ionic-flux": { const k = ease(seg(p, 0, 0.85)); Object.assign(s, { stretch: lerp(0.8, 0.25, k), pores: 1, mt: 1, swell: 0.6, flux: k, glu: k, pump: lerp(0.3, 0.7, k), atp: lerp(0.85, 0.65, k), demand: lerp(0.4, 0.75, k), flow: lerp(0.78, 0.62, k), mitoK: 0.3 * k }); break; }
    case "energy-crisis": { const k = ease(seg(p, 0, 0.85)); Object.assign(s, { stretch: 0.2, pores: lerp(1, 0.6, k), mt: 1, swell: 0.7, flux: 1, glu: lerp(1, 0.6, k), pump: 1, atp: lerp(0.62, 0.22, k), demand: lerp(0.78, 0.95, k), flow: lerp(0.6, 0.32, k), mitoK: lerp(0.4, 1, k) }); break; }
    case "recovery": { const k = ease(p); Object.assign(s, { stretch: 0.2 * (1 - k), pores: 0.6 * (1 - k), mt: 1 - 0.85 * k, swell: 0.7 * (1 - k), flux: 1 - k, glu: 0.5 * (1 - k), pump: lerp(1, 0.25, k), atp: lerp(0.25, 0.88, k), demand: lerp(0.9, 0.38, k), flow: lerp(0.35, 0.78, k), mitoK: 1 - k }); break; }
    default: break;
  }
  return s;
}

/* axon geometry */
function axonHalf(s, x) {
  const thin = 1 - 0.38 * s.stretch * Math.exp(-(((x - 340) / 120) ** 2));
  const bead = s.swell * 0.45 * (Math.exp(-(((x - 300) / 16) ** 2)) + Math.exp(-(((x - 420) / 16) ** 2)));
  return AH * (thin + bead);
}
function axonY(s, x) { return AY + s.swell * 4 * Math.sin((x - AX0) / 34); }

function neuron(g, s) {
  const soma = mix("anat-brain", "stage-bg", 0.18), edge = col("anat-brain-deep");
  G.dendr.forEach((pts, i) => {
    el("path", { d: smoothPath(pts), stroke: soma, "stroke-width": 9 - i * 0.6, fill: "none", "stroke-linecap": "round" }, g);
    const [x, y] = pts[2]; el("path", { d: `M${x},${y} l${-14 + i * 6},${-12 + i * 5}`, stroke: soma, "stroke-width": 4, "stroke-linecap": "round" }, g);
  });
  el("path", { d: blobPath(rng("soma"), 118, 212, 46, { n: 9, irregular: 0.12, ry: 44 }), fill: soma, stroke: edge, "stroke-width": 1.6 }, g);
  el("circle", { cx: 112, cy: 210, r: 17, fill: mix("anat-vein", "anat-brain-deep", 0.45) }, g);
  el("circle", { cx: 116, cy: 206, r: 5, fill: mix("anat-vein", "stage-bg", 0.4) }, g);
  // axon hillock blending into the axon
  el("path", { d: `M150,${AY - 30} Q170,${AY - AH} 186,${AY - AH} L186,${AY + AH} Q170,${AY + AH} 150,${AY + 30}Z`, fill: soma }, g);
  void s;
}

function axon(g, s, p) {
  const T = [], B = [];
  for (let x = AX0 + 20; x <= AX1 + 4; x += 10) { const y = axonY(s, x), h = axonHalf(s, x); T.push([x, y - h]); B.push([x, y + h]); }
  const d = smoothPath([...T, ...B.slice().reverse()], true);
  el("path", { d, fill: mix("anat-brain", "stage-bg", 0.42), stroke: col("anat-brain"), "stroke-width": 3 }, g);
  // microtubules (parallel tracks) — broken & misaligned after stretch
  for (let k = -1; k <= 1; k++) {
    let dd = "";
    for (let x = AX0 + 30; x < AX1 - 6; x += 24) {
      const brk = s.mt * (Math.abs(x - 300) < 30 || Math.abs(x - 420) < 30 ? 1 : 0.25);
      const len = 20 * (1 - 0.6 * brk), off = brk * 4 * Math.sin(x + k * 3);
      const y = axonY(s, x) + k * axonHalf(s, x) * 0.42 + off;
      dd += `M${f(x)},${f(y)} l${f(len)},${f(brk * 3 * k)}`;
    }
    el("path", { d: dd, stroke: mix("anat-brain", "stage-ink", 0.55, 0.65), "stroke-width": 1.4, "stroke-linecap": "round", fill: "none" }, g);
  }
  // mitochondria (swell & load with Ca²⁺ in the energy crisis)
  G.mito.forEach(([x, dy]) => {
    const y = axonY(s, x) + dy, rx = 17 * (1 + 0.15 * s.mitoK), ry = 7 * (1 + 0.35 * s.mitoK);
    el("ellipse", { cx: x, cy: y, rx, ry, fill: mix("fx-inflame", "stage-bg", lerp(0.25, 0.55, s.mitoK)), stroke: mix("fx-inflame", "stage-ink", 0.2), "stroke-width": 1 }, g);
    el("path", { d: `M${x - 10},${f(y - ry * 0.6)} l0,${f(ry * 1.2)} M${x - 3},${f(y - ry * 0.7)} l0,${f(ry * 1.4)} M${x + 4},${f(y - ry * 0.7)} l0,${f(ry * 1.4)} M${x + 11},${f(y - ry * 0.6)} l0,${f(ry * 1.2)}`, stroke: mix("fx-inflame", "stage-ink", 0.35, 1 - 0.5 * s.mitoK), "stroke-width": 1 }, g);
    if (s.mitoK > 0.05) for (let i = 0; i < 4; i++) el("circle", { cx: x - 9 + i * 6, cy: y + (i % 2 ? 2 : -2), r: 1.8, fill: col(ION.Ca, s.mitoK) }, g);
  });
  // membrane pumps (Na⁺/K⁺-ATPase) — spin faster when working hard
  PUMPS.forEach((x, i) => {
    for (const side of [-1, 1]) {
      if (side === 1 && i === 1) continue;
      const y = axonY(s, x) + side * axonHalf(s, x);
      el("rect", { x: x - 9, y: y - 8, width: 18, height: 16, rx: 5, fill: mix("stage-accent", "stage-bg", 0.35), stroke: col("stage-accent"), "stroke-width": 1.2 }, g);
      const a = p * Math.PI * 2 * (0.5 + 4 * s.pump) + i;
      el("path", { d: `M${f(x + Math.cos(a) * 4.5)},${f(y + Math.sin(a) * 4.5)} A4.5,4.5 0 1 1 ${f(x + Math.cos(a + 4.4) * 4.5)},${f(y + Math.sin(a + 4.4) * 4.5)}`, stroke: col("stage-ink", 0.85), "stroke-width": 1.3, fill: "none" }, g);
    }
  });
  // K⁺ & Ca²⁺ channels
  const chan = (x, side, c, open) => {
    const y = axonY(s, x) + side * axonHalf(s, x), gap = 2 + 4 * open;
    el("rect", { x: x - gap - 5, y: y - 7, width: 5, height: 14, rx: 2, fill: col(c, 0.85) }, g);
    el("rect", { x: x + gap, y: y - 7, width: 5, height: 14, rx: 2, fill: col(c, 0.85) }, g);
  };
  KCH.forEach((x, i) => chan(x, i % 2 ? 1 : -1, ION.K, s.flux));
  CACH.forEach((x, i) => chan(x, i % 2 ? -1 : 1, ION.Ca, s.flux));
  // mechanopores in the stretched membrane
  if (s.pores > 0.02) [[320, -1], [356, 1], [404, -1]].forEach(([x, side]) => {
    const y = axonY(s, x) + side * axonHalf(s, x);
    el("ellipse", { cx: x, cy: y, rx: 6 * s.pores, ry: 3.2, fill: col("stage-bg"), stroke: col("fx-injury", 0.8 * s.pores), "stroke-width": 1.2 }, g);
  });
  // action potential in health (calm pulse)
  if (s.flux < 0.05 && s.stretch < 0.3) {
    const x = lerp(AX0 + 30, AX1 - 10, (p * 1.5) % 1);
    el("ellipse", { cx: x, cy: axonY(s, x), rx: 26, ry: 18, fill: radial(g, "br-ap", [[0, col("fx-highlight", 0.5)], [1, col("fx-highlight", 0)]]) }, g);
  }
}

function synapse(g, s, p) {
  // presynaptic terminal
  el("path", { d: `M${AX1 - 4},${AY - AH * 0.8} C${BX - 30},${AY - 28} ${BX - 10},${AY - 38} ${BX + 12},${AY - 32} C${BX + 34},${AY - 20} ${BX + 34},${AY + 20} ${BX + 12},${AY + 32} C${BX - 10},${AY + 38} ${BX - 30},${AY + 28} ${AX1 - 4},${AY + AH * 0.8}Z`,
    fill: mix("anat-brain", "stage-bg", 0.42), stroke: col("anat-brain"), "stroke-width": 3 }, g);
  // vesicles
  const nv = Math.round(7 - 4 * s.glu);
  for (let i = 0; i < nv; i++) {
    const a = (i / 7) * Math.PI * 2, x = BX + 2 + Math.cos(a) * 15, y = AY + Math.sin(a) * 17;
    el("circle", { cx: x, cy: y, r: 6, fill: mix("stage-bg", "fx-heal", 0.2), stroke: col("fx-heal", 0.8), "stroke-width": 1 }, g);
    el("circle", { cx: x, cy: y, r: 1.6, fill: col(ION.Glu) }, g);
  }
  // postsynaptic dendrite with glutamate (NMDA/AMPA) receptors
  el("path", { d: `M${DX},140 C${DX - 6},200 ${DX - 6},240 ${DX + 2},372 L${DX + 44},372 C${DX + 38},250 ${DX + 40},200 ${DX + 48},140 Z`, fill: mix("anat-brain", "stage-bg", 0.3), stroke: col("anat-brain"), "stroke-width": 3 }, g);
  for (const y of [AY - 24, AY - 8, AY + 8, AY + 24]) el("path", { d: `M${DX - 7},${y - 4} l6,4 l-6,4`, stroke: col(ION.Glu), "stroke-width": 2.2, fill: "none" }, g);
  // glutamate release into the cleft
  if (s.glu > 0.02) G.glu.forEach((q, i) => {
    const k = clamp(s.glu * 1.4 - q.d * 0.4), t = (p * 1.3 + q.d) % 1;
    const x = lerp(BX + 30, DX - 6, k * (0.4 + 0.6 * t)), y = AY + q.y * (0.5 + 0.5 * k);
    el("circle", { cx: x, cy: y, r: 2.4, fill: col(ION.Glu, clamp(k * 1.5)) }, g);
    void i;
  });
}

function ions(g, s, p) {
  // K⁺ inside → out (efflux)
  G.kIn.forEach((d, i) => {
    const k = clamp(s.flux * 1.3 - d.d * 0.5);
    const y0 = d.y + (axonY(s, d.x) - AY), out = axonY(s, d.x) + d.side * (axonHalf(s, d.x) + 18 + 22 * d.d);
    const jig = Math.sin(p * 12 + i) * 1.5;
    el("circle", { cx: d.x + jig, cy: lerp(y0, out, ease(k)), r: 3.2, fill: col(ION.K), stroke: col("stage-bg", 0.6), "stroke-width": 0.8 }, g);
  });
  // Na⁺ & Ca²⁺ outside → in (influx)
  const inward = (arr, c, r0, gain) => arr.forEach((d, i) => {
    const k = clamp(s.flux * gain - d.d * 0.5);
    const out = axonY(s, d.x) + d.side * (axonHalf(s, d.x) + d.o), inn = axonY(s, d.x) + d.side * axonHalf(s, d.x) * 0.45 * d.d;
    el("circle", { cx: d.x + Math.cos(p * 10 + i) * 1.4, cy: lerp(out, inn, ease(k)), r: r0, fill: col(c), stroke: col("stage-bg", 0.6), "stroke-width": 0.8 }, g);
  });
  inward(G.naOut, ION.Na, 3, 1.3);
  inward(G.caOut, ION.Ca, 3.4, 1.2);
}

function bloodFlow(g, s, p) {
  const w = lerp(10, 18, s.flow);
  capillary(g, [[-10, 330], [200, 322], [420, 338], [640, 326], [810, 334]], { width: w, seed: 7, flow: p * (0.15 + 0.9 * s.flow), rbcs: Math.round(6 + 12 * s.flow) });
}

function gauges(g, s, p) {
  const x0 = 586, y0 = 62, w = 202, h = 92;
  el("rect", { x: x0, y: y0, width: w, height: h, rx: 7, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.15) }, g);
  const rows = [["ATP", s.atp, s.atp > 0.6 ? "fx-heal" : s.atp > 0.4 ? "fx-force" : "fx-injury"], ["Glucose demand", s.demand, "fx-force"], ["Blood flow", s.flow, "anat-artery"]];
  rows.forEach(([name, v, c], i) => {
    const y = y0 + 22 + i * 26;
    el("text", { x: x0 + 10, y: y + 4, "font-size": 12, "font-weight": i === 0 ? 700 : 500, fill: col("stage-ink", i === 0 ? 1 : 0.8), text: name }, g);
    el("rect", { x: x0 + 104, y: y - 5, width: 88, height: 10, rx: 5, fill: col("stage-ink", 0.12) }, g);
    el("rect", { x: x0 + 104, y: y - 5, width: Math.max(8, 88 * v), height: 10, rx: 5, fill: col(c) }, g);
  });
  void p;
}

function key(g) {
  const items = [["K⁺", ION.K], ["Na⁺", ION.Na], ["Ca²⁺", ION.Ca], ["Glutamate", ION.Glu]];
  let x = 20;
  items.forEach(([t, c]) => {
    el("circle", { cx: x + 4, cy: 74, r: 4, fill: col(c) }, g);
    el("text", { x: x + 12, y: 78, "font-size": 12, fill: col("stage-ink", 0.85), text: t }, g);
    x += t.length * 7 + 30;
  });
}

function labels(g, stage, s, p) {
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to, ...o });
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      L(40, 360, "Neuron", [104, 248], { opacity: a });
      L(330, 128, "Axon (microtubules)", [300, AY - 6], { anchor: "middle", opacity: a });
      L(560, 300, "Synapse", [DX - 4, AY + 30], { anchor: "middle", opacity: a });
      L(300, 128, "Na⁺/K⁺ pumps & ion channels", [PUMPS[1], AY - AH - 6], { anchor: "middle", opacity: b });
      L(470, 372, "Capillary: cerebral blood flow", [440, 338], { anchor: "middle", opacity: b });
      break;
    }
    case "impact":
      L(330, 128, "Rapid acceleration–deceleration", null, { anchor: "middle", opacity: fade(0.05, 0.25, p), color: col("fx-force"), weight: 600 });
      break;
    case "axonal-stretch":
      L(330, 128, "Axon stretched and thinned", [340, AY - axonHalf(s, 340)], { anchor: "middle", opacity: fade(0.1, 0.35, p) });
      L(250, 300, "Membrane pores open", [356, AY + axonHalf(s, 356) + 2], { anchor: "middle", opacity: fade(0.4, 0.6, p) });
      L(470, 300, "Microtubules break", [420, AY + 8], { anchor: "middle", opacity: fade(0.6, 0.8, p) });
      break;
    case "ionic-flux":
      L(250, 128, "K⁺ efflux", [G.kIn[6].x, AY - 46], { anchor: "middle", opacity: fade(0.15, 0.35, p) });
      L(420, 128, "Na⁺ & Ca²⁺ influx", [CACH[1], AY - AH - 8], { anchor: "middle", opacity: fade(0.3, 0.5, p) });
      L(560, 300, "Glutamate release", [DX - 20, AY + 10], { anchor: "middle", opacity: fade(0.45, 0.65, p) });
      break;
    case "energy-crisis":
      L(250, 128, "Pumps burn ATP to\nrestore ion gradients", [PUMPS[0], AY - AH - 8], { anchor: "middle", opacity: fade(0.1, 0.3, p) });
      L(470, 300, "Mitochondria load\nwith Ca²⁺", [G.mito[2][0], AY + 10], { anchor: "middle", opacity: fade(0.35, 0.55, p) });
      L(230, 372, "Blood flow falls as demand rises", [200, 326], { anchor: "middle", opacity: fade(0.55, 0.75, p) });
      break;
    case "recovery":
      L(330, 128, "Ion gradients restored", [PUMPS[1], AY - AH - 6], { anchor: "middle", opacity: fade(0.15, 0.4, p) });
      L(470, 372, "Blood flow and ATP recover", [420, 338], { anchor: "middle", opacity: fade(0.45, 0.7, p) });
      break;
    default: break;
  }
}

export default {
  id: "brain",
  scale: "≈ 10 µm",
  labels: { "energy-crisis": "Energy crisis", "ionic-flux": "Ionic flux & glutamate" },
  render(g, { stage, progress = 0 }) {
    const p = clamp(progress);
    const s = params(ORDER.includes(stage) ? stage : "healthy", p);
    field(g, { tint: "anat-brain", tintAmount: 0.06 });
    // impact: calm pressure wave + damped jolt of the tissue
    if (s.wave > 0) for (let i = 0; i < 3; i++) {
      const r = 120 + (s.wave * 900) - i * 90;
      if (r > 0) el("circle", { cx: -60, cy: -40, r, fill: "none", stroke: col("fx-force", 0.35 * (1 - s.wave)), "stroke-width": 6 - i * 1.5 }, g);
    }
    const tissue = el("g", { transform: s.shake ? `translate(${f(14 * s.shake)},${f(6 * s.shake)})` : undefined }, g);
    bloodFlow(tissue, s, p);
    neuron(tissue, s);
    synapse(tissue, s, p);
    axon(tissue, s, p);
    ions(tissue, s, p);
    if (stage === "axonal-stretch" || stage === "impact") {
      const k = stage === "impact" ? fade(0.4, 0.9, p) : fade(0.6, 0.2, p) * 0.9 + 0.1;
      arrow(g, 290, 270, 220, 270, { width: 4, head: 11, opacity: k });
      arrow(g, 400, 270, 470, 270, { width: 4, head: 11, opacity: k });
    }
    if (stage === "impact") arrow(g, 40, 120, 110, 150, { width: 5, head: 14, opacity: fade(0, 0.15, p) * fade(0.8, 0.5, p) });
    key(g);
    gauges(g, s, p);
    labels(g, stage, s, p);
  }
};
