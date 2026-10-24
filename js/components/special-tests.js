// Special tests table widget. OWNER: P6.
//
//   specialTestsTable(tests, refs, { injuryId }?) → Element
//
// tests = injury.assessment.specialTests; refs = injury.references (used to number and describe citations).
// Wide screens: a real table (name + purpose, procedure, positive finding, Sn, Sp, LR+, LR−, sources).
// Narrow screens: each row becomes a card (ARIA table roles are set explicitly so semantics survive the CSS change).
// Accuracy figures are shown exactly as authored ("—" when absent); nothing is derived or invented.

import { h } from "../util/dom.js";

const arr = (v) => (Array.isArray(v) ? v : []);
const str = (v) => (v == null ? "" : String(v).trim());

/** Inline text: **bold** and [rN] citation links (class cite__a, href #injury.<id>.ref-rN). */
function rich(text, ctx) {
  const frag = document.createDocumentFragment();
  const re = /\*\*(.+?)\*\*|\[(r\d+(?:\s*,\s*r\d+)*)\]/g;
  const s = str(text);
  let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) frag.append(s.slice(last, m.index));
    if (m[1] !== undefined) frag.append(h("strong", null, m[1]));
    else {
      const sup = h("sup", { class: "cite" });
      m[2].split(/\s*,\s*/).forEach((rid, i) => {
        if (i) sup.append(",");
        sup.append(refLink(rid, ctx));
      });
      frag.append(sup);
    }
    last = m.index + m[0].length;
  }
  if (last < s.length) frag.append(s.slice(last));
  return frag;
}

function refLink(rid, ctx) {
  const idx = ctx.refs.findIndex((r) => r && r.id === rid);
  const n = idx >= 0 ? idx + 1 : rid.replace(/^r/, "");
  if (!ctx.id) return h("span", { title: idx >= 0 ? str(ctx.refs[idx].citation) : null }, String(n));
  return h("a", {
    class: "cite__a", href: `#injury.${ctx.id}.ref-${rid}`, "data-ref": rid,
    "aria-label": `Reference ${n}`, title: idx >= 0 ? `[${n}] ${str(ctx.refs[idx].citation)}` : null
  }, String(n));
}

/** "85% (95% CI 83–87)" → { main: "85%", rest: "(95% CI 83–87)", pct: 85 }.  pct only for accuracy percentages. */
function parseStat(v, asPercent) {
  const s = str(v);
  if (!s) return null;
  const m = s.match(/^([≥≤><~≈]?\s*\d+(?:\.\d+)?\s*%?)\s*(.*)$/);
  if (!m) return { main: s, rest: "", pct: null };
  const main = m[1].replace(/\s+/g, ""), rest = m[2];
  let pct = null;
  if (asPercent) {
    const n = parseFloat(main.replace(/[^\d.]/g, ""));
    if (isFinite(n)) pct = main.includes("%") ? n : n <= 1 ? n * 100 : null;
  }
  return { main, rest, pct };
}

function statCell(value, kind, label) {
  const asPct = kind === "sn" || kind === "sp";
  const p = parseStat(value, asPct);
  if (!p) return h("span", { class: "st__stat st__stat--none", "aria-label": `${label}: not reported` }, "—");
  const flag = asPct && p.pct != null && p.pct >= 90
    ? h("abbr", {
      class: "st__flag", title: kind === "sn"
        ? "High sensitivity (≥ 90%): a negative result helps rule the condition out (SnNout)."
        : "High specificity (≥ 90%): a positive result helps rule the condition in (SpPin)."
    }, kind === "sn" ? "SnNout" : "SpPin") : null;
  return h("span", { class: "st__stat" },
    h("span", { class: "st__v mono" }, p.main),
    p.rest ? h("span", { class: "st__rest" }, p.rest) : null,
    asPct && p.pct != null ? h("span", { class: `st__meter st__meter--${kind}`, "aria-hidden": "true" }, h("i", { style: { width: `${Math.max(2, Math.min(100, p.pct))}%` } })) : null,
    flag);
}

function detectId() {
  try { const m = location.hash.match(/^#injury\.([a-z0-9-]+)/i); return m ? m[1].toLowerCase() : ""; } catch { return ""; }
}

export function specialTestsTable(tests, refs, opts = {}) {
  const list = arr(tests).filter((t) => t && typeof t === "object" && str(t.name));
  const ctx = { id: opts.injuryId || detectId(), refs: arr(refs) };
  if (!list.length) return h("p", { class: "st-empty" }, "No special tests are listed for this injury.");

  const cols = [
    ["test", "Test"], ["proc", "How to perform"], ["pos", "Positive finding"],
    ["sn", "Sn"], ["sp", "Sp"], ["lrp", "LR+"], ["lrn", "LR−"], ["src", "Sources"]
  ];
  const colTitle = { sn: "Sensitivity", sp: "Specificity", lrp: "Positive likelihood ratio", lrn: "Negative likelihood ratio" };

  const head = h("tr", { role: "row" }, cols.map(([k, t]) =>
    h("th", { scope: "col", role: "columnheader", class: `st__th st__th--${k}` }, colTitle[k] ? h("abbr", { title: colTitle[k] }, t) : t)));

  const rows = list.map((t) => {
    const rids = arr(t.refs).map(str).filter(Boolean);
    const lbl = (k, text) => ({ "data-label": text, class: `st__td st__td--${k}` });
    const anyStat = [t.sensitivity, t.specificity, t.lrPositive, t.lrNegative].some((v) => str(v));
    return h("tr", { role: "row", class: "st__row" },
      h("th", { scope: "row", role: "rowheader", class: "st__td st__td--test" },
        h("span", { class: "st__name" }, str(t.name)),
        t.purpose ? h("span", { class: "st__purpose" }, rich(t.purpose, ctx)) : null),
      h("td", { role: "cell", ...lbl("proc", "How to perform") }, t.procedure ? rich(t.procedure, ctx) : "—"),
      h("td", { role: "cell", ...lbl("pos", "Positive finding") }, t.positive ? rich(t.positive, ctx) : "—"),
      h("td", { role: "cell", ...lbl("sn", "Sn") }, statCell(t.sensitivity, "sn", "Sensitivity")),
      h("td", { role: "cell", ...lbl("sp", "Sp") }, statCell(t.specificity, "sp", "Specificity")),
      h("td", { role: "cell", ...lbl("lrp", "LR+") }, statCell(t.lrPositive, "lr", "Positive likelihood ratio")),
      h("td", { role: "cell", ...lbl("lrn", "LR−") }, statCell(t.lrNegative, "lr", "Negative likelihood ratio")),
      h("td", { role: "cell", ...lbl("src", "Sources") },
        rids.length
          ? h("span", { class: "st__srcs" }, rids.map((rid) => h("sup", { class: "cite" }, refLink(rid, ctx))))
          : h("span", { class: "st__nosrc", title: anyStat ? "No source listed for these figures" : "No accuracy figures reported" }, "—")));
  });

  const table = h("table", { class: "st__table", role: "table" },
    h("caption", { class: "visually-hidden" }, "Special tests with diagnostic accuracy where reported"),
    h("thead", { role: "rowgroup" }, head),
    h("tbody", { role: "rowgroup" }, rows));

  return h("div", { class: "st" },
    h("div", { class: "st__wrap" }, table),
    h("p", { class: "st__note" },
      h("abbr", { title: "Sensitivity" }, "Sn"), " proportion of people with the condition who test positive · ",
      h("abbr", { title: "Specificity" }, "Sp"), " proportion without it who test negative · ",
      h("abbr", { title: "Likelihood ratio" }, "LR"), " how much a result shifts the odds. ",
      "A dash means the figure is not reported; values are quoted from the cited sources and vary with population and reference standard."));
}

export default specialTestsTable;
