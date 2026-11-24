import { defineConfig } from "@solidjs/start/config";
import { loadEnv } from "vite";
import { resolvePlace } from "./config/place.mjs";

const mode = process.env.NODE_ENV || "development";
const env = loadEnv(mode, process.cwd(), "");

// Priority: process.env (CLI) > .env file
const viteEnv = process.env.VITE_ENV || env.VITE_ENV;
const mathJAXVersion =
  process.env.MATHJAX_VERSION || env.MATHJAX_VERSION || "4";
const place = resolvePlace({ ...env, ...process.env });
const isLocalMode = place === "LOCAL";
const mathJaxDebugAttributes =
  (process.env.MATHJAX_DEBUG_ATTRIBUTES || env.MATHJAX_DEBUG_ATTRIBUTES) ===
    "true" || isLocalMode;
const isOfflineMode = (process.env.OFFLINE_MODE || env.OFFLINE_MODE) === "true";
const prerenderMathJax =
  (process.env.PRERENDER_MATHJAX || env.PRERENDER_MATHJAX || "true") === "true";
const prerenderMathJaxCacheVersion =
  process.env.PRERENDER_MATHJAX_CACHE_VERSION ||
  env.PRERENDER_MATHJAX_CACHE_VERSION ||
  String(Date.now());

export default defineConfig({
  ssr: false,
  server: {
    publicURL: process.env.PUBLIC_URL,
    prerender: {
      crawlLinks: true,
    },
  },
  // Only load middleware in author mode
  ...(isLocalMode && {
    middleware: "src/server/middleware.ts",
  }),
  vite: {
    define: {
      "import.meta.env.PLACE": JSON.stringify(place),
      "import.meta.env.EDITOR_REVISION": JSON.stringify(
        process.env.EDITOR_REVISION || "",
      ),
      "import.meta.env.MATHJAX_DEBUG_ATTRIBUTES": mathJaxDebugAttributes,
      "import.meta.env.VITE_ENV": JSON.stringify(viteEnv),
      "import.meta.env.OFFLINE_MODE": isOfflineMode,
      "import.meta.env.MATHJAX_VERSION": JSON.stringify(mathJAXVersion),
      "import.meta.env.PRERENDER_MATHJAX": prerenderMathJax,
      "import.meta.env.PRERENDER_MATHJAX_CACHE_VERSION": JSON.stringify(
        prerenderMathJaxCacheVersion,
      ),
    },
  },
});
