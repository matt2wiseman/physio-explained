// Header search box: an ARIA 1.2 combobox with typeahead. OWNER: P5.
//
//   mountSearchbox(container, { autofocus, onSubmit, placeholder }) → { input, focus(), clear(), destroy() }
//
// Typing shows up to 6 suggestions (injury name + region + why it matched, e.g. "matched: Lachman test"; glossary
// definitions can appear too) and a final "Search all results for …" row. ↑/↓ move, Enter opens the active row (or runs
// the full search), Esc closes then clears, "/" (or Ctrl/⌘+K) focuses the box from anywhere except while typing in a field.
// Enter with no active row goes to #search.<terms-joined-by-hyphens>. With an empty box, focusing offers popular searches.
// Styles: css/components/search.css (.sbx*).

import { h, icon } from "../util/dom.js";
import { store } from "../store.js";
import { router } from "../router.js";
import { getEngine, highlightNodes, queryToSlug, REGION_LABELS } from "../search/engine.js";

let uid = 0;
const WHY_KEY = { aka: "also known as", tests: "test", structures: "structure", synonym: "also called", differentials: "differential", sports: "sport", populations: "population", tissues: "tissue", region: "region", keyFacts: "fact", summary: "summary", mechanism: "mechanism" };

const searchHash = (q) => { const s = queryToSlug(q); return s ? `#search.${s}` : "#search"; };

export function mountSearchbox(container, { autofocus = false, onSubmit = null, placeholder = "Search injuries, tests, terms…" } = {}) {
  const n = ++uid;
  const inputId = `sbx-input-${n}`, listId = `sbx-list-${n}`, optId = (i) => `sbx-${n}-opt-${i}`;
  let engine = null, enginePromise = null, rows = [], active = -1, open = false, lastQuery = null, destroyed = false;
  const cleanups = [];

  const input = h("input", {
    id: inputId, class: "sbx-input", type: "text", role: "combobox", autocomplete: "off", autocapitalize: "off", spellcheck: "false",
    enterkeyhint: "search", placeholder, "aria-autocomplete": "list", "aria-expanded": "false", "aria-controls": listId,
    "aria-haspopup": "listbox", "aria-keyshortcuts": "/", "aria-label": "Search injuries, tests and glossary terms"
  });
  const clearBtn = h("button", { type: "button", class: "sbx-clear", "aria-label": "Clear search", hidden: true, tabindex: "-1" }, icon("close", { size: 16 }));
  const kbd = h("kbd", { class: "sbx-kbd", "aria-hidden": "true" }, "/");
  const list = h("ul", { id: listId, class: "sbx-list", role: "listbox", "aria-label": "Search suggestions", hidden: true });
  const live = h("div", { class: "visually-hidden", role: "status", "aria-live": "polite", "aria-atomic": "true" });
  const form = h("form", { class: "sbx-form", role: "search", action: "#search", autocomplete: "off" },
    h("span", { class: "sbx-icon", "aria-hidden": "true" }, icon("search", { size: 18 })), input, clearBtn, kbd);
  const root = h("div", { class: "sbx" }, form, list, live);
  container.append(root);

  /* ---------- engine ---------- */
  function load() {
    if (!enginePromise) enginePromise = getEngine(store).then((e) => { engine = e; return e; }).catch((err) => { console.warn("[search] index unavailable", err); enginePromise = null; return null; });
    return enginePromise;
  }

  /* ---------- rendering ---------- */
  function setOpen(v) {
    open = v;
    list.hidden = !v;
    input.setAttribute("aria-expanded", String(v));
    root.classList.toggle("is-open", v);
    if (!v) { active = -1; input.removeAttribute("aria-activedescendant"); }
  }
  function setActive(i, { scroll = true } = {}) {
    active = i;
    rows.forEach((r, k) => { r.el.setAttribute("aria-selected", String(k === i)); r.el.classList.toggle("is-active", k === i); });
    if (i >= 0 && rows[i]) {
      input.setAttribute("aria-activedescendant", rows[i].el.id);
      if (scroll) rows[i].el.scrollIntoView({ block: "nearest" });
    } else input.removeAttribute("aria-activedescendant");
  }

  function whyNode(hit) {
    if (hit.kind === "term") {
      const d = hit.term.definition || "";
      return h("span", { class: "sbx-why" }, h("span", { class: "sbx-key" }, "definition"), " ", d.length > 90 ? d.slice(0, 88).trimEnd() + "…" : d);
    }
    const m = hit.why;
    if (!m) return null;
    return h("span", { class: "sbx-why" }, h("span", { class: "sbx-key" }, "matched:"), " ", h("span", { class: "sbx-why-text" }, highlightNodes(m.text, m.ranges)), WHY_KEY[m.field] && m.field !== "tests" ? h("span", { class: "sbx-why-field" }, ` (${WHY_KEY[m.field]})`) : null);
  }

  function optionRow(i, href, mainNodes, metaNodes, extraClass = "") {
    const a = h("a", { class: "sbx-opt", href, tabindex: "-1" }, mainNodes, metaNodes);
    const li = h("li", { id: optId(i), class: `sbx-item ${extraClass}`.trim(), role: "option", "aria-selected": "false" }, a);
    return { el: li, href };
  }

  function render(q, hits, { loading = false } = {}) {
    rows = [];
    const frag = document.createDocumentFragment();
    const push = (r) => { rows.push(r); frag.append(r.el); };
    const query = q.trim();
    if (!query) {
      // empty box: popular searches
      const pops = engine ? engine.popular(6) : [];
      if (pops.length) {
        frag.append(h("li", { class: "sbx-group", role: "presentation" }, "Popular searches"));
        pops.forEach((p, i) => push(optionRow(rows.length, searchHash(p.label), h("span", { class: "sbx-main" }, p.label), h("span", { class: "sbx-meta" }, h("span", { class: "sbx-region" }, p.entry.shortName || p.entry.name)), "sbx-item--popular")));
      } else if (loading) frag.append(h("li", { class: "sbx-empty", role: "presentation" }, "Loading the injury index…"));
      else return null;
      list.replaceChildren(frag);
      return pops.length;
    }
    hits.forEach((hit) => {
      if (hit.kind === "term") {
        push(optionRow(rows.length, hit.href,
          h("span", { class: "sbx-main" }, highlightNodes(hit.term.term, hit.nameRanges)),
          h("span", { class: "sbx-meta" }, h("span", { class: "sbx-tag" }, "Glossary"), whyNode(hit)), "sbx-item--term"));
      } else {
        const e = hit.entry;
        push(optionRow(rows.length, hit.href,
          h("span", { class: "sbx-main" }, highlightNodes(e.name, hit.nameRanges)),
          h("span", { class: "sbx-meta" }, h("span", { class: "sbx-region" }, REGION_LABELS[e.region] || e.region),
            e.urgency === "emergency" || e.urgency === "urgent" ? h("span", { class: "sbx-urg" }, e.urgency) : null, whyNode(hit)),
          e.urgency === "emergency" ? "sbx-item--emergency" : e.urgency === "urgent" ? "sbx-item--urgent" : ""));
      }
    });
    if (!hits.length) frag.append(h("li", { class: "sbx-empty", role: "presentation" }, loading ? "Searching…" : `No quick matches for “${query}”`));
    push(optionRow(rows.length, searchHash(query), h("span", { class: "sbx-main" }, "Search all results for ", h("strong", null, `“${query}”`)), h("span", { class: "sbx-meta" }, h("kbd", { "aria-hidden": "true" }, "↵")), "sbx-item--all"));
    list.replaceChildren(frag);
    return hits.length;
  }

  function announce(count, query) {
    if (!query) return;
    live.textContent = count ? `${count} suggestion${count === 1 ? "" : "s"}. Use up and down arrows to review, Enter to open.` : "No quick matches. Press Enter to search all results.";
  }

  async function update() {
    const q = input.value;
    clearBtn.hidden = !q;
    kbd.hidden = !!q;
    lastQuery = q;
    if (!engine) { render(q, [], { loading: true }); if (rows.length || q.trim()) setOpen(true); await load(); if (destroyed || lastQuery !== q) return; }
    if (!engine) { // index failed: still allow the full search
      render(q, [], {}); setOpen(!!q.trim()); return;
    }
    const trimmed = q.trim();
    const hits = trimmed.length >= 2 ? engine.suggest(trimmed, { limit: 6 }) : [];
    const shown = render(trimmed.length >= 2 ? q : "", hits);
    if (trimmed.length === 1 || (!trimmed && shown == null)) { setOpen(false); return; }
    setOpen(true);
    setActive(-1);
    announce(hits.length, trimmed);
  }

  /* ---------- actions ---------- */
  function go(href) {
    setOpen(false);
    input.value = "";
    clearBtn.hidden = true; kbd.hidden = false;
    input.blur();
    router.navigate(href);
  }
  function submit() {
    const q = input.value.trim();
    if (typeof onSubmit === "function") { onSubmit(q); setOpen(false); return; }
    go(searchHash(q));
  }
  function activate(i) {
    const r = rows[i];
    if (!r) return submit();
    if (typeof onSubmit === "function" && r.el.classList.contains("sbx-item--all")) return submit();
    go(r.href);
  }

  /* ---------- events ---------- */
  input.addEventListener("input", update);
  input.addEventListener("focus", () => { load(); update(); });
  input.addEventListener("keydown", (e) => {
    if (e.isComposing) return;
    const count = rows.length;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) { update(); return; }
        if (count) setActive(active < count - 1 ? active + 1 : 0);
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) { update(); return; }
        if (count) setActive(active > 0 ? active - 1 : count - 1);
        break;
      case "Enter":
        e.preventDefault();
        if (open && active >= 0) activate(active); else submit();
        break;
      case "Escape":
        if (open) { e.preventDefault(); setOpen(false); }
        else if (input.value) { e.preventDefault(); input.value = ""; update(); }
        else input.blur();
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
    }
  });
  form.addEventListener("submit", (e) => { e.preventDefault(); submit(); });
  clearBtn.addEventListener("click", () => { input.value = ""; input.focus(); update(); });
  // keep focus in the input while the pointer is on the list; a click follows the real <a href>
  list.addEventListener("pointerdown", (e) => { e.preventDefault(); });
  list.addEventListener("click", (e) => {
    const li = e.target.closest?.(".sbx-item");
    if (!li) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    activate(rows.findIndex((r) => r.el === li));
  });
  list.addEventListener("pointermove", (e) => {
    const li = e.target.closest?.(".sbx-item");
    if (!li) return;
    const i = rows.findIndex((r) => r.el === li);
    if (i !== active) setActive(i, { scroll: false });
  });
  root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) setOpen(false); });

  const onDocKey = (e) => {
    const isSlash = e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey;
    const isK = (e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey) && !e.altKey;
    if (!isSlash && !isK) return;
    const t = e.target;
    if (isSlash && t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    e.preventDefault();
    // on the #search page the big page input is the primary field
    const primary = document.querySelector("input[data-search-primary]");
    const target = primary && primary.offsetParent !== null ? primary : input;
    if (target.offsetParent === null) { router.navigate("#search"); return; } // header box hidden at this width
    target.focus();
    target.select();
  };
  document.addEventListener("keydown", onDocKey);
  cleanups.push(() => document.removeEventListener("keydown", onDocKey));
  const onDocPointer = (e) => { if (open && !root.contains(e.target)) setOpen(false); };
  document.addEventListener("pointerdown", onDocPointer);
  cleanups.push(() => document.removeEventListener("pointerdown", onDocPointer));
  cleanups.push(router.onChange(() => { setOpen(false); if (document.activeElement === input) input.blur(); input.value = ""; clearBtn.hidden = true; kbd.hidden = false; }));

  // warm the index when the user shows intent
  root.addEventListener("pointerenter", load, { once: true });
  if (autofocus) queueMicrotask(() => input.focus());

  return {
    input,
    focus: () => input.focus(),
    clear: () => { input.value = ""; update(); },
    destroy() { destroyed = true; cleanups.forEach((fn) => { try { fn(); } catch { /* ignore */ } }); root.remove(); }
  };
}

export default mountSearchbox;
