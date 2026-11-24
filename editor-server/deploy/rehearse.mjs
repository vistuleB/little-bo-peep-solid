// Run from the repository root. Uses only an isolated local Git remote.
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdir, readFile, writeFile, statfs } from "node:fs/promises";
import assert from "node:assert/strict";
import { get } from "node:http";
const exec = promisify(execFile);
const composeArgs = [
  "compose",
  "-f",
  "editor-server/deploy/compose.yaml",
  "-f",
  "editor-server/deploy/rehearsal.yaml",
];
const compose = async (...args) => {
  const task = exec("docker", [...composeArgs, ...args], {
    maxBuffer: 10_000_000,
  });
  if (args[0] === "build") {
    task.child.stdout.pipe(process.stdout);
    task.child.stderr.pipe(process.stderr);
  }
  const result = await task;
  return args[0] === "build" ? "Image built." : result.stdout.trim();
};
const space = await statfs(".");
const resuming = process.argv.includes("--resume");
const requiredGiB = resuming ? 2 : 6;
if (space.bavail * space.bsize < requiredGiB * 1024 ** 3)
  throw new Error(
    `Free at least ${requiredGiB} GiB on the host with Docker running before the container rehearsal.`,
  );
await exec("docker", ["info"]);
await exec("docker", ["buildx", "version"]);
const root = ".editor-data/container-rehearsal";
await mkdir(root, { recursive: true });
await exec(process.execPath, ["editor-server/deploy/setup.mjs"]);
await exec("git", [
  "bundle",
  "create",
  `${root}/seed.bundle`,
  "refs/heads/codex-suggestions",
]);
console.log("Building the image…");
console.log(await compose("build"));
console.log(
  await compose(
    "run",
    "--rm",
    "--no-deps",
    "editor",
    "sh",
    "-c",
    "if [ ! -d /data/fixture/remote.git ]; then git clone --bare /fixture/seed.bundle /data/fixture/remote.git; fi",
  ),
);
console.log(await compose("up", "-d"));
const origin = `http://localhost:${process.env.EDITOR_PUBLIC_PORT || 3020}`;
function statusAtHost(path, host) {
  return new Promise((resolve, reject) => {
    const request = get(origin + path, { headers: { host } }, (response) => {
      response.resume();
      resolve(response.statusCode);
    });
    request.setTimeout(4000, () =>
      request.destroy(new Error("Request timed out")),
    );
    request.on("error", reject);
  });
}
const token = (
  await readFile(".editor-data/container-secrets/editor-token", "utf8")
).trim();
let cookie;
async function login() {
  const deadline = Date.now() + 180_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(origin + "/api/login", {
        method: "POST",
        headers: { origin, "content-type": "application/json" },
        body: JSON.stringify({ token }),
        signal: AbortSignal.timeout(4000),
      });
      if (res.ok) {
        cookie = res.headers.get("set-cookie").split(";")[0];
        return;
      }
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("Editor did not start; inspect docker compose logs.");
}
async function api(route, data) {
  const res = await fetch(origin + "/api/" + route, {
    method: data ? "POST" : "GET",
    headers: { cookie, origin, "content-type": "application/json" },
    body: data ? JSON.stringify(data) : undefined,
  });
  const value = await res.json();
  if (!res.ok) throw new Error(value.error);
  return value;
}
const branch = "codex-suggestions";
await login();
await api("open", { branch });
const files = (await api(`files?branch=${branch}`)).files;
const file = files.find((f) => /bt3.*\.wly$/.test(f));
assert.ok(file, "bt3 source available");
const source = await api(
  `source?branch=${branch}&file=${encodeURIComponent(file)}`,
);
const commit = await api("commit", {
  branch,
  revision: source.revision,
  changes: [{ file, content: source.content + "\n" }],
});
await api("sync", { branch });
async function build() {
  const start = Date.now();
  const job = await api("build", {
    branch,
    command: "gleam run -- --only bt3",
  });
  let peakMemory = "",
    latest;
  while (Date.now() - start < 1_200_000) {
    latest = await api("job?id=" + job.id);
    await writeFile(`${root}/${job.id}.log`, latest.log);
    if (!["queued", "building"].includes(latest.status)) break;
    const id = await compose("ps", "-q", "editor");
    const stats = (
      await exec("docker", [
        "stats",
        "--no-stream",
        "--format",
        "{{.MemUsage}}",
        id,
      ])
    ).stdout.trim();
    peakMemory += stats + "\n";
    await new Promise((r) => setTimeout(r, 2000));
  }
  await writeFile(`${root}/${job.id}.log`, latest.log);
  assert.equal(latest.status, "ready", latest.log.slice(-3000));
  const url = new URL(latest.url);
  assert.equal(await statusAtHost("/editor-manifest.json", url.host), 200);
  const blocked = await statusAtHost("/api/branches", url.host);
  assert.notEqual(blocked, 200, "preview hostname cannot access editor API");
  return {
    id: job.id,
    seconds: (Date.now() - start) / 1000,
    memorySamples: peakMemory,
    url: latest.url,
  };
}
console.log("Building the first preview…");
const first = await build();
console.log("Replacing the container, keeping its volume…");
await compose("up", "-d", "--force-recreate");
await login();
assert.equal(
  (await api(`source?branch=${branch}&file=${encodeURIComponent(file)}`))
    .revision,
  commit.revision,
);
assert.equal((await api(`preview?branch=${branch}`)).id, first.id);
console.log("Building again from retained caches…");
const second = await build();
const cachedLog = await readFile(`${root}/${second.id}.log`, "utf8");
assert.match(cachedLog, /Reusing installed npm dependencies/);
assert.doesNotMatch(cachedLog, /Downloading packages|Compiling gleam_stdlib/);
const disk = await compose("exec", "-T", "editor", "du", "-sh", "/data");
await writeFile(
  `${root}/results.json`,
  JSON.stringify({ first, second, disk }, null, 2),
);
console.log(
  JSON.stringify(
    {
      firstBuildSeconds: first.seconds,
      cachedBuildSeconds: second.seconds,
      disk,
      preview: second.url,
    },
    null,
    2,
  ),
);
console.log(
  "Passed: Git sync, build, isolated preview routing, persisted commit/preview, cached rebuild after container replacement.",
);
