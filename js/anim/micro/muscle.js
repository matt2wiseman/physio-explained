/**
 * Micro module: MUSCLE (fibres & sarcomeres). OWNER: A7.
 * Two magnifications (the scale hint changes with them):
 *   SARCOMERE level (≈ µm) — three myofibrils with Z-lines, thin (actin) and thick (myosin) filaments, A/I bands, H zone:
 *     healthy → contracting (sliding filaments: I band & H zone narrow, A band constant) →
 *     eccentric-overstretch (active lengthening; weakest sarcomeres "pop" beyond filament overlap) →
 *     sarcomere-disruption (Z-line streaming, filament disarray, sarcolemma tears, Ca²⁺ influx)
 *   FIBRE level (≈ 50 µm) — five striated myofibres with peripheral nuclei, endomysial capillaries:
 *     haematoma (torn fibres & vessels, blood fills the gap) → inflammation (neutrophils then macrophages remove
 *     necrotic fibre ends; basal lamina "ghosts" persist) → satellite-activation (quiescent satellite cells activate,
 *     divide and migrate along the basal lamina) → regeneration (myoblasts fuse into myotubes with central nuclei;
 *     striations reappear) → scar (fibroblasts lay a collagen scar; regenerated fibres anchor to it).
 */
import { el, rng, lerp, clamp, ease, fade, seg, wave, col, mix, field, label, arrow, drawCell, collagenFibre, capillary,
  blobPath, radial, smoothPath, f, dashedArrow } from "./index.js";

const SARC = ["healthy", "contracting", "eccentric-overstretch", "sarcomere-disruption"];
const L0 = 150, A_LEN = 96, ACTIN = 62;
const MF = [130, 226, 322], MH = 74; // myofibril centre lines & height

/* ============================== sarcomere level ============================== */
const sgeo = (() => {
  const r = rng("muscle-sarc");
  // per myofibril: sarcomere indices −3…3 around the centre; which ones "pop"
  return MF.map((y, m) => ({ y, pop: m === 0 ? [1] : m === 1 ? [-1, 2] : [0], delay: [r() * 0.3, r() * 0.3, r() * 0.3], jit: Array.from({ length: 9 }, () => r()) }));
})();

function zLines(mf, lens) {
  // lens: array for sarcomere index −3…3 (7) → Z positions, centred at x=400 on the middle sarcomere
  const n = lens.length, mid = Math.floor(n / 2);
  const zs = new Array(n + 1);
  zs[mid] = 400 - lens[mid] / 2; zs[mid + 1] = 400 + lens[mid] / 2;
  for (let i = mid - 1; i >= 0; i--) zs[i] = zs[i + 1] - lens[i];
  for (let i = mid + 2; i <= n; i++) zs[i] = zs[i - 1] + lens[i - 1];
  return zs;
}

function myofibril(g, mf, lens, o = {}) {
  const y = mf.y, top = y - MH / 2, bot = y + MH / 2;
  const zs = zLines(mf, lens);
  const dis = o.disarray || 0, tear = o.tear || 0, stream = o.stream || 0, head = o.head || 0;
  const popped = o.popped || [];
  // strip (sarcoplasm)
  el("rect", { x: -20, y: top, width: 840, height: MH, rx: 10, fill: mix("anat-muscle", "stage-bg", 0.72) }, g);
  const R = rng("mf" + y);
  for (let i = 0; i < lens.length; i++) {
    const za = zs[i], zb = zs[i + 1], L = zb - za, m = (za + zb) / 2;
    if (zb < -40 || za > 840) continue;
    const isPop = popped[i] > 0.02;
    const d = dis * (isPop ? 1 : 0.35);
    // A band shading & H zone
    el("rect", { x: m - A_LEN / 2, y: top + 3, width: A_LEN, height: MH - 6, fill: isPop ? col("fx-injury", 0.18 + 0.12 * popped[i]) : mix("anat-muscle", "stage-bg", 0.35, 0.75) }, g);
    const hz0 = Math.max(m - A_LEN / 2, za + ACTIN), hz1 = Math.min(m + A_LEN / 2, zb - ACTIN);
    if (hz1 > hz0) el("rect", { x: hz0, y: top + 3, width: hz1 - hz0, height: MH - 6, fill: mix("anat-muscle", "stage-ink", 0.25, 0.25) }, g);
    // thick filaments (myosin) with heads
    const thickY = [-22, -7.5, 7.5, 22];
    thickY.forEach((dy, j) => {
      const ang = d * (R() - 0.5) * 40, ox = d * (R() - 0.5) * 30, oy = d * (R() - 0.5) * 14;
      const gg = el("g", { transform: `translate(${f(m + ox)},${f(y + dy + oy)}) rotate(${f(ang)})` }, g);
      el("path", { d: `M${-A_LEN / 2},0 L${A_LEN / 2},0`, stroke: mix("anat-muscle-light", "stage-ink", 0.25), "stroke-width": 4.6, "stroke-linecap": "round" }, gg);
      let hd = "";
      for (let x = -A_LEN / 2 + 4; x < A_LEN / 2 - 3; x += 8) {
        if (Math.abs(x) < 9) continue; // bare zone
        const s = x < 0 ? -1 : 1, tilt = 3 + 2.5 * Math.sin(head * Math.PI * 2 + x * 0.3);
        hd += `M${f(x)},-2 l${f(s * tilt)},-4 M${f(x + 4)},2 l${f(s * tilt)},4 `;
      }
      el("path", { d: hd, stroke: mix("anat-muscle-light", "stage-ink", 0.4), "stroke-width": 1.3, fill: "none" }, gg);
    });
    // thin filaments (actin) from each Z-line
    [-30, -15, 0, 15, 30].forEach((dy) => {
      for (const [z0, s] of [[za, 1], [zb, -1]]) {
        const ang = d * (R() - 0.5) * 50, oy = d * (R() - 0.5) * 16;
        const x1 = z0 + s * ACTIN;
        el("path", { d: `M${f(z0)},${f(y + dy)} L${f(x1)},${f(y + dy + oy + Math.tan((ang * Math.PI) / 180) * ACTIN * s)}`, stroke: mix("stage-ink", "anat-fascia", 0.4, 0.85), "stroke-width": 1.7 }, g);
      }
    });
    // M-line
    el("path", { d: `M${f(m)},${f(top + 8)} L${f(m)},${f(bot - 8)}`, stroke: mix("anat-muscle-light", "stage-ink", 0.5, 0.5), "stroke-width": 1 }, g);
  }
  // Z-lines (zig-zag; "streaming" smears them)
  zs.forEach((z, i) => {
    if (z < -30 || z > 830) return;
    const sm = stream * (popped[i] > 0.02 || popped[i - 1] > 0.02 ? 1 : 0.25);
    let d = `M${f(z)},${f(top + 2)}`;
    for (let k = 1; k <= 8; k++) d += ` L${f(z + (k % 2 ? 4 : -4) + sm * 16 * Math.sin(k * 1.3 + i))},${f(top + 2 + (k * (MH - 4)) / 8)}`;
    el("path", { d, stroke: col("stage-ink"), "stroke-width": 2.6, fill: "none", "stroke-linejoin": "round" }, g);
    if (sm > 0.05) el("path", { d, stroke: col("stage-ink", 0.35 * sm), "stroke-width": 7 * sm, fill: "none", transform: `translate(${f(sm * 8)},0)` }, g);
  });
  // sarcolemma (only on the outer myofibrils' outer edges) + tear
  return zs;
}

function renderSarc(g, stage, p) {
  field(g, { tint: "anat-muscle", tintAmount: 0.06 });
  const k = ease(p);
  const n = 7;
  let lens = (mf) => new Array(n).fill(L0);
  let popped = () => new Array(n).fill(0);
  let o = {};
  if (stage === "contracting") {
    const L = L0 - 30 * wave(p, 1.5) ;
    lens = () => new Array(n).fill(L);
    o.head = p * 4;
  } else if (stage === "eccentric-overstretch" || stage === "sarcomere-disruption") {
    const ec = stage === "eccentric-overstretch" ? k : 1;
    popped = (mf) => Array.from({ length: n }, (_, i) => (mf.pop.includes(i - 3) ? fade(0.15 + mf.delay[0], 0.75 + mf.delay[0] * 0.3, stage === "eccentric-overstretch" ? p : 1) : 0));
    lens = (mf) => { const pp = popped(mf); return pp.map((q, i) => L0 * (1 + 0.1 * ec) + q * 100 + mf.jit[i] * 6 * ec); };
    o.head = p * 2;
    if (stage === "sarcomere-disruption") { o.disarray = k; o.stream = k; }
  }
  // sarcoplasmic reticulum / mitochondria between myofibrils
  const R = rng("sr");
  for (let i = 0; i < 2; i++) { const y = (MF[i] + MF[i + 1]) / 2; for (let x = 20; x < 800; x += 46 + R() * 20) el("ellipse", { cx: x, cy: y, rx: 12, ry: 4.5, fill: mix("anat-muscle-edge", "stage-bg", 0.3, 0.8), stroke: mix("anat-muscle-light", "stage-bg", 0.5, 0.5), "stroke-width": 0.8 }, g); }
  const zsAll = sgeo.map((mf) => myofibril(g, mf, lens(mf), { ...o, popped: popped(mf) }));
  // sarcolemma (outer membrane) — torn in disruption, with Ca2+ entering
  const memY = [MF[0] - MH / 2 - 9, MF[2] + MH / 2 + 9];
  const tearK = stage === "sarcomere-disruption" ? k : 0;
  memY.forEach((y, j) => {
    const tx = j ? 470 : 340, gap = 40 * tearK;
    const segs = gap > 2 ? [[-20, tx - gap / 2], [tx + gap / 2, 820]] : [[-20, 820]];
    segs.forEach(([a, b]) => el("path", { d: `M${a},${y} L${b},${y}`, stroke: mix("anat-muscle-light", "stage-ink", 0.3, 0.9), "stroke-width": 3, "stroke-linecap": "round" }, g));
    if (tearK > 0.05) {
      const RR = rng("ca" + j);
      for (let i = 0; i < 14; i++) {
        const q = clamp(tearK * 1.6 - i * 0.05);
        if (q <= 0) continue;
        const x = tx + (RR() - 0.5) * 60, y2 = y + (j ? -1 : 1) * q * (20 + RR() * 70);
        el("circle", { cx: x, cy: y2, r: 2.6, fill: col("fx-force"), opacity: q }, g);
      }
    }
  });
  // labels
  const mid = sgeo[1], zs = zsAll[1];
  if (stage === "healthy") {
    const za = zs[3], zb = zs[4];
    el("path", { d: `M${za},76 L${za},70 L${zb},70 L${zb},76`, stroke: col("stage-ink", 0.8), "stroke-width": 1.4, fill: "none" }, g);
    label(g, (za + zb) / 2, 66, "Sarcomere (Z-line to Z-line)", { anchor: "middle", size: 13 });
    label(g, 170, 410, "Z-line", { to: [zs[2] + 2, MF[2] + 20], anchor: "middle" });
    label(g, 400, 410, "A band: myosin (thick)", { to: [(zs[3] + zs[4]) / 2 + 20, MF[2] + 7.5], anchor: "middle" });
    label(g, 632, 410, "I band: actin (thin)", { to: [zs[5] - 10, MF[2] + 15], anchor: "end" });
  } else if (stage === "contracting") {
    const L = 22 + 10 * wave(p, 1.5);
    arrow(g, 120, 66, 120 + L, 66, { width: 4, head: 12 }); arrow(g, 680, 66, 680 - L, 66, { width: 4, head: 12 });
    label(g, 400, 70, "Myosin heads pull actin toward the M-line", { anchor: "middle", size: 13 });
    label(g, 632, 412, "I band & H zone narrow;\nA band length unchanged", { to: [zs[4] + 6, MF[2] + 30], anchor: "end" });
    label(g, 170, 412, "Overlap increases", { to: [zs[3] + 50, MF[2]], anchor: "middle" });
  } else if (stage === "eccentric-overstretch") {
    arrow(g, 150, 66, 150 - 40 * (0.4 + 0.6 * k), 66, { width: 4.5, head: 13 }); arrow(g, 650, 66, 650 + 40 * (0.4 + 0.6 * k), 66, { width: 4.5, head: 13 });
    label(g, 400, 70, "Active lengthening (eccentric load)", { anchor: "middle", size: 13, color: col("fx-force") });
    const pz = zs[2], pz2 = zs[3];
    label(g, 632, 412, "Weakest sarcomeres 'pop':\nno actin–myosin overlap", { to: [(zsAll[0][4] + zsAll[0][5]) / 2, MF[0] + 30], anchor: "end", opacity: fade(0.3, 0.6, p) });
    label(g, 170, 412, "Neighbours still overlap", { to: [(pz + pz2) / 2 + 20, MF[2]], anchor: "middle", size: 13, color: col("stage-ink-2") });
  } else {
    label(g, 632, 412, "Z-line streaming &\nfilament disarray", { to: [zsAll[2][3] + 10, MF[2] - 10], anchor: "end", opacity: fade(0.1, 0.4, p) });
    label(g, 180, 412, "Sarcolemma tears", { to: [470, memY[1]], anchor: "middle", opacity: fade(0.2, 0.5, p) });
    label(g, 520, 72, "Ca²⁺ floods in → proteolysis", { to: [345, memY[0] + 30], anchor: "start", color: col("fx-force"), opacity: fade(0.35, 0.65, p) });
  }
}

/* ============================== fibre level ============================== */
const FY = [100, 166, 232, 298, 364], FH = 56;
const fgeo = (() => {
  const r = rng("muscle-fibre");
  const fibres = FY.map((y, i) => ({ y, i, torn: i >= 1 && i <= 3, L: 342 - r() * 22, R: 458 + r() * 22, nuc: Array.from({ length: 7 }, () => ({ x: 20 + r() * 760, top: r() < 0.5 })), sat: [306 - r() * 40, 494 + r() * 40] }));
  const caps = [133, 199, 265, 331];
  const P = rng("muscle-pts");
  const pts = (n, box) => Array.from({ length: n }, () => ({ x: box[0] + P() * (box[2] - box[0]), y: box[1] + P() * (box[3] - box[1]), a: P() * 180 - 90, s: 0.8 + P() * 0.4, k: P(), seed: Math.floor(P() * 1e6) }));
  return { fibres, caps, rbc: pts(60, [350, 135, 450, 330]), plt: pts(14, [355, 150, 445, 320]), neut: pts(10, [330, 140, 470, 330]), mac: pts(6, [322, 140, 478, 330]),
    fib: pts(12, [372, 140, 428, 330]), scar: pts(18, [378, 136, 422, 330]) };
})();

function striations(x0, x1, top, h, step = 7) {
  let d = "";
  for (let x = Math.ceil(x0 / step) * step; x < x1; x += step) d += `M${x},${f(top + 3)} L${x},${f(top + h - 3)} `;
  return d;
}
function fibreSeg(g, x0, x1, y, h, o = {}) {
  if (x1 - x0 < 2) return;
  const top = y - h / 2;
  const fill = o.necrotic ? mix("anat-muscle", "stage-ink", 0.45, 0.6) : o.fill || col("anat-muscle");
  el("rect", { x: x0, y: top, width: x1 - x0, height: h, rx: o.round ?? 6, fill, stroke: col("anat-muscle-edge"), "stroke-width": 1.4 }, g);
  el("rect", { x: x0 + 4, y: top + 4, width: Math.max(0, x1 - x0 - 8), height: h * 0.22, rx: 3, fill: col("anat-muscle-light", 0.35) }, g);
  const sa = o.striation ?? 1;
  if (sa > 0.02) el("path", { d: striations(x0 + 3, x1 - 3, top, h), stroke: mix("anat-muscle-edge", "stage-bg", 0.15, 0.75 * sa), "stroke-width": 2.6 }, g);
}

function fibreLevel(g, stage, p) {
  field(g, { tint: "anat-muscle", tintAmount: 0.05 });
  const k = ease(p);
  const order = ["haematoma", "inflammation", "satellite-activation", "regeneration", "scar"];
  const si = order.indexOf(stage);
  const necro = si === 1 ? 1 - fade(0.35, 0.95, p) : si === 0 ? fade(0.4, 1, p) : 0;  // necrotic stump segments
  const retreat = si >= 2 || (si === 1 && p > 0.95) ? 24 : si === 1 ? 24 * fade(0.35, 0.95, p) : 0;
  // endomysial capillaries
  fgeo.caps.forEach((y, i) => {
    const torn = i >= 0 && i <= 3 && si <= 2;
    const healK = si === 3 ? k : si === 4 ? 1 : 0;
    capillary(g, [[-20, y], [820, y]], { width: 7, seed: 60 + i, rbcs: 10, flow: p * 0.3, torn: torn ? { at: 0.48, gap: 120 } : healK < 1 ? { at: 0.48, gap: 120 * (1 - healK) } : undefined, leaky: si === 0 ? 1 : 0.3 });
    if (si === 3 || si === 4) capillary(g, [[340 + i * 10, y], [400, y + (i % 2 ? 14 : -14)], [460 - i * 6, y]], { width: 5, seed: 70 + i, rbcs: 2, opacity: si === 3 ? fade(0, 0.6, p) : 1 - 0.4 * k });
  });
  // haematoma
  const hk = si === 0 ? ease(p, "out") : si === 1 ? 1 - 0.55 * k : si === 2 ? 0.45 - 0.35 * k : 0;
  if (hk > 0.01) el("path", { d: blobPath(rng(5), 400, 232, 40 + 50 * Math.min(hk, 1), { ry: 80 + 70 * Math.min(1, hk), irregular: 0.15, n: 11 }), fill: col("fx-bleed", 0.42 * Math.min(1, hk * 1.4)) }, g);
  if (si === 1) el("ellipse", { cx: 400, cy: 232, rx: 210, ry: 190, fill: radial(g, "mus-oed", [[0, col("fx-oedema")], [1, col("fx-oedema", 0)]]), opacity: 1 - 0.5 * k }, g);
  // basal-lamina ghosts across the gap
  const ghost = si === 1 ? fade(0.3, 0.8, p) : si >= 2 && si <= 3 ? 1 : si === 4 ? 1 - k : 0;
  // fibres
  fgeo.fibres.forEach((fb) => {
    if (!fb.torn) { fibreSeg(g, -20, 820, fb.y, FH); }
    else {
      const L = fb.L - retreat, R = fb.R + retreat;
      fibreSeg(g, -20, L, fb.y, FH, { round: 14 });
      fibreSeg(g, R, 820, fb.y, FH, { round: 14 });
      if (necro > 0.01 && si <= 1) { // necrotic (hypercontracted) ends
        fibreSeg(g, L, fb.L, fb.y, FH - 6, { necrotic: true, striation: 0.2, round: 8 });
        fibreSeg(g, fb.R, R, fb.y, FH - 6, { necrotic: true, striation: 0.2, round: 8 });
        if (si === 0) { el("rect", { x: fb.L - 6, y: fb.y - FH / 2, width: 6, height: FH, fill: col("anat-muscle-edge", 0.9 * necro) }, g); el("rect", { x: fb.R, y: fb.y - FH / 2, width: 6, height: FH, fill: col("anat-muscle-edge", 0.9 * necro) }, g); }
      }
      if (si === 0) { // ragged torn ends at the moment of rupture
        const RR = rng("rag" + fb.i);
        for (const [x, s] of [[fb.L, 1], [fb.R, -1]]) for (let j = 0; j < 5; j++) el("path", { d: `M${f(x)},${f(fb.y - FH / 2 + 6 + j * 11)} l${f(s * (8 + RR() * 12))},${f((RR() - 0.5) * 6)}`, stroke: col("anat-muscle"), "stroke-width": 4, "stroke-linecap": "round" }, g);
      }
      if (ghost > 0.01) el("rect", { x: L, y: fb.y - FH / 2, width: R - L, height: FH, rx: 8, fill: "none", stroke: col("stage-ink-2", 0.55 * ghost), "stroke-width": 1.4, "stroke-dasharray": "5 4" }, g);
      // regenerating myotubes (central nuclei)
      if (si >= 3) {
        const grow = si === 3 ? ease(p) : 1;
        const scarW = si === 4 ? lerp(4, 18, k) : 0;
        const reach = (R - L) / 2 - 4 - scarW;
        const h = si === 3 ? lerp(22, 34, k) : lerp(36, 48, k);
        const st = si === 3 ? fade(0.6, 1, p) * 0.5 : lerp(0.5, 0.9, k);
        for (const s of [1, -1]) {
          const x0 = s > 0 ? L - 8 : R + 8, x1 = x0 + s * (8 + reach * grow);
          fibreSeg(g, Math.min(x0, x1), Math.max(x0, x1), fb.y, h, { fill: mix("anat-muscle", "anat-muscle-light", 0.45), striation: st, round: h / 2 });
          const nN = Math.floor(Math.abs(x1 - x0) / 15);
          for (let j = 1; j <= nN; j++) el("ellipse", { cx: x0 + s * j * 15, cy: fb.y, rx: 5.5, ry: 3.8, fill: mix("anat-vein", "anat-brain-deep", 0.35) }, g);
        }
      }
    }
    // peripheral nuclei
    fb.nuc.forEach((n) => {
      if (fb.torn && n.x > fb.L - 30 - retreat && n.x < fb.R + 30 + retreat) return;
      el("ellipse", { cx: n.x, cy: fb.y + (n.top ? -FH / 2 + 4 : FH / 2 - 4), rx: 10, ry: 3, fill: mix("anat-vein", "anat-brain-deep", 0.35) }, g);
    });
  });
  // satellite cells
  fgeo.fibres.forEach((fb) => {
    if (!fb.torn) { drawCell(g, "satellite", 210 + fb.i * 90, fb.y - FH / 2 + 2, 7, { activated: 0 }); return; }
    fb.sat.forEach((x, j) => {
      const yb = fb.y + (j ? FH / 2 - 2 : -FH / 2 + 2);
      if (si <= 1) { drawCell(g, "satellite", x, yb, 7, { activated: si === 1 ? fade(0.7, 1, p) * 0.3 : 0 }); return; }
      if (si === 2) {
        const act = fade(0, 0.35, p), div = fade(0.35, 0.6, p), mig = fade(0.55, 1, p);
        const s = j ? -1 : 1, tx = 400 - s * 28;
        const x1 = lerp(x, lerp(fb.L - 24, tx, 0.4), mig), y1 = lerp(yb, fb.y + (j ? 10 : -10), mig);
        drawCell(g, "satellite", x1, y1, 7, { activated: act });
        if (div > 0.02) drawCell(g, "satellite", lerp(x1, x1 + s * 22, div) + s * 30 * mig, lerp(y1, y1 + (j ? -10 : 10), div), 7, { activated: act, opacity: div });
        if (mig > 0.3) drawCell(g, "myoblast", lerp(fb.L - 20, 400 - 18, mig), fb.y + (j ? 12 : -12), 6, { opacity: mig, angle: 0, seed: fb.i * 9 + j });
      }
      if (si === 3) drawCell(g, "myoblast", lerp(392, 400, k) + (j ? 10 : -10), fb.y + (j ? 12 : -12), 6, { opacity: 1 - k, seed: fb.i * 9 + j });
    });
  });
  // RBCs & platelets in haematoma
  if (hk > 0.02) {
    const n = Math.round(fgeo.rbc.length * Math.min(1, hk));
    for (let i = 0; i < n; i++) { const c = fgeo.rbc[i]; drawCell(g, "rbc", c.x, c.y, 5.4 * c.s, { seed: c.seed, edge: c.k > 0.8 }); }
    if (si === 0) fgeo.plt.slice(0, Math.round(14 * k)).forEach((c) => drawCell(g, "platelet", c.x, c.y, 4, { activated: k, seed: c.seed }));
  }
  if (si === 1) {
    const nk = fade(0, 0.2, p) * (1 - fade(0.5, 0.85, p)), mk = fade(0.3, 0.6, p);
    fgeo.neut.forEach((c, i) => drawCell(g, "neutrophil", c.x, c.y, 8.5, { seed: c.seed, opacity: nk, phase: p }));
    fgeo.mac.forEach((c, i) => {
      const fb = fgeo.fibres[1 + (i % 3)];
      const x = i % 2 ? fb.R + 6 - 24 * fade(0.35, 0.95, p) * 0 : fb.L - 6;
      drawCell(g, "macrophage", lerp(c.x, x, 0.6), lerp(c.y, fb.y + (i % 2 ? 14 : -14), 0.7), 14, { seed: c.seed, opacity: mk, phase: p, engulf: 0.5 + 0.5 * p });
    });
  }
  if (si === 2) fgeo.mac.slice(0, 2).forEach((c) => drawCell(g, "macrophage", c.x, c.y, 13, { seed: c.seed, opacity: 1 - fade(0, 0.6, p), engulf: 1 }));
  // scar: fibroblasts + collagen in the central gap
  if (si === 4 || si === 3) {
    const sk = si === 4 ? k : fade(0.5, 1, p) * 0.25;
    const w = si === 4 ? lerp(4, 18, k) : 4;
    if (si === 4) el("rect", { x: 400 - w - 6, y: 128, width: (w + 6) * 2, height: 208, rx: 10, fill: mix("anat-tendon", "stage-bg", 0.55, 0.6 * sk) }, g);
    fgeo.scar.slice(0, Math.round(18 * sk)).forEach((c, i) => {
      const a = (lerp(c.a, c.a * 0.3, sk) * Math.PI) / 180, L = 16 + c.k * 18;
      collagenFibre(g, [[c.x - Math.sin(a) * 4, c.y - Math.cos(a) * L / 2], [c.x + Math.sin(a) * 4, c.y + Math.cos(a) * L / 2]], { type: sk > 0.5 ? "I" : "III", width: lerp(2, 4.5, sk), crimp: 0.6, color: mix("anat-tendon", "fx-heal", 0.3), edge: mix("anat-tendon-edge", "stage-bg", 0.4), seed: c.seed, highlight: false });
    });
    fgeo.fib.slice(0, Math.round(lerp(si === 4 ? 6 : 0, si === 4 ? 4 : 3, sk))).forEach((c) => drawCell(g, si === 4 && c.k > 0.5 ? "myofibroblast" : "fibroblast", c.x, c.y, 6.5, { angle: 90 + c.a * 0.2, seed: c.seed }));
  }
  // labels
  const f1 = fgeo.fibres[1], f3 = fgeo.fibres[3];
  switch (stage) {
    case "haematoma":
      label(g, 180, 412, "Torn myofibres", { to: [f3.L - 4, f3.y + 10], anchor: "middle" });
      label(g, 632, 412, "Torn capillaries → haematoma\nfills the gap", { to: [420, 280], anchor: "end", opacity: fade(0.15, 0.45, p) });
      break;
    case "inflammation":
      label(g, 180, 412, "Neutrophils, then macrophages", { to: [fgeo.mac[0].x * 0.4 + f1.L * 0.6, f1.y], anchor: "middle" });
      label(g, 632, 412, "Necrotic fibre ends are\nphagocytosed", { to: [f3.R + 10, f3.y], anchor: "end" });
      label(g, 560, 74, "Basal lamina 'ghost' persists", { to: [400, f1.y - FH / 2], anchor: "middle", opacity: fade(0.4, 0.8, p) });
      break;
    case "satellite-activation":
      label(g, 190, 412, "Satellite cells activate & divide", { to: [f3.sat[1], f3.y + FH / 2 - 2], anchor: "middle" });
      label(g, 632, 412, "Myoblasts migrate along\nthe basal lamina scaffold", { to: [400 + 18, f3.y - 12], anchor: "end", opacity: fade(0.5, 0.8, p) });
      label(g, 560, 74, "Quiescent satellite cell", { to: [210 + 4 * 90, FY[4] - FH / 2 + 2], anchor: "middle" });
      break;
    case "regeneration":
      label(g, 190, 412, "Myoblasts fuse into myotubes", { to: [f3.L - 20, f3.y], anchor: "middle" });
      label(g, 632, 412, "Central nuclei mark\nregenerating fibres", { to: [f3.R - 30, f3.y], anchor: "end" });
      label(g, 560, 74, "New capillaries", { to: [400, fgeo.caps[0] - 10], anchor: "middle", opacity: fade(0.2, 0.6, p) });
      break;
    case "scar":
      label(g, 632, 412, "Collagen scar at the injury site —\na weak link for re-injury", { to: [405, f3.y + 20], anchor: "end", opacity: fade(0.1, 0.4, p) });
      label(g, 190, 412, "Regenerated fibres anchor to the scar", { to: [380, f1.y], anchor: "middle" });
      break;
  }
}

function render(g, { stage, progress }) {
  if (SARC.includes(stage)) renderSarc(g, stage, progress);
  else fibreLevel(g, stage, progress);
}

export default {
  id: "muscle",
  scale: (stage) => (SARC.includes(stage) ? "≈ 1 µm" : "≈ 50 µm"),
  render
};
