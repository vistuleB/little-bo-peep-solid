export type PrerenderedMathKind = "inline" | "display";

export type PrerenderedMathJaxEntry = {
  html: string;
};

declare global {
  interface Window {
    __PRERENDERED_MATHJAX__?: Record<string, PrerenderedMathJaxEntry>;
  }
}

const decodeHtmlEntities = (value: string) =>
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

const collectText = (value: unknown): string => {
  if (value === null || value === undefined || value === false) return "";
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  if (Array.isArray(value)) return value.map(collectText).join("");
  return "";
};

const normalizeMathSource = (value: string) =>
  decodeHtmlEntities(value)
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n")
    .trim();

export const stripMathDelimiters = (
  kind: PrerenderedMathKind,
  source: string,
) => {
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

export const mathTextFromChildren = (children: unknown) =>
  normalizeMathSource(collectText(children));

export const prerenderedMathJaxKey = (
  kind: PrerenderedMathKind,
  source: string,
) => {
  const text = `${kind}\n${stripMathDelimiters(kind, source)}`;
  let hash = 0x811c9dc5;

  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return `${kind}:${(hash >>> 0).toString(36)}`;
};

export const getPrerenderedMathJax = (
  kind: PrerenderedMathKind,
  children: unknown,
) => {
  if (typeof window === "undefined") return undefined;

  const source = mathTextFromChildren(children);
  if (!source) return undefined;

  return window.__PRERENDERED_MATHJAX__?.[
    prerenderedMathJaxKey(kind, source)
  ];
};

export default getPrerenderedMathJax;
