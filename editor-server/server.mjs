import http from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes, timingSafeEqual, createHash } from "node:crypto";
import { Workspace } from "./workspace.mjs";
import { GoogleLogin } from "./google-auth.mjs";
import { Builds } from "./builds.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.EDITOR_PORT || 3019);
const origin = process.env.EDITOR_ORIGIN || `http://localhost:${port}`;
const previewDomain = process.env.EDITOR_PREVIEW_DOMAIN || "localhost";
const previewProtocol = new URL(origin).protocol;
const previewPort = new URL(origin).port;
const previewURL = (id) =>
  `${previewProtocol}//b-${id}.${previewDomain}${previewPort ? ":" + previewPort : ""}`;
const token = process.env.EDITOR_TOKEN || randomBytes(24).toString("base64url");
const session = randomBytes(32).toString("base64url");
const ws = new Workspace(
  process.env.EDITOR_DATA_DIR || path.join(process.cwd(), ".editor-data"),
  process.env.EDITOR_REPO_URL,
);
await ws.init();
const builds = new Builds(ws);
const googleLogin = new GoogleLogin({
  clientId: process.env.EDITOR_GOOGLE_CLIENT_ID,
  email: process.env.EDITOR_GOOGLE_EMAIL,
  subjectFile: path.join(ws.root, "google-account.json"),
});
const sessionCookie = `editor_session=${session}; HttpOnly; SameSite=Strict; Path=/${previewProtocol === "https:" ? "; Secure" : ""}`;
const hash = (text) => createHash("sha256").update(text).digest();
const authenticated = (req) =>
  (req.headers.cookie || "")
    .split(";")
    .some((c) => c.trim() === `editor_session=${session}`);
const json = (res, status, value) => {
  res.writeHead(status, {
    "content-type": "application/json",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(value));
};
async function body(req) {
  let chunks = [],
    size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 5_000_000) throw new Error("Request too large.");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString() || "{}");
}
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
async function serve(res, root, pathname, injection = "", fallback = false) {
  let relative;
  try {
    relative = decodeURIComponent(pathname).replace(/^\/+/, "");
  } catch {
    json(res, 400, { error: "Invalid path" });
    return;
  }
  const base = path.resolve(root),
    target = path.resolve(base, relative || "index.html");
  if (target !== base && !target.startsWith(base + path.sep)) {
    json(res, 403, { error: "Invalid path" });
    return;
  }
  for (const candidate of [
    target,
    target + ".html",
    path.join(target, "index.html"),
    ...(fallback ? [path.join(base, "index.html")] : []),
  ]) {
    try {
      if (!(await fs.stat(candidate)).isFile()) continue;
      if (
        !(await fs.realpath(candidate)).startsWith(
          (await fs.realpath(base)) + path.sep,
        )
      )
        continue;
      let data = await fs.readFile(candidate);
      const ext = path.extname(candidate);
      if (ext === ".html" && injection)
        data = Buffer.from(
          data.toString().replace("</body>", injection + "</body>"),
        );
      res.writeHead(200, {
        "content-type": mime[ext] || "application/octet-stream",
        "cache-control": "no-store",
        "x-content-type-options": "nosniff",
      });
      res.end(data);
      return;
    } catch (e) {
      if (!["ENOENT", "ENOTDIR"].includes(e.code)) throw e;
    }
  }
  json(res, 404, { error: "Not found" });
}
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, origin);
    const host = req.headers.host || "";
    const previewMatch = /^b-([a-f0-9]{24})\./.exec(host);
    if (previewMatch && host === new URL(previewURL(previewMatch[1])).host) {
      if (req.method !== "GET")
        return json(res, 405, { error: "Preview is read-only" });
      if (url.pathname === "/_editor/goggles.js")
        return serve(res, here, "/goggles.js");
      const previewRoot = path.join(ws.root, "previews", previewMatch[1]);
      let fallback = false;
      try {
        const manifest = JSON.parse(
          await fs.readFile(
            path.join(previewRoot, "editor-manifest.json"),
            "utf8",
          ),
        );
        fallback = manifest.pages.some((p) => p.path === url.pathname);
      } catch {}
      return serve(
        res,
        previewRoot,
        url.pathname,
        `<script src="/_editor/goggles.js" data-editor-origin="${origin.replace(/"/g, "&quot;")}"></script>`,
        fallback,
      );
    }
    if (host !== new URL(origin).host)
      return json(res, 403, { error: "Unknown host" });
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' https://accounts.google.com/gsi/client; style-src 'self' https://accounts.google.com/gsi/style; connect-src 'self' https://accounts.google.com/gsi/; frame-src https://accounts.google.com/gsi/ " +
        `${previewProtocol}//*.${previewDomain}${previewPort ? ":" + previewPort : ""}; object-src 'none'; base-uri 'none'; frame-ancestors 'none'`,
    );
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    if (url.pathname.startsWith("/api/")) {
      if (url.pathname === "/api/auth-config" && req.method === "GET") {
        if (!googleLogin.enabled)
          return json(res, 200, { googleClientId: null });
        const nonce = googleLogin.challenge();
        res.setHeader(
          "set-cookie",
          `editor_google_nonce=${nonce}; HttpOnly; SameSite=Strict; Path=/api/; Max-Age=600${previewProtocol === "https:" ? "; Secure" : ""}`,
        );
        return json(res, 200, { googleClientId: googleLogin.clientId, nonce });
      }
      if (req.method === "POST" && req.headers.origin !== origin)
        return json(res, 403, { error: "Origin rejected" });
      if (url.pathname === "/api/login/google" && req.method === "POST") {
        const data = await body(req);
        const nonce = (req.headers.cookie || "")
          .split(";")
          .map((c) => c.trim())
          .find((c) => c.startsWith("editor_google_nonce="))
          ?.slice("editor_google_nonce=".length);
        try {
          await googleLogin.verify(data.credential, nonce);
        } catch {
          return json(res, 401, {
            error:
              "Google sign-in failed or this account is not allowed. Reload to try again; token sign-in is still available.",
          });
        }
        res.setHeader("set-cookie", [
          sessionCookie,
          `editor_google_nonce=; HttpOnly; SameSite=Strict; Path=/api/; Max-Age=0${previewProtocol === "https:" ? "; Secure" : ""}`,
        ]);
        return json(res, 200, { ok: true });
      }
      if (url.pathname === "/api/login" && req.method === "POST") {
        const data = await body(req);
        if (
          typeof data.token !== "string" ||
          !timingSafeEqual(hash(data.token), hash(token))
        )
          return json(res, 401, { error: "Incorrect editor token" });
        res.setHeader("set-cookie", sessionCookie);
        return json(res, 200, { ok: true });
      }
      if (!authenticated(req))
        return json(res, 401, { error: "Sign in to the editor." });
      if (req.method === "GET") {
        if (url.pathname === "/api/branches")
          return json(res, 200, { branches: await ws.branches() });
        if (url.pathname === "/api/job") {
          const job = builds.jobs.get(url.searchParams.get("id"));
          return json(
            res,
            job ? 200 : 404,
            job
              ? {
                  ...job,
                  url: job.status === "ready" ? previewURL(job.id) : null,
                }
              : { error: "Unknown build" },
          );
        }
        if (url.pathname === "/api/files")
          return json(
            res,
            200,
            await ws.exclusive(async () => ({
              files: await ws.files(url.searchParams.get("branch")),
            })),
          );
        if (url.pathname === "/api/source")
          return json(
            res,
            200,
            await ws.exclusive(() =>
              ws.source(
                url.searchParams.get("branch"),
                url.searchParams.get("file"),
              ),
            ),
          );
        if (url.pathname === "/api/preview") {
          const p = ws.state.branches[url.searchParams.get("branch")]?.preview;
          return json(res, 200, p ? { ...p, url: previewURL(p.id) } : null);
        }
      }
      if (req.method === "POST") {
        const data = await body(req);
        if (url.pathname === "/api/build")
          return json(res, 202, await builds.start(data.branch, data.command));
        if (url.pathname === "/api/clean-build-cache")
          return json(res, 200, await builds.clean(data.branch));
        const value = await ws.exclusive(async () => {
          switch (url.pathname) {
            case "/api/refresh":
              await ws.fetch();
              return { branches: await ws.branches() };
            case "/api/open":
              await ws.select(data.branch);
              return { branches: await ws.branches() };
            case "/api/commit":
              return ws.commit(data.branch, data.revision, data.changes);
            case "/api/command":
              await ws.command(data.branch, data.command);
              return { ok: true };
            case "/api/sync":
              return ws.sync(data.branch);
            default:
              throw new Error("Unknown operation");
          }
        });
        return json(res, 200, value);
      }
      return json(res, 404, { error: "Unknown endpoint" });
    }
    if (req.method !== "GET")
      return json(res, 405, { error: "Method not allowed" });
    return serve(res, path.join(here, "ui"), url.pathname);
  } catch (error) {
    json(res, 400, { error: error.message });
  }
});
server.listen(port, process.env.EDITOR_HOST || "127.0.0.1", () => {
  console.log(`Editor: ${origin}\nData: ${ws.root}`);
  if (!process.env.EDITOR_TOKEN)
    console.log(`One-session editor token: ${token}`);
});
