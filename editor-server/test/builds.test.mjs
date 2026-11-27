import { test } from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Workspace, run, idFor } from "../workspace.mjs";
import { running, sourceKey, needsBuild } from "../ui/preview-state.mjs";
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
  await fs.mkdir(path.join(repo, "src/routes/article"), { recursive: true });
  await fs.writeFile(
    path.join(repo, "src/routes/article/unused.tsx"),
    "committed unused route",
  );
  await git(["add", "."]);
  await git(["commit", "-m", "initial"]);
  const ws = new Workspace(path.join(root, "server"), repo);
  await ws.init();
  const record = await ws.open("develop");
  let installs = 0,
    renders = 0,
    fail = false,
    corrupt = false;
  const execute = async (cmd, args, cwd, options) => {
    assert.equal(
      options.env.WLY_IMAGE_CACHE_DIR,
      path.join(ws.root, "build-cache", "images"),
    );
    if (args[0] === "--version") return "1";
    if (cmd === "npm" && args[0] === "ci") {
      installs++;
      await fs.mkdir(path.join(cwd, "node_modules"), { recursive: true });
    } else if (cmd === "gleam") {
      if (corrupt) {
        corrupt = false;
        throw new Error(
          `File IO failure\n${cwd}/build/packages/gleam_stdlib/gleam.toml\nNo such file or directory`,
        );
      }
      renders++;
      const cache = options.env.WLY_IMAGE_CACHE_DIR;
      if (renders > 1 && installs < 3)
        assert.equal(
          await fs.readFile(path.join(cache, "renderer-owned"), "utf8"),
          "opaque",
        );
      await fs.mkdir(cache, { recursive: true });
      await fs.writeFile(path.join(cache, "renderer-owned"), "opaque");
      const dir = path.dirname(cwd);
      if (renders > 1 && installs < 3)
        assert.equal(
          await fs.readFile(path.join(cwd, "build/cache"), "utf8"),
          "compiled",
        );
      await fs.mkdir(path.join(cwd, "build"), { recursive: true });
      await fs.writeFile(path.join(cwd, "build/cache"), "compiled");
      if (renders > 1 && installs < 3) {
        assert.equal(
          await fs
            .stat(path.join(dir, "src/routes/article/unused.tsx"))
            .catch(() => null),
          null,
          "deleted generated routes must not be restored",
        );
        assert.equal(
          await fs.readFile(path.join(dir, "stale.tsx"), "utf8"),
          "stale",
          "untracked build artifacts survive",
        );
      }
      await fs.rm(path.join(dir, "src/routes/article/unused.tsx"), {
        force: true,
      });
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
    while (running(job.status)) await new Promise((r) => setTimeout(r, 10));
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

  const latest = await ws.source("develop", "src/content/ch1.wly");
  const changes = [{ file: "src/content/ch1.wly", content: "browser draft" }];
  const draft = await builder.start("develop", "gleam run", {
    revision: latest.revision,
    changes,
  });
  while (running(draft.status)) await new Promise((r) => setTimeout(r, 10));
  assert.equal(draft.status, "ready", draft.log);
  assert.equal(
    await fs.readFile(
      path.join(ws.root, "previews", draft.id, "index.html"),
      "utf8",
    ),
    "browser draft",
  );
  assert.equal(
    (await ws.source("develop", "src/content/ch1.wly")).content,
    "second",
  );
  assert.equal(await ws.git(["status", "--porcelain"], record.dir), "");
  assert.equal(
    await needsBuild(
      draft.manifest,
      "develop",
      latest.revision,
      changes,
      "gleam run",
    ),
    false,
  );
  assert.equal(
    await needsBuild(
      draft.manifest,
      "develop",
      latest.revision,
      [],
      "gleam run",
    ),
    true,
  );
  assert.equal((await build(builder)).status, "ready");
  assert.equal(
    await fs.readFile(
      path.join(ws.root, "previews", record.preview.id, "index.html"),
      "utf8",
    ),
    "second",
    "discarded browser changes are restored before building",
  );
  const preserved = record.preview.id;
  let entered;
  const started = new Promise((resolve) => (entered = resolve));
  const cancellable = new Builds(ws, async (...args) => {
    if (args[0] !== "gleam") return execute(...args);
    entered();
    await new Promise((resolve, reject) =>
      args[3].signal.addEventListener(
        "abort",
        () => reject(new Error("stopped")),
        { once: true },
      ),
    );
  });
  const cancelled = await cancellable.start("develop", "gleam run");
  await started;
  cancellable.cancel(cancelled.id);
  assert.equal(cancellable.busy(), true);
  while (running(cancelled.status)) await new Promise((r) => setTimeout(r, 10));
  assert.equal(cancelled.status, "cancelled");
  assert.equal(record.preview.id, preserved);
  assert.equal(cancellable.busy(), false);
  await assert.rejects(
    builder.start("develop", "gleam run", { revision: "stale", changes }),
    /Branch changed/,
  );
  await fs.writeFile(path.join(record.dir, "package-lock.json"), "two");
  await fs.writeFile(path.join(record.dir, "src/added.ts"), "new input");
  await ws.git(["add", "package-lock.json", "src/added.ts"], record.dir);
  await ws.git(["commit", "-m", "dependency change"], record.dir);
  fail = true;
  assert.equal((await build(builder)).status, "failed");
  assert.equal(installs, 2);
  assert.equal(
    await fs.readFile(
      path.join(ws.root, "build-workspaces", idFor("develop"), "src/added.ts"),
      "utf8",
    ),
    "new input",
  );
  await fs.rm(path.join(record.dir, "src/added.ts"));
  await ws.git(["add", "-u"], record.dir);
  await ws.git(["commit", "-m", "remove input"], record.dir);
  assert.equal(record.preview.id, preserved);
  fail = false;
  assert.equal((await build(builder)).status, "ready");
  assert.equal(installs, 2);
  assert.equal(
    await fs
      .stat(
        path.join(
          ws.root,
          "build-workspaces",
          idFor("develop"),
          "src/added.ts",
        ),
      )
      .catch(() => null),
    null,
  );
  assert.equal(await ws.git(["status", "--porcelain"], record.dir), "");
  assert.ok(
    await fs.stat(path.join(ws.root, "build-workspaces", idFor("develop"))),
  );
  const preview = record.preview.id;
  builder.starting = true;
  await assert.rejects(builder.clean("develop"), /Wait/);
  builder.starting = false;
  const cleaning = builder.clean("develop");
  await assert.rejects(builder.start("develop", "gleam run"), /cleanup/);
  await cleaning;
  await builder.clean("develop"); // Already empty is harmless.
  assert.equal(
    await fs
      .stat(path.join(ws.root, "build-cache", "images"))
      .catch(() => null),
    null,
  );
  assert.equal(record.preview.id, preview);
  assert.equal(
    (await ws.source("develop", "src/content/ch1.wly")).content,
    "second",
  );
  assert.equal(
    await fs.readFile(
      path.join(ws.root, "previews", preview, "index.html"),
      "utf8",
    ),
    "second",
  );
  assert.equal(
    await fs
      .stat(path.join(ws.root, "build-workspaces", idFor("develop")))
      .catch(() => null),
    null,
  );
  assert.equal((await build(builder)).status, "ready");
  assert.equal(installs, 3);
  corrupt = true;
  const repaired = await build(builder);
  assert.equal(repaired.status, "ready", repaired.log);
  assert.match(repaired.log, /retrying once/);
  assert.equal(installs, 3);
  let published = 0;
  const incremental = new Builds(
    ws,
    async (...args) => {
      assert.notDeepEqual(args.slice(0, 2), ["npm", ["run", "build"]]);
      return execute(...args);
    },
    {
      publish: async (_dir, manifest) => {
        published++;
        return { ...manifest, live: true };
      },
      exclusive: (fn) => fn(),
      stop: async () => {},
    },
  );
  const fast = await build(incremental);
  assert.equal(fast.status, "ready", fast.log);
  assert.equal(fast.manifest.live, true);
  assert.equal(published, 1);
  const scratchBuilder = new Builds(ws, async (cmd, args, cwd, options) => {
    if (cmd === "gleam")
      assert.equal(
        await fs
          .stat(path.join(path.dirname(cwd), "stale.tsx"))
          .catch(() => null),
        null,
      );
    return execute(cmd, args, cwd, {
      ...options,
      env: {
        ...options.env,
        WLY_IMAGE_CACHE_DIR: path.join(ws.root, "build-cache", "images"),
      },
    });
  });
  const cold = await scratchBuilder.start("develop", "gleam run", {
    scratch: true,
  });
  while (running(cold.status)) await new Promise((r) => setTimeout(r, 10));
  assert.equal(cold.status, "ready", cold.log);
  assert.equal(installs, 4);
  assert.equal(
    await fs.readFile(
      path.join(ws.root, "previews", preview, "index.html"),
      "utf8",
    ),
    "second",
  );
});

test("aborting a subprocess terminates its process group", async () => {
  const controller = new AbortController();
  let grandchild;
  const pending = run(
    process.execPath,
    [
      "-e",
      'const {spawn}=require("node:child_process"); const c=spawn(process.execPath,["-e","setInterval(()=>{},1000)"],{stdio:"ignore"}); console.log(c.pid); setInterval(()=>{},1000)',
    ],
    process.cwd(),
    {
      signal: controller.signal,
      log(text) {
        grandchild = Number(text.trim());
        controller.abort();
      },
    },
  );
  await assert.rejects(pending);
  assert.ok(grandchild > 0);
  await new Promise((r) => setTimeout(r, 100));
  assert.throws(() => process.kill(grandchild, 0), { code: "ESRCH" });
});

test("preview reuse follows file trees rather than history-only commit changes", async () => {
  const preview = {
    branch: "develop",
    revision: "old",
    tree: "same-tree",
    command: "gleam run",
    contentKey: await sourceKey("same-tree"),
  };
  assert.equal(
    await needsBuild(
      preview,
      "develop",
      "squashed",
      [],
      "gleam run",
      "same-tree",
    ),
    false,
  );
  assert.equal(
    await needsBuild(
      preview,
      "develop",
      "new",
      [],
      "gleam run",
      "different-tree",
    ),
    true,
  );
  assert.equal(
    await needsBuild(
      preview,
      "develop",
      "old",
      [{ file: "a.wly", content: "edit" }],
      "gleam run",
      "same-tree",
    ),
    true,
  );
  assert.equal(
    await needsBuild(
      preview,
      "develop",
      "old",
      [],
      "gleam run -- --only bt3",
      "same-tree",
    ),
    true,
  );
});
