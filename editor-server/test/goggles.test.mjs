import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
const script = await readFile(
  new URL("../goggles.js", import.meta.url),
  "utf8",
);
function preview(rows, { contentPresent = true, headerHeight = 0 } = {}) {
  let timer;
  const events = {},
    sent = [],
    scrolls = [],
    keys = [];
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
      activeElement: {
        dispatchEvent: (event) => {
          keys.push(event);
          return false;
        },
      },
      currentScript: { dataset: { editorOrigin: "http://editor" } },
      querySelectorAll: () => fragments,
      querySelector: (selector) =>
        selector === "[data-header-blob]"
          ? { getBoundingClientRect: () => ({ height: headerHeight }) }
          : contentPresent
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
    KeyboardEvent: class {
      constructor(type, options) {
        this.type = type;
        Object.assign(this, options);
      }
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
    keys,
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
    ["header.wly", 1, 60],
    ["a.wly", 40, 80],
    ["a.wly", 40, 85],
    ["b.wly", 3, 90],
    ["a.wly", 20, 100],
    ["a.wly", 30, 110],
    ["a.wly", 2, 120],
  ]);
  p.message({ action: "track-source" });
  assert.equal(p.sent.at(-1).file, "a.wly");
  assert.equal(p.sent.at(-1).line, 20);
});
test("short previews fall back to the strongest match; empty previews report no source", () => {
  const p = preview([
    ["header.wly", 1, 60],
    ["a.wly", 7, 80],
    ["a.wly", 5, 90],
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
  const p = preview([["a.wly", 5, 70]]);
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
    ["bt3/bt3.wly", 30, 90],
    ["bt3/bt3.wly", 31, 100],
    ["bt3/bt3.wly", 32, 110],
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

test("kite reserves the rendered header height above the target", () => {
  const p = preview([["a.wly", 30, 300]], { headerHeight: 84 });
  p.message({ action: "seek", file: "src/content/a.wly", line: 30 });
  assert.equal(p.scrolls[0].top, 188);
  const nearTop = preview([["a.wly", 1, 40]], { headerHeight: 84 });
  nearTop.message({ action: "seek", file: "src/content/a.wly", line: 1 });
  assert.equal(nearTop.scrolls[0].top, 0);
});

test("snail excludes the obscured top 54px for both live locks and source jumps", () => {
  const rows = [
    ["hidden.wly", 1, 10],
    ["hidden.wly", 2, 30],
    ["hidden.wly", 3, 44],
    ["visible.wly", 20, 54],
    ["visible.wly", 21, 70],
    ["visible.wly", 22, 90],
  ];
  const p = preview(rows);
  p.message({ action: "tracking", enabled: true });
  p.settle();
  assert.equal(p.sent.at(-1).file, "visible.wly");
  p.message({ action: "track-source" });
  assert.equal(p.sent.at(-1).file, "visible.wly");
  assert.equal(p.sent.at(-1).line, 20);
});

test("shell keyboard forwarding dispatches one app event with modifiers intact", () => {
  const p = preview([]);
  p.message({
    action: "keyboard",
    type: "keydown",
    key: "ArrowRight",
    code: "ArrowRight",
    shiftKey: true,
    repeat: true,
  });
  assert.equal(p.keys.length, 1);
  assert.equal(p.keys[0].key, "ArrowRight");
  assert.equal(p.keys[0].shiftKey, true);
  assert.equal(p.keys[0].repeat, true);
  p.message({ action: "keyboard", type: "click", key: "x" });
  assert.equal(p.keys.length, 1);
});
