import { test } from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Sessions, SESSION_SECONDS } from "../sessions.mjs";

test("remembered devices survive restart, renew, expire and revoke independently", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "editor-sessions-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const file = path.join(root, "sessions.json");
  let now = 100000000;
  let sessions = new Sessions(file, true, () => now);
  await sessions.init();
  const [a, b] = await Promise.all([sessions.issue(), sessions.issue()]);
  assert.notEqual(a, b);
  assert.match(
    a,
    /HttpOnly; SameSite=Strict; Path=\/; Max-Age=7776000; Secure$/,
  );
  const request = (cookie) => ({ headers: { cookie: cookie.split(";")[0] } });
  const headers = {};
  const response = { setHeader: (k, v) => (headers[k] = v) };
  const stored = await fs.readFile(file, "utf8");
  assert.ok(!stored.includes(a.split(";")[0].split("=")[1]));
  sessions = new Sessions(file, true, () => now);
  await sessions.init();
  assert.equal(await sessions.authenticate(request(a), response), true);
  assert.equal(headers["set-cookie"], undefined);
  now += 2 * 86400000;
  assert.equal(await sessions.authenticate(request(a), response), true);
  assert.equal(headers["set-cookie"], a);
  await sessions.revoke(request(a));
  assert.equal(await sessions.authenticate(request(a), response), false);
  assert.equal(await sessions.authenticate(request(b), response), true);
  const c = await sessions.issue();
  await sessions.revoke(request(b), true);
  assert.equal(await sessions.authenticate(request(c), response), false);
  const d = await sessions.issue();
  now += SESSION_SECONDS * 1000;
  assert.equal(await sessions.authenticate(request(d), response), false);
  assert.equal(
    await sessions.authenticate(request("editor_session=forged"), response),
    false,
  );
});
