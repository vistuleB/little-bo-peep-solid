import {
  mergeProps,
  ParentProps,
  children,
  For,
  createEffect,
  createMemo,
  onMount,
  onCleanup,
  createSignal,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import styleJoin from "~/utils/styleJoin";
import { fittingGridColumns, gridVisualOrder } from "~/utils/gridLayout";

const GRID_INLINE_PADDING = 20;

type GridProps = ParentProps &
  SharedProps & {
    /** Preferred maximum; fewer columns are used when the items do not fit. */
    cols?: number;
    /** Align both items within their cells and incomplete final rows. */
    placeItems?: "end" | "start" | "center";
    marginTop?: number;
    marginBottom?: number;
    gap?: string;
    columnFirst?: boolean;
    withPadding?: boolean;
  };

const Grid = (_props: GridProps) => {
  const props = mergeProps(
    {
      marginTop: 0,
      marginBottom: 0,
      cols: 1,
      class: "",
      placeItems: "center" as const,
      gap: "1rem",
      withPadding: true,
      style: {},
    },
    _props,
  );
  const items = children(() => props.children);
  const itemArray = createMemo(() => items.toArray());
  const [cols, setCols] = createSignal(1);
  let grid!: HTMLDivElement;
  const contents = new Map<unknown, HTMLDivElement>();
  let observer: ResizeObserver | undefined;
  let frame: number | undefined;
  let disposed = false;

  const measure = () => {
    frame = undefined;
    if (disposed || !grid) return;
    const widths = itemArray().map(
      (item) => contents.get(item)?.getBoundingClientRect().width || 0,
    );
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    setCols(
      fittingGridColumns(
        props.cols,
        widths.length,
        grid.clientWidth,
        Math.max(0, ...widths),
        gap,
      ),
    );
  };
  const scheduleMeasure = () => {
    if (!disposed && frame === undefined)
      frame = requestAnimationFrame(measure);
  };

  createEffect(() => {
    props.cols;
    props.gap;
    itemArray();
    if (grid) scheduleMeasure();
  });

  onMount(() => {
    // Observe intrinsic item sizes as well as the available width. MathJax,
    // fonts, and images can finish loading without a window resize.
    observer = new ResizeObserver(scheduleMeasure);
    observer.observe(grid);
    contents.forEach((element) => observer!.observe(element));
    document.fonts.ready.then(scheduleMeasure);
    document.fonts.addEventListener("loadingdone", scheduleMeasure);
    scheduleMeasure();
    onCleanup(() => {
      disposed = true;
      observer?.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
      document.fonts.removeEventListener("loadingdone", scheduleMeasure);
    });
  });

  const visualOrder = createMemo(() =>
    gridVisualOrder(itemArray().length, cols(), Boolean(props.columnFirst)),
  );
  const alignment = () =>
    props.placeItems === "start"
      ? "flex-start"
      : props.placeItems === "end"
        ? "flex-end"
        : "center";
  const cellWidth = () =>
    `calc((100% - ${cols() - 1} * ${props.gap}) / ${cols()})`;

  return (
    <div
      class={`text-column ${props.class}`}
      style={styleJoin(
        {
          marginTop: `${props.marginTop}px`,
          marginBottom: `${props.marginBottom}px`,
          paddingInline: props.withPadding ? `${GRID_INLINE_PADDING}px` : "0",
          boxSizing: "border-box",
        },
        props.style,
      )}
    >
      <div
        ref={grid}
        class="list-none"
        data-grid-columns={cols()}
        style={{
          display: "flex",
          "flex-wrap": "wrap",
          "justify-content": alignment(),
          "align-items": "center",
          width: "100%",
          "min-width": "0",
          "overflow-x": "auto",
          gap: props.gap,
        }}
      >
        <For each={itemArray()}>
          {(child, index) => (
            <div
              style={{
                flex: `0 0 ${cellWidth()}`,
                "min-width": "0",
                display: "flex",
                // If even one item is wider than the viewport, keep its start
                // reachable in the grid's horizontal scroll area.
                "justify-content": `safe ${alignment()}`,
                order: visualOrder().indexOf(index()),
              }}
            >
              <div
                ref={(element) => {
                  contents.set(child, element);
                  observer?.observe(element);
                  onCleanup(() => {
                    observer?.unobserve(element);
                    contents.delete(child);
                  });
                }}
                style={{ width: "max-content", "flex-shrink": "0" }}
              >
                {child}
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Grid;
