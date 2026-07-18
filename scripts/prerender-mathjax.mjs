import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import MathJax from "mathjax";

const ROOT = process.cwd();
const ROUTES_DIR = path.join(ROOT, "src/routes");
const SETUP_PATH = path.join(ROOT, "public/mathjax_setup.js");
const OUTPUT_DIR = path.join(ROOT, "public/prerendered-mathjax");
const PRERENDER_ENABLED = process.env.PRERENDER_MATHJAX !== "false";

if (!PRERENDER_ENABLED) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  console.log("Pre-rendered MathJax disabled by PRERENDER_MATHJAX=false.");
  process.exit(0);
}

const decodeHtmlEntities = (value) =>
  value
    .replace(/&#(\d+);/g, (_, codePoint) =>
      String.fromCodePoint(Number(codePoint)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, codePoint) =>
      String.fromCodePoint(Number.parseInt(codePoint, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

const normalizeMathSource = (value) =>
  decodeHtmlEntities(value)
    .replace(/\{\s*"([^"]*)"\s*\}/g, "$1")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n")
    .trim();

const mathTextFromTsxChildren = (value) =>
  value
    .replace(/<[A-Z][A-Za-z0-9]*(?:\s[\s\S]*?)?\/>/g, "")
    .replace(/<\/?[A-Z][A-Za-z0-9]*(?:\s[\s\S]*?)?>/g, "")
    .trim();

const stripMathDelimiters = (kind, source) => {
  const normalized = normalizeMathSource(source);

  if (
    kind === "display" &&
    normalized.startsWith("$$") &&
    normalized.endsWith("$$")
  ) {
    return normalized.slice(2, -2).trim();
  }

  if (
    kind === "display" &&
    normalized.startsWith("\\[") &&
    normalized.endsWith("\\]")
  ) {
    return normalized.slice(2, -2).trim();
  }

  if (
    kind === "inline" &&
    normalized.startsWith("$") &&
    normalized.endsWith("$")
  ) {
    return normalized.slice(1, -1).trim();
  }

  if (
    kind === "inline" &&
    normalized.startsWith("\\(") &&
    normalized.endsWith("\\)")
  ) {
    return normalized.slice(2, -2).trim();
  }

  return normalized;
};

const prerenderedMathJaxKey = (kind, source) => {
  const text = `${kind}\n${stripMathDelimiters(kind, source)}`;
  return hashMathText(kind, text);
};

const whitespaceStableMathSource = (kind, source) =>
  stripMathDelimiters(kind, source).replace(/\s+/g, " ").trim();

const whitespaceStablePrerenderedMathJaxKey = (kind, source) => {
  const text = `${kind}\n${whitespaceStableMathSource(kind, source)}`;
  return hashMathText(kind, text);
};

const hashMathText = (kind, text) => {
  let hash = 0x811c9dc5;

  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return `${kind}:${(hash >>> 0).toString(36)}`;
};

const prerenderedMathJaxKeys = (kind, source) => {
  const primaryKey = prerenderedMathJaxKey(kind, source);
  const whitespaceStableKey = whitespaceStablePrerenderedMathJaxKey(
    kind,
    source,
  );

  return primaryKey === whitespaceStableKey
    ? [primaryKey]
    : [primaryKey, whitespaceStableKey];
};

const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      if (entry.isFile() && fullPath.endsWith(".tsx")) return [fullPath];
      return [];
    })
    .sort();

const loadMathJaxSetup = () => {
  const window = { env: { VITE_ENV: "LOCAL" } };
  const sandbox = { window, console };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(SETUP_PATH, "utf8"), sandbox, {
    filename: SETUP_PATH,
  });
  return window.MathJax || {};
};

const routePathForFile = (file) => {
  const relative = path.relative(ROUTES_DIR, file);
  const parsed = path.parse(relative);
  const withoutExt = path.join(parsed.dir, parsed.name);

  if (withoutExt === "index") return "index";
  return withoutExt;
};

const collectMath = () => {
  const expression = /<(MathBlock|Math)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g;
  const pages = new Map();
  let skipped = 0;

  for (const file of walk(ROUTES_DIR)) {
    const source = fs.readFileSync(file, "utf8");
    const routePath = routePathForFile(file);
    const entries = pages.get(routePath) || new Map();

    for (const match of source.matchAll(expression)) {
      const tag = match[1];
      const rawBody = match[2];
      const kind = tag === "MathBlock" ? "display" : "inline";
      const mathText = mathTextFromTsxChildren(rawBody);
      const tex = stripMathDelimiters(kind, mathText);
      if (!tex) continue;

      const keys = prerenderedMathJaxKeys(kind, mathText);
      entries.set(keys[0], { kind, tex, keys });
    }

    pages.set(routePath, entries);
  }

  return { pages, skipped };
};

const setup = loadMathJaxSetup();
const { options: _browserOnlyOptions, ...nodeSetup } = setup;

await MathJax.init({
  ...nodeSetup,
  loader: { ...(nodeSetup.loader || {}), load: ["input/tex", "output/svg"] },
  svg: { ...(nodeSetup.svg || {}), fontCache: "none" },
  startup: undefined,
});

const { pages, skipped } = collectMath();
const renderedPages = new Map();
let failed = 0;
let renderedCount = 0;

for (const [routePath, entries] of pages) {
  const rendered = {};

  for (const [key, entry] of entries) {
    try {
      const node = await MathJax.tex2svgPromise(entry.tex, {
        display: entry.kind === "display",
      });
      const html = MathJax.startup.adaptor.serializeXML(node);
      if (
        html.includes("mjx-merror") ||
        html.includes("data-mjx-error") ||
        html.includes("Undefined control sequence") ||
        html.match(/data-mml-node="mtext"[^>]*(?:fill|stroke)="red"[^>]*data-latex="\\/)
      ) {
        skipped += 1;
        continue;
      }
      for (const alias of entry.keys) {
        rendered[alias] = { html };
      }
      renderedCount += 1;
    } catch (error) {
      failed += 1;
      console.warn(`Could not prerender ${entry.kind} math ${key}`);
      console.warn(error.message);
    }
  }

  renderedPages.set(routePath, rendered);
}

fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });

for (const [routePath, rendered] of renderedPages) {
  const outputPath = path.join(OUTPUT_DIR, `${routePath}.js`);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const payload = JSON.stringify(rendered);
  fs.writeFileSync(
    outputPath,
    `window.__PRERENDERED_MATHJAX__ = Object.assign(window.__PRERENDERED_MATHJAX__ || {}, ${payload});\n`,
  );
}

const indexPath = path.join(OUTPUT_DIR, "index.js");
if (!fs.existsSync(indexPath)) {
  fs.mkdirSync(path.dirname(indexPath), { recursive: true });
  fs.writeFileSync(
    indexPath,
    "window.__PRERENDERED_MATHJAX__ = window.__PRERENDERED_MATHJAX__ || {};\n",
  );
}

console.log(
  `Pre-rendered ${renderedCount} MathJax entr${
    renderedCount === 1 ? "y" : "ies"
  } into ${renderedPages.size} page cache file${
    renderedPages.size === 1 ? "" : "s"
  }.`,
);
if (skipped)
  console.log(
    `Skipped ${skipped} complex MathBlock entr${skipped === 1 ? "y" : "ies"}.`,
  );
if (failed) {
  console.warn(`Failed to pre-render ${failed} entr${failed === 1 ? "y" : "ies"}.`);
  process.exitCode = 1;
}
