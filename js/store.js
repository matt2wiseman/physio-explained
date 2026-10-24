// Data loading (cached) + local preferences. OWNER: P1.
//
//   await store.index()            → IndexEntry[]            (data/index.json)
//   await store.meta()             → { builtAt, injuries, planned, references, regions }
//   await store.injury(id)         → full injury object      (data/injuries/<id>.json); rejects with err.status = 404 /
//                                    err.code = "not-found" when the injury is not published yet
//   await store.entry(id)          → IndexEntry | null       (convenience lookup in the index)
//   await store.glossary()         → glossary terms          (data/glossary.json; [] if the file is missing)
//   store.favourites.list() / has(id) / toggle(id) → bool / add(id) / remove(id) / clear() / onChange(fn) → unsubscribe
//   store.recent.list() / push(id) / clear() / onChange(fn)      last 12 viewed, newest first
//   store.prefs.get(key, fallback) / set(key, value) / onChange(fn(key, value))
//
// Import any way you like: `import { store } from "../store.js"`, `import store from …`, or `import * as store from …`.
// Fetch URLs are relative to the document (works from a sub-path). localStorage is optional: every access is wrapped in
// try/catch and falls back to memory (private mode, sandboxed iframes). Changes from other tabs are picked up via the
// "storage" event. A window CustomEvent "pe:store" ({ detail: { kind, ... } }) is also dispatched on every change.

const DATA = "data/";
const PREFIX = "pe:";
const RECENT_MAX = 12;

/* ------------------------------------------------------------------ fetch + cache */
const cache = new Map();
function getJSON(path, { optional = false } = {}) {
  if (cache.has(path)) return cache.get(path);
  const p = fetch(path, { credentials: "same-origin" }).then(async (res) => {
    if (!res.ok) {
      if (optional && res.status === 404) return null;
      const err = new Error(`${res.status} ${res.statusText || "error"} loading ${path}`);
      err.status = res.status;
      err.code = res.status === 404 ? "not-found" : "http";
      throw err;
    }
    return res.json();
  });
  p.catch(() => cache.delete(path)); // allow a retry after a failure
  cache.set(path, p);
  return p;
}

export async function index() {
  const data = await getJSON(`${DATA}index.json`);
  return Array.isArray(data) ? data : [];
}
export async function meta() {
  return (await getJSON(`${DATA}meta.json`)) || {};
}
export async function injury(id) {
  if (typeof id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    const err = new Error(`Invalid injury id "${id}"`);
    err.status = 404; err.code = "not-found";
    throw err;
  }
  return getJSON(`${DATA}injuries/${id}.json`);
}
export async function entry(id) {
  try { return (await index()).find((e) => e.id === id) || null; } catch { return null; }
}
export async function glossary() {
  const data = await getJSON(`${DATA}glossary.json`, { optional: true });
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.terms)) return data.terms;
  return data || [];
}

/* ------------------------------------------------------------------ storage with in-memory fallback */
let ls = null;
try {
  ls = window.localStorage;
  const k = `${PREFIX}__test`;
  ls.setItem(k, "1"); ls.removeItem(k);
} catch { ls = null; }

const mem = new Map();
function read(key, fallback) {
  if (mem.has(key)) return mem.get(key);
  let v = fallback;
  try {
    const raw = ls ? ls.getItem(PREFIX + key) : null;
    if (raw != null) v = JSON.parse(raw);
  } catch { v = fallback; }
  mem.set(key, v);
  return v;
}
function write(key, value) {
  mem.set(key, value);
  try { if (ls) ls.setItem(PREFIX + key, JSON.stringify(value)); } catch { /* quota / blocked: memory only */ }
}

function emitter(kind) {
  const fns = new Set();
  return {
    on(fn) { if (typeof fn === "function") fns.add(fn); return () => fns.delete(fn); },
    emit(...args) {
      for (const fn of [...fns]) { try { fn(...args); } catch (e) { console.warn("[store] listener failed", e); } }
      try { window.dispatchEvent(new CustomEvent("pe:store", { detail: { kind, args } })); } catch { /* ignore */ }
    }
  };
}

const idList = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === "string") : []);

/* ------------------------------------------------------------------ favourites */
const favEvents = emitter("favourites");
export const favourites = {
  list: () => [...idList(read("favourites", []))],
  has: (id) => idList(read("favourites", [])).includes(id),
  add(id) { if (!favourites.has(id)) { write("favourites", [id, ...favourites.list()]); favEvents.emit(favourites.list(), id, true); } return true; },
  remove(id) { if (favourites.has(id)) { write("favourites", favourites.list().filter((x) => x !== id)); favEvents.emit(favourites.list(), id, false); } return false; },
  toggle(id) { return favourites.has(id) ? favourites.remove(id) : favourites.add(id); },
  clear() { write("favourites", []); favEvents.emit([], null, false); },
  onChange: (fn) => favEvents.on(fn)
};

/* ------------------------------------------------------------------ recently viewed */
const recentEvents = emitter("recent");
export const recent = {
  list: () => [...idList(read("recent", []))],
  push(id) {
    if (typeof id !== "string" || !id) return;
    const next = [id, ...recent.list().filter((x) => x !== id)].slice(0, RECENT_MAX);
    write("recent", next);
    recentEvents.emit(next);
  },
  remove(id) { write("recent", recent.list().filter((x) => x !== id)); recentEvents.emit(recent.list()); },
  clear() { write("recent", []); recentEvents.emit([]); },
  onChange: (fn) => recentEvents.on(fn)
};

/* ------------------------------------------------------------------ prefs (one object, so index.html can read the theme before paint) */
const prefEvents = emitter("prefs");
const prefObj = () => { const v = read("prefs", {}); return v && typeof v === "object" && !Array.isArray(v) ? v : {}; };
export const prefs = {
  get(key, fallback) { const o = prefObj(); return Object.prototype.hasOwnProperty.call(o, key) ? o[key] : fallback; },
  set(key, value) {
    const o = { ...prefObj() };
    if (value === undefined) delete o[key]; else o[key] = value;
    write("prefs", o);
    prefEvents.emit(key, value);
  },
  all: () => ({ ...prefObj() }),
  onChange: (fn) => prefEvents.on(fn)
};

/* ------------------------------------------------------------------ cross-tab sync */
try {
  window.addEventListener("storage", (e) => {
    if (!e.key || !e.key.startsWith(PREFIX)) return;
    const key = e.key.slice(PREFIX.length);
    mem.delete(key);
    if (key === "favourites") favEvents.emit(favourites.list(), null, null);
    else if (key === "recent") recentEvents.emit(recent.list());
    else if (key === "prefs") prefEvents.emit(null, null);
  });
} catch { /* ignore */ }

export const storageAvailable = () => !!ls;

export const store = { index, meta, injury, entry, glossary, favourites, recent, prefs, storageAvailable };
export default store;
