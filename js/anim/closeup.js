/**
 * closeup.js — renders a `closeup` phase frame: an atlas-style anatomical scene (js/anim/scenes/<id>.js)
 * plus the cumulative injury actions of ANIMATION_DSL.md §1.3. OWNER: A8.
 *
 * Public API
 *   renderCloseupFrame(g, phase, t, ctx) → { viewBox:[x,y,w,h], anchors, ready }
 *       Pure & idempotent for any t (scrubbing backwards works). Lazy-loads the scene the first time; until it
 *       has loaded it draws a quiet placeholder, returns ready:false and calls ctx.requestRender?.() once loaded.
 *   loadScene(id) → Promise<scene|null>      preloadCloseup(phase) → Promise   (await before first frame to avoid the placeholder)
 *   registerScene(scene)                      inject a scene object (tests / previews)
 *   renderStatic(svg, scene, { actions, t, mirror }) → result    static preview (tools/scene-preview.html uses it)
 *   closeupDefaults                           default `dur` per action (s)
 * ctx = { reducedMotion, width, height, defs, warn }  — defs is a shared document-wide <defs>: only static ids `closeup-*`
 * are added there (once). Per-frame clip paths live inside the drawn group with instance-unique ids.
 *
 * Optional scene-structure properties understood here (in addition to DSL §4):
 *   kind: "artery" | "vein" (vessel colour; ids containing "vein" default to vein)
 *   visible: true (space drawn clearly at rest, e.g. canals) | hidden: true (space invisible until used)
 *   fill: "marrow" | "fat" | "fluid" | "skin" (override body fill for a space)
 *   epiphysis: "<bone id>" (on a physis: which bone moves in a Salter–Harris separation)
 *   fillRule: "evenodd"
 * Action conventions: `dir` for brain `accelerate` = direction the head is accelerated (coup on the opposite pole,
 * contrecoup on the leading pole); "coup" | "contrecoup" use the scene's coupSite anchor. Cartilage tears
 * longitudinal / bucket-handle / horizontal run ALONG the structure's axis; radial runs across it.
 * Arrows stay `hold` s (default 3) then fade; pain markers persist unless `hold` is given.
 */
import * as F from "./closeup-fx.js";
import { listStructureActions, GENERIC_ACTIONS, SCENE_ACTIONS, STRUCTURE_TYPES, FRACTURE_PATTERNS, CARTILAGE_TEARS, HERNIATION_GRADES, SALTER_HARRIS } from "./catalogue.js";

const { el, C, mix, clamp, lerp, ease, easeOut, bump, add, sub, mul, dot, len, dist, norm, perp, rotv, lerp2, fmt, url, soft } = F;

export const closeupDefaults = {
  _: 0.6, stress: 1.5, bleed: 1.6, effuse: 1.2, pressure: 1.2, accelerate: 1.4, scatter: 2.2, herniate: 1.2, haematoma: 1.0,
  ossify: 1.4, degenerate: 1.0, swell: 0.9, inflame: 0.9, camera: 0.8, arrow: 0.5, impact: 0.9, pain: 0.5, separate: 0.9, label: 0.35
};
const ALL_ACTIONS = new Set([...GENERIC_ACTIONS, ...SCENE_ACTIONS, ...Object.values(STRUCTURE_TYPES).flat()]);
const DEF_DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0], superior: [0, -1], inferior: [0, 1], proximal: [0, -1], distal: [0, 1] };
const FIBROUS = new Set(["ligament", "tendon", "nerve", "vessel", "fascia", "capsule"]);
const BAND_DEFAULT_W = { ligament: 10, tendon: 10, nerve: 7, vessel: 6, fascia: 5, capsule: 6, muscle: 34, cartilage: 8, physis: 6, fatpad: 20, bone: 20, space: 20, bursa: 12, disc: 20, brain: 40, particles: 6 };
const num = (v, d) => (typeof v === "number" && Number.isFinite(v) ? v : d);

/* ================================================================== warnings */
const WARNED = new WeakMap(), GLOBAL_WARNED = new Set();
function warner(ctx) {
  const set = ctx && typeof ctx === "object" ? (WARNED.get(ctx) || (WARNED.set(ctx, new Set()), WARNED.get(ctx))) : GLOBAL_WARNED;
  return (msg) => {
    const m = `[anim] closeup: ${msg}`; if (set.has(m)) return; set.add(m);
    try { if (ctx && typeof ctx.warn === "function") ctx.warn(m); else console.warn(m); } catch { /* never throw */ }
  };
}

/* ================================================================== scene loading */
const SCENE_CACHE = new Map();
export function registerScene(scene) { if (scene && scene.id) SCENE_CACHE.set(scene.id, { status: "ready", scene, promise: Promise.resolve(scene) }); }
export function loadScene(id) {
  if (!id) return Promise.resolve(null);
  let e = SCENE_CACHE.get(id);
  if (!e) {
    e = { status: "loading", waiters: [] };
    e.promise = import(new URL(`./scenes/${id}.js`, import.meta.url).href)
      .then((m) => { const sc = m.default || m.scene; if (!sc || typeof sc.structures !== "object") throw new Error("no default export with structures"); e.status = "ready"; e.scene = sc; return sc; })
      .catch((err) => { e.status = "missing"; e.error = err; return null; })
      .then((sc) => { for (const w of e.waiters) { try { w(); } catch { /* ignore */ } } e.waiters = []; return sc; });
    SCENE_CACHE.set(id, e);
  }
  return e.promise;
}
export const preloadCloseup = (phase) => loadScene(phase && phase.scene);

/* ================================================================== scene preparation (cached per scene object) */
const PREP = new WeakMap();
function prepare(scene, warn) {
  let P = PREP.get(scene); if (P) return P;
  const vbOk = Array.isArray(scene.viewBox) && scene.viewBox.length === 4 && scene.viewBox.every(Number.isFinite);
  if (!vbOk) warn(`scene "${scene.id}" has no valid viewBox — using [0,0,800,450]`);
  P = { scene, id: scene.id || "scene", vb: vbOk ? scene.viewBox.slice() : [0, 0, 800, 450], dirs: scene.directions || {}, structs: [], byId: {}, anchors: {}, cache: {} };
  for (const [k, v] of Object.entries(scene.anchors || {})) {
    if (Array.isArray(v) && Number.isFinite(v[0]) && Number.isFinite(v[1])) P.anchors[k] = [v[0], v[1]];
    else warn(`anchor "${k}" in scene "${P.id}" is not an [x, y] pair`);
  }
  let order = 0;
  for (const [id, s] of Object.entries(scene.structures || {})) {
    try { const sp = prepStructure(id, s, order++, P, warn); if (sp) { P.structs.push(sp); P.byId[id] = sp; } }
    catch (e) { warn(`structure "${id}" in scene "${P.id}" could not be prepared (${e.message}) — skipped`); }
  }
  P.structs.sort((a, b) => a.z - b.z || a.order - b.order);
  P.structs.forEach((sp, i) => (sp.idx = i));
  const [x, y, w, h] = P.vb;
  const sp0 = P.structs.find((s) => s.type === "space" && s.poly);
  P.jointCentre = P.anchors.jointCentre || P.anchors.centreOfMass || (sp0 ? sp0.c : [x + w / 2, y + h / 2]);
  P.dirVec = (k) => dirVec(P, k);
  PREP.set(scene, P);
  return P;
}
function dirVec(P, key) {
  if (typeof key === "number" && Number.isFinite(key)) { const r = (key * Math.PI) / 180; return [Math.cos(r), -Math.sin(r)]; }
  const v = P.dirs[key] !== undefined ? P.dirs[key] : DEF_DIRS[key];
  if (Array.isArray(v) && (v[0] || v[1])) return norm(v);
  if (v === "out" || v === "in") return v;
  return null;
}

function prepStructure(id, s, order, P, warn) {
  if (!s || typeof s !== "object") { warn(`structure "${id}" is not an object`); return null; }
  let type = s.type;
  if (!STRUCTURE_TYPES[type]) { warn(`structure "${id}" has unknown type "${type}" — drawn as fascia`); type = "fascia"; }
  const sp = { id, s, type, z: num(s.z, 0), order, ghost: !!s.ghost };
  let centre = null, poly = null, closedD = null;
  if (typeof s.d === "string" && s.d.trim()) {
    const subs = F.flattenPath(s.d);
    if (!subs.length) { warn(`structure "${id}" has an unreadable path`); return null; }
    const closed = subs.some((q) => q.closed) || /z\s*$/i.test(s.d.trim());
    if (!closed && FIBROUS.has(type)) centre = subs[0].pts;
    else { let best = subs[0]; for (const q of subs) if (Math.abs(F.areaOf(q.pts)) > Math.abs(F.areaOf(best.pts))) best = q; poly = best.pts; closedD = s.d; sp.subs = subs; }
  } else if (typeof s.path === "string") { const subs = F.flattenPath(s.path); if (subs.length) centre = subs[0].pts; }
  else if (Array.isArray(s.points) && s.points.length >= 2) centre = F.catmull(s.points, 8);
  else if (Array.isArray(s.from) && Array.isArray(s.to)) {
    const [x1, y1] = s.from, [x2, y2] = s.to, b = num(s.bend, 0), mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    const cpt = [mx - (dy / L) * b * 2, my + (dx / L) * b * 2];
    centre = []; for (let k = 0; k <= 24; k++) { const t = k / 24, u = 1 - t; centre.push([u * u * x1 + 2 * u * t * cpt[0] + t * t * x2, u * u * y1 + 2 * u * t * cpt[1] + t * t * y2]); }
  } else if (Number.isFinite(s.cx) && Number.isFinite(s.cy)) {
    const rx = num(s.rx, num(s.r, 10)), ry = num(s.ry, num(s.r, rx));
    sp.ell = { cx: s.cx, cy: s.cy, rx, ry, rot: num(s.rotate, 0) };
    if (type !== "particles") { poly = F.ellipsePts(s.cx, s.cy, rx, ry, sp.ell.rot, 56); closedD = F.dPoly(poly); }
  } else { warn(`structure "${id}" has no geometry (d | from/to | points | cx/cy)`); return null; }

  if (centre) {
    centre = F.resample(centre.filter((p) => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1])), 48);
    const w = num(s.width, BAND_DEFAULT_W[type] || 8);
    sp.band = { C: centre, L: F.cumLengths(centre) };
    sp.band.len = sp.band.L[sp.band.L.length - 1] || 1;
    sp.band.hw = w / 2;
    if (!FIBROUS.has(type)) {
      // closed-shape types given as a band: build an outline (spindle for muscle)
      const H = centre.map((_, i) => { const u = i / (centre.length - 1); return type === "muscle" ? (w / 2) * (0.3 + 0.7 * Math.pow(Math.sin(Math.PI * u), 0.65)) : w / 2; });
      poly = ribbonPts(centre, H, H, true, true); closedD = F.dPoly(poly);
      if (type === "muscle" && !s.axis) s = { ...s, axis: [centre[0], centre[centre.length - 1]] }, sp.s = s;
    }
  }
  if (poly) {
    if (poly.length > 2 && dist(poly[0], poly[poly.length - 1]) < 0.01) poly = poly.slice(0, -1);
    sp.poly = poly; sp.d = closedD; sp.bb = F.bboxOf(poly); sp.c = F.centroidOf(poly); sp.area = Math.abs(F.areaOf(poly));
    const pc = F.pca(poly, sp.c);
    sp.u = pc.u; sp.n = pc.n; sp.len = pc.tmax - pc.tmin; sp.thick = pc.nmax - pc.nmin;
    let a, b;
    if (Array.isArray(s.axis) && s.axis.length === 2 && dist(s.axis[0], s.axis[1]) > 1) { a = s.axis[0]; b = s.axis[1]; }
    else { a = add(sp.c, mul(pc.u, pc.tmin)); b = add(sp.c, mul(pc.u, pc.tmax)); }
    sp.ax = { a, b, L: dist(a, b), u: norm(sub(b, a)) }; sp.ax.n = perp(sp.ax.u);
    sp.prof = profile(poly, sp.ax);
  } else if (sp.band) {
    const C0 = sp.band.C; sp.bb = F.bboxOf(C0); sp.bb = { x: sp.bb.x - sp.band.hw, y: sp.bb.y - sp.band.hw, w: sp.bb.w + 2 * sp.band.hw, h: sp.bb.h + 2 * sp.band.hw };
    sp.c = F.along(C0, sp.band.L, 0.5).p; sp.u = norm(sub(C0[C0.length - 1], C0[0])); sp.n = perp(sp.u); sp.len = sp.band.len; sp.thick = sp.band.hw * 2; sp.area = sp.len * sp.thick;
  } else if (type === "particles") {
    const e = sp.ell; sp.c = [e.cx, e.cy]; sp.bb = { x: e.cx - e.rx * 2, y: e.cy - e.rx * 2, w: e.rx * 4, h: e.rx * 4 }; sp.u = [1, 0]; sp.n = [0, 1]; sp.len = sp.thick = e.rx * 2; sp.area = 1;
  }
  sp.minDim = Math.max(4, Math.min(sp.len || 10, sp.thick || 10));
  sp.frame = (q) => frameAt(sp, q);
  // fibrous band model (centreline + half-widths in "s" units)
  if (FIBROUS.has(type)) sp.bm = bandModel(sp);
  // label anchor
  const lab = Array.isArray(s.label) && Number.isFinite(s.label[0]) ? s.label : null;
  const inside = lab && insideStruct(sp, lab, 2);
  sp.labelPt = inside ? lab : sp.band ? sp.c : sp.ell && type !== "particles" ? [sp.ell.cx, sp.ell.cy] : sp.prof ? frameAt(sp, 0.5).p : sp.c;
  sp.labelPref = lab && !inside ? lab : null;
  sp.outline = sp.d || (sp.bm ? F.dPoly(ribbonPts(sp.bm.C, sp.bm.H, sp.bm.H, true, true)) : null);
  return sp;
}
function insideStruct(sp, p, tol = 0) {
  if (sp.poly) { const b = sp.bb; if (p[0] < b.x - tol || p[0] > b.x + b.w + tol || p[1] < b.y - tol || p[1] > b.y + b.h + tol) return false; return F.pointInPoly(p, sp.poly); }
  if (sp.band) return F.nearestOnPoly(sp.band.C, p, false).d <= sp.band.hw + tol;
  if (sp.ell) return dist(p, [sp.ell.cx, sp.ell.cy]) < sp.ell.rx * 2;
  return false;
}
/** Cross-section profile of a closed shape along an axis a→b. */
function profile(poly, ax) {
  let tmin = Infinity, tmax = -Infinity;
  for (const p of poly) { const t = dot(sub(p, ax.a), ax.u); tmin = Math.min(tmin, t); tmax = Math.max(tmax, t); }
  const N = 40, T = [], M = [], H = [];
  for (let k = 0; k < N; k++) {
    const t = lerp(tmin + 0.6, tmax - 0.6, k / (N - 1)), q = add(ax.a, mul(ax.u, t));
    const sp = F.spanAt(poly, q, ax.n);
    if (sp) { T.push(t); M.push((sp[0] + sp[1]) / 2); H.push(Math.max(0.3, (sp[1] - sp[0]) / 2)); }
  }
  if (!T.length) { T.push(0, ax.L); M.push(0, 0); H.push(2, 2); }
  return { T, M, H, tmin: T[0], tmax: T[T.length - 1] };
}
function interp(X, Y, x) {
  const n = X.length; if (n === 1) return Y[0]; if (x <= X[0]) return Y[0]; if (x >= X[n - 1]) return Y[n - 1];
  let i = 1; while (i < n - 1 && X[i] < x) i++;
  const u = (x - X[i - 1]) / (X[i] - X[i - 1] || 1); return Y[i - 1] + (Y[i] - Y[i - 1]) * u;
}
/** Local frame at fraction s along the structure: { p, u, n, half }. */
function frameAt(sp, s) {
  if (sp.band) {
    const { p, u } = F.along(sp.band.C, sp.band.L, clamp(s, 0, 1));
    return { p, u, n: perp(u), half: sp.band.hw };
  }
  if (sp.prof) {
    const ax = sp.ax, t = s * ax.L, pr = sp.prof, tc = clamp(t, pr.tmin, pr.tmax);
    return { p: add(add(ax.a, mul(ax.u, tc)), mul(ax.n, interp(pr.T, pr.M, tc))), u: ax.u, n: ax.n, half: interp(pr.T, pr.H, tc) };
  }
  return { p: sp.c, u: sp.u || [1, 0], n: sp.n || [0, 1], half: (sp.thick || 10) / 2 };
}
/** s (0–1 along band; axis units for shapes) of the point of the structure nearest to p. */
function projectS(sp, p) {
  if (sp.band) { const nr = F.nearestOnPoly(sp.band.C, p, false); return (sp.band.L[nr.i] + nr.u * (sp.band.L[nr.i + 1] - sp.band.L[nr.i])) / sp.band.len; }
  if (sp.ax) return dot(sub(p, sp.ax.a), sp.ax.u) / (sp.ax.L || 1);
  return 0.5;
}
function bandModel(sp) {
  if (sp.band) {
    const n = sp.band.C.length, S = sp.band.L.map((l) => l / sp.band.len), flare = sp.type === "ligament" || sp.type === "tendon" ? 0.22 : 0;
    const H = S.map((s) => sp.band.hw * (1 + flare * (bump(s, 0.07) + bump(1 - s, 0.07))));
    return { C: sp.band.C, H, S, n };
  }
  const pr = sp.prof, ax = sp.ax, C0 = [], H = [], S = [];
  for (let k = 0; k < pr.T.length; k++) { C0.push(add(add(ax.a, mul(ax.u, pr.T[k])), mul(ax.n, pr.M[k]))); H.push(pr.H[k]); S.push(pr.T[k] / (ax.L || 1)); }
  return { C: C0, H, S, n: C0.length, fromPoly: true };
}
/** Outline polygon around a centreline with left/right half-widths (+ optional rounded caps). */
function ribbonPts(Cl, HL, HR, capA = true, capB = true, capStyle = null) {
  const n = Cl.length, L = [], R = [];
  for (let i = 0; i < n; i++) {
    const a = Cl[Math.max(0, i - 1)], b = Cl[Math.min(n - 1, i + 1)], nn = perp(norm(sub(b, a)));
    L.push(add(Cl[i], mul(nn, HL[i]))); R.push(sub(Cl[i], mul(nn, HR[i])));
  }
  const cap = (c, from, to, dir, style) => {
    const out = [], r = (dist(from, c) + dist(to, c)) / 2 || 1, a0 = Math.atan2(from[1] - c[1], from[0] - c[0]);
    let a1 = Math.atan2(to[1] - c[1], to[0] - c[0]), da = a1 - a0;
    const mid = Math.atan2(dir[1], dir[0]);
    // choose the sweep that passes through `dir`
    const norm2 = (x) => Math.atan2(Math.sin(x), Math.cos(x));
    if (Math.abs(norm2(a0 + norm2(da) / 2 - mid)) > Math.PI / 2) da = norm2(da) > 0 ? norm2(da) - 2 * Math.PI : norm2(da) + 2 * Math.PI; else da = norm2(da);
    for (let k = 1; k < 8; k++) { const a = a0 + (da * k) / 8; const rr = style ? style(k) * r : r; out.push([c[0] + Math.cos(a) * rr, c[1] + Math.sin(a) * rr]); }
    return out;
  };
  const tB = norm(sub(Cl[n - 1], Cl[Math.max(0, n - 2)])), tA = norm(sub(Cl[0], Cl[Math.min(n - 1, 1)]));
  const out = [...L];
  if (capB) out.push(...cap(Cl[n - 1], L[n - 1], R[n - 1], tB, capStyle && capStyle.B));
  out.push(...R.reverse());
  if (capA) out.push(...cap(Cl[0], R[R.length - 1], L[0], tA, capStyle && capStyle.A));
  return out;
}

/* ================================================================== action planning (cached per phase) */
const PLANS = new WeakMap();
function resolvePt(P, sp, at, warn, what) {
  if (typeof at === "string") { if (P.anchors[at]) return P.anchors[at]; warn(`${what}: anchor "${at}" is not in scene "${P.id}"`); return null; }
  if (Array.isArray(at) && Number.isFinite(at[0])) return at;
  if (typeof at === "number" && sp) return frameAt(sp, clamp(at, 0, 1)).p;
  return null;
}
function resolveS(P, sp, at, def = 0.5) {
  if (typeof at === "number" && Number.isFinite(at)) return clamp(at, 0, 1);
  if (typeof at === "string" && P.anchors[at]) return projectS(sp, P.anchors[at]);
  return def;
}
function plan(P, phase, warn) {
  let byScene = PLANS.get(phase); if (byScene && byScene.P === P) return byScene;
  const acts = Array.isArray(phase.actions) ? phase.actions : [];
  const list = [];
  acts.forEach((a0, idx) => {
    try {
      if (!a0 || typeof a0 !== "object") return warn(`action #${idx} is not an object`);
      const a = { ...a0, idx, t: num(a0.t, NaN) };
      if (!Number.isFinite(a.t)) return warn(`action #${idx} (${a0.do}) has no numeric t — skipped`);
      if (!ALL_ACTIONS.has(a.do)) return warn(`unknown action "${a.do}" (#${idx}) — skipped`);
      a.dur = Math.max(0.01, num(a0.dur, closeupDefaults[a.do] ?? closeupDefaults._));
      a.seed = F.hash(`${P.id}:${idx}:${a.do}:${a.target || a.at || ""}`);
      if (SCENE_ACTIONS.includes(a.do)) {
        if (a.do === "camera") {
          if (a.target && P.byId[a.target]) a.pt = P.byId[a.target].c;
          else if (a.at) a.pt = resolvePt(P, null, a.at, warn, `camera #${idx}`);
          else if (a.target) warn(`camera #${idx}: target "${a.target}" not in scene`);
        } else {
          a.pt = resolvePt(P, null, a.at, warn, `${a.do} #${idx}`);
          if (!a.pt) return warn(`${a.do} #${idx} needs a valid anchor in "at" — skipped`);
          if (a.do === "arrow") {
            const v = dirVec(P, a.dir === undefined ? "down" : a.dir);
            if (!v) { warn(`arrow #${idx}: direction "${a.dir}" unknown in scene "${P.id}" — using down`); a.vec = [0, 1]; } else if (typeof v === "string") a.oop = v; else a.vec = v;
          }
        }
        list.push(a); return;
      }
      const sp = P.byId[a.target];
      if (!sp) return warn(`${a.do} #${idx}: target "${a.target}" is not a structure of scene "${P.id}" — skipped`);
      if (!listStructureActions(sp.type).includes(a.do)) return warn(`${a.do} #${idx}: not allowed on ${sp.type} "${sp.id}" — skipped`);
      a.sp = sp;
      prepAction(P, sp, a, warn);
      list.push(a);
    } catch (e) { warn(`action #${idx} (${a0 && a0.do}) failed to prepare: ${e.message}`); }
  });
  list.sort((x, y) => x.t - y.t || x.idx - y.idx);
  // label schedule: one callout per structure (newer replaces older), max 4 visible
  const labels = [], lastPt = {};
  for (const a of list) {
    if (a.sp && a.focus) lastPt[a.sp.id] = a.focus;
    let text = null, key = null, pt = null, sid = null;
    if (a.do === "label") { text = a.text || a.label; key = a.sp.id; sid = a.sp.id; pt = (a.at !== undefined && resolvePt(P, a.sp, a.at, warn, "label")) || lastPt[a.sp.id] || null; }
    else if (a.label && a.do !== "arrow" && a.do !== "camera") { text = a.label; key = a.sp ? a.sp.id : `scene#${a.idx}`; sid = a.sp ? a.sp.id : null; pt = a.focus || a.pt || null; }
    if (text) labels.push({ key, sid, text: String(text), t0: a.t, pt, tEnd: Infinity });
  }
  const active = [];
  for (const L of labels) {
    const same = active.findIndex((q) => q.key === L.key);
    if (same >= 0) { active[same].tEnd = L.t0; active.splice(same, 1); }
    if (active.length >= 4) { active[0].tEnd = L.t0; active.shift(); }
    active.push(L);
  }
  byScene = { P, list, labels };
  PLANS.set(phase, byScene);
  return byScene;
}
function prepAction(P, sp, a, warn) {
  const R = F.rng(a.seed), where = `${a.do} #${a.idx} on "${sp.id}"`;
  switch (a.do) {
    case "move":
      if (a.to) { a.toPt = resolvePt(P, sp, a.to, warn, where); if (!a.toPt) warn(`${where}: move target missing`); }
      else { const v = dirVec(P, a.dir); if (!v) warn(`${where}: direction "${a.dir}" unknown`); else if (typeof v === "string") a.oop = v === "out" ? 1 : -1; else a.vec = v; a.amount = clamp(num(a.amount, 0.3), 0, 1.5); }
      break;
    case "fracture": case "bruise": case "stress": {
      if (sp.type === "bone" || sp.type === "brain") {
        a.pt = resolvePt(P, sp, a.at, warn, where) || sp.labelPt; a.focus = a.pt;
        if (a.do === "fracture") {
          if (!FRACTURE_PATTERNS.includes(a.pattern)) { warn(`${where}: pattern "${a.pattern}" unknown — using transverse`); a.pattern = "transverse"; }
          a.geo = fractureGeom(P, sp, a.pt, a.pattern, !!a.displaced, R);
        }
        if (a.do === "stress") a.geo = surfaceAt(sp, a.pt);
      } else if (sp.type === "physis") { a.s = resolveS(P, sp, a.at, 0.5); a.focus = typeof a.at === "string" && P.anchors[a.at] ? P.anchors[a.at] : frameAt(sp, a.s).p; }
      else if (sp.type === "brain") a.focus = a.pt = resolvePt(P, sp, a.at, warn, where) || sp.labelPt;
      break;
    }
    case "separate":
      if (!SALTER_HARRIS.includes(a.grade)) { warn(`${where}: Salter–Harris grade "${a.grade}" unknown — using II`); a.grade = "II"; }
      a.geo = physisGeom(P, sp, a, warn); a.focus = sp.labelPt; break;
    case "tear":
      a.s = resolveS(P, sp, a.at, 0.5);
      if (sp.type === "cartilage") { if (!CARTILAGE_TEARS.includes(a.pattern)) { warn(`${where}: tear pattern "${a.pattern}" unknown — using longitudinal`); a.pattern = "longitudinal"; } a.geo = cartTearGeom(P, sp, a, R); }
      else { a.grade = [1, 2, 3].includes(a.grade) ? a.grade : sp.type === "vessel" ? 3 : sp.type === "capsule" || sp.type === "fascia" ? 2 : 3; }
      a.focus = sp.type === "capsule" && sp.poly ? capsulePt(sp, a.s, typeof a.at === "string" ? P.anchors[a.at] : null) : frameAt(sp, a.s).p; break;
    case "strain": a.grade = [1, 2, 3].includes(a.grade) ? a.grade : 2; a.s = resolveS(P, sp, a.at, 0.5); a.focus = frameAt(sp, a.s).p; break;
    case "haematoma": case "ossify": case "calcify": case "entrap": case "occlude": a.s = resolveS(P, sp, a.at, 0.5); a.focus = frameAt(sp, a.s).p; break;
    case "compress": if (sp.type === "nerve" || sp.type === "vessel") { a.s = resolveS(P, sp, a.at, 0.5); a.focus = frameAt(sp, a.s).p; } break;
    case "lesion": a.s = resolveS(P, sp, a.at, 0.5); a.depth = ["partial", "full", "osteochondral"].includes(a.depth) ? a.depth : "partial"; a.geo = lesionGeom(P, sp, a); a.focus = a.geo.pt; break;
    case "avulse": a.end = a.end === "from" ? "from" : "to"; a.focus = frameAt(sp, a.end === "from" ? 0 : 1).p; break;
    case "degenerate": a.s = resolveS(P, sp, a.at, 0.5); break;
    case "herniate": {
      if (!HERNIATION_GRADES.includes(a.grade)) { warn(`${where}: grade "${a.grade}" unknown — using protrusion`); a.grade = "protrusion"; }
      a.hd = discDir(P, sp, a.dir || "posterior", warn, where); a.focus = add(sp.c, mul(a.hd, discRadius(sp, a.hd))); break;
    }
    case "fissure": a.hd = discDir(P, sp, a.dir || "posterior", warn, where); a.focus = add(sp.c, mul(a.hd, discRadius(sp, a.hd) * 0.8)); break;
    case "bleed": a.src = resolvePt(P, sp, a.at, () => {}, where) || null; break;
    case "accelerate": a.geo = brainGeom(P, sp, a, warn); a.focus = a.geo.coupPt; break;
    case "scatter": a.toPt = resolvePt(P, sp, a.to, warn, where) || (warn(`${where}: scatter needs "to" anchor`), sp.c); a.focus = a.toPt; break;
    default: break;
  }
}

/* ================================================================== geometry for discrete effects */
function surfaceAt(sp, A) {
  const nr = F.nearestOnPoly(sp.poly, A); let nrm = perp(nr.tan || [1, 0]);
  if (F.pointInPoly(add(nr.pt, mul(nrm, 2)), sp.poly)) nrm = mul(nrm, -1);
  return { B: nr.pt, nrm, tan: nr.tan || [1, 0], depth: clamp(sp.minDim * 0.2, 5, 15) };
}
function fractureGeom(P, sp, A, pattern, displaced, R) {
  const u = sp.u, n = sp.n;
  let span = F.spanAt(sp.poly, A, n) || [-sp.thick / 2, sp.thick / 2];
  const W = Math.max(6, span[1] - span[0]);
  const E1 = add(A, mul(n, span[0] - 2)), E2 = add(A, mul(n, span[1] + 2));
  const distal = dirVec(P, "distal"), off = dot(sub(A, sp.c), u);
  let mv = off >= 0 ? u : mul(u, -1);
  if (Math.abs(off) < 0.12 * sp.len && Array.isArray(distal)) mv = dot(u, distal) >= 0 ? u : mul(u, -1);
  const sgn = R() < 0.5 ? -1 : 1, mid = lerp2(E1, E2, 0.5);
  const g = { pattern, lines: [], dashed: [], bands: [], bumps: [], cut: null, mv, disp: [0, 0], rot: 0, pivot: mid, frags: [], deform: null, displaced };
  const across = (dir, amp = 1.4, nseg = 9) => { const s2 = F.spanAt(sp.poly, A, dir) || span; return F.jagged(add(A, mul(dir, s2[0] - 3)), add(A, mul(dir, s2[1] + 3)), R, amp, nseg); };
  const load = (() => { const v = dirVec(P, "superior"); return Array.isArray(v) ? v : u; })();
  switch (pattern) {
    case "transverse": g.cut = across(n); g.lines.push(g.cut); g.disp = add(mul(n, 0.3 * W * sgn), mul(mv, 0.1 * W)); g.rot = 6 * sgn; break;
    case "oblique": { const o = norm(rotv(n, 38 * sgn)); g.cut = across(o, 1.1); g.lines.push(g.cut); g.disp = add(mul(n, 0.25 * W * sgn), mul(mv, 0.08 * W)); g.rot = 5 * sgn; break; }
    case "spiral": {
      const o = norm(rotv(n, 55 * sgn)), s2 = F.spanAt(sp.poly, A, o) || span, pts = [];
      for (let k = 0; k <= 12; k++) { const t = lerp(s2[0] - 3, s2[1] + 3, k / 12); pts.push(add(add(A, mul(o, t)), mul(u, Math.sin((Math.PI * k) / 12) * 0.16 * W * sgn))); }
      g.cut = pts; g.lines.push(pts);
      const back = []; for (let k = 0; k <= 10; k++) { const t = k / 10; back.push(add(lerp2(pts[pts.length - 1], add(pts[0], mul(u, dot(sub(pts[pts.length - 1], pts[0]), u) * 1.9)), t), mul(n, Math.sin(Math.PI * t) * 0.05 * W))); }
      g.dashed.push(back.map((p) => add(p, mul(mv, 0))));
      g.disp = add(mul(n, 0.22 * W * sgn), mul(mv, 0.06 * W)); g.rot = 9 * sgn; break;
    }
    case "comminuted": {
      g.cut = across(n, 1.8, 10); g.lines.push(g.cut);
      const e2 = add(A, mul(n, span[1])), B1 = add(sub(e2, mul(u, 0.48 * W)), mul(n, 4)), B2 = add(add(e2, mul(u, 0.48 * W)), mul(n, 4)), apex = add(A, mul(n, span[1] - 0.55 * W));
      g.lines.push(F.jagged(sub(e2, mul(u, 0.45 * W)), apex, R, 1.2, 5), F.jagged(apex, add(e2, mul(u, 0.45 * W)), R, 1.2, 5));
      const e1 = add(A, mul(n, span[0])), c1 = add(add(e1, mul(u, 0.25 * W)), mul(n, 0.22 * W)), c2 = add(sub(e1, mul(u, 0.3 * W)), mul(n, 0.18 * W));
      g.lines.push(F.jagged(add(e1, mul(u, 0.05 * W)), c1, R, 0.8, 4), F.jagged(c1, add(e1, mul(u, 0.42 * W)), R, 0.8, 4), F.jagged(sub(e1, mul(u, 0.12 * W)), c2, R, 0.8, 3));
      g.frags.push({ poly: [B1, apex, B2], disp: mul(n, 0.32 * W), rot: 14 });
      g.disp = add(mul(n, -0.2 * W), mul(mv, 0.12 * W)); g.rot = -7; break;
    }
    case "avulsion": {
      const S = surfaceAt(sp, A), dpt = S.depth, Q = sub(S.B, mul(S.nrm, dpt));
      g.lines.push(F.jagged(sub(Q, mul(S.tan, 1.9 * dpt)), add(Q, mul(S.tan, 1.9 * dpt)), R, 1, 6));
      const sq = [sub(Q, mul(S.tan, 2.2 * dpt)), add(Q, mul(S.tan, 2.2 * dpt)), add(add(Q, mul(S.tan, 2.2 * dpt)), mul(S.nrm, 4 * dpt)), add(sub(Q, mul(S.tan, 2.2 * dpt)), mul(S.nrm, 4 * dpt))];
      g.frags.push({ poly: sq, disp: add(mul(S.nrm, 1.1 * dpt), mul(S.tan, 0.4 * dpt)), rot: 20 * sgn, always: true, hole: true });
      g.pivot = S.B; break;
    }
    case "stress": {
      const S = surfaceAt(sp, A), inward = dot(n, S.nrm) > 0 ? mul(n, -1) : n;
      g.lines.push(F.jagged(add(S.B, mul(S.nrm, 0.5)), add(S.B, mul(inward, 0.48 * W)), R, 0.9, 6)); g.surf = S; break;
    }
    case "compression": case "wedge": {
      const lv = norm(load), cr = perp(lv), s2 = F.spanAt(sp.poly, A, cr) || span, h = 0.06 * Math.max(sp.len, sp.thick);
      const ant = (() => { const v = dirVec(P, "anterior"); return Array.isArray(v) ? v : cr; })(), antS = dot(ant, cr) >= 0 ? 1 : -1;
      const a1 = add(A, mul(cr, s2[0] - 2)), a2 = add(A, mul(cr, s2[1] + 2));
      const top = F.jagged(add(a1, mul(lv, h)), add(a2, mul(lv, pattern === "wedge" ? h * 0.3 : h)), R, 1.2, 10);
      const bot = F.jagged(add(a2, mul(lv, pattern === "wedge" ? -h * 0.3 : -h)), add(a1, mul(lv, -h)), R, 1.2, 10);
      if (pattern === "wedge" && antS < 0) { top.reverse(); }
      g.bands.push([...top, ...bot]); g.lines.push(top.slice(), bot.slice());
      const compact = sp.len / Math.max(1, sp.thick) < 1.5, width = Math.max(1, s2[1] - s2[0]);
      g.deform = { A, lv, cr, compact, wedge: pattern === "wedge", antS, s2, width }; break;
    }
    case "greenstick": {
      const e2 = add(A, mul(n, span[1] + 2)), e1 = add(A, mul(n, span[0]));
      g.lines.push(F.jagged(e2, add(A, mul(n, span[1] - 0.62 * W)), R, 1.2, 6));
      g.bumps.push({ p: e1, nrm: mul(n, -1), r: 0.1 * W }, { p: add(e1, mul(u, 0.14 * W)), nrm: mul(n, -1), r: 0.07 * W });
      g.cut = [add(e1, mul(n, -6)), add(e2, mul(n, 6))]; g.pivot = e1; g.disp = [0, 0]; g.rot = (dot(perp(mv), n) > 0 ? 1 : -1) * 10; g.hinge = true; break;
    }
    case "buckle": {
      const e1 = add(A, mul(n, span[0])), e2 = add(A, mul(n, span[1]));
      g.bumps.push({ p: e1, nrm: mul(n, -1), r: 0.11 * W }, { p: e2, nrm: n, r: 0.11 * W });
      g.lines.push(F.jagged(e1, add(e1, mul(n, 0.22 * W)), R, 0.6, 3), F.jagged(e2, add(e2, mul(n, -0.22 * W)), R, 0.6, 3)); break;
    }
    case "physeal": { const pts = []; for (let k = 0; k <= 12; k++) { const t = lerp(span[0] - 3, span[1] + 3, k / 12); pts.push(add(add(A, mul(n, t)), mul(u, Math.sin(k * 1.3) * 1.3))); } g.cut = pts; g.lines.push(pts); g.disp = mul(n, 0.22 * W * sgn); break; }
    case "impaction": {
      g.cut = across(n, 1.6); const h = 0.05 * W;
      const top = g.cut.map((p) => add(p, mul(mv, h))), bot = g.cut.map((p) => sub(p, mul(mv, h))).reverse();
      g.bands.push([...top, ...bot]); g.lines.push(g.cut); g.disp = mul(mv, -0.09 * W); break;
    }
    default: g.cut = across(n); g.lines.push(g.cut);
  }
  return g;
}
function deformPoly(poly, df, p) {
  return poly.map((q) => {
    const rel = sub(q, df.A), along = dot(rel, df.lv), acr = dot(rel, df.cr);
    let k = df.compact ? 0.14 : 0.05;
    if (df.wedge) k = (df.compact ? 0.3 : 0.08) * clamp(0.5 + (df.antS * (acr - (df.s2[0] + df.s2[1]) / 2)) / df.width, 0, 1);
    const fall = df.compact ? 1 : bump(along, Math.max(12, df.width * 0.8));
    const bulge = df.compact ? 0 : 0.04 * fall;
    return add(q, add(mul(df.lv, -along * k * p * fall), mul(df.cr, acr * bulge * p)));
  });
}
function physisGeom(P, sp, a, warn) {
  const c = sp.c, up = sp.u, np = sp.n, L = sp.len, half = sp.thick / 2;
  const bones = P.structs.filter((b) => b.type === "bone" && b.poly);
  const at = (pt) => { let best = null; for (const b of bones) if (insideStruct(b, pt)) { if (!best || b.z > best.z) best = b; } return best; };
  const probe = (sg) => { const hits = {}; for (const f of [-0.3, 0, 0.3]) { const b = at(add(add(c, mul(up, f * L)), mul(np, sg * (half + 7)))); if (b) hits[b.id] = (hits[b.id] || 0) + 1; } const k = Object.keys(hits).sort((x, y) => hits[y] - hits[x])[0]; return k ? P.byId[k] : null; };
  const A = probe(-1), B = probe(1);
  let epi = sp.s.epiphysis && P.byId[sp.s.epiphysis], meta = null, epiSide = null;
  if (epi) { meta = epi === A ? B : epi === B ? A : (A || B); epiSide = epi === A ? -1 : 1; }
  else if (A && B && A !== B) { epi = A.area < B.area ? A : B; meta = epi === A ? B : A; epiSide = epi === A ? -1 : 1; }
  else if (A || B) { meta = A || B; epiSide = dot(sub(meta.c, c), np) > 0 ? -1 : 1; epi = null; }
  else warn(`separate on "${sp.id}": no bone found either side of the physis`);
  const ne = mul(np, epiSide || 1), sg = a.dir !== undefined && Array.isArray(dirVec(P, a.dir)) ? (dot(dirVec(P, a.dir), up) >= 0 ? 1 : -1) : 1;
  const single = !epi && meta;
  const shiftU = mul(up, sg);
  const D = add(mul(shiftU, 0.12 * L), mul(ne, 0.05 * L));
  const pE = (f, d = 0) => add(add(c, mul(up, f * L * sg)), mul(ne, d));
  const R = F.rng(a.seed), gr = a.grade;
  const g = { grade: gr, epi, meta, single, D, ne, up: shiftU, lines: [], pieces: [] };
  const plateLine = (f0, f1, d) => { const pts = []; for (let k = 0; k <= 10; k++) { const f = lerp(f0, f1, k / 10); const fr = frameAt(sp, clamp(0.5 + (f * sg * L) / (sp.ax.L || L), -0.2, 1.2)); pts.push(add(fr.p, mul(ne, -d * (fr.half + 1)))); } return pts; };
  const metaDepth = 0.28 * L, epiDepth = Math.max(10, 0.22 * L);
  if (gr === "I") { g.lines.push(plateLine(-0.55, 0.55, 1)); }
  else if (gr === "II") {
    g.lines.push(plateLine(-0.55, 0.15, 1));
    const b0 = pE(0.15, -half - 1), apex = pE(0.58, -half - metaDepth);
    g.lines.push(F.jagged(b0, apex, R, 1, 6));
    g.tri = [pE(0.15, -half + 2), pE(0.9, -half + 2), pE(0.9, -half - metaDepth * 1.25), apex];
  } else if (gr === "III") {
    g.lines.push(plateLine(0.12, 0.58, 1));
    g.vline = F.jagged(pE(0.12, -half - 1), pE(0.12, half + epiDepth * 2.2), R, 1, 7); g.lines.push(g.vline);
  } else if (gr === "IV") {
    g.oline = F.jagged(pE(0.72, -half - metaDepth), pE(0.12, half + epiDepth * 2.4), R, 1.2, 9); g.lines.push(g.oline);
  } else if (gr === "V") { g.crush = true; }
  const solid = P.structs.filter((o) => (o.type === "bone" || o.type === "physis") && o.poly);
  g.lines = g.lines.flatMap((L) => trimInside(L, solid));
  return g;
}
/** Keep only the runs of a polyline that lie inside any of the given structures (lines stop at the bone surface). */
function trimInside(pts, structs) {
  const runs = []; let cur = [];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i], n = Math.max(1, Math.ceil(dist(a, b) / 2));
    for (let k = i === 1 ? 0 : 1; k <= n; k++) { const q = lerp2(a, b, k / n); if (structs.some((o) => insideStruct(o, q))) cur.push(q); else if (cur.length) { if (cur.length > 1) runs.push(cur); cur = []; } }
  }
  if (cur.length > 1) runs.push(cur);
  return runs;
}
function discDir(P, sp, dir, warn, where) {
  const post = dirVec(P, "posterior"), ant = dirVec(P, "anterior");
  const left = Array.isArray(dirVec(P, "left")) ? dirVec(P, "left") : [-1, 0], right = Array.isArray(dirVec(P, "right")) ? dirVec(P, "right") : [1, 0];
  const pv = Array.isArray(post) ? post : null, av = Array.isArray(ant) ? ant : pv ? mul(pv, -1) : null;
  let v = null;
  if (typeof dir === "number") v = dirVec(P, dir);
  else if (dir === "posterior") v = pv; else if (dir === "anterior") v = av;
  else if (/posterolateral-(left|right)/.test(dir)) { const s = dir.endsWith("left") ? left : right; v = pv ? norm(add(pv, mul(s, 0.8))) : s; }
  else if (/foraminal-(left|right)/.test(dir)) { const s = dir.endsWith("left") ? left : right; v = pv ? norm(add(mul(pv, 0.55), s)) : s; }
  else { const d2 = dirVec(P, dir); v = Array.isArray(d2) ? d2 : null; }
  if (!Array.isArray(v)) { warn(`${where}: direction "${dir}" is out of plane or unknown in "${P.id}" — drawn along the disc's minor axis`); v = sp.n || [0, 1]; }
  return norm(v);
}
function discRadius(sp, v) {
  if (sp.ell) { const r = (sp.ell.rot * Math.PI) / 180, u = [Math.cos(r), Math.sin(r)], n = perp(u), a = dot(v, u) / sp.ell.rx, b = dot(v, n) / sp.ell.ry; return 1 / Math.sqrt(a * a + b * b || 1); }
  const h = F.rayHits(sp.poly, sp.c, v).filter((t) => t > 0); return h.length ? h[0] : sp.thick / 2;
}
function cartSides(P, sp, s0) {
  const fr = frameAt(sp, s0), bones = P.structs.filter((b) => b.type === "bone" && b.poly);
  const pPlus = add(fr.p, mul(fr.n, fr.half + 5)), pMinus = sub(fr.p, mul(fr.n, fr.half + 5));
  const inB = (q) => bones.some((b) => insideStruct(b, q));
  let surf = 0;
  const bp = inB(pPlus), bm = inB(pMinus);
  if (bp && !bm) surf = -1; else if (bm && !bp) surf = 1;
  const jc = P.jointCentre, inner = dist(pPlus, jc) < dist(pMinus, jc) ? 1 : -1;
  if (!surf) surf = inner;
  return { fr, surf, inner };
}
function cartTearGeom(P, sp, a, R) {
  const s0 = a.s, span = sp.prof ? (sp.prof.tmax - sp.prof.tmin) / (sp.ax.L || 1) : 1, { inner } = cartSides(P, sp, s0);
  const pt = (s, f) => { const fr = frameAt(sp, s); return add(fr.p, mul(fr.n, f * fr.half)); };
  const line = (sA, sB, f, amp = 0.5) => { const out = []; for (let k = 0; k <= 14; k++) { const s = lerp(sA, sB, k / 14); out.push(pt(s, f + (k % 2 ? 1 : -1) * amp * 0.06 * R())); } return out; };
  const across = (s, f0, f1) => { const out = []; for (let k = 0; k <= 6; k++) out.push(pt(s + (R() - 0.5) * 0.012 * span, lerp(f0, f1, k / 6))); return out; };
  const L = 0.16 * span, g = { pattern: a.pattern, lines: [], lens: null, frag: null, fray: null, detach: null, inner };
  switch (a.pattern) {
    case "longitudinal": g.lines.push(line(s0 - L, s0 + L, 0.05 * inner)); break;
    case "bucket-handle": {
      const sA = s0 - L * 1.7, sB = s0 + L * 1.7; g.lines.push(line(sA, sB, 0.1 * inner));
      const edge = []; for (let k = 14; k >= 0; k--) edge.push(pt(lerp(sA, sB, k / 14), inner * 1.8));
      g.frag = { poly: [...line(sA, sB, 0.1 * inner), ...edge], disp: mul(frameAt(sp, s0).n, inner * (frameAt(sp, s0).half * 1.3 + 6)), rot: 8 * inner }; break;
    }
    case "horizontal": { const top = line(s0 - L, s0 + L, 0.02), bot = []; for (let k = 14; k >= 0; k--) { const s = lerp(s0 - L, s0 + L, k / 14), w = Math.sin((Math.PI * k) / 14) * 0.16; bot.push(pt(s, -w * inner + 0.02)); } g.lens = [...top.map((p, k) => add(p, mul(frameAt(sp, lerp(s0 - L, s0 + L, k / 14)).n, Math.sin((Math.PI * k) / 14) * 1.6 * inner))), ...bot]; g.lines.push(top); break; }
    case "radial": g.lines.push(across(s0, inner * 1.08, -inner * 0.25)); break;
    case "flap": {
      const l1 = [pt(s0 - 0.04 * span, inner * 1.05), pt(s0 + 0.02 * span, inner * 0.2), pt(s0 + 0.08 * span, -inner * 0.15)]; g.lines.push(l1);
      g.frag = { poly: [pt(s0 - 0.04 * span, inner * 1.6), ...l1, pt(s0 + 0.12 * span, inner * 1.6)], disp: mul(frameAt(sp, s0).n, inner * 7), rot: 26 * inner }; break;
    }
    case "complex": g.lines.push(across(s0, inner * 1.08, -inner * 0.2), line(s0 - L * 0.8, s0 + L * 0.8, -0.1 * inner), across(s0 + L * 0.6, inner * 1.05, inner * 0.1)); break;
    case "degenerative": g.fray = { s0, span: L * 1.6 }; for (let k = 0; k < 4; k++) { const s = s0 + (R() - 0.5) * L * 1.6; g.lines.push(across(s, inner * (0.4 + R() * 0.5), inner * (R() * 0.3 - 0.2))); } break;
    case "detachment": { const out = -inner; g.lines.push(line(s0 - L * 1.8, s0 + L * 1.8, out * 0.95)); g.detach = mul(frameAt(sp, s0).n, inner * 4); break; }
  }
  return g;
}
function lesionGeom(P, sp, a) {
  const { fr, surf } = cartSides(P, sp, a.s), w = clamp((sp.prof ? sp.prof.tmax - sp.prof.tmin : sp.len) * 0.13, 8, 30), T = fr.half * 2;
  const depth = a.depth === "partial" ? 0.55 * T : a.depth === "full" ? T + 0.5 : T + clamp(T * 0.9, 5, 14);
  const top = add(fr.p, mul(fr.n, surf * (fr.half + 1)));
  const inward = mul(fr.n, -surf), R = F.rng(a.seed + 3), crater = [];
  for (let k = 0; k <= 12; k++) { const u = k / 12, x = (u - 0.5) * w, d = depth * Math.pow(Math.sin(Math.PI * u), 0.55) + (R() - 0.5) * 1.2; crater.push(add(add(top, mul(fr.u, x)), mul(inward, d))); }
  crater.push(add(top, mul(fr.u, w / 2 + 1)), add(top, mul(fr.u, -w / 2 - 1)));
  return { pt: add(top, mul(inward, depth * 0.4)), crater, top, inward, w, depth, T, surf, u: fr.u };
}
function brainGeom(P, sp, a, warn) {
  let D = null, coupOnly = false;
  if (a.dir === "coup" || a.dir === "contrecoup") { coupOnly = a.dir === "coup"; const cs = P.anchors.coupSite; D = cs ? norm(sub(sp.c, cs)) : null; }
  else { const v = dirVec(P, a.dir === undefined ? "posterior" : a.dir); D = Array.isArray(v) ? v : null; }
  if (!D) { warn(`accelerate on "${sp.id}": direction "${a.dir}" not usable in plane — using screen left`); D = [-1, 0]; }
  const ext = (v) => { let best = sp.poly[0], bd = -Infinity; for (const q of sp.poly) { const d = dot(sub(q, sp.c), v); if (d > bd) { bd = d; best = q; } } return best; };
  return { D, coupPt: ext(mul(D, -1)), contraPt: ext(D), amp: clamp(sp.minDim * 0.045, 5, 14), coupOnly };
}
function capsulePt(sp, s, anchor) {
  if (anchor) return F.nearestOnPoly(sp.poly, anchor).pt;
  const L = F.cumLengths([...sp.poly, sp.poly[0]]); return F.along([...sp.poly, sp.poly[0]], L, s).p;
}

/* ================================================================== state engine */
function rest(sp) {
  return { vis: 1, fade: sp.ghost ? 0.35 : 1, hl: 0, pulse: 0, swell: 0, inflame: 0, dx: 0, dy: 0, rot: 0, oop: 0, reveal: 0,
    stretch: 0, contract: 0, atrophy: 0, thick: 0, degen: 0, degenAt: 0.5, tighten: 0, compress: 0, spasm: 0, irritate: 0, impinge: 0,
    bleed: 0, effuse: 0, pressure: 0, shear: 0, squeeze: 0, pstress: 0, crush: 0, fx: [], pieces: [] };
}
const NUMERIC = ["hl", "pulse", "swell", "inflame", "dx", "dy", "rot", "oop", "reveal", "stretch", "contract", "atrophy", "thick", "degen", "tighten", "compress", "spasm", "irritate", "impinge", "bleed", "effuse", "pressure", "shear"];
function computeState(P, pl, t, reduced) {
  const S = { st: new Map(), cam: { cx: P.vb[0] + P.vb[2] / 2, cy: P.vb[1] + P.vb[3] / 2, z: 1 }, arrows: [], impacts: [], pains: [], flashes: [], shake: [0, 0], t };
  for (const sp of P.structs) S.st.set(sp.id, rest(sp));
  for (const a of pl.list) {
    if (a.t > t + 1e-9) break;
    const age = t - a.t, p = ease(age / a.dur);
    try { apply(P, S, a, p, age, reduced); } catch (e) { /* a single bad action never breaks the frame */ }
  }
  derive(P, S, t);
  return S;
}
const amt = (a, d) => clamp(num(a.amount, d), 0, 1.5);
function apply(P, S, a, p, age, reduced) {
  if (!a.sp) {
    if (a.do === "camera") {
      const z = a.zoom !== undefined ? clamp(num(a.zoom, 1), 1, 3) : a.pt ? (S.cam.z > 1.01 ? S.cam.z : 1.6) : 1;
      const tgt = a.pt && z > 1.001 ? a.pt : (a.pt || [P.vb[0] + P.vb[2] / 2, P.vb[1] + P.vb[3] / 2]);
      const q = 0.5 - Math.cos(Math.PI * clamp(age / a.dur)) / 2;
      S.cam = { cx: lerp(S.cam.cx, tgt[0], q), cy: lerp(S.cam.cy, tgt[1], q), z: lerp(S.cam.z, z, q) };
    } else if (a.do === "arrow") S.arrows.push({ a, age });
    else if (a.do === "impact") { if (age < 1.2) S.impacts.push({ a, age }); if (!reduced && age < 0.35) { const k = (1 - age / 0.35) * 3; S.shake = [Math.sin(age * 90) * k, Math.cos(age * 77) * k * 0.6]; } }
    else if (a.do === "pain") { const hold = num(a.hold, Infinity); if (age < hold + 0.6) S.pains.push({ a, age, out: age > hold ? clamp((age - hold) / 0.6) : 0 }); }
    return;
  }
  const st = S.st.get(a.sp.id), sp = a.sp, fx = (kind, extra = {}) => st.fx.push({ kind, a, p, age, w: 1, ...extra });
  switch (a.do) {
    case "highlight": st.hl = lerp(st.hl, 1, p); break;
    case "unhighlight": st.hl = lerp(st.hl, 0, p); st.pulse = lerp(st.pulse, 0, p); break;
    case "pulse": st.pulse = lerp(st.pulse, 1, p); break;
    case "label": break;
    case "fade": st.fade = lerp(st.fade, clamp(num(a.to, 0.35)), p); break;
    case "show": st.vis = lerp(st.vis, 1, p); st.reveal = lerp(st.reveal, 1, p); break;
    case "hide": st.vis = lerp(st.vis, 0, p); break;
    case "swell": st.swell = lerp(st.swell, amt(a, 0.5), p); break;
    case "inflame": st.inflame = lerp(st.inflame, amt(a, 0.6), p); break;
    case "move":
      if (a.toPt) { const d = sub(a.toPt, sp.c); st.dx = lerp(st.dx, d[0], p); st.dy = lerp(st.dy, d[1], p); }
      else if (a.vec) { const L = Math.max(20, sp.minDim); st.dx += a.vec[0] * a.amount * L * p; st.dy += a.vec[1] * a.amount * L * p; }
      else if (a.oop) st.oop += a.oop * a.amount * p;
      break;
    case "rotate": st.rot += num(a.deg, 15) * p; break;
    case "reset": {
      const r = rest(sp);
      for (const k of NUMERIC) st[k] = lerp(st[k], r[k], p);
      st.fade = lerp(st.fade, r.fade, p); st.vis = lerp(st.vis, r.vis, p);
      for (const f of st.fx) f.w *= 1 - p;
      st.fx = st.fx.filter((f) => f.w > 0.002);
      break;
    }
    case "fracture": if (sp.type === "physis") fx("pfracture"); else fx("fracture"); break;
    case "bruise": fx("bruise"); break;
    case "stress": if (sp.type === "physis") st.pstress = lerp(st.pstress, 1, p), fx("pstress"); else fx("stress"); break;
    case "stretch": st.stretch = lerp(st.stretch, amt(a, 0.3), p); break;
    case "tear": fx(sp.type === "cartilage" ? "ctear" : sp.type === "vessel" ? "vtear" : sp.type === "capsule" && sp.poly ? "ctear-capsule" : "tear"); break;
    case "avulse": fx("avulse"); break;
    case "degenerate": st.degen = lerp(st.degen, amt(a, 1), p); st.degenAt = a.s ?? 0.5; break;
    case "thicken": st.thick = lerp(st.thick, amt(a, 0.5), p); break;
    case "calcify": fx("calcify"); break;
    case "contract": st.contract = lerp(st.contract, amt(a, 0.6), p); break;
    case "strain": fx("strain"); break;
    case "haematoma": fx("haematoma"); break;
    case "ossify": fx("ossify"); break;
    case "atrophy": st.atrophy = lerp(st.atrophy, amt(a, 0.5), p); break;
    case "spasm": st.spasm = lerp(st.spasm, 1, p); break;
    case "compress": if (sp.type === "nerve" || sp.type === "vessel") fx("pinch", { amount: amt(a, 0.6) }); else st.compress = lerp(st.compress, amt(a, 0.5), p); break;
    case "lesion": fx("lesion"); break;
    case "irritate": st.irritate = lerp(st.irritate, 1, p); break;
    case "entrap": fx("entrap"); break;
    case "occlude": fx("occlude"); break;
    case "herniate": fx("herniate"); break;
    case "fissure": fx("fissure"); break;
    case "tighten": st.tighten = lerp(st.tighten, amt(a, 0.6), p); break;
    case "impinge": st.impinge = lerp(st.impinge, 1, p); break;
    case "bleed": st.bleed = lerp(st.bleed, amt(a, 1), p); st.bleedSrc = a.src || st.bleedSrc || null; break;
    case "effuse": st.effuse = lerp(st.effuse, amt(a, 0.6), p); break;
    case "pressure": st.pressure = lerp(st.pressure, amt(a, 0.7), p); break;
    case "separate": fx("separate"); break;
    case "accelerate": {
      const g = a.geo, u = age / a.dur, A = g.amp; let o;
      if (u < 0.28) o = -A * ease(u / 0.28);
      else if (g.coupOnly) o = -A * Math.exp(-(u - 0.28) * 5) * Math.cos((u - 0.28) * 9);
      else if (u < 0.62) o = lerp(-A, A, ease((u - 0.28) / 0.34));
      else o = A * Math.exp(-(u - 0.62) * 6) * Math.cos((u - 0.62) * 13);
      st.dx += g.D[0] * o; st.dy += g.D[1] * o;
      const strike = (tt, pt, w) => { const da = age - tt * a.dur; if (da >= 0) { st.fx.push({ kind: "bruise", a: { pt, seed: a.seed + w * 10 }, p: ease(da / 0.7), age: da, w }); if (da < 0.8) S.flashes.push({ sp, pt, age: da, w }); } };
      strike(0.28, g.coupPt, 1); if (!g.coupOnly) strike(0.62, g.contraPt, 0.7);
      break;
    }
    case "shear": st.shear = lerp(st.shear, 1, p); break;
    case "scatter": fx("scatter"); break;
    default: break;
  }
}
/** Cross-structure consequences (physeal separation moves the epiphysis; compartment pressure squeezes vessels). */
function derive(P, S, t) {
  for (const sp of P.structs) {
    const st = S.st.get(sp.id);
    if (sp.type === "bone") {
      for (const f of st.fx) {
        if (f.kind !== "fracture") continue;
        const geo = f.a.geo, q = f.p * f.w, list = [];
        if ((geo.displaced || geo.hinge) && geo.cut) list.push({ region: F.sideOfCut(geo.cut, geo.mv), disp: geo.hinge ? [0, 0] : mul(geo.disp, q), rot: (geo.hinge ? geo.rot * (geo.displaced ? 1 : 0.3) : geo.rot) * q, pivot: geo.pivot });
        for (const fr of geo.frags) if (geo.displaced || fr.always) list.push({ region: fr.poly, disp: mul(fr.disp, (geo.displaced ? 1 : 0.18) * q), rot: fr.rot * (geo.displaced ? 1 : 0.15) * q, pivot: F.centroidOf(fr.poly), frag: true });
        if (!list.length) continue;
        st.pieces.push(...list);
        const main = list.filter((pc) => !pc.frag);
        if (main.length) for (const o of attachedTo(P, sp)) S.st.get(o.id).pieces.push(...main);
      }
    }
    if (sp.type === "physis") {
      for (const f of st.fx) {
        if (f.kind !== "separate") continue;
        const g = f.a.geo, q = f.p * f.w, D = mul(g.D, q);
        if (g.grade === "V") { st.crush = Math.max(st.crush, q); if (g.epi) { const e = S.st.get(g.epi.id); e.dx -= g.ne[0] * sp.thick * 0.3 * q; e.dy -= g.ne[1] * sp.thick * 0.3 * q; } continue; }
        const half = sideRegion(sp, g.ne, 0);
        if (g.grade === "I" || g.grade === "II") {
          if (g.epi) { const e = S.st.get(g.epi.id); e.dx += D[0]; e.dy += D[1]; }
          else if (g.single) S.st.get(g.single.id).pieces.push({ region: half, disp: D, rot: 0 });
          st.dx += D[0]; st.dy += D[1];
          if (g.grade === "II" && g.meta) S.st.get(g.meta.id).pieces.push({ region: g.tri, disp: D, rot: 0 });
        } else if (g.grade === "III") {
          const reg = F.halfPlane(g.vline[0], g.up), host = g.epi || g.single;
          const D3 = add(mul(g.up, 0.06 * sp.len * q), mul(g.ne, 0.05 * sp.len * q));
          if (host) S.st.get(host.id).pieces.push({ region: g.epi ? reg : quadrant(sp, g), disp: D3, rot: 4 * q });
        } else if (g.grade === "IV") {
          const dirO = norm(sub(g.oline[g.oline.length - 1], g.oline[0])), side = perp(dirO), sgn = dot(side, g.up) > 0 ? 1 : -1;
          const reg = F.sideOfCut(g.oline, mul(side, sgn)), D4 = add(mul(g.up, 0.07 * sp.len * q), mul(g.ne, 0.04 * sp.len * q));
          for (const b of [g.epi, g.meta]) if (b) S.st.get(b.id).pieces.push({ region: reg, disp: D4, rot: 3 * q });
        }
      }
    }
    if (sp.type === "space" && st.pressure > 0.01) {
      for (const v of P.structs) if ((v.type === "vessel" || v.type === "nerve") && overlapsBB(v.bb, sp.bb)) { const vs = S.st.get(v.id); vs.squeeze = Math.max(vs.squeeze, st.pressure * 0.55); }
    }
  }
}
const inBB = (p, b, tol = 0) => p[0] >= b.x - tol && p[0] <= b.x + b.w + tol && p[1] >= b.y - tol && p[1] <= b.y + b.h + tol;
/** Structures that travel with a bone's fragments: contents (marrow, nutrient vessels, periosteum) and, through a physis that
 *  names its `epiphysis`, the epiphysis and its articular cartilage. */
function attachedTo(P, b) {
  if (b.attached) return b.attached;
  const out = new Set();
  for (const o of P.structs) {
    if (o === b || !o.c) continue;
    if (o.type !== "bone" && inBB(o.c, b.bb) && insideStruct(b, o.c)) out.add(o);
    if (o.type === "physis" && o.s.epiphysis && P.byId[o.s.epiphysis] && P.byId[o.s.epiphysis] !== b && overlapsBB({ x: o.bb.x - 6, y: o.bb.y - 6, w: o.bb.w + 12, h: o.bb.h + 12 }, b.bb)) {
      const e = P.byId[o.s.epiphysis]; out.add(o); out.add(e);
      for (const k of P.structs) if (k !== b && k.type !== "bone" && k.c && inBB(k.c, e.bb, 12)) out.add(k);
    }
  }
  b.attached = [...out];
  return b.attached;
}
const overlapsBB = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
function sideRegion(sp, ne) { return F.halfPlane(sp.c, ne); }
function quadrant(sp, g) {
  const q0 = g.vline[0], big = 2000;
  return [q0, add(q0, mul(g.up, big)), add(add(q0, mul(g.up, big)), mul(g.ne, big)), add(q0, mul(g.ne, big))];
}

/* ================================================================== matrix per structure */
function matrixFor(sp, st, t, reduced) {
  let su = 1, sn = 1;
  const k = 1 + 0.06 * st.swell * (sp.type === "bursa" ? 0 : 1) + 0.035 * st.inflame + 0.12 * st.oop;
  const T = sp.type;
  if (T === "muscle") { su *= 1 - 0.06 * st.contract + 0.07 * st.stretch - 0.04 * st.spasm; sn *= 1 + 0.2 * st.contract - 0.12 * st.stretch - 0.33 * st.atrophy + 0.1 * st.spasm; }
  if (T === "cartilage" || T === "disc" || T === "bursa") { su *= 1 + 0.06 * st.compress; sn *= 1 - (T === "bursa" ? 0.5 : 0.28) * st.compress; }
  if (T === "cartilage") sn *= 1 - 0.22 * st.degen;
  if (T === "disc") { sn *= 1 - 0.28 * st.degen; su *= 1 + 0.04 * st.degen; }
  if (T === "bursa") { su *= 1 + 0.3 * st.swell + 0.2 * st.inflame; sn *= 1 + 1.1 * st.swell + 0.5 * st.inflame; }
  if (T === "capsule") { su *= 1 - 0.1 * st.tighten + 0.07 * st.stretch; sn *= 1 - 0.1 * st.tighten + 0.07 * st.stretch; }
  if (T === "fatpad") { sn *= 1 - 0.25 * st.impinge; su *= 1 + 0.08 * st.impinge; }
  if (T === "space") { const e = 1 + 0.04 * st.bleed + 0.07 * st.effuse + 0.03 * st.pressure; su *= e; sn *= e; }
  if (T === "physis") sn *= 1 + 0.7 * st.pstress - 0.55 * st.crush;
  if (T === "fascia" && sp.poly && !sp.s.fillRule) sn *= 1 + 0.8 * st.thick + 0.3 * st.degen;
  let dx = st.dx, dy = st.dy;
  if (st.spasm > 0.01 && !reduced) { const j = 0.9 * st.spasm * Math.sin(t * 2 * Math.PI * 11) * (0.6 + 0.4 * Math.sin(t * 7.3)); dx += sp.n[0] * j; dy += sp.n[1] * j; }
  su *= k; sn *= k;
  const u = sp.ax ? sp.ax.u : sp.u || [1, 0], ux = u[0], uy = u[1];
  const A00 = su * ux * ux + sn * uy * uy, A01 = (su - sn) * ux * uy, A11 = su * uy * uy + sn * ux * ux;
  const r = (st.rot * Math.PI) / 180, cr = Math.cos(r), sr = Math.sin(r);
  const B00 = cr * A00 - sr * A01, B01 = cr * A01 - sr * A11, B10 = sr * A00 + cr * A01, B11 = sr * A01 + cr * A11;
  const c = sp.c || [0, 0];
  return [B00, B10, B01, B11, c[0] + dx - (B00 * c[0] + B01 * c[1]), c[1] + dy - (B10 * c[0] + B11 * c[1])];
}
const applyM = (M, p) => [M[0] * p[0] + M[2] * p[1] + M[4], M[1] * p[0] + M[3] * p[1] + M[5]];
const isIdentity = (M) => Math.abs(M[0] - 1) < 1e-4 && Math.abs(M[3] - 1) < 1e-4 && Math.abs(M[1]) < 1e-4 && Math.abs(M[2]) < 1e-4 && Math.abs(M[4]) < 0.01 && Math.abs(M[5]) < 0.01;
const mstr = (M) => `matrix(${M.map((x) => fmt(x)).join(" ")})`;
function pieceTf(pc, pivot) {
  const d = pc.disp || [0, 0], r = pc.rot || 0, pv = pc.pivot || pivot;
  return `translate(${fmt(d[0])} ${fmt(d[1])})${r ? ` rotate(${fmt(r)} ${fmt(pv[0])} ${fmt(pv[1])})` : ""}`;
}

/* ================================================================== drawing: per type */
const FILL = { bone: "closeup-g-bone", muscle: "closeup-g-muscle", cartilage: "closeup-g-cartilage", fatpad: "closeup-g-fat", brain: "closeup-g-brain", disc: "closeup-g-annulus", physis: "closeup-g-physis", ligament: "closeup-g-ligament", tendon: "closeup-g-tendon", nerve: "closeup-g-nerve", fascia: "closeup-g-fascia" };
const BAND_COL = { ligament: ["anat-ligament", "anat-ligament-edge"], tendon: ["anat-tendon", "anat-tendon-edge"], nerve: ["anat-nerve", "anat-nerve-edge"], fascia: ["anat-fascia", "anat-ligament-edge"], capsule: ["anat-capsule", "anat-ligament-edge"] };
function vesselCol(sp) { const k = sp.s.kind || (/vein/i.test(sp.id) ? "vein" : "artery"); return k === "vein" ? "anat-vein" : "anat-artery"; }
function selfClip(g, rc, sp, d, tag = "self", rule = null) {
  const id = `closeup-${rc.uid}-${sp.idx}-${tag}`; const cp = el("clipPath", { id }, g); el("path", { d, "clip-rule": rule }, cp); return url(id);
}
function drawStructure(sp, st, rc) {
  const g = el("g", { "data-structure": sp.id, "data-type": sp.type });
  const op = clamp(st.vis) * clamp(st.fade);
  if (op < 0.005) return g;
  if (op < 0.999) g.setAttribute("opacity", fmt(op));
  const M = matrixFor(sp, st, rc.t, rc.reduced);
  const outer = isIdentity(M) ? g : el("g", { transform: mstr(M) }, g);
  const pcs = sp.type === "bone" ? [] : st.pieces;
  if (!pcs.length) { paint(outer, sp, st, rc); return g; }
  paint(el("g", { "clip-path": selfClip(outer, rc, sp, F.dPoly(F.BIG_RECT) + pcs.map((pc) => F.dPoly(pc.region)).join(""), "gstay", "evenodd") }, outer), sp, st, rc);
  pcs.forEach((pc, i) => { const pg = el("g", { transform: pieceTf(pc, sp.c) }, outer); paint(el("g", { "clip-path": selfClip(outer, rc, sp, F.dPoly(pc.region), "gpc" + i) }, pg), sp, st, rc); });
  return g;
}
function paint(inner, sp, st, rc) {
  rc.outline = sp.outline;
  if (sp.outline && st.swell > 0.01) el("path", { d: sp.outline, fill: C("fx-oedema"), stroke: C("anat-fluid"), "stroke-width": 8 + 18 * st.swell, "stroke-opacity": 0.35 * st.swell, "fill-opacity": 0.6 * st.swell, filter: F.blur(5), "stroke-linejoin": "round" }, inner);
  if (sp.outline && st.inflame > 0.01) { const sh = rc.reduced ? 1 : 0.82 + 0.18 * Math.sin(rc.t * 5.5 + sp.idx); el("path", { d: sp.outline, fill: "none", stroke: C("fx-inflame"), "stroke-width": 7 + 14 * st.inflame, "stroke-opacity": 0.5 * st.inflame * sh, filter: F.blur(5), "stroke-linejoin": "round" }, inner); }
  if (typeof sp.s.draw === "function") {
    try { sp.s.draw(inner, { ...st, t: rc.t }, api(rc, sp)); } catch (e) { rc.warn(`custom draw of "${sp.id}" threw (${e.message}) — default drawing used`); (DRAW[sp.type] || drawFascia)(inner, sp, st, rc); }
  } else (DRAW[sp.type] || drawFascia)(inner, sp, st, rc);
  const o = rc.outline || sp.outline;
  if (o && st.inflame > 0.01) el("path", { d: o, fill: C("fx-inflame"), "fill-opacity": 0.22 * st.inflame, stroke: "none" }, inner);
  const I = Math.max(st.hl, st.pulse * (rc.reduced ? 0.85 : 0.55 + 0.45 * Math.sin(rc.t * 2 * Math.PI * 0.9)));
  if (o && I > 0.01) F.glowOutline(inner, o, "fx-highlight", I, 2.2);
}
function api(rc, sp) { return { el, css: C, mix, fx: F, frame: sp.frame, structure: sp.s, t: rc.t, reducedMotion: rc.reduced, defs: rc.defs }; }

/* ---------- bone ---------- */
function drawBone(g, sp, st, rc) {
  let d = sp.d, rule = sp.s.fillRule || null;
  const defo = st.fx.filter((f) => f.kind === "fracture" && f.a.geo.deform);
  if (defo.length) { let poly = sp.poly; for (const f of defo) poly = deformPoly(poly, f.a.geo.deform, f.p * f.w); d = F.dPoly(poly); rule = null; rc.outline = d; }
  const pieces = st.pieces;
  const self = selfClip(g, rc, sp, d, "self", rule);
  if (!pieces.length) boneBody(g, sp, d, rule, self);
  else {
    const reg = pieces.map((pc) => F.dPoly(pc.region)).join("");
    const stay = el("g", { "clip-path": selfClip(g, rc, sp, F.dPoly(F.BIG_RECT) + reg, "stay", "evenodd") }, g);
    boneBody(stay, sp, d, rule, self);
    pieces.forEach((pc, i) => {
      const pg = el("g", { transform: pieceTf(pc, sp.c) }, g);
      const inner = el("g", { "clip-path": selfClip(g, rc, sp, F.dPoly(pc.region), "pc" + i) }, pg);
      boneBody(inner, sp, d, rule, self);
      el("path", { d: F.dPoly(pc.region), fill: "none", stroke: mix("anat-bone-edge", "stage-bg", 70), "stroke-width": 1.4, "clip-path": self }, pg);
    });
  }
  const fxg = el("g", { "clip-path": self }, g), top = el("g", {}, g);
  for (const f of st.fx) {
    const q = f.p * f.w, R = F.rng(f.a.seed || 1);
    if (f.kind === "bruise") drawBruise(fxg, f.a.pt, sp, q, R);
    else if (f.kind === "stress") drawStressReaction(fxg, top, sp, f, q, R);
    else if (f.kind === "fracture") drawFractureLines(top, sp, f, q);
  }
}
function boneBody(g, sp, d, rule, self) {
  el("path", { d, fill: url("closeup-g-bone"), "fill-rule": rule }, g);
  el("path", { d, fill: url("closeup-pat-trab"), "fill-rule": rule, opacity: 0.6 }, g);
  const rim = clamp(sp.minDim * 0.06, 2, 7);
  el("path", { d, fill: "none", stroke: mix("anat-bone", "anat-bone-edge", 45), "stroke-width": rim * 2, "clip-path": self }, g);
  el("path", { d, fill: "none", stroke: mix("anat-bone", "stage-ink", 55), "stroke-width": 0.8, "stroke-opacity": 0.5, "clip-path": self, transform: null }, g);
  el("path", { d, fill: "none", stroke: C("anat-bone-edge"), "stroke-width": 1.3, "stroke-linejoin": "round", "fill-rule": rule }, g);
}
function drawBruise(g, pt, sp, q, R) {
  if (!pt || q < 0.01) return;
  const r = clamp(sp.minDim * 0.3, 12, 44) * (0.6 + 0.4 * q);
  F.cloud(g, pt[0], pt[1], r * 1.25, r, "fx-injury", 0.42 * q);
  F.cloud(g, pt[0], pt[1], r * 0.7, r * 0.55, "fx-bleed", 0.5 * q);
  for (let k = 0; k < 7; k++) { const a = R() * Math.PI * 2, rr = R() * r * 0.8; F.cloud(g, pt[0] + Math.cos(a) * rr, pt[1] + Math.sin(a) * rr, 3 + R() * 4, 3 + R() * 3, "fx-bleed", 0.5 * q); }
}
function drawStressReaction(clipG, top, sp, f, q, R) {
  const S = f.a.geo, dur = f.a.dur, p1 = ease(f.age / (dur * 0.45)) * f.w, p2 = ease((f.age - dur * 0.45) / (dur * 0.55)) * f.w;
  F.cloud(top, S.B[0], S.B[1], S.depth * 2.6, S.depth * 1.1, "fx-inflame", 0.75 * p1, (Math.atan2(S.tan[1], S.tan[0]) * 180) / Math.PI);
  F.cloud(clipG, S.B[0] - S.nrm[0] * S.depth, S.B[1] - S.nrm[1] * S.depth, S.depth * 2.2, S.depth * 1.6, "fx-injury", 0.35 * p1);
  if (p2 > 0.01) {
    const a = add(S.B, mul(S.tan, -S.depth * 2)), b = add(S.B, mul(S.tan, S.depth * 2)), c = add(S.B, mul(S.nrm, S.depth * 0.45));
    el("path", { d: `M${fmt(a[0])},${fmt(a[1])}Q${fmt(c[0])},${fmt(c[1])} ${fmt(b[0])},${fmt(b[1])}`, fill: "none", stroke: mix("anat-bone", "fx-heal", 70), "stroke-width": 2.4, "stroke-opacity": 0.8 * p2, "stroke-linecap": "round" }, top);
    const inward = mul(S.nrm, -1), along = perp(inward);
    const L = F.jagged(add(S.B, mul(S.nrm, 0.5)), add(add(S.B, mul(inward, sp.minDim * 0.3)), mul(along, 1.5)), R, 0.8, 5);
    F.crack(top, L, p2, { w: 1.8, glow: 0.9 });
  }
}
function drawFractureLines(g, sp, f, q) {
  const geo = f.a.geo, u = clamp(f.age / 0.25) * f.w, glow = (f.age < 0.7 ? 1 : 0.45) * f.w;
  if (u < 0.01) return;
  if (f.age < 0.6) F.cloud(g, f.a.pt[0], f.a.pt[1], 30, 30, "fx-injury", (1 - f.age / 0.6) * 0.7 * f.w);
  for (const b of geo.bands) el("path", { d: F.dPoly(b), fill: mix("anat-bone-edge", "stage-bg", 60), "fill-opacity": 0.75 * q, stroke: C("fx-injury"), "stroke-opacity": 0.4 * q, "stroke-width": 0.8 }, g);
  for (const b of geo.bumps) {
    const tan = perp(b.nrm), p0 = sub(b.p, mul(tan, b.r * 1.6)), p1 = add(b.p, mul(tan, b.r * 1.6)), c = add(b.p, mul(b.nrm, b.r * 1.6 * q));
    el("path", { d: `M${fmt(p0[0])},${fmt(p0[1])}Q${fmt(c[0])},${fmt(c[1])} ${fmt(p1[0])},${fmt(p1[1])}Z`, fill: C("anat-bone"), stroke: C("anat-bone-edge"), "stroke-width": 1.2 }, g);
    el("path", { d: `M${fmt(p0[0])},${fmt(p0[1])}Q${fmt(c[0])},${fmt(c[1])} ${fmt(p1[0])},${fmt(p1[1])}`, fill: "none", stroke: C("fx-injury"), "stroke-width": 1.4, "stroke-opacity": 0.6 * q }, g);
  }
  for (const L of geo.lines) F.crack(g, L, u, { w: geo.hair ? 1.3 : 2.2, glow });
  for (const L of geo.dashed) el("path", { d: F.dPoly(F.partial(L, u), false), fill: "none", stroke: mix("stage-bg", "anat-bone-edge", 55), "stroke-width": 1.4, "stroke-dasharray": "4 3", "stroke-opacity": 0.75 }, g);
  if (geo.pattern === "stress" && geo.surf) { const S = geo.surf; F.cloud(g, S.B[0], S.B[1], S.depth * 2.4, S.depth, "fx-inflame", 0.55 * q, (Math.atan2(S.tan[1], S.tan[0]) * 180) / Math.PI); }
}

/* ---------- fibrous bands: ligament, tendon, nerve, vessel, fascia, capsule ---------- */
function bandIntact(st) {
  return st.stretch < 0.005 && st.thick < 0.005 && st.degen < 0.005 && st.squeeze < 0.005 && !st.fx.some((f) => ["tear", "avulse", "pinch", "entrap", "vtear", "occlude"].includes(f.kind));
}
function interpArr(S, A, s) { return interp(S, A, s); }
function interpPt(S, Cc, s) { return [interp(S, Cc.map((p) => p[0]), s), interp(S, Cc.map((p) => p[1]), s)]; }
function buildBand(sp, st, rc) {
  const bm = sp.bm, S = bm.S, s0 = S[0], s1 = S[S.length - 1], span = s1 - s0 || 1, N = S.length;
  const tears = st.fx.filter((f) => f.kind === "tear" || f.kind === "vtear");
  const t3 = tears.filter((f) => f.kind === "vtear" || f.a.grade === 3).reduce((m, f) => Math.max(m, f.p * f.w), 0);
  const se = st.stretch * (1 - t3);
  let Cc = bm.C.map((p) => [p[0], p[1]]);
  if (se > 0.001) { const a = Cc[0], b = Cc[N - 1]; const k = sp.s.points || sp.s.path ? Math.min(0.3, se * 0.8) : Math.min(0.9, se * 2.2); Cc = Cc.map((p, i) => lerp2(p, lerp2(a, b, (S[i] - s0) / span), k)); }
  const L = sp.len || 50;
  for (const f of st.fx.filter((x) => x.kind === "avulse")) {
    const q = f.p * f.w, fromEnd = f.a.end === "from", end = fromEnd ? Cc[0] : Cc[N - 1], other = fromEnd ? Cc[N - 1] : Cc[0], dv = norm(sub(other, end)), pv = perp(dv);
    Cc = Cc.map((p, i) => { const fr = fromEnd ? 1 - (S[i] - s0) / span : (S[i] - s0) / span, w = fr * fr; return add(p, add(mul(dv, 0.2 * L * q * w), mul(pv, (0.05 * L * q * w) + Math.sin(fr * Math.PI * 3) * 0.035 * L * q * fr))); });
  }
  const typeTh = sp.type === "nerve" ? 0.25 : sp.type === "vessel" ? 0.2 : 0.42;
  const base = S.map((s, i) => bm.H[i] * (1 - typeTh * se) * (1 + 0.7 * st.thick) * (1 + 0.38 * st.degen * bump((s - st.degenAt) / span, 0.28)) * (1 - st.squeeze));
  const HL = base.slice(), HR = base.slice();
  for (const f of st.fx) {
    const q = f.p * f.w, sn = s0 + f.a.s * span * (bm.fromPoly ? 0 : 1) + (bm.fromPoly ? f.a.s - s0 : 0);
    const sT = bm.fromPoly ? f.a.s : s0 + f.a.s * span;
    if (f.kind === "pinch") for (let i = 0; i < N; i++) { const k = 1 - f.amount * 0.75 * q * bump((S[i] - sT) / span, 0.05); HL[i] *= k; HR[i] *= k; }
    if (f.kind === "entrap") for (let i = 0; i < N; i++) { const x = (S[i] - sT) / span, k = (1 - 0.5 * q * bump(x, 0.035)) * (1 + 0.3 * q * bump(x + 0.09, 0.05)); HL[i] *= k; HR[i] *= k; }
    if (f.kind === "tear" && f.a.grade === 2) for (let i = 0; i < N; i++) HR[i] *= 1 - 0.95 * q * bump((S[i] - sT) / span, 0.045);
    void sn;
  }
  // segments
  const segs = [];
  const tear3 = tears.find((f) => (f.kind === "vtear" || f.a.grade === 3) && f.p * f.w > 0.001);
  const sampleSeg = (sa, sb, endA, endB, recoil, mopA, mopB, R) => {
    const M = 22, pts = [], hl = [], hr = [], ss = [];
    for (let k = 0; k < M; k++) {
      const s = lerp(sa, sb, k / (M - 1));
      let p = interpPt(S, Cc, s);
      if (recoil) { const toward = recoil.side === "A" ? (s - sa) / (sb - sa || 1) : (sb - s) / (sb - sa || 1), w = toward * toward; const fr = frameAt(sp, s); p = add(p, mul(fr.n, Math.sin(toward * Math.PI * 2.5 + recoil.ph) * recoil.amp * w)); }
      pts.push(p); hl.push(interpArr(S, HL, s)); hr.push(interpArr(S, HR, s)); ss.push(s);
    }
    segs.push({ pts, hl, hr, ss, mopA, mopB, R });
  };
  if (tear3) {
    const q = tear3.p * tear3.w, sT = bm.fromPoly ? tear3.a.s : s0 + tear3.a.s * span, gap = (sp.type === "vessel" ? 0.015 : 0.02 + 0.05 * q) * span, ret = 0.07 * q * span, R = F.rng(tear3.a.seed);
    const hwAvg = bm.H.reduce((x, y) => x + y, 0) / N, amp = hwAvg * 0.55 * q;
    sampleSeg(s0, Math.max(s0 + 0.02, sT - gap - ret), true, false, { side: "A", amp, ph: 0.5 }, false, q, R);
    sampleSeg(Math.min(s1 - 0.02, sT + gap + ret), s1, false, true, { side: "B", amp, ph: 2.1 }, q, false, R);
    // retract: pull each stump toward its attachment (compress s-range already shifts the ends)
  } else sampleSeg(s0, s1, true, true, null, false, false, null);
  return { segs, se, tears, Cc, S, HL, HR, span, s0, t3 };
}
function segOutline(seg, sp) {
  const style = {}, R = F.rng(F.hash(sp.id) + 9);
  if (seg.mopA) style.A = () => 0.5 + R() * 0.9;
  if (seg.mopB) style.B = () => 0.5 + R() * 0.9;
  return ribbonPts(seg.pts, seg.hl, seg.hr, true, true, style);
}
function drawBand(g, sp, st, rc, cols) {
  const [fillTok, edgeTok] = cols;
  const isN = sp.type === "nerve", isV = sp.type === "vessel", isCap = sp.type === "capsule", isFas = sp.type === "fascia";
  const fillCol = st.degen > 0.01 ? mix(fillTok, "anat-fat", 100 - 30 * st.degen) : fillTok;
  const tension = clamp((st.stretch - 0.12) * 2.2) * (1 - 0) ;
  const Rf = F.rng(F.hash(sp.id));
  // poly-defined intact structure: draw the authored shape
  if (sp.poly && bandIntact(st)) {
    const self = selfClip(g, rc, sp, sp.d, "self", sp.s.fillRule);
    el("path", { d: sp.d, fill: FILL[sp.type] ? url(FILL[sp.type]) : C(fillTok), "fill-opacity": isCap ? 0.18 : isFas ? 0.78 : 0.95, "fill-rule": sp.s.fillRule }, g);
    const fg = el("g", { "clip-path": self }, g);
    if (!isCap) fibresFromModel(fg, sp, sp.bm.C, sp.bm.H, sp.bm.H, sp.bm.S, { col: edgeTok, crimp: 0.8, count: fibreCount(sp), R: Rf, cross: isFas });
    el("path", { d: sp.d, fill: "none", stroke: C(isCap ? fillTok : edgeTok), "stroke-width": isCap ? 2 : 1.1, "stroke-opacity": isCap ? 0.85 : 1, "fill-rule": sp.s.fillRule }, g);
    return;
  }
  const B = buildBand(sp, st, rc);
  // avulsion craters & fragments
  for (const f of st.fx.filter((x) => x.kind === "avulse")) {
    const q = f.p * f.w, att = f.a.end === "from" ? sp.bm.C[0] : sp.bm.C[sp.bm.n - 1], R = F.rng(f.a.seed);
    el("path", { d: F.dSmooth(F.blobPts(att[0], att[1], sp.bm.H[0] * 0.9 + 3, R, 9, 0.35)), fill: mix("stage-bg", "fx-bleed", 70), "fill-opacity": 0.85 * q, stroke: C("fx-injury"), "stroke-opacity": 0.5 * q }, g);
  }
  const outlines = [];
  for (const seg of B.segs) {
    const P0 = segOutline(seg, sp), d = F.dPoly(P0);
    outlines.push(d);
    el("path", { d, fill: C(isV ? vesselCol(sp) : fillCol), "fill-opacity": isCap ? 0.5 : 0.96 }, g);
    if (tension > 0.01) el("path", { d, fill: C("fx-injury"), "fill-opacity": 0.22 * tension }, g);
    // sheen
    el("path", { d: F.dPoly(seg.pts, false), fill: "none", stroke: mix(isV ? vesselCol(sp) : fillTok, "stage-ink", 45), "stroke-width": Math.max(1, avg(seg.hl) * 0.8), "stroke-opacity": 0.38, "stroke-linecap": "round" }, g);
    if (isV) {
      const occl = st.fx.find((f) => f.kind === "occlude");
      const flowD = F.dPoly(occl ? seg.pts.filter((_, k) => seg.ss[k] < (sp.bm.fromPoly ? occl.a.s : B.s0 + occl.a.s * B.span)) : seg.pts, false);
      if (flowD.length > 20) el("path", { d: flowD, fill: "none", stroke: mix(vesselCol(sp), "stage-ink", 40), "stroke-width": Math.max(1, avg(seg.hl) * 0.6), "stroke-opacity": 0.45 * (1 - st.squeeze), "stroke-dasharray": "5 9", "stroke-dashoffset": rc.reduced ? 0 : fmt(-rc.t * 36), "stroke-linecap": "round" }, g);
    } else if (!isCap || true) {
      const gaps = fibreGaps(sp, st, B);
      fibresFromModel(g, sp, seg.pts, seg.hl, seg.hr, seg.ss, { col: edgeTok, crimp: isN ? 0.35 : 0.8 * (1 - clamp(B.se * 3)) + (B.t3 > 0 ? 1.2 * B.t3 : 0), count: isN ? 3 : fibreCount(sp), gaps, R: Rf, degen: st.degen, nerve: isN, cross: isFas });
    }
    el("path", { d, fill: "none", stroke: C(isV ? mix(vesselCol(sp), "stage-bg", 70) : isCap ? fillTok : edgeTok), "stroke-width": isCap ? 1.6 : 1.1, "stroke-linejoin": "round" }, g);
    // mop strands at torn ends
    for (const [flag, k0, k1] of [[seg.mopA, 0, 1], [seg.mopB, seg.pts.length - 1, seg.pts.length - 2]]) {
      if (!flag) continue;
      const end = seg.pts[k0], dir = norm(sub(end, seg.pts[k1])), nn = perp(dir), R = seg.R || F.rng(3), hw = (seg.hl[k0] + seg.hr[k0]) / 2, n = isV ? 0 : Math.max(5, Math.round(hw * 1.1));
      for (let j = 0; j < n; j++) {
        const f = lerp(-0.85, 0.85, n > 1 ? j / (n - 1) : 0.5), L0 = hw * (0.5 + R() * 1.5) * flag, sw = (R() - 0.5) * 0.9, pts = [];
        for (let m = 0; m <= 5; m++) { const tt = m / 5; pts.push(add(add(add(end, mul(nn, f * hw * (1 + 0.5 * tt))), mul(dir, L0 * tt)), mul(nn, Math.sin(tt * 3 + j) * hw * 0.25 * tt + sw * L0 * tt * 0.5))); }
        const dd = F.dPoly(pts, false);
        el("path", { d: dd, fill: "none", stroke: C(edgeTok), "stroke-width": 2.3, "stroke-linecap": "round", "stroke-opacity": 0.9 }, g);
        el("path", { d: dd, fill: "none", stroke: C(fillTok), "stroke-width": 1.3, "stroke-linecap": "round" }, g);
      }
    }
  }
  rc.outline = outlines.join("");
  // tension chevrons
  if (tension > 0.02 && B.segs.length === 1) { const s = B.segs[0], a = s.pts[2], b = s.pts[s.pts.length - 3]; const u = norm(sub(b, a)); F.chevron(g, sub(a, mul(u, 3)), mul(u, -1), 4, "fx-injury", tension, 1.4); F.chevron(g, add(b, mul(u, 3)), u, 4, "fx-injury", tension, 1.4); }
  // per-effect decorations
  for (const f of st.fx) {
    const q = f.p * f.w; if (q < 0.005) continue;
    const s = sp.bm.fromPoly ? f.a.s : f.a.s, fr = f.a.s !== undefined ? frameAt(sp, s) : null, R = F.rng(f.a.seed);
    if (f.kind === "tear" || f.kind === "vtear") {
      const p = fr.p, gr = f.kind === "vtear" ? 3 : f.a.grade;
      if (f.age < 0.6) F.cloud(g, p[0], p[1], fr.half * 3 + 10, fr.half * 3 + 10, "fx-injury", (1 - f.age / 0.6) * 0.8 * f.w);
      if (gr >= 2 || isV) F.pool(g, p[0], p[1], (fr.half * (gr === 3 ? 1.6 : 1.0) + 3) * (0.5 + 0.5 * q), R, (isV ? 0.75 : 0.5) * q, null, 0);
      if (gr === 1) for (let k = 0; k < 6; k++) { const ss = (R() - 0.5) * 0.06, side = R() < 0.5 ? -1 : 1, fr2 = frameAt(sp, s + ss), b0 = add(fr2.p, mul(fr2.n, side * fr2.half * 0.9)), b1 = add(add(b0, mul(fr2.n, side * (2 + R() * 4) * q)), mul(fr2.u, (R() - 0.5) * 5)); el("path", { d: F.dPoly([b0, lerp2(b0, b1, 0.5).map((v, i) => v + (i ? 1 : -1) * 0.8), b1], false), fill: "none", stroke: C(edgeTok), "stroke-width": 1, "stroke-opacity": 0.9 * q }, g); F.cloud(g, b0[0], b0[1], 2.5, 2.5, "fx-bleed", 0.6 * q); }
    } else if (f.kind === "calcify") {
      for (let k = 0; k < 4; k++) { const o = add(add(fr.p, mul(fr.u, (R() - 0.5) * fr.half * 1.8)), mul(fr.n, (R() - 0.5) * fr.half * 0.9)); el("ellipse", { cx: o[0], cy: o[1], rx: fr.half * (0.35 + R() * 0.25) * q, ry: fr.half * (0.25 + R() * 0.2) * q, fill: mix("anat-bone", "stage-ink", 60), stroke: C("anat-bone-edge"), "stroke-width": 0.6 }, g); }
    } else if (f.kind === "pinch") {
      F.cloud(g, fr.p[0], fr.p[1], fr.half * 2.5, fr.half * 2, isN ? "fx-pain" : "fx-injury", 0.45 * q);
      for (const sg of [-1, 1]) F.chevron(g, add(fr.p, mul(fr.n, sg * (fr.half + 3))), mul(fr.n, -sg), 4, "fx-force", 0.9 * q, 1.6);
    } else if (f.kind === "entrap") {
      const a = add(fr.p, mul(fr.n, fr.half * 1.25)), b = sub(fr.p, mul(fr.n, fr.half * 1.25));
      el("path", { d: F.dPoly([a, b], false), fill: "none", stroke: C("anat-fascia"), "stroke-width": 7 * q, "stroke-linecap": "round", "stroke-opacity": 0.95 }, g);
      el("path", { d: F.dPoly([a, b], false), fill: "none", stroke: C("anat-ligament-edge"), "stroke-width": 1, "stroke-opacity": q }, g);
      F.cloud(g, fr.p[0], fr.p[1], fr.half * 3, fr.half * 2.4, "fx-pain", 0.35 * q);
    } else if (f.kind === "occlude") {
      F.pool(g, fr.p[0], fr.p[1], fr.half * 1.1, R, 0.95 * q, fr.half * 0.9);
    }
  }
  for (const f of st.fx.filter((x) => x.kind === "avulse")) {
    const q = f.p * f.w, seg = f.a.end === "from" ? B.segs[0] : B.segs[B.segs.length - 1], k0 = f.a.end === "from" ? 0 : seg.pts.length - 1, k1 = f.a.end === "from" ? 1 : seg.pts.length - 2;
    const end = seg.pts[k0], dir = norm(sub(end, seg.pts[k1])), c = add(end, mul(dir, seg.hl[k0] * 0.7)), R = F.rng(f.a.seed + 1);
    el("path", { d: F.dSmooth(F.blobPts(c[0], c[1], seg.hl[k0] * 1.1 + 2.5, R, 8, 0.4)), fill: url("closeup-g-bone"), stroke: C("anat-bone-edge"), "stroke-width": 1.1, opacity: clamp(q * 3) }, g);
  }
  // nerve irritation: flicker + travelling impulses
  if (isN && st.irritate > 0.01) {
    const fl = rc.reduced ? 0.85 : 0.6 + 0.4 * Math.abs(Math.sin(rc.t * 17) * Math.sin(rc.t * 5.3 + 1));
    F.glowOutline(g, rc.outline, "fx-pain", st.irritate * fl, 1.8);
    for (let j = 0; j < 4; j++) { const s = rc.reduced ? (j + 0.5) / 4 : ((rc.t * 0.7 + j / 4) % 1), fr = frameAt(sp, s); F.cloud(g, fr.p[0], fr.p[1], fr.half * 2.2 + 3, fr.half * 2.2 + 3, "fx-pain", 0.85 * st.irritate); el("circle", { cx: fr.p[0], cy: fr.p[1], r: Math.max(1.2, fr.half * 0.5), fill: C("stage-ink"), opacity: 0.9 * st.irritate }, g); }
  }
  if (st.degen > 0.05 && !isV) {
    const R = F.rng(F.hash(sp.id) + 77), sd = sp.bm.fromPoly ? st.degenAt : st.degenAt;
    for (let k = 0; k < 4; k++) { const fr = frameAt(sp, clamp(sd + (R() - 0.5) * 0.35)), side = R() < 0.5 ? -1 : 1, a = add(fr.p, mul(fr.n, side * fr.half * 1.6)), pts = []; for (let m = 0; m <= 6; m++) pts.push(add(lerp2(a, fr.p, m / 6 * 0.85), mul(fr.u, Math.sin(m * 1.7 + k) * 2.2))); el("path", { d: F.dPoly(pts, false), fill: "none", stroke: C("anat-artery"), "stroke-width": 1, "stroke-opacity": 0.85 * st.degen }, g); }
  }
}
const avg = (a) => a.reduce((x, y) => x + y, 0) / (a.length || 1);
function fibreCount(sp) { const hw = sp.bm ? avg(sp.bm.H) : 5; return clamp(Math.round(hw / 1.6), 3, 11); }
function fibreGaps(sp, st, B) {
  const out = [];
  for (const f of st.fx) {
    if (f.kind !== "tear") continue;
    const q = f.p * f.w, sT = sp.bm.fromPoly ? f.a.s : B.s0 + f.a.s * B.span, R = F.rng(f.a.seed + 5);
    if (f.a.grade === 1) for (let j = 0; j < 12; j++) { if (R() < 0.45) out.push({ fi: j, s: sT + (R() - 0.5) * 0.08 * B.span, w: 0.012 * B.span * q }); }
    if (f.a.grade === 2) out.push({ side: -1, s: sT, w: 0.05 * B.span * q });
  }
  return out;
}
function fibresFromModel(g, sp, Cc, HL, HR, S, o) {
  const n = o.count || 5, R = o.R || F.rng(1), amp = Math.max(0, o.crimp || 0), segs = [];
  const fs = o.nerve ? [-0.45, 0, 0.45] : Array.from({ length: n }, (_, j) => lerp(-0.78, 0.78, n > 1 ? j / (n - 1) : 0.5));
  fs.forEach((f, j) => {
    let cur = [], ph = R() * 6;
    for (let i = 0; i < Cc.length; i++) {
      const a = Cc[Math.max(0, i - 1)], b = Cc[Math.min(Cc.length - 1, i + 1)], u = norm(sub(b, a)), nn = perp(u), h = f >= 0 ? HL[i] : HR[i];
      const s = S[i], gap = (o.gaps || []).some((gp) => (gp.fi === undefined || gp.fi === j) && (gp.side === undefined || f < 0.15) && Math.abs(s - gp.s) < gp.w);
      if (gap) { if (cur.length > 1) segs.push(cur); cur = []; continue; }
      const wob = amp * Math.sin(i * 1.9 + ph) + (o.degen ? (R() - 0.5) * 2.2 * o.degen : 0);
      cur.push(add(Cc[i], mul(nn, f * h + wob * 0.45)));
    }
    if (cur.length > 1) segs.push(cur);
  });
  if (!segs.length) return;
  const d = segs.map((s) => F.dPoly(s, false)).join("");
  el("path", { d, fill: "none", stroke: C(o.col), "stroke-width": o.nerve ? 0.8 : 0.7, "stroke-opacity": o.nerve ? 0.6 : 0.5, "stroke-linecap": "round" }, g);
  if (o.cross) {
    let dd = ""; for (let i = 2; i < Cc.length - 2; i += 3) { const a = Cc[i - 1], b = Cc[i + 1], nn = perp(norm(sub(b, a))), u = norm(sub(b, a)); const p0 = add(add(Cc[i], mul(nn, HL[i] * 0.8)), mul(u, 2)), p1 = sub(sub(Cc[i], mul(nn, HR[i] * 0.8)), mul(u, 2)); dd += `M${fmt(p0[0])},${fmt(p0[1])}L${fmt(p1[0])},${fmt(p1[1])}`; }
    el("path", { d: dd, fill: "none", stroke: C(o.col), "stroke-width": 0.5, "stroke-opacity": 0.3 }, g);
  }
}
function drawLigament(g, sp, st, rc) { drawBand(g, sp, st, rc, BAND_COL[sp.type] || BAND_COL.ligament); }
function drawVessel(g, sp, st, rc) {
  if (sp.poly && bandIntact(st)) { el("path", { d: sp.d, fill: C(vesselCol(sp)), stroke: mix(vesselCol(sp), "stage-bg", 70), "stroke-width": 1 }, g); return; }
  drawBand(g, sp, st, rc, [vesselCol(sp), vesselCol(sp)]);
}
function drawCapsule(g, sp, st, rc) {
  if (!sp.poly) return drawBand(g, sp, st, rc, BAND_COL.capsule);
  const d = sp.d, fluid = clamp(st.swell + st.effuse);
  el("path", { d, fill: C("anat-capsule"), "fill-opacity": 0.13 + 0.05 * st.tighten, "fill-rule": sp.s.fillRule }, g);
  if (fluid > 0.01) el("path", { d, fill: url("closeup-l-fluid"), "fill-opacity": 0.55 * fluid }, g);
  const tear = st.fx.find((f) => f.kind === "ctear-capsule");
  const sw = 2 + 3 * st.tighten - 0.8 * st.stretch, col = st.tighten > 0.01 ? mix("anat-capsule", "stage-bg", 100 - 30 * st.tighten) : C("anat-capsule");
  if (!tear) el("path", { d, fill: "none", stroke: col, "stroke-width": sw, "stroke-opacity": 0.9, "stroke-linejoin": "round" }, g);
  else {
    const ring = [...sp.poly, sp.poly[0]], L = F.cumLengths(ring), tot = L[L.length - 1], q = tear.p * tear.w, s = tear.a.s, gw = (0.03 + 0.03 * q) * (q > 0.01 ? 1 : 0);
    const pts = []; for (let k = 0; k <= 120; k++) { const u = s + gw + (k / 120) * (1 - 2 * gw); pts.push(F.along(ring, L, ((u % 1) + 1) % 1).p); }
    el("path", { d: F.dPoly(pts, false), fill: "none", stroke: col, "stroke-width": sw, "stroke-opacity": 0.9, "stroke-linecap": "round" }, g);
    const c = F.along(ring, L, s).p, R = F.rng(tear.a.seed); let nrm = perp(F.along(ring, L, s).u); if (F.pointInPoly(add(c, mul(nrm, 3)), sp.poly)) nrm = mul(nrm, -1);
    F.cloud(g, c[0] + nrm[0] * 8 * q, c[1] + nrm[1] * 8 * q, 14 * q + 2, 9 * q + 2, "anat-fluid", 0.8 * q);
    if (tear.age < 0.6) F.cloud(g, c[0], c[1], 22, 22, "fx-injury", (1 - tear.age / 0.6) * 0.7);
    for (const e of [s - gw, s + gw]) { const p0 = F.along(ring, L, ((e % 1) + 1) % 1).p; for (let j = 0; j < 3; j++) { const p1 = add(p0, [(R() - 0.5) * 7 * q, (R() - 0.5) * 7 * q]); el("path", { d: F.dPoly([p0, p1], false), stroke: col, "stroke-width": 1, fill: "none" }, g); } }
    void tot;
  }
  el("path", { d, fill: "none", stroke: mix("anat-capsule", "anat-fluid", 50), "stroke-width": 0.7, "stroke-opacity": 0.6 * (1 - st.tighten), "stroke-dasharray": "2 3", transform: `translate(0 0)` }, g);
}
function drawFascia(g, sp, st, rc) {
  if (!sp.poly) return drawBand(g, sp, st, rc, BAND_COL.fascia);
  const rule = sp.s.fillRule || null, self = selfClip(g, rc, sp, sp.d, "self", rule);
  const tears = st.fx.filter((f) => f.kind === "tear"), g3 = tears.find((f) => f.a.grade === 3 && f.p * f.w > 0.001);
  const body = (host) => {
    el("path", { d: sp.d, fill: url("closeup-g-fascia"), "fill-opacity": 0.66, "fill-rule": rule }, host);
    if (st.degen > 0.01) el("path", { d: sp.d, fill: C("anat-fat"), "fill-opacity": 0.35 * st.degen, "fill-rule": rule }, host);
    if (sp.bm) fibresFromModel(el("g", { "clip-path": self }, host), sp, sp.bm.C, sp.bm.H, sp.bm.H, sp.bm.S, { col: "anat-ligament-edge", crimp: 0.5, count: fibreCount(sp), R: F.rng(F.hash(sp.id)), cross: true, degen: st.degen });
    if (rule && st.thick + st.degen > 0.01) el("path", { d: sp.d, fill: "none", stroke: st.degen > 0.01 ? mix("anat-fascia", "anat-fat", 70) : C("anat-fascia"), "stroke-width": 1 + 7 * st.thick + 3 * st.degen, "stroke-opacity": 0.85, "stroke-linejoin": "round" }, host);
    el("path", { d: sp.d, fill: "none", stroke: mix("anat-fascia", "anat-ligament-edge", 45), "stroke-width": 0.9 + st.thick, "fill-rule": rule }, host);
  };
  if (!g3) body(g);
  else {
    const q = g3.p * g3.w, fr = frameAt(sp, g3.a.s), gap = (0.02 + 0.03 * q) * (sp.len || 100);
    [[F.halfPlane(fr.p, mul(fr.u, -1)), -1], [F.halfPlane(fr.p, fr.u), 1]].forEach(([reg, sg], k) => {
      const pg = el("g", { transform: `translate(${fmt(fr.u[0] * gap * sg)} ${fmt(fr.u[1] * gap * sg)})` }, g);
      body(el("g", { "clip-path": selfClip(g, rc, sp, F.dPoly(reg), "half" + k) }, pg));
    });
  }
  const fx = el("g", { "clip-path": self }, g);
  for (const f of tears) {
    const q = f.p * f.w, fr = frameAt(sp, f.a.s), R = F.rng(f.a.seed); if (q < 0.005) continue;
    const span = F.spanAt(sp.poly, fr.p, fr.n) || [-fr.half, fr.half];
    const reach = f.a.grade === 1 ? 0.35 : f.a.grade === 2 ? 0.7 : 1.05;
    const L = F.jagged(add(fr.p, mul(fr.n, span[0] - 2)), add(fr.p, mul(fr.n, span[0] + (span[1] - span[0] + 4) * reach)), R, 1.4, 8);
    if (f.age < 0.6) F.cloud(g, fr.p[0], fr.p[1], 26, 26, "fx-injury", (1 - f.age / 0.6) * 0.7 * f.w);
    F.crack(f.a.grade === 3 ? g : fx, L, clamp(f.age / 0.3) * f.w, { w: 1.8, glow: 0.7 });
    if (f.a.grade >= 2) F.pool(g, fr.p[0], fr.p[1], 5 + 6 * q, R, 0.6 * q, 4 + 3 * q);
  }
  if (st.degen > 0.05) { const R = F.rng(F.hash(sp.id) + 7); for (let k = 0; k < 4; k++) { const fr = frameAt(sp, clamp(st.degenAt + (R() - 0.5) * 0.4)), a = add(fr.p, mul(fr.n, fr.half * (R() < 0.5 ? -1 : 1))), pts = []; for (let m = 0; m <= 5; m++) pts.push(add(lerp2(a, fr.p, (m / 5) * 0.8), mul(fr.u, Math.sin(m * 1.9 + k) * 2))); el("path", { d: F.dPoly(pts, false), fill: "none", stroke: C("anat-artery"), "stroke-width": 1, "stroke-opacity": 0.85 * st.degen }, fx); } }
}

/* ---------- muscle ---------- */
function drawMuscle(g, sp, st, rc) {
  const self = selfClip(g, rc, sp, sp.d, "self", sp.s.fillRule);
  const strains = st.fx.filter((f) => f.kind === "strain");
  const g3 = strains.find((f) => f.a.grade === 3 && f.p * f.w > 0.001);
  const body = (host) => muscleBody(host, sp, st, rc, self, strains);
  if (!g3) body(g);
  else {
    const q = g3.p * g3.w, fr = frameAt(sp, g3.a.s), gap = 0.035 * sp.len * q;
    const A = F.halfPlane(fr.p, mul(sp.ax.u, -1)), Bp = F.halfPlane(fr.p, sp.ax.u);
    [[A, -1], [Bp, 1]].forEach(([reg, sg], i) => {
      const pg = el("g", { transform: `translate(${fmt(sp.ax.u[0] * gap * sg)} ${fmt(sp.ax.u[1] * gap * sg)})` }, g);
      body(el("g", { "clip-path": selfClip(g, rc, sp, F.dPoly(reg), "half" + i) }, pg));
      const R = F.rng(g3.a.seed + i);
      for (let j = 0; j < 9; j++) {
        const f = lerp(-0.85, 0.85, j / 8), b0 = add(fr.p, mul(fr.n, f * fr.half)), L0 = (3 + R() * 7) * q, pts = [];
        for (let m = 0; m <= 4; m++) pts.push(add(add(b0, mul(sp.ax.u, -sg * L0 * (m / 4) * -1)), mul(fr.n, Math.sin(m + j) * 1.2)));
        el("path", { d: F.dPoly(pts, false), stroke: C("anat-muscle-light"), "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" }, pg);
      }
    });
    F.pool(g, fr.p[0], fr.p[1], gap * 1.1 + 4, F.rng(g3.a.seed), 0.85 * q, fr.half * 0.8, (Math.atan2(sp.ax.u[1], sp.ax.u[0]) * 180) / Math.PI);
  }
  const fx = el("g", { "clip-path": self }, g);
  for (const f of st.fx) {
    const q = f.p * f.w; if (q < 0.005) continue;
    const fr = frameAt(sp, f.a.s ?? 0.5), R = F.rng(f.a.seed), rotA = (Math.atan2(fr.u[1], fr.u[0]) * 180) / Math.PI;
    if (f.kind === "strain" && f.a.grade < 3) {
      if (f.age < 0.6) F.cloud(g, fr.p[0], fr.p[1], fr.half + 14, fr.half + 14, "fx-injury", (1 - f.age / 0.6) * 0.75 * f.w);
      F.cloud(fx, fr.p[0], fr.p[1], fr.half * 1.2, fr.half * 0.9, "fx-oedema", 0.9 * q, rotA);
      const n = f.a.grade === 1 ? 7 : 16;
      for (let k = 0; k < n; k++) { const o = add(add(fr.p, mul(fr.u, (R() - 0.5) * fr.half * (f.a.grade === 1 ? 0.6 : 1.1))), mul(fr.n, (R() - 0.5) * fr.half * 1.5)); el("circle", { cx: o[0], cy: o[1], r: (0.8 + R() * 1.2) * q, fill: C("fx-bleed"), opacity: 0.9 }, fx); }
      if (f.a.grade === 2) F.pool(fx, fr.p[0], fr.p[1], fr.half * 0.6 * q + 3, R, 0.75 * q, fr.half * 0.35 * q + 2, rotA);
    } else if (f.kind === "haematoma") {
      { const rx = Math.max(6, sp.len * 0.11) * (0.4 + 0.6 * q); F.pool(fx, fr.p[0], fr.p[1], rx, R, 0.88 * q, Math.min(fr.half * 0.6, rx * 0.55), rotA); }
    } else if (f.kind === "ossify") {
      const r = Math.max(5, fr.half * 0.55);
      if (q < 0.6) for (let k = 0; k < 12; k++) { const o = add(fr.p, [(R() - 0.5) * r * 2, (R() - 0.5) * r * 1.6]); el("circle", { cx: o[0], cy: o[1], r: 0.9 + R(), fill: C("anat-bone"), opacity: q * 1.4 }, fx); }
      const k2 = clamp((q - 0.3) / 0.7); if (k2 > 0) { const pts = F.blobPts(fr.p[0], fr.p[1], r * k2, R, 10, 0.35, r * 0.75 * k2); const dd = F.dSmooth(pts); el("path", { d: dd, fill: url("closeup-g-bone") }, fx); el("path", { d: dd, fill: url("closeup-pat-trab"), opacity: 0.7 }, fx); el("path", { d: dd, fill: "none", stroke: C("anat-bone-edge"), "stroke-width": 1.6 }, fx); }
    }
  }
  if (st.spasm > 0.01) for (let k = 0; k < 3; k++) { const fr = frameAt(sp, 0.3 + k * 0.2); F.chevron(g, add(fr.p, mul(fr.u, -6)), mul(fr.u, 1), 3.5, "fx-force", 0.8 * st.spasm, 1.3); F.chevron(g, add(fr.p, mul(fr.u, 6)), mul(fr.u, -1), 3.5, "fx-force", 0.8 * st.spasm, 1.3); }
}
function muscleBody(g, sp, st, rc, self, strains) {
  el("path", { d: sp.d, fill: url("closeup-g-muscle"), "fill-rule": sp.s.fillRule }, g);
  if (st.atrophy > 0.01) el("path", { d: sp.d, fill: C("anat-fat"), "fill-opacity": 0.22 * st.atrophy }, g);
  if (st.contract + st.spasm > 0.01) el("path", { d: sp.d, fill: C("anat-muscle-edge"), "fill-opacity": 0.15 * clamp(st.contract + st.spasm) }, g);
  const fg = el("g", { "clip-path": self }, g), key = "fib";
  let fib = sp[key];
  if (!fib) fib = sp[key] = muscleFibres(sp);
  const gaps = strains.filter((f) => f.a.grade < 3).map((f) => ({ s: f.a.s, w: (f.a.grade === 1 ? 0.025 : 0.05) * f.p * f.w, frac: f.a.grade === 1 ? 0.35 : 0.7, seed: f.a.seed }));
  const ds = [], dl = [];
  fib.forEach((line, j) => {
    let cur = [];
    const R = F.rng(j * 31 + 7);
    const hit = gaps.filter((gp) => F.rng(gp.seed + j)() < gp.frac);
    line.forEach(([p, s]) => { if (hit.some((gp) => Math.abs(s - gp.s) < gp.w * (0.6 + R() * 0.8))) { if (cur.length > 1) (j % 2 ? dl : ds).push(cur); cur = []; } else cur.push(p); });
    if (cur.length > 1) (j % 2 ? dl : ds).push(cur);
  });
  el("path", { d: ds.map((s) => F.dPoly(s, false)).join(""), fill: "none", stroke: C("anat-muscle-edge"), "stroke-width": 0.9, "stroke-opacity": 0.42 }, fg);
  el("path", { d: dl.map((s) => F.dPoly(s, false)).join(""), fill: "none", stroke: C("anat-muscle-light"), "stroke-width": 0.8, "stroke-opacity": 0.45 }, fg);
  el("path", { d: sp.d, fill: "none", stroke: mix("anat-muscle-light", "stage-ink", 60), "stroke-width": 2.2, "stroke-opacity": 0.18, "clip-path": self }, g);
  el("path", { d: sp.d, fill: "none", stroke: C("anat-muscle-edge"), "stroke-width": 1.3, "fill-rule": sp.s.fillRule }, g);
}
function muscleFibres(sp) {
  const ax = sp.ax, pr = sp.prof, lines = [], ang = num(sp.s.fibreAngle, 0);
  if (Math.abs(ang) > 3) {
    const dir = norm(rotv(ax.u, ang)), nn = perp(dir), bb = sp.bb, diag = Math.hypot(bb.w, bb.h), c = sp.c, sp0 = 5;
    for (let o = -diag / 2; o <= diag / 2; o += sp0) { const line = []; for (let t = -diag / 2; t <= diag / 2; t += 4) { const p = add(add(c, mul(nn, o)), mul(dir, t)); if (insideStruct(sp, p, 2)) line.push([p, dot(sub(p, ax.a), ax.u) / ax.L]); else if (line.length) break; } if (line.length > 1) lines.push(line); }
    return lines;
  }
  const avgH = avg(pr.H), n = clamp(Math.round((avgH * 2) / 4.5), 5, 26);
  for (let j = 0; j < n; j++) {
    const f = lerp(-0.92, 0.92, j / (n - 1)), line = [];
    for (let k = 0; k < pr.T.length; k++) { const p = add(add(ax.a, mul(ax.u, pr.T[k])), mul(ax.n, pr.M[k] + f * pr.H[k])); line.push([p, pr.T[k] / ax.L]); }
    lines.push(line);
  }
  return lines;
}

/* ---------- cartilage ---------- */
function drawCartilage(g, sp, st, rc) {
  const self = selfClip(g, rc, sp, sp.d, "self", sp.s.fillRule);
  const pieces = [];
  for (const f of st.fx) {
    const q = f.p * f.w;
    if (f.kind === "ctear" && f.a.geo.frag) pieces.push({ region: f.a.geo.frag.poly, disp: mul(f.a.geo.frag.disp, q), rot: f.a.geo.frag.rot * q, pivot: F.centroidOf(f.a.geo.frag.poly) });
    if (f.kind === "ctear" && f.a.geo.detach) pieces.push({ region: F.BIG_RECT, disp: mul(f.a.geo.detach, q), rot: 0, all: true });
  }
  const body = (host) => {
    el("path", { d: sp.d, fill: url("closeup-g-cartilage"), "fill-opacity": 0.93, "fill-rule": sp.s.fillRule }, host);
    el("path", { d: sp.d, fill: url("closeup-pat-cells"), opacity: 0.8 }, host);
    if (/menisc/i.test(sp.id) || sp.s.kind === "meniscus") fibresFromModel(el("g", { "clip-path": self }, host), sp, cartModel(sp).C, cartModel(sp).H, cartModel(sp).H, cartModel(sp).S, { col: "anat-capsule", crimp: 0.2, count: 4, R: F.rng(4) });
    if (st.degen > 0.01) el("path", { d: sp.d, fill: C("anat-fat"), "fill-opacity": 0.3 * st.degen }, host);
    if (st.compress > 0.01) el("path", { d: sp.d, fill: C("fx-injury"), "fill-opacity": 0.18 * st.compress }, host);
    el("path", { d: sp.d, fill: "none", stroke: mix("anat-cartilage", "anat-capsule", 40), "stroke-width": 1, "fill-rule": sp.s.fillRule }, host);
  };
  const whole = pieces.find((p) => p.all);
  if (whole) { body(el("g", { transform: pieceTf(whole, sp.c) }, g)); }
  else if (!pieces.length) body(g);
  else {
    body(el("g", { "clip-path": selfClip(g, rc, sp, F.dPoly(F.BIG_RECT) + pieces.map((p) => F.dPoly(p.region)).join(""), "stay", "evenodd") }, g));
    pieces.forEach((pc, i) => { const pg = el("g", { transform: pieceTf(pc, sp.c) }, g); body(el("g", { "clip-path": selfClip(g, rc, sp, F.dPoly(pc.region), "pc" + i) }, pg)); });
  }
  for (const f of st.fx) {
    const q = f.p * f.w; if (q < 0.005) continue;
    if (f.kind === "ctear") {
      const geo = f.a.geo, u = clamp(f.age / 0.35) * f.w, fr = frameAt(sp, f.a.s);
      if (f.age < 0.6) F.cloud(g, fr.p[0], fr.p[1], 20, 20, "fx-injury", (1 - f.age / 0.6) * 0.7 * f.w);
      if (geo.lens) el("path", { d: F.dPoly(geo.lens), fill: mix("stage-bg", "anat-capsule", 70), "fill-opacity": 0.9 * q, stroke: C("fx-injury"), "stroke-opacity": 0.5 * q, "stroke-width": 0.8 }, g);
      for (const L of geo.lines) F.crack(g, L, u, { w: 1.6, glow: f.age < 0.8 ? 0.9 : 0.5, col: mix("stage-bg", "anat-capsule", 75) });
      if (geo.fray) { const R = F.rng(f.a.seed + 2); for (let k = 0; k < 10; k++) { const s = geo.fray.s0 + (R() - 0.5) * geo.fray.span * 2, fr2 = frameAt(sp, s), b0 = add(fr2.p, mul(fr2.n, geo.inner * fr2.half)), b1 = add(b0, add(mul(fr2.n, geo.inner * (2 + R() * 4) * q), mul(fr2.u, (R() - 0.5) * 4))); el("path", { d: F.dPoly([b0, b1], false), stroke: mix("anat-cartilage", "anat-capsule", 50), "stroke-width": 1, fill: "none" }, g); } }
    } else if (f.kind === "lesion") drawLesion(g, sp, f, q);
  }
  if (st.degen > 0.05) {
    const R = F.rng(F.hash(sp.id) + 12), cm = cartModel(sp);
    for (let k = 0; k < 16; k++) { const s = lerp(cm.S[2], cm.S[cm.S.length - 3], R()), side = cartSides(rc.P, sp, s).surf, fr = frameAt(sp, s), b0 = add(fr.p, mul(fr.n, side * fr.half)), b1 = add(b0, mul(fr.n, -side * fr.half * (0.3 + R() * 0.5) * st.degen)); el("path", { d: F.dPoly([b0, b1], false), stroke: mix("stage-bg", "anat-capsule", 60), "stroke-width": 0.9, fill: "none", "stroke-opacity": 0.8 }, g); }
  }
}
function cartModel(sp) { return sp.cm || (sp.cm = bandModel(sp)); }
function drawLesion(g, sp, f, q) {
  const L = f.a.geo, R = F.rng(f.a.seed + 4), k = clamp(f.age / 0.4) * f.w;
  const crater = L.crater.map((p) => lerp2(L.top, p, 1)).map((p, i) => (i < L.crater.length - 2 ? lerp2(add(L.top, mul(L.u, dot(sub(p, L.top), L.u))), p, k) : p));
  el("path", { d: F.dPoly(crater), fill: mix("stage-bg", "anat-capsule", 80), stroke: C("fx-injury"), "stroke-width": 1, "stroke-opacity": 0.7 * q }, g);
  if (f.a.depth !== "partial") {
    const base = crater.slice(3, 10);
    el("path", { d: F.dPoly(base, false), fill: "none", stroke: mix("anat-bone", "fx-injury", 75), "stroke-width": 2.6, "stroke-opacity": 0.9 * k, "stroke-linecap": "round" }, g);
  }
  if (f.a.depth === "osteochondral") {
    const c = add(add(L.top, mul(L.inward, -L.T * 1.4 * q)), mul(L.u, L.w * 0.25 * q)), w2 = L.w * 0.42, h2 = L.depth * 0.5;
    const gg = el("g", { transform: `rotate(${fmt(22 * q)} ${fmt(c[0])} ${fmt(c[1])})`, opacity: clamp(q * 2) }, g);
    const box = (a, b, h0, h1) => [add(add(c, mul(L.u, a)), mul(L.inward, h0)), add(add(c, mul(L.u, b)), mul(L.inward, h0)), add(add(c, mul(L.u, b * 0.85)), mul(L.inward, h1)), add(add(c, mul(L.u, a * 0.85)), mul(L.inward, h1))];
    el("path", { d: F.dSmooth(box(-w2, w2, h2 * 0.35, h2)), fill: url("closeup-g-bone"), stroke: C("anat-bone-edge"), "stroke-width": 1 }, gg);
    el("path", { d: F.dSmooth(box(-w2, w2, -h2 * 0.15, h2 * 0.38)), fill: C("anat-cartilage"), stroke: mix("anat-cartilage", "anat-capsule", 40), "stroke-width": 0.8 }, gg);
    void R;
  }
}

/* ---------- physis ---------- */
function drawPhysis(g, sp, st, rc) {
  el("path", { d: sp.d, fill: url("closeup-g-physis"), "fill-rule": sp.s.fillRule }, g);
  el("path", { d: sp.d, fill: url("closeup-pat-cells"), opacity: 0.55 }, g);
  el("path", { d: sp.d, fill: "none", stroke: mix("anat-physis", "stage-bg", 60), "stroke-width": 0.9 }, g);
  if (st.crush > 0.01) { el("path", { d: sp.d, fill: mix("anat-physis", "stage-bg", 40), "fill-opacity": 0.8 * st.crush }, g); el("path", { d: sp.d, fill: "none", stroke: C("fx-injury"), "stroke-width": 1.6, "stroke-opacity": 0.8 * st.crush, filter: F.blur(1) }, g); }
  if (st.pstress > 0.01) {
    F.glowOutline(g, sp.d, "fx-inflame", 0.7 * st.pstress, 1.6);
    const R = F.rng(F.hash(sp.id) + 3); let dd = "";
    for (let k = 0; k < 14; k++) { const fr = frameAt(sp, lerp(0.08, 0.92, k / 13)), side = k % 2 ? 1 : -1, a = add(fr.p, mul(fr.n, side * fr.half)), b = add(a, mul(fr.n, side * (1.5 + R() * 2.5) * st.pstress)); dd += `M${fmt(a[0])},${fmt(a[1])}L${fmt(b[0])},${fmt(b[1])}`; }
    el("path", { d: dd, stroke: mix("anat-physis", "stage-bg", 50), "stroke-width": 1.4, fill: "none" }, g);
  }
  for (const f of st.fx) {
    const q = f.p * f.w; if (q < 0.005) continue;
    if (f.kind === "pfracture") {
      const fr = frameAt(sp, f.a.s), R = F.rng(f.a.seed), L = F.jagged(add(fr.p, mul(fr.n, -fr.half - 8)), add(fr.p, mul(fr.n, fr.half + 8)), R, 1.2, 6);
      F.crack(g, L, clamp(f.age / 0.3) * f.w, { w: 1.8, glow: 0.8 });
    }
  }
}
/** Physeal separation lines go above all structures (they cross the metaphysis/epiphysis). */
function drawPhysisOverlay(g, sp, st) {
  for (const f of st.fx) {
    if (f.kind !== "separate") continue;
    const q = f.p * f.w, geo = f.a.geo; if (q < 0.005) continue;
    if (f.age < 0.6) F.cloud(g, sp.c[0], sp.c[1], 40, 26, "fx-injury", (1 - f.age / 0.6) * 0.75 * f.w);
    for (const L of geo.lines) F.crack(g, L, clamp(f.age / 0.35) * f.w, { w: 2, glow: f.age < 0.9 ? 0.9 : 0.45 });
    if (geo.crush) { const R = F.rng(f.a.seed); let dd = ""; for (let k = 0; k < 18; k++) { const fr = frameAt(sp, lerp(0.05, 0.95, k / 17)), a = add(fr.p, mul(fr.n, -fr.half)), b = add(fr.p, mul(fr.n, fr.half)); dd += F.dPoly(F.jagged(a, b, R, 0.8, 3), false); } el("path", { d: dd, stroke: C("fx-injury"), "stroke-width": 1, "stroke-opacity": 0.8 * q, fill: "none" }, g); }
  }
}

/* ---------- disc ---------- */
function drawDisc(g, sp, st, rc) {
  const hs = st.fx.filter((f) => f.kind === "herniate"), c = sp.c;
  let poly = sp.poly;
  for (const f of hs) {
    const q = f.p * f.w, v = f.a.hd, Rh = discRadius(sp, v), cfg = { bulge: [1.3, 0.13], protrusion: [7, 0.22], extrusion: [10, 0.1], sequestration: [10, 0.08] }[f.a.grade];
    poly = poly.map((p) => { const rel = sub(p, c), e = norm(rel), w = Math.pow(Math.max(0, dot(e, v)), cfg[0]); return add(p, mul(v, cfg[1] * Rh * w * q)); });
  }
  const d = F.dPoly(poly); rc.outline = d;
  const self = selfClip(g, rc, sp, d, "self");
  el("path", { d, fill: url("closeup-g-annulus") }, g);
  if (st.degen > 0.01) el("path", { d, fill: C("anat-bone-edge"), "fill-opacity": 0.25 * st.degen }, g);
  const lam = el("g", { "clip-path": self }, g);
  for (const k of [0.88, 0.76, 0.64, 0.52]) el("path", { d: F.dPoly(poly.map((p) => add(c, mul(sub(p, c), k)))), fill: "none", stroke: mix("anat-annulus", "anat-bone-edge", 45), "stroke-width": 0.8, "stroke-opacity": 0.6 }, lam);
  // nucleus
  const nu = sp.s.nucleus || {}, ell = sp.ell, rot = ell ? ell.rot : (Math.atan2(sp.u[1], sp.u[0]) * 180) / Math.PI;
  let nrx = num(nu.rx, (ell ? ell.rx : sp.len / 2) * 0.45), nry = num(nu.ry, (ell ? ell.ry : sp.thick / 2) * 0.45), ncx = c[0] + num(nu.dx, 0), ncy = c[1] + num(nu.dy, 0);
  const shrink = 1 - 0.35 * st.degen; nrx *= shrink; nry *= shrink;
  for (const f of hs) { const q = f.p * f.w, sh = f.a.grade === "bulge" ? 0.06 : 0.22, Rh = discRadius(sp, f.a.hd); ncx += f.a.hd[0] * Rh * sh * q; ncy += f.a.hd[1] * Rh * sh * q; }
  const nucCol = st.degen > 0.01 ? mix("anat-nucleus", "anat-annulus", 100 - 55 * st.degen) : null;
  el("ellipse", { cx: ncx, cy: ncy, rx: nrx, ry: nry, transform: `rotate(${fmt(rot)} ${fmt(ncx)} ${fmt(ncy)})`, fill: nucCol || url("closeup-g-nucleus"), stroke: mix("anat-nucleus", "anat-annulus", 50), "stroke-width": 0.7 }, g);
  for (const f of hs) {
    const q = f.p * f.w, v = f.a.hd, Rh = discRadius(sp, v), pv = perp(v), Rp = discRadius(sp, pv);
    if (f.a.grade === "protrusion" || f.a.grade === "extrusion" || f.a.grade === "sequestration") {
      const a0 = [ncx + v[0] * nrx * 0.6, ncy + v[1] * nrx * 0.6], a1 = add(c, mul(v, Rh * 0.98));
      F.crack(g, [a0, lerp2(a0, a1, 0.5), a1], f.a.grade === "protrusion" ? 0.8 : 1, { w: 1.2, glow: 0.4 });
    }
    if (f.a.grade === "extrusion" || f.a.grade === "sequestration") {
      const seq = f.a.grade === "sequestration", hr = Math.min(0.3 * Rh, 1.05 * Rp) * (0.4 + 0.6 * q), down = (() => { const dv = rc.P.dirVec("inferior"); return Array.isArray(dv) ? dv : [0, 1]; })();
      let hc = add(c, mul(v, Rh * (1.05 + 0.28 * q))); if (seq) hc = add(add(hc, mul(v, Rh * 0.22 * q)), mul(down, Rp * 0.9 * q));
      F.cloud(g, hc[0], hc[1], hr * 2, hr * 1.8, "fx-inflame", 0.5 * q);
      const head = F.dSmooth(F.blobPts(hc[0], hc[1], hr, F.rng(f.a.seed), 10, 0.25));
      if (!seq || q < 0.35) { const nk = hr * 0.42, base = add(c, mul(v, Rh * 0.55)), p1 = add(base, mul(pv, nk)), p2 = sub(base, mul(pv, nk)), h1 = add(hc, mul(pv, nk * 0.9)), h2 = sub(hc, mul(pv, nk * 0.9)); el("path", { d: F.dPoly([p1, h1, h2, p2]), fill: url("closeup-g-nucleus") }, g); }
      el("path", { d: head, fill: url("closeup-g-nucleus"), stroke: mix("anat-nucleus", "fx-inflame", 50), "stroke-width": 1.1 }, g);
    }
  }
  for (const f of st.fx.filter((x) => x.kind === "fissure")) {
    const q = clamp(f.age / 0.5) * f.w, v = f.a.hd, Rh = discRadius(sp, v), pv = perp(v), R = F.rng(f.a.seed);
    F.crack(g, F.jagged(add(c, mul(v, Rh * 0.4)), add(c, mul(v, Rh * 0.97)), R, 1, 6), q, { w: 1.3, glow: 0.6 });
    const arc = []; for (let k = 0; k <= 8; k++) { const a = lerp(-0.45, 0.45, k / 8), dir = norm(add(mul(v, Math.cos(a)), mul(pv, Math.sin(a)))); arc.push(add(c, mul(dir, discRadius(sp, dir) * 0.78))); }
    F.crack(g, arc, q, { w: 1, glow: 0.4 });
  }
  if (st.degen > 0.2) { const R = F.rng(F.hash(sp.id)); for (let k = 0; k < 3; k++) { const dir = rotv(sp.u, R() * 360); F.crack(g, F.jagged(add(c, mul(dir, discRadius(sp, dir) * 0.45)), add(c, mul(dir, discRadius(sp, dir) * 0.9)), R, 0.8, 4), 1, { w: 0.9, glow: 0 }); } }
  el("path", { d, fill: "none", stroke: mix("anat-annulus", "anat-bone-edge", 40), "stroke-width": 1.1 }, g);
}

/* ---------- bursa, space, fat pad ---------- */
function drawBursa(g, sp, st, rc) {
  const vol = clamp(0.5 + st.swell + st.inflame * 0.5);
  el("path", { d: sp.d, fill: url("closeup-l-fluid"), "fill-opacity": 0.55 + 0.4 * (vol - 0.5) }, g);
  if (st.compress > 0.01) el("path", { d: sp.d, fill: C("fx-injury"), "fill-opacity": 0.2 * st.compress }, g);
  el("path", { d: sp.d, fill: "none", stroke: mix("anat-fluid", "stage-bg", 60), "stroke-width": 1 }, g);
  if (sp.ell) el("ellipse", { cx: sp.ell.cx - sp.ell.rx * 0.25, cy: sp.ell.cy - sp.ell.ry * 0.3, rx: sp.ell.rx * 0.35, ry: Math.max(0.6, sp.ell.ry * 0.18), transform: `rotate(${fmt(sp.ell.rot)} ${fmt(sp.ell.cx)} ${fmt(sp.ell.cy)})`, fill: C("stage-ink"), opacity: 0.25 }, g);
}
function drawSpace(g, sp, st, rc) {
  if (!sp.d) return drawBand(g, sp, st, rc, ["anat-fluid", "anat-fluid"]);
  const base = sp.s.hidden ? 0 : sp.s.visible ? 1 : 0.45, a = clamp(base + st.reveal + st.hl * 0.5), fillKey = sp.s.fill;
  if (fillKey === "marrow" || fillKey === "fat") el("path", { d: sp.d, fill: fillKey === "marrow" ? url("closeup-g-marrow") : url("closeup-g-fat"), "fill-opacity": 0.95 * clamp(base + st.reveal) }, g);
  else if (a > 0.01) {
    el("path", { d: sp.d, fill: url("closeup-l-fluid"), "fill-opacity": 0.28 * a }, g);
    el("path", { d: sp.d, fill: "none", stroke: C("anat-fluid"), "stroke-width": 0.9, "stroke-opacity": 0.5 * a, "stroke-dasharray": sp.s.visible ? null : "3 3" }, g);
  }
  if (st.effuse > 0.01) { el("path", { d: sp.d, fill: url("closeup-l-fluid"), "fill-opacity": 0.3 + 0.6 * st.effuse }, g); el("path", { d: sp.d, fill: "none", stroke: C("anat-fluid"), "stroke-width": 1.2, "stroke-opacity": 0.8 * st.effuse }, g); }
  if (st.bleed > 0.005) {
    const src = st.bleedSrc || sp.c, Rmax = Math.max(...sp.poly.map((p) => dist(p, src))) + 4;
    const id = `closeup-${rc.uid}-${sp.idx}-bleed`, cp = el("clipPath", { id }, g); el("circle", { cx: src[0], cy: src[1], r: Math.max(0.1, Rmax * clamp(st.bleed * 1.05)) }, cp);
    const self = selfClip(g, rc, sp, sp.d, "self", sp.s.fillRule);
    const inner = el("g", { "clip-path": self }, g);
    el("path", { d: sp.d, fill: url("closeup-g-bleed"), "fill-opacity": 0.86, "clip-path": url(id) }, inner);
    el("path", { d: sp.d, fill: "none", stroke: mix("fx-bleed", "stage-bg", 70), "stroke-width": 1, "stroke-opacity": clamp(st.bleed * 2) }, g);
  }
  if (st.pressure > 0.01) {
    el("path", { d: sp.d, fill: F.rimG("fx-inflame"), "fill-opacity": 0.95 * st.pressure }, g);
    el("path", { d: sp.d, fill: url("closeup-pat-hatch"), opacity: 0.45 * st.pressure }, g);
    el("path", { d: sp.d, fill: "none", stroke: C("fx-inflame"), "stroke-width": 1.2 + 1.8 * st.pressure, "stroke-opacity": 0.85 * st.pressure }, g);
    const ring = [...sp.poly, sp.poly[0]], L = F.cumLengths(ring);
    for (let k = 0; k < 10; k++) { const { p, u } = F.along(ring, L, (k + 0.5) / 10); let nrm = perp(u); if (!F.pointInPoly(add(p, mul(nrm, 3)), sp.poly)) nrm = mul(nrm, -1); F.chevron(g, add(p, mul(nrm, 6)), nrm, 3.5, "fx-force", 0.85 * st.pressure, 1.4); }
  }
}
function drawFatpad(g, sp, st, rc) {
  const self = selfClip(g, rc, sp, sp.d, "self");
  el("path", { d: sp.d, fill: url("closeup-g-fat") }, g);
  el("path", { d: sp.d, fill: url("closeup-pat-fat"), opacity: 0.75, "clip-path": self }, g);
  if (st.impinge > 0.01) { el("path", { d: sp.d, fill: C("fx-inflame"), "fill-opacity": 0.35 * st.impinge }, g); F.glowOutline(g, sp.d, "fx-inflame", 0.7 * st.impinge, 1.6); }
  el("path", { d: sp.d, fill: "none", stroke: mix("anat-fat", "anat-bone-edge", 50), "stroke-width": 1 }, g);
  if (st.impinge > 0.01) for (const sg of [-1, 1]) { const p = add(sp.c, mul(sp.n, sg * (sp.thick / 2 + 8))); F.chevron(g, p, mul(sp.n, -sg), 5, "fx-force", st.impinge, 1.8); }
}

/* ---------- brain ---------- */
function drawBrain(g, sp, st, rc) {
  const self = selfClip(g, rc, sp, sp.d, "self", sp.s.fillRule), white = /callos/i.test(sp.id);
  el("path", { d: sp.d, fill: white ? mix("anat-brain", "stage-ink", 55) : url("closeup-g-brain"), "fill-rule": sp.s.fillRule }, g);
  if (!sp.gyri) sp.gyri = brainTexture(sp);
  el("path", { d: sp.gyri, fill: "none", stroke: C("anat-brain-deep"), "stroke-width": /cerebell/i.test(sp.id) ? 1 : 1.5, "stroke-opacity": 0.6, "stroke-linecap": "round", "clip-path": self }, g);
  el("path", { d: sp.d, fill: "none", stroke: mix("anat-brain", "stage-ink", 50), "stroke-width": 2.2, "stroke-opacity": 0.3, "clip-path": self }, g);
  const fx = el("g", { "clip-path": self }, g);
  for (const f of st.fx) if (f.kind === "bruise") drawBruise(fx, f.a.pt, sp, f.p * f.w, F.rng(f.a.seed || 5));
  if (st.shear > 0.01) {
    const R = F.rng(F.hash(sp.id) + 1), fl = rc.reduced ? 1 : 0.75 + 0.25 * Math.sin(rc.t * 9);
    let dd = ""; for (let k = 0; k < 16; k++) { const a = R() * Math.PI * 2, r0 = sp.minDim * (0.08 + R() * 0.12), r1 = sp.minDim * (0.3 + R() * 0.12), p0 = add(sp.c, [Math.cos(a) * r0 * 1.4, Math.sin(a) * r0]), p1 = add(sp.c, [Math.cos(a + 0.3) * r1 * 1.4, Math.sin(a + 0.3) * r1]), m = add(lerp2(p0, p1, 0.5), [Math.sin(k) * 6, Math.cos(k) * 6]); dd += `M${fmt(p0[0])},${fmt(p0[1])}Q${fmt(m[0])},${fmt(m[1])} ${fmt(p1[0])},${fmt(p1[1])}`; }
    el("path", { d: dd, fill: "none", stroke: C("fx-injury"), "stroke-width": 1.2, "stroke-opacity": 0.75 * st.shear * fl, "stroke-dasharray": "5 3" }, fx);
    for (let k = 0; k < 14; k++) { const a = R() * Math.PI * 2, r = sp.minDim * (0.15 + R() * 0.2); el("circle", { cx: sp.c[0] + Math.cos(a) * r * 1.4, cy: sp.c[1] + Math.sin(a) * r, r: 1.4, fill: C("fx-bleed"), opacity: 0.9 * st.shear }, fx); }
  }
  el("path", { d: sp.d, fill: "none", stroke: mix("anat-brain", "anat-brain-deep", 30), "stroke-width": 1.2, "fill-rule": sp.s.fillRule }, g);
}
function brainTexture(sp) {
  const R = F.rng(F.hash(sp.id)), bb = sp.bb; let d = "";
  if (/cerebell/i.test(sp.id)) {
    for (let o = -sp.thick / 2; o < sp.thick / 2; o += 4.5) { const pts = []; for (let tt = -sp.len / 2; tt <= sp.len / 2; tt += 6) pts.push(add(add(sp.c, mul(sp.n, o + Math.sin(tt * 0.08) * 2)), mul(sp.u, tt))); d += F.dPoly(pts, false); }
    return d;
  }
  if (/stem/i.test(sp.id)) { for (const f of [-0.3, 0.3]) { const pts = []; for (let k = 0; k <= 10; k++) { const fr = frameAt(sp, k / 10); pts.push(add(fr.p, mul(fr.n, f * fr.half))); } d += F.dPoly(pts, false); } return d; }
  if (/callos/i.test(sp.id)) return "";
  const stp = 21;
  for (let y = bb.y + 8; y < bb.y + bb.h - 4; y += stp) for (let x = bb.x + 8; x < bb.x + bb.w - 4; x += stp) {
    const p = [x + (R() - 0.5) * 9, y + (R() - 0.5) * 9];
    if (!insideStruct(sp, p) || !insideStruct(sp, add(p, [7, 0])) || !insideStruct(sp, add(p, [-7, 0])) || !insideStruct(sp, add(p, [0, 7])) || !insideStruct(sp, add(p, [0, -7]))) continue;
    const a = R() * Math.PI, L0 = 8 + R() * 7, dir = [Math.cos(a), Math.sin(a)], nn = perp(dir), p0 = sub(p, mul(dir, L0)), p1 = add(p, mul(dir, L0)), c1 = add(lerp2(p0, p, 0.5), mul(nn, 5)), c2 = add(lerp2(p, p1, 0.5), mul(nn, -5));
    d += `M${fmt(p0[0])},${fmt(p0[1])}Q${fmt(c1[0])},${fmt(c1[1])} ${fmt(p[0])},${fmt(p[1])}Q${fmt(c2[0])},${fmt(c2[1])} ${fmt(p1[0])},${fmt(p1[1])}`;
  }
  return d;
}

/* ---------- particles ---------- */
function particlePositions(sp, st) {
  const e = sp.ell, n = clamp(Math.round(num(sp.s.count, 8)), 1, 60), R = F.rng(F.hash(sp.id)), cr = e.rx * 1.4 + n * 0.3, base = [];
  for (let i = 0; i < n; i++) { const a = R() * Math.PI * 2, r = Math.sqrt(R()) * cr; base.push({ off: [Math.cos(a) * r, Math.sin(a) * r], rot: R() * 180, d: R() * 0.35, sag: 0.15 + R() * 0.25 }); }
  let pos = base.map((b) => add([e.cx, e.cy], b.off)), rot = base.map((b) => b.rot);
  for (const f of st.fx.filter((x) => x.kind === "scatter")) {
    const to = f.a.toPt, down = [0, 1];
    pos = pos.map((p, i) => {
      const b = base[i], u = ease(clamp((f.age / f.a.dur - b.d) / (1 - 0.35))) * f.w, tgt = add(to, mul(b.off, 0.55)), mid = add(lerp2(p, tgt, 0.5), mul(down, dist(p, tgt) * b.sag));
      rot[i] += 200 * u; const v = 1 - u; return [v * v * p[0] + 2 * v * u * mid[0] + u * u * tgt[0], v * v * p[1] + 2 * v * u * mid[1] + u * u * tgt[1]];
    });
  }
  return { pos, rot, size: clamp(e.rx * 0.45, 1.8, 5) };
}
function drawParticles(g, sp, st, rc) {
  const { pos, rot, size } = particlePositions(sp, st), c = F.centroidOf(pos.length > 2 ? pos : [...pos, add(pos[0], [1, 0]), add(pos[0], [0, 1])]);
  sp.cur = c;
  pos.forEach((p, i) => {
    const pts = [[0, -size], [size * 0.62, 0], [0, size], [-size * 0.62, 0]].map((q) => add(p, rotv(q, rot[i])));
    el("path", { d: F.dPoly(pts), fill: mix("anat-bone", "stage-ink", 55), stroke: C("anat-bone-edge"), "stroke-width": 0.6 }, g);
  });
  const bb = F.bboxOf(pos); rc.outline = F.dPoly(F.ellipsePts(bb.x + bb.w / 2, bb.y + bb.h / 2, bb.w / 2 + size * 2, bb.h / 2 + size * 2, 0, 24));
}

const DRAW = { bone: drawBone, ligament: drawLigament, tendon: drawLigament, nerve: drawLigament, fascia: drawFascia, capsule: drawCapsule, vessel: drawVessel, muscle: drawMuscle, cartilage: drawCartilage, physis: drawPhysis, disc: drawDisc, bursa: drawBursa, space: drawSpace, fatpad: drawFatpad, brain: drawBrain, particles: drawParticles };

/* ================================================================== frame */
let INST_N = 0;
const INST = new WeakMap();
function instance(g) {
  let I = INST.get(g);
  if (!I || I.root.parentNode !== g) {
    if (!I) I = { uid: ++INST_N, cache: new Map(), labelKey: "", labelBoxes: null };
    I.root = el("g", { class: "closeup-root" }); I.anat = el("g", {}, I.root); I.back = el("g", {}, I.anat); I.structs = el("g", {}, I.anat); I.fxg = el("g", {}, I.anat); I.over = el("g", {}, I.root);
    I.cache = new Map(); I.backFor = null;
    g.replaceChildren(I.root); INST.set(g, I);
  }
  return I;
}
function drawPlaceholder(g, P0, msg) {
  const I = INST.get(g); if (I) INST.delete(g);
  g.replaceChildren();
  const [x, y, w, h] = P0 || [0, 0, 800, 450];
  el("rect", { x: x + w * 0.2, y: y + h * 0.36, width: w * 0.6, height: h * 0.28, rx: 10, fill: C("stage-bg-2"), stroke: C("stage-grid"), "stroke-dasharray": "5 4" }, g);
  F.text(g, x + w / 2, y + h / 2 + 5, msg, { "text-anchor": "middle", fill: C("stage-ink-2"), "font-size": 15, style: `font-family:${F.FONT}` });
}
function structSig(sp, st, timeDep) {
  const r = (x) => Math.round(x * 1000) / 1000, o = [];
  for (const k of NUMERIC) o.push(r(st[k]));
  o.push(r(st.vis), r(st.fade), r(st.squeeze), r(st.pstress), r(st.crush));
  for (const f of st.fx) o.push(f.kind, f.a.idx ?? f.a.seed, r(f.p), r(f.w), f.age < 1.2 ? r(f.age) : 9);
  for (const pc of st.pieces) o.push(r(pc.disp[0]), r(pc.disp[1]), r(pc.rot));
  if (timeDep) o.push(timeDep);
  return o.join(",");
}
function timeDependent(sp, st, t, reduced) {
  if (typeof sp.s.draw === "function") return t;
  if (reduced) return 0;
  if (st.pulse > 0.001 || st.irritate > 0.001 || st.spasm > 0.001 || st.inflame > 0.001 || st.shear > 0.001) return t;
  if (sp.type === "vessel") return t;
  return 0;
}

export function renderCloseupFrame(g, phase, t, ctx = {}) {
  const warn = warner(ctx);
  const fallback = { viewBox: [0, 0, 800, 450], anchors: {}, ready: false };
  try {
    if (!g || !phase) { warn("renderCloseupFrame called without a group or phase"); return fallback; }
    const id = phase.scene, e = SCENE_CACHE.get(id);
    if (!e || e.status === "loading") {
      const pr = loadScene(id), ent = SCENE_CACHE.get(id);
      if (ent && ent.status === "loading" && typeof ctx.requestRender === "function" && !ent.waiters.includes(ctx.requestRender)) ent.waiters.push(ctx.requestRender);
      void pr; drawPlaceholder(g, null, "Loading close-up…"); return fallback;
    }
    if (e.status === "missing") { warn(`scene "${id}" could not be loaded (${e.error && e.error.message}) — placeholder drawn`); drawPlaceholder(g, null, `Close-up “${id}” unavailable`); return fallback; }
    return drawFrame(g, e.scene, phase, num(t, 0), ctx, warn);
  } catch (err) {
    warn(`frame failed: ${err && err.message} @ ${String(err && err.stack || "").split("\n").slice(1, 3).join(" | ")}`);
    try { drawPlaceholder(g, null, "Close-up unavailable"); } catch { /* ignore */ }
    return fallback;
  }
}
function drawFrame(g, scene, phase, t, ctx, warn) {
  const P = prepare(scene, warn), pl = plan(P, phase, warn), reduced = !!ctx.reducedMotion;
  const defs = ctx.defs || ensureLocalDefs(g);
  F.ensureDefs(defs);
  const S = computeState(P, pl, t, reduced), I = instance(g);
  const mirror = !!phase.mirror, [vx, vy, vw, vh] = P.vb;
  const rc = { P, S, t, reduced, uid: I.uid, warn, defs };
  // anatomy group: mirror + impact shake
  const mx = mirror ? `translate(${fmt(2 * vx + vw)} 0) scale(-1 1)` : "";
  const sh = S.shake[0] || S.shake[1] ? ` translate(${fmt(S.shake[0])} ${fmt(S.shake[1])})` : "";
  I.anat.setAttribute("transform", (mx + sh).trim() || "translate(0 0)");
  if (I.backFor !== scene) { I.back.replaceChildren(); drawBackdrop(I.back, scene); I.backFor = scene; }
  // structures (diffed by state signature)
  let prev = null; const seen = new Set();
  for (const sp of P.structs) {
    const st = S.st.get(sp.id), sig = structSig(sp, st, timeDependent(sp, st, t, reduced));
    let c = I.cache.get(sp.id);
    if (!c || c.sig !== sig || c.scene !== scene) {
      let node;
      try { node = drawStructure(sp, st, rc); } catch (err) { warn(`drawing "${sp.id}" failed (${err.message})`); node = el("g", {}); }
      if (c && c.node.parentNode === I.structs) I.structs.replaceChild(node, c.node);
      c = { sig, node, scene, outline: rc.outline }; I.cache.set(sp.id, c);
    }
    if (c.node.parentNode !== I.structs || c.node.previousSibling !== prev) { if (prev) prev.after(c.node); else I.structs.prepend(c.node); }
    prev = c.node; seen.add(sp.id);
  }
  for (const [k, c] of I.cache) if (!seen.has(k) || c.scene !== scene) { c.node.remove(); I.cache.delete(k); }
  // cross-structure fx (physeal separation lines, brain strike flashes)
  I.fxg.replaceChildren();
  for (const sp of P.structs) if (sp.type === "physis") { const st = S.st.get(sp.id); if (st.fx.some((f) => f.kind === "separate")) drawPhysisOverlay(I.fxg, sp, st); }
  for (const fl of S.flashes) { const M = matrixFor(fl.sp, S.st.get(fl.sp.id), t, reduced), p = applyM(M, fl.pt), k = fl.age / 0.8; F.cloud(I.fxg, p[0], p[1], 26, 26, "fx-injury", (1 - k) * 0.9 * fl.w); el("circle", { cx: p[0], cy: p[1], r: 6 + 34 * easeOut(k), fill: "none", stroke: C("fx-force"), "stroke-width": 2.2, "stroke-opacity": 1 - k }, I.fxg); }
  // camera
  const z = clamp(S.cam.z, 1, 3), w = vw / z, h = vh / z;
  let cx = S.cam.cx; if (mirror) cx = 2 * vx + vw - cx;
  const vb = [clamp(cx - w / 2, vx, vx + vw - w), clamp(S.cam.cy - h / 2, vy, vy + vh - h), w, h];
  // overlay: arrows, impacts, pain, labels (screen-oriented, mirrored coordinates)
  I.over.replaceChildren();
  drawOverlay(I, P, pl, S, rc, vb, mirror);
  const anchors = {};
  for (const [k, p] of Object.entries(P.anchors)) anchors[k] = mirror ? [2 * vx + vw - p[0], p[1]] : [p[0], p[1]];
  return { viewBox: vb, anchors, ready: true };
}
function ensureLocalDefs(g) {
  const svg = g.ownerSVGElement || (g.tagName && g.tagName.toLowerCase() === "svg" ? g : null);
  const host = svg || g;
  let d = host.querySelector(":scope > defs.closeup-defs");
  if (!d) { d = el("defs", { class: "closeup-defs" }); host.insertBefore(d, host.firstChild); }
  return d;
}
function drawBackdrop(g, scene) {
  const FILLS = { skin: "anat-skin", soft: "stage-bg-2", fat: "anat-fat", fluid: "anat-fluid" };
  for (const b of scene.backdrop || []) {
    if (!b || typeof b.d !== "string" || b.fill === "none") continue;
    el("path", { d: b.d, fill: C(FILLS[b.fill] || "stage-bg-2"), opacity: num(b.opacity, 0.4) }, g);
  }
}

/* ================================================================== overlay */
function drawOverlay(I, P, pl, S, rc, vb, mirror) {
  const [vx, , vw] = P.vb, k = vb[2] / 800, t = S.t, g = I.over;
  const M = (p) => (mirror ? [2 * vx + vw - p[0], p[1]] : p), Mv = (v) => (mirror ? [-v[0], v[1]] : v);
  const fixed = [];
  // arrows
  for (const { a, age } of S.arrows) {
    const hold = num(a.hold, a.persist ? Infinity : 3), grow = ease(age / a.dur), fade = age > hold ? 1 - clamp((age - hold) / 0.5) : 1, op = grow * fade;
    if (op < 0.01) continue;
    const at = M(a.pt), size = { s: 0.65, m: 1, l: 1.4 }[a.size] || 1;
    let lp, anchor = "middle";
    if (a.oop) {
      const r = 11 * size * (rc.reduced ? 1 : 1 + 0.06 * Math.sin(t * 6));
      F.oopMarker(g, at[0], at[1], r, a.oop === "out", op);
      lp = [at[0] + r + 6, at[1] + 5]; anchor = "start";
      if (at[0] > vb[0] + vb[2] * 0.7) { lp = [at[0] - r - 6, at[1] + 5]; anchor = "end"; }
    } else {
      const v = norm(Mv(a.vec)), L0 = 70 * size, wob = rc.reduced ? 0 : Math.sin(t * 2 * Math.PI * 1.1) * 2.2;
      const tip = sub(at, mul(v, 7 - wob)), tail = sub(tip, mul(v, L0)), slide = (1 - grow) * 18, tp = sub(tip, mul(v, slide)), tl = sub(tail, mul(v, slide));
      const d = F.arrowD(tl, tp, 11 * size);
      el("path", { d, fill: C("stage-bg"), opacity: 0.55 * op, transform: "translate(1.5 2)" }, g);
      el("path", { d, fill: C("fx-force"), stroke: mix("fx-force", "stage-bg", 60), "stroke-width": 1, opacity: op, "stroke-linejoin": "round" }, g);
      const back = sub(tl, mul(v, 8));
      lp = [back[0], back[1] + (Math.abs(v[1]) > 0.7 ? (v[1] > 0 ? -4 : 14) : 5)];
      anchor = Math.abs(v[0]) < 0.35 ? "middle" : v[0] > 0 ? "end" : "start";
    }
    if (a.label) {
      const fs = 13.5 * k, lines = F.wrapLabel(a.label, 24), w = Math.max(...lines.map((s) => F.textWidth(s, fs))), h = lines.length * fs * 1.18;
      let x = anchor === "end" ? lp[0] - w : anchor === "middle" ? lp[0] - w / 2 : lp[0], y = lp[1] - fs;
      if (anchor === "middle" && Math.abs(norm(Mv(a.vec || [0, 1]))[1]) > 0.7 && norm(Mv(a.vec || [0, 1]))[1] > 0) y = lp[1] - h;
      x = clamp(x, vb[0] + 4 * k, vb[0] + vb[2] - w - 4 * k); y = clamp(y, vb[1] + 4 * k, vb[1] + vb[3] - h - 4 * k);
      fixed.push({ box: { x, y, w, h }, lines, fs, op, col: "fx-force" });
    }
  }
  // impacts
  for (const { a, age } of S.impacts) {
    const p = M(a.pt), u = age / 0.9; if (u >= 1) continue;
    F.cloud(g, p[0], p[1], 40 * (1 - u * 0.5), 40 * (1 - u * 0.5), "stage-ink", 0.85 * (1 - u) * (1 - u));
    for (const [d0, col] of [[0, "fx-force"], [0.18, "fx-injury"]]) { const uu = clamp((u - d0) / (1 - d0)); if (uu <= 0 || uu >= 1) continue; el("circle", { cx: p[0], cy: p[1], r: 8 + 58 * easeOut(uu), fill: "none", stroke: C(col), "stroke-width": 3 * (1 - uu) + 0.5, "stroke-opacity": 1 - uu }, g); }
    let dd = ""; for (let i = 0; i < 10; i++) { const an = (i / 10) * Math.PI * 2 + 0.2, r0 = 14 + 30 * u, r1 = r0 + 12 * (1 - u); dd += `M${fmt(p[0] + Math.cos(an) * r0)},${fmt(p[1] + Math.sin(an) * r0)}L${fmt(p[0] + Math.cos(an) * r1)},${fmt(p[1] + Math.sin(an) * r1)}`; }
    el("path", { d: dd, stroke: C("fx-force"), "stroke-width": 2, "stroke-opacity": 1 - u, "stroke-linecap": "round" }, g);
  }
  // pain
  for (const { a, age, out } of S.pains) {
    const p = M(a.pt), grow = easeOut(age / a.dur), pul = rc.reduced ? 1 : 1 + 0.13 * Math.sin(t * 2 * Math.PI * 1.6), op = grow * (1 - out), r = 15 * pul * grow;
    if (op < 0.01) continue;
    F.cloud(g, p[0], p[1], r * 2.4, r * 2.4, "fx-pain", 0.55 * op);
    el("path", { d: F.dPoly(F.starPts(p[0], p[1], r, r * 0.5, 9, rc.reduced ? 0 : t * 12, F.rng(a.seed))), fill: C("fx-pain"), stroke: mix("fx-pain", "stage-ink", 50), "stroke-width": 1, opacity: 0.9 * op }, g);
  }
  // structure labels
  const items = [];
  for (const L of pl.labels) {
    if (L.t0 > t + 1e-9) continue;
    const fin = clamp((t - L.t0) / closeupDefaults.label), fout = t >= L.tEnd ? 1 - clamp((t - L.tEnd) / 0.4) : 1;
    let op = fin * fout; if (op < 0.01) continue;
    let pt = L.pt, sp = L.sid ? P.byId[L.sid] : null;
    if (sp) { const st = S.st.get(sp.id); op *= clamp(st.vis) * Math.max(0.6, clamp(st.fade)); if (!pt) pt = sp.type === "particles" && sp.cur ? sp.cur : sp.labelPt; pt = applyM(matrixFor(sp, st, t, rc.reduced), pt); }
    if (!pt || op < 0.01) continue;
    items.push({ pt: M(pt), lines: F.wrapLabel(L.text, 28), fs: 14 * k, op, target: L.sid, pref: sp && sp.labelPref ? M(sp.labelPref) : null, key: L.key + L.t0 });
  }
  if (!items.length && !fixed.length) return;
  const occ = (x, y, target) => occupancy(P, mirror ? 2 * vx + vw - x : x, y, target);
  const key = JSON.stringify([vb.map((v) => Math.round(v)), items.map((i) => [i.key, Math.round(i.pt[0] / 3), Math.round(i.pt[1] / 3)]), fixed.map((f) => [Math.round(f.box.x), Math.round(f.box.y)])]);
  let boxes = I.labelKey === key ? I.labelBoxes : null;
  if (!boxes) { boxes = F.placeLabels([...fixed.map((f) => ({ fixed: f.box, lines: f.lines, fs: f.fs, pt: [f.box.x, f.box.y] })), ...items], vb, occ, k).slice(fixed.length); I.labelKey = key; I.labelBoxes = boxes; }
  const halo = { stroke: C("stage-bg"), "stroke-width": 3.4 * k, "paint-order": "stroke", "stroke-linejoin": "round", "stroke-opacity": 0.92 };
  const drawText = (box, lines, fs, op, col) => {
    const tg = el("text", { x: box.x + 3 * k, y: box.y + fs * 0.95, fill: C(col), "font-size": fmt(fs), "font-weight": 600, opacity: op, style: `font-family:${F.FONT}`, ...halo }, g);
    lines.forEach((ln, i) => { const ts = el("tspan", { x: box.x + 3 * k, dy: i ? fs * 1.18 : 0 }, tg); ts.textContent = ln; });
  };
  for (const f of fixed) drawText(f.box, f.lines, f.fs, f.op, f.col);
  items.forEach((it, i) => {
    const b = boxes[i]; if (!b) return;
    const lp = [b.lx, b.ly];
    const lg = el("g", { opacity: it.op }, g);
    el("path", { d: F.dPoly([lp, it.pt], false), stroke: C("stage-bg"), "stroke-width": 3.2 * k, "stroke-opacity": 0.7, fill: "none", "stroke-linecap": "round" }, lg);
    el("path", { d: F.dPoly([lp, it.pt], false), stroke: C("stage-ink"), "stroke-width": 1.2 * k, fill: "none", "stroke-linecap": "round" }, lg);
    el("circle", { cx: it.pt[0], cy: it.pt[1], r: 3 * k, fill: C("stage-ink"), stroke: C("stage-bg"), "stroke-width": 1.2 * k }, lg);
    drawText(b, it.lines, it.fs, it.op, "stage-ink");
  });
}
function occupancy(P, x, y, target) {
  if (!P.grid) {
    const [vx, vy, vw, vh] = P.vb, cs = 10, nx = Math.ceil(vw / cs), ny = Math.ceil(vh / cs), grid = new Array(nx * ny);
    const solid = P.structs.filter((s) => s.type !== "space" && s.type !== "particles" && !s.ghost);
    const backdrop = []; for (const b of P.scene.backdrop || []) { try { for (const q of F.flattenPath(b.d)) backdrop.push(q.pts); } catch { /* ignore */ } }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const p = [vx + (i + 0.5) * cs, vy + (j + 0.5) * cs], ids = [];
      for (const s of solid) { const b = s.bb; if (p[0] < b.x || p[0] > b.x + b.w || p[1] < b.y || p[1] > b.y + b.h) continue; if (insideStruct(s, p)) ids.push(s.id); }
      grid[j * nx + i] = ids.length ? ids : backdrop.some((b) => F.pointInPoly(p, b)) ? 1 : null;
    }
    P.grid = { grid, nx, ny, cs, vx, vy };
  }
  const G = P.grid, i = Math.floor((x - G.vx) / G.cs), j = Math.floor((y - G.vy) / G.cs);
  if (i < 0 || j < 0 || i >= G.nx || j >= G.ny) return 0;
  const c = G.grid[j * G.nx + i]; if (!c) return 0;
  if (c === 1) return 1;
  return target && c.includes(target) ? 3 : 2;
}

/* ================================================================== static preview */
export function renderStatic(svg, scene, opts = {}) {
  if (!svg || !scene) return null;
  if (scene.id && !SCENE_CACHE.has(scene.id)) registerScene(scene);
  const ctx = { reducedMotion: true, warn: opts.warn, defs: null };
  let defs = svg.querySelector(":scope > defs"); if (!defs) { defs = el("defs"); svg.insertBefore(defs, svg.firstChild); }
  ctx.defs = defs;
  let g = svg.querySelector(":scope > g.closeup-static"); if (!g) g = el("g", { class: "closeup-static" }, svg);
  const warn = warner(ctx);
  const phase = opts.phase || { type: "closeup", scene: scene.id, mirror: !!opts.mirror, actions: opts.actions || [] };
  const res = drawFrame(g, scene, phase, num(opts.t, 0), ctx, warn);
  svg.setAttribute("viewBox", res.viewBox.map(fmt).join(" "));
  return res;
}
/** Debug/test helper: the computed per-structure state at time t (plain data). */
export function closeupState(scene, phase, t) {
  const warn = warner(null), P = prepare(scene, warn), S = computeState(P, plan(P, phase, warn), t, true);
  const out = {}; for (const [k, v] of S.st) out[k] = { ...v, fx: v.fx.map((f) => ({ kind: f.kind, p: f.p, w: f.w })) };
  return { structures: out, camera: S.cam };
}
