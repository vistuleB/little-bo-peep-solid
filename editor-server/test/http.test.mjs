import { test } from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import path from "node:path";
import os from "node:os";
import { run } from "../workspace.mjs";

for (const googleEnabled of [false, true])
  test(`editor HTTP authentication and origin boundary (Google ${googleEnabled ? "configured" : "disabled"})`, async (t) => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "editor-http-"));
    t.after(() => fs.rm(root, { recursive: true, force: true }));
    const repo = path.join(root, "seed");
    await fs.mkdir(repo);
    const git = (args) => run("git", args, repo);
    await git(["init", "-b", "develop"]);
    await git(["config", "user.name", "Test"]);
    await git(["config", "user.email", "test@example.invalid"]);
    await fs.mkdir(path.join(repo, "src/content"), { recursive: true });
    await fs.writeFile(path.join(repo, "src/content/a.wly"), "Hello\n");
    await git(["add", "."]);
    await git(["commit", "-m", "seed"]);
    const reservation = createServer();
    await new Promise((resolve) => reservation.listen(0, "127.0.0.1", resolve));
    const port = reservation.address().port;
    await new Promise((resolve) => reservation.close(resolve));
    const origin = `http://localhost:${port}`;
    const child = spawn(process.execPath, ["editor-server/server.mjs"], {
      cwd: path.resolve(import.meta.dirname, "../.."),
      env: {
        ...process.env,
        EDITOR_PORT: String(port),
        EDITOR_ORIGIN: origin,
        EDITOR_DATA_DIR: path.join(root, "data"),
        EDITOR_REPO_URL: repo,
        EDITOR_TOKEN: "test-token",
        EDITOR_GOOGLE_CLIENT_ID: googleEnabled
          ? "test.apps.googleusercontent.com"
          : "",
        EDITOR_GOOGLE_EMAIL: googleEnabled ? "owner@gmail.com" : "",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    t.after(() => child.kill());
    await new Promise((resolve, reject) => {
      const timer = setTimeout(
        () => reject(new Error("Server startup timeout")),
        10000,
      );
      child.stdout.on("data", (data) => {
        if (data.toString().includes("Editor:")) {
          clearTimeout(timer);
          resolve();
        }
      });
      child.once("exit", (code) => {
        clearTimeout(timer);
        reject(new Error("Server exited: " + code));
      });
    });
    const request = (
      route,
      { data, cookie, host, requestOrigin = origin } = {},
    ) =>
      fetch(origin + route, {
        method: data === undefined ? "GET" : "POST",
        headers: {
          ...(cookie ? { cookie } : {}),
          ...(host ? { host } : {}),
          ...(data === undefined
            ? {}
            : { origin: requestOrigin, "content-type": "application/json" }),
        },
        body: data === undefined ? undefined : JSON.stringify(data),
      });
    const configResponse = await request("/api/auth-config");
    const config = await configResponse.json();
    assert.equal(
      config.googleClientId,
      googleEnabled ? "test.apps.googleusercontent.com" : null,
    );
    if (googleEnabled) {
      assert.match(config.nonce, /^[A-Za-z0-9_-]{43}$/);
      assert.match(
        configResponse.headers.get("set-cookie"),
        /HttpOnly; SameSite=Strict/,
      );
      assert.match(
        configResponse.headers.get("content-security-policy"),
        /accounts.google.com/,
      );
    }
    assert.equal(
      (await request("/api/login/google", { data: { credential: "forged" } }))
        .status,
      401,
    );
    assert.equal(
      (
        await request("/api/login/google", {
          data: { credential: "forged" },
          requestOrigin: "https://evil.example",
        })
      ).status,
      403,
    );
    assert.equal((await request("/api/branches")).status, 401);
    assert.equal(
      (await request("/api/login", { data: { token: "wrong" } })).status,
      401,
    );
    assert.equal(
      (
        await request("/api/login", {
          data: { token: "test-token" },
          requestOrigin: "https://evil.example",
        })
      ).status,
      403,
    );
    const login = await request("/api/login", {
      data: { token: "test-token" },
    });
    assert.equal(login.status, 200);
    assert.match(login.headers.get("set-cookie"), /HttpOnly; SameSite=Strict/);
    const cookie = login.headers.get("set-cookie").split(";")[0];
    assert.equal(
      (await request("/api/open", { cookie, data: { branch: "develop" } }))
        .status,
      200,
    );
    const files = await (
      await request("/api/files?branch=develop", { cookie })
    ).json();
    assert.deepEqual(files.files, ["src/content/a.wly"]);
    assert.equal(
      (
        await request("/api/source?branch=develop&file=../package.json", {
          cookie,
        })
      ).status,
      400,
    );
    assert.equal(
      (
        await request("/api/commit", {
          cookie,
          data: {},
          requestOrigin: "https://evil.example",
        })
      ).status,
      403,
    );
    assert.equal(
      (
        await request("/api/build", {
          cookie,
          data: { branch: "develop", command: "gleam run; whoami" },
        })
      ).status,
      400,
    );
    const page = await request("/");
    assert.match(
      page.headers.get("content-security-policy"),
      /frame-ancestors 'none'/,
    );
  });
