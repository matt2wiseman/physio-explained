// #saved — favourites and recently viewed. OWNER: P6.
// Lists come from store.favourites / store.recent (localStorage, with an in-memory fallback). Each row can be removed,
// each list cleared; every removal offers Undo in an aria-live status line (no confirm() dialogs).

import { h, icon, plural } from "../util/dom.js";

let M = null;
export const title = () => "Saved injuries";

export async function render(main, params = [], ctx = {}) {
  destroy();
  const { store } = ctx;
  const inst = (M = { main, ctx, store, index: new Map(), off: [], undo: null, undoTimer: 0, cardFn: null });

  const root = h("section", { class: "sv", "aria-labelledby": "sv-title" },
    h("header", { class: "sv-head" },
      h("p", { class: "eyebrow" }, "Your shortlist"),
      h("h1", { id: "sv-title", tabindex: "-1" }, "Saved injuries"),
      h("p", { class: "lead sv-lead" }, "Injuries you have bookmarked, and the last ones you opened. Kept in this browser only.")),
    h("div", { class: "sv-loading", role: "status" }, "Loading…"));
  main.replaceChildren(root);
  inst.root = root;

  try {
    const entries = await store.index();
    for (const e of entries) inst.index.set(e.id, e);
  } catch { /* names fall back to ids */ }
  try { const mod = await import("../components/injury-card.js"); inst.cardFn = mod.injuryCard || mod.default; } catch { inst.cardFn = null; }
  if (M !== inst) return;

  inst.status = h("div", { class: "sv-status", role: "status", "aria-live": "polite" });
  inst.favHost = h("section", { class: "sv-section", "aria-labelledby": "sv-fav-h" });
  inst.recHost = h("section", { class: "sv-section", "aria-labelledby": "sv-rec-h" });
  const warn = store.storageAvailable && !store.storageAvailable()
    ? h("div", { class: "callout callout--warn" }, h("p", null, "This browser is blocking local storage, so saved items last only until you close the tab."))
    : null;
  root.querySelector(".sv-loading").replaceWith(...[warn, inst.status, inst.favHost, inst.recHost].filter(Boolean));
  draw(inst);

  const redraw = () => { if (M === inst) draw(inst); };
  for (const bus of [store.favourites, store.recent]) {
    try { const off = bus.onChange(redraw); if (typeof off === "function") inst.off.push(off); } catch { /* ignore */ }
  }
}

export function destroy() {
  if (!M) return;
  for (const off of M.off) { try { off(); } catch { /* ignore */ } }
  clearTimeout(M.undoTimer);
  M = null;
}

/* ------------------------------------------------------------------ drawing */
function draw(inst) {
  const keepFocus = document.activeElement?.dataset?.svKey || null;
  const favs = inst.store.favourites.list();
  const rec = inst.store.recent.list();
  inst.favHost.replaceChildren(...section(inst, {
    id: "sv-fav-h", heading: "Saved", kind: "fav", ids: favs, icon: "bookmark-filled",
    empty: ["Nothing saved yet", "Use the bookmark on any injury card or page to keep it here for quick access."],
    clearLabel: "Clear all saved"
  }));
  inst.recHost.replaceChildren(...section(inst, {
    id: "sv-rec-h", heading: "Recently viewed", kind: "rec", ids: rec, icon: "history",
    empty: ["No history yet", "Injuries you open will appear here, most recent first."],
    clearLabel: "Clear history"
  }));
  if (keepFocus) inst.root.querySelector(`[data-sv-key="${CSS.escape(keepFocus)}"]`)?.focus();
}

function section(inst, { id, heading, kind, ids, icon: ic, empty, clearLabel }) {
  const head = h("div", { class: "sv-section__head" },
    h("h2", { id }, heading, h("span", { class: "sv-count mono", "aria-label": plural(ids.length, "injury", "injuries") }, String(ids.length))),
    ids.length ? h("button", { type: "button", class: "btn btn--sm btn--ghost", "data-sv-key": `${kind}-clear`, on: { click: () => clearAll(inst, kind) } }, icon("trash"), clearLabel) : null);
  if (!ids.length) {
    return [head, h("div", { class: "sv-empty" },
      h("span", { class: "sv-empty__icon", "aria-hidden": "true" }, icon(ic, { size: 22 })),
      h("div", null, h("p", { class: "sv-empty__t" }, empty[0]), h("p", { class: "muted" }, empty[1]),
        h("p", { class: "cluster cluster--sm" },
          h("a", { class: "btn btn--sm", href: "#library" }, icon("grid"), "Browse the library"),
          h("a", { class: "btn btn--sm btn--ghost", href: "#bodymap" }, icon("body"), "Use the body map"))))];
  }
  return [head, h("ul", { class: "sv-list", role: "list" }, ids.map((rid) => h("li", null, row(inst, kind, rid))))];
}

function row(inst, kind, id) {
  const e = inst.index.get(id);
  const name = e ? e.shortName || e.name : id;
  const body = e && typeof inst.cardFn === "function"
    ? safeCard(inst, e, kind)
    : h("div", { class: "sv-missing" }, h("strong", null, e ? name : "Injury not available"),
      h("p", { class: "small muted" }, e ? "" : `“${id}” is not in the library (it may not be published yet).`));
  const actions = h("div", { class: "sv-actions" },
    e ? h("a", { class: "btn btn--sm", href: `#compare.${id}`, "aria-label": `Compare ${name} with another injury` }, icon("compare"), "Compare") : null,
    h("button", {
      type: "button", class: "btn btn--sm btn--ghost", "data-sv-key": `${kind}-rm-${id}`,
      "aria-label": kind === "fav" ? `Remove ${name} from saved` : `Remove ${name} from history`,
      on: { click: () => removeOne(inst, kind, id, name) }
    }, icon("close"), "Remove"));
  return h("div", { class: "sv-item" }, body, actions);
}

function safeCard(inst, e, kind) {
  try {
    // In the saved list the Remove button replaces the card's own bookmark toggle; in history the toggle lets you save.
    const n = inst.cardFn(e, { compact: true, favourite: kind !== "fav", headingLevel: 3 });
    if (n instanceof Node) return n;
  } catch (err) { console.warn("[saved] card failed", err); }
  return h("a", { class: "sv-fallback", href: `#injury.${e.id}` }, e.shortName || e.name);
}

/* ------------------------------------------------------------------ actions (with undo) */
function bus(inst, kind) { return kind === "fav" ? inst.store.favourites : inst.store.recent; }

function announce(inst, text, undo) {
  clearTimeout(inst.undoTimer);
  inst.undo = undo || null;
  inst.status.replaceChildren(h("p", { class: "sv-status__msg" }, text,
    undo ? h("button", { type: "button", class: "btn btn--sm sv-undo", on: { click: () => { const u = inst.undo; inst.undo = null; inst.status.replaceChildren(); u && u(); } } }, icon("restart"), "Undo") : null));
  inst.status.classList.toggle("is-on", true);
  inst.undoTimer = setTimeout(() => { inst.status.replaceChildren(); inst.undo = null; }, 12000);
}

function restore(inst, kind, ids) {
  // favourites.add / recent.push put the id first, so re-add in reverse to restore the original order
  const b = bus(inst, kind);
  for (const id of [...ids].reverse()) { if (kind === "fav") b.add(id); else b.push(id); }
}

function removeOne(inst, kind, id, name) {
  const before = bus(inst, kind).list();
  const at = before.indexOf(id);
  if (kind === "fav") inst.store.favourites.remove(id); else inst.store.recent.remove(id);
  announce(inst, `Removed ${name}.`, () => {
    const now = bus(inst, kind).list();
    const next = [...now]; next.splice(Math.min(at, next.length), 0, id);
    // rebuild the exact order
    if (kind === "fav") { inst.store.favourites.clear(); restore(inst, "fav", next); } else { inst.store.recent.clear(); restore(inst, "rec", next); }
  });
  // keep keyboard focus useful after the row disappears
  queueMicrotask(() => (inst.root.querySelector(`[data-sv-key^="${kind}-rm-"]`) || inst.root.querySelector("h1"))?.focus());
}

function clearAll(inst, kind) {
  const ids = bus(inst, kind).list();
  if (!ids.length) return;
  bus(inst, kind).clear();
  announce(inst, `${kind === "fav" ? "Cleared saved injuries" : "Cleared history"} (${ids.length}).`, () => {
    if (kind === "fav") { inst.store.favourites.clear(); restore(inst, "fav", ids); } else { inst.store.recent.clear(); restore(inst, "rec", ids); }
  });
  queueMicrotask(() => inst.root.querySelector("h1")?.focus());
}
