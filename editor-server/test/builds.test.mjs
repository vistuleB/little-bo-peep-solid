import { test } from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Workspace, run, idFor } from "../workspace.mjs";
import { Builds } from "../builds.mjs";

test("branch build workspace retains caches, resets sources, and publishes immutable previews", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "editor-build-test-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const repo = path.join(root, "origin");
  await fs.mkdir(repo);
  const git = (args) => run("git", args, repo);
  await git(["init", "-b", "develop"]);
  await git(["config", "user.name", "Test"]);
  await git(["config", "user.email", "test@example.invalid"]);
  await fs.mkdir(path.join(repo, "src/content"), { recursive: true });
  await fs.writeFile(path.join(repo, "src/content/ch1.wly"), "first");
  await fs.writeFile(path.join(repo, "package-lock.json"), "one");
  await git(["add", "."]);
  await git(["commit", "-m", "initial"]);
  const ws = new Workspace(path.join(root, "server"), repo);
  await ws.init();
  const record = await ws.open("develop");
  let installs = 0,
    renders = 0,
    fail = false;
  const execute = async (cmd, args, cwd) => {
    if (args[0] === "--version") return "1";
    if (cmd === "npm" && args[0] === "ci") {
      installs++;
      await fs.mkdir(path.join(cwd, "node_modules"), { recursive: true });
    } else if (cmd === "gleam") {
      renders++;
      const dir = path.dirname(cwd);
      if (renders > 1)
        assert.equal(
          await fs.readFile(path.join(cwd, "build/cache"), "utf8"),
          "compiled",
        );
      await fs.mkdir(path.join(cwd, "build"), { recursive: true });
      await fs.writeFile(path.join(cwd, "build/cache"), "compiled");
      assert.equal(
        await fs.stat(path.join(dir, "stale.tsx")).catch(() => null),
        null,
      );
      await fs.mkdir(path.join(dir, "src/routes/article"), { recursive: true });
      await fs.writeFile(
        path.join(dir, "src/routes/index.tsx"),
        '<SourceFragment file="ch1.wly" line={1}>',
      );
      await fs.writeFile(path.join(dir, "stale.tsx"), "stale");
      if (fail) throw new Error("render failed");
    } else {
      await fs.mkdir(path.join(cwd, ".output/public"), { recursive: true });
      await fs.copyFile(
        path.join(cwd, "src/content/ch1.wly"),
        path.join(cwd, ".output/public/index.html"),
      );
    }
    return "";
  };
  const build = async (builder) => {
    const job = await builder.start("develop", "gleam run");
    while (["queued", "building"].includes(job.status))
      await new Promise((r) => setTimeout(r, 10));
    return job;
  };
  let builder = new Builds(ws, execute);
  const first = await build(builder);
  assert.equal(first.status, "ready", first.log);
  const source = await ws.source("develop", "src/content/ch1.wly");
  await ws.commit("develop", source.revision, [
    { file: "src/content/ch1.wly", content: "second" },
  ]);
  // A service restart also reuses the on-disk cache.
  builder = new Builds(ws, execute);
  const second = await build(builder);
  assert.equal(second.status, "ready", second.log);
  assert.equal(installs, 1);
  assert.equal(
    await fs.readFile(
      path.join(ws.root, "previews", first.id, "index.html"),
      "utf8",
    ),
    "first",
  );
  assert.equal(
    await fs.readFile(
      path.join(ws.root, "previews", second.id, "index.html"),
      "utf8",
    ),
    "second",
  );
  await fs.writeFile(path.join(record.dir, "package-lock.json"), "two");
  await ws.git(["add", "package-lock.json"], record.dir);
  await ws.git(["commit", "-m", "dependency change"], record.dir);
  fail = true;
  assert.equal((await build(builder)).status, "failed");
  assert.equal(installs, 2);
  assert.equal(record.preview.id, second.id);
  fail = false;
  assert.equal((await build(builder)).status, "ready");
  assert.equal(installs, 2);
  assert.equal(await ws.git(["status", "--porcelain"], record.dir), "");
  assert.ok(
    await fs.stat(path.join(ws.root, "build-workspaces", idFor("develop"))),
  );
});
