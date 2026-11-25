(() => {
  const origin = document.currentScript.dataset.editorOrigin;
  const revision = document.currentScript.dataset.revision;
  let enabled = false,
    layer,
    lastLayout = "";
  const send = (data) =>
    parent.postMessage(
      { ...data, path: location.pathname, kind: "writerly-preview" },
      origin,
    );
  function fragments(root = document) {
    return [...root.querySelectorAll("[data-wly-file]")].map((fragment) => {
      const range = document.createRange();
      range.selectNodeContents(fragment);
      return { fragment, rects: [...range.getClientRects()] };
    });
  }
  function trackSource(navigate = true) {
    // Page owns the article/TOC content. Nav and header source live outside it.
    // Never fall back to document-wide sampling while a route is loading.
    const content = document.querySelector("#PageCameraSurface");
    const bounds = content?.getBoundingClientRect();
    const visibleTop = 54; // The header obscures the first 54px of the preview.
    const visible = (content ? fragments(content) : [])
      .map(({ fragment, rects }) => ({
        fragment,
        rect: rects
          .filter(
            (r) =>
              r.width > 1 &&
              r.height > 1 &&
              r.bottom > visibleTop &&
              r.top < innerHeight &&
              r.right > 0 &&
              r.left < innerWidth &&
              r.bottom > bounds.top &&
              r.top < bounds.bottom &&
              r.right > bounds.left &&
              r.left < bounds.right,
          )
          .sort((a, b) => a.top - b.top || a.left - b.left)[0],
      }))
      .filter((item) => item.rect)
      .sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left);
    const groups = new Map(),
      seen = new Set();
    let chosen;
    for (const { fragment } of visible) {
      const { wlyFile: file, wlyLine: line } = fragment.dataset;
      const key = file + ":" + line;
      if (seen.has(key)) continue;
      seen.add(key);
      const group = groups.get(file) || [];
      group.push(fragment);
      groups.set(file, group);
      if (group.length === 3) {
        chosen = group;
        break;
      }
    }
    // Short pages may have fewer than three distinct source locations.
    chosen ||= [...groups.values()].sort((a, b) => b.length - a.length)[0];
    if (!chosen) {
      send({
        action: navigate ? "no-source" : "tracking",
        status: "none",
        returnToSource: navigate,
      });
      return;
    }
    const fragment = chosen.reduce((a, b) =>
      Number(a.dataset.wlyLine) <= Number(b.dataset.wlyLine) ? a : b,
    );
    send({
      action: navigate ? "source" : "tracking",
      status: "locked",
      file: fragment.dataset.wlyFile,
      line: Number(fragment.dataset.wlyLine),
      revision: revision || fragment.dataset.wlyRevision,
    });
  }
  let tracking = false,
    trackingTimer;
  function scheduleTracking() {
    if (!tracking) return;
    clearTimeout(trackingTimer);
    send({ action: "tracking", status: "searching" });
    trackingTimer = setTimeout(() => {
      trackingTimer = null;
      trackSource(false);
    }, 180);
  }
  let seekTimer;
  function seek(file, line) {
    clearTimeout(seekTimer);
    const name = file.replace(/^src\/content\//, "").replace(/^\.\//, "");
    let attempts = 0;
    function locate() {
      const candidates = fragments().filter(
        ({ fragment, rects }) =>
          fragment.dataset.wlyFile.replace(/^\.\//, "") === name &&
          rects.some((r) => r.width && r.height),
      );
      candidates.sort(
        (a, b) =>
          Math.abs(Number(a.fragment.dataset.wlyLine) - line) -
          Math.abs(Number(b.fragment.dataset.wlyLine) - line),
      );
      if (candidates.length) {
        const rect = candidates[0].rects.find((r) => r.width && r.height);
        // Reserve the rendered header height even if it is currently scrolled
        // away: mobile navigation can become fixed as the jump completes.
        const headerHeight =
          document.querySelector("[data-header-blob]")?.getBoundingClientRect()
            .height || 0;
        scrollTo({
          top: Math.max(0, scrollY + rect.top - headerHeight - 28),
          behavior: "instant",
        });
        return;
      }
      if (++attempts < 8) seekTimer = setTimeout(locate, 400);
      else send({ action: "no-source" });
    }
    locate();
  }
  function draw() {
    if (!enabled) {
      layer?.remove();
      lastLayout = "";
      return;
    }
    const targets = [];
    for (const fragment of document.querySelectorAll("[data-wly-file]")) {
      const range = document.createRange();
      range.selectNodeContents(fragment);
      for (const rect of range.getClientRects()) {
        if (
          rect.width < 2 ||
          rect.height < 2 ||
          rect.bottom < 0 ||
          rect.top > innerHeight
        )
          continue;
        targets.push({ fragment, rect });
      }
    }
    const layout = targets
      .map(({ fragment, rect }) =>
        [
          fragment.dataset.wlyFile,
          fragment.dataset.wlyLine,
          rect.left + scrollX,
          rect.top + scrollY,
          rect.width,
          rect.height,
        ].join(":"),
      )
      .join("|");
    if (layout === lastLayout && layer?.isConnected) return;
    lastLayout = layout;
    layer?.remove();
    layer = document.createElement("div");
    layer.style.cssText =
      "position:absolute;inset:0;pointer-events:none;z-index:2147483000";
    for (const { fragment, rect } of targets) {
      const button = document.createElement("button");
      button.type = "button";
      button.title = `${fragment.dataset.wlyFile}:${fragment.dataset.wlyLine}`;
      button.setAttribute("aria-label", "Edit " + button.title);
      button.style.cssText = `position:absolute;left:${rect.left + scrollX}px;top:${rect.top + scrollY}px;width:${rect.width}px;height:${rect.height}px;border:1px solid #4a8a69;border-radius:5px;background:#62ae7b22;padding:0;pointer-events:auto;cursor:pointer`;
      button.onpointerdown = button.onclick = (event) => {
        if (!enabled) return;
        event.preventDefault();
        event.stopPropagation();
        enabled = false;
        layer.remove();
        send({
          action: "source",
          file: fragment.dataset.wlyFile,
          line: Number(fragment.dataset.wlyLine),
          revision: revision || fragment.dataset.wlyRevision,
        });
      };
      layer.append(button);
    }
    document.body.append(layer);
  }
  let scheduled = false;
  function schedule() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        draw();
      });
    }
  }
  addEventListener("message", (event) => {
    if (
      event.source !== parent ||
      event.origin !== origin ||
      event.data?.kind !== "writerly-editor"
    )
      return;
    if (event.data.action === "keyboard") {
      const data = event.data;
      if (
        !["keydown", "keyup"].includes(data.type) ||
        typeof data.key !== "string"
      )
        return;
      const key = new KeyboardEvent(data.type, {
        key: data.key,
        code: data.code,
        repeat: !!data.repeat,
        altKey: !!data.altKey,
        ctrlKey: !!data.ctrlKey,
        metaKey: !!data.metaKey,
        shiftKey: !!data.shiftKey,
        bubbles: true,
        cancelable: true,
      });
      const target = document.activeElement || document.body;
      const unhandled = target.dispatchEvent(key);
      // Synthetic events do not perform browser default scrolling.
      if (
        unhandled &&
        data.type === "keydown" &&
        !data.ctrlKey &&
        !data.metaKey &&
        !data.altKey
      ) {
        const amount =
          data.key === "PageDown" || data.key === " "
            ? innerHeight * 0.8
            : data.key === "PageUp"
              ? -innerHeight * 0.8
              : data.key === "ArrowDown"
                ? 40
                : data.key === "ArrowUp"
                  ? -40
                  : 0;
        if (amount) scrollBy({ top: amount, behavior: "auto" });
        if (data.key === "Home") scrollTo({ top: 0 });
        if (data.key === "End")
          scrollTo({ top: document.documentElement.scrollHeight });
      }
      return;
    }
    if (event.data.action === "tracking") {
      tracking = !!event.data.enabled;
      clearTimeout(trackingTimer);
      if (tracking) scheduleTracking();
      return;
    }
    if (event.data.action === "track-source") {
      trackSource();
      return;
    }
    if (event.data.action === "seek") {
      if (
        typeof event.data.file === "string" &&
        Number.isInteger(event.data.line) &&
        event.data.line > 0
      )
        seek(event.data.file, event.data.line);
      return;
    }
    enabled = !!event.data.goggles;
    draw();
  });
  const moved = () => {
    schedule();
    scheduleTracking();
  };
  addEventListener("scroll", moved, { passive: true });
  addEventListener("resize", moved);
  let lastPath = location.pathname;
  // Typesetting and lazy sections can move source fragments without a scroll.
  setInterval(() => {
    if (lastPath !== location.pathname) {
      lastPath = location.pathname;
      send({ action: "location" });
    }
    if (enabled) schedule();
    if (tracking && !trackingTimer) trackSource(false);
  }, 750);
  send({ action: "ready" });
})();
