import { createMiddleware } from "@solidjs/start/middleware";
import { spawn } from "child_process";
import { mkdir, writeFile } from "fs/promises";
import { dirname, resolve, sep } from "path";
import { pathToFileURL } from "url";

const projectRoot = resolve(process.cwd());
const contentRoot = resolve(projectRoot, "src/content");
const tooltipMathJaxSvgPath = resolve("images/tooltip_mathjax.svg");
const PORT = Number(process.env.npm_config_port) || 3000;
const MAX_SVG_BYTES = 2 * 1024 * 1024;

const isLoopback = (addr: string | undefined) =>
  addr === "127.0.0.1" || addr === "::1" || addr === "::ffff:127.0.0.1";

const localHosts = new Set([`127.0.0.1:${PORT}`, `localhost:${PORT}`]);
const localOrigins = new Set([
  `http://127.0.0.1:${PORT}`,
  `http://localhost:${PORT}`,
]);

const isLocalRequest = (event: any): boolean => {
  const addr: string =
    event.clientAddress ??
    event.nativeEvent?.node?.req?.socket?.remoteAddress ??
    "";
  if (addr && !isLoopback(addr)) return false;
  const headers: Headers = event.request.headers;
  const host = headers.get("host");
  if (!host || !localHosts.has(host)) return false;
  const origin = headers.get("origin");
  if (origin && origin !== "null" && !localOrigins.has(origin)) return false;
  return true;
};

// Resolve (collapsing any . / .. segments), then require it stay inside base.
const isInside = (base: string, filePath: string): boolean => {
  const resolved = resolve(projectRoot, filePath);
  return resolved === base || resolved.startsWith(base + sep);
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export default createMiddleware({
  onRequest: async (event) => {
    const req = event.request;
    if (req.method !== "POST") return;

    let pathname: string;
    try {
      pathname = new URL(req.url).pathname;
    } catch {
      return;
    }

    const isSvgWrite = pathname === "/write-tooltip-mathjax-svg";
    const isLogEvent = pathname === "/log-event";
    if (!isSvgWrite && !isLogEvent) return;

    if (!isLocalRequest(event)) {
      return json({ success: false, error: "Forbidden" }, 403);
    }

    // --- write the tooltip MathJax SVG to a fixed path ---
    if (isSvgWrite) {
      try {
        const raw = await req.text();
        if (raw.length > MAX_SVG_BYTES) {
          return json({ error: "Payload too large" }, 413);
        }
        const { svg } = JSON.parse(raw);
        if (typeof svg !== "string" || !svg.includes("<svg")) {
          return json({ error: "No SVG provided" }, 400);
        }
        await mkdir(dirname(tooltipMathJaxSvgPath), { recursive: true });
        await writeFile(tooltipMathJaxSvgPath, svg, "utf8");
        return json({
          success: true,
          path: tooltipMathJaxSvgPath,
          url: "images/tooltip_mathjax.svg",
        });
      } catch {
        return json({ error: "Failed to write SVG" }, 500);
      }
    }

    // --- source-linking commands (open <image> / code --goto <src>) ---
    try {
      const { cmd } = await req.json();
      if (!cmd || typeof cmd !== "string") {
        return json({ error: "No command provided" }, 400);
      }

      if (cmd.startsWith("code --goto ")) {
        const target = cmd.slice("code --goto ".length);
        const loc = target.match(/^(.*):(\d+):(\d+)$/);
        // code --goto opens a source file: confine to src/content.
        if (!loc || !isInside(contentRoot, loc[1])) {
          return json({ error: "Command not allowed" }, 403);
        }
        const [, filePath, line, col] = loc;
        const useVsCodeUrl = process.platform === "darwin";
        const executable = useVsCodeUrl ? "open" : "code";
        const args = useVsCodeUrl
          ? [`vscode://file${pathToFileURL(resolve(filePath)).pathname}:${line}:${col}`]
          : ["--goto", `${filePath}:${line}:${col}`];
        spawn(executable, args, { detached: true, stdio: "ignore" }).once(
          "error",
          () => {},
        );
      } else if (cmd.startsWith("open ")) {
        const filePath = cmd.slice("open ".length).trim();
        // open only images, only inside the project.
        if (!isInside(projectRoot, filePath) || !/\.(png|jpe?g|svg)$/i.test(filePath)) {
          return json({ error: "Command not allowed" }, 403);
        }
        const openCmd =
          process.platform === "darwin"
            ? "open"
            : process.platform === "win32"
              ? "start"
              : "xdg-open";
        spawn(openCmd, [filePath], { detached: true, stdio: "ignore" }).once(
          "error",
          () => {},
        );
      } else {
        return json({ error: "Command not allowed" }, 403);
      }

      return json({ success: true });
    } catch {
      return json({ error: "Failed to execute command" }, 500);
    }
  },
});
