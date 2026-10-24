/**
 * closeup-fx.js — shared geometry + effect primitives for the close-up renderer (closeup.js).
 * OWNER: A8. Pure helpers: no module state except the static <defs> registry (ids prefixed `closeup-`).
 * Colours come only from css/tokens.css variables (var(--…) or color-mix of two tokens).
 */

export const NS = "http://www.w3.org/2000/svg";
export const FONT = "var(--font-body)";

/* ------------------------------------------------------------------ maths */
export const clamp = (x, lo = 0, hi = 1) => (x < lo ? lo : x > hi ? hi : x);
export const lerp = (a, b, u) => a + (b - a) * u;
export const ease = (u) => { u = clamp(u); return u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2; };
export const easeOut = (u) => 1 - (1 - clamp(u)) ** 3;
export const easeIn = (u) => clamp(u) ** 2;
export const bump = (x, w) => Math.exp(-((x / (w || 1e-6)) ** 2));
export const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
export const mul = (a, k) => [a[0] * k, a[1] * k];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
export const len = (a) => Math.hypot(a[0], a[1]);
export const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
export const norm = (a) => { const l = Math.hypot(a[0], a[1]) || 1; return [a[0] / l, a[1] / l]; };
export const perp = (a) => [-a[1], a[0]];
export const rotv = (a, deg) => { const r = (deg * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r); return [a[0] * c - a[1] * s, a[0] * s + a[1] * c]; };
export const lerp2 = (a, b, u) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
export const fmt = (n) => (Math.round(n * 100) / 100).toString();

/** Seeded PRNG (mulberry32) → () => [0,1). */
export function rng(seed) {
  let a = (seed >>> 0) || 0x9e3779b9;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

/* ------------------------------------------------------------------ colour */
const tok = (c) => (c.startsWith("var(") || c.startsWith("color-mix(") ? c : `var(--${c})`);
export const C = tok;
/** color-mix of two tokens: pct % of a. */
export const mix = (a, b, pct) => `color-mix(in srgb, ${tok(a)} ${Math.round(clamp(pct, 0, 100))}%, ${tok(b)})`;

/* ------------------------------------------------------------------ DOM */
const COLOR_ATTRS = new Set(["fill", "stroke", "stop-color", "flood-color", "lighting-color", "color"]);
/** createElementNS + attributes. Colour values containing var()/color-mix() go into `style` (works everywhere). */
export function el(tag, attrs, parent) {
  const e = document.createElementNS(NS, tag);
  if (attrs) {
    let style = attrs.style ? String(attrs.style).replace(/;?\s*$/, ";") : "";
    for (const k in attrs) {
      const v = attrs[k];
      if (v === undefined || v === null || v === false || k === "style") continue;
      if (COLOR_ATTRS.has(k) && typeof v === "string" && /var\(|color-mix\(/.test(v)) style += `${k}:${v};`;
      else e.setAttribute(k, typeof v === "number" ? fmt(v) : v);
    }
    if (style) e.setAttribute("style", style);
  }
  if (parent) parent.appendChild(e);
  return e;
}
export function text(parent, x, y, str, attrs = {}) { const t = el("text", { x, y, ...attrs }, parent); t.textContent = str; return t; }

/* ------------------------------------------------------------------ paths */
export function dPoly(pts, closed = true) {
  if (!pts || !pts.length) return "";
  let d = `M${fmt(pts[0][0])},${fmt(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) d += `L${fmt(pts[i][0])},${fmt(pts[i][1])}`;
  return closed ? d + "Z" : d;
}
/** Smooth path through points using quadratic segments between midpoints. */
export function dSmooth(pts, closed = true) {
  const n = pts.length; if (n < 3) return dPoly(pts, closed);
  const m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  if (closed) {
    let s = m(pts[n - 1], pts[0]); let d = `M${fmt(s[0])},${fmt(s[1])}`;
    for (let i = 0; i < n; i++) { const p = pts[i], q = m(p, pts[(i + 1) % n]); d += `Q${fmt(p[0])},${fmt(p[1])} ${fmt(q[0])},${fmt(q[1])}`; }
    return d + "Z";
  }
  let d = `M${fmt(pts[0][0])},${fmt(pts[0][1])}`;
  for (let i = 1; i < n - 1; i++) { const p = pts[i], q = m(p, pts[i + 1]); d += `Q${fmt(p[0])},${fmt(p[1])} ${fmt(q[0])},${fmt(q[1])}`; }
  return d + `L${fmt(pts[n - 1][0])},${fmt(pts[n - 1][1])}`;
}

/** Flatten SVG path data into subpaths of points: [{ pts, closed }]. Handles M L H V C S Q T A Z (abs + rel). */
export function flattenPath(d, segs = 8) {
  const toks = String(d || "").match(/[a-zA-Z]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/g) || [];
  const subs = []; let cur = null, i = 0, cmd = "", x = 0, y = 0, sx = 0, sy = 0, lcx = null, lcy = null, lqx = null, lqy = null, guard = 0;
  const isCmd = (s) => /^[a-zA-Z]$/.test(s);
  const num = () => { const v = parseFloat(toks[i++]); if (!Number.isFinite(v)) throw new Error("bad path number"); return v; };
  const push = (px, py) => { if (!cur) { cur = { pts: [[x, y]], closed: false }; subs.push(cur); } cur.pts.push([px, py]); };
  while (i < toks.length && guard++ < 100000) {
    if (isCmd(toks[i])) cmd = toks[i++]; else if (!cmd) { i++; continue; }
    const rel = cmd !== cmd.toUpperCase(), K = cmd.toUpperCase();
    const ox = rel ? x : 0, oy = rel ? y : 0;
    if (K !== "Z" && (i >= toks.length || isCmd(toks[i]))) { if (K !== "Z") continue; }
    if (K === "M") { x = sx = num() + ox; y = sy = num() + oy; cur = { pts: [[x, y]], closed: false }; subs.push(cur); cmd = rel ? "l" : "L"; lcx = lqx = null; }
    else if (K === "L") { const px = num() + ox, py = num() + oy; push(px, py); x = px; y = py; lcx = lqx = null; }
    else if (K === "H") { const px = num() + ox; push(px, y); x = px; lcx = lqx = null; }
    else if (K === "V") { const py = num() + oy; push(x, py); y = py; lcx = lqx = null; }
    else if (K === "C" || K === "S") {
      let x1, y1;
      if (K === "C") { x1 = num() + ox; y1 = num() + oy; } else { x1 = lcx !== null ? 2 * x - lcx : x; y1 = lcy !== null ? 2 * y - lcy : y; }
      const x2 = num() + ox, y2 = num() + oy, px = num() + ox, py = num() + oy;
      for (let k = 1; k <= segs; k++) { const t = k / segs, u = 1 - t; push(u * u * u * x + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * px, u * u * u * y + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * py); }
      lcx = x2; lcy = y2; lqx = null; x = px; y = py;
    } else if (K === "Q" || K === "T") {
      let x1, y1;
      if (K === "Q") { x1 = num() + ox; y1 = num() + oy; } else { x1 = lqx !== null ? 2 * x - lqx : x; y1 = lqy !== null ? 2 * y - lqy : y; }
      const px = num() + ox, py = num() + oy;
      for (let k = 1; k <= segs; k++) { const t = k / segs, u = 1 - t; push(u * u * x + 2 * u * t * x1 + t * t * px, u * u * y + 2 * u * t * y1 + t * t * py); }
      lqx = x1; lqy = y1; lcx = null; x = px; y = py;
    } else if (K === "A") {
      const rx0 = Math.abs(num()), ry0 = Math.abs(num()), phi = (num() * Math.PI) / 180, fa = num(), fs = num(), px = num() + ox, py = num() + oy;
      arcPoints(x, y, rx0, ry0, phi, fa, fs, px, py, segs * 2).forEach((p) => push(p[0], p[1]));
      x = px; y = py; lcx = lqx = null;
    } else if (K === "Z") { if (cur) cur.closed = true; x = sx; y = sy; cur = null; lcx = lqx = null; if (i < toks.length && !isCmd(toks[i])) i++; }
    else i++;
  }
  return subs.filter((s) => s.pts.length > 1);
}
function arcPoints(x1, y1, rx, ry, phi, fa, fs, x2, y2, n) {
  if (!rx || !ry) return [[x2, y2]];
  const c = Math.cos(phi), s = Math.sin(phi), dx = (x1 - x2) / 2, dy = (y1 - y2) / 2;
  const xp = c * dx + s * dy, yp = -s * dx + c * dy;
  let l = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry); if (l > 1) { rx *= Math.sqrt(l); ry *= Math.sqrt(l); }
  const sign = fa === fs ? -1 : 1, num = rx * rx * ry * ry - rx * rx * yp * yp - ry * ry * xp * xp, den = rx * rx * yp * yp + ry * ry * xp * xp;
  const co = sign * Math.sqrt(Math.max(0, num / (den || 1))), cxp = (co * rx * yp) / ry, cyp = (-co * ry * xp) / rx;
  const cx = c * cxp - s * cyp + (x1 + x2) / 2, cy = s * cxp + c * cyp + (y1 + y2) / 2;
  const ang = (ux, uy, vx, vy) => { const a = Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy); return a; };
  const t1 = ang(1, 0, (xp - cxp) / rx, (yp - cyp) / ry); let dt = ang((xp - cxp) / rx, (yp - cyp) / ry, (-xp - cxp) / rx, (-yp - cyp) / ry);
  if (!fs && dt > 0) dt -= 2 * Math.PI; else if (fs && dt < 0) dt += 2 * Math.PI;
  const out = []; for (let k = 1; k <= n; k++) { const t = t1 + (dt * k) / n; out.push([cx + rx * Math.cos(t) * c - ry * Math.sin(t) * s, cy + rx * Math.cos(t) * s + ry * Math.sin(t) * c]); }
  return out;
}

/* ------------------------------------------------------------------ polygons & polylines */
export function bboxOf(pts) {
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  for (const p of pts) { if (p[0] < x1) x1 = p[0]; if (p[0] > x2) x2 = p[0]; if (p[1] < y1) y1 = p[1]; if (p[1] > y2) y2 = p[1]; }
  if (!Number.isFinite(x1)) return { x: 0, y: 0, w: 0, h: 0, x2: 0, y2: 0 };
  return { x: x1, y: y1, w: x2 - x1, h: y2 - y1, x2, y2 };
}
export function areaOf(pts) { let a = 0; for (let i = 0, n = pts.length; i < n; i++) { const p = pts[i], q = pts[(i + 1) % n]; a += p[0] * q[1] - q[0] * p[1]; } return a / 2; }
export function centroidOf(pts) {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0, n = pts.length; i < n; i++) { const p = pts[i], q = pts[(i + 1) % n], f = p[0] * q[1] - q[0] * p[1]; a += f; cx += (p[0] + q[0]) * f; cy += (p[1] + q[1]) * f; }
  if (Math.abs(a) < 1e-6) { const b = bboxOf(pts); return [b.x + b.w / 2, b.y + b.h / 2]; }
  return [cx / (3 * a), cy / (3 * a)];
}
export function pointInPoly(p, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i], b = pts[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1] || 1e-9) + a[0]) inside = !inside;
  }
  return inside;
}
/** Principal axis of a point cloud → { c, u, n, tmin, tmax, nmin, nmax }. */
export function pca(pts, c = null) {
  c = c || centroidOf(pts);
  let xx = 0, xy = 0, yy = 0;
  for (const p of pts) { const dx = p[0] - c[0], dy = p[1] - c[1]; xx += dx * dx; xy += dx * dy; yy += dy * dy; }
  const ang = 0.5 * Math.atan2(2 * xy, xx - yy); let u = [Math.cos(ang), Math.sin(ang)];
  if (Math.abs(u[0]) >= Math.abs(u[1]) ? u[0] < 0 : u[1] < 0) u = [-u[0], -u[1]];
  const n = perp(u); let tmin = Infinity, tmax = -Infinity, nmin = Infinity, nmax = -Infinity;
  for (const p of pts) { const d = sub(p, c), t = dot(d, u), s = dot(d, n); tmin = Math.min(tmin, t); tmax = Math.max(tmax, t); nmin = Math.min(nmin, s); nmax = Math.max(nmax, s); }
  return { c, u, n, tmin, tmax, nmin, nmax };
}
/** Intersections of the infinite line p + t·dir with polygon edges → sorted t values. */
export function rayHits(pts, p, dir) {
  const out = [];
  for (let i = 0, n = pts.length; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n], ex = b[0] - a[0], ey = b[1] - a[1];
    const den = dir[0] * ey - dir[1] * ex; if (Math.abs(den) < 1e-9) continue;
    const wx = a[0] - p[0], wy = a[1] - p[1], t = (wx * ey - wy * ex) / den, s = (wx * dir[1] - wy * dir[0]) / den;
    if (s >= 0 && s < 1) out.push(t);
  }
  return out.sort((a, b) => a - b);
}
/** Interval [t0, t1] along p + t·dir that is inside the polygon and contains (or is nearest to) t = 0. */
export function spanAt(pts, p, dir) {
  const h = rayHits(pts, p, dir); if (h.length < 2) return null;
  let best = null, bd = Infinity;
  for (let i = 0; i + 1 < h.length; i += 2) { const a = h[i], b = h[i + 1], d = a <= 0 && b >= 0 ? 0 : Math.min(Math.abs(a), Math.abs(b)); if (d < bd) { bd = d; best = [a, b]; } }
  return best;
}
export function nearestOnPoly(pts, p, closed = true) {
  let best = { d: Infinity, pt: pts[0], i: 0, u: 0 };
  const n = pts.length, m = closed ? n : n - 1;
  for (let i = 0; i < m; i++) {
    const a = pts[i], b = pts[(i + 1) % n], ab = sub(b, a), L2 = dot(ab, ab) || 1e-9, u = clamp(dot(sub(p, a), ab) / L2), q = add(a, mul(ab, u)), d = dist(p, q);
    if (d < best.d) best = { d, pt: q, i, u, tan: norm(ab) };
  }
  return best;
}
export function cumLengths(pts) { const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + dist(pts[i - 1], pts[i])); return L; }
/** Point + unit tangent at arc fraction s (0–1, may extrapolate) along an open polyline with precomputed cumLengths. */
export function along(pts, L, s) {
  const total = L[L.length - 1] || 1e-9, d = s * total;
  if (pts.length < 2) return { p: pts[0] || [0, 0], u: [1, 0] };
  let i = 1; while (i < L.length - 1 && L[i] < d) i++;
  const a = pts[i - 1], b = pts[i], seg = L[i] - L[i - 1] || 1e-9, u = (d - L[i - 1]) / seg;
  return { p: lerp2(a, b, u), u: norm(sub(b, a)) };
}
export function resample(pts, n) {
  const L = cumLengths(pts), out = []; for (let k = 0; k < n; k++) out.push(along(pts, L, k / (n - 1)).p); return out;
}
/** Catmull-Rom smoothing of an open polyline. */
export function catmull(points, per = 8) {
  if (points.length < 3) return points.map((p) => [p[0], p[1]]);
  const out = [], n = points.length, P = (i) => points[Math.max(0, Math.min(n - 1, i))];
  for (let i = 0; i < n - 1; i++) {
    const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    for (let k = 0; k < per; k++) {
      const t = k / per, t2 = t * t, t3 = t2 * t;
      out.push([0.5 * (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
        0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)]);
    }
  }
  out.push([points[n - 1][0], points[n - 1][1]]);
  return out;
}
/** Polygon for the half-plane {x : dot(x - p, dir) >= 0}, clipped to a large square. */
export function halfPlane(p, dir, big = 3000) {
  const d = norm(dir), t = perp(d);
  return [add(p, mul(t, -big)), add(p, mul(t, big)), add(add(p, mul(t, big)), mul(d, big)), add(add(p, mul(t, -big)), mul(d, big))];
}
/** Region on one side of an open cut polyline (side = unit vector pointing into the wanted side). */
export function sideOfCut(cut, side, big = 3000) {
  const a = cut[0], b = cut[cut.length - 1], ext = norm(sub(b, a));
  const A = sub(a, mul(ext, big * 0.2)), B = add(b, mul(ext, big * 0.2));
  return [A, ...cut, B, add(B, mul(side, big)), add(A, mul(side, big))];
}
export const BIG_RECT = [[-4000, -4000], [4800, -4000], [4800, 4400], [-4000, 4400]];

/* ------------------------------------------------------------------ shapes */
export function ellipsePts(cx, cy, rx, ry, rotDeg = 0, n = 48) {
  const out = [], r = (rotDeg * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
  for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2, x = rx * Math.cos(a), y = ry * Math.sin(a); out.push([cx + x * c - y * s, cy + x * s + y * c]); }
  return out;
}
export function blobPts(cx, cy, r, R, n = 11, jitter = 0.28, ry = null) {
  const out = []; for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2, k = 1 - jitter / 2 + R() * jitter; out.push([cx + Math.cos(a) * r * k, cy + Math.sin(a) * (ry ?? r) * k]); }
  return out;
}
export function starPts(cx, cy, r1, r2, n, rotDeg = 0, R = null) {
  const out = []; for (let i = 0; i < n * 2; i++) { const a = ((rotDeg + (i * 180) / n) * Math.PI) / 180, r = (i % 2 ? r2 : r1) * (R ? 0.85 + R() * 0.3 : 1); out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
  return out;
}
/** Jagged polyline from a to b (fracture / tear edge). */
export function jagged(a, b, R, amp = 1.5, n = 8) {
  const out = [a], d = sub(b, a), nn = perp(norm(d));
  for (let k = 1; k < n; k++) { const t = k / n, j = (R() - 0.5) * 2 * amp * (k % 2 ? 1 : 0.6); out.push(add(add(a, mul(d, t)), mul(nn, j))); }
  out.push(b); return out;
}
/** Partial polyline (first fraction u of arc length). */
export function partial(pts, u) {
  if (u >= 1) return pts; if (u <= 0) return [pts[0], pts[0]];
  const L = cumLengths(pts), target = u * L[L.length - 1], out = [pts[0]];
  for (let i = 1; i < pts.length; i++) { if (L[i] <= target) out.push(pts[i]); else { out.push(lerp2(pts[i - 1], pts[i], (target - L[i - 1]) / (L[i] - L[i - 1] || 1))); break; } }
  return out;
}
/** Tapered arrow body+head from tail to tip, width w → path d. */
export function arrowD(tail, tip, w) {
  const d = sub(tip, tail), L = len(d) || 1, u = mul(d, 1 / L), n = perp(u), hl = Math.min(L * 0.45, w * 1.9), hw = w * 1.15;
  const base = sub(tip, mul(u, hl)), sw = w * 0.42, tw = w * 0.18;
  const P = [add(tail, mul(n, tw)), add(base, mul(n, sw)), add(base, mul(n, hw)), tip, sub(base, mul(n, hw)), sub(base, mul(n, sw)), sub(tail, mul(n, tw))];
  return dPoly(P);
}

/* ------------------------------------------------------------------ static defs */
const SOFT = ["fx-bleed", "fx-inflame", "fx-injury", "fx-highlight", "fx-oedema", "anat-fluid", "fx-heal", "fx-pain", "fx-force", "stage-ink", "anat-marrow", "stage-bg", "anat-artery"];
/** Create the shared static definitions once per document-wide <defs> (A1: ctx.defs is shared; add once per id). */
export function ensureDefs(defs) {
  if (!defs || defs.querySelector("#closeup-defs-ready")) return;
  el("g", { id: "closeup-defs-ready" }, defs);
  for (const sd of [1, 2, 3, 5, 8]) {
    const f = el("filter", { id: `closeup-blur-${sd}`, filterUnits: "userSpaceOnUse", x: -3000, y: -3000, width: 7000, height: 7000 }, defs);
    el("feGaussianBlur", { stdDeviation: sd }, f);
  }
  const radial = (id, stops, extra = {}) => { const g = el("radialGradient", { id, cx: 0.5, cy: 0.5, r: 0.5, ...extra }, defs); for (const [o, c, op = 1] of stops) el("stop", { offset: o, "stop-color": c, "stop-opacity": op }, g); return g; };
  const linear = (id, stops, extra = {}) => { const g = el("linearGradient", { id, x1: 0, y1: 0, x2: 0, y2: 1, ...extra }, defs); for (const [o, c, op = 1] of stops) el("stop", { offset: o, "stop-color": c, "stop-opacity": op }, g); return g; };
  for (const k of SOFT) {
    radial(`closeup-soft-${k}`, [[0, C(k), 0.95], [0.5, C(k), 0.6], [1, C(k), 0]]);
    radial(`closeup-rim-${k}`, [[0, C(k), 0], [0.62, C(k), 0.12], [1, C(k), 0.85]]);
  }
  const body = (id, light, base, edge, f = {}) => radial(id, [[0, light], [0.62, base], [1, edge]], { cx: 0.42, cy: 0.38, r: 0.72, fx: 0.4, fy: 0.34, ...f });
  body("closeup-g-bone", mix("anat-bone", "stage-ink", 72), C("anat-bone"), mix("anat-bone", "anat-bone-edge", 55));
  body("closeup-g-muscle", C("anat-muscle-light"), C("anat-muscle"), mix("anat-muscle", "anat-muscle-edge", 55));
  body("closeup-g-cartilage", mix("anat-cartilage", "stage-ink", 60), C("anat-cartilage"), mix("anat-cartilage", "anat-capsule", 60));
  body("closeup-g-fat", mix("anat-fat", "stage-ink", 70), C("anat-fat"), mix("anat-fat", "anat-bone-edge", 60));
  body("closeup-g-brain", mix("anat-brain", "stage-ink", 78), C("anat-brain"), mix("anat-brain", "anat-brain-deep", 40));
  body("closeup-g-annulus", mix("anat-annulus", "stage-ink", 78), C("anat-annulus"), mix("anat-annulus", "anat-bone-edge", 55), { cx: 0.5, cy: 0.5, fx: 0.5, fy: 0.45 });
  body("closeup-g-nucleus", mix("anat-nucleus", "stage-ink", 60), C("anat-nucleus"), mix("anat-nucleus", "anat-annulus", 55), { cx: 0.5, cy: 0.5, fx: 0.45, fy: 0.4 });
  body("closeup-g-marrow", mix("anat-marrow", "anat-fat", 60), C("anat-marrow"), mix("anat-marrow", "anat-bone-edge", 65), { cx: 0.5, cy: 0.5 });
  body("closeup-g-ligament", mix("anat-ligament", "stage-ink", 65), C("anat-ligament"), mix("anat-ligament", "anat-ligament-edge", 55));
  body("closeup-g-tendon", mix("anat-tendon", "stage-ink", 65), C("anat-tendon"), mix("anat-tendon", "anat-tendon-edge", 55));
  body("closeup-g-nerve", mix("anat-nerve", "stage-ink", 70), C("anat-nerve"), mix("anat-nerve", "anat-nerve-edge", 55));
  body("closeup-g-fascia", mix("anat-fascia", "stage-ink", 70), C("anat-fascia"), mix("anat-fascia", "anat-ligament-edge", 55));
  body("closeup-g-physis", mix("anat-physis", "anat-cartilage", 70), C("anat-physis"), mix("anat-physis", "stage-bg", 70));
  body("closeup-g-bleed", mix("fx-bleed", "fx-injury", 75), C("fx-bleed"), mix("fx-bleed", "stage-bg", 70), { cx: 0.5, cy: 0.45 });
  linear("closeup-l-fluid", [[0, mix("anat-fluid", "stage-ink", 70), 0.75], [1, C("anat-fluid"), 0.45]]);
  // trabecular texture (cancellous bone): irregular cell network
  const pt = el("pattern", { id: "closeup-pat-trab", patternUnits: "userSpaceOnUse", width: 34, height: 34 }, defs);
  const R = rng(7), cells = [];
  for (let gy = 0; gy < 4; gy++) for (let gx = 0; gx < 4; gx++) cells.push([gx * 8.5 + 2 + R() * 4.5, gy * 8.5 + 2 + R() * 4.5]);
  let dd = "";
  for (let i = 0; i < cells.length; i++) {
    const p = cells[i], right = cells[(i % 4 === 3 ? i - 3 : i + 1)], down = cells[(i + 4) % 16];
    const rx = i % 4 === 3 ? right[0] + 34 : right[0], dy = i >= 12 ? down[1] + 34 : down[1];
    dd += `M${fmt(p[0])},${fmt(p[1])}L${fmt(rx)},${fmt(right[1])}M${fmt(p[0])},${fmt(p[1])}L${fmt(down[0])},${fmt(dy)}`;
  }
  el("path", { d: dd, fill: "none", stroke: C("anat-bone-edge"), "stroke-width": 0.7, "stroke-opacity": 0.55, "stroke-linecap": "round" }, pt);
  // fat lobules
  const pf = el("pattern", { id: "closeup-pat-fat", patternUnits: "userSpaceOnUse", width: 16, height: 14 }, defs);
  el("path", { d: "M8,1 a6,6 0 1,0 0.1,0 M0,8 a5,5 0 1,0 0.1,0 M16,8 a5,5 0 1,0 0.1,0", fill: "none", stroke: mix("anat-fat", "anat-bone-edge", 45), "stroke-width": 0.7, "stroke-opacity": 0.6 }, pf);
  // tension hatch (pressure)
  const ph = el("pattern", { id: "closeup-pat-hatch", patternUnits: "userSpaceOnUse", width: 7, height: 7, patternTransform: "rotate(35)" }, defs);
  el("path", { d: "M0,0 L0,7", stroke: C("fx-inflame"), "stroke-width": 1.4, "stroke-opacity": 0.55 }, ph);
  // lacunae (cartilage / physis cells)
  const pl = el("pattern", { id: "closeup-pat-cells", patternUnits: "userSpaceOnUse", width: 11, height: 9 }, defs);
  el("path", { d: "M2.5,2.5h2.2M8,6.5h2.2M5.5,8h1.6", stroke: mix("anat-cartilage", "anat-capsule", 30), "stroke-width": 1.3, "stroke-linecap": "round", "stroke-opacity": 0.55 }, pl);
}
export const url = (id) => `url(#${id})`;
export const soft = (k) => url(`closeup-soft-${k}`);
export const rimG = (k) => url(`closeup-rim-${k}`);
export const blur = (sd) => url(`closeup-blur-${sd}`);

/* ------------------------------------------------------------------ effect primitives */
/** Soft radial cloud (oedema, bleeding, glow). */
export function cloud(g, cx, cy, rx, ry, colourKey, opacity = 1, rot = 0) {
  if (opacity <= 0.003 || rx <= 0 || ry <= 0) return null;
  return el("ellipse", { cx, cy, rx, ry, fill: soft(colourKey), opacity, transform: rot ? `rotate(${fmt(rot)} ${fmt(cx)} ${fmt(cy)})` : null }, g);
}
/** Irregular pooled blob with a soft gradient (haematoma / bleeding, not splatter). */
export function pool(g, cx, cy, r, R, opacity = 0.85, ry = null, rot = 0) {
  if (opacity <= 0.003 || r <= 0.5) return null;
  const pts = blobPts(0, 0, r, R, 12, 0.3, ry ?? r);
  const gg = el("g", { transform: `translate(${fmt(cx)} ${fmt(cy)}) rotate(${fmt(rot)})`, opacity }, g);
  el("path", { d: dSmooth(pts), fill: url("closeup-g-bleed"), stroke: mix("fx-bleed", "stage-bg", 70), "stroke-width": 0.8, "stroke-opacity": 0.6 }, gg);
  return gg;
}
/** Crack: dark fracture/tear line + injury glow; drawn progressively (u 0–1). */
export function crack(g, pts, u = 1, { w = 2.2, glow = 0.6, col = null } = {}) {
  const P = partial(pts, u); if (P.length < 2) return;
  const d = dPoly(P, false);
  if (glow > 0.01) el("path", { d, fill: "none", stroke: C("fx-injury"), "stroke-width": w * 3.2, "stroke-opacity": 0.55 * glow, "stroke-linecap": "round", "stroke-linejoin": "round", filter: blur(2) }, g);
  el("path", { d, fill: "none", stroke: col || mix("stage-bg", "anat-bone-edge", 70), "stroke-width": w, "stroke-linecap": "round", "stroke-linejoin": "round" }, g);
}
/** Glow outline around a path (highlight / pulse / irritation). */
export function glowOutline(g, d, colourKey, intensity, width = 3) {
  if (intensity <= 0.01) return;
  el("path", { d, fill: "none", stroke: C(colourKey), "stroke-width": width * 3.2, "stroke-opacity": 0.5 * intensity, "stroke-linejoin": "round", filter: blur(3) }, g);
  el("path", { d, fill: "none", stroke: C(colourKey), "stroke-width": width * 0.7, "stroke-opacity": Math.min(1, 0.95 * intensity), "stroke-linejoin": "round" }, g);
}
/** Out-of-plane marker: ⊙ toward the viewer (out=true) or ⊗ away. */
export function oopMarker(g, x, y, r, out, opacity = 1) {
  const m = el("g", { opacity }, g);
  el("circle", { cx: x, cy: y, r: r * 1.5, fill: soft("fx-force"), opacity: 0.35 }, m);
  el("circle", { cx: x, cy: y, r, fill: mix("stage-bg", "fx-force", 75), stroke: C("fx-force"), "stroke-width": r * 0.22 }, m);
  if (out) el("circle", { cx: x, cy: y, r: r * 0.3, fill: C("fx-force") }, m);
  else { const k = r * 0.5; el("path", { d: `M${fmt(x - k)},${fmt(y - k)}L${fmt(x + k)},${fmt(y + k)}M${fmt(x + k)},${fmt(y - k)}L${fmt(x - k)},${fmt(y + k)}`, stroke: C("fx-force"), "stroke-width": r * 0.22, "stroke-linecap": "round" }, m); }
  return m;
}
/** Chevron pointing along dir (small tension/pressure indicators). */
export function chevron(g, p, dir, size, colourKey, opacity = 1, w = 1.6) {
  const u = norm(dir), n = perp(u), a = add(sub(p, mul(u, size)), mul(n, size * 0.8)), b = add(sub(p, mul(u, size)), mul(n, -size * 0.8));
  el("path", { d: `M${fmt(a[0])},${fmt(a[1])}L${fmt(p[0])},${fmt(p[1])}L${fmt(b[0])},${fmt(b[1])}`, fill: "none", stroke: C(colourKey), "stroke-width": w, "stroke-opacity": opacity, "stroke-linecap": "round", "stroke-linejoin": "round" }, g);
}

/* ------------------------------------------------------------------ labels */
export const textWidth = (s, fs) => s.length * fs * 0.54;
export function wrapLabel(s, max = 30) {
  const words = String(s).split(/\s+/), lines = []; let cur = "";
  for (const w of words) { if (cur && (cur + " " + w).length > max) { lines.push(cur); cur = w; } else cur = cur ? cur + " " + w : w; }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}
/**
 * Greedy, deterministic callout placement.
 * items: [{ pt:[x,y], lines:[...], fs, pref?:[x,y], fixed?:{x,y,w,h} , target? }] (in drawing order: oldest first)
 * occ(x, y, target) → 0 empty, 1 backdrop (skin), 2 other anatomy, 3 the labelled structure — coarse occupancy test.
 * vb: [x, y, w, h] visible viewBox. Returns [{ x, y, w, h, anchor:'start'|'end'|'middle' , lx, ly }] boxes.
 */
export function placeLabels(items, vb, occ, k = 1) {
  const placed = [], leaders = [], pad = 8 * k;
  const overlap = (a, b) => Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  const segX = (p1, p2, p3, p4) => { const d = (p2[0] - p1[0]) * (p4[1] - p3[1]) - (p2[1] - p1[1]) * (p4[0] - p3[0]); if (Math.abs(d) < 1e-9) return false; const u = ((p3[0] - p1[0]) * (p4[1] - p3[1]) - (p3[1] - p1[1]) * (p4[0] - p3[0])) / d, v = ((p3[0] - p1[0]) * (p2[1] - p1[1]) - (p3[1] - p1[1]) * (p2[0] - p1[0])) / d; return u > 0.02 && u < 0.98 && v > 0.02 && v < 0.98; };
  const segBox = (a, b, box) => { for (let i = 1; i < 8; i++) { const p = lerp2(a, b, i / 8); if (p[0] > box.x && p[0] < box.x + box.w && p[1] > box.y && p[1] < box.y + box.h) return true; } return false; };
  const cx = vb[0] + vb[2] / 2, cy = vb[1] + vb[3] / 2;
  const out = [];
  for (const it of items) {
    const lh = it.fs * 1.18, w = Math.max(...it.lines.map((l) => textWidth(l, it.fs))) + 6 * k, h = lh * it.lines.length + 4 * k;
    if (it.fixed) { const b = { ...it.fixed }; placed.push(b); out.push(b); continue; }
    const cands = [];
    for (const r of [64, 98, 136, 178]) for (let a = 0; a < 16; a++) {
      const ang = (a / 16) * Math.PI * 2, ex = it.pt[0] + Math.cos(ang) * r * k, ey = it.pt[1] + Math.sin(ang) * r * k * 0.8;
      const bx = Math.cos(ang) > 0.3 ? ex : Math.cos(ang) < -0.3 ? ex - w : ex - w / 2, by = Math.sin(ang) > 0.3 ? ey : Math.sin(ang) < -0.3 ? ey - h : ey - h / 2;
      cands.push({ x: bx, y: by, r });
    }
    for (const dy of [-1.5, -0.5, 0.5, 1.5]) { cands.push({ x: vb[0] + pad, y: it.pt[1] + dy * h - h / 2, r: 200, margin: 1 }); cands.push({ x: vb[0] + vb[2] - pad - w, y: it.pt[1] + dy * h - h / 2, r: 200, margin: 1 }); }
    if (it.pref) cands.push({ x: it.pref[0] - w / 2, y: it.pref[1] - h / 2, r: 0, pref: 1 });
    let best = null, bs = Infinity;
    for (const c of cands) {
      const b = { x: c.x, y: c.y, w, h };
      let s = 0;
      if (b.x < vb[0] + pad * 0.5 || b.y < vb[1] + pad * 0.5 || b.x + w > vb[0] + vb[2] - pad * 0.5 || b.y + h > vb[1] + vb[3] - pad * 0.5) s += 1000;
      for (const q of placed) { const o = overlap(b, { x: q.x - 4 * k, y: q.y - 3 * k, w: q.w + 8 * k, h: q.h + 6 * k }); if (o > 0) s += 300 + (500 * o) / (w * h); }
      for (let gy = 0; gy <= 2; gy++) for (let gx = 0; gx <= 4; gx++) { const o = occ(b.x + (gx / 4) * w, b.y + (gy / 2) * h, it.target); s += o === 3 ? 30 : o === 2 ? 7 : o === 1 ? 1.2 : 0; }
      const lp = [clamp(it.pt[0], b.x, b.x + w), clamp(it.pt[1], b.y, b.y + h)];
      for (const L of leaders) if (segX(lp, it.pt, L[0], L[1])) s += 90;
      for (const q of placed) if (segBox(lp, it.pt, q)) s += 120;
      if (dist(lp, it.pt) < 18 * k) s += 40;
      s += (dist(lp, it.pt) / k) * 0.12;
      const outward = (b.x + w / 2 - cx) * (it.pt[0] - cx) > 0 ? -6 : 4;
      s += outward - (c.pref ? 25 : 0);
      if (s < bs) { bs = s; best = b; }
    }
    const lp = [clamp(it.pt[0], best.x, best.x + w), clamp(it.pt[1], best.y, best.y + h)];
    leaders.push([lp, it.pt]); placed.push(best); out.push({ ...best, lx: lp[0], ly: lp[1] });
  }
  return out;
}
