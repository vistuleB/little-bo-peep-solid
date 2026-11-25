import { test } from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Workspace, run, idFor } from "../workspace.mjs";

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "editor-history-"));
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
  const file = "src/content/a.wly";
  await fs.writeFile(path.join(desktop, file), "zero\n");
  await git(["add", "."]);
  await git(["commit", "-m", "baseline"]);
  await git(["push", "-u", "origin", "develop"]);
  const ws = new Workspace(path.join(root, "server"), remote);
  await ws.init();
  await ws.open("develop");
  const info = () => ws.branchInfo("develop");
  const commit = async (text, forward) =>
    ws.commit(
      "develop",
      (await info()).revision,
      [{ file, content: text + "\n" }],
      forward,
    );
  const move = async (direction) =>
    ws.move("develop", (await info()).revision, direction);
  return { root, remote, desktop, git, ws, file, info, commit, move };
}

test("history navigation, forward truncation, restart and stale requests", async (t) => {
  const { ws, remote, info, commit, move, file } = await fixture(t);
  await commit("one");
  await commit("two");
  await commit("three");
  assert.equal((await info()).discard, 3);
  await move(-1);
  await move(-1);
  assert.equal((await info()).discard, 1);
  assert.equal((await info()).reinstate, 2);
  assert.equal((await ws.source("develop", file)).content, "one\n");
  const restart = new Workspace(ws.root, remote);
  await restart.init();
  assert.equal((await restart.branchInfo("develop")).reinstate, 2);
  const pin = await ws.git([
    "rev-parse",
    `refs/editor-history/${idFor("develop")}`,
  ]);
  assert.equal(pin, ws.state.branches.develop.history.commits.at(-1));
  await assert.rejects(commit("replacement"), /Confirm discarding 2/);
  await assert.rejects(commit("replacement", 1), /Confirm discarding 2/);
  const old = (await info()).revision;
  await commit("replacement", 2);
  assert.equal((await info()).discard, 2);
  assert.equal((await info()).reinstate, 0);
  await assert.rejects(ws.move("develop", old, -1), /branch changed/);
  await move(-1);
  await assert.rejects(
    ws.set("develop", (await info()).revision, 2),
    /Confirm discarding 1/,
  );
  await ws.set("develop", (await info()).revision, 1);
  assert.equal((await info()).reinstate, 0);
  await move(-1);
  await assert.rejects(move(-1), /No revision/);
});

test("sync publishes the selected prefix and preserves forward memory", async (t) => {
  const { ws, info, commit, move, file, git } = await fixture(t);
  await commit("one");
  await commit("two");
  await commit("three");
  await move(-1);
  await move(-1);
  const selected = (await info()).revision;
  await ws.sync("develop", { revision: selected });
  assert.equal((await info()).ahead, 0);
  assert.equal((await info()).discard, 0);
  assert.equal((await info()).reinstate, 2);
  await git(["pull", "--ff-only"]);
  assert.equal(await git(["show", `HEAD:${file}`]), "one");
  await move(1);
  assert.equal((await ws.source("develop", file)).content, "two\n");
  assert.equal((await info()).ahead, 1);
  await move(1);
  await ws.sync("develop");
  assert.equal((await info()).discard, 0);
  assert.equal((await info()).reinstate, 0);
});

test("squash sync rebases future revisions and incorporates remote changes", async (t) => {
  const { ws, info, commit, move, file, git, desktop } = await fixture(t);
  await commit("one");
  await commit("two");
  await commit("three");
  await move(-1);
  await fs.writeFile(path.join(desktop, "src/content/remote.wly"), "remote\n");
  await git(["add", "."]);
  await git(["commit", "-m", "remote addition"]);
  await git(["push"]);
  await ws.sync("develop", {
    revision: (await info()).revision,
    squash: true,
    message: "Review changes",
  });
  assert.equal((await info()).discard, 0);
  assert.equal((await info()).reinstate, 1);
  assert.equal((await info()).ahead, 0);
  assert.equal((await info()).behind, 0);
  assert.equal((await ws.source("develop", file)).content, "two\n");
  await move(1);
  assert.equal((await ws.source("develop", file)).content, "three\n");
  assert.equal(
    (await ws.source("develop", "src/content/remote.wly")).content,
    "remote\n",
  );
  await git(["pull", "--ff-only"]);
  assert.match(await git(["log", "--format=%s"]), /Review changes/);
  assert.doesNotMatch(await git(["log", "--format=%s"]), /Edit 1 Writerly/);
});

test("a conflict in forward memory leaves sync and local history unchanged", async (t) => {
  const { ws, info, commit, move, file, git, desktop } = await fixture(t);
  await commit("future");
  await move(-1);
  await fs.writeFile(path.join(desktop, file), "remote conflict\n");
  await git(["add", "."]);
  await git(["commit", "-m", "remote change"]);
  await git(["push"]);
  const before = (await info()).revision;
  const remoteBefore = await git(["rev-parse", "HEAD"]);
  await assert.rejects(ws.sync("develop"), /CONFLICT/);
  assert.equal((await info()).revision, before);
  assert.equal((await info()).reinstate, 1);
  assert.match(
    await ws.git(["ls-remote", "origin", "refs/heads/develop"]),
    new RegExp(remoteBefore),
  );
  await move(1);
  assert.equal((await ws.source("develop", file)).content, "future\n");
});

test("refresh recognizes revisions published by another checkout before squash", async (t) => {
  const { ws, info, commit, git } = await fixture(t);
  await commit("published elsewhere");
  const published = (await info()).revision;
  await ws.git(["push", "origin", `${published}:refs/heads/develop`]);
  await ws.fetch();
  assert.equal((await info()).discard, 0);
  await commit("new local edit");
  await ws.sync("develop", { squash: true, message: "Only new edits" });
  await git(["pull", "--ff-only"]);
  await git(["merge-base", "--is-ancestor", published, "HEAD"]);
  assert.equal(await git(["log", "-1", "--format=%s"]), "Only new edits");
});

test("recent commits follows the selected revision and returns five hashes and subjects", async (t) => {
  const { ws, info, commit, move } = await fixture(t);
  await assert.rejects(ws.recentCommits("unknown"), /Select a branch/);
  for (let i = 1; i <= 6; i++) await commit(`revision ${i}`);
  const latest = await ws.recentCommits("develop");
  assert.equal(latest.commits.length, 5);
  assert.equal(latest.revision, (await info()).revision);
  assert.equal(latest.commits[0].hash, latest.revision);
  assert.match(latest.commits[0].hash, /^[a-f0-9]{40}$/);
  assert.equal(latest.commits[0].message, "Edit 1 Writerly file");
  await move(-1);
  const previous = await ws.recentCommits("develop");
  assert.equal(previous.commits[0].hash, latest.commits[1].hash);
  assert.equal(previous.commits.length, 5);
});
