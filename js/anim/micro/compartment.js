/**
 * Micro module: COMPARTMENT PRESSURE (acute compartment syndrome; also chronic exertional). OWNER: A9.
 * View: transverse section of one muscle compartment — polygonal muscle fibres (peripheral nuclei, capillaries at the
 * fibre corners) and a neurovascular bundle (artery, thin-walled vein, nerve) inside an inelastic deep-fascial envelope.
 * Right column: pressure dial (mmHg, ≥ 30 mmHg shaded as the danger zone) and a capillary-perfusion bar.
 *   healthy → swelling (fibres swell, fluid leaks into the interstitium) → pressure-rise (the fascia cannot stretch, so
 *   pressure climbs) → venous-occlusion (low-pressure veins and venules collapse first; capillaries congest; the
 *   arteriovenous gradient falls) → ischaemia (capillary perfusion fails; fibres pale; nerve ischaemia → paraesthesia;
 *   arterial pulses may persist) → necrosis (irreversible fibre death after hours) → decompression (fasciotomy splits the
 *   fascia, contents bulge, pressure falls, perfusion returns to viable fibres; necrotic fibres do not recover).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, smoothPath, f } from "./index.js";

const ORDER = ["healthy", "swelling", "pressure-rise", "venous-occlusion", "ischaemia", "necrosis", "decompression"];
const CX = 290, CY = 212, RX = 236, RY = 136, SP = 34, RH = SP * 0.866;
const NVB = [418, 268], ART = [404, 282], VEN = [436, 286], NRV = [422, 250];
const NEC = [222, 160];

const G = (() => {
  const r = rng("comp-geo");
  const fibres = [];
  for (let row = -6; row <= 6; row++) for (let col = -8; col <= 8; col++) {
    const x = CX + col * SP + (row % 2 ? SP / 2 : 0), y = CY + row * RH;
    if (((x - CX) / (RX - 22)) ** 2 + ((y - CY) / (RY - 20)) ** 2 > 1) continue;
    if (Math.hypot(x - NVB[0], y - NVB[1]) < 40) continue;
    const jit = Array.from({ length: 6 }, () => (r() - 0.5) * 4);
    fibres.push({ x, y, jit, nuc: r() * 6, k: r(), nec: Math.hypot(x - NEC[0], y - NEC[1]) / 110 + r() * 0.25 });
  }
  return { fibres };
})();

function params(stage, p) {
  const s = { swell: 0, fluid: 0, press: 8, venous: 0, isch: 0, nec: 0, open: 0, perf: 1, nerve: 0 };
  switch (stage) {
    case "swelling": { const k = ease(p); Object.assign(s, { swell: lerp(0.1, 0.7, k), fluid: lerp(0.1, 0.7, k), press: lerp(10, 22, k), perf: lerp(1, 0.85, k) }); break; }
    case "pressure-rise": { const k = ease(p); Object.assign(s, { swell: lerp(0.7, 1, k), fluid: lerp(0.7, 1, k), press: lerp(22, 38, k), perf: lerp(0.85, 0.6, k) }); break; }
    case "venous-occlusion": { const k = ease(p); Object.assign(s, { swell: 1, fluid: 1, press: lerp(38, 46, k), venous: lerp(0.15, 1, k), perf: lerp(0.6, 0.35, k) }); break; }
    case "ischaemia": { const k = ease(p); Object.assign(s, { swell: 1, fluid: 1, press: lerp(46, 55, k), venous: 1, isch: lerp(0.15, 1, k), perf: lerp(0.35, 0.1, k), nerve: k }); break; }
    case "necrosis": { const k = ease(p); Object.assign(s, { swell: 1, fluid: 1, press: lerp(55, 60, k), venous: 1, isch: 1, nec: lerp(0.1, 1, k), perf: 0.05, nerve: 1 }); break; }
    case "decompression": {
      const k = ease(seg(p, 0, 0.6)), k2 = ease(seg(p, 0.2, 0.9));
      Object.assign(s, { swell: lerp(1, 0.55, k2), fluid: lerp(1, 0.45, k2), press: lerp(60, 9, k), venous: 1 - k2, isch: 1 - k2, nec: 1, open: k, perf: lerp(0.05, 0.85, k2), nerve: 1 - k2 });
      break;
    }
    default: break;
  }
  return s;
}

const E = (a, ex = 0, ey = 0) => [CX + Math.cos(a) * (RX + ex), CY + Math.sin(a) * (RY + ey)];
function bulgeY(s, x, y) {   // contents herniate through the fasciotomy (top of the compartment)
  if (!s.open) return y;
  const w = clamp(1 - Math.abs(x - CX) / 150), h = clamp((CY + 40 - y) / (RY + 40));
  return y - s.open * 30 * w * h;
}

function compartment(g, s, p) {
  // interstitium / perimysium (fills with oedema fluid)
  el("ellipse", { cx: CX, cy: CY, rx: RX, ry: RY, fill: mix("anat-fascia", "stage-bg", 0.78) }, g);
  if (s.open > 0.02) el("ellipse", { cx: CX, cy: CY - RY + 4 - 4 * s.open, rx: 124 * s.open, ry: 28 * s.open, fill: mix("anat-fascia", "stage-bg", 0.78) }, g);
  el("ellipse", { cx: CX, cy: CY, rx: RX, ry: RY, fill: col("fx-oedema"), opacity: f(0.2 + 0.8 * s.fluid * (1 - 0.4 * s.open)) }, g);
  // fibres
  const R = lerp(15.6, 17.2, s.swell);
  const healthyC = col("anat-muscle"), paleC = mix("anat-muscle", "stage-ink", 0.5), necC = mix("anat-muscle-edge", "stage-bg", 0.45);
  G.fibres.forEach((fb, i) => {
    const x = fb.x, y = bulgeY(s, fb.x, fb.y);
    const necK = clamp((s.nec * 0.95 - fb.nec) * 3);
    const isch = s.isch * (0.75 + 0.25 * fb.k);
    const pts = []; for (let k = 0; k < 6; k++) { const a = Math.PI / 6 + (k * Math.PI) / 3; pts.push([x + Math.cos(a) * (R + fb.jit[k]), y + Math.sin(a) * (R + fb.jit[k])]); }
    const fill = necK > 0.5 ? necC : isch > 0.02 ? mix("anat-muscle", "stage-ink", 0.5 * isch) : mix("anat-muscle", "anat-muscle-light", 0.15 + 0.2 * fb.k);
    el("path", { d: smoothPath(pts, true), fill, stroke: necK > 0.5 ? col("anat-muscle-edge", 0.5) : col("anat-muscle-edge"), "stroke-width": 1.2, "stroke-dasharray": necK > 0.5 ? "4 3" : undefined }, g);
    // peripheral myonuclei (pyknotic / fragmented in necrosis)
    const a = fb.nuc, nx = x + Math.cos(a) * (R - 4), ny = y + Math.sin(a) * (R - 4);
    if (necK > 0.5) for (let j = 0; j < 3; j++) el("circle", { cx: nx + (j - 1) * 3, cy: ny + (j % 2) * 2, r: 1.1, fill: mix("anat-vein", "stage-bg", 0.4) }, g);
    else el("ellipse", { cx: nx, cy: ny, rx: 3.6, ry: 2, fill: NUCC(), transform: `rotate(${f((a * 180) / Math.PI + 90)} ${f(nx)} ${f(ny)})` }, g);
    // capillary at the fibre corner
    const qx = fb.x + SP / 2, qy = bulgeY(s, fb.x + SP / 2, fb.y + RH / 3);
    if (((qx - CX) / (RX - 14)) ** 2 + ((qy - CY) / (RY - 12)) ** 2 > 1) return;
    const squash = 1 - 0.55 * clamp((s.press - 20) / 30) * (1 - s.open);
    const cong = s.venous * (1 - s.isch);
    const perf = s.perf;
    el("ellipse", { cx: qx, cy: qy, rx: 3.6, ry: 3.6 * squash, fill: perf > 0.25 ? mix("anat-artery", "anat-vein", 0.55 * cong) : mix("anat-artery", "stage-bg", 0.75), stroke: col("stage-ink", 0.5), "stroke-width": 0.7, opacity: f(0.4 + 0.6 * Math.max(perf, cong)) }, g);
    void i; void healthyC; void paleC;
  });
  // neurovascular bundle
  const venFlat = clamp(s.venous * 1.1) * (1 - s.open * 0);
  el("circle", { cx: ART[0], cy: ART[1], r: 11, fill: mix("fx-bleed", "stage-bg", lerp(0.2, 0.5, s.isch)), stroke: col("anat-artery"), "stroke-width": 4 }, g);
  el("ellipse", { cx: VEN[0], cy: VEN[1], rx: 15 * (1 + 0.25 * venFlat), ry: Math.max(2.2, 13 * (1 - 0.82 * venFlat)), fill: mix("anat-vein", "stage-bg", 0.35), stroke: mix("anat-vein", "stage-ink", 0.25), "stroke-width": 1.6 }, g);
  if (s.nerve > 0.02) el("circle", { cx: NRV[0], cy: NRV[1], r: 18, fill: col("fx-pain", 0.25 * s.nerve * (0.6 + 0.4 * wave(p, 4))) }, g);
  el("circle", { cx: NRV[0], cy: NRV[1], r: 10, fill: col("anat-nerve"), stroke: col("anat-nerve-edge"), "stroke-width": 1.5 }, g);
  for (const [dx, dy] of [[-3, -3], [3, -2], [0, 3.5]]) el("circle", { cx: NRV[0] + dx, cy: NRV[1] + dy, r: 2.6, fill: "none", stroke: col("anat-nerve-edge", 0.8), "stroke-width": 1 }, g);
  // deep fascia (inelastic envelope) — split by fasciotomy in decompression
  const gap = s.open * 0.5, a0 = -Math.PI / 2 + gap, a1 = (3 * Math.PI) / 2 - gap;
  const arc = []; for (let i = 0; i <= 72; i++) arc.push(E(lerp(a0, a1, i / 72)));
  const d = smoothPath(arc, gap < 0.01);
  const taut = clamp((s.press - 15) / 30) * (1 - s.open);
  el("path", { d, fill: "none", stroke: mix("anat-fascia", "stage-bg", 0.1), "stroke-width": 12, "stroke-linecap": "round" }, g);
  el("path", { d, fill: "none", stroke: mix("anat-ligament-edge", "stage-bg", 0.2), "stroke-width": 1, "stroke-dasharray": "14 6", transform: "translate(0,-3)" }, g);
  if (taut > 0.02) el("path", { d, fill: "none", stroke: col("fx-force", 0.5 * taut), "stroke-width": 3 }, g);
  // pressure arrows (inward) while the envelope is closed
  const ak = clamp((s.press - 18) / 20) * (1 - s.open);
  if (ak > 0.03) for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.3, [x1, y1] = E(a, 30, 22), [x2, y2] = E(a, 9, 7);
    if (x1 > 560) continue;
    arrow(g, x1, y1, x2, y2, { width: 3, head: 9, opacity: ak * 0.9 });
  }
  // scalpel line for the fasciotomy
  if (s.open > 0.02) {
    const [x1, y1] = E(a1, 0, 0), [x2, y2] = E(a0, 0, 0);
    el("path", { d: `M${f(x1 - 4)},${f(y1 - 16)} L${f(x1 - 2)},${f(y1 + 8)} M${f(x2 + 4)},${f(y2 - 16)} L${f(x2 + 2)},${f(y2 + 8)}`, stroke: col("fx-heal"), "stroke-width": 2, "stroke-dasharray": "3 3" }, g);
  }
}
const NUCC = () => mix("anat-vein", "anat-brain-deep", 0.35);

function gauge(g, s) {
  const cx = 690, cy = 160, r = 60, vmax = 80;
  el("rect", { x: 572, y: 62, width: 218, height: 190, rx: 8, fill: col("stage-caption-bg"), stroke: col("stage-ink", 0.15) }, g);
  el("text", { x: cx, y: 80, "text-anchor": "middle", "font-size": 12.5, "font-weight": 600, fill: col("stage-ink", 0.9), text: "Compartment pressure" }, g);
  const A = (v) => Math.PI + (clamp(v, 0, vmax) / vmax) * Math.PI;
  const P = (v, rr) => [cx + Math.cos(A(v)) * rr, cy + Math.sin(A(v)) * rr];
  const arcD = (v0, v1, rr) => { const [x0, y0] = P(v0, rr), [x1, y1] = P(v1, rr); return `M${f(x0)},${f(y0)} A${rr},${rr} 0 0 1 ${f(x1)},${f(y1)}`; };
  el("path", { d: arcD(0, vmax, r), stroke: col("stage-ink", 0.15), "stroke-width": 12, fill: "none" }, g);
  el("path", { d: arcD(30, vmax, r), stroke: col("fx-injury", 0.45), "stroke-width": 12, fill: "none" }, g);
  const vc = s.press >= 30 ? "fx-injury" : s.press >= 20 ? "fx-force" : "fx-heal";
  el("path", { d: arcD(0, Math.max(0.5, s.press), r), stroke: col(vc), "stroke-width": 5, fill: "none" }, g);
  for (const v of [0, 20, 40, 60, 80]) {
    const [x1, y1] = P(v, r - 9), [x2, y2] = P(v, r + 7), [tx, ty] = P(v, r - 22);
    el("path", { d: `M${f(x1)},${f(y1)} L${f(x2)},${f(y2)}`, stroke: col("stage-ink", 0.6), "stroke-width": 1.2 }, g);
    el("text", { x: tx, y: ty + 4, "text-anchor": "middle", "font-size": 10, fill: col("stage-ink-2"), text: String(v) }, g);
  }
  const [nx, ny] = P(s.press, r - 10);
  el("path", { d: `M${cx},${cy} L${f(nx)},${f(ny)}`, stroke: col("stage-ink"), "stroke-width": 2.6, "stroke-linecap": "round" }, g);
  el("circle", { cx, cy, r: 5, fill: col("stage-ink") }, g);
  el("text", { x: cx, y: cy + 24, "text-anchor": "middle", "font-size": 17, "font-weight": 700, fill: col(vc), text: `${Math.round(s.press)} mmHg` }, g);
  // perfusion bar
  el("text", { x: 584, y: 212, "font-size": 12, fill: col("stage-ink", 0.85), text: "Capillary perfusion" }, g);
  el("rect", { x: 584, y: 222, width: 194, height: 10, rx: 5, fill: col("stage-ink", 0.12) }, g);
  el("rect", { x: 584, y: 222, width: Math.max(8, 194 * s.perf), height: 10, rx: 5, fill: col(s.perf > 0.6 ? "fx-heal" : s.perf > 0.3 ? "fx-force" : "fx-injury") }, g);
}

function labels(g, stage, s, p) {
  const L = (x, y, text, to, o = {}) => label(g, x, y, text, { to, ...o });
  const fib = G.fibres[Math.floor(G.fibres.length * 0.62)], cap = G.fibres[Math.floor(G.fibres.length * 0.75)];
  const capPt = [cap.x + SP / 2, bulgeY(s, cap.x + SP / 2, cap.y + RH / 3)];
  const necF = G.fibres.reduce((b, x) => (x.nec < b.nec ? x : b), G.fibres[0]);
  switch (stage) {
    case "healthy": {
      const a = fade(0.52, 0.45, p), b = fade(0.45, 0.52, p);
      L(584, 286, "Deep fascia (inelastic)", [CX + RX - 2, CY + 30], { opacity: a });
      L(584, 318, "Muscle fibres", [fib.x, fib.y], { opacity: a });
      L(584, 350, "Capillaries", capPt, { opacity: a });
      L(584, 286, "Artery", [ART[0] + 6, ART[1] + 10], { opacity: b });
      L(584, 318, "Vein (thin-walled)", [VEN[0] + 12, VEN[1]], { opacity: b });
      L(584, 350, "Nerve", [NRV[0] + 8, NRV[1] - 4], { opacity: b });
      break;
    }
    case "swelling":
      L(584, 300, "Fibres swell; fluid\nleaks into the tissue", [fib.x, fib.y], { opacity: fade(0.15, 0.4, p) });
      break;
    case "pressure-rise":
      L(584, 300, "Fascia cannot stretch,\nso pressure climbs", [CX + RX * 0.9, CY + RY * 0.42], { opacity: fade(0.15, 0.4, p) });
      break;
    case "venous-occlusion":
      L(584, 286, "Thin-walled veins\ncollapse first", [VEN[0] + 14, VEN[1]], { opacity: fade(0.15, 0.4, p) });
      L(584, 342, "Capillaries congest", capPt, { opacity: fade(0.5, 0.7, p) });
      break;
    case "ischaemia":
      L(584, 278, "Capillary flow fails:\nfibres ischaemic", [fib.x, fib.y], { opacity: fade(0.15, 0.4, p) });
      L(584, 330, "Nerve ischaemia\n(paraesthesia)", [NRV[0] + 10, NRV[1]], { opacity: fade(0.5, 0.7, p) });
      break;
    case "necrosis":
      L(584, 300, "Muscle necrosis\n(irreversible)", [necF.x + 6, necF.y], { opacity: fade(0.2, 0.45, p) });
      break;
    case "decompression":
      L(584, 278, "Fasciotomy releases\nthe fascia", [CX + 70, CY - RY - 10], { opacity: fade(0.1, 0.3, p) });
      L(584, 330, "Perfusion returns;\nnecrotic fibres don't", [necF.x + 8, necF.y + 4], { opacity: fade(0.5, 0.7, p) });
      break;
    default: break;
  }
}

export default {
  id: "compartment",
  scale: "≈ 200 µm",
  labels: { "pressure-rise": "Pressure rise", decompression: "Decompression (fasciotomy)" },
  render(g, { stage, progress = 0 }) {
    const p = clamp(progress);
    const s = params(ORDER.includes(stage) ? stage : "healthy", p);
    field(g, { tint: "anat-muscle", tintAmount: 0.05 });
    // subcutaneous tissue / neighbouring compartment outside the fascia
    el("rect", { x: 0, y: 0, width: 800, height: 450, fill: mix("anat-fat", "stage-bg", 0.9) }, g);
    compartment(g, s, p);
    gauge(g, s);
    labels(g, stage, s, p);
  }
};
