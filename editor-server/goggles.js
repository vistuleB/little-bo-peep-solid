(() => {
  const origin = document.currentScript.dataset.editorOrigin;
  let enabled = false,
    layer;
  const send = (data) =>
    parent.postMessage({ ...data, kind: "writerly-preview" }, origin);
  function draw() {
    layer?.remove();
    if (!enabled) return;
    layer = document.createElement("div");
    layer.style.cssText =
      "position:absolute;inset:0;pointer-events:none;z-index:2147483000";
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
            revision: fragment.dataset.wlyRevision,
          });
        };
        layer.append(button);
      }
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
    enabled = !!event.data.goggles;
    draw();
  });
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  // Typesetting and lazy sections can move source fragments without a scroll.
  setInterval(() => {
    if (enabled) schedule();
  }, 750);
  send({ action: "ready" });
})();
