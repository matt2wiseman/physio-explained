// Glossary — #glossary and #glossary.<term-id> (deep link: scrolls to the term and highlights it). OWNER: P5.
//
// Data: data/glossary.json via store.glossary() → [{ id, term, aka?, definition, category, seeAlso?: [injury ids] }].
// UI: instant filter (uses the search engine, so typos/spelling variants work), category chips with counts, a sticky A–Z
// jump bar, terms grouped by initial letter (or ranked when filtering), and links to related injury pages.
// Filter state survives Back navigation (module scope). Styles: css/components/glossary.css (.gl*).

import { h, icon, debounce } from "../util/dom.js";
import { getEngine, highlightNodes, GLOSSARY_CATEGORIES, CATEGORY_LABELS, termSlug } from "../search/engine.js";

const S = { q: "", cat: "all" };
let M = null;
const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true, ignorePunctuation: true });
const letterOf = (t) => {
  const c = t.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/^[^A-Za-z0-9]+/, "").charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
};

export const title = () => "Glossary";

/* ------------------------------------------------------------------ lifecycle */
export async function render(main, params, ctx) {
  destroy();
  const ui = {};
  M = { main, ctx, ui, gone: false, terms: [], byId: new Map(), names: new Map(), engine: null };
  main.append(shell(ui));
  ui.list.append(h("div", { class: "gl-skeleton", "aria-hidden": "true" }));

  let raw = [];
  try { raw = await ctx.store.glossary(); } catch (e) { console.warn("[glossary] failed to load", e); }
  if (M?.gone) return;
  M.terms = (Array.isArray(raw) ? raw : raw?.terms || []).filter((t) => t && t.term && t.definition)
    .map((t) => ({ ...t, id: t.id || termSlug(t.term) }))
    .sort((a, b) => collator.compare(a.term, b.term));
  M.byId = new Map(M.terms.map((t) => [t.id, t]));
  if (!M.terms.length) {
    ui.list.replaceChildren(h("div", { class: "gl-empty" }, h("p", null, "The glossary is still being compiled. "), h("p", null, h("a", { href: "#library" }, "Browse the injury library"), " in the meantime.")));
    ui.tools.hidden = true; ui.az.hidden = true;
    return;
  }
  ui.lede.textContent = `${M.terms.length} terms you will meet across the injury pages, defined conservatively and in standard clinical usage. Use the filter, jump by letter, or follow links to the injuries where each term matters.`;
  ui.input.value = S.q;
  ui.clear.hidden = !S.q;

  // names for related-injury links (index first; catalogue as a fallback for injuries that are not published yet)
  loadNames(ctx).then(() => { if (M && !M.gone) { M.namesReady = true; paint(); } });
  getEngine(ctx.store).then((e) => { if (M && !M.gone) { M.engine = e; if (S.q) paint(); } }).catch(() => {});
  if (params[0] && !M.byId.has(params[0])) { /* unknown deep link: show the full list */ }
  else if (params[0]) { S.q = ""; S.cat = "all"; ui.input.value = ""; ui.clear.hidden = true; }
  paint();
}

/** In-page deep-link changes (#glossary.<id> while already here): reveal, scroll and focus the term without a re-render. */
export function update(main, params) {
  if (!M || M.main !== main || !M.terms.length) return false;
  const id = params[0];
  if (!id || !M.byId.has(id)) return false;
  if (!document.getElementById(id)) { S.q = ""; S.cat = "all"; M.ui.input.value = ""; M.ui.clear.hidden = true; paint(); }
  const el = document.getElementById(id);
  if (!el) return false;
  const head = el.querySelector(".gl-name") || el;
  if (!head.hasAttribute("tabindex")) head.setAttribute("tabindex", "-1");
  el.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  head.focus({ preventScroll: true });
  return true;
}

export function destroy() {
  if (M) { M.gone = true; M.onInput?.cancel?.(); }
  M = null;
}

async function loadNames(ctx) {
  const names = M.names;
  try { for (const e of await ctx.store.index()) names.set(e.id, e.shortName || e.name); } catch { /* optional */ }
  const need = M.terms.some((t) => (t.seeAlso || []).some((id) => !names.has(id)));
  if (need) {
    try {
      const res = await fetch("content/catalogue.json");
      if (res.ok) for (const c of await res.json()) if (!names.has(c.id)) names.set(c.id, c.name.replace(/\s*\(.*?\)\s*/g, " ").replace(/\s+/g, " ").trim());
    } catch { /* optional */ }
  }
}
const nameOf = (id) => M.names.get(id) || id.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());

/* ------------------------------------------------------------------ shell */
function shell(ui) {
  ui.input = h("input", { id: "gl-q", class: "gl-input", type: "search", autocomplete: "off", spellcheck: "false", enterkeyhint: "search", placeholder: "Filter terms, e.g. enthesis, Lachman, LSI" });
  ui.clear = h("button", { type: "button", class: "gl-clear", "aria-label": "Clear filter", hidden: true }, icon("close", { size: 16 }));
  ui.lede = h("p", { class: "gl-lede" }, "Loading the glossary…");
  ui.count = h("p", { class: "gl-count", role: "status", "aria-live": "polite", "aria-atomic": "true" });
  ui.chips = h("ul", { class: "gl-chips", role: "list", "aria-label": "Filter by category" });
  ui.az = h("nav", { class: "gl-az", "aria-label": "Jump to letter" });
  ui.list = h("div", { class: "gl-list" });
  ui.tools = h("div", { class: "gl-tools" },
    h("div", { class: "gl-filter" },
      h("label", { class: "visually-hidden", for: "gl-q" }, "Filter glossary terms"),
      h("span", { class: "gl-filter-icon", "aria-hidden": "true" }, icon("search", { size: 18 })), ui.input, ui.clear),
    ui.chips);

  const onInput = debounce(() => { S.q = ui.input.value; paint(); }, 90);
  if (M) M.onInput = onInput;
  ui.input.addEventListener("input", () => { ui.clear.hidden = !ui.input.value; onInput(); });
  ui.input.addEventListener("keydown", (e) => { if (e.key === "Escape" && ui.input.value) { e.preventDefault(); ui.clear.click(); } });
  ui.clear.addEventListener("click", () => { ui.input.value = ""; ui.clear.hidden = true; onInput.cancel(); S.q = ""; paint(); ui.input.focus(); });

  return h("div", { class: "gl" },
    h("header", { class: "gl-head" }, h("p", { class: "eyebrow" }, "Reference"), h("h1", null, "Glossary"), ui.lede),
    ui.tools, ui.az, ui.count, ui.list);
}

/* ------------------------------------------------------------------ paint */
function paint() {
  if (!M || !M.terms.length) return;
  const { ui, terms } = M;
  const q = S.q.trim();
  let rows;
  if (q) {
    if (M.engine) rows = M.engine.searchGlossary(q, { limit: 400 }).map((r) => ({ term: M.byId.get(r.id) || r.term, ranges: r.nameRanges, matches: r.matches }));
    else {
      const f = q.toLowerCase();
      rows = terms.filter((t) => `${t.term} ${[].concat(t.aka || []).join(" ")} ${t.definition}`.toLowerCase().includes(f)).map((term) => ({ term, ranges: [], matches: [] }));
    }
  } else rows = terms.map((term) => ({ term, ranges: [], matches: [] }));

  // category chips (counts reflect the text filter)
  const counts = new Map();
  for (const r of rows) counts.set(r.term.category, (counts.get(r.term.category) || 0) + 1);
  if (S.cat !== "all" && !counts.has(S.cat)) S.cat = "all";
  const chip = (key, label, n) => h("li", null, h("button", { type: "button", class: "chip", "aria-pressed": String(S.cat === key), on: { click: () => { S.cat = key; paint(); } } }, label, h("span", { class: "chip__count" }, String(n))));
  const cats = GLOSSARY_CATEGORIES.filter(([id]) => counts.has(id));
  for (const id of counts.keys()) if (!cats.some(([c]) => c === id)) cats.push([id, CATEGORY_LABELS[id] || id]);
  ui.chips.replaceChildren(chip("all", "All", rows.length), ...cats.map(([id, label]) => chip(id, label, counts.get(id))));

  if (S.cat !== "all") rows = rows.filter((r) => r.term.category === S.cat);

  ui.count.replaceChildren();
  if (q || S.cat !== "all") {
    ui.count.append(h("strong", null, String(rows.length)), ` of ${terms.length} terms`, q ? ` match “${q}”` : "", S.cat !== "all" ? ` in ${CATEGORY_LABELS[S.cat] || S.cat}` : "");
  } else ui.count.append(h("strong", null, String(rows.length)), " terms");

  if (!rows.length) {
    ui.az.hidden = true;
    ui.list.replaceChildren(h("div", { class: "gl-empty" },
      h("p", null, `No glossary terms match “${q}”${S.cat !== "all" ? " in this category" : ""}.`),
      h("p", null, "Try a shorter word, or ", h("a", { href: `#search.${termSlug(q)}` }, "search the whole site"), ".")));
    return;
  }

  if (q) {
    ui.az.hidden = true;
    ui.list.replaceChildren(h("div", { class: "gl-flat" }, rows.map((r) => termNode(r))));
    return;
  }

  // grouped A–Z
  const groups = new Map();
  for (const r of rows) { const L = letterOf(r.term.term); (groups.get(L) || groups.set(L, []).get(L)).push(r); }
  const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  if (groups.has("#")) letters.unshift("#");
  ui.az.hidden = false;
  ui.az.replaceChildren(h("ul", { role: "list" }, letters.map((L) => h("li", null, groups.has(L)
    ? h("a", { href: `#gl-letter-${L === "#" ? "num" : L.toLowerCase()}`, "aria-label": `${L === "#" ? "Numbers" : L}, ${groups.get(L).length} terms` }, L)
    : h("span", { "aria-hidden": "true", class: "is-empty" }, L)))));
  ui.list.replaceChildren(...[...groups.keys()].sort((a, b) => (a === "#" ? -1 : b === "#" ? 1 : a.localeCompare(b))).map((L) =>
    h("section", { class: "gl-group", "aria-labelledby": `gl-letter-${L === "#" ? "num" : L.toLowerCase()}` },
      h("h2", { class: "gl-letter", id: `gl-letter-${L === "#" ? "num" : L.toLowerCase()}` }, L),
      h("div", { class: "gl-terms" }, groups.get(L).map((r) => termNode(r))))));
}

function termNode({ term: t, ranges, matches }) {
  const aka = [].concat(t.aka || []);
  const akaMatch = new Map((matches || []).filter((m) => m.field === "aka").map((m) => [m.text, m.ranges]));
  const defMatch = (matches || []).find((m) => m.field === "definition" && m.text === t.definition);
  const see = (t.seeAlso || []).filter(Boolean);
  return h("article", { class: "gl-term", id: t.id, "data-category": t.category || "" },
    h("h3", { class: "gl-name", tabindex: "-1" },
      h("span", { class: "gl-name-text" }, ranges?.length ? highlightNodes(t.term, ranges) : t.term),
      h("a", { class: "gl-anchor", href: `#glossary.${t.id}`, "aria-label": `Link to ${t.term}`, title: "Link to this term" }, icon("link", { size: 14 }))),
    aka.length ? h("p", { class: "gl-aka" }, h("span", { class: "gl-aka-k" }, "Also"), aka.map((a, i) => h("span", { class: "gl-aka-v" }, akaMatch.has(a) ? highlightNodes(a, akaMatch.get(a)) : a, i < aka.length - 1 ? ";" : ""))) : null,
    h("p", { class: "gl-def" }, defMatch ? highlightNodes(t.definition, defMatch.ranges) : t.definition),
    h("div", { class: "gl-meta" },
      t.category ? h("span", { class: "gl-cat" }, CATEGORY_LABELS[t.category] || t.category) : null,
      see.length ? h("ul", { class: "gl-see", role: "list", "aria-label": `Injuries related to ${t.term}` }, see.map((id) => h("li", null, h("a", { href: `#injury.${id}` }, nameOf(id))))) : null));
}
