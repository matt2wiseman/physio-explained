// Exercise program widget. OWNER: P6.
//
//   exerciseProgram(injury) → Element
//
// Stage stepper (ARIA tabs: arrows / Home / End, roving tabindex) → per-stage goals, precautions, exercise cards
// and a "Criteria to progress" checklist. Exercise illustrations come from renderFigure() in js/anim/rig.js,
// imported lazily the first time a stage is shown; if the rig (or a pose) is unavailable the card shows a neutral
// placeholder. On print every stage is shown and the stepper is hidden.

import { h, icon } from "../util/dom.js";

let uid = 0;
let rigPromise = null;
const loadRig = () => (rigPromise ||= import("../anim/rig.js").then((m) => (typeof m.renderFigure === "function" ? m.renderFigure : null), () => null));

const arr = (v) => (Array.isArray(v) ? v : []);
const str = (v) => (v == null ? "" : String(v));
const pad2 = (n) => String(n).padStart(2, "0");

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

function placeholder(label) {
  return h("div", { class: "xp__ph", role: "img", "aria-label": label || "No illustration available" },
    icon("dumbbell", { size: 34 }), h("span", null, "No illustration"));
}

function fillFigures(panel) {
  if (panel.dataset.figs === "1") return;
  panel.dataset.figs = "1";
  const slots = [...panel.querySelectorAll(".xp__fig[data-pose]")];
  if (!slots.length) return;
  loadRig().then((renderFigure) => {
    for (const slot of slots) {
      let node = null;
      if (renderFigure) {
        try {
          const props = slot.dataset.props ? slot.dataset.props.split(",").filter(Boolean) : [];
          node = renderFigure({ view: slot.dataset.view || "lateral", pose: slot.dataset.pose, props, width: 160, height: 120 });
        } catch { node = null; }
      }
      if (node instanceof Node) {
        node.classList?.add("xp__svg");
        node.removeAttribute?.("width"); node.removeAttribute?.("height");
        slot.replaceChildren(node);
      } else slot.replaceChildren(placeholder(slot.dataset.label));
    }
  });
}

function exerciseCard(ex, i, ctx) {
  const fig = ex?.figure && typeof ex.figure === "object" && ex.figure.pose ? ex.figure : null;
  const media = fig
    ? h("div", { class: "xp__fig", "data-pose": fig.pose, "data-view": fig.view || "lateral", "data-props": arr(fig.props).join(","), "data-label": `Illustration: ${str(ex.name)}` }, placeholder("Loading illustration"))
    : h("div", { class: "xp__fig xp__fig--none" }, placeholder());
  return h("li", { class: "xp__card" },
    media,
    h("div", { class: "xp__card-body" },
      h("div", { class: "xp__card-top" }, h("span", { class: "xp__idx mono", "aria-hidden": "true" }, pad2(i + 1)),
        h("h5", { class: "xp__ex-name" }, str(ex?.name))),
      ex?.dosage ? h("p", { class: "xp__dose" }, h("span", { class: "xp__k" }, "Dose"), h("span", { class: "xp__dose-v mono" }, str(ex.dosage))) : null,
      ex?.cues ? h("p", { class: "xp__cue" }, h("span", { class: "xp__k" }, "Cue"), h("span", null, rich(ex.cues, ctx))) : null));
}

function iconList(cls, ic, items, ctx) {
  return h("ul", { class: cls, role: "list" }, items.map((t) => h("li", null, icon(ic, { size: 16 }), h("span", null, rich(t, ctx)))));
}

export function exerciseProgram(injury) {
  const stages = arr(injury?.rehab?.stages).filter((s) => s && typeof s === "object");
  const ctx = { id: str(injury?.id), refs: arr(injury?.references) };
  if (!stages.length) return h("p", { class: "xp-empty" }, "No staged rehabilitation program is available for this injury yet.");

  const id = `xp${++uid}`;
  const tabs = [], panels = [];
  let active = 0;

  const select = (i, { focus = false } = {}) => {
    active = Math.max(0, Math.min(stages.length - 1, i));
    tabs.forEach((t, k) => {
      const on = k === active;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle("is-before", k < active);
    });
    panels.forEach((p, k) => { p.hidden = k !== active; });
    fillFigures(panels[active]);
    if (focus) tabs[active].focus();
    const t = tabs[active];
    if (t.scrollIntoView && strip.scrollWidth > strip.clientWidth) {
      const left = t.offsetLeft - (strip.clientWidth - t.offsetWidth) / 2;
      strip.scrollTo({ left, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  };

  const onKey = (e) => {
    const k = e.key;
    let n = null;
    if (k === "ArrowRight" || k === "ArrowDown") n = (active + 1) % stages.length;
    else if (k === "ArrowLeft" || k === "ArrowUp") n = (active - 1 + stages.length) % stages.length;
    else if (k === "Home") n = 0;
    else if (k === "End") n = stages.length - 1;
    if (n == null) return;
    e.preventDefault();
    select(n, { focus: true });
  };

  stages.forEach((s, i) => {
    const tid = `${id}-tab${i}`, pid = `${id}-panel${i}`;
    tabs.push(h("button", {
      type: "button", role: "tab", id: tid, class: "xp__step", "aria-controls": pid, "aria-selected": "false", tabindex: "-1",
      on: { click: () => select(i), keydown: onKey }
    },
      h("span", { class: "xp__num mono" }, String(i + 1)),
      h("span", { class: "xp__step-text" },
        h("span", { class: "xp__step-name" }, str(s.name) || `Stage ${i + 1}`),
        s.timeframe ? h("span", { class: "xp__step-time mono" }, str(s.timeframe)) : null)));

    const goals = arr(s.goals), prec = arr(s.precautions), exs = arr(s.exercises), crit = arr(s.progressionCriteria);

    // criteria checklist
    let criteria = null;
    if (crit.length) {
      const count = h("p", { class: "xp__count", "aria-live": "polite" }, `0 of ${crit.length} criteria ticked`);
      const next = i < stages.length - 1
        ? h("button", { type: "button", class: "btn btn--sm xp__next", on: { click: () => select(i + 1, { focus: true }) } },
          h("span", null, `Next: ${str(stages[i + 1].name) || `Stage ${i + 2}`}`), icon("chevron-right", { size: 16 }))
        : null;
      const form = h("form", { class: "xp__criteria", "aria-labelledby": `${pid}-crit`, on: { submit: (e) => e.preventDefault() } },
        h("ul", { class: "xp__checks", role: "list" }, crit.map((c, k) => {
          const cid = `${pid}-c${k}`;
          return h("li", null, h("input", { type: "checkbox", id: cid, class: "xp__box" }), h("label", { for: cid }, rich(c, ctx)));
        })),
        h("div", { class: "xp__crit-foot" }, count, h("div", { class: "cluster cluster--sm" },
          h("button", { type: "reset", class: "btn btn--sm btn--ghost" }, "Clear"), next)));
      const update = () => {
        const n = form.querySelectorAll("input:checked").length;
        count.textContent = `${n} of ${crit.length} criteria ticked${n === crit.length ? " — all met" : ""}`;
        form.classList.toggle("is-complete", n === crit.length);
      };
      form.addEventListener("change", update);
      form.addEventListener("reset", () => setTimeout(update, 0));
      criteria = h("div", { class: "xp__block xp__block--criteria" }, h("h4", { class: "xp__h4", id: `${pid}-crit` }, i === stages.length - 1 ? "Criteria to complete" : "Criteria to progress"), form);
    }

    panels.push(h("div", { role: "tabpanel", id: pid, class: "xp__panel", "aria-labelledby": tid, tabindex: "0", hidden: true },
      h("header", { class: "xp__head" },
        h("p", { class: "xp__eyebrow eyebrow" }, `Stage ${i + 1} of ${stages.length}`),
        h("h3", { class: "xp__title" }, str(s.name) || `Stage ${i + 1}`),
        s.timeframe ? h("p", { class: "xp__time mono" }, icon("clock", { size: 15 }), str(s.timeframe)) : null),
      (goals.length || prec.length) ? h("div", { class: `xp__cols${goals.length && prec.length ? " xp__cols--2" : ""}` },
        goals.length ? h("div", { class: "xp__block xp__block--goals" }, h("h4", { class: "xp__h4" }, "Goals"), iconList("xp__list xp__list--goals", "target", goals, ctx)) : null,
        prec.length ? h("div", { class: "xp__block xp__block--prec" }, h("h4", { class: "xp__h4" }, "Precautions"), iconList("xp__list xp__list--prec", "warning", prec, ctx)) : null) : null,
      exs.length ? h("div", { class: "xp__block xp__block--ex" }, h("h4", { class: "xp__h4" }, "Exercises ", h("span", { class: "xp__n mono" }, String(exs.length))),
        h("ul", { class: "xp__cards", role: "list" }, exs.map((x, k) => exerciseCard(x, k, ctx)))) : null,
      criteria));
  });

  const strip = h("div", { class: "xp__steps", role: "tablist", "aria-label": "Rehabilitation stages", "aria-orientation": "horizontal" }, tabs);
  const root = h("section", { class: "xp", "aria-label": "Staged rehabilitation program" },
    h("div", { class: "xp__rail" }, strip), panels);
  select(0);
  return root;
}

export default exerciseProgram;
