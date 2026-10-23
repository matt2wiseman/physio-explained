// Shared test/preview harness: static server + Playwright Chromium. OWNER: head of QC.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2" };

export async function serve(port = 0) {
  const server = createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
      if (p.endsWith("/")) p += "index.html";
      const file = join(ROOT, p);
      if (!file.startsWith(ROOT)) throw new Error("bad path");
      await stat(file);
      res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream", "cache-control": "no-store" });
      res.end(await readFile(file));
    } catch { res.writeHead(404); res.end("not found"); }
  });
  await new Promise((r) => server.listen(port, "127.0.0.1", r));
  return { server, url: `http://127.0.0.1:${server.address().port}`, close: () => new Promise((r) => server.close(r)) };
}

export async function browser() {
  const { chromium } = await import("/opt/node22/lib/node_modules/playwright/index.mjs");
  return chromium.launch();
}

/** Open a page, collect console errors. */
export async function openPage(b, url, { width = 1280, height = 900, dark = false, reducedMotion = false } = {}) {
  const ctx = await b.newContext({ viewport: { width, height }, colorScheme: dark ? "dark" : "light", reducedMotion: reducedMotion ? "reduce" : "no-preference" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(url);
  return { page, ctx, errors };
}
