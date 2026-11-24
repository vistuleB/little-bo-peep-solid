import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash, randomBytes } from "node:crypto";
import { idFor, run } from "./workspace.mjs";
import { buildArguments } from "./commands.mjs";

export class Builds {
  constructor(workspace, execute = run) {
    this.execute = execute;
    this.workspace = workspace;
    this.jobs = new Map();
  }
  async start(branch, command) {
    const ws = this.workspace;
    buildArguments(command);
    if (
      this.starting ||
      [...this.jobs.values()].some((j) =>
        ["queued", "building"].includes(j.status),
      )
    )
      throw new Error("A build is already running.");
    this.starting = true;
    let revision;
    try {
      revision = await ws.exclusive(async () => {
        const record = await ws.open(branch);
        await ws.command(branch, command);
        return ws.git(["rev-parse", record.ref]);
      });
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
      log: "",
      manifest: null,
    };
    this.jobs.set(id, job);
    // Build snapshots independently; source editing remains available.
    this.perform(job).catch(() => {});
    return job;
  }
  async perform(job) {
    const ws = this.workspace,
      dir = path.join(ws.root, "build-workspaces", idFor(job.branch));
    const log = (text) => {
      job.log = (job.log + text).slice(-100_000);
    };
    job.status = "building";
    try {
      await fs.mkdir(path.dirname(dir), { recursive: true });
      await ws.exclusive(async () => {
        if (await exists(path.join(dir, ".git"))) {
          await ws.git(["reset", "--hard", job.revision], dir);
          // Remove stale generated files, retaining only the dependency caches.
          await ws.git(
            [
              "clean",
              "-ffdx",
              "-e",
              "/node_modules/",
              "-e",
              "/renderer/build/",
            ],
            dir,
          );
        } else {
          await ws.git(["worktree", "add", "--detach", dir, job.revision]);
        }
      });
      const options = {
        env: {
          PLACE: "EDITOR_SERVER",
          EDITOR_REVISION: job.revision,
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
      await this.execute(
        "gleam",
        buildArguments(job.command),
        path.join(dir, "renderer"),
        options,
      );
      await this.execute("npm", ["run", "build"], dir, options);
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
        const record = ws.state.branches[job.branch];
        record.preview = manifest;
        await ws.save();
      });
      job.status = "ready";
    } catch (error) {
      job.status = "failed";
      log("\n" + error.message);
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
