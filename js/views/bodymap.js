// #bodymap — interactive body navigator. OWNER: P6.
//   #bodymap  /  #bodymap.<region>   (region = any id in REGIONS; the hash follows the selection without re-rendering)
// A front/back figure (js/components/bodymap-svg.js) beside a panel listing the injuries in the chosen region.
// The panel stacks under the figure on small screens. Every region is also reachable from a plain list of chips.

import { h, icon, plural, REGIONS, BODY_AREAS, BODY_AREA_LABELS, bodyAreaOf } from "../util/dom.js";
import { bodyMap, regionLabel, viewOf } from "../components/bodymap-svg.js";

const URG_RANK = { emergency: 0, urgent: 1, routine: 2 };
const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });
const reduced = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } };

let M = null; // mounted instance

export const title = (params = []) => (REGIONS.includes(params[0]) ? `Body map: ${regionLabel(params[0])}` : "Body map");

export async function render(main, params = [], ctx = {}) {
  destroy();
  const { store, router } = ctx;
  const inst = (M = { main, ctx, region: null, view: "front", entries: [], counts: {}, map: null, cardFn: null });
  try { inst.view = store.prefs.get("bodymapView", "front") === "back" ? "back" : "front"; } catch { /* default */ }

  const root = h("section", { class: "bmv", "aria-labelledby": "bmv-title" },
    h("header", { class: "bmv-head" },
      h("p", { class: "eyebrow" }, "Navigate by anatomy"),
      h("h1", { id: "bmv-title", tabindex: "-1" }, "Body map"),
      h("p", { class: "lead bmv-lead" }, "Choose a region to see the injuries filed under it. Darker red means more injuries in the library.")),
    h("div", { class: "bmv-loading", role: "status" }, "Loading the library…"));
  main.replaceChildren(root);
  inst.root = root;

  let entries, meta = null;
  try {
    [entries, meta] = await Promise.all([store.index(), store.meta().catch(() => null)]);
  } catch (err) {
    if (M !== inst) return;
    root.querySelector(".bmv-loading").replaceWith(h("div", { class: "callout callout--danger", role: "alert" },
      h("p", { class: "callout__title" }, icon("warning", { size: 16 }), "The library could not be loaded"),
      h("p", null, "Check your connection and try again."),
      h("button", { type: "button", class: "btn btn--sm", on: { click: () => render(main, params, ctx) } }, icon("restart"), "Retry")));
    return;
  }
  if (M !== inst) return;
  inst.entries = Array.isArray(entries) ? entries : [];
  inst.total = Math.max(inst.entries.length, Number.isFinite(meta?.injuries) ? meta.injuries : 0);
  inst.planned = Number.isFinite(meta?.planned) ? meta.planned : null;
  for (const e of inst.entries) inst.counts[e.region] = (inst.counts[e.region] || 0) + 1;

  try { const mod = await import("../components/injury-card.js"); inst.cardFn = mod.injuryCard || mod.default; } catch { inst.cardFn = null; }
  if (M !== inst) return;

  const start = REGIONS.includes(params[0]) ? params[0] : null;
  build(inst, start);
}

/** Same view, different hash (back/forward, or a link to #bodymap.<region>): no re-render. */
export function update(main, params = []) {
  if (!M || !M.built) return false;
  const r = REGIONS.includes(params[0]) ? params[0] : null;
  choose(M, r, { fromHash: true });
  return true;
}

export function destroy() { M = null; }

/* ------------------------------------------------------------------ build */
function build(inst, startRegion) {
  const { root } = inst;
  inst.status = h("p", { class: "visually-hidden", role: "status", "aria-live": "polite" });
  inst.panel = h("section", { class: "bmv-panel", id: "bmv-panel", "aria-labelledby": "bmv-panel-h" });
  inst.figHost = h("div", { class: "bmv-fig" });

  const seg = (v, label) => h("button", {
    type: "button", class: "bmv-seg__btn", "data-view": v, "aria-pressed": String(inst.view === v),
    on: { click: () => setView(inst, v) }
  }, label);
  inst.segs = [seg("front", "Front"), seg("back", "Back")];

  const skip = h("a", {
    class: "bmv-skip", href: "#bmv-panel",
    on: { click: (e) => { e.preventDefault(); inst.panelHeading?.focus(); inst.panel.scrollIntoView({ block: "start", behavior: reduced() ? "auto" : "smooth" }); } }
  }, "Skip the body map to the injury list");

  const mapCol = h("div", { class: "bmv-map" },
    skip,
    h("div", { class: "bmv-toolbar" },
      h("div", { class: "bmv-seg", role: "group", "aria-label": "Body view" }, inst.segs),
      h("p", { class: "bmv-hint small muted" }, "Tap or press Enter on a region. ", h("span", { class: "hide-mobile" }, "Arrow keys move between regions."))),
    inst.figHost);

  root.querySelector(".bmv-loading").replaceWith(h("div", { class: "bmv-layout" }, mapCol, inst.panel), inst.status);
  inst.built = true;
  drawMap(inst);
  choose(inst, startRegion, { initial: true });
}

function drawMap(inst) {
  inst.map = bodyMap({
    view: inst.view, counts: inst.counts, selected: inst.region,
    onSelect: (r) => choose(inst, r, { fromMap: true })
  });
  inst.figHost.replaceChildren(inst.map);
}

function setView(inst, v, { silent = false } = {}) {
  if (inst.view === v && inst.map) return;
  inst.view = v;
  try { inst.ctx.store.prefs.set("bodymapView", v); } catch { /* ignore */ }
  inst.segs.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === v)));
  const focusedRegion = document.activeElement?.closest?.("[data-region]")?.dataset.region;
  drawMap(inst);
  if (!silent && focusedRegion) inst.map.focusRegion(focusedRegion);
}

/** Select a region (or null to clear). */
function choose(inst, region, { fromMap = false, fromHash = false, initial = false } = {}) {
  // toggling the same region from the map again clears it
  if (fromMap && region === inst.region) region = null;
  inst.region = region;
  const need = region && viewOf(region);
  if (need && need !== inst.view) setView(inst, need, { silent: true });
  inst.map?.update({ selected: region });
  inst.segs.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === inst.view)));
  renderPanel(inst);
  if (!fromHash && !initial) {
    try { inst.ctx.router.navigate(region ? `#bodymap.${region}` : "#bodymap", { replace: true, silent: true }); } catch { /* ignore */ }
    try { document.title = `${title([region])} · Physio Explained`; } catch { /* ignore */ }
  }
  if (region) {
    const n = inst.counts[region] || 0;
    inst.status.textContent = `${regionLabel(region)}: ${n ? plural(n, "injury", "injuries") : "no injuries published yet"}.`;
    // On stacked (mobile) layouts the list sits below the figure: bring it into view.
    if (fromMap && !initial) {
      const r = inst.panel.getBoundingClientRect();
      if (r.top > innerHeight * 0.8) inst.panel.scrollIntoView({ block: "start", behavior: reduced() ? "auto" : "smooth" });
    }
  } else if (!initial) inst.status.textContent = "Selection cleared.";
}

/* ------------------------------------------------------------------ panel */
function sortEntries(list) {
  return [...list].sort((a, b) =>
    (URG_RANK[a.urgency] ?? 3) - (URG_RANK[b.urgency] ?? 3) || collator.compare(a.shortName || a.name, b.shortName || b.name));
}

function fallbackRow(e) {
  return h("article", { class: "bmv-row" },
    h("a", { class: "bmv-row__name", href: `#injury.${e.id}` }, e.shortName || e.name),
    h("span", { class: `badge badge--${e.urgency === "emergency" ? "danger" : e.urgency === "urgent" ? "warn" : "ok"}` }, e.urgency || "routine"),
    e.summary ? h("p", { class: "bmv-row__sum small muted" }, e.summary) : null);
}

function regionChips(inst, { exclude } = {}) {
  const groups = Object.entries(BODY_AREAS);
  return h("div", { class: "bmv-areas" }, groups.map(([area, regs]) => {
    const list = regs.filter((r) => r !== exclude);
    if (!list.length) return null;
    return h("div", { class: "bmv-area" },
      h("h3", { class: "bmv-area__h" }, BODY_AREA_LABELS?.[area] || area),
      h("ul", { class: "bmv-chips", role: "list" }, list.map((r) => {
        const n = inst.counts[r] || 0;
        return h("li", null, h("button", {
          type: "button", class: "chip", "aria-pressed": String(inst.region === r),
          on: { click: () => choose(inst, r, { fromMap: false }) }
        }, regionLabel(r), h("span", { class: "chip__count", "aria-label": plural(n, "injury", "injuries") }, String(n))));
      })));
  }));
}

function renderPanel(inst) {
  const { region } = inst;
  const kids = [];
  if (!region) {
    kids.push(
      h("header", { class: "bmv-panel__head" },
        h("p", { class: "eyebrow" }, "All regions"),
        h("h2", { id: "bmv-panel-h", tabindex: "-1" }, "Pick a region"),
        h("p", { class: "muted" }, `${plural(inst.total, "injury", "injuries")} in the library${inst.planned && inst.planned > inst.total ? `, of ${inst.planned} planned` : ""}.`)),
      regionChips(inst));
  } else {
    const list = sortEntries(inst.entries.filter((e) => e.region === region));
    const area = bodyAreaOf(region);
    kids.push(
      h("header", { class: "bmv-panel__head" },
        h("p", { class: "eyebrow" }, BODY_AREA_LABELS?.[area] || area),
        h("div", { class: "bmv-panel__title" },
          h("h2", { id: "bmv-panel-h", tabindex: "-1" }, regionLabel(region)),
          h("span", { class: "badge badge--tissue bmv-count" }, plural(list.length, "injury", "injuries"))),
        h("div", { class: "cluster cluster--sm bmv-actions" },
          h("a", { class: "btn btn--sm btn--primary", href: `#library.${region}` }, "Open in the library", icon("arrow-right")),
          h("button", { type: "button", class: "btn btn--sm btn--ghost", on: { click: () => choose(inst, null) } }, icon("close"), "Clear selection"))));
    if (list.length) {
      kids.push(h("ul", { class: "bmv-list", role: "list" }, list.map((e) => h("li", null, card(inst, e)))));
    } else {
      kids.push(h("div", { class: "callout callout--info bmv-empty" },
        h("p", { class: "callout__title" }, icon("info", { size: 16 }), "No injuries published here yet"),
        h("p", null, `${regionLabel(region)} is on the list${inst.planned ? ` (${inst.planned} injuries are planned across the library)` : ""}, but no write-up has been published for it. Try a neighbouring region below, or browse everything.`),
        h("a", { class: "btn btn--sm", href: "#library" }, "Browse the whole library")));
    }
    kids.push(h("details", { class: "bmv-other" },
      h("summary", null, "Other regions"),
      regionChips(inst, { exclude: region })));
  }
  inst.panel.replaceChildren(...kids);
  inst.panelHeading = inst.panel.querySelector("#bmv-panel-h");
}

function card(inst, e) {
  if (typeof inst.cardFn === "function") {
    try { const n = inst.cardFn(e, { compact: true, headingLevel: 3 }); if (n instanceof Node) return n; } catch (err) { console.warn("[bodymap] card failed", err); }
  }
  return fallbackRow(e);
}
