import { promises as fs } from "node:fs";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { run } from "./workspace.mjs";
import { buildArguments } from "./commands.mjs";

export class Builds {
  constructor(workspace) {
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
      dir = path.join(ws.root, "builds", job.id);
    const log = (text) => {
      job.log = (job.log + text).slice(-100_000);
    };
    job.status = "building";
    try {
      await fs.mkdir(path.dirname(dir), { recursive: true });
      await ws.exclusive(() =>
        ws.git(["worktree", "add", "--detach", dir, job.revision]),
      );
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
      await run("npm", ["ci", "--no-audit", "--no-fund"], dir, options);
      await run(
        "gleam",
        buildArguments(job.command),
        path.join(dir, "renderer"),
        options,
      );
      await run("npm", ["run", "build"], dir, options);
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
      job.status = "ready";
      await ws.exclusive(async () => {
        const record = ws.state.branches[job.branch];
        record.preview = manifest;
        await ws.command(job.branch, job.command);
      });
    } catch (error) {
      job.status = "failed";
      log("\n" + error.message);
    } finally {
      try {
        await ws.exclusive(() =>
          ws.git(["worktree", "remove", "--force", dir]),
        );
      } catch (error) {
        log("\nSnapshot cleanup: " + error.message);
      }
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
  for (const file of candidates) {
    const text = await fs.readFile(path.join(routes, file), "utf8");
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
