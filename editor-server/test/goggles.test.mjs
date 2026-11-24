import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
const script = await readFile(
  new URL("../goggles.js", import.meta.url),
  "utf8",
);
function preview(rows, { contentPresent = true } = {}) {
  let timer;
  const events = {},
    sent = [],
    scrolls = [];
  const parent = { postMessage: (data) => sent.push(data) };
  const fragments = rows.map(([file, line, top, outside = false]) => ({
    outside,
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
      querySelector: () =>
        contentPresent
          ? {
              querySelectorAll: () => fragments.filter((f) => !f.outside),
              getBoundingClientRect: () => ({
                top: 0,
                bottom: 1000,
                left: 0,
                right: 375,
              }),
            }
          : null,
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
    clearTimeout() {
      timer = null;
    },
    setTimeout(fn) {
      timer = fn;
      return 1;
    },
  });
  return {
    sent,
    scrolls,
    settle: () => {
      const fn = timer;
      timer = null;
      fn?.();
    },
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

test("live tracking reports searching then locked without navigating, and stops when disabled", () => {
  const p = preview([["a.wly", 5, 10]]);
  p.message({ action: "tracking", enabled: true });
  assert.equal(p.sent.at(-1).status, "searching");
  p.settle();
  assert.equal(p.sent.at(-1).action, "tracking");
  assert.equal(p.sent.at(-1).status, "locked");
  assert.equal(p.sent.at(-1).line, 5);
  p.message({ action: "tracking", enabled: false });
  p.settle();
  assert.ok(!p.sent.some((message) => message.action === "source"));
  const empty = preview([]);
  empty.message({ action: "tracking", enabled: true });
  empty.settle();
  assert.equal(empty.sent.at(-1).status, "none");
});

test("snail ignores header blames even when they would win the three-location vote", () => {
  const p = preview([
    ["__parent.wly", 10, 0, true],
    ["__parent.wly", 11, 10, true],
    ["__parent.wly", 12, 20, true],
    ["bt3/bt3.wly", 30, 30],
    ["bt3/bt3.wly", 31, 40],
    ["bt3/bt3.wly", 32, 50],
  ]);
  p.message({ action: "track-source" });
  assert.equal(p.sent.at(-1).file, "bt3/bt3.wly");
  assert.equal(p.sent.at(-1).line, 30);
  const loading = preview([["__parent.wly", 10, 0, true]], {
    contentPresent: false,
  });
  loading.message({ action: "track-source" });
  assert.equal(loading.sent.at(-1).action, "no-source");
});
