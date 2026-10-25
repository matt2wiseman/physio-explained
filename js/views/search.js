// Search results page — #search and #search.<terms-joined-by-hyphens>. OWNER: P5.
//
// The big query field is synced with the hash (router.navigate silent+replace while typing, silent push on Enter, and
// update() handles hash changes from the header box without a re-render). Results reuse P3's injuryCard, augmented with
// highlighted names and a "matched:" line; they can be narrowed with body-area chips (counts come from the unfiltered
// results). Glossary definitions that match appear in their own section. "Did you mean" for near-misses; an empty state with
// popular searches, how-to-search hints and browse-by-region links. The result count lives in an aria-live status line.

import { h, icon, debounce, REGIONS, BODY_AREAS } from "../util/dom.js";
import { injuryCard } from "../components/injury-card.js";
import { getEngine, highlightNodes, queryToSlug, slugToQuery, BODY_AREA_LABELS, BODY_AREA_ORDER, REGION_LABELS, CATEGORY_LABELS, areaOf, POPULAR } from "../search/engine.js";

const PAGE = 24;
const S = { q: "", area: "all", shown: PAGE };
let M = null; // mounted instance

export const title = (params) => {
  const q = slugToQuery(params[0] || "");
  return q ? `Search: ${q}` : "Search";
};

const hashFor = (q) => { const s = queryToSlug(q); return s ? `#search.${s}` : "#search"; };

/* ------------------------------------------------------------------ lifecycle */
export async function render(main, params, ctx) {
  destroy();
  S.q = slugToQuery(params[0] || "");
  S.area = "all";
  S.shown = PAGE;
  const ui = {};
  M = { main, ctx, ui, engine: null, gone: false };
  main.append(shell(ui, ctx));
  ui.input.value = S.q;
  ui.clear.hidden = !S.q;
  ui.results.append(h("div", { class: "srch-skeleton", "aria-hidden": "true" }));
  try {
    M.engine = await getEngine(ctx.store);
  } catch (err) {
    console.error("[search] index failed to load", err);
    ui.results.replaceChildren(h("div", { class: "srch-error", role: "alert" }, "The injury index couldn’t be loaded, so search is unavailable. ", h("a", { href: "#library" }, "Browse the library instead.")));
    return;
  }
  if (M?.gone) return;
  run();
  // the router focuses the <h1> after render; on an empty search page hand focus to the field
  if (!S.q) setTimeout(() => {
    const a = document.activeElement;
    if (!M || M.gone) return;
    if (!a || a === document.body || a === main || a.matches?.("h1")) ui.input.focus({ preventScroll: true });
  }, 160);
}

/** Header-box submissions while already on #search land here: no re-render, just update the page. */
export function update(main, params) {
  if (!M || M.main !== main || !M.engine) return false;
  S.q = slugToQuery(params[0] || "");
  S.area = "all";
  S.shown = PAGE;
  M.ui.input.value = S.q;
  M.ui.clear.hidden = !S.q;
  run({ mirror: false });
  document.title = `${title(params)} · Physio Explained`;
  return true;
}

export function destroy() {
  if (M) { M.gone = true; M.onInput?.cancel?.(); }
  M = null;
}

/* ------------------------------------------------------------------ shell */
function shell(ui, ctx) {
  ui.input = h("input", {
    id: "srch-q", class: "srch-input", type: "search", autocomplete: "off", autocapitalize: "off", spellcheck: "false", enterkeyhint: "search",
    placeholder: "Injury, nickname, special test, structure, sport…", "data-search-primary": "", "aria-describedby": "srch-hint"
  });
  ui.clear = h("button", { type: "button", class: "srch-clear", "aria-label": "Clear search", hidden: true }, icon("close", { size: 18 }));
  ui.form = h("form", { class: "srch-form", role: "search", "aria-label": "Search the site" },
    h("span", { class: "srch-form-icon", "aria-hidden": "true" }, icon("search", { size: 22 })), ui.input, ui.clear);
  ui.status = h("p", { class: "srch-count", role: "status", "aria-live": "polite", "aria-atomic": "true" });
  ui.dym = h("p", { class: "srch-dym", hidden: true });
  ui.chips = h("ul", { class: "srch-chips", role: "list", "aria-label": "Filter results by body area", hidden: true });
  ui.results = h("div", { class: "srch-body" });

  let t = 0;
  const onInput = debounce(() => {
    S.q = ui.input.value;
    S.area = "all"; S.shown = PAGE;
    run({ mirror: "replace" });
  }, 110);
  if (M) M.onInput = onInput;
  ui.input.addEventListener("input", () => { ui.clear.hidden = !ui.input.value; onInput(); });
  ui.form.addEventListener("submit", (e) => {
    e.preventDefault();
    onInput.cancel();
    S.q = ui.input.value; S.area = "all"; S.shown = PAGE;
    run({ mirror: "push" });
    ui.input.blur();
  });
  ui.clear.addEventListener("click", () => {
    ui.input.value = ""; ui.clear.hidden = true; onInput.cancel();
    S.q = ""; S.area = "all";
    run({ mirror: "replace" });
    ui.input.focus();
  });
  void t; void ctx;

  return h("div", { class: "srch" },
    h("header", { class: "srch-head" },
      h("p", { class: "eyebrow" }, "Find"),
      h("h1", null, "Search"),
      ui.form,
      h("p", { class: "srch-hint", id: "srch-hint" }, "Try a nickname (", h("em", null, "shin splints"), "), a special test (", h("em", null, "Lachman"), "), a structure (", h("em", null, "labrum"), ") or a sport (", h("em", null, "netball"), "). Spelling variants and small typos are fine.")),
    h("div", { class: "srch-status" }, ui.status, ui.dym),
    ui.chips,
    ui.results);
}

/* ------------------------------------------------------------------ run a search and paint */
function run({ mirror = false } = {}) {
  if (!M?.engine) return;
  const { engine, ui, ctx } = M;
  const q = S.q.trim();
  if (mirror) {
    try { ctx.router.navigate(hashFor(q), mirror === "push" ? { silent: true } : { replace: true, silent: true }); } catch { /* sandboxed frames: the box still works */ }
    document.title = `${title([queryToSlug(q)])} · Physio Explained`;
  }
  if (!q) { paintStart(); return; }

  const all = engine.search(q, { limit: 500 });
  const terms = engine.searchGlossary(q, { limit: 8 });
  const areaCounts = new Map();
  for (const r of all) { const a = areaOf(r.entry); areaCounts.set(a, (areaCounts.get(a) || 0) + 1); }
  if (S.area !== "all" && !areaCounts.has(S.area)) S.area = "all";
  const hits = S.area === "all" ? all : all.filter((r) => areaOf(r.entry) === S.area);

  // status line (live region)
  const parts = [];
  if (all.length) parts.push(`${all.length} ${all.length === 1 ? "injury" : "injuries"}`);
  if (terms.length) parts.push(`${terms.length} glossary ${terms.length === 1 ? "definition" : "definitions"}`);
  ui.status.replaceChildren();
  if (parts.length) {
    ui.status.append(h("strong", null, parts.join(" and ")), ` match “${q}”`);
    if (S.area !== "all") ui.status.append(` · showing ${hits.length} in ${BODY_AREA_LABELS[S.area].toLowerCase()}`);
  } else ui.status.append(`No results for “${q}”.`);

  // did you mean
  const dym = engine.didYouMean(q);
  if (dym && (all.length < 4 || all[0]?.partial) && dym.toLowerCase() !== q.toLowerCase()) {
    ui.dym.hidden = false;
    ui.dym.replaceChildren("Did you mean ", h("button", { type: "button", on: { click: () => useQuery(dym) } }, dym), "?");
  } else ui.dym.hidden = true;

  paintChips(areaCounts, all.length);

  const out = [];
  if (hits.length) out.push(injurySection(hits));
  if (terms.length) out.push(termSection(terms));
  if (!all.length && !terms.length) out.push(noResults(q));
  ui.results.replaceChildren(...out);
}

function useQuery(text) {
  S.q = text; S.area = "all"; S.shown = PAGE;
  M.ui.input.value = text; M.ui.clear.hidden = !text;
  run({ mirror: "push" });
  M.ui.input.focus();
}

/* ------------------------------------------------------------------ pieces */
function paintChips(areaCounts, total) {
  const { ui } = M;
  const present = BODY_AREA_ORDER.filter((a) => areaCounts.has(a));
  if (present.length < 2) { ui.chips.hidden = true; ui.chips.replaceChildren(); return; }
  ui.chips.hidden = false;
  const chip = (key, label, n) => h("li", null, h("button", {
    type: "button", class: "chip", "aria-pressed": String(S.area === key),
    on: { click: () => { S.area = key; S.shown = PAGE; run(); } }
  }, label, h("span", { class: "chip__count" }, String(n))));
  ui.chips.replaceChildren(chip("all", "All", total), ...present.map((a) => chip(a, BODY_AREA_LABELS[a], areaCounts.get(a))));
}

function resultItem(hit) {
  const card = injuryCard(hit.entry, { headingLevel: 3 });
  const link = card.querySelector(".ic-link");
  if (link && hit.nameRanges?.length) link.replaceChildren(highlightNodes(hit.entry.name, hit.nameRanges));
  const extras = hit.matches.filter((m) => m.field !== "name" && m.field !== "shortName").slice(0, 2);
  if (extras.length) {
    const why = h("p", { class: "srch-why" }, h("span", { class: "srch-key" }, "matched:"),
      extras.map((m) => h("span", { class: "srch-why-item" }, h("span", { class: "srch-field" }, m.label.toLowerCase()), highlightNodes(m.text, m.ranges))));
    const body = card.querySelector(".ic-body");
    const summary = body?.querySelector(".ic-summary");
    if (summary) summary.after(why); else body?.append(why);
  }
  return h("li", null, card);
}

function injurySection(hits) {
  const full = hits.filter((r) => !r.partial);
  const part = hits.filter((r) => r.partial);
  let budget = S.shown;
  const sub = (list, heading, note) => {
    if (!list.length || budget <= 0) return null;
    const slice = list.slice(0, budget);
    budget -= slice.length;
    return h("div", { class: "srch-sub" },
      heading ? h("h3", null, heading) : null, note ? h("p", { class: "srch-sub-note" }, note) : null,
      h("ul", { class: "srch-grid", role: "list" }, slice.map(resultItem)));
  };
  const blocks = [sub(full, part.length && full.length ? "Best matches" : null), sub(part, full.length ? "Partial matches" : null, full.length ? "These contain only some of your words." : "None contains every word you typed; these match part of it.")];
  const remaining = hits.length - S.shown;
  return h("section", { class: "srch-sec", "aria-labelledby": "srch-inj-h" },
    h("div", { class: "srch-sec-head" }, h("h2", { id: "srch-inj-h" }, "Injuries"), h("span", { class: "srch-sec-n" }, String(hits.length))),
    ...blocks,
    remaining > 0 ? h("button", { type: "button", class: "btn srch-more", on: { click: () => { S.shown += PAGE; run(); } } }, `Show ${Math.min(PAGE, remaining)} more`) : null);
}

function termSection(terms) {
  return h("section", { class: "srch-sec", "aria-labelledby": "srch-term-h" },
    h("div", { class: "srch-sec-head" }, h("h2", { id: "srch-term-h" }, "Definitions"), h("span", { class: "srch-sec-n" }, String(terms.length)),
      h("a", { class: "small", href: "#glossary" }, "Open the glossary")),
    h("ul", { class: "srch-terms", role: "list" }, terms.map((t) => h("li", null,
      h("a", { class: "srch-term", href: t.href },
        h("span", { class: "srch-term-name" }, highlightNodes(t.term.term, t.nameRanges)),
        h("span", { class: "srch-term-cat" }, CATEGORY_LABELS[t.term.category] || t.term.category || ""),
        h("span", { class: "srch-term-def" }, t.term.definition))))));
}

function noResults(q) {
  const { engine } = M;
  return h("section", { class: "srch-block", "aria-labelledby": "srch-none-h" },
    h("h2", { id: "srch-none-h" }, "Nothing matched"),
    h("p", null, `We couldn’t find “${q}”. Try fewer or simpler words, a body region (knee, shoulder), or a common name.`),
    popularList(engine),
    h("p", null, h("a", { href: "#library" }, "Browse the whole library"), " or ", h("a", { href: "#bodymap" }, "point at the body map"), "."));
}

function popularList(engine) {
  const pops = engine.popular(8);
  const list = pops.length ? pops.map((p) => p.label) : POPULAR.slice(0, 6);
  return h("ul", { class: "srch-pops", role: "list", "aria-label": "Popular searches" },
    list.map((label) => h("li", null, h("a", { class: "chip", href: hashFor(label) }, label))));
}

function paintStart() {
  const { ui, engine } = M;
  ui.status.textContent = "";
  ui.dym.hidden = true;
  ui.chips.hidden = true;
  const counts = new Map();
  for (const e of engine.entries) counts.set(e.region, (counts.get(e.region) || 0) + 1);
  const groups = BODY_AREA_ORDER.map((a) => {
    const regions = (BODY_AREAS?.[a] || []).filter((r) => counts.get(r));
    if (!regions.length) return null;
    return h("div", { class: "srch-region-group" }, h("h3", null, BODY_AREA_LABELS[a]),
      h("ul", { class: "srch-region-links", role: "list" }, regions.map((r) => h("li", null,
        h("a", { class: "chip", href: `#library.${r}` }, REGION_LABELS[r] || r, h("span", { class: "chip__count" }, String(counts.get(r))))))));
  }).filter(Boolean);
  const by = (k, v, d) => h("li", null, h("span", { class: "srch-by-k" }, k), h("span", { class: "srch-by-v" }, v), h("span", { class: "srch-by-d" }, d));
  ui.results.replaceChildren(h("div", { class: "srch-start" },
    h("section", { class: "srch-block", "aria-labelledby": "srch-pop-h" }, h("h2", { id: "srch-pop-h" }, "Popular searches"), popularList(engine)),
    h("section", { class: "srch-block", "aria-labelledby": "srch-by-h" }, h("h2", { id: "srch-by-h" }, "What you can search by"),
      h("ul", { class: "srch-by", role: "list" },
        by("Name or nickname", "ACL, tennis elbow, dead leg", "Common names and abbreviations point to the right injury."),
        by("Special test", "Lachman, Thessaly, Ottawa rules", "Find the injuries a test is used for."),
        by("Structure", "labrum, syndesmosis, scaphoid", "Anatomy named in each injury page."),
        by("Sport or group", "netball, rowers, adolescent", "Who gets it and which sports are at risk."))),
    groups.length ? h("section", { class: "srch-block", "aria-labelledby": "srch-reg-h" }, h("h2", { id: "srch-reg-h" }, "Browse by region"), h("div", { class: "srch-regions" }, groups)) : null));
}
