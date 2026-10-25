// Healing timeline widget. OWNER: P6.
//
//   healingTimeline(injury) → Element
//
// An SVG Gantt-style chart of timeframes.healing (one lane per phase, so overlaps stay legible) on a
// log-like time axis (position = ln(1 + day / 7)) that keeps days, weeks and months readable together.
// Milestones sit on their own track with staggered, leader-lined labels that never overlap. The return-to-sport
// window is parsed from timeframes.returnToSport (e.g. "9–12+ months") and drawn as a band when it can be.
// The chart redraws at the container's real pixel width, so text is never scaled down on phones.
// A visually-hidden data table (revealed by a toggle) carries every number for screen readers.

import { h, icon } from "../util/dom.js";

const TAU = 7;              // days: scale softness. pos(d) = ln(1 + d/TAU)
const MONTH = 30.44;
const KIND_LABEL = { inflammatory: "Inflammatory", proliferative: "Proliferative", remodelling: "Remodelling", other: "Other" };
let uid = 0;

/* ------------------------------------------------------------------ helpers */
const num = (v) => (v == null || v === "" ? NaN : Number(v));
const arr = (v) => (Array.isArray(v) ? v : []);
const trimNum = (n, dp = 1) => String(+n.toFixed(dp));

export function phaseKind(name) {
  const n = String(name || "").toLowerCase();
  if (/inflam|haemat|hemat|haemarth|bleed|coagul|haemosta|hemosta|acute|protect/.test(n)) return "inflammatory";
  if (/prolif|repair|fibropl|granul|regenerat|epiligament|callus|neovasc|reparat/.test(n)) return "proliferative";
  if (/remodel|matur|ligamentis|consolid|strengthen/.test(n)) return "remodelling";
  return "other";
}

/** Short human duration: 0, "5 d", "3 wk", "4.6 mo", "18 mo", "2 yr". */
export function fmtDay(d) {
  d = Math.round(d);
  if (d <= 0) return "0";
  if (d < 14) return `${d} d`;
  if (d < 70) return `${trimNum(d / 7)} wk`;
  if (d < 730) { const m = d / MONTH; return `${m >= 6 ? Math.round(m) : trimNum(m)} mo`; }
  return `${trimNum(d / 365.25)} yr`;
}
const fmtRange = (a, b) => {
  const A = fmtDay(a), B = fmtDay(b);
  const ua = A.split(" ")[1], ub = B.split(" ")[1];
  return `${ua && ua === ub ? A.split(" ")[0] : A}–${B}`;
};

// Axis tick candidates: [day, label, priority] (lower priority number = kept first when space is tight)
const TICKS = [
  [0, "0", 0], [7, "1 wk", 1], [42, "6 wk", 2], [90, "3 mo", 3], [180, "6 mo", 4], [365, "1 yr", 5], [730, "2 yr", 6],
  [1095, "3 yr", 7], [1825, "5 yr", 8], [14, "2 wk", 9], [28, "4 wk", 10], [270, "9 mo", 11], [545, "18 mo", 12],
  [21, "3 wk", 13], [60, "2 mo", 14], [120, "4 mo", 15], [1460, "4 yr", 17]
];

const UNIT_DAYS = [[/^d/, 1], [/^w/, 7], [/^mo/, MONTH], [/^m$/, MONTH], [/^y/, 365.25]];
const unitDays = (u) => { u = u.toLowerCase(); for (const [re, v] of UNIT_DAYS) if (re.test(u)) return v; return null; };

/** "9–12+ months after reconstruction" → { from: 274, to: 365, text: "9–12+ months" } (null if no time found). */
export function parseWindow(text) {
  const s = String(text || "");
  const unit = "(days?|d|weeks?|wks?|w|months?|mos?|years?|yrs?|y)\\b";
  let m = s.match(new RegExp(`(\\d+(?:\\.\\d+)?)\\s*(?:[–—-]|to)\\s*(\\d+(?:\\.\\d+)?)\\s*(\\+)?\\s*${unit}`, "i"));
  if (m) { const k = unitDays(m[4]); if (k) return { from: +m[1] * k, to: +m[2] * k, text: m[0].trim() }; }
  m = s.match(new RegExp(`(\\d+(?:\\.\\d+)?)\\s*(\\+)?\\s*${unit}`, "i"));
  if (m) { const k = unitDays(m[3]); if (k) return { from: +m[1] * k, to: +m[1] * k, text: m[0].trim() }; }
  return null;
}

/** Inline text: **bold** and [rN] citation links (class cite__a, href #injury.<id>.ref-rN). */
function rich(str, ctx) {
  const frag = document.createDocumentFragment();
  const re = /\*\*(.+?)\*\*|\[(r\d+(?:\s*,\s*r\d+)*)\]/g;
  const s = String(str ?? "");
  let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) frag.append(s.slice(last, m.index));
    if (m[1] !== undefined) frag.append(h("strong", null, m[1]));
    else {
      const sup = h("sup", { class: "cite" });
      m[2].split(/\s*,\s*/).forEach((rid, i) => {
        if (i) sup.append(",");
        const idx = ctx.refs.findIndex((r) => r && r.id === rid);
        const n = idx >= 0 ? idx + 1 : rid.replace(/^r/, "");
        sup.append(ctx.id
          ? h("a", { class: "cite__a", href: `#injury.${ctx.id}.ref-${rid}`, "data-ref": rid, "aria-label": `Reference ${n}` }, String(n))
          : h("span", null, String(n)));
      });
      frag.append(sup);
    }
    last = m.index + m[0].length;
  }
  if (last < s.length) frag.append(s.slice(last));
  return frag;
}
const plain = (s) => String(s ?? "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\s*\[r\d+(?:\s*,\s*r\d+)*\]/g, "");

/* ------------------------------------------------------------------ text measuring */
let _ctx2d = null;
const _mcache = new Map();
function measure(str, size, { mono = false, weight = 400 } = {}) {
  const key = `${mono ? "m" : "b"}${weight}|${size}|${str}`;
  const hit = _mcache.get(key);
  if (hit != null) return hit;
  let w;
  try {
    _ctx2d ||= document.createElement("canvas").getContext("2d");
    const cs = getComputedStyle(document.documentElement);
    const fam = (mono ? cs.getPropertyValue("--font-mono") : cs.getPropertyValue("--font-body")) || "sans-serif";
    _ctx2d.font = `${weight} ${size}px ${fam}`;
    w = _ctx2d.measureText(str).width;
  } catch { w = str.length * size * (mono ? 0.6 : 0.56); }
  w *= 1.06;                      // safety margin for web-font swap
  if (_mcache.size > 2000) _mcache.clear();
  _mcache.set(key, w);
  return w;
}
function wrap(text, maxW, size, opts, maxLines = 3) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = []; let cur = "";
  for (const w of words) {
    const t = cur ? `${cur} ${w}` : w;
    if (cur && measure(t, size, opts) > maxW) { lines.push(cur); cur = w; } else cur = t;
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) { const keep = lines.slice(0, maxLines); keep[maxLines - 1] += "…"; return keep; }
  return lines;
}

/* ------------------------------------------------------------------ model */
function buildModel(injury) {
  const tf = injury?.timeframes || {};
  const phases = arr(tf.healing)
    .map((p) => ({ name: String(p?.phase ?? "Phase"), start: num(p?.startDay), end: num(p?.endDay), desc: String(p?.description ?? "") }))
    .filter((p) => isFinite(p.start) && isFinite(p.end))
    .map((p) => ({ ...p, end: Math.max(p.start, p.end), kind: phaseKind(p.name) }))
    .sort((a, b) => a.start - b.start || a.end - b.end);
  const milestones = arr(tf.milestones)
    .map((m) => ({ label: String(m?.label ?? ""), day: num(m?.day), note: m?.note ? String(m.note) : "" }))
    .filter((m) => m.label && isFinite(m.day) && m.day >= 0)
    .sort((a, b) => a.day - b.day);
  const rts = parseWindow(tf.returnToSport);
  let maxD = 1;
  for (const p of phases) maxD = Math.max(maxD, p.end);
  for (const m of milestones) maxD = Math.max(maxD, m.day);
  if (rts) maxD = Math.max(maxD, rts.to);
  const nice = TICKS.map((t) => t[0]).filter((d) => d >= maxD * 1.0001).sort((a, b) => a - b)[0];
  const domain = nice ?? Math.ceil(maxD / 365.25) * 365.25;
  return { phases, milestones, rts, domain, rtsText: String(tf.returnToSport ?? "") };
}

/* ------------------------------------------------------------------ chart */
function drawChart(W, model, ctx) {
  const { phases, milestones, rts, domain } = model;
  const narrow = W < 520;
  const padL = 14, padR = 16;
  const plotW = Math.max(120, W - padL - padR);
  const pos = (d) => Math.log1p(Math.max(0, d) / TAU) / Math.log1p(domain / TAU);
  const X = (d) => padL + pos(d) * plotW;
  const FS = narrow ? 12 : 13, FS_S = 11.5;

  let y = 6;
  // --- return-to-sport label zone
  const rtsLabel = rts ? `Return to sport ${rts.text}` : "";
  if (rts) y += 22;

  // --- phase lanes
  const lanes = phases.map((p) => {
    const x0 = X(p.start), x1 = X(p.end);
    const rangeTxt = fmtRange(p.start, p.end);
    const nameW = measure(p.name, FS, { weight: 600 });
    let lines, withRange = false;
    if (nameW + 10 + measure(rangeTxt, FS_S, { mono: true }) <= plotW) { lines = [p.name]; withRange = true; }
    else lines = wrap(p.name, plotW, FS, { weight: 600 }, 2);
    const extra = withRange ? 0 : 1;           // range goes on its own line when it cannot share the name's line
    return { p, x0, x1, lines, rangeTxt, withRange, extra, h: 20 + (lines.length + extra) * 16 + 4 };
  });
  const lanesTop = y;
  for (const l of lanes) { l.y = y; y += l.h; }
  const lanesBottom = y;

  // --- axis
  const axisY = lanesBottom + 8;
  const accepted = [];
  for (const [d, label, pr] of [...TICKS].sort((a, b) => a[2] - b[2])) {
    if (d > domain * 1.0001) continue;
    const x = X(d), w = measure(label, FS_S, { mono: true });
    if (accepted.every((t) => Math.abs(t.x - x) >= (t.w + w) / 2 + 12)) accepted.push({ d, label, x, w, pr });
  }
  accepted.sort((a, b) => a.d - b.d);
  const labelled = new Set(accepted.map((t) => t.d));
  const minor = TICKS.filter(([d]) => d <= domain * 1.0001 && !labelled.has(d)).map(([d]) => d);
  // keep end tick label inside the svg
  let tickLabelBottom = axisY + 24;

  // --- milestone track + staggered labels
  const trackY = tickLabelBottom + 14;
  const maxLabW = Math.min(narrow ? 112 : 150, plotW * 0.4);
  const items = milestones.map((m) => {
    const x = X(m.day);
    // Wrap the label inside the space to the right of its marker where possible (so it never has to slide left over a
    // neighbour's leader line); only when there is almost no room does the label shift left instead.
    const avail = W - 6 - (x + 5);
    const lw = Math.max(58, Math.min(maxLabW, avail));
    const lines = wrap(m.label, lw, FS_S + 0.5, {}, 4);
    const time = fmtDay(m.day) === "0" ? "Day 0" : fmtDay(m.day);
    const w = Math.max(...lines.map((t) => measure(t, FS_S + 0.5)), measure(time, FS_S, { mono: true }));
    let s = x + 5;
    if (s + w > W - 6) s = Math.max(6, W - 6 - w);
    return { m, x, lines, time, w, s, e: s + w, row: 0, isRts: /return|rts/i.test(m.label) };
  });
  const lineH = 14.5;
  // Right-to-left placement. Rule: a label that spans another marker's leader line must sit deeper than that marker,
  // and two labels in the same row must not overlap.
  const placed = [];
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i];
    let r = 0;
    for (const q of placed) if (it.s - 3 <= q.x && q.x <= it.e - 4) r = Math.max(r, q.row + 1);
    const clash = (row) => placed.some((q) => q.row === row && !(it.e + 8 <= q.s || it.s >= q.e + 8));
    while (clash(r)) r++;
    it.row = r; placed.push(it);
  }
  const rows = items.reduce((a, it) => Math.max(a, it.row + 1), 0);
  const rowLines = Array.from({ length: rows }, (_, r) => items.filter((it) => it.row === r).reduce((a, it) => Math.max(a, it.lines.length), 1));
  const rowTop = []; let acc = trackY + 8;
  for (let r = 0; r < rows; r++) { rowTop[r] = acc; acc += (rowLines[r] + 1) * lineH + 8; }
  const msBottom = rows ? acc : trackY + 8;
  const H = Math.ceil(Math.max(msBottom, trackY + 10) + 4);

  // ---------------- build svg
  const svg = h("svg", {
    class: "htl__svg", viewBox: `0 0 ${W} ${H}`, width: W, height: H, role: "img",
    "aria-label": `Healing timeline chart: ${phases.length} phases${milestones.length ? `, ${milestones.length} milestones` : ""} across ${fmtDay(domain)} on a compressed time axis. A data table follows.`
  });

  // grid
  const grid = h("g", { class: "htl__grid", "aria-hidden": "true" });
  for (const t of accepted) grid.append(h("line", { x1: t.x, x2: t.x, y1: lanesTop - (rts ? 4 : 0), y2: axisY }));
  svg.append(grid);

  // return-to-sport band
  if (rts) {
    const xa = X(rts.from), xb = X(rts.to);
    const g = h("g", { class: "htl__rts" });
    g.append(h("svg:title", null, `Return to sport: ${plain(model.rtsText)}`));
    if (xb - xa > 2) g.append(h("rect", { class: "htl__rts-band", x: xa, y: lanesTop - 4, width: xb - xa, height: axisY - lanesTop + 4 }));
    g.append(h("line", { class: "htl__rts-line", x1: xa, x2: xa, y1: lanesTop - 4, y2: axisY }));
    const lw = measure(rtsLabel, FS_S, { weight: 600 });
    const lx = Math.min(Math.max(xa + 5, padL - 6), W - 6 - lw);
    g.append(h("text", { class: "htl__rts-label", x: lx, y: 15 }, rtsLabel));
    svg.append(g);
  }

  // phase lanes
  lanes.forEach((l, i) => {
    const { p } = l;
    const g = h("g", { class: `htl__lane htl__lane--${p.kind}`, style: { "--i": i } });
    g.append(h("svg:title", null, `${p.name}: ${fmtRange(p.start, p.end)} (day ${Math.round(p.start)}–${Math.round(p.end)}). ${plain(p.desc)}`));
    const tw = measure(p.name, FS, { weight: 600 }) + (l.withRange ? 10 + measure(l.rangeTxt, FS_S, { mono: true }) : 0);
    const widest = l.withRange ? tw : Math.max(...l.lines.map((t) => measure(t, FS, { weight: 600 })));
    const lx = Math.min(Math.max(l.x0, padL - 6), Math.max(padL - 6, W - 6 - widest));
    const label = h("text", { class: "htl__t htl__t--lane", x: lx, y: l.y + 14 });
    l.lines.forEach((t, k) => label.append(h("tspan", { x: lx, dy: k ? 16 : 0 }, t)));
    if (l.withRange) label.append(h("tspan", { class: "htl__tm", dx: 10 }, l.rangeTxt));
    else label.append(h("tspan", { class: "htl__tm", x: lx, dy: 16 }, l.rangeTxt));
    g.append(label);
    const by = l.y + 20 + (l.lines.length - 1 + l.extra) * 16 + 4;
    g.append(h("rect", { class: `htl__bar htl__bar--${p.kind}`, x: l.x0, y: by, width: Math.max(l.x1 - l.x0, 3), height: 10, rx: 2.5 }));
    svg.append(g);
  });

  // axis
  const ax = h("g", { class: "htl__axis" });
  ax.append(h("line", { class: "htl__axis-line", x1: padL, x2: padL + plotW, y1: axisY, y2: axisY }));
  for (const d of minor) ax.append(h("line", { class: "htl__tick htl__tick--minor", x1: X(d), x2: X(d), y1: axisY, y2: axisY + 3 }));
  for (const t of accepted) {
    ax.append(h("line", { class: "htl__tick", x1: t.x, x2: t.x, y1: axisY, y2: axisY + 6 }));
    const anchor = t.x - t.w / 2 < 2 ? "start" : t.x + t.w / 2 > W - 2 ? "end" : "middle";
    ax.append(h("text", { class: "htl__tm htl__tm--tick", x: t.x, y: axisY + 20, "text-anchor": anchor }, t.label));
  }
  svg.append(ax);

  // milestones
  if (items.length) {
    const g = h("g", { class: "htl__ms" });
    g.append(h("line", { class: "htl__track", x1: padL, x2: padL + plotW, y1: trackY, y2: trackY }));
    for (const it of items) {
      const top = rowTop[it.row];
      const mg = h("g", { class: `htl__m${it.isRts ? " htl__m--rts" : ""}` });
      mg.append(h("svg:title", null, `${it.m.label} — ${it.time} (day ${Math.round(it.m.day)})${it.m.note ? `. ${plain(it.m.note)}` : ""}`));
      mg.append(h("line", { class: "htl__ref", x1: it.x, x2: it.x, y1: axisY + 3, y2: trackY }));
      mg.append(h("line", { class: "htl__leader", x1: it.x, x2: it.x, y1: trackY, y2: top + 2 }));
      mg.append(h("path", { class: "htl__diamond", d: `M${it.x} ${trackY - 5.5}L${it.x + 5.5} ${trackY}L${it.x} ${trackY + 5.5}L${it.x - 5.5} ${trackY}Z` }));
      const tx = it.s;
      const t = h("text", { class: "htl__t htl__t--ms", x: tx, y: top + 9 });
      it.lines.forEach((ln, k) => t.append(h("tspan", { x: tx, dy: k ? lineH : 0 }, ln)));
      t.append(h("tspan", { class: "htl__tm", x: tx, dy: lineH }, it.time));
      mg.append(t);
      g.append(mg);
    }
    svg.append(g);
  }
  return svg;
}

/* ------------------------------------------------------------------ public */
export function healingTimeline(injury) {
  const model = buildModel(injury);
  const ctx = { id: injury?.id || "", refs: arr(injury?.references) };
  const id = `htl${++uid}`;

  if (!model.phases.length && !model.milestones.length) {
    return h("p", { class: "htl-empty" }, "No healing timeline is available for this injury yet.");
  }

  const kinds = [...new Set(model.phases.map((p) => p.kind))];
  const legend = h("ul", { class: "htl__legend", role: "list", "aria-label": "Phase colours" },
    kinds.map((k) => h("li", { class: `htl__key htl__key--${k}` }, h("i", { "aria-hidden": "true" }), KIND_LABEL[k])),
    model.rts ? h("li", { class: "htl__key htl__key--rts" }, h("i", { "aria-hidden": "true" }), "Return-to-sport window") : null,
    model.milestones.length ? h("li", { class: "htl__key htl__key--ms" }, h("i", { "aria-hidden": "true" }), "Milestone") : null);

  const chart = h("div", { class: "htl__chart" });
  const head = h("div", { class: "htl__head" }, legend,
    h("p", { class: "htl__scale" }, icon("clock", { size: 14 }), h("span", null, "Time from onset or surgery. The axis is compressed (log-like): early weeks are stretched so days, weeks and months all stay readable.")));

  const notes = model.phases.length
    ? h("ol", { class: "htl__phases", role: "list", "aria-label": "Healing phases" },
      model.phases.map((p) => h("li", { class: `htl__phase htl__phase--${p.kind}` },
        h("div", { class: "htl__phase-head" }, h("strong", { class: "htl__phase-name" }, p.name), h("span", { class: "htl__phase-time mono" }, fmtRange(p.start, p.end))),
        p.desc ? h("p", null, rich(p.desc, ctx)) : null)))
    : null;

  // data table
  const tbl = [];
  if (model.phases.length) {
    tbl.push(h("table", { class: "htl__table" },
      h("caption", null, "Healing phases (days from onset)"),
      h("thead", null, h("tr", null, ["Phase", "Starts", "Ends", "Day range"].map((t) => h("th", { scope: "col" }, t)))),
      h("tbody", null, model.phases.map((p) => h("tr", null,
        h("th", { scope: "row" }, p.name), h("td", null, fmtDay(p.start)), h("td", null, fmtDay(p.end)),
        h("td", { class: "mono" }, `${Math.round(p.start)}–${Math.round(p.end)} d`))))));
  }
  if (model.milestones.length || model.rtsText) {
    tbl.push(h("table", { class: "htl__table" },
      h("caption", null, "Milestones"),
      h("thead", null, h("tr", null, ["Milestone", "When", "Day", "Note"].map((t) => h("th", { scope: "col" }, t)))),
      h("tbody", null,
        model.milestones.map((m) => h("tr", null,
          h("th", { scope: "row" }, m.label), h("td", null, fmtDay(m.day)), h("td", { class: "mono" }, `${Math.round(m.day)} d`),
          h("td", null, m.note ? rich(m.note, ctx) : "—"))),
        model.rtsText ? h("tr", null, h("th", { scope: "row" }, "Return to sport"), h("td", { colspan: 3 }, rich(model.rtsText, ctx))) : null)));
  }
  const tableWrap = h("div", { class: "htl__tables table-wrap visually-hidden", id: `${id}-tables` }, tbl);
  const toggle = h("button", {
    type: "button", class: "btn btn--sm htl__toggle", "aria-expanded": "false", "aria-controls": `${id}-tables`,
    on: {
      click: () => {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(open));
        tableWrap.classList.toggle("visually-hidden", !open);
        toggle.lastChild.textContent = open ? "Hide data table" : "Show data table";
      }
    }
  }, icon("list", { size: 16 }), h("span", null, "Show data table"));

  const root = h("figure", { class: "htl htl--intro", "aria-label": "Healing timeline" }, head, chart, notes, h("div", { class: "htl__foot" }, toggle), tableWrap);

  let lastW = 0, introTimer = 0;
  const redraw = (w) => {
    lastW = w;
    chart.replaceChildren(drawChart(w, model, ctx));
  };
  redraw(720);
  if (typeof ResizeObserver === "function") {
    const ro = new ResizeObserver(() => {
      const w = Math.floor(chart.clientWidth);
      if (w < 200 || Math.abs(w - lastW) < 3) return;
      if (lastW && lastW !== 720) root.classList.remove("htl--intro");
      redraw(w);
      if (!introTimer) introTimer = setTimeout(() => root.classList.remove("htl--intro"), 1600);
    });
    ro.observe(chart);
  }
  return root;
}

export default healingTimeline;
