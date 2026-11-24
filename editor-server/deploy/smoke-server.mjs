// Run inside the editor container as root, so the sign-in secret can be read.
// Builds an existing branch without changing source or pushing any commits.
import { request } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

const origin = process.env.EDITOR_ORIGIN;
const host = new URL(origin).host;
const branch = process.argv[2] || "develop";
let cookie = "";
function call(path, data, requestHost = host, authenticated = true) {
  return new Promise((resolve, reject) => {
    const req = request(
      {
        hostname: "127.0.0.1",
        port: process.env.EDITOR_PORT || 3019,
        path,
        method: data ? "POST" : "GET",
        headers: {
          host: requestHost,
          origin,
          "content-type": "application/json",
          ...(authenticated && cookie ? { cookie } : {}),
        },
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () =>
          resolve({ status: res.statusCode, headers: res.headers, body }),
        );
      },
    );
    req.setTimeout(30_000, () => req.destroy(new Error("Request timed out")));
    req.on("error", reject);
    req.end(data ? JSON.stringify(data) : undefined);
  });
}
async function api(path, data) {
  const response = await call("/api/" + path, data);
  assert.ok(response.status >= 200 && response.status < 300, response.body);
  return JSON.parse(response.body);
}
assert.equal((await call("/api/branches", null, host, false)).status, 401);
const token = (await readFile(process.env.EDITOR_TOKEN_FILE, "utf8")).trim();
const login = await call("/api/login", { token });
assert.equal(login.status, 200);
cookie = login.headers["set-cookie"][0].split(";")[0];
await api("refresh", {});
await api("open", { branch });
const job = process.argv[3]
  ? await api("job?id=" + process.argv[3])
  : await api("build", { branch, command: "gleam run" });
console.log(`Building ${branch}: ${job.id}`);
const start = Date.now();
let latest;
while (Date.now() - start < 1_800_000) {
  latest = await api("job?id=" + job.id);
  await writeFile("/data/deployment-smoke.log", latest.log);
  if (!["queued", "building"].includes(latest.status)) break;
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
assert.equal(latest.status, "ready", latest.log.slice(-3000));
const previewHost = new URL(latest.url).host;
const manifestResponse = await call(
  "/editor-manifest.json",
  null,
  previewHost,
  false,
);
assert.equal(manifestResponse.status, 200);
const manifest = JSON.parse(manifestResponse.body);
assert.ok(manifest.pages.length > 1);
assert.notEqual(
  (await call("/api/branches", null, previewHost, false)).status,
  200,
);
const page = await call(manifest.pages[0].path, null, previewHost, false);
assert.equal(page.status, 200);
assert.match(page.body, /_editor\/goggles\.js/);
console.log(
  JSON.stringify({
    branch,
    preview: latest.url,
    pages: manifest.pages.length,
    seconds: (Date.now() - start) / 1000,
  }),
);
console.log(
  "Passed: login, GitHub fetch, full build, preview manifest, goggles injection, API isolation.",
);
