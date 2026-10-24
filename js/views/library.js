// Injury library — #library, #library.<region>, #library.<bodyArea>. OWNER: P3.
//
// Loads only data/index.json (+ meta.json). Everything else is page state held in module scope, so Back from an injury
// returns to the same filters. The region / body area is mirrored into the hash (router.navigate silent+replace), the
// grid/list preference into store.prefs ("libraryView").
//
// Filters (all real form controls with labels; counts are "if you chose this, how many injuries" for the other active
// filters): location (body area → region radios), tissue, onset, mechanism, urgency, population (derived tags), sport
// (select), has animation, plus a quick name/alias filter. Active filters show as removable chips with "Clear all".
// Desktop: sticky sidebar. Mobile: a bottom sheet (focus moved in and trapped, Esc / scrim / button close, focus returns).

import { h, icon, debounce, REGIONS, BODY_AREAS } from "../util/dom.js";
import { favouriteButton, urgencyBadge, keyFact, labels, areaOf, injuryCard } from "../components/injury-card.js";

/* ------------------------------------------------------------------ constants */
const SITE = "Physio Explained";
const AREA_ORDER = ["lower-limb", "upper-limb", "spine", "trunk", "head", "general"];
const AREA_REGIONS = Object.fromEntries(AREA_ORDER.map((a) => [a, BODY_AREAS[a] || []]));
const SINGLE_AREA = new Set(AREA_ORDER.filter((a) => AREA_REGIONS[a].length === 1)); // head, general
const URG_ORDER = ["emergency", "urgent", "routine"];
const URG_RANK = { emergency: 0, urgent: 1, routine: 2 };
const URG_TEXT = { emergency: "Emergency", urgent: "Urgent", routine: "Routine" };
const URG_HINT = { emergency: "same-day emergency care", urgent: "medical review within days", routine: "physio-led management" };
const MECH_ORDER = ["contact", "non-contact", "overuse", "fall", "collision", "degenerative", "insidious", "traction", "compression"];
const SORTS = [
  ["az", "Name (A–Z)"],
  ["region", "Body region"],
  ["urgency", "Urgency (most urgent first)"],
  ["rec-asc", "Recovery time (shortest first)"],
  ["rec-desc", "Recovery time (longest first)"],
  ["refs", "Most references"]
];
const FLAT_SORTS = new Set(["rec-asc", "rec-desc", "refs"]);
const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });
const REDUCED = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } };

/* ------------------------------------------------------------------ page state (survives re-render) */
const S = {
  q: "", loc: "", tissue: new Set(), onset: new Set(), mech: new Set(), urg: new Set(), pop: new Set(), sport: "", anim: false,
  sort: "az", view: null,
  open: { loc: true, tissue: true, onset: true, mech: false, urg: true, pop: false, sport: true, anim: true }
};
let M = null; // the mounted instance

/* ------------------------------------------------------------------ derived data */
const norm = (s) => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);

const POP_RULES = [
  ["children", "Children & adolescents", /\b(child|children|paediatric|pediatric|adolescen|teen|youth|junior|skeletally immature|growing)/],
  ["older", "Older adults", /\b(older|elderly|aged|ageing|aging|osteopor|postmenopausal|seniors?|over[- ]\d\d|\d0\+|>\s?\d\d)/],
  ["female", "Women & female athletes", /\b(female|women|woman|girls?)\b/],
  ["perinatal", "Pregnancy & postpartum", /(pregnan|postpartum|peripartum|perinatal)/],
  ["work", "Manual & desk workers", /(worker|occupation|manual|labour|tradie|desk|office|sedentary|computer|typist|musician|military|recruit)/]
];
const POP_LABEL = Object.fromEntries([...POP_RULES.map(([k, l]) => [k, l]), ["sport", "Athletes & sport-related"]]);
const POP_ORDER = ["sport", "children", "older", "female", "work", "perinatal"];
function popTags(e, sports) {
  const text = norm((e.populations || []).join(" | "));
  const out = new Set();
  for (const [k, , re] of POP_RULES) if (re.test(text)) out.add(k);
  if (sports.length || /(athlete|sport|player|runner|swimmer|cyclist|gymnast|dancer|throw|overhead)/.test(text)) out.add("sport");
  return [...out];
}

const SPORT_ALIAS = { "aussie rules": "australian football", afl: "australian football", "australian rules": "australian football", "australian rules football": "australian football", "football (soccer)": "soccer", "association football": "soccer", "track and field": "athletics", "track & field": "athletics" };
const sportKey = (s) => { const k = norm(s); return SPORT_ALIAS[k] || k; };
const sportLabel = (k) => cap(k);

const onsetKinds = (o) => (o === "acute-or-gradual" ? ["acute", "gradual"] : o === "acute" || o === "gradual" ? [o] : []);

const DAYS = { day: 1, week: 7, wk: 7, month: 30.44, year: 365.25, yr: 365.25 };
function recoveryDays(e) {
  const f = (e.keyFacts || []).find((k) => /^typical recovery/i.test(k.label)) || (e.keyFacts || []).find((k) => /return to sport/i.test(k.label));
  if (!f) return null;
  const m = String(f.value).match(/(\d+(?:\.\d+)?)\s*(?:(?:–|—|-|to)\s*(\d+(?:\.\d+)?))?\s*(day|week|wk|month|year|yr)s?\b/i);
  if (!m) return null;
  const a = parseFloat(m[1]), b = m[2] ? parseFloat(m[2]) : a;
  return ((a + b) / 2) * DAYS[m[3].toLowerCase()];
}

function derive(e) {
  const sports = [...new Set((e.sports || []).map(sportKey).filter(Boolean))];
  const first = (e.name || "").trim().charAt(0).toUpperCase();
  return {
    e, id: e.id, area: areaOf(e), region: e.region,
    tissues: e.tissues || [], onset: onsetKinds(e.onset), mech: e.mechanismType || [], urg: e.urgency || "routine",
    pop: popTags(e, sports), sports, anim: !!e.hasAnimation,
    hay: norm([e.name, e.shortName, ...(e.aka || [])].join(" | ")),
    days: recoveryDays(e), refs: e.refCount || 0, letter: /[A-Z]/.test(first) ? first : "#"
  };
}

function normLoc(tok) {
  const t = String(tok || "").toLowerCase();
  if (AREA_ORDER.includes(t)) return t;
  if (REGIONS.includes(t)) { const a = AREA_ORDER.find((k) => AREA_REGIONS[k].includes(t)); return SINGLE_AREA.has(a) ? a : t; }
  return "";
}
const isArea = (v) => AREA_ORDER.includes(v);
const locLabel = (v) => (isArea(v) ? labels.area(v) : labels.region(v));
const locHash = () => (S.loc ? `library.${S.loc}` : "library");

/* ------------------------------------------------------------------ filtering */
function cloneState(st = S) {
  return { ...st, tissue: new Set(st.tissue), onset: new Set(st.onset), mech: new Set(st.mech), urg: new Set(st.urg), pop: new Set(st.pop) };
}
const anyOf = (set, vals) => set.size === 0 || vals.some((v) => set.has(v));
function pass(d, skip, st = S) {
  if (skip !== "q" && st.q) { const toks = norm(st.q).split(" "); if (!toks.every((t) => d.hay.includes(t))) return false; }
  if (skip !== "loc" && st.loc && d.area !== st.loc && d.region !== st.loc) return false;
  if (skip !== "tissue" && !anyOf(st.tissue, d.tissues)) return false;
  if (skip !== "onset" && !anyOf(st.onset, d.onset)) return false;
  if (skip !== "mech" && !anyOf(st.mech, d.mech)) return false;
  if (skip !== "urg" && !anyOf(st.urg, [d.urg])) return false;
  if (skip !== "pop" && !anyOf(st.pop, d.pop)) return false;
  if (skip !== "sport" && st.sport && !d.sports.includes(st.sport)) return false;
  if (skip !== "anim" && st.anim && !d.anim) return false;
  return true;
}
function tally(skip, valuesOf) {
  const m = new Map();
  for (const d of M.D) if (pass(d, skip)) for (const v of valuesOf(d)) m.set(v, (m.get(v) || 0) + 1);
  return m;
}

function activeChips(st = S) {
  const c = [];
  if (st.q.trim()) c.push({ kind: "q", label: `Name: “${st.q.trim()}”` });
  if (st.loc) c.push({ kind: "loc", label: `${isArea(st.loc) ? "Area" : "Region"}: ${locLabel(st.loc)}` });
  for (const v of st.tissue) c.push({ kind: "tissue", value: v, label: `Tissue: ${labels.tissue(v)}` });
  for (const v of st.onset) c.push({ kind: "onset", value: v, label: `Onset: ${labels.onset(v)}` });
  for (const v of st.mech) c.push({ kind: "mech", value: v, label: `Mechanism: ${labels.mechanism(v)}` });
  for (const v of st.urg) c.push({ kind: "urg", value: v, label: `Urgency: ${URG_TEXT[v] || v}` });
  for (const v of st.pop) c.push({ kind: "pop", value: v, label: `Population: ${POP_LABEL[v] || v}` });
  if (st.sport) c.push({ kind: "sport", label: `Sport: ${sportLabel(st.sport)}` });
  if (st.anim) c.push({ kind: "anim", label: "Has animation" });
  return c;
}
function removeChip(st, c) {
  if (c.kind === "q") st.q = "";
  else if (c.kind === "loc") st.loc = "";
  else if (c.kind === "sport") st.sport = "";
  else if (c.kind === "anim") st.anim = false;
  else st[c.kind].delete(c.value);
}

/* ------------------------------------------------------------------ sorting & grouping */
const byName = (a, b) => collator.compare(a.e.name || "", b.e.name || "");
const regionRank = (d) => { const a = AREA_ORDER.indexOf(d.area), r = REGIONS.indexOf(d.region); return (a < 0 ? 99 : a) * 100 + (r < 0 ? 99 : r); };
const nullLast = (x, y, dir) => (x == null && y == null ? 0 : x == null ? 1 : y == null ? -1 : (x - y) * dir);
const COMPARE = {
  az: byName,
  region: (a, b) => regionRank(a) - regionRank(b) || byName(a, b),
  urgency: (a, b) => (URG_RANK[a.urg] ?? 9) - (URG_RANK[b.urg] ?? 9) || byName(a, b),
  "rec-asc": (a, b) => nullLast(a.days, b.days, 1) || byName(a, b),
  "rec-desc": (a, b) => nullLast(a.days, b.days, -1) || byName(a, b),
  refs: (a, b) => b.refs - a.refs || byName(a, b)
};

function groupList(list) {
  if (FLAT_SORTS.has(S.sort)) return [{ key: "all", label: "", items: list }];
  const keyOf = S.sort === "region" ? (d) => d.region : S.sort === "urgency" ? (d) => d.urg : (d) => d.letter;
  const map = new Map();
  for (const d of list) { const k = keyOf(d); if (!map.has(k)) map.set(k, []); map.get(k).push(d); }
  return [...map].map(([key, items]) => {
    if (S.sort === "region") return { key, label: labels.region(key), sub: SINGLE_AREA.has(items[0].area) ? "" : labels.area(items[0].area), short: labels.region(key), items };
    if (S.sort === "urgency") return { key, label: URG_TEXT[key] || key, sub: URG_HINT[key] || "", short: URG_TEXT[key] || key, items };
    return { key, label: key, sub: "", short: key, items };
  });
}

/* ------------------------------------------------------------------ view contract */
export function title(params = []) {
  const loc = normLoc(params[0]);
  return loc ? `${locLabel(loc)} injuries` : "Injury library";
}

export async function render(main, params = [], ctx = {}) {
  destroy();
  const store = ctx.store;
  const inst = (M = { main, ctx, store, abort: new AbortController(), D: [], cardCache: new Map(), sheetOpen: false, opener: null });
  S.loc = normLoc(params[0]);
  try { S.view = store.prefs.get("libraryView", S.view || "grid") === "list" ? "list" : "grid"; } catch { S.view = S.view || "grid"; }

  const titleEl = h("h1", { id: "lib-title" }, "Injury library");
  const lede = h("p", { class: "lead lib-lede" }, "Every injury, from mechanism to return to sport. Filter by region, tissue, onset or urgency, or scan the whole list.");
  const root = (inst.root = h("section", { class: "lib", "aria-labelledby": "lib-title" },
    h("header", { class: "lib-head" }, titleEl, lede),
    skeleton()));
  main.replaceChildren(root);

  let index, meta = null;
  try {
    [index, meta] = await Promise.all([store.index(), store.meta().catch(() => null)]);
  } catch (err) {
    if (M !== inst) return;
    root.querySelector(".lib-skel")?.replaceWith(errorState(() => render(main, params, ctx), err));
    return;
  }
  if (M !== inst) return;
  inst.D = (Array.isArray(index) ? index : []).map(derive);
  inst.total = Math.max(inst.D.length, Number.isFinite(meta?.injuries) ? meta.injuries : 0);
  inst.planned = Number.isFinite(meta?.planned) ? meta.planned : null;
  buildUI(inst, root);
  apply();
}

/** Same view, new hash (e.g. header "Library" link or a body-map link while the library is open): no re-render. */
export function update(main, params = []) {
  if (!M || !M.ui) return false;
  S.loc = normLoc(params[0]);
  closeSheet({ restoreFocus: false });
  syncControls();
  apply({ fromHash: true });
  try { document.title = `${title([S.loc])} · ${SITE}`; } catch { /* ignore */ }
  try { window.scrollTo({ top: 0, behavior: REDUCED() ? "auto" : "smooth" }); } catch { /* ignore */ }
  return true;
}

export function destroy() {
  if (!M) return;
  closeSheet({ restoreFocus: false });
  try { M.abort.abort(); } catch { /* ignore */ }
  document.documentElement.classList.remove("lib-lock");
  M = null;
}

/* ------------------------------------------------------------------ skeleton & error */
function skeleton() {
  return h("div", { class: "lib-skel", "aria-hidden": "true" },
    h("div", { class: "lib-skel-bar" }),
    h("div", { class: "lib-skel-grid" }, Array.from({ length: 6 }, () => h("div", { class: "lib-skel-card" },
      h("i", { class: "w40" }), h("i", { class: "w90 tall" }), h("i", { class: "w100" }), h("i", { class: "w70" })))),
    h("p", { class: "visually-hidden", role: "status" }, "Loading injuries…"));
}
function errorState(retry, err) {
  return h("div", { class: "lib-empty", role: "alert" },
    h("h2", null, "The injury index couldn’t be loaded"),
    h("p", null, "Check your connection and try again."),
    err && err.message ? h("p", { class: "small muted mono" }, err.message) : null,
    h("div", { class: "cluster" }, h("button", { type: "button", class: "btn btn--primary", on: { click: retry } }, "Try again"), h("a", { class: "btn", href: "#home" }, "Home")));
}

/* ------------------------------------------------------------------ UI construction */
function buildUI(inst, root) {
  const { D } = inst;
  const ui = (inst.ui = { ctl: {}, facets: {} });
  const sig = { signal: inst.abort.signal };

  /* ---- options present in the data ---- */
  const freq = (valuesOf) => { const m = new Map(); for (const d of D) for (const v of valuesOf(d)) m.set(v, (m.get(v) || 0) + 1); return m; };
  const byFreq = (m) => [...m].sort((a, b) => b[1] - a[1] || collator.compare(String(a[0]), String(b[0]))).map(([k]) => k);
  const tissues = byFreq(freq((d) => d.tissues));
  const mechs = [...freq((d) => d.mech).keys()].sort((a, b) => (MECH_ORDER.indexOf(a) + 1 || 99) - (MECH_ORDER.indexOf(b) + 1 || 99));
  const pops = POP_ORDER.filter((k) => D.some((d) => d.pop.includes(k)));
  const sportFreq = freq((d) => d.sports);
  const sports = [...sportFreq.keys()].sort((a, b) => collator.compare(a, b));
  const hasAnim = D.some((d) => d.anim);

  /* ---- filter panel ---- */
  const clearBtn = (ui.clearSide = h("button", { type: "button", class: "lib-link", on: { click: clearAll } }, "Clear all"));
  const closeBtn = h("button", { type: "button", class: "icon-btn lib-sheet-close", "aria-label": "Close filters", on: { click: () => closeSheet() } }, icon("close"));
  const showBtn = (ui.showBtn = h("button", { type: "button", class: "btn btn--primary btn--block", on: { click: () => closeSheet() } }, "Show injuries"));
  const panel = (ui.panel = h("aside", { class: "lib-filters", id: "lib-filters", "aria-labelledby": "lib-filters-h" },
    h("div", { class: "lib-filters-head" },
      h("h2", { id: "lib-filters-h", class: "lib-filters-title" }, "Filters"),
      clearBtn, closeBtn),
    h("div", { class: "lib-filters-body" },
      locationFacet(ui, sig),
      checkFacet(ui, "tissue", "Tissue", tissues.map((v) => [v, labels.tissue(v)])),
      checkFacet(ui, "onset", "Onset", [["acute", "Acute", "sudden, event-related"], ["gradual", "Gradual", "overuse or insidious"]], "Injuries that can start either way are counted in both."),
      mechs.length ? checkFacet(ui, "mech", "Mechanism", mechs.map((v) => [v, labels.mechanism(v)])) : null,
      checkFacet(ui, "urg", "Urgency", URG_ORDER.map((v) => [v, URG_TEXT[v], URG_HINT[v]]), "Emergency and urgent conditions need medical input before or alongside physio."),
      pops.length ? checkFacet(ui, "pop", "Population", pops.map((v) => [v, POP_LABEL[v]]), "Derived from each injury’s listed populations.") : null,
      sports.length ? sportFacet(ui, sports, sig) : null,
      hasAnim ? animFacet(ui) : null),
    h("div", { class: "lib-filters-foot" }, showBtn)));

  /* ---- toolbar ---- */
  const qInput = (ui.q = h("input", { id: "lib-q", class: "lib-q-input", type: "search", placeholder: "Filter by name or alias", autocomplete: "off", spellcheck: "false", enterkeyhint: "search", value: S.q }));
  qInput.addEventListener("input", debounce(() => { S.q = qInput.value; apply(); }, 90), sig);
  const sortSel = (ui.sort = h("select", { id: "lib-sort", class: "select lib-sort-select" }, SORTS.map(([v, l]) => h("option", { value: v }, l))));
  sortSel.value = S.sort;
  sortSel.addEventListener("change", () => { S.sort = sortSel.value; apply({ keepScroll: true }); }, sig);
  const viewBtns = {};
  const viewBtn = (v, ic, text) => (viewBtns[v] = h("button", { type: "button", class: "lib-view-btn", "aria-pressed": String(S.view === v),
    on: { click: () => setView(v) } }, icon(ic, { size: 18 }), h("span", null, text)));
  ui.viewBtns = viewBtns;
  const filterBtn = (ui.filterBtn = h("button", { type: "button", class: "btn lib-filter-btn", "aria-haspopup": "dialog", "aria-expanded": "false", "aria-controls": "lib-filters", on: { click: () => openSheet() } },
    icon("filter"), "Filters", (ui.filterN = h("span", { class: "lib-filter-n mono", hidden: true }))));

  const toolbar = h("div", { class: "lib-toolbar" },
    filterBtn,
    h("div", { class: "lib-q" }, h("label", { class: "visually-hidden", for: "lib-q" }, "Filter injuries by name or alias"), icon("search", { size: 18, className: "lib-q-icon" }), qInput),
    h("div", { class: "lib-sort" }, h("label", { for: "lib-sort" }, "Sort"), sortSel),
    h("div", { class: "lib-view", role: "group", "aria-label": "Layout" }, viewBtn("grid", "grid", "Grid"), viewBtn("list", "list", "List")));

  /* ---- status, chips, jump bar, results ---- */
  ui.count = h("p", { class: "lib-count", role: "status", "aria-live": "polite", "aria-atomic": "true" });
  ui.planned = h("span", { class: "lib-planned muted" });
  ui.chips = h("ul", { class: "lib-chips", role: "list", "aria-label": "Active filters" });
  ui.clearMain = h("button", { type: "button", class: "lib-link", hidden: true, on: { click: clearAll } }, "Clear all");
  ui.jump = h("nav", { class: "lib-jump", "aria-label": "Jump to section", hidden: true });
  ui.results = h("div", { class: "lib-results" });
  const mainCol = (ui.mainCol = h("div", { class: "lib-main" },
    toolbar,
    h("div", { class: "lib-status" }, h("div", { class: "lib-status-line" }, ui.count, ui.planned), h("div", { class: "lib-chiprow" }, ui.chips, ui.clearMain)),
    ui.jump,
    ui.results));

  ui.scrim = h("div", { class: "lib-scrim", hidden: true, on: { click: () => closeSheet() } });
  root.querySelector(".lib-skel")?.replaceWith(h("div", { class: "lib-layout" }, panel, mainCol), ui.scrim);

  /* ---- responsive behaviour ---- */
  const mq = matchMedia("(min-width: 960px)");
  const onMq = () => {
    if (mq.matches) { closeSheet({ restoreFocus: false }); panel.removeAttribute("role"); panel.removeAttribute("aria-modal"); }
    else { panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); }
  };
  onMq();
  mq.addEventListener("change", onMq, sig);
  inst.mq = mq;
  document.addEventListener("keydown", (e) => {
    if (!inst.sheetOpen) return;
    if (e.key === "Escape") { e.preventDefault(); closeSheet(); return; }
    if (e.key === "Tab") trapFocus(e);
  }, sig);
}

/* ---- facet builders ---- */
function opt(type, name, value, text, hint) {
  const input = h("input", { type, name, value, class: "lib-input" });
  const n = h("span", { class: "lib-opt-n mono" }, "0");
  const label = h("label", { class: "lib-opt" }, input, h("span", { class: "lib-opt-t" }, text, hint ? h("small", null, hint) : null), n);
  return { input, n, label };
}
function facetShell(ui, key, title, ...body) {
  const badge = h("span", { class: "lib-facet-n mono", hidden: true });
  const det = h("details", { class: "lib-facet", "data-facet": key },
    h("summary", { class: "lib-facet-sum" }, h("span", { class: "lib-facet-title" }, title), badge, icon("chevron-down", { size: 16, className: "lib-facet-chev" })),
    h("fieldset", { class: "lib-facet-body" }, h("legend", { class: "visually-hidden" }, title), ...body));
  det.open = !!S.open[key];
  det.addEventListener("toggle", () => { S.open[key] = det.open; });
  ui.facets[key] = { badge };
  return det;
}
function locationFacet(ui, sig) {
  const ctl = (ui.ctl.loc = new Map());
  const mk = (value, text) => { const o = opt("radio", "lib-loc", value, text); o.input.addEventListener("change", () => { S.loc = value; apply(); }, sig); ctl.set(value, o); return o; };
  const all = mk("", "All regions");
  const areas = AREA_ORDER.map((a) => {
    const ao = mk(a, labels.area(a));
    const regions = SINGLE_AREA.has(a) ? [] : AREA_REGIONS[a].map((r) => mk(r, labels.region(r)).label);
    const sub = regions.length ? h("div", { class: "lib-regions", "data-area": a }, regions) : null;
    return h("div", { class: "lib-area", "data-area": a }, ao.label, sub);
  });
  return facetShell(ui, "loc", "Body area & region", all.label, areas);
}
function checkFacet(ui, key, title, options, note) {
  const ctl = (ui.ctl[key] = new Map());
  const rows = options.map(([value, text, hint]) => {
    const o = opt("checkbox", `lib-${key}`, value, text, hint);
    o.input.addEventListener("change", () => { if (o.input.checked) S[key].add(value); else S[key].delete(value); apply(); }, { signal: M.abort.signal });
    ctl.set(value, o);
    return o.label;
  });
  return facetShell(ui, key, title, rows, note ? h("p", { class: "lib-note" }, note) : null);
}
function sportFacet(ui, sports, sig) {
  const sel = (ui.sportSel = h("select", { id: "lib-sport", class: "select lib-select" }, h("option", { value: "" }, "Any sport"), sports.map((s) => h("option", { value: s }, sportLabel(s)))));
  sel.addEventListener("change", () => { S.sport = sel.value; apply(); }, sig);
  ui.sportOpts = new Map([...sel.options].map((o) => [o.value, o]));
  return facetShell(ui, "sport", "Sport", h("label", { class: "visually-hidden", for: "lib-sport" }, "Sport"), sel);
}
function animFacet(ui) {
  const o = (ui.ctl.anim = opt("checkbox", "lib-anim", "1", "Has mechanism animation"));
  o.input.addEventListener("change", () => { S.anim = o.input.checked; apply(); }, { signal: M.abort.signal });
  return facetShell(ui, "anim", "Animation", o.label);
}

/* ------------------------------------------------------------------ applying state */
function apply({ fromHash = false, keepScroll = false } = {}) {
  if (!M || !M.ui) return;
  const { ui, D } = M;
  const list = D.filter((d) => pass(d)).sort(COMPARE[S.sort] || byName);
  M.list = list;
  paintCounts();
  syncControls();
  paintChips();
  paintResults(list, keepScroll);
  paintStatus(list);
  if (!fromHash) syncHash();
}

function paintCounts() {
  const { ui } = M;
  const set = (o, n, checked) => { if (!o) return; o.n.textContent = String(n); o.label.classList.toggle("is-zero", n === 0); o.input.disabled = n === 0 && !checked; };
  const loc = tally("loc", (d) => new Set([d.area, d.region]));
  let locTotal = 0;
  for (const d of M.D) if (pass(d, "loc")) locTotal++;
  for (const [value, o] of ui.ctl.loc) set(o, value === "" ? locTotal : loc.get(value) || 0, S.loc === value);
  for (const key of ["tissue", "onset", "mech", "urg", "pop"]) {
    if (!ui.ctl[key]) continue;
    const counts = tally(key, key === "tissue" ? (d) => d.tissues : key === "onset" ? (d) => d.onset : key === "mech" ? (d) => d.mech : key === "urg" ? (d) => [d.urg] : (d) => d.pop);
    for (const [value, o] of ui.ctl[key]) set(o, counts.get(value) || 0, S[key].has(value));
  }
  if (ui.sportOpts) {
    const counts = tally("sport", (d) => d.sports);
    let total = 0;
    for (const d of M.D) if (pass(d, "sport")) total++;
    for (const [value, o] of ui.sportOpts) {
      const n = value === "" ? total : counts.get(value) || 0;
      o.textContent = value === "" ? "Any sport" : `${sportLabel(value)} (${n})`;
      o.disabled = value !== "" && n === 0 && S.sport !== value;
    }
  }
  if (ui.ctl.anim) { let n = 0; for (const d of M.D) if (d.anim && pass(d, "anim")) n++; set(ui.ctl.anim, n, S.anim); }
}

/** Reflect state in the controls (needed after chip removal / clear all / hash change). */
function syncControls() {
  const { ui } = M;
  if (ui.q.value !== S.q) ui.q.value = S.q;
  ui.sort.value = S.sort;
  for (const [value, o] of ui.ctl.loc) o.input.checked = S.loc === value;
  for (const key of ["tissue", "onset", "mech", "urg", "pop"]) if (ui.ctl[key]) for (const [value, o] of ui.ctl[key]) o.input.checked = S[key].has(value);
  if (ui.ctl.anim) ui.ctl.anim.input.checked = S.anim;
  if (ui.sportSel) ui.sportSel.value = S.sport;
  const area = isArea(S.loc) ? S.loc : AREA_ORDER.find((a) => AREA_REGIONS[a].includes(S.loc));
  for (const sub of ui.panel.querySelectorAll(".lib-regions")) sub.hidden = sub.dataset.area !== area;
  const nActive = { loc: S.loc ? 1 : 0, tissue: S.tissue.size, onset: S.onset.size, mech: S.mech.size, urg: S.urg.size, pop: S.pop.size, sport: S.sport ? 1 : 0, anim: S.anim ? 1 : 0 };
  for (const k in ui.facets) { const b = ui.facets[k].badge; b.hidden = !nActive[k]; b.textContent = String(nActive[k]); }
  for (const v in ui.viewBtns) ui.viewBtns[v].setAttribute("aria-pressed", String(S.view === v));
}

function paintChips() {
  const { ui } = M;
  const chips = activeChips();
  ui.chips.replaceChildren(...chips.map((c) => h("li", null, h("button", { type: "button", class: "lib-chip", "aria-label": `Remove filter ${c.label}`,
    on: { click: () => { removeChip(S, c); apply(); focusAfterRemoval(); } } }, h("span", null, c.label), icon("close", { size: 14 })))));
  ui.chips.hidden = !chips.length;
  ui.clearMain.hidden = !chips.length;
  ui.clearSide.hidden = !chips.length;
  const nFilters = chips.filter((c) => c.kind !== "q").length;
  ui.filterN.hidden = !nFilters;
  ui.filterN.textContent = String(nFilters);
  ui.filterBtn.setAttribute("aria-label", nFilters ? `Filters, ${nFilters} active` : "Filters");
}
function focusAfterRemoval() {
  // the chip that was activated is gone; keep keyboard users on the chip row, else on the results heading
  const next = M?.ui.chips.querySelector("button") || M?.ui.clearMain;
  if (next && !next.hidden) next.focus({ preventScroll: true });
  else M?.ui.q.focus({ preventScroll: true });
}

function paintStatus(list) {
  const { ui } = M;
  const n = list.length, total = M.total;
  const text = `${n} of ${total} ${total === 1 ? "injury" : "injuries"}`;
  if (ui.count.textContent !== text) {
    ui.count.replaceChildren(h("strong", { class: "mono" }, String(n)), " of ", h("span", { class: "mono" }, String(total)), total === 1 ? " injury" : " injuries");
  }
  ui.planned.textContent = M.planned && M.planned > total ? `· ${M.planned} planned, more added as they are reviewed` : "";
  ui.showBtn.textContent = n === 0 ? "No injuries match" : `Show ${n} ${n === 1 ? "injury" : "injuries"}`;
}

function syncHash() {
  const want = locHash();
  const cur = location.hash.replace(/^#!?\/?/, "");
  if (cur === want || !/^library(\.|$)/.test(cur)) return;
  try { M.ctx.router.navigate(want, { replace: true, silent: true }); } catch { /* sandboxed: leave the URL */ }
  try { document.title = `${title([S.loc])} · ${SITE}`; } catch { /* ignore */ }
}

function clearAll() {
  S.q = ""; S.loc = ""; S.tissue.clear(); S.onset.clear(); S.mech.clear(); S.urg.clear(); S.pop.clear(); S.sport = ""; S.anim = false;
  apply();
}
function setView(v) {
  if (S.view === v) return;
  S.view = v;
  try { M.store.prefs.set("libraryView", v); } catch { /* ignore */ }
  apply({ keepScroll: true });
}

/* ------------------------------------------------------------------ results */
function cached(key, make) {
  let el = M.cardCache.get(key);
  if (!el) { el = make(); M.cardCache.set(key, el); }
  return el;
}
const card = (d) => cached(`c:${d.id}`, () => injuryCard(d.e, { headingLevel: 3 }));
const row = (d) => cached(`r:${d.id}`, () => listRow(d));

function listRow(d) {
  const e = d.e, fact = keyFact(e), onset = e.onset ? labels.onset(e.onset) : "";
  const badge = urgencyBadge(d.urg);
  return h("article", { class: "lr", "data-id": e.id, "data-urgency": d.urg },
    h("h3", { class: "lr-name" }, h("a", { class: "lr-link", href: `#injury.${e.id}` }, e.name)),
    h("div", { class: "lr-meta" },
      h("p", { class: "lr-region" }, labels.region(e.region)),
      h("p", { class: "lr-tissues" }, (e.tissues || []).map((t) => labels.tissue(t).toLowerCase()).join(", ")),
      h("p", { class: "lr-onset" }, onset),
      h("p", { class: "lr-urg" }, badge || h("span", { class: "lr-routine" }, "Routine"))),
    h("p", { class: "lr-fact", title: fact ? `${fact.label}: ${fact.value}` : null }, fact ? [h("span", { class: "lr-fact-l" }, `${fact.label}: `), fact.value] : "—"),
    favouriteButton(e, { className: "lr-fav" }));
}
function listHead() {
  return h("div", { class: "lr lr-head", "aria-hidden": "true" },
    h("span", { class: "lr-name" }, "Injury"),
    h("div", { class: "lr-meta" }, h("span", { class: "lr-region" }, "Region"), h("span", { class: "lr-tissues" }, "Tissues"),
      h("span", { class: "lr-onset" }, "Onset"), h("span", { class: "lr-urg" }, "Urgency")),
    h("span", { class: "lr-fact" }, "Key fact"), h("span", { class: "lr-fav" }));
}

function paintResults(list, keepScroll) {
  const { ui } = M;
  const list_ = S.view === "list";
  ui.results.classList.toggle("is-list", list_);
  if (!list.length) {
    ui.results.replaceChildren(emptyState());
    ui.jump.hidden = true;
    return;
  }
  const groups = groupList(list);
  const frag = document.createDocumentFragment();
  if (list_) frag.append(listHead());
  groups.forEach((g, gi) => {
    const items = g.items.map((d) => h("li", { class: list_ ? "lib-li lib-li--row" : "lib-li" }, list_ ? row(d) : card(d)));
    const ul = h("ul", { class: list_ ? "lib-rows" : "lib-grid", role: "list" }, items);
    if (g.key === "all") {
      frag.append(h("section", { class: "lib-group", "aria-label": "Results" }, h("h2", { class: "visually-hidden" }, "Results"), ul));
    } else {
      const hid = `lib-h-${gi}`;
      frag.append(h("section", { class: "lib-group", id: `lib-g-${g.key}`, "aria-labelledby": hid },
        h("h2", { class: "lib-group-h", id: hid, tabindex: "-1" },
          h("span", { class: "lib-group-k" }, g.label),
          g.sub ? h("span", { class: "lib-group-sub" }, g.sub) : null,
          h("span", { class: "lib-group-n mono", "aria-hidden": "true" }, String(g.items.length)),
          h("span", { class: "visually-hidden" }, `, ${g.items.length} ${g.items.length === 1 ? "injury" : "injuries"}`)),
        ul));
    }
  });
  const y = window.scrollY;
  ui.results.replaceChildren(frag);
  if (keepScroll) window.scrollTo(0, y);
  paintJump(groups);
}

function paintJump(groups) {
  const { ui } = M;
  const grouped = groups.length && groups[0].key !== "all";
  // a jump bar only earns its place with several sections
  if (!grouped || (S.sort !== "az" && groups.length < 3) || (S.sort === "az" && M.list.length < 12)) { ui.jump.hidden = true; ui.jump.replaceChildren(); return; }
  const present = new Map(groups.map((g) => [g.key, g]));
  const keys = S.sort === "az" ? [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", ...(present.has("#") ? ["#"] : [])] : groups.map((g) => g.key);
  const btns = keys.map((k) => {
    const g = present.get(k);
    const text = S.sort === "az" ? k : g.short;
    return h("button", { type: "button", class: `lib-jump-btn${S.sort === "az" ? " is-letter" : ""}`, disabled: !g, "aria-label": g ? `Jump to ${g.label}, ${g.items.length}` : `${k}: none`,
      on: { click: () => jumpTo(g.key) } }, text, S.sort !== "az" ? h("span", { class: "mono lib-jump-n" }, String(g.items.length)) : null);
  });
  ui.jump.replaceChildren(h("span", { class: "lib-jump-l" }, S.sort === "az" ? "Jump to" : S.sort === "region" ? "Region" : "Level"), h("div", { class: "lib-jump-list" }, btns));
  ui.jump.setAttribute("aria-label", S.sort === "az" ? "Jump to letter" : S.sort === "region" ? "Jump to region" : "Jump to urgency level");
  ui.jump.hidden = false;
}
function jumpTo(key) {
  const sec = M.ui.results.querySelector(`#${CSS.escape(`lib-g-${key}`)}`);
  if (!sec) return;
  sec.scrollIntoView({ block: "start", behavior: REDUCED() ? "auto" : "smooth" });
  const hd = sec.querySelector(".lib-group-h");
  if (hd) hd.focus({ preventScroll: true });
}

/* ---- empty state with suggestions ---- */
function emptyState() {
  const chips = activeChips();
  if (!M.D.length) {
    return h("div", { class: "lib-empty" }, h("h2", null, "No injuries are published yet"), h("p", null, "The library is being written and reviewed. Check back soon, or explore the healing science primer in the meantime."),
      h("div", { class: "cluster" }, h("a", { class: "btn btn--primary", href: "#healing" }, "Healing science"), h("a", { class: "btn", href: "#home" }, "Home")));
  }
  const sug = chips.map((c) => {
    const st = cloneState(); removeChip(st, c);
    let n = 0; for (const d of M.D) if (pass(d, null, st)) n++;
    return { c, n };
  }).filter((s) => s.n > 0).sort((a, b) => b.n - a.n).slice(0, 4);
  const q = S.q.trim();
  const slug = norm(q).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const onlyLoc = chips.length === 1 && chips[0].kind === "loc";
  return h("div", { class: "lib-empty" },
    h("h2", null, onlyLoc ? `No ${locLabel(S.loc).toLowerCase()} injuries are published yet` : "No injuries match these filters"),
    h("p", null, onlyLoc ? "More are added as they pass review. Browse the rest of the library, or find the area on the body map." : "Loosen one of the filters, or start again."),
    sug.length ? h("ul", { class: "lib-sug", role: "list", "aria-label": "Suggestions" }, sug.map(({ c, n }) => h("li", null,
      h("button", { type: "button", class: "lib-sug-btn", on: { click: () => { removeChip(S, c); apply(); } } },
        h("span", null, "Remove “", c.label, "”"), h("span", { class: "mono muted" }, `${n} ${n === 1 ? "injury" : "injuries"}`))))) : null,
    h("div", { class: "cluster" },
      chips.length ? h("button", { type: "button", class: "btn btn--primary", on: { click: clearAll } }, "Clear all filters") : null,
      slug ? h("a", { class: "btn", href: `#search.${slug}` }, `Search the whole site for “${q}”`) : null,
      h("a", { class: "btn", href: "#bodymap" }, "Browse the body map")));
}

/* ------------------------------------------------------------------ mobile sheet */
function openSheet() {
  if (!M || !M.ui || M.mq.matches || M.sheetOpen) return;
  const { ui } = M;
  M.sheetOpen = true;
  M.opener = document.activeElement instanceof HTMLElement ? document.activeElement : ui.filterBtn;
  ui.panel.classList.add("is-open");
  ui.scrim.hidden = false;
  ui.mainCol.inert = true;
  ui.filterBtn.setAttribute("aria-expanded", "true");
  document.documentElement.classList.add("lib-lock");
  requestAnimationFrame(() => ui.panel.querySelector(".lib-sheet-close")?.focus());
}
function closeSheet({ restoreFocus = true } = {}) {
  if (!M || !M.sheetOpen) return;
  const { ui } = M;
  M.sheetOpen = false;
  ui.panel.classList.remove("is-open");
  ui.scrim.hidden = true;
  ui.mainCol.inert = false;
  ui.filterBtn.setAttribute("aria-expanded", "false");
  document.documentElement.classList.remove("lib-lock");
  if (restoreFocus) (M.opener && M.opener.isConnected ? M.opener : ui.filterBtn).focus({ preventScroll: true });
}
function trapFocus(e) {
  const panel = M.ui.panel;
  const f = [...panel.querySelectorAll("button, input, select, summary, a[href]")].filter((n) => !n.disabled && !n.hidden && n.getClientRects().length);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (!panel.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}
