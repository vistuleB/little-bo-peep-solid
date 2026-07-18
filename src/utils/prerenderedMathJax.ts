export type PrerenderedMathKind = "inline" | "display";

export type PrerenderedMathJaxEntry = {
  html: string;
};

type PrerenderedMathJaxRouteCacheStatus =
  | "loading"
  | "loaded"
  | "missing"
  | "invalid"
  | "error";

declare global {
  interface Window {
    __PRERENDERED_MATHJAX__?: Record<string, PrerenderedMathJaxEntry>;
    __PRERENDERED_MATHJAX_ROUTE_CACHE__?: Record<
      string,
      PrerenderedMathJaxRouteCacheStatus
    >;
  }
}

const cacheListeners = new Set<() => void>();

export const subscribePrerenderedMathJaxCache = (listener: () => void) => {
  cacheListeners.add(listener);
  listener();
  return () => cacheListeners.delete(listener);
};

const notifyCacheListeners = () => {
  cacheListeners.forEach((listener) => listener());
};

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

export const prerenderedMathJaxRouteCachePath = (pathname: string) => {
  const route = pathname.replace(/\/+$/, "") || "/index";
  return `/prerendered-mathjax${route}.js?v=${encodeURIComponent(
    import.meta.env.PRERENDER_MATHJAX_CACHE_VERSION,
  )}`;
};

export const getPrerenderedMathJaxRouteCacheStatus = (pathname: string) => {
  if (typeof window === "undefined") return "server";
  const src = prerenderedMathJaxRouteCachePath(pathname);
  return window.__PRERENDERED_MATHJAX_ROUTE_CACHE__?.[src] || "unrequested";
};

export const ensurePrerenderedMathJaxRouteCache = (pathname: string) => {
  if (!import.meta.env.PRERENDER_MATHJAX) return;
  if (typeof window === "undefined") return;

  window.__PRERENDERED_MATHJAX_ROUTE_CACHE__ ||= {};

  const src = prerenderedMathJaxRouteCachePath(pathname);
  const status = window.__PRERENDERED_MATHJAX_ROUTE_CACHE__[src];
  if (status === "loading" || status === "loaded") return;

  window.__PRERENDERED_MATHJAX_ROUTE_CACHE__[src] = "loading";

  void fetch(src)
    .then(async (response) => {
      const text = await response.text();
      if (!response.ok) {
        window.__PRERENDERED_MATHJAX_ROUTE_CACHE__![src] = "missing";
        return;
      }
      if (!text.trimStart().startsWith("window.__PRERENDERED_MATHJAX__")) {
        window.__PRERENDERED_MATHJAX_ROUTE_CACHE__![src] = "invalid";
        return;
      }

      new Function(text)();
      window.__PRERENDERED_MATHJAX_ROUTE_CACHE__![src] = "loaded";
    })
    .catch((error) => {
      console.error("Could not load pre-rendered MathJax route cache", error);
      window.__PRERENDERED_MATHJAX_ROUTE_CACHE__![src] = "error";
    })
    .finally(notifyCacheListeners);
};

export const prerenderedMathJaxKey = (
  kind: PrerenderedMathKind,
  source: string,
) => {
  const text = `${kind}\n${stripMathDelimiters(kind, source)}`;
  return hashMathText(kind, text);
};

const whitespaceStableMathSource = (
  kind: PrerenderedMathKind,
  source: string,
) => stripMathDelimiters(kind, source).replace(/\s+/g, " ").trim();

export const whitespaceStablePrerenderedMathJaxKey = (
  kind: PrerenderedMathKind,
  source: string,
) => {
  const text = `${kind}\n${whitespaceStableMathSource(kind, source)}`;
  return hashMathText(kind, text);
};

const hashMathText = (kind: PrerenderedMathKind, text: string) => {
  let hash = 0x811c9dc5;

  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return `${kind}:${(hash >>> 0).toString(36)}`;
};

const getPrerenderedMathJaxKeys = (
  kind: PrerenderedMathKind,
  source: string,
) => {
  const primaryKey = prerenderedMathJaxKey(kind, source);
  const whitespaceStableKey = whitespaceStablePrerenderedMathJaxKey(
    kind,
    source,
  );

  return primaryKey === whitespaceStableKey
    ? [primaryKey]
    : [primaryKey, whitespaceStableKey];
};

export const getPrerenderedMathJax = (
  kind: PrerenderedMathKind,
  children: unknown,
) => {
  if (!import.meta.env.PRERENDER_MATHJAX) return undefined;
  if (typeof window === "undefined") return undefined;

  const source = mathTextFromChildren(children);
  if (!source) return undefined;

  const cache = window.__PRERENDERED_MATHJAX__;
  if (!cache) return undefined;

  for (const key of getPrerenderedMathJaxKeys(kind, source)) {
    const entry = cache[key];
    if (entry) return entry;
  }

  return undefined;
};

export const getPrerenderedMathJaxDebug = (
  kind: PrerenderedMathKind,
  children: unknown,
) => {
  const source = mathTextFromChildren(children);
  const keys = source ? getPrerenderedMathJaxKeys(kind, source) : [];
  const enabled = Boolean(import.meta.env.PRERENDER_MATHJAX);
  const cacheLoaded =
    typeof window !== "undefined" && Boolean(window.__PRERENDERED_MATHJAX__);
  const hitKey =
    enabled && cacheLoaded
      ? keys.find((candidate) => window.__PRERENDERED_MATHJAX?.[candidate])
      : undefined;
  const availableKeys =
    typeof window !== "undefined" && window.__PRERENDERED_MATHJAX__
      ? Object.keys(window.__PRERENDERED_MATHJAX__).length
      : 0;
  const hit =
    enabled &&
    cacheLoaded &&
    Boolean(hitKey);

  return {
    enabled,
    cacheLoaded,
    hit,
    key: hitKey || keys.join(" "),
    keyPresent: Boolean(hitKey),
    availableKeys,
  };
};

export default getPrerenderedMathJax;
