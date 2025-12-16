import { createMiddleware } from "@solidjs/start/middleware";
import { spawn } from "child_process";

export default createMiddleware({
  onRequest: async (event) => {
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

      console.log(`[Author Mode] ${cmd}`);

      // Execute command
      if (cmd.startsWith("code --goto ")) {
        const filePath = cmd.replace("code --goto ", "");
        spawn("code", ["--goto", filePath], {
          detached: true,
          stdio: "ignore",
        });
      } else if (cmd.startsWith("open ")) {
        const filePath = cmd.replace("open ", "");
        const openCmd =
          process.platform === "darwin"
            ? "open"
            : process.platform === "win32"
              ? "start"
              : "xdg-open";
        spawn(openCmd, [filePath], { detached: true, stdio: "ignore" });
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
