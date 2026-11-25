import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";
import { buildArguments } from "./commands.mjs";

export const idFor = (name) =>
  createHash("sha256").update(name).digest("hex").slice(0, 20);
export async function run(
  executable,
  args,
  cwd,
  { env = {}, log = () => {}, timeout = 600_000, signal } = {},
) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new Error("Build cancelled."));
    const grouped = !!signal && process.platform !== "win32";
    const child = spawn(executable, args, {
      cwd,
      shell: false,
      detached: grouped,
      env: { ...process.env, GIT_TERMINAL_PROMPT: "0", ...env },
    });
    let output = "";
    let killTimer;
    const kill = (how) => {
      try {
        if (grouped && child.pid) process.kill(-child.pid, how);
        else child.kill(how);
      } catch (error) {
        if (error.code !== "ESRCH") throw error;
      }
    };
    const stop = () => {
      kill("SIGTERM");
      killTimer ??= setTimeout(() => kill("SIGKILL"), 1500);
    };
    const timer = setTimeout(stop, timeout);
    signal?.addEventListener("abort", stop, { once: true });
    const cleanup = () => {
      clearTimeout(timer);
      if (killTimer) {
        kill("SIGKILL");
        clearTimeout(killTimer);
      }
      signal?.removeEventListener("abort", stop);
    };
    if (signal?.aborted) stop();
    for (const stream of [child.stdout, child.stderr])
      stream.on("data", (chunk) => {
        const text = chunk.toString();
        output = (output + text).slice(-2_000_000);
        log(text);
      });
    child.on("error", (error) => {
      cleanup();
      reject(error);
    });
    child.on("close", (code) => {
      cleanup();
      code === 0 && !signal?.aborted
        ? resolve(output.trim())
        : reject(
            new Error(
              `${executable} ${args.join(" ")} failed (${code}):\n${output.slice(-10000)}`,
            ),
          );
    });
  });
}

export class Workspace {
  constructor(root, remote) {
    this.root = path.resolve(root);
    this.remote = remote;
    this.repo = path.join(this.root, "repo");
    this.state = { branches: Object.create(null) };
    this.queue = Promise.resolve();
  }
  exclusive(fn) {
    const result = this.queue.then(fn);
    this.queue = result.catch(() => {});
    return result;
  }
  git(args, cwd = this.repo) {
    return run("git", args, cwd);
  }
  async init() {
    await fs.mkdir(this.root, { recursive: true });
    this.root = await fs.realpath(this.root);
    this.repo = path.join(this.root, "repo");
    try {
      this.state = JSON.parse(
        await fs.readFile(path.join(this.root, "state.json"), "utf8"),
      );
    } catch (e) {
      if (e.code !== "ENOENT") throw e;
    }
    this.state.branches = Object.assign(
      Object.create(null),
      this.state.branches,
    );
    try {
      await fs.access(path.join(this.repo, ".git"));
    } catch {
      if (!this.remote)
        throw new Error(
          "Set EDITOR_REPO_URL to a Git repository URL or local repository path.",
        );
      await run(
        "git",
        ["clone", "--no-checkout", "--", this.remote, this.repo],
        this.root,
      );
    }
    await this.git([
      "config",
      "user.name",
      process.env.EDITOR_GIT_NAME || "Book editor",
    ]);
    await this.git([
      "config",
      "user.email",
      process.env.EDITOR_GIT_EMAIL || "editor@localhost",
    ]);
  }
  async save() {
    const temp = path.join(this.root, "state.json.tmp");
    await fs.writeFile(temp, JSON.stringify(this.state, null, 2));
    await fs.rename(temp, path.join(this.root, "state.json"));
  }
  async fetch() {
    await this.git(["fetch", "--prune", "origin"]);
  }
  async remoteBranches() {
    return (
      await this.git([
        "for-each-ref",
        "--format=%(refname:strip=3)",
        "refs/remotes/origin/",
      ])
    )
      .split("\n")
      .filter((n) => n && n !== "HEAD");
  }
  async branches() {
    const names = [
      ...new Set([
        ...(await this.remoteBranches()),
        ...Object.keys(this.state.branches),
      ]),
    ].sort(
      (a, b) =>
        (this.state.branches[b]?.lastUsed || 0) -
          (this.state.branches[a]?.lastUsed || 0) || a.localeCompare(b),
    );
    return Promise.all(
      names.map(async (name) => {
        const record = this.state.branches[name];
        const remoteExists = (await this.remoteBranches()).includes(name);
        let ahead = 0,
          behind = remoteExists ? 0 : null;
        if (record && remoteExists)
          [ahead, behind] = (
            await this.git([
              "rev-list",
              "--left-right",
              "--count",
              `${record.ref}...refs/remotes/origin/${name}`,
            ])
          )
            .split(/\s+/)
            .map(Number);
        else if (record) ahead = null;
        return {
          name,
          ahead,
          behind,
          remoteMissing: !remoteExists,
          opened: !!record,
          lastUsed: record?.lastUsed || null,
          command: record?.command || "gleam run",
          commands: record?.commands || ["gleam run"],
          preview: record?.preview || null,
          revision: record ? await this.git(["rev-parse", record.ref]) : null,
        };
      }),
    );
  }
  // Only explicit UI selection counts as use. Internal opens for builds,
  // source reads and background work must not reshuffle the menu.
  async select(name) {
    const record = await this.open(name);
    record.lastUsed = Math.max(
      Date.now(),
      ...Object.values(this.state.branches).map((b) => (b.lastUsed || 0) + 1),
    );
    await this.save();
    return record;
  }
  async open(name) {
    if (this.state.branches[name]) return this.state.branches[name];
    if (!(await this.remoteBranches()).includes(name))
      throw new Error("Unknown remote branch. Refresh the branch list.");
    const id = idFor(name),
      dir = path.join(this.root, "drafts", id),
      ref = `refs/heads/editor/${id}`;
    await fs.mkdir(path.dirname(dir), { recursive: true });
    // A crash between worktree creation and state persistence is recoverable.
    try {
      await fs.access(path.join(dir, ".git"));
    } catch {
      await this.git([
        "worktree",
        "add",
        "-B",
        `editor/${id}`,
        dir,
        `refs/remotes/origin/${name}`,
      ]);
    }
    const record = { dir, ref, command: "gleam run", commands: ["gleam run"] };
    this.state.branches[name] = record;
    await this.save();
    return record;
  }
  async files(name) {
    const { dir } = await this.open(name);
    return (await this.git(["ls-files", "-z", "--", "src/content"], dir))
      .split("\0")
      .filter((f) => f.endsWith(".wly"))
      .sort();
  }
  async source(name, file) {
    const record = await this.open(name);
    if (!(await this.files(name)).includes(file))
      throw new Error("Choose an existing tracked .wly file.");
    const full = path.join(record.dir, file);
    const stat = await fs.lstat(full);
    if (!stat.isFile() || (await fs.realpath(full)) !== full)
      throw new Error("Symbolic links are not editable.");
    return {
      file,
      content: await fs.readFile(full, "utf8"),
      revision: await this.git(["rev-parse", "HEAD"], record.dir),
    };
  }
  async commit(name, revision, changes) {
    const { dir } = await this.open(name);
    if ((await this.git(["rev-parse", "HEAD"], dir)) !== revision)
      throw new Error(
        "The branch changed. Reload before committing; your browser edits are still available.",
      );
    if (await this.git(["status", "--porcelain"], dir))
      throw new Error(
        "The server draft has unfinished filesystem changes; manual recovery is required.",
      );
    if (!Array.isArray(changes) || !changes.length || changes.length > 100)
      throw new Error("No changes to commit.");
    const originals = new Map();
    for (const change of changes) {
      if (
        typeof change.content !== "string" ||
        Buffer.byteLength(change.content) > 2_000_000
      )
        throw new Error("Invalid source content.");
      originals.set(
        change.file,
        (await this.source(name, change.file)).content,
      );
    }
    try {
      for (const { file, content } of changes)
        await fs.writeFile(path.join(dir, file), content);
      await this.git(["add", "--", ...originals.keys()], dir);
      if (await this.git(["diff", "--cached", "--name-only"], dir))
        await this.git(
          [
            "commit",
            "-m",
            `Edit ${originals.size} Writerly file${originals.size === 1 ? "" : "s"}`,
          ],
          dir,
        );
    } catch (error) {
      for (const [file, text] of originals)
        await fs.writeFile(path.join(dir, file), text);
      await this.git(["reset", "--", ...originals.keys()], dir);
      throw error;
    }
    return { revision: await this.git(["rev-parse", "HEAD"], dir) };
  }
  async command(name, command) {
    buildArguments(command);
    const record = await this.open(name);
    record.command = command.trim();
    record.commands = [...new Set([record.command, ...record.commands])].slice(
      0,
      5,
    );
    await this.save();
  }
  async sync(name) {
    const record = await this.open(name);
    if (await this.git(["status", "--porcelain"], record.dir))
      throw new Error("Server draft is dirty; manual recovery required.");
    await this.fetch();
    if (!(await this.remoteBranches()).includes(name))
      throw new Error(
        "The remote branch is missing. The server draft is preserved.",
      );
    const temp = path.join(this.root, "sync", randomUUID());
    await fs.mkdir(path.dirname(temp), { recursive: true });
    await this.git(["worktree", "add", "--detach", temp, record.ref]);
    try {
      await this.git(
        ["merge", "--no-edit", `refs/remotes/origin/${name}`],
        temp,
      );
      await this.git(["push", "origin", `HEAD:refs/heads/${name}`], temp);
      const revision = await this.git(["rev-parse", "HEAD"], temp);
      await this.git(["reset", "--hard", revision], record.dir);
      await this.fetch();
      return { revision };
    } finally {
      // Only this disposable merge worktree is removed, including conflict files.
      await this.git(["worktree", "remove", "--force", temp]);
    }
  }
}
