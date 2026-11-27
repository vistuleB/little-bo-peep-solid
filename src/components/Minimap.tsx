import {
  createEffect,
  createSignal,
  on,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { Portal } from "solid-js/web";
import {
  DESKTOP_TEXT_COLUMN_WIDTH,
  HEADER_HEIGHT,
  MINIMAP_LINE_PX,
  MINIMAP_MEASURE_DEBOUNCE_MS,
  MINIMAP_WIDTH,
} from "~/constants";
import useOnMobile from "~/hooks/useOnMobile";
import { useGlobalContext } from "~/store/StoreProvider";
import { minimapGeometry, pageYFromMinimapY } from "~/utils/minimapGeometry";

type Kind = "text" | "title" | "math" | "image" | "exercises" | "section";
type Rect = {
  kind: Kind;
  x: number;
  y: number;
  w: number;
  h: number;
  img?: HTMLImageElement; // drawn as a thumbnail instead of a box
};
type SectionMark = { y: number; label: string };

const KIND_FILL: Record<Kind, string> = {
  text: "rgba(0,0,0,0.35)",
  title: "rgba(0,0,0,0.7)",
  math: "rgba(147,51,234,0.5)", // --arrow-pressed
  image: "rgba(0,0,0,0.15)",
  exercises: "rgba(0,0,0,0.06)",
  section: "rgba(0,0,0,0.6)",
};

// ponytail: 16k cap; a chapter would need ~240k px of page height to hit it
const MAX_OFFSCREEN_HEIGHT = 16000;

// Single batched layout read of the article. Page coordinates, x relative
// to the text column's left edge.
// Section labels come from the breadcrumb links the renderer emits
// (`?id=<section id>`); exercise groups map to the "exercises" breadcrumb.
const breadcrumbLabels = (): Record<string, string> => {
  const labels: Record<string, string> = {};
  document
    .querySelectorAll<HTMLAnchorElement>('.breadcrumb a[href^="?id="]')
    .forEach((a) => {
      const id = a.getAttribute("href")!.slice(4);
      labels[id] = (a.textContent ?? "").replace(/\s+/g, " ").trim();
    });
  return labels;
};

const measure = (
  root: HTMLElement,
  columnWidth: number,
): { rects: Rect[]; sections: SectionMark[] } => {
  const rects: Rect[] = [];
  const sections: SectionMark[] = [];
  const labels = breadcrumbLabels();
  const column = root.querySelector(".text-column");
  const columnLeft = column
    ? column.getBoundingClientRect().left + window.scrollX
    : 0;
  const { scrollX, scrollY } = window;

  const push = (kind: Kind, r: DOMRect, img?: HTMLImageElement) => {
    const x = r.left + scrollX - columnLeft;
    if (x + r.width <= 0 || x >= columnWidth) return; // side images, overlays
    rects.push({
      kind,
      img,
      x: Math.max(0, x),
      y: r.top + scrollY,
      w: Math.min(columnWidth, x + r.width) - Math.max(0, x),
      h: r.height,
    });
  };

  const { FILTER_ACCEPT, FILTER_REJECT, FILTER_SKIP } = NodeFilter;
  const range = document.createRange();
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          return /\S/.test(node.nodeValue ?? "")
            ? FILTER_ACCEPT
            : FILTER_REJECT;
        }
        const el = node as HTMLElement;
        const tag = el.tagName;
        if (
          tag === "SCRIPT" ||
          tag === "STYLE" ||
          tag === "svg" ||
          tag === "SVG"
        ) {
          return FILTER_REJECT;
        }
        if (el.classList.contains("mathblock")) {
          const typeset = el.querySelector("mjx-container");
          push("math", (typeset ?? el).getBoundingClientRect());
          return FILTER_REJECT;
        }
        if (tag === "MJX-CONTAINER") {
          push("text", el.getBoundingClientRect());
          return FILTER_REJECT;
        }
        if (tag === "IMG") {
          push("image", el.getBoundingClientRect(), el as HTMLImageElement);
          return FILTER_REJECT;
        }
        // ponytail: offsetHeight===0 heuristic skips closed solutions and
        // unselected carousel exercises; add a data-minimap-hidden opt-out if
        // a 0-height-but-visible wrapper ever shows up
        if (el.offsetHeight === 0 && el.childElementCount > 0) {
          return FILTER_REJECT;
        }
        if (tag === "SECTION") {
          const r = el.getBoundingClientRect();
          if (el.hasAttribute("data-exercise-group-id")) {
            push("exercises", r);
            sections.push({
              y: r.top + scrollY,
              label: labels["exercises"] ?? "exercises",
            });
          } else if (el.id) {
            rects.push({
              kind: "section",
              x: 0,
              y: r.top + scrollY,
              w: columnWidth,
              h: 0,
            });
            sections.push({
              y: r.top + scrollY,
              label: labels[el.id] ?? el.id,
            });
          }
        }
        return FILTER_SKIP; // keep walking into children, don't emit the element
      },
    },
  );

  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const kind: Kind = node.parentElement?.closest("h1") ? "title" : "text";
    range.selectNodeContents(node);
    const lines = range.getClientRects();
    for (let i = 0; i < lines.length; i++) push(kind, lines[i]);
  }
  range.detach();
  return { rects, sections };
};

// Module-level so the "m" toggle survives chapter-to-chapter navigation;
// localStorage so it survives reloads.
const MINIMAP_ENABLED_KEY = "minimap_enabled";
const [enabled, setEnabled] = createSignal(
  typeof localStorage === "undefined" ||
    localStorage.getItem(MINIMAP_ENABLED_KEY) !== "false",
);

const isEditableTarget = (target: EventTarget | null) =>
  target instanceof Element &&
  Boolean(target.closest("input, textarea, select, [contenteditable]"));

const Minimap = () => {
  const { store } = useGlobalContext();
  const { on_mobile } = useOnMobile();

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key !== "m" ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        isEditableTarget(e.target)
      ) {
        return;
      }
      e.preventDefault();
      setEnabled(!enabled());
      localStorage.setItem(MINIMAP_ENABLED_KEY, String(enabled()));
    };
    window.addEventListener("keydown", handleKeyDown);
    onCleanup(() => window.removeEventListener("keydown", handleKeyDown));
  });

  return (
    <Show when={enabled() && !on_mobile()}>
      <Portal mount={document.body}>
        <MinimapBody store={store} />
      </Portal>
    </Show>
  );
};

const MinimapBody = (props: {
  store: ReturnType<typeof useGlobalContext>["store"];
}) => {
  const store = props.store;
  const [tip, setTip] = createSignal<SectionMark | null>(null);
  // Scrub (hover) mode: while the pointer is over the minimap the minimap is
  // frozen at `offset`, the page follows the cursor, and the slider keeps
  // showing the anchor viewport. Leaving scrolls back to the anchor.
  let scrub: { anchorY: number; offset: number } | null = null;
  let sections: SectionMark[] = [];
  const watchedImages = new WeakSet<HTMLImageElement>();
  let root!: HTMLDivElement;
  let canvas!: HTMLCanvasElement;
  let slider!: HTMLDivElement;

  const offscreen = document.createElement("canvas");
  const dpr = window.devicePixelRatio || 1;
  const lineHeightPx =
    parseFloat(getComputedStyle(document.body).lineHeight) || 30;
  const sy = MINIMAP_LINE_PX / lineHeightPx;

  // Cached by measure(); store.scrollHeight is stale after lazy mounts.
  let pageHeight = 1;
  let frameId: number | undefined;
  let measureTimer: ReturnType<typeof setTimeout> | undefined;

  const minimapHeight = () => Math.max(0, store.innerHeight - HEADER_HEIGHT);
  const geometry = () =>
    scrub
      ? {
          offset: scrub.offset,
          sliderTop: scrub.anchorY * sy - scrub.offset,
          sliderHeight: store.innerHeight * sy,
        }
      : minimapGeometry(
          window.scrollY,
          pageHeight,
          store.innerHeight,
          minimapHeight(),
          sy,
        );

  const frame = () => {
    frameId = undefined;
    const H = minimapHeight();
    const W = MINIMAP_WIDTH;
    if (canvas.width !== W * dpr || canvas.height !== H * dpr) {
      canvas.width = W * dpr;
      canvas.height = H * dpr;
    }
    const g = geometry();
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (offscreen.height > 0) {
      ctx.drawImage(
        offscreen,
        0,
        g.offset * dpr,
        W * dpr,
        H * dpr,
        0,
        0,
        W * dpr,
        H * dpr,
      );
    }
    slider.style.transform = `translateY(${g.sliderTop}px)`;
    slider.style.height = `${g.sliderHeight}px`;
  };

  const scheduleFrame = () => {
    if (frameId === undefined) frameId = requestAnimationFrame(frame);
  };

  const measureAndRender = () => {
    measureTimer = undefined;
    // The article's own wrapper (parent of the id span) excludes the Nav
    // and the image preloader that also live inside #Container.
    const container =
      document.querySelector(".id_span")?.parentElement ??
      document.getElementById("Container");
    if (!container) return;
    const columnWidth = DESKTOP_TEXT_COLUMN_WIDTH; // desktop-only component
    const sx = MINIMAP_WIDTH / columnWidth;
    pageHeight = Math.max(1, document.body.scrollHeight);
    const measured = measure(container, columnWidth);
    const rects = measured.rects;
    sections = measured.sections;

    const C = Math.min(MAX_OFFSCREEN_HEIGHT, Math.ceil(pageHeight * sy));
    offscreen.width = MINIMAP_WIDTH * dpr;
    offscreen.height = C * dpr;
    const ctx = offscreen.getContext("2d")!;
    ctx.scale(dpr, dpr);
    for (const r of rects) {
      if (r.img && r.img.complete && r.img.naturalWidth > 0) {
        // thumbnail, aspect ratio kept, centered in the slot's scaled box
        const slotW = r.w * sx;
        const h = Math.max(1, r.h * sy);
        const w = Math.min(
          slotW,
          (h * r.img.naturalWidth) / r.img.naturalHeight,
        );
        ctx.drawImage(r.img, r.x * sx + (slotW - w) / 2, r.y * sy, w, h);
        continue;
      }
      if (r.img && !r.img.complete && !watchedImages.has(r.img)) {
        watchedImages.add(r.img);
        r.img.addEventListener("load", scheduleMeasure, { once: true });
      }
      ctx.fillStyle = KIND_FILL[r.kind];
      ctx.fillRect(
        r.x * sx,
        r.y * sy,
        Math.max(1, r.w * sx),
        Math.max(1, r.h * sy),
      );
    }
    scheduleFrame();
  };

  const scheduleMeasure = () => {
    if (measureTimer !== undefined) clearTimeout(measureTimer);
    measureTimer = setTimeout(measureAndRender, MINIMAP_MEASURE_DEBOUNCE_MS);
  };

  onMount(() => {
    const container = document.getElementById("Container");
    const resizeObserver = new ResizeObserver(scheduleMeasure);
    const mutationObserver = new MutationObserver(scheduleMeasure);
    if (container) {
      resizeObserver.observe(container);
      mutationObserver.observe(container, { childList: true, subtree: true });
    }
    scheduleMeasure();
    onCleanup(() => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      if (frameId !== undefined) cancelAnimationFrame(frameId);
      if (measureTimer !== undefined) clearTimeout(measureTimer);
    });
  });

  createEffect(on(() => store.scrollY, scheduleFrame, { defer: true }));
  createEffect(
    on(() => [store.innerWidth, store.innerHeight], scheduleMeasure, {
      defer: true,
    }),
  );
  createEffect(
    on(
      () =>
        store.rest_mounting_finished_for_route_started_at ===
        store.pending_route_started_at,
      (done) => done && scheduleMeasure(),
      { defer: true },
    ),
  );

  const localY = (e: PointerEvent) =>
    e.clientY - root.getBoundingClientRect().top;
  const clampScroll = (y: number) =>
    Math.min(Math.max(0, pageHeight - store.innerHeight), Math.max(0, y));

  const startScrub = () => {
    scrub ??= { anchorY: window.scrollY, offset: geometry().offset };
  };

  // Click re-anchors to where the page currently is (under the cursor);
  // the minimap stays frozen.
  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    startScrub();
    scrub!.anchorY = window.scrollY;
    scheduleFrame();
  };

  const onPointerMove = (e: PointerEvent) => {
    startScrub();
    const y = localY(e);
    const pageY = pageYFromMinimapY(y, scrub!.offset, sy);
    const section = sections.findLast((s) => s.y <= pageY);
    setTip(section ? { y, label: section.label } : null);
    window.scrollTo(window.scrollX, clampScroll(pageY - store.innerHeight / 2));
  };

  const onPointerLeave = () => {
    setTip(null);
    if (!scrub) return;
    const { anchorY } = scrub;
    scrub = null;
    window.scrollTo(window.scrollX, anchorY);
    scheduleFrame();
  };

  return (
    <div
      ref={root}
      data-minimap
      class="minimap fixed right-0 select-none cursor-default opacity-[.55] hover:opacity-100 transition-opacity"
      style={{
        top: `${HEADER_HEIGHT}px`,
        width: `${MINIMAP_WIDTH}px`,
        height: `${minimapHeight()}px`,
        "z-index": 71, // above HeaderControlSurface (70) so its 10rem strip sits beneath
        "touch-action": "none",
        "border-left": "1px solid rgba(0,0,0,0.08)",
      }}
      onPointerEnter={startScrub}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}>
      <canvas
        ref={canvas}
        class="block pointer-events-none"
        style={{ width: `${MINIMAP_WIDTH}px`, height: `${minimapHeight()}px` }}
      />
      <div
        ref={slider}
        class="absolute left-0 right-0 top-0 pointer-events-none bg-black/[.08]"
      />
      <Show when={tip()}>
        {(t) => (
          <div
            class="absolute pointer-events-none whitespace-nowrap rounded border border-stone-300 bg-bg px-2 py-0.5 text-sm shadow"
            style={{
              right: "calc(100% + 6px)",
              top: `${t().y}px`,
              transform: "translateY(-50%)",
            }}>
            {t().label}
          </div>
        )}
      </Show>
    </div>
  );
};

export default Minimap;
