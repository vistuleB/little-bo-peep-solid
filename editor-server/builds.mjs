import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash, randomBytes } from "node:crypto";
import { idFor, run } from "./workspace.mjs";
import { sourceKey, running } from "./ui/preview-state.mjs";
import { buildArguments } from "./commands.mjs";

export class Builds {
  constructor(workspace, execute = run, live = null) {
    this.live = live;
    this.execute = execute;
    this.workspace = workspace;
    this.jobs = new Map();
    this.controllers = new Map();
  }
  busy() {
    return (
      this.starting ||
      this.cleaning ||
      [...this.jobs.values()].some((job) => running(job.status))
    );
  }
  async clean(branch) {
    if (this.busy())
      throw new Error("Wait for the current build or cache cleanup to finish.");
    if (!Object.hasOwn(this.workspace.state.branches, branch))
      throw new Error("Unknown branch.");
    this.cleaning = true;
    try {
      if (this.live) await this.live.exclusive(() => this.live.stop());
      const ws = this.workspace;
      await ws.exclusive(async () => {
        const dir = path.join(ws.root, "build-workspaces", idFor(branch));
        if (await exists(path.join(dir, ".git")))
          await ws.git(["worktree", "remove", "--force", dir]);
        else await fs.rm(dir, { recursive: true, force: true });
        await fs.rm(
          path.join(ws.root, "build-cache", idFor(branch) + ".json"),
          { force: true },
        );
      });
      // Shared optimized images must also be cleared for a true cold rebuild.
      await fs.rm(path.join(ws.root, "build-cache", "images"), {
        recursive: true,
        force: true,
      });
      return { ok: true };
    } finally {
      this.cleaning = false;
    }
  }
  cancel(id) {
    const job = this.jobs.get(id);
    if (!job) throw new Error("Unknown build.");
    if (["queued", "building", "cancelling"].includes(job.status)) {
      job.status = "cancelling";
      this.controllers.get(id)?.abort();
    }
    return { id, status: job.status };
  }
  async start(branch, command, snapshot = {}) {
    const ws = this.workspace;
    buildArguments(command);
    if (this.busy())
      throw new Error("A build or cache cleanup is already running.");
    let revision, inputKey, tree, contentKey;
    const changes = structuredClone(snapshot.changes || []);
    if (!Array.isArray(changes) || changes.length > 100)
      throw new Error("Invalid build changes.");
    this.starting = true;
    try {
      revision = await ws.exclusive(async () => {
        const record = await ws.open(branch);
        const revision = await ws.git(["rev-parse", record.ref]);
        if (
          (snapshot.revision && snapshot.revision !== revision) ||
          (changes.length && !snapshot.revision)
        )
          throw new Error(
            "Branch changed. Reload before building; your edits are still available.",
          );
        const seen = new Set();
        for (const change of changes) {
          if (
            !change ||
            typeof change.file !== "string" ||
            typeof change.content !== "string" ||
            Buffer.byteLength(change.content) > 2_000_000 ||
            seen.has(change.file)
          )
            throw new Error("Invalid build changes.");
          seen.add(change.file);
          await ws.source(branch, change.file);
        }
        await ws.command(branch, command);
        return revision;
      });
      inputKey = await sourceKey(revision, changes);
      tree = await ws.git(["rev-parse", `${revision}^{tree}`]);
      contentKey = await sourceKey(tree, changes);
    } finally {
      this.starting = false;
    }
    const id = randomBytes(12).toString("hex");
    const job = {
      id,
      branch,
      revision,
      command,
      status: "queued",
      production: !!snapshot.production,
      scratch: !!snapshot.scratch,
      draft: changes.length > 0,
      sourceKey: inputKey,
      tree,
      contentKey,
      log: "",
      manifest: null,
    };
    this.jobs.set(id, job);
    this.controllers.set(id, new AbortController());
    // Build snapshots independently; source editing remains available.
    this.perform(job, changes).catch(() => {});
    return job;
  }
  async perform(job, changes = []) {
    const ws = this.workspace,
      dir = path.join(ws.root, "build-workspaces", idFor(job.branch));
    const log = (text) => {
      job.log = (job.log + text).slice(-100_000);
    };
    const signal = this.controllers.get(job.id).signal;
    const check = () => {
      if (signal.aborted) throw new Error("Build cancelled.");
    };
    if (!signal.aborted) job.status = "building";
    try {
      check();
      if (job.scratch) {
        log(
          "Building from scratch: clearing this branch’s workspace and caches.\n",
        );
        if (this.live)
          await this.live.exclusive(() =>
            this.live.preserveDependencies(job.branch, dir),
          );
        await ws.exclusive(async () => {
          if (await exists(path.join(dir, ".git")))
            await ws.git(["worktree", "remove", "--force", dir]);
          else await fs.rm(dir, { recursive: true, force: true });
        });
        await fs.rm(
          path.join(ws.root, "build-cache", idFor(job.branch) + ".json"),
          { force: true },
        );
        await fs.rm(
          path.join(ws.root, "build-cache", "images", idFor(job.branch)),
          { recursive: true, force: true },
        );
      }
      await fs.mkdir(path.dirname(dir), { recursive: true });
      await ws.exclusive(async () => {
        if (await exists(path.join(dir, ".git"))) {
          // Restore only changed inputs. Renderer output (including deliberately
          // absent routes) belongs to the preceding build, not the Git snapshot.
          const changed = (
            await ws.git(
              ["diff", "--name-only", "--no-renames", "-z", job.revision, "--"],
              dir,
            )
          )
            .split("\0")
            .filter((file) => file && !generatedOutput(file));
          for (let i = 0; i < changed.length; i += 100)
            await ws.git(
              [
                "restore",
                "--source",
                job.revision,
                "--worktree",
                "--",
                ...changed.slice(i, i + 100),
              ],
              dir,
            );
          // Advance the baseline without writing any worktree files.
          if ((await ws.git(["rev-parse", "HEAD"], dir)) !== job.revision)
            await ws.git(["reset", "--mixed", job.revision], dir);
          log("Reusing generated output; refreshed changed source inputs.\n");
        } else {
          await ws.git(["worktree", "add", "--detach", dir, job.revision]);
        }
      });
      check();
      for (const { file, content } of changes) {
        const target = path.join(dir, file);
        if (
          (await fs.realpath(target)) !== target ||
          !(await fs.lstat(target)).isFile()
        )
          throw new Error("Invalid build source path.");
        await fs.writeFile(target, content);
      }
      const options = {
        signal,
        env: {
          PLACE: "EDITOR_SERVER",
          EDITOR_REVISION: job.revision,
          WLY_IMAGE_CACHE_DIR: job.scratch
            ? path.join(ws.root, "build-cache", "images", idFor(job.branch))
            : path.join(ws.root, "build-cache", "images"),
          PATH:
            path.join(dir, "node_modules/.bin") +
            path.delimiter +
            process.env.PATH,
        },
        log,
        timeout: 1_200_000,
      };
      const cacheDir = path.join(ws.root, "build-cache");
      await fs.mkdir(cacheDir, { recursive: true });
      const stamp = path.join(cacheDir, idFor(job.branch) + ".json");
      const npmKey = await fingerprint(
        dir,
        ["package.json", "package-lock.json", ".npmrc"],
        [
          process.version,
          process.platform,
          process.arch,
          await this.execute("npm", ["--version"], dir, options),
        ],
      );
      let cached = {};
      try {
        cached = JSON.parse(await fs.readFile(stamp, "utf8"));
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (
        cached.npm !== npmKey ||
        !(await exists(path.join(dir, "node_modules")))
      ) {
        if (this.live) await this.live.exclusive(() => this.live.stop());
        await fs.rm(stamp, { force: true });
        await this.execute(
          "npm",
          ["ci", "--no-audit", "--no-fund"],
          dir,
          options,
        );
        await fs.writeFile(stamp, JSON.stringify({ npm: npmKey }));
      } else {
        log("Reusing installed npm dependencies.\n");
      }
      // Gleam checks source/dependency/compiler changes against its retained build cache.
      log("Using persistent Gleam build cache.\n");
      const rendererDir = path.join(dir, "renderer");
      const render = () =>
        this.execute(
          "gleam",
          buildArguments(job.command),
          rendererDir,
          options,
        );
      try {
        await render();
      } catch (error) {
        // Gleam's package index can survive a partially deleted package cache.
        // Retry only this cache-specific IO failure, never source/compiler errors.
        if (
          !error.message.includes("File IO failure") ||
          !error.message.includes("No such file or directory") ||
          !error.message.includes(
            path.join(rendererDir, "build", "packages") + path.sep,
          )
        )
          throw error;
        log(
          "\nIncomplete Gleam package cache; clearing it and retrying once.\n",
        );
        await fs.rm(path.join(rendererDir, "build"), {
          recursive: true,
          force: true,
        });
        await render();
      }
      if (this.live && !job.production) {
        check();
        const manifest = await sourceManifest(dir, job);
        // Publication is short and non-cancellable; rendering above remains cancellable.
        job.status = "publishing";
        job.manifest = await this.live.publish(
          dir,
          manifest,
          npmKey,
          log,
          signal,
        );
        await ws.exclusive(async () => {
          ws.state.branches[job.branch].preview = job.manifest;
          await ws.save();
        });
        job.status = "ready";
        return;
      }
      await this.execute("npm", ["run", "build"], dir, options);
      check();
      const manifest = await sourceManifest(dir, job);
      const publicDir = path.join(ws.root, "previews", job.id);
      await fs.mkdir(path.dirname(publicDir), { recursive: true });
      await fs.cp(path.join(dir, ".output", "public"), publicDir, {
        recursive: true,
      });
      await fs.writeFile(
        path.join(publicDir, "editor-manifest.json"),
        JSON.stringify(manifest),
      );
      job.manifest = manifest;
      await ws.exclusive(async () => {
        check();
        job.status = "publishing";
        const record = ws.state.branches[job.branch];
        const previous = record.preview;
        record.preview = manifest;
        try {
          await ws.save();
        } catch (error) {
          record.preview = previous;
          throw error;
        }
      });
      job.status = "ready";
    } catch (error) {
      const status = signal.aborted ? "cancelled" : "failed";
      log(
        "\n" +
          (signal.aborted
            ? "Build cancelled. Previous preview preserved."
            : error.message),
      );
      await fs
        .rm(path.join(ws.root, "previews", job.id), {
          recursive: true,
          force: true,
        })
        .catch(() => {});
      job.status = status;
    } finally {
      this.controllers.delete(job.id);
    }
  }
}

export async function sourceManifest(dir, job) {
  const routes = path.join(dir, "src/routes");
  const pages = [];
  const candidates = [
    "index.tsx",
    ...(await fs.readdir(path.join(routes, "article")))
      .filter((f) => f.endsWith(".tsx"))
      .map((f) => `article/${f}`),
  ];
  let common = "";
  for (const file of [
    "HeaderBlob",
    "LeftHeaderBlob",
    "HamburgerPanelAuthorSuppliedContents",
  ]) {
    try {
      common += await fs.readFile(
        path.join(dir, "src/components", file + ".tsx"),
        "utf8",
      );
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  for (const file of candidates) {
    const text = (await fs.readFile(path.join(routes, file), "utf8")) + common;
    const sources = [];
    for (const match of text.matchAll(/<SourceFragment\b([^>]+)>/g)) {
      const name = /\bfile="([^"]+)"/.exec(match[1])?.[1];
      const line = /\bline=(?:"(\d+)"|\{(\d+)\})/.exec(match[1]);
      if (name && line && name.endsWith(".wly"))
        sources.push({
          file: "src/content/" + name.replace(/^\.\//, ""),
          line: Number(line[1] || line[2]),
        });
    }
    pages.push({
      path: file === "index.tsx" ? "/" : "/" + file.replace(/\.tsx$/, ""),
      sources,
    });
  }
  if (!pages.some((p) => p.sources.length))
    throw new Error(
      "Build has no editor provenance. Merge the editor infrastructure into this branch first.",
    );
  return {
    id: job.id,
    branch: job.branch,
    revision: job.revision,
    command: job.command,
    sourceKey: job.sourceKey,
    tree: job.tree,
    contentKey: job.contentKey,
    draft: !!job.draft,
    builtAt: new Date().toISOString(),
    pages,
  };
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function fingerprint(dir, files, extra) {
  const hash = createHash("sha256").update(JSON.stringify(extra));
  for (const file of files) {
    hash.update(file);
    try {
      hash.update(await fs.readFile(path.join(dir, file)));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      hash.update("<missing>");
    }
  }
  return hash.digest("hex");
}

function generatedOutput(file) {
  return (
    file === "image-map.json" ||
    file === "src/routes/index.tsx" ||
    /^src\/routes\/article\/[^/]+\.tsx$/.test(file) ||
    /^src\/components\/(HeaderBlob|LeftHeaderBlob|HamburgerPanelAuthorSuppliedContents)\.tsx$/.test(
      file,
    )
  );
}
