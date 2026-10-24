// Not found / "being built" / error states. OWNER: P1.
// The router calls render(main, [attemptedName, ...params], ctx) with ctx.reason = "unknown" | "building" | "error"
// and ctx.error (when relevant). Opened directly (#notfound) it behaves as "unknown".

const VIEW_NAMES = {
  home: "home page", library: "injury library", search: "search", injury: "injury page", bodymap: "body map",
  compare: "compare view", saved: "saved injuries", healing: "healing science primer", glossary: "glossary", about: "about page"
};

const DESTINATIONS = [
  ["#library", "Injury library", "Every published injury, filterable by region and tissue", "list"],
  ["#bodymap", "Body map", "Find injuries by pointing at the body", "body"],
  ["#search", "Search", "Search names, synonyms, special tests and structures", "search"],
  ["#healing", "Healing science", "How ligament, tendon, muscle and bone heal", "layers"],
  ["#home", "Home", "Start again from the front page", "home"]
];

let lastReason = "unknown";

export const title = () => (lastReason === "building" ? "Being built" : lastReason === "error" ? "Something went wrong" : "Page not found");

export function render(main, params = [], ctx = {}) {
  const { h, icon, router } = ctx;
  const reason = ctx.reason || "unknown";
  lastReason = reason;
  const name = params[0] || "";
  const attempted = "#" + params.join(".");
  const what = VIEW_NAMES[name];

  let eyebrow, heading, lead;
  if (reason === "building") {
    eyebrow = "Under construction";
    heading = "This section is being built";
    lead = [`The ${what || "page"} you asked for is still being written. Everything already published is in the library.`];
  } else if (reason === "error") {
    eyebrow = "Error";
    heading = "Something went wrong loading this page";
    lead = ["The page failed to load. Trying again usually fixes it; if not, the rest of the site still works."];
  } else {
    eyebrow = "404 · Not in the atlas";
    heading = "We couldn’t find that page";
    lead = ["The link may be mistyped or out of date. ", h("span", { class: "mono" }, attempted || "#"), " isn’t a page on this site."];
  }

  const actions = h("div", { class: "cluster" },
    reason === "error"
      ? h("button", { type: "button", class: "btn btn--primary", on: { click: () => router?.reload?.() } }, icon("restart"), "Try again")
      : h("a", { class: "btn btn--primary", href: "#library" }, icon("list"), "Browse the library"),
    name !== "home" ? h("a", { class: "btn", href: "#home" }, "Go to the home page") : null);

  const details = reason === "error" && ctx.error
    ? h("details", { class: "empty-state__details" },
        h("summary", null, "Technical details"),
        h("pre", { class: "mono" }, String(ctx.error?.message || ctx.error)))
    : null;

  const list = h("ul", { class: "empty-state__links", role: "list" },
    DESTINATIONS.filter(([href]) => href !== "#" + name).map(([href, label, desc, ic]) =>
      h("li", null, h("a", { href },
        h("span", { class: "empty-state__icon" }, icon(ic)),
        h("span", { class: "empty-state__text" }, h("strong", null, label), h("span", null, desc)),
        icon("chevron-right", { className: "empty-state__chev" })))));

  main.replaceChildren(
    h("section", { class: `empty-state empty-state--${reason}`, "aria-labelledby": "nf-title" },
      h("div", { class: "empty-state__body stack" },
        h("p", { class: "eyebrow" }, eyebrow),
        h("h1", { id: "nf-title" }, heading),
        h("p", { class: "lead" }, ...lead),
        actions,
        details),
      h("nav", { class: "empty-state__nav", "aria-label": "Suggested pages" },
        h("h2", { class: "eyebrow" }, "Try instead"),
        list)));
}
