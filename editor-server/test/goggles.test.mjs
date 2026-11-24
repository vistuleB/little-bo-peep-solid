import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
const script = await readFile(
  new URL("../goggles.js", import.meta.url),
  "utf8",
);
function preview(rows) {
  const events = {},
    sent = [],
    scrolls = [];
  const parent = { postMessage: (data) => sent.push(data) };
  const fragments = rows.map(([file, line, top]) => ({
    dataset: { wlyFile: file, wlyLine: String(line), wlyRevision: "revision" },
    rect: {
      top,
      bottom: top + 10,
      left: 0,
      right: 100,
      width: 100,
      height: 10,
    },
  }));
  vm.runInNewContext(script, {
    document: {
      currentScript: { dataset: { editorOrigin: "http://editor" } },
      querySelectorAll: () => fragments,
      createRange: () => ({
        selectNodeContents(f) {
          this.f = f;
        },
        getClientRects() {
          return [this.f.rect];
        },
      }),
    },
    parent,
    location: { pathname: "/article/test" },
    innerHeight: 400,
    innerWidth: 375,
    scrollY: 0,
    scrollX: 0,
    scrollTo: (value) => scrolls.push(value),
    addEventListener: (name, cb) => {
      events[name] = cb;
    },
    setInterval() {},
    clearTimeout() {},
    setTimeout() {},
  });
  return {
    sent,
    scrolls,
    message: (data) =>
      events.message({
        source: parent,
        origin: "http://editor",
        data: { kind: "writerly-editor", ...data },
      }),
  };
}
test("tracking uses first three distinct matching blames, ignoring off-screen and duplicate fragments", () => {
  const p = preview([
    ["off.wly", 1, -50],
    ["header.wly", 1, 0],
    ["a.wly", 40, 20],
    ["a.wly", 40, 25],
    ["b.wly", 3, 30],
    ["a.wly", 20, 40],
    ["a.wly", 30, 50],
    ["a.wly", 2, 60],
  ]);
  p.message({ action: "track-source" });
  assert.equal(p.sent.at(-1).file, "a.wly");
  assert.equal(p.sent.at(-1).line, 20);
});
test("short previews fall back to the strongest match; empty previews report no source", () => {
  const p = preview([
    ["header.wly", 1, 0],
    ["a.wly", 7, 20],
    ["a.wly", 5, 30],
  ]);
  p.message({ action: "track-source" });
  assert.equal(p.sent.at(-1).line, 5);
  const empty = preview([]);
  empty.message({ action: "track-source" });
  assert.equal(empty.sent.at(-1).action, "no-source");
});
test("editor to preview seeks the closest rendered source line", () => {
  const p = preview([
    ["a.wly", 10, 100],
    ["a.wly", 30, 300],
    ["b.wly", 28, 200],
  ]);
  p.message({ action: "seek", file: "src/content/a.wly", line: 28 });
  assert.equal(p.scrolls[0].top, 272);
});
