import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const outputPath = new URL("../.output/public/index.html", import.meta.url);
const html = await readFile(outputPath, "utf8");
const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1];

assert.ok(head, "Built HTML must contain a <head> element");

const count = (pattern) => head.match(pattern)?.length ?? 0;

assert.equal(
  count(/<meta\s+name="viewport"(?:\s|>)/gi),
  1,
  "Built HTML must contain exactly one viewport declaration",
);
assert.equal(
  count(/<meta\s+charset="utf-8"\s*\/?>/gi),
  1,
  "Built HTML must contain one UTF-8 charset declaration",
);
assert.equal(
  count(/<meta\s+name="description"(?:\s|>)/gi),
  1,
  "Built HTML must contain one description",
);
assert.equal(
  count(/<meta\s+property="og:image"(?:\s|>)/gi),
  1,
  "Built HTML must contain one Open Graph preview image",
);
assert.equal(
  count(/<title>/gi),
  1,
  "Built HTML must contain exactly one title",
);

console.log("Built HTML audit passed");
