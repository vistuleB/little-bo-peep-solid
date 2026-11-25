import { promises as fs } from "node:fs";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { idFor } from "./workspace.mjs";

const roots = [
  "src",
  "public",
  "config",
  "app.config.ts",
  "tsconfig.json",
  "tailwind.config.cjs",
  "postcss.config.cjs",
  "package.json",
];
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");

// Publish only runtime inputs. No Git checkout, credentials, renderer, or .env files.
export async function syncRuntime(source, destination) {
  const files = new Map();
  async function walk(relative) {
    const stat = await fs.lstat(path.join(source, relative)).catch((e) => {
      if (e.code !== "ENOENT") throw e;
    });
    if (!stat || stat.isSymbolicLink()) return;
    if (stat.isDirectory()) {
      for (const name of await fs.readdir(path.join(source, relative))) {
        if (name.startsWith(".") || (relative === "src" && name === "content"))
          continue;
        await walk(path.join(relative, name));
      }
    } else if (stat.isFile()) files.set(relative, null);
  }
  for (const root of roots) await walk(root);
  await fs.mkdir(destination, { recursive: true });
  let previous = [];
  try {
    previous = JSON.parse(
      await fs.readFile(path.join(destination, ".runtime-files.json"), "utf8"),
    );
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  const backups = new Map();
  const rollback = async () => {
    for (const [relative, bytes] of backups) {
      const target = path.join(destination, relative);
      if (bytes === undefined) await fs.rm(target, { force: true });
      else {
        await fs.mkdir(path.dirname(target), { recursive: true });
        await fs.writeFile(target, bytes);
      }
    }
    await fs.writeFile(
      path.join(destination, ".runtime-files.json"),
      JSON.stringify(previous),
    );
  };
  let changed = 0;
  const configParts = [];
  try {
    for (const relative of files.keys()) {
      const bytes = await fs.readFile(path.join(source, relative));
      if (!relative.startsWith("src/") && !relative.startsWith("public/"))
        configParts.push(Buffer.from(relative), bytes);
      const target = path.join(destination, relative);
      const old = await fs.readFile(target).catch((e) => {
        if (e.code !== "ENOENT") throw e;
      });
      if (old?.equals(bytes)) continue;
      backups.set(relative, old);
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target + ".incoming", bytes);
      await fs.rename(target + ".incoming", target);
      changed++;
    }
    for (const relative of previous)
      if (!files.has(relative)) {
        backups.set(
          relative,
          await fs
            .readFile(path.join(destination, relative))
            .catch(() => undefined),
        );
        await fs.rm(path.join(destination, relative), { force: true });
        changed++;
      }
    await fs.writeFile(
      path.join(destination, ".runtime-files.json"),
      JSON.stringify([...files.keys()]),
    );
  } catch (error) {
    await rollback();
    throw error;
  }
  return {
    changed,
    rollback,
    configKey: digest(Buffer.concat(configParts)),
  };
}

export class LivePreviews {
  constructor(workspace, origin, previewURL = () => "http://localhost:3098") {
    this.previewURL = previewURL;
    this.workspace = workspace;
    this.origin = origin;
    this.queue = Promise.resolve();
    this.active = null;
  }
  exclusive(fn) {
    const p = this.queue.then(fn);
    this.queue = p.catch(() => {});
    return p;
  }
  directory(branch) {
    return path.join(this.workspace.root, "live-previews", idFor(branch));
  }
  async stop() {
    const active = this.active;
    this.active = null;
    if (
      !active ||
      active.child.exitCode !== null ||
      active.child.signalCode !== null
    )
      return;
    const kill = (signal) => {
      try {
        process.kill(-active.child.pid, signal);
      } catch (e) {
        if (e.code !== "ESRCH") throw e;
      }
    };
    kill("SIGTERM");
    await Promise.race([
      active.closed,
      new Promise((r) => setTimeout(r, 1500)),
    ]);
    kill("SIGKILL");
    await active.closed;
  }
  async preserveDependencies(branch, source) {
    const dir = this.directory(branch);
    const link = path.join(dir, "node_modules");
    if (
      (await fs.readlink(link).catch(() => null)) !==
      path.join(source, "node_modules")
    )
      return;
    await this.stop();
    const backup = path.join(dir, ".previous-node_modules");
    await fs.rm(backup, { recursive: true, force: true });
    await fs.rename(path.join(source, "node_modules"), backup);
    await fs.unlink(link);
    await fs.symlink(backup, link, "dir");
  }

  async publish(source, manifest, npmKey, log, signal) {
    return this.exclusive(async () => {
      signal.throwIfAborted();
      const dir = this.directory(manifest.branch);
      if (
        !(
          await fs.readFile(path.join(source, "app.config.ts"), "utf8")
        ).includes("EDITOR_LIVE_PREVIEW")
      )
        throw new Error(
          "Sync this branch to receive incremental preview support, then build again.",
        );
      const result = await syncRuntime(source, dir);
      const modules = path.join(dir, "node_modules");
      if (
        (await fs.readlink(modules).catch(() => null)) !==
        path.join(source, "node_modules")
      ) {
        await fs.rm(modules, { force: true });
        await fs.symlink(path.join(source, "node_modules"), modules, "dir");
      }
      const runtime = {
        ...manifest,
        id: digest(Buffer.from(manifest.branch)).slice(0, 24),
        live: true,
        runtimeKey: result.configKey + npmKey,
      };
      await fs.writeFile(
        path.join(dir, ".runtime.json"),
        JSON.stringify(runtime),
      );
      log(
        `Updated ${result.changed} runtime files. Starting/reusing incremental preview.\n`,
      );
      try {
        await this.ensure(runtime, log);
        return runtime;
      } catch (error) {
        await this.stop();
        await result.rollback();
        throw error;
      }
    });
  }
  async ensure(manifest, log = () => {}) {
    if (
      this.active?.key === manifest.runtimeKey &&
      this.active.branch === manifest.branch &&
      this.active.child.exitCode === null
    )
      return this.active;
    await this.stop(); // One running app at a time on the small editor host.
    const reservation = net.createServer();
    await new Promise((r) => reservation.listen(0, "127.0.0.1", r));
    const port = reservation.address().port;
    await new Promise((r) => reservation.close(r));
    const hmrPorts = {};
    for (const name of ["server", "client", "server-function"]) {
      const reserved = net.createServer();
      await new Promise((r) => reserved.listen(0, "127.0.0.1", r));
      hmrPorts[name] = reserved.address().port;
      await new Promise((r) => reserved.close(r));
    }
    const dir = this.directory(manifest.branch);
    const child = spawn(
      process.execPath,
      [
        path.join(dir, "node_modules/vinxi/bin/cli.mjs"),
        "dev",
        "--port",
        String(port),
      ],
      {
        cwd: dir,
        detached: true,
        stdio: ["ignore", "pipe", "pipe"],
        env: {
          ...process.env,
          NODE_ENV: "development",
          PLACE: "EDITOR_SERVER",
          EDITOR_LIVE_PREVIEW: "true",
          EDITOR_HMR_PORTS: JSON.stringify(hmrPorts),
          EDITOR_PREVIEW_URL: this.previewURL(manifest.id),
          PRERENDER_MATHJAX: "false",
          VITE_ENV: "DEV",
          EDITOR_REVISION: manifest.revision,
          PUBLIC_URL: `http://localhost:${port}`,
        },
      },
    );
    const active = {
      child,
      port,
      hmrPorts,
      key: manifest.runtimeKey,
      branch: manifest.branch,
      tail: "",
    };
    active.closed = new Promise((resolve) => child.once("close", resolve));
    child.on("error", (e) => {
      active.error = e;
    });
    for (const stream of [child.stdout, child.stderr])
      stream.on("data", (bytes) => {
        active.tail = (active.tail + bytes).slice(-8000);
        log(bytes.toString());
      });
    this.active = active;
    const deadline = Date.now() + 90_000;
    while (Date.now() < deadline) {
      if (active.error || child.exitCode !== null)
        throw (
          active.error || new Error("Preview process exited: " + active.tail)
        );
      try {
        const response = await fetch(`http://localhost:${port}/`, {
          signal: AbortSignal.timeout(3000),
        });
        await response.text();
        if (response.ok) return active;
      } catch {}
      await new Promise((r) => setTimeout(r, 250));
    }
    await this.stop();
    throw new Error("Preview startup timed out: " + active.tail);
  }
  upgrade(req, socket, head, manifest) {
    const name = /\/_editor\/hmr\/(server-function|client|server)(?:\?|$)/.exec(
      req.url,
    )?.[1];
    const port =
      this.active?.branch === manifest.branch && this.active.hmrPorts[name];
    if (!port) {
      socket.destroy();
      return;
    }
    const upstream = net.connect(port, "127.0.0.1", () => {
      const headers = {
        ...req.headers,
        host: `localhost:${port}`,
        origin: `http://localhost:${port}`,
      };
      upstream.write(
        `GET ${req.url} HTTP/1.1\r\n` +
          Object.entries(headers)
            .map(([k, v]) => `${k}: ${v}\r\n`)
            .join("") +
          "\r\n",
      );
      if (head.length) upstream.write(head);
      socket.pipe(upstream).pipe(socket);
    });
    upstream.on("error", () => socket.destroy());
    socket.on("error", () => upstream.destroy());
    socket.on("close", () => upstream.destroy());
  }
  async proxy(req, res, manifest) {
    const active = await this.exclusive(() => this.ensure(manifest));
    const upstream = http.request(
      {
        hostname: "localhost",
        port: active.port,
        path: req.url,
        method: "GET",
        headers: {
          host: `localhost:${active.port}`,
          accept: req.headers.accept || "*/*",
          "accept-encoding": "identity",
        },
      },
      (response) => {
        const headers = { ...response.headers, "cache-control": "no-store" };
        delete headers["content-length"];
        if ((headers["content-type"] || "").includes("text/html")) {
          const chunks = [];
          response.on("data", (c) => chunks.push(c));
          response.on("end", () => {
            const escape = (text) =>
              text.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
            const script = `<script src="/_editor/goggles.js" data-editor-origin="${escape(this.origin)}" data-revision="${escape(manifest.revision)}"></script>`;
            res.writeHead(response.statusCode, headers);
            res.end(
              Buffer.concat(chunks)
                .toString()
                .replace("</body>", script + "</body>"),
            );
          });
        } else {
          res.writeHead(response.statusCode, headers);
          response.pipe(res);
        }
      },
    );
    upstream.on("error", () => {
      if (!res.headersSent) res.writeHead(502);
      res.end("Preview is restarting. Reload shortly.");
    });
    res.on("close", () => upstream.destroy());
    upstream.end();
  }
}
