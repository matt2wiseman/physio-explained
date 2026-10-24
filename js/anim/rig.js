/**
 * Figure rig — articulated mannequin for the MOI phase and for exercise illustrations. OWNER: A2.
 *
 * MODEL ("2.5-D"): every pose has two angle tables, exactly as in catalogue JOINTS:
 *   lat — sagittal angles as seen in the lateral view   (figure faces +x, R limbs are the NEAR side)
 *   ant — frontal angles as seen in the anterior view   (figure faces viewer, patient's R on viewer's LEFT)
 * plus a few hidden extras (x: trunkRot, pelvisRot, neckRot, toeOutL/R, supL/R, gripL/R).
 * Each segment's absolute projected angle in each plane is accumulated along the chain, and the two
 * projections are combined into one 3-D direction. The view being rendered is always EXACT (the angles you
 * author are the angles you see); the other table only adds believable foreshortening and depth ordering.
 * Limbs/torso/head are sphere-swept volumes, so every projection is a hull of circles (smooth, scale-free).
 *
 * WORLD: units cm, ground y = 0, y up. Screen x = root.x + projected x (mirrored for facing "left").
 * ROOT: { x, lift, rot, roll, yaw, grounded }
 *   rot  = pitch, + = falls forward / face-down (lateral view: in-plane; anterior view: toward the viewer)
 *   roll = sideways, + = topples toward the patient's RIGHT (anterior view: in-plane, head moves to screen −x)
 *   yaw  = turn about vertical, + = turns toward the patient's right (lateral view: +90 shows the front)
 *   grounded (default true): lowest body point touches y = 0, then `lift` raises. false: pelvis at standing
 *   height + lift. Values interpolate, so a keyframe can blend into/out of free flight.
 *
 * Exports: poseAt, resolvePose, presetPose, skeleton, bodyTargets, buildBody, drawBody, renderFigure,
 *          hullPath, svg helpers (used by moi.js / props.js).
 */
import { JOINT_NAMES, BODY_TARGETS, POSE_PRESETS } from "./catalogue.js";
import { PRESETS, STAND } from "./poses.js";
import { drawProp, placeStaticProps, PROP_IDS } from "./props.js";

export const NS = "http://www.w3.org/2000/svg";
const D2R = Math.PI / 180;
const EPS = 0.08;
const ROOT_KEYS = ["x", "lift", "rot", "roll", "yaw", "grounded"];
const X_KEYS = ["trunkRot", "pelvisRot", "neckRot", "toeOutL", "toeOutR", "supL", "supR", "gripL", "gripR"];
export const X_DEFAULTS = { trunkRot: 0, pelvisRot: 0, neckRot: 0, toeOutL: 9, toeOutR: 9, supL: 0, supR: 0, gripL: 0.15, gripR: 0.15 };

/* ---------------- small helpers ---------------- */
export const fmt = (n) => (Math.round(n * 100) / 100).toString();
export function svgEl(name, attrs, parent) {
  const e = document.createElementNS(NS, name);
  if (attrs) for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
  if (parent) parent.append(e);
  return e;
}
export const mixc = (a, p, b) => `color-mix(in srgb, var(${a}) ${p}%, var(${b}))`;
export const clamp = (x, lo = 0, hi = 1) => (x < lo ? lo : x > hi ? hi : x);
export const lerp = (a, b, u) => a + (b - a) * u;
export const EASE = {
  linear: (u) => u,
  in: (u) => u * u * u,
  out: (u) => 1 - Math.pow(1 - u, 3),
  inOut: (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2)
};
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
/** p + sum of k_i * v_i */
const at = (p, ...kv) => { let r = p; for (let i = 0; i < kv.length; i += 2) r = add(r, mul(kv[i + 1], kv[i])); return r; };
function rotAxis(v, k, ang) { // Rodrigues, k unit
  const c = Math.cos(ang), s = Math.sin(ang), kv = cross(k, v), kd = dot(k, v) * (1 - c);
  return [v[0] * c + kv[0] * s + k[0] * kd, v[1] * c + kv[1] * s + k[1] * kd, v[2] * c + kv[2] * s + k[2] * kd];
}
const rotX = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c]; };
const rotY = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c]; };
const rotZ = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0] * c - v[1] * s, v[0] * s + v[1] * c, v[2]]; };

/* ---------------- direction reconstruction ---------------- */
/** Segment frame from absolute projected angles. th: sagittal (Rz sense, deg), ph: frontal (Rx sense, deg).
 *  up: rest direction +Y (trunk/neck/head/pelvis) else −Y (limbs). Returns { u (axis, prox→dist / base→top), a (anterior), l (left) } */
function segFrame(th, ph, up, main, twist = 0) {
  const t = th * D2R, p = ph * D2R;
  let sx, sy, fz, fy;
  if (up) { sx = -Math.sin(t); sy = Math.cos(t); fz = Math.sin(p); fy = Math.cos(p); }
  else { sx = Math.sin(t); sy = -Math.cos(t); fz = -Math.sin(p); fy = -Math.cos(p); }
  if (sy * fy < 0) { if (main === "anterior") sy = -sy; else fy = -fy; }
  const Fy = Math.hypot(fy, EPS), Sy = Math.hypot(sy, EPS);
  const u = norm(main === "anterior" ? [sx * Fy, fy * Sy, fz * Sy] : [sx * Fy, sy * Fy, fz * Sy]);
  const aref = up ? [sy, -sx, 0] : [-sy, sx, 0];
  let a = sub(aref, mul(u, dot(aref, u)));
  if (Math.hypot(a[0], a[1], a[2]) < 1e-4) a = [0, 0, 1];
  a = norm(a);
  let l = up ? cross(a, u) : cross(u, a);
  if (twist) { const tw = (up ? 1 : -1) * twist * D2R; a = rotAxis(a, u, tw); l = rotAxis(l, u, tw); }
  return { u, a, l };
}

/* ---------------- kits ---------------- */
const SKIN = ["var(--fig-skin)", "var(--fig-skin-far)"];
export const KIT_DEFS = {
  athlete: { scale: 1, sleeves: "short", legs: "shorts",
    c: { skin: SKIN, shirt: ["var(--fig-kit)", "var(--fig-kit-far)"], shorts: [mixc("--fig-kit", 46, "--stage-bg"), mixc("--fig-kit-far", 46, "--stage-bg")],
      shoe: [mixc("--stage-ink", 82, "--fig-kit"), mixc("--stage-ink-2", 62, "--fig-kit-far")], sole: [mixc("--stage-bg", 55, "--fig-kit"), mixc("--stage-bg", 75, "--fig-kit-far")],
      hair: [mixc("--stage-bg", 70, "--fig-skin-far"), mixc("--stage-bg", 82, "--fig-skin-far")] } },
  opponent: { scale: 1.02, sleeves: "short", legs: "shorts",
    c: { skin: SKIN, shirt: ["var(--fig-opponent)", "var(--fig-opponent-far)"], shorts: [mixc("--fig-opponent", 42, "--stage-bg"), mixc("--fig-opponent-far", 42, "--stage-bg")],
      shoe: [mixc("--stage-ink-2", 80, "--stage-bg"), mixc("--stage-ink-2", 50, "--stage-bg")], sole: ["var(--stage-bg)", "var(--stage-bg)"],
      hair: [mixc("--fig-opponent-far", 55, "--stage-bg"), mixc("--fig-opponent-far", 35, "--stage-bg")] } },
  "older-adult": { scale: 0.96, sleeves: "long", legs: "trousers", posture: { trunk: 8, neck: -5, hipL: 3, hipR: 3, kneeL: 6, kneeR: 6 },
    c: { skin: SKIN, shirt: [mixc("--fig-opponent", 38, "--fig-skin-far"), mixc("--fig-opponent-far", 40, "--stage-bg-2")], shorts: [mixc("--stage-ink-2", 48, "--stage-bg"), mixc("--stage-ink-2", 30, "--stage-bg")],
      shoe: [mixc("--fig-opponent-far", 60, "--stage-bg"), mixc("--fig-opponent-far", 38, "--stage-bg")], sole: ["var(--stage-bg)", "var(--stage-bg)"],
      hair: [mixc("--stage-ink", 80, "--stage-ink-2"), mixc("--stage-ink-2", 85, "--stage-bg")] } },
  child: { scale: 0.7, head: 1.3, legScale: 0.93, sleeves: "short", legs: "shorts",
    c: { skin: SKIN, shirt: [mixc("--fx-heal", 62, "--fig-kit"), mixc("--fx-heal", 38, "--fig-kit-far")], shorts: [mixc("--fig-opponent", 48, "--stage-bg"), mixc("--fig-opponent-far", 48, "--stage-bg")],
      shoe: [mixc("--fig-opponent", 70, "--stage-ink"), mixc("--fig-opponent-far", 70, "--stage-bg")], sole: ["var(--stage-bg)", "var(--stage-bg)"],
      hair: [mixc("--fig-opponent-far", 62, "--stage-bg"), mixc("--fig-opponent-far", 40, "--stage-bg")] } },
  worker: { scale: 1, sleeves: "long", legs: "trousers", vest: true, boots: true,
    c: { skin: SKIN, shirt: [mixc("--stage-ink-2", 58, "--stage-bg"), mixc("--stage-ink-2", 36, "--stage-bg")], shorts: [mixc("--fig-kit-far", 58, "--stage-bg"), mixc("--fig-kit-far", 36, "--stage-bg")],
      vest: [mixc("--fx-force", 82, "--fig-opponent"), mixc("--fx-force", 50, "--fig-opponent-far")], stripe: ["var(--stage-ink)", "var(--stage-ink-2)"],
      shoe: [mixc("--fig-opponent-far", 62, "--stage-bg"), mixc("--fig-opponent-far", 40, "--stage-bg")], sole: ["var(--stage-bg)", "var(--stage-bg)"],
      hair: [mixc("--stage-bg", 70, "--fig-opponent-far"), mixc("--stage-bg", 82, "--fig-opponent-far")] } }
};
const OUTLINE = "var(--stage-bg)";

/* ---------------- pose resolution & interpolation ---------------- */
const isEx = (name) => name.startsWith("ex-");
const num = (v, d) => (typeof v === "number" && isFinite(v) ? v : d);

function baseRoot() { return { x: 0, lift: 0, rot: 0, roll: 0, yaw: 0, grounded: 1 }; }
/** Fresh copy of the standing pose (full pose object). */
export function standPose() {
  return { lat: { ...STAND.lat }, ant: { ...STAND.ant }, x: { ...X_DEFAULTS, ...(STAND.x || {}) }, root: baseRoot(),
    flat: { lat: { L: true, R: true }, ant: { L: true, R: true } }, seat: 0, hints: null, name: "stand" };
}
function presetRoot(P, view) { return { ...(P.r || {}), ...((view === "anterior" ? P.ra : P.rl) || {}) }; }

/** Does preset `name` exist with a table for `view`? (ex-* presets may lack anterior) */
export function hasView(name, view) {
  const P = PRESETS[name];
  if (!P) return false;
  return view === "lateral" ? true : !!(P.ant || !isEx(name));
}

/** Apply preset `name` on top of full pose `prev` (keeps root.x). Unknown names → warn, keep prev angles. */
function applyPreset(prev, name, view, warn) {
  const P = PRESETS[name];
  const out = { lat: { ...STAND.lat }, ant: { ...STAND.ant }, x: { ...X_DEFAULTS, ...(STAND.x || {}) }, root: { ...baseRoot(), x: prev.root.x },
    flat: { lat: { L: true, R: true }, ant: { L: true, R: true } }, seat: 0, hints: null, name };
  if (!P) { if (warn) warn(`[rig] unknown pose preset "${name}"`); return { ...prev, lat: { ...prev.lat }, ant: { ...prev.ant }, x: { ...prev.x }, root: { ...prev.root } }; }
  for (const tbl of ["lat", "ant"]) {
    const src = P[tbl] || {};
    for (const k in src) {
      const v = src[k];
      if (v === "flat") { out.flat[tbl][k.endsWith("L") ? "L" : "R"] = true; continue; }
      out[tbl][k] = v;
      if (k === "ankleL") out.flat[tbl].L = false;
      if (k === "ankleR") out.flat[tbl].R = false;
    }
  }
  Object.assign(out.x, P.x || {});
  const r = presetRoot(P, view);
  for (const k of ROOT_KEYS) if (k !== "x" && r[k] !== undefined) out.root[k] = k === "grounded" ? (r[k] ? 1 : 0) : r[k];
  out.seat = P.seat ? 1 : 0;
  out.hints = P.hints || null;
  return out;
}

/** Recompute "flat" ankles so planted feet stay level with the ground. */
function flatten(p) {
  const L = p.lat, A = p.ant, r = p.root;
  for (const s of ["L", "R"]) {
    if (p.flat.lat[s]) L["ankle" + s] = r.rot + L.pelvis - L["hip" + s] + L["knee" + s];
    if (p.flat.ant[s]) { const sg = s === "R" ? 1 : -1; A["ankle" + s] = sg * (A.pelvis - r.roll) + A["hip" + s] + A["knee" + s]; }
  }
  return p;
}

/** Resolve one keyframe on top of the previous full pose: prev ⊕ preset ⊕ joints overrides ⊕ root. */
export function resolvePose(prev, kf, view, warn) {
  let p = kf.pose ? applyPreset(prev, kf.pose, view, warn)
    : { ...prev, lat: { ...prev.lat }, ant: { ...prev.ant }, x: { ...prev.x }, root: { ...prev.root }, flat: { lat: { ...prev.flat.lat }, ant: { ...prev.flat.ant } } };
  const tbl = view === "anterior" ? "ant" : "lat";
  for (const [k, v] of Object.entries(kf.joints || {})) {
    if (!JOINT_NAMES.includes(k)) { if (warn) warn(`[rig] unknown joint "${k}"`); continue; }
    if (typeof v !== "number" || !isFinite(v)) continue;
    p[tbl][k] = v;
    if (k === "ankleL") p.flat[tbl].L = false;
    if (k === "ankleR") p.flat[tbl].R = false;
  }
  if (kf.x) for (const k of X_KEYS) if (typeof kf.x[k] === "number") p.x[k] = kf.x[k];
  if (kf.root) for (const k of ROOT_KEYS) if (kf.root[k] !== undefined) p.root[k] = k === "grounded" ? (kf.root[k] ? 1 : 0) : num(kf.root[k], p.root[k]);
  return flatten(p);
}

/** Full pose for a preset name (+ optional view-table joint overrides). */
export function presetPose(name, view = "lateral", joints = {}, root = {}) {
  return resolvePose(standPose(), { pose: name, joints, root }, view);
}

function lerpPose(a, b, u) {
  const o = { lat: {}, ant: {}, x: {}, root: {}, flat: { lat: {}, ant: {} }, seat: lerp(a.seat, b.seat, u), hints: u < 0.5 ? a.hints : b.hints, name: u < 0.5 ? a.name : b.name };
  for (const t of ["lat", "ant"]) { for (const k of JOINT_NAMES) o[t][k] = lerp(num(a[t][k], 0), num(b[t][k], 0), u); for (const s of ["L", "R"]) o.flat[t][s] = a.flat[t][s] && b.flat[t][s]; }
  for (const k of X_KEYS) o.x[k] = lerp(num(a.x[k], X_DEFAULTS[k]), num(b.x[k], X_DEFAULTS[k]), u);
  for (const k of ROOT_KEYS) o.root[k] = lerp(num(a.root[k], 0), num(b.root[k], 0), u);
  return flatten(o);
}

/** Resolve a keyframe list (one actor, sorted by t) into full poses. Cached by the caller. */
export function resolveKeyframes(kfs, view, warn) {
  let prev = standPose();
  const out = [];
  for (const kf of kfs) { prev = resolvePose(prev, kf, view, warn); out.push({ t: num(kf.t, 0), ease: kf.ease || "inOut", pose: prev }); }
  return out;
}

/** poseAt(resolvedOrRawKeyframes, t, view) → interpolated full pose. Pure: any t, any order. */
export function poseAt(kfs, t, view = "lateral", warn) {
  const R = kfs.length && kfs[0].pose && typeof kfs[0].pose === "object" ? kfs : resolveKeyframes(kfs, view, warn);
  if (!R.length) return standPose();
  if (t <= R[0].t) return R[0].pose;
  for (let i = 1; i < R.length; i++) {
    if (t <= R[i].t) {
      const a = R[i - 1], b = R[i], span = b.t - a.t;
      const u = span <= 1e-9 ? 1 : (EASE[b.ease] || EASE.inOut)(clamp((t - a.t) / span));
      return lerpPose(a.pose, b.pose, u);
    }
  }
  return R[R.length - 1].pose;
}

/* ---------------- body construction ---------------- */
function rootRotate(v, r) { // Ry(yaw)·Rz(−rot)·Rx(−roll)
  let w = rotX(v, -r.roll * D2R);
  w = rotZ(w, -r.rot * D2R);
  return rotY(w, r.yaw * D2R);
}

/**
 * Build the 3-D figure for one frame. pose: full pose object. opts: { kit, facing, view }.
 * Returns body = { view, kitName, pts (world 3-D named points), p2(name) → [sx, y], pieces/units for drawing, targets, frames, bounds }.
 */
export function buildBody(pose, view = "lateral", opts = {}) {
  const kitName = KIT_DEFS[opts.kit] ? opts.kit : "athlete";
  const K = KIT_DEFS[kitName];
  const S = K.scale || 1, HS = (K.head || 1), LS = K.legScale || 1;
  const main = view === "anterior" ? "anterior" : "lateral";
  const L = { ...pose.lat }, A = pose.ant, X = pose.x, R = pose.root;
  if (K.posture) for (const k in K.posture) L[k] = (L[k] || 0) + K.posture[k];
  if (K.posture && pose.flat.lat.R) L.ankleR = R.rot + L.pelvis - L.hipR + L.kneeR;
  if (K.posture && pose.flat.lat.L) L.ankleL = R.rot + L.pelvis - L.hipL + L.kneeL;

  const P = {}; // named 3-D points (body frame, then world)
  const F = {}; // frames
  const sph = []; // { id, p, r, unit, role }
  const sp = (unit, role, p, r) => { const o = { p, r: r * S, unit, role }; sph.push(o); return o; };
  const O = [0, 0, 0];

  // pelvis
  const thP = -num(L.pelvis, 0), phP = num(A.pelvis, 0);
  const fp = segFrame(thP, phP, true, main, X.pelvisRot);
  F.pelvis = { o: O, ...fp };
  P.pelvis = O;
  P.hipR = at(O, -8.5 * S, fp.l); P.hipL = at(O, 8.5 * S, fp.l);
  const B = at(O, 9 * S, fp.u, -1 * S, fp.a);
  // lumbar & thorax
  const thL = thP - 0.4 * L.trunk, phL = phP - 0.45 * A.trunk;
  const fl = segFrame(thL, phL, true, main, X.pelvisRot + 0.35 * X.trunkRot);
  const T12 = at(B, 17 * S, fl.u);
  const thT = thL - 0.6 * L.trunk, phT = phL - 0.55 * A.trunk;
  const ft = segFrame(thT, phT, true, main, X.pelvisRot + X.trunkRot);
  const NB = at(T12, 30.5 * S, ft.u);
  F.lumbar = { o: B, ...fl }; F.thorax = { o: T12, ...ft };
  P.lumbarBase = B; P.t12 = T12; P.neckBase = NB;
  P.shoulderR = at(T12, 25.5 * S, ft.u, 0.4 * S, ft.a, -17.5 * S, ft.l);
  P.shoulderL = at(T12, 25.5 * S, ft.u, 0.4 * S, ft.a, 17.5 * S, ft.l);
  // neck & head
  const thN = thT - 0.6 * L.neck, phN = phT - 0.6 * A.neck;
  const fn = segFrame(thN, phN, true, main, X.pelvisRot + X.trunkRot + 0.5 * X.neckRot);
  const HB = at(NB, 8.5 * S, fn.u);
  const thH = thN - 0.4 * L.neck, phH = phN - 0.4 * A.neck;
  const fh = segFrame(thH, phH, true, main, X.pelvisRot + X.trunkRot + X.neckRot);
  F.head = { o: HB, ...fh }; P.headBase = HB;
  const hs = S * HS;
  P.cranium = at(HB, 9.3 * hs, fh.u, 1.3 * hs, fh.a);
  P.face = at(HB, 2.9 * hs, fh.u, 4.3 * hs, fh.a);
  P.nose = at(HB, 6.2 * hs, fh.u, 10.3 * hs, fh.a);
  P.earR = at(HB, 7.0 * hs, fh.u, -1.9 * hs, fh.a, -8.6 * hs, fh.l);
  P.earL = at(HB, 7.0 * hs, fh.u, -1.9 * hs, fh.a, 8.6 * hs, fh.l);
  P.head = at(HB, 8 * hs, fh.u, 2 * hs, fh.a);

  // torso stations: [frame, u, f, halfSpread, r]
  const st = (fr, o, u, f, w, r) => { const c = at(o, u * S, fr.u, f * S, fr.a); return [at(c, -w * S, fr.l), at(c, w * S, fr.l), r]; };
  const STN = {
    P0: st(fp, O, -6.5, 0, 5.0, 8.8), P1: st(fp, O, 0, -1.8, 5.6, 10.7), P2: st(fp, O, 8, -0.6, 5.2, 10.0),
    L1: st(fl, B, 2, -0.2, 4.4, 9.6), L2: st(fl, B, 10, 0.2, 3.9, 9.1), L3: st(fl, B, 17, 0.7, 4.8, 10.2),
    T1: st(ft, T12, 7, 1.4, 5.6, 11.2), T2: st(ft, T12, 15, 1.6, 6.4, 11.5), T3: st(ft, T12, 22, 0.6, 7.6, 10.2),
    T4: st(ft, T12, 27, -0.9, 10.2, 6.6), T5: st(ft, T12, 30.6, -1.1, 1.4, 5.6)
  };
  const pieces = []; // { unit, role, s: [sphereObj...] }
  const piece = (unit, role, list) => { pieces.push({ unit, role, s: list }); };
  const stPair = (n, grow = 0) => [{ p: STN[n][0], r: (STN[n][2] + grow) * S }, { p: STN[n][1], r: (STN[n][2] + grow) * S }];
  const torsoChain = (names, role, grow = 0) => { for (let i = 0; i < names.length - 1; i++) piece("torso", role, [...stPair(names[i], grow), ...stPair(names[i + 1], grow)]); };

  piece("torso", "skin", [{ p: NB, r: 5.4 * S }, { p: HB, r: 4.8 * S }]); // neck
  torsoChain(["P0", "P1", "P2", "L1"], "shorts");
  torsoChain(["L1", "L2", "L3", "T1", "T2", "T3", "T4", "T5"], "shirt");
  if (K.vest) { torsoChain(["L1", "L2", "L3", "T1", "T2", "T3"], "vest", 0.5); piece("torso", "stripe", [...stPair("L2", 0.7), ...stPair("L2", 0.7).map((q) => ({ p: at(q.p, 2.2 * S, fl.u), r: q.r }))]); }

  // head pieces
  piece("head", "skin", [{ p: P.cranium, r: 9.2 * hs }, { p: P.face, r: 6.3 * hs }]);
  piece("head", "skin", [{ p: P.face, r: 6.3 * hs }, { p: P.nose, r: 1.55 * hs }]);
  piece("head", "skin", [{ p: P.earR, r: 2.0 * hs }]);
  piece("head", "skin", [{ p: P.earL, r: 2.0 * hs }]);

  // arms
  const tgtExtra = {};
  for (const s of ["R", "L"]) {
    const sg = s === "R" ? 1 : -1, U = "arm" + s;
    const Sh = P["shoulder" + s];
    const thA = thT + num(L["shoulder" + s], 0), phA = phT + sg * num(A["shoulder" + s], 0);
    const fa = segFrame(thA, phA, false, main);
    const E = at(Sh, 31 * S, fa.u);
    const thF = thA + num(L["elbow" + s], 0), phF = phA - sg * num(A["elbow" + s], 0);
    const ff = segFrame(thF, phF, false, main);
    const W = at(E, 26 * S, ff.u);
    const sup = num(X["sup" + s], 0), wsg = sup > 90 ? -1 : 1;
    const thW = thF + wsg * num(L["wrist" + s], 0), phW = phF + sg * num(A["wrist" + s], 0);
    const fw = segFrame(thW, phW, false, main);
    P["elbow" + s] = E; P["wrist" + s] = W; F["arm" + s] = { o: Sh, ...fa }; F["forearm" + s] = { o: E, ...ff }; F["hand" + s] = { o: W, ...fw };
    const Am = at(Sh, 12.5 * S, fa.u, 0.3 * S, fa.a), Fm = at(E, 8 * S, ff.u, 0.4 * S, ff.a);
    piece(U, "skin", [{ p: Sh, r: 5.0 * S }, { p: Am, r: 4.4 * S }]);
    piece(U, "skin", [{ p: Am, r: 4.4 * S }, { p: E, r: 3.5 * S }]);
    piece(U, "skin", [{ p: E, r: 3.5 * S }, { p: Fm, r: 3.85 * S }]);
    piece(U, "skin", [{ p: Fm, r: 3.85 * S }, { p: W, r: 2.45 * S }]);
    if (K.sleeves === "long") {
      piece(U, "shirt", [{ p: Sh, r: 5.6 * S }, { p: Am, r: 4.95 * S }]);
      piece(U, "shirt", [{ p: Am, r: 4.95 * S }, { p: E, r: 4.1 * S }]);
      piece(U, "shirt", [{ p: E, r: 4.1 * S }, { p: Fm, r: 4.35 * S }]);
      piece(U, "shirt", [{ p: Fm, r: 4.35 * S }, { p: at(E, 22 * S, ff.u), r: 3.3 * S }]);
    } else piece(U, "shirt", [{ p: Sh, r: 5.65 * S }, { p: at(Sh, 11.5 * S, fa.u, 0.2 * S, fa.a), r: 5.0 * S }]);
    // hand (width axis = fw.a, thumb on the anterior side; flips when supinated)
    const g = clamp(num(X["grip" + s], 0.15)), ts = wsg;
    const hp = (along, wide, nrm = 0) => at(W, along * S, fw.u, wide * S, fw.a, nrm * S, fw.l);
    const palm = [hp(4, 1.3), hp(4, -1.3)], kn = [hp(lerp(9.2, 8.3, g), 1.5), hp(lerp(9.2, 8.3, g), -1.5)];
    const tip = [hp(lerp(16.2, 7.6, g), lerp(1.0, 1.3, g)), hp(lerp(16.2, 7.6, g), lerp(-1.0, -1.3, g))];
    piece(U, "skin", [{ p: W, r: 2.4 * S }, { p: palm[0], r: 2.6 * S }, { p: palm[1], r: 2.6 * S }]);
    piece(U, "skin", [{ p: palm[0], r: 2.6 * S }, { p: palm[1], r: 2.6 * S }, { p: kn[0], r: lerp(2.25, 2.85, g) * S }, { p: kn[1], r: lerp(2.25, 2.85, g) * S }]);
    piece(U, "skin", [{ p: kn[0], r: lerp(2.25, 2.85, g) * S }, { p: kn[1], r: lerp(2.25, 2.85, g) * S }, { p: tip[0], r: lerp(1.55, 2.5, g) * S }, { p: tip[1], r: lerp(1.55, 2.5, g) * S }]);
    piece(U, "skin", [{ p: hp(2.6, ts * 2.4), r: 1.55 * S }, { p: hp(lerp(7.2, 6.4, g), ts * lerp(4.6, 3.4, g)), r: 1.25 * S }]);
    P["hand" + s] = hp(lerp(7.5, 5.5, g), 0);
    P["fingertip" + s] = hp(lerp(17.5, 9.5, g), 0);
    tgtExtra["arm" + s] = Am; tgtExtra["forearm" + s] = at(E, 13 * S, ff.u);
  }

  // legs
  for (const s of ["R", "L"]) {
    const sg = s === "R" ? 1 : -1, U = "leg" + s;
    const H = P["hip" + s], LL = S * LS;
    const thTh = thP + num(L["hip" + s], 0), phTh = phP + sg * num(A["hip" + s], 0);
    const fth = segFrame(thTh, phTh, false, main);
    const Kn = at(H, 42.5 * LL, fth.u);
    const thS = thTh - num(L["knee" + s], 0), phS = phTh + sg * num(A["knee" + s], 0);
    const fs = segFrame(thS, phS, false, main);
    const An = at(Kn, 42.5 * LL, fs.u);
    F["thigh" + s] = { o: H, ...fth }; F["shank" + s] = { o: Kn, ...fs };
    P["knee" + s] = Kn; P["ankle" + s] = An;
    const Tm = at(H, 19 * LL, fth.u, 0.8 * S, fth.a);
    const C = at(Kn, 13 * LL, fs.u, -1.5 * S, fs.a), Lo = at(Kn, 29 * LL, fs.u, -0.4 * S, fs.a);
    piece(U, "skin", [{ p: H, r: 8.0 * S }, { p: Tm, r: 7.1 * S }]);
    piece(U, "skin", [{ p: Tm, r: 7.1 * S }, { p: Kn, r: 5.2 * S }, { p: at(Kn, 1.7 * S, fth.a, -1.2 * S, fth.u), r: 4.2 * S }]);
    piece(U, "skin", [{ p: Kn, r: 5.0 * S }, { p: C, r: 5.5 * S }]);
    piece(U, "skin", [{ p: C, r: 5.5 * S }, { p: Lo, r: 3.9 * S }]);
    piece(U, "skin", [{ p: Lo, r: 3.9 * S }, { p: An, r: 3.35 * S }]);
    if (K.legs === "trousers") {
      piece(U, "shorts", [{ p: H, r: 8.7 * S }, { p: Tm, r: 7.8 * S }]);
      piece(U, "shorts", [{ p: Tm, r: 7.8 * S }, { p: Kn, r: 6.0 * S }]);
      piece(U, "shorts", [{ p: Kn, r: 5.9 * S }, { p: C, r: 6.1 * S }]);
      piece(U, "shorts", [{ p: C, r: 6.1 * S }, { p: at(An, 3 * S, fs.u.map((v) => -v)), r: 4.9 * S }]);
    } else piece(U, "shorts", [{ p: H, r: 8.75 * S }, { p: at(H, 18.5 * LL, fth.u, 0.7 * S, fth.a), r: 7.95 * S }]);
    // foot frame: Ry(sg·toeOut)·Rz(θf)·Rx(φf)
    const thF = thS + num(L["ankle" + s], 0), phF = phS - sg * num(A["ankle" + s], 0), yaw = sg * num(X["toeOut" + s], 9) * D2R;
    const fr = (v, th) => rotY(rotZ(rotX(v, phF * D2R), th * D2R), yaw);
    const fa = fr([1, 0, 0], thF), fu = fr([0, 1, 0], thF), fl2 = fr([0, 0, 1], thF);
    const thT2 = thF + num(L["toe" + s], 0);
    const ta = fr([1, 0, 0], thT2), tu = fr([0, 1, 0], thT2);
    const fp2 = (al, upv, side) => at(An, al * S, fa, upv * S, fu, side * S, fl2);
    const boot = K.boots ? 0.5 : 0;
    const heel = fp2(-4.0, -3.7, 0), mid = fp2(4.4, -2.6, 0), ballM = fp2(12, -4.6, sg * 2.4), ballL = fp2(11.6, -4.6, -sg * 2.6), collar = fp2(0.4, -0.3, 0);
    const mtp = fp2(12, -4.5, 0), toe = at(mtp, 4.4 * S, ta, -0.15 * S, tu);
    F["foot" + s] = { o: An, u: fa, a: fu, l: fl2 };
    P["heel" + s] = heel; P["foot" + s] = fp2(5, -3, 0); P["toe" + s] = toe; P["mtp" + s] = mtp;
    piece(U, "shoe", [{ p: collar, r: (3.7 + boot) * S }, { p: heel, r: (3.4 + boot) * S }, { p: mid, r: (4.2 + boot * 0.6) * S }]);
    piece(U, "shoe", [{ p: mid, r: (4.2 + boot * 0.6) * S }, { p: ballM, r: (2.45 + boot * 0.4) * S }, { p: ballL, r: (2.45 + boot * 0.4) * S }]);
    piece(U, "shoe", [{ p: ballM, r: (2.45 + boot * 0.4) * S }, { p: ballL, r: (2.45 + boot * 0.4) * S }, { p: toe, r: (2.1 + boot * 0.4) * S }]);
    if (K.boots) piece(U, "shoe", [{ p: collar, r: 4.3 * S }, { p: at(An, 6 * S, fs.u.map((v) => -v)), r: 4.0 * S }]);
    const sb = (c, r, up) => at(c, -(r + 0.45) * S, up);
    const soleR = 1.15;
    piece(U, "sole", [{ p: sb(heel, 3.4 + boot, fu), r: soleR * S }, { p: sb(ballM, 2.45 + boot * 0.4, fu), r: soleR * S }, { p: sb(ballL, 2.45 + boot * 0.4, fu), r: soleR * S }, { p: sb(toe, 2.1 + boot * 0.4, tu), r: 0.95 * S }]);
    tgtExtra["thigh" + s] = at(H, 21 * LL, fth.u);
    tgtExtra["shin" + s] = at(Kn, 19 * LL, fs.u, 3.6 * S, fs.a);
    tgtExtra["calf" + s] = at(Kn, 13 * LL, fs.u, -6.4 * S, fs.a);
    tgtExtra["groin" + s] = at(H, 7 * LL, fth.u, 4 * S, fth.a, sg * 4.5 * S, fp.l);
  }
  // torso targets
  tgtExtra.upperBack = at(T12, 15 * S, ft.u, -10.5 * S, ft.a);
  tgtExtra.lowBack = at(B, 8 * S, fl.u, -9.6 * S, fl.a);
  tgtExtra.chest = at(T12, 15 * S, ft.u, 12.5 * S, ft.a);
  tgtExtra.abdomen = at(B, 6 * S, fl.u, 9.5 * S, fl.a);
  tgtExtra.neck = at(NB, 4 * S, fn.u);
  tgtExtra.pelvisT = at(O, 3 * S, fp.u);

  // ---- world transform & grounding ----
  const r = R;
  const xform = (v) => rootRotate(v, r);
  for (const o of pieces) for (const q of o.s) q.w = xform(q.p);
  for (const k in P) P[k] = xform(P[k]);
  for (const k in tgtExtra) tgtExtra[k] = xform(tgtExtra[k]);
  for (const k in F) { const f = F[k]; F[k] = { o: xform(f.o), u: xform(f.u), a: xform(f.a), l: xform(f.l) }; }
  let minY = Infinity;
  for (const o of pieces) for (const q of o.s) minY = Math.min(minY, q.w[1] - q.r);
  const gnd = clamp(num(r.grounded, 1));
  const y0 = lerp(92 * S * LS + 7 * S * (LS - 1), -minY, gnd) + num(r.lift, 0);
  const shift = (v) => [v[0], v[1] + y0, v[2]];
  for (const o of pieces) for (const q of o.s) q.w = shift(q.w);
  for (const k in P) P[k] = shift(P[k]);
  for (const k in tgtExtra) tgtExtra[k] = shift(tgtExtra[k]);
  for (const k in F) F[k].o = shift(F[k].o);

  // ---- projection ----
  const m = opts.facing === "left" ? -1 : 1, rx = num(r.x, 0);
  const lateral = view !== "anterior";
  const pr = (v) => [rx + m * (lateral ? v[0] : v[2]), v[1]];
  const depth = (v) => (lateral ? -v[2] : v[0]);
  const pd = (v) => [m * (lateral ? v[0] : v[2]), v[1]]; // projected direction (no offset)

  // units: depth sort + far test
  const fwd = xform([1, 0, 0]);
  const frontal = lateral ? Math.abs(fwd[2]) > 0.7 : Math.abs(fwd[0]) > 0.7; // body faces the camera
  const dTorso = depth(P.t12);
  const unitDepth = {
    torso: dTorso, head: Math.max(depth(P.cranium), dTorso) + 0.5,
    armR: (depth(P.elbowR) + depth(P.wristR) + depth(P.shoulderR)) / 3, armL: (depth(P.elbowL) + depth(P.wristL) + depth(P.shoulderL)) / 3,
    legR: (depth(P.kneeR) + depth(P.ankleR)) / 2, legL: (depth(P.kneeL) + depth(P.ankleL)) / 2
  };
  const sortKey = { ...unitDepth };
  if (frontal) { for (const s of ["L", "R"]) { sortKey["leg" + s] = unitDepth["leg" + s] - 9; sortKey["arm" + s] = unitDepth["arm" + s] + 13; } }
  const far = {};
  for (const u in unitDepth) far[u] = u !== "torso" && u !== "head" && unitDepth[u] < dTorso - 5;

  // targets
  const T = {
    head: P.head, neck: tgtExtra.neck, upperBack: tgtExtra.upperBack, lowBack: tgtExtra.lowBack, pelvis: tgtExtra.pelvisT, chest: tgtExtra.chest, abdomen: tgtExtra.abdomen
  };
  for (const s of ["L", "R"]) {
    Object.assign(T, {
      ["shoulder" + s]: P["shoulder" + s], ["arm" + s]: tgtExtra["arm" + s], ["elbow" + s]: P["elbow" + s], ["forearm" + s]: tgtExtra["forearm" + s],
      ["wrist" + s]: P["wrist" + s], ["hand" + s]: P["hand" + s], ["hip" + s]: P["hip" + s], ["groin" + s]: tgtExtra["groin" + s], ["thigh" + s]: tgtExtra["thigh" + s],
      ["knee" + s]: P["knee" + s], ["shin" + s]: tgtExtra["shin" + s], ["calf" + s]: tgtExtra["calf" + s], ["ankle" + s]: P["ankle" + s], ["heel" + s]: P["heel" + s],
      ["foot" + s]: P["foot" + s], ["toe" + s]: P["toe" + s]
    });
  }
  const targets = {}, targetDepth = {};
  for (const id of BODY_TARGETS) { targets[id] = pr(T[id]); targetDepth[id] = depth(T[id]); }

  // bounds (y-up)
  let x0 = Infinity, x1 = -Infinity, ya = Infinity, yb = -Infinity;
  for (const o of pieces) for (const q of o.s) { const [x, y] = pr(q.w); x0 = Math.min(x0, x - q.r); x1 = Math.max(x1, x + q.r); ya = Math.min(ya, y - q.r); yb = Math.max(yb, y + q.r); }

  return {
    view: lateral ? "lateral" : "anterior", kitName, kit: K, scale: S, facing: m, pose, pieces, unitDepth, sortKey, far, frontal,
    pts: P, frames: F, targets, targetDepth, pr, pd, depth,
    bounds: { x0, x1, y0: ya, y1: yb }, // world y-up
    minY: ya
  };
}

/* ---------------- hull of circles → SVG path (screen coords, y down) ---------------- */
export function circlePath(x, y, r) { return `M${fmt(x - r)},${fmt(y)}a${fmt(r)},${fmt(r)} 0 1,0 ${fmt(2 * r)},0a${fmt(r)},${fmt(r)} 0 1,0 ${fmt(-2 * r)},0Z`; }
export function hullPath(circles) {
  const cs = [];
  for (let i = 0; i < circles.length; i++) {
    const c = circles[i];
    if (!(c[2] > 0.01)) continue;
    let inside = false;
    for (let j = 0; j < circles.length; j++) {
      if (i === j) continue;
      const d = circles[j], dd = Math.hypot(c[0] - d[0], c[1] - d[1]);
      if (dd + c[2] <= d[2] + 1e-6 && (d[2] > c[2] + 1e-9 || j < i)) { inside = true; break; }
    }
    if (!inside) cs.push(c);
  }
  if (!cs.length) return "";
  if (cs.length === 1) return circlePath(cs[0][0], cs[0][1], cs[0][2]);
  const N = 28, pts = [];
  for (let ci = 0; ci < cs.length; ci++) for (let k = 0; k < N; k++) { const a = (2 * Math.PI * k) / N; pts.push([cs[ci][0] + cs[ci][2] * Math.cos(a), cs[ci][1] + cs[ci][2] * Math.sin(a), ci]); }
  pts.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const p of pts) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  lo.pop(); up.pop();
  const h = lo.concat(up);
  // runs of the same circle (cyclic)
  const runs = [];
  for (const p of h) { if (runs.length && runs[runs.length - 1].ci === p[2]) runs[runs.length - 1].pts.push(p); else runs.push({ ci: p[2], pts: [p] }); }
  if (runs.length > 1 && runs[0].ci === runs[runs.length - 1].ci) { runs[0].pts = runs.pop().pts.concat(runs[0].pts); }
  if (runs.length === 1) { const c = cs[runs[0].ci]; return circlePath(c[0], c[1], c[2]); }
  const n = runs.length;
  const pin = new Array(n), pout = new Array(n);
  for (let i = 0; i < n; i++) {
    const A = cs[runs[i].ci], Bc = cs[runs[(i + 1) % n].ci];
    const ex = runs[i].pts[runs[i].pts.length - 1], en = runs[(i + 1) % n].pts[0];
    const dx = Bc[0] - A[0], dy = Bc[1] - A[1], d = Math.hypot(dx, dy);
    let ok = false;
    if (d > 1e-6) {
      const k = (A[2] - Bc[2]) / d;
      if (Math.abs(k) < 1) {
        const ux = dx / d, uy = dy / d, s = Math.sqrt(1 - k * k);
        const n1 = [ux * k - uy * s, uy * k + ux * s], n2 = [ux * k + uy * s, uy * k - ux * s];
        let mx = (ex[0] - A[0]) / A[2] + (en[0] - Bc[0]) / Bc[2], my = (ex[1] - A[1]) / A[2] + (en[1] - Bc[1]) / Bc[2];
        const nn = n1[0] * mx + n1[1] * my >= n2[0] * mx + n2[1] * my ? n1 : n2;
        pout[i] = [A[0] + A[2] * nn[0], A[1] + A[2] * nn[1]];
        pin[(i + 1) % n] = [Bc[0] + Bc[2] * nn[0], Bc[1] + Bc[2] * nn[1]];
        ok = true;
      }
    }
    if (!ok) { pout[i] = [ex[0], ex[1]]; pin[(i + 1) % n] = [en[0], en[1]]; }
  }
  let d = `M${fmt(pin[0][0])},${fmt(pin[0][1])}`;
  for (let i = 0; i < n; i++) {
    const c = cs[runs[i].ci];
    const a0 = Math.atan2(pin[i][1] - c[1], pin[i][0] - c[0]), a1 = Math.atan2(pout[i][1] - c[1], pout[i][0] - c[0]);
    let span = a1 - a0; while (span < 0) span += 2 * Math.PI; while (span >= 2 * Math.PI) span -= 2 * Math.PI;
    if (span > 1e-4) d += `A${fmt(c[2])},${fmt(c[2])} 0 ${span > Math.PI ? 1 : 0},1 ${fmt(pout[i][0])},${fmt(pout[i][1])}`;
    const nx = pin[(i + 1) % n];
    d += `L${fmt(nx[0])},${fmt(nx[1])}`;
  }
  return d + "Z";
}

/* ---------------- drawing ---------------- */
const ROLE_ORDER = { skin: 0, shorts: 1, shirt: 2, vest: 3, stripe: 4, shoe: 5, sole: 6 };
/** Ordered draw units (back → front). */
export function unitOrder(body) { return ["torso", "head", "armR", "armL", "legR", "legL"].sort((a, b) => body.sortKey[a] - body.sortKey[b] || (a === "head" ? 1 : b === "head" ? -1 : 0)); }

/**
 * Draw `body` into SVG group g (screen units: cm, y DOWN). opts: { outline (cm, default 0.85), shading (bool), only: [units], dy: extra y shift }
 * Returns the created <g>.
 */
export function drawBody(g, body, opts = {}) {
  const root = svgEl("g", { class: "rig-figure" }, g);
  const ow = opts.outline ?? 0.85;
  const shade = opts.shading !== false;
  const sx = opts.dx || 0, sy = opts.dy || 0;
  const scr = (w) => { const p = body.pr(w); return [p[0] + sx, -p[1] + sy]; };
  const units = unitOrder(body).filter((u) => !opts.only || opts.only.includes(u));
  const C = body.kit.c;
  for (const u of units) {
    const ps = body.pieces.filter((p) => p.unit === u).sort((a, b) => ROLE_ORDER[a.role] - ROLE_ORDER[b.role]);
    if (!ps.length) continue;
    const far = body.far[u] ? 1 : 0;
    const ug = svgEl("g", { class: "rig-" + u }, root);
    const circ = ps.map((p) => p.s.map((q) => { const [x, y] = scr(q.w); return [x, y, q.r]; }));
    // outline: expanded hulls
    let od = "";
    for (const c of circ) od += hullPath(c.map(([x, y, r]) => [x, y, r + ow]));
    svgEl("path", { d: od, style: `fill: ${OUTLINE}` }, ug);
    // fills by role
    let cur = null, dd = "";
    const flush = () => { if (dd) svgEl("path", { d: dd, style: `fill: ${(C[cur] || C.skin)[far]}` }, ug); dd = ""; };
    ps.forEach((p, i) => { if (p.role !== cur) { flush(); cur = p.role; } dd += hullPath(circ[i]); });
    flush();
    if (shade) {
      // soft cel shading: highlight up-left, core shadow down-right (stays inside each piece)
      let hl = "", sh = "";
      ps.forEach((p, i) => {
        if (p.role === "sole" || p.role === "stripe") return;
        hl += hullPath(circ[i].map(([x, y, r]) => [x - 0.27 * r, y - 0.3 * r, r * 0.5]));
        sh += hullPath(circ[i].map(([x, y, r]) => [x + 0.3 * r, y + 0.32 * r, r * 0.48]));
      });
      svgEl("path", { d: sh, style: `fill: var(--stage-bg); opacity: ${far ? 0.16 : 0.13}` }, ug);
      svgEl("path", { d: hl, style: `fill: var(--stage-ink); opacity: ${far ? 0.05 : 0.11}` }, ug);
    }
    if (u === "head") drawHeadDetails(ug, body, scr, far);
  }
  return root;
}

function drawHeadDetails(g, body, scr, far) {
  const P = body.pts, F = body.frames.head, hs = body.scale * (body.kit.head || 1);
  const [cx, cy] = scr(P.cranium), R = 9.2 * hs + 0.35;
  // hair cap: covers the part of the cranium toward up-back
  const h3 = norm(add(mul(F.u, 0.86), mul(F.a, -0.5)));
  const h2 = body.pd(h3), hl = Math.hypot(h2[0], h2[1]);
  if (hl > 0.25) {
    const th = Math.atan2(-h2[1], h2[0]); // screen angle (y down) of the hair direction
    const kitHair = body.kitName === "older-adult" ? 0.42 : body.kitName === "child" ? 0.12 : 0.26;
    const dlt = R * kitHair * hl, beta = Math.acos(Math.max(-1, Math.min(1, dlt / R)));
    const e1 = [cx + R * Math.cos(th - beta), cy + R * Math.sin(th - beta)], e2 = [cx + R * Math.cos(th + beta), cy + R * Math.sin(th + beta)];
    const ctrl = [cx + Math.cos(th) * (dlt - R * 0.3), cy + Math.sin(th) * (dlt - R * 0.3)];
    const d = `M${fmt(e1[0])},${fmt(e1[1])}A${fmt(R)},${fmt(R)} 0 ${beta > Math.PI / 2 ? 1 : 0},1 ${fmt(e2[0])},${fmt(e2[1])}Q${fmt(ctrl[0])},${fmt(ctrl[1])} ${fmt(e1[0])},${fmt(e1[1])}Z`;
    svgEl("path", { d, style: `fill: ${body.kit.c.hair[far]}` }, g);
  }
  // near ear cue (lateral-ish views)
  for (const s of ["R", "L"]) {
    const e = P["ear" + s];
    if (body.depth(e) > body.depth(P.cranium) + 4.5 * hs) {
      const [ex, ey] = scr(e), ua = body.pd(F.u), ang = Math.atan2(-ua[1], ua[0]) * 180 / Math.PI;
      svgEl("ellipse", { cx: fmt(ex), cy: fmt(ey), rx: fmt(2.9 * hs), ry: fmt(1.9 * hs), transform: `rotate(${fmt(ang)} ${fmt(ex)} ${fmt(ey)})`, style: `fill: none; stroke: ${mixc("--fig-skin", 55, "--stage-bg")}; stroke-width: ${fmt(0.55 * hs)}; opacity: .7` }, g);
    }
  }
}

/** Contact shadow under a body (screen units). */
export function drawShadow(g, body, opts = {}) {
  const low = body.bounds.y0;
  const k = clamp(1 - low / 90);
  if (k <= 0.02) return;
  let xs = [];
  for (const id of ["heelR", "heelL", "toeR", "toeL", "kneeR", "kneeL", "handR", "handL", "pelvis", "head"]) { const [x, y] = body.targets[id]; if (y < low + 14) xs.push(x); }
  if (!xs.length) xs = [(body.bounds.x0 + body.bounds.x1) / 2];
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2, w = (Math.max(...xs) - Math.min(...xs)) / 2 + 16 * body.scale;
  svgEl("ellipse", { cx: fmt(cx + (opts.dx || 0)), cy: fmt(1.2), rx: fmt(w * (0.7 + 0.3 * k)), ry: fmt(3.4 * body.scale), style: `fill: var(--stage-bg); opacity: ${fmt(0.55 * k)}` }, g);
}

/* ---------------- public geometry API ---------------- */
function poseFromAngles(view, angles, root) {
  if (typeof angles === "string") return presetPose(angles, view, {}, root || {});
  if (angles && angles.lat && angles.ant) { const p = { ...angles, root: { ...baseRoot(), ...(angles.root || {}), ...(root || {}) } }; return p.flat ? p : { ...p, flat: { lat: {}, ant: {} } }; }
  return resolvePose(standPose(), { joints: angles || {}, root: root || {} }, view);
}
/** skeleton(view, angles, root) → { joints: { pelvis, hipR, kneeR, ankleR, heelR, toeR, shoulderR, elbowR, wristR, handR, neckBase, head, ... : [x, y] }, bounds }
 *  `angles`: preset name, a full pose, or a { joint: degrees } map in this view's semantics (merged over stand). World cm, y UP. */
export function skeleton(view, angles, root, opts = {}) {
  const b = buildBody(poseFromAngles(view, angles, root), view, opts);
  const joints = {};
  for (const k of ["pelvis", "lumbarBase", "t12", "neckBase", "headBase", "head", "cranium", "shoulderR", "shoulderL", "elbowR", "elbowL", "wristR", "wristL", "handR", "handL", "fingertipR", "fingertipL",
    "hipR", "hipL", "kneeR", "kneeL", "ankleR", "ankleL", "heelR", "heelL", "footR", "footL", "mtpR", "mtpL", "toeR", "toeL"]) joints[k] = b.pr(b.pts[k]);
  return { joints, bounds: b.bounds };
}
/** bodyTargets(view, angles, root) → { kneeR: [x, y], ... } for EVERY BODY_TARGETS id (world cm, y UP). */
export function bodyTargets(view, angles, root, opts = {}) { return buildBody(poseFromAngles(view, angles, root), view, opts).targets; }

/** Screen-space (y-down) frames for props: position + unit direction of hands/feet/forearms. */
export function targetFrames(body) {
  const out = {};
  const f = (id, frame, pt) => { const p = body.pr(pt), d = body.pd(frame.u); const n = Math.hypot(d[0], d[1]) || 1; out[id] = { p: [p[0], -p[1]], dir: [d[0] / n, -d[1] / n], len: n }; };
  for (const s of ["L", "R"]) {
    f("hand" + s, body.frames["hand" + s], body.pts["hand" + s]);
    f("wrist" + s, body.frames["hand" + s], body.pts["wrist" + s]);
    f("forearm" + s, body.frames["forearm" + s], body.pts["wrist" + s]);
    f("foot" + s, body.frames["foot" + s], body.pts["foot" + s]);
    f("toe" + s, body.frames["foot" + s], body.pts["toe" + s]);
    f("heel" + s, body.frames["foot" + s], body.pts["heel" + s]);
    const sole = body.pr(body.pts["mtp" + s]), hl = body.pr(body.pts["heel" + s]);
    out["sole" + s] = { p: [(sole[0] + hl[0]) / 2, -(Math.min(sole[1], hl[1]) - 3.6 * body.scale)], dir: out["foot" + s].dir };
  }
  for (const id of BODY_TARGETS) if (!out[id]) { const p = body.targets[id]; out[id] = { p: [p[0], -p[1]], dir: [1, 0], len: 1 }; }
  return out;
}

/* ---------------- static figure for exercise cards ---------------- */
let figSeq = 0;
/**
 * renderFigure({ view, pose, joints, props, width, height, kit, background, padding, label }) → SVGSVGElement
 * Auto-fits the viewBox around the figure and its props. `background: false` omits the dark lightbox panel.
 */
export function renderFigure(opts = {}) {
  const { pose = "stand", joints = {}, props = [], width = 160, height = 120, kit = "athlete", background = true } = opts;
  let view = opts.view === "anterior" ? "anterior" : "lateral";
  const name = PRESETS[pose] ? pose : "stand";
  if (view === "anterior" && !hasView(name, "anterior")) view = "lateral";
  const p = presetPose(name, view, joints);
  const body = buildBody(p, view, { kit });
  const svg = svgEl("svg", { xmlns: NS, width, height, role: "img", class: "rig-svg", "aria-label": POSE_PRESETS[name] || name, preserveAspectRatio: "xMidYMid meet" });
  const title = svgEl("title", null, svg); title.textContent = POSE_PRESETS[name] || name;
  const id = `rig-fig-${++figSeq}`;
  const g = svgEl("g", { class: "rig-root", "data-fig": id });
  const placed = placeStaticProps(props.filter((x) => PROP_IDS.includes(x)), body, p.hints || {}, { seat: p.seat > 0.5, view });
  const back = svgEl("g", null, g), mid = svgEl("g", null, g), front = svgEl("g", null, g);
  let bx0 = body.bounds.x0, bx1 = body.bounds.x1, by0 = Math.min(0, body.bounds.y0), by1 = body.bounds.y1;
  for (const pl of placed) {
    const bb = drawProp(pl.front ? front : back, pl.type, pl, { view });
    if (bb) { bx0 = Math.min(bx0, bb.x0); bx1 = Math.max(bx1, bb.x1); by0 = Math.min(by0, bb.y0); by1 = Math.max(by1, bb.y1); }
  }
  drawShadow(back, body);
  drawBody(mid, body, { outline: 0.95 });
  // fit
  const pad = (opts.padding ?? 0.1);
  let w = bx1 - bx0, h = by1 - by0;
  const cx = (bx0 + bx1) / 2, cy = -(by0 + by1) / 2;
  w *= 1 + 2 * pad; h *= 1 + 2 * pad;
  const ar = width / height;
  if (w / h > ar) h = w / ar; else w = h * ar;
  const vb = [cx - w / 2, cy - h / 2, w, h];
  // keep the ground line visible near the bottom when there's room
  svg.setAttribute("viewBox", vb.map(fmt).join(" "));
  if (background) {
    svgEl("rect", { x: fmt(vb[0]), y: fmt(vb[1]), width: fmt(vb[2]), height: fmt(vb[3]), rx: fmt(vb[2] * 0.04), style: "fill: var(--stage-bg)" }, svg);
    svgEl("rect", { x: fmt(vb[0]), y: "0", width: fmt(vb[2]), height: fmt(Math.max(0, vb[1] + vb[3])), style: "fill: var(--stage-bg-2)" }, svg);
  }
  svgEl("line", { x1: fmt(vb[0]), x2: fmt(vb[0] + vb[2]), y1: "0", y2: "0", style: "stroke: var(--stage-grid); stroke-width: " + fmt(Math.max(0.6, vb[2] / 260)) }, svg);
  svg.append(g);
  return svg;
}
