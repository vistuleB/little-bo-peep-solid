import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: false,
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
  // Only load middleware in author mode
  ...(process.env.AUTHOR_MODE === "true" && {
    middleware: "src/server/middleware.ts",
  }),
  vite: {
    define: {
      "import.meta.env.VITE_AUTHOR_MODE": JSON.stringify(
        process.env.AUTHOR_MODE === "true",
      ),
    },
  },
});
