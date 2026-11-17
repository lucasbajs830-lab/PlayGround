import { createServer } from "node:http";
import { readFileSync, statSync } from "node:fs";
import { extname, join, resolve, sep } from "node:path";

// Minimal static server for the built game. The controller starts it in the
// foreground and proxies the public preview to it, so it must stay alive and
// keep answering while screenshots are taken.

const root = resolve(process.argv[2] || "dist");
const port = Number(process.env.PORT || process.argv[3] || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(`Invalid PORT: ${process.env.PORT ?? process.argv[3] ?? ""}`);
  process.exit(1);
}
statSync(join(root, "index.html")); // fail loudly before binding if the build is missing

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".wasm": "application/wasm",
  ".glb": "model/gltf-binary",
  ".gltf": "model/gltf+json",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json; charset=utf-8",
};

// Same live-reload handshake the runtime server exposes, so the web preview
// keeps refreshing after a rebuild without the controller restarting the app.
const liveScript = `<script data-omgithub-live-preview>
(() => {
  const events = new EventSource('/__omgithub/live');
  events.addEventListener('change', () => {
    if (window.parent !== window) window.parent.postMessage({ type: 'omgithub:live-change' }, '*');
    else window.location.reload();
  });
  window.addEventListener('pagehide', () => events.close(), { once: true });
})();
</script>`;

const clients = new Set();
const keepAlive = setInterval(() => {
  for (const client of clients) client.write(": keepalive\n\n");
}, 20000);

const notFound = (res) => {
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found");
};

const server = createServer((req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (url.pathname === "/__omgithub/live") {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "X-Accel-Buffering": "no",
        Connection: "keep-alive",
      });
      res.write(": connected\n\n");
      clients.add(res);
      req.on("close", () => clients.delete(res));
      return;
    }

    const path = resolve(root, "." + decodeURIComponent(url.pathname));
    if (path !== root && !path.startsWith(root + sep)) return notFound(res);
    let file = path;
    if (statSync(file).isDirectory()) file = join(file, "index.html");
    if (!statSync(file).isFile()) return notFound(res);

    let body = readFileSync(file);
    const type = mime[extname(file)] || "application/octet-stream";
    if (extname(file) === ".html" && url.searchParams.get("omgithub_live") === "1") {
      const html = body.toString("utf8");
      body = Buffer.from(
        /<\/body\s*>/i.test(html)
          ? html.replace(/<\/body\s*>/i, `${liveScript}</body>`)
          : html + liveScript,
      );
    }
    res.writeHead(200, {
      "Content-Type": type,
      "Cache-Control": url.searchParams.has("omgithub_live") ? "no-store" : "no-cache",
    });
    res.end(body);
  } catch {
    notFound(res);
  }
});

const shutdown = () => {
  clearInterval(keepAlive);
  for (const client of clients) client.end();
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 2000).unref();
};
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

server.on("error", (error) => {
  console.error(`Server failed on port ${port}: ${error.message}`);
  process.exit(1);
});
server.listen(port, "0.0.0.0", () => {
  console.log(`Serving ${root} on http://0.0.0.0:${port}`);
});
