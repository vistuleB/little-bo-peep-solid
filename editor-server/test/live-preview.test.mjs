import { test } from "node:test";
import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { syncRuntime, LivePreviews } from "../live-preview.mjs";

test("runtime publication updates changed files only and excludes checkout secrets and Writerly sources", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "live-preview-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const source = path.join(root, "source"),
    target = path.join(root, "target");
  await fs.mkdir(path.join(source, "src/content"), { recursive: true });
  await fs.mkdir(path.join(source, "public"), { recursive: true });
  await fs.writeFile(path.join(source, "src/page.tsx"), "first");
  await fs.writeFile(path.join(source, "src/content/a.wly"), "private source");
  await fs.writeFile(path.join(source, ".env"), "SECRET=123");
  await fs.writeFile(path.join(source, "public/image.svg"), "<svg/>");
  await fs.symlink(path.join(source, ".env"), path.join(source, "public/leak"));
  await fs.writeFile(path.join(source, "app.config.ts"), "config");
  const first = await syncRuntime(source, target);
  const mtime = (await fs.stat(path.join(target, "src/page.tsx"))).mtimeMs;
  assert.equal(first.changed, 3);
  assert.equal((await syncRuntime(source, target)).changed, 0);
  assert.equal(
    (await fs.stat(path.join(target, "src/page.tsx"))).mtimeMs,
    mtime,
  );
  for (const file of [".env", "src/content/a.wly", "public/leak"])
    await assert.rejects(fs.access(path.join(target, file)));
  await fs.writeFile(path.join(source, "src/page.tsx"), "second");
  await fs.rm(path.join(source, "public/image.svg"));
  const second = await syncRuntime(source, target);
  assert.equal(second.changed, 2);
  assert.equal(second.configKey, first.configKey);
  assert.equal(
    await fs.readFile(path.join(target, "src/page.tsx"), "utf8"),
    "second",
  );
  await assert.rejects(fs.access(path.join(target, "public/image.svg")));
});

test("scratch rebuild preserves the previous preview's dependency tree", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "live-dependencies-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const live = new LivePreviews(
    { root },
    "https://editor.invalid",
    () => "https://preview.invalid",
  );
  const source = path.join(root, "build");
  const runtime = live.directory("develop");
  await fs.mkdir(path.join(source, "node_modules"), { recursive: true });
  await fs.mkdir(runtime, { recursive: true });
  await fs.writeFile(
    path.join(source, "node_modules/marker"),
    "old dependencies",
  );
  await fs.symlink(
    path.join(source, "node_modules"),
    path.join(runtime, "node_modules"),
  );
  await live.preserveDependencies("develop", source);
  await fs.rm(source, { recursive: true, force: true });
  assert.equal(
    await fs.readFile(path.join(runtime, "node_modules/marker"), "utf8"),
    "old dependencies",
  );
  await live.preserveDependencies("develop", source);
  assert.equal(
    await fs.readFile(path.join(runtime, "node_modules/marker"), "utf8"),
    "old dependencies",
  );
});
