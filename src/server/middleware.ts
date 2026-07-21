import { createMiddleware } from "@solidjs/start/middleware";
import { spawn } from "child_process";
import { mkdir, writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { pathToFileURL } from "url";

const tooltipMathJaxSvgPath = resolve("images/tooltip_mathjax.svg");

export default createMiddleware({
  onRequest: async (event) => {
    if (
      event.request.method === "POST" &&
      event.request.url.includes("/write-tooltip-mathjax-svg")
    ) {
      try {
        const { svg } = await event.request.json();

        if (typeof svg !== "string" || !svg.includes("<svg")) {
          return new Response(JSON.stringify({ error: "No SVG provided" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        await mkdir(dirname(tooltipMathJaxSvgPath), { recursive: true });
        await writeFile(tooltipMathJaxSvgPath, svg, "utf8");

        return new Response(
          JSON.stringify({
            success: true,
            path: tooltipMathJaxSvgPath,
            url: "images/tooltip_mathjax.svg",
          }),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
      } catch {
        return new Response(JSON.stringify({ error: "Failed to write SVG" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // Only handle POST requests to /log-event
    if (
      event.request.method !== "POST" ||
      !event.request.url.includes("/log-event")
    ) {
      return;
    }

    try {
      const { cmd } = await event.request.json();

      if (!cmd) {
        return new Response(JSON.stringify({ error: "No command provided" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Execute command
      if (cmd.startsWith("code --goto ")) {
        const filePath = cmd.replace("code --goto ", "");
        const sourceLocation = filePath.match(/^(.*):(\d+):(\d+)$/);
        const useVsCodeUrl = process.platform === "darwin" && sourceLocation;
        const executable = useVsCodeUrl ? "open" : "code";
        const args = useVsCodeUrl
          ? [
              `vscode://file${pathToFileURL(resolve(sourceLocation![1])).pathname}:${sourceLocation![2]}:${sourceLocation![3]}`,
            ]
          : ["--goto", filePath];
        const child = spawn(executable, args, {
          detached: true,
          stdio: "ignore",
        });
        child.once("error", () => {});
      } else if (cmd.startsWith("open ")) {
        const filePath = cmd.replace("open ", "");
        const openCmd =
          process.platform === "darwin"
            ? "open"
            : process.platform === "win32"
              ? "start"
              : "xdg-open";
        const child = spawn(openCmd, [filePath], {
          detached: true,
          stdio: "ignore",
        });
        child.once("error", () => {});
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to execute command" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
});
