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

  const imageTooltipPath = (tooltip: Element) => {
    const path = tooltip.querySelector(".t-3003-i-path")?.textContent?.trim();
    if (path) return path;

    const url = tooltip.querySelector(".t-3003-i-url");
    if (!url) return "";

    return [...url.childNodes]
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent || "")
      .join("")
      .trim();
  };

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const initTooltips = () => {
    const tooltips = document.getElementsByClassName("t-3003");

    for (const tooltip of tooltips) {
      if (tooltip.hasAttribute("data-author-init")) continue;
      tooltip.setAttribute("data-author-init", "true");

      tooltip.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const target = e.target as HTMLElement;
        const copyTarget = target.closest(".t-3003-i-copy") as
          | HTMLElement
          | null;
        if (copyTarget && tooltip.contains(copyTarget)) {
          void copyText(copyTarget.dataset.copySrc || "");
          return;
        }

        if (tooltip.classList.contains("t-3003-i")) {
          const url = imageTooltipPath(tooltip);
          if (url) sendCommand("open " + url);
        } else {
          sendCommand("code --goto " + tooltip.textContent?.trim());
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
