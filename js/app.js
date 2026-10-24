// App bootstrap: theme, header interactions, lazy search box, footer stats, router start. OWNER: P1.
import { router } from "./router.js";
import { store } from "./store.js";
import { h, icon } from "./util/dom.js";

const root = document.documentElement;
const DESKTOP = "(min-width: 70em)";

/* ------------------------------------------------------------------ static icons in the shell */
for (const el of document.querySelectorAll("[data-icon]")) el.replaceChildren(icon(el.getAttribute("data-icon")));

/* ------------------------------------------------------------------ theme: system → light → dark */
const THEMES = ["system", "light", "dark"];
const THEME_ICON = { system: "monitor", light: "sun", dark: "moon" };
const THEME_LABEL = { system: "System", light: "Light", dark: "Dark" };
const themeBtn = document.getElementById("theme-toggle");
const metaThemes = [...document.querySelectorAll('meta[name="theme-color"]')].map((m) => [m, m.getAttribute("content")]);

function currentTheme() {
  const t = store.prefs.get("theme", "system");
  return THEMES.includes(t) ? t : "system";
}
function applyTheme(t) {
  if (t === "light" || t === "dark") root.setAttribute("data-theme", t); else root.removeAttribute("data-theme");
  // browser chrome colour follows the page paper colour
  const paper = getComputedStyle(root).getPropertyValue("--paper").trim();
  for (const [m, orig] of metaThemes) m.setAttribute("content", t === "system" || !paper ? orig : paper);
  if (themeBtn) {
    const next = THEMES[(THEMES.indexOf(t) + 1) % THEMES.length];
    themeBtn.replaceChildren(icon(THEME_ICON[t]), h("span", { class: "theme-toggle__text" }, THEME_LABEL[t]));
    themeBtn.setAttribute("aria-label", `Colour theme: ${THEME_LABEL[t]}. Switch to ${THEME_LABEL[next]}`);
    themeBtn.title = `Theme: ${THEME_LABEL[t]} (click for ${THEME_LABEL[next]})`;
    themeBtn.dataset.theme = t;
  }
}
applyTheme(currentTheme());
themeBtn?.addEventListener("click", () => {
  const t = THEMES[(THEMES.indexOf(currentTheme()) + 1) % THEMES.length];
  store.prefs.set("theme", t);
  applyTheme(t);
});
store.prefs.onChange((k) => { if (k === "theme" || k === null) applyTheme(currentTheme()); });

/* ------------------------------------------------------------------ mobile / tablet menu */
const header = document.getElementById("site-header");
const menuBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");
const isOpen = () => header?.dataset.menu === "open";
function setMenu(open, { focusButton = false } = {}) {
  if (!header || !menuBtn) return;
  header.dataset.menu = open ? "open" : "closed";
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.replaceChildren(icon(open ? "close" : "menu"), h("span", { class: "visually-hidden" }, open ? "Close menu" : "Menu"));
  if (focusButton) menuBtn.focus();
}
menuBtn?.addEventListener("click", () => {
  const open = !isOpen();
  setMenu(open);
  if (open) nav?.querySelector("a")?.focus({ preventScroll: true });
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen()) setMenu(false, { focusButton: true }); });
document.addEventListener("click", (e) => { if (isOpen() && !e.composedPath().includes(header)) setMenu(false); });
nav?.addEventListener("focusout", (e) => {
  if (!isOpen() || matchMedia(DESKTOP).matches) return;
  if (e.relatedTarget && !header.contains(e.relatedTarget)) setMenu(false);
});
try { matchMedia(DESKTOP).addEventListener("change", (e) => { if (e.matches) setMenu(false); }); } catch { /* old Safari */ }
setMenu(false);

// Clicking the link for the page you're already on: back to the top (no hashchange fires).
document.addEventListener("click", (e) => {
  const a = e.target.closest?.("a[data-nav], a.brand");
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
  const target = a.getAttribute("href");
  if (target === location.hash || (target === "#home" && !location.hash)) {
    e.preventDefault();
    setMenu(false);
    window.scrollTo({ top: 0 });
    const h1 = document.querySelector("#main h1");
    if (h1) { if (!h1.hasAttribute("tabindex")) h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
  }
});

/* ------------------------------------------------------------------ skip link (no hash change) */
document.querySelector(".skip-link")?.addEventListener("click", (e) => {
  const main = document.getElementById("main");
  if (!main) return;
  e.preventDefault();
  const target = main.querySelector("h1") || main;
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus();
  target.scrollIntoView({ block: "start" });
});

/* ------------------------------------------------------------------ search box (P5), degrades to a link to #search */
const searchSlot = document.getElementById("site-search");
if (searchSlot) {
  const fallback = [...searchSlot.childNodes];
  import("./components/searchbox.js")
    .then((m) => {
      if (typeof m.mountSearchbox !== "function") throw new Error("searchbox.js has no mountSearchbox export");
      searchSlot.replaceChildren();
      m.mountSearchbox(searchSlot, {});
      searchSlot.dataset.mounted = "true";
    })
    .catch((e) => {
      searchSlot.replaceChildren(...fallback);
      searchSlot.dataset.mounted = "false";
      if (!/Failed to fetch|Importing a module script failed|error loading dynamically imported module/i.test(String(e?.message))) console.warn("[app] search box unavailable", e);
    });
}

/* ------------------------------------------------------------------ footer stats */
const stats = document.getElementById("footer-stats");
if (stats) {
  store.meta().then((m) => {
    if (!m || typeof m.injuries !== "number") return;
    const parts = [`${m.injuries} of ${m.planned ?? m.injuries} injuries published`];
    if (m.references) parts.push(`${m.references} verified references`);
    if (m.builtAt) {
      const d = new Date(m.builtAt);
      if (!isNaN(d)) parts.push(`updated ${d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}`);
    }
    stats.textContent = parts.join(" · ");
  }).catch(() => { /* footer stats are optional */ });
}

/* ------------------------------------------------------------------ route changes close the menu */
router.onChange(() => { if (isOpen()) setMenu(false); });

try { window.PhysioExplained = { router, store }; } catch { /* ignore */ }
router.start({ main: "#main" });
