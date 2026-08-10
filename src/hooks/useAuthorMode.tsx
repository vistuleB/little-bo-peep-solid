import { onMount } from "solid-js";

const useAuthorMode = () => {
  // Only run in author mode
  if (typeof window === "undefined" || !import.meta.env.VITE_AUTHOR_MODE) {
    return;
  }

  const sendCommand = (command: string) => {
    fetch("/log-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cmd: command }),
    }).catch(() => {}); // Silent fail
  };

  const initTooltips = () => {
    const tooltips = document.getElementsByClassName("t-3003");

    for (const tooltip of tooltips) {
      if (tooltip.hasAttribute("data-author-init")) continue;
      tooltip.setAttribute("data-author-init", "true");

      tooltip.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (tooltip.classList.contains("t-3003-i")) {
          const url = tooltip.querySelector(".t-3003-i-url");
          if (url) sendCommand("open " + url.innerHTML);
        } else {
          sendCommand("code --goto " + tooltip.innerHTML);
        }
      });
    }
  };

  onMount(() => {
    initTooltips();

    // Watch for new tooltips
    new MutationObserver(() => {
      setTimeout(initTooltips, 50);
    }).observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};

export default useAuthorMode;
