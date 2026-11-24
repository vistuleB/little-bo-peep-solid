import { test } from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Workspace, run } from "../workspace.mjs";
import { buildArguments } from "../commands.mjs";
import { resolvePlace } from "../../config/place.mjs";

test("build command parser accepts selectors and rejects shell/CLI escapes", () => {
  assert.deepEqual(buildArguments("gleam run"), ["run"]);
  assert.deepEqual(buildArguments("gleam run -- --only ch5 work=ing"), [
    "run",
    "--",
    "--only",
    "ch5",
    "work=ing",
  ]);
  for (const command of [
    "gleam run; id",
    "gleam run && id",
    "gleam run $(id)",
    "gleam run\nid",
    "gleam run -- --local",
    "gleam run -- --clean",
    "gleam run -m evil",
    "gleam run -- --only ../../etc",
    "gleam run -- --only --local",
    "gleam running",
    "gleam run -- --only ch5|id",
  ])
    assert.throws(() => buildArguments(command), command);
});
test("PLACE has explicit modes and safe default", () => {
  assert.equal(resolvePlace(), "APP_SERVER");
  for (const PLACE of ["LOCAL", "EDITOR_SERVER", "APP_SERVER"])
    assert.equal(resolvePlace({ PLACE }), PLACE);
  assert.throws(() => resolvePlace({ PLACE: "local" }));
});
test("commit, sync, divergence, conflict isolation, missing remote and restart", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "editor-git-test-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const remote = path.join(root, "remote.git"),
    desktop = path.join(root, "desktop");
  await run("git", ["init", "--bare", remote], root);
  await run("git", ["clone", remote, desktop], root);
  const git = (args) => run("git", args, desktop);
  await git(["config", "user.name", "Test"]);
  await git(["config", "user.email", "test@example.invalid"]);
  await git(["checkout", "-b", "develop"]);
  await fs.mkdir(path.join(desktop, "src/content"), { recursive: true });
  const file = "src/content/ch1.wly";
  await fs.writeFile(path.join(desktop, file), "original\n");
  await git(["add", "."]);
  await git(["commit", "-m", "initial"]);
  await git(["push", "-u", "origin", "develop"]);
  const ws = new Workspace(path.join(root, "server"), remote);
  await ws.init();
  const record = await ws.open("develop");
  assert.deepEqual(await ws.files("develop"), [file]);
  await assert.rejects(ws.source("develop", "../outside.wly"));
  const source = await ws.source("develop", file);
  await assert.rejects(
    ws.commit("develop", "stale", [{ file, content: "bad" }]),
    /branch changed/,
  );
  await ws.commit("develop", source.revision, [{ file, content: "phone\n" }]);
  assert.equal((await ws.branches())[0].ahead, 1);
  await ws.sync("develop");
  assert.equal((await ws.branches())[0].ahead, 0);
  await git(["pull", "--ff-only"]);
  // Independent changes merge cleanly and are both preserved.
  await fs.writeFile(path.join(desktop, "src/content/ch2.wly"), "desktop\n");
  await git(["add", "."]);
  await git(["commit", "-m", "desktop independent"]);
  await git(["push"]);
  const before = await ws.source("develop", file);
  await ws.commit("develop", before.revision, [
    { file, content: "phone next\n" },
  ]);
  await ws.fetch();
  const divergent = (await ws.branches())[0];
  assert.equal(divergent.ahead, 1);
  assert.equal(divergent.behind, 1);
  await ws.sync("develop");
  assert.equal((await ws.branches())[0].behind, 0);
  assert.equal(
    (await ws.source("develop", "src/content/ch2.wly")).content,
    "desktop\n",
  );
  // Both sides edit the same line: the merge fails outside the draft.
  await git(["pull", "--ff-only"]);
  await fs.writeFile(path.join(desktop, file), "desktop conflict\n");
  await git(["add", "."]);
  await git(["commit", "-m", "conflict"]);
  await git(["push"]);
  const current = await ws.source("develop", file);
  await ws.commit("develop", current.revision, [
    { file, content: "phone conflict\n" },
  ]);
  const head = await ws.git(["rev-parse", "HEAD"], record.dir);
  await assert.rejects(ws.sync("develop"), /CONFLICT/);
  assert.equal(await ws.git(["rev-parse", "HEAD"], record.dir), head);
  assert.equal(await ws.git(["status", "--porcelain"], record.dir), "");
  assert.equal((await ws.source("develop", file)).content, "phone conflict\n");
  await ws.commit("develop", head, [{ file, content: "still editable\n" }]);
  await git(["push", "origin", "--delete", "develop"]);
  await assert.rejects(ws.sync("develop"), /remote branch is missing/);
  assert.equal((await ws.branches())[0].remoteMissing, true);
  const restart = new Workspace(ws.root, remote);
  await restart.init();
  assert.equal(
    (await restart.source("develop", file)).content,
    "still editable\n",
  );
});
