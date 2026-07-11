import { MOBILE_MAX_WIDTH } from "~/constants";
import {
  mergeProps,
  ParentProps,
  children,
  For,
  createEffect,
  createMemo,
  onCleanup,
  createSignal,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { useGlobalContext } from "~/store/StoreProvider";
import styleJoin from "~/utils/styleJoin";

const GRID_INLINE_PADDING = 20;

type GridProps = ParentProps &
  SharedProps & {
    cols?: number;
    mobileCols?: number;
    centerOnOverflow?: boolean;
    mobileCutoff?: number;
    placeItems?: "end" | "start" | "center";
    marginTop?: number;
    marginBottom?: number;
    gap?: string;
    columnFirst?: boolean; // if true, the grid will be filled top to bottom instead of left to right
    withPadding?: boolean;
  };

const Grid = (_props: GridProps) => {
  const props = mergeProps(
    {
      marginTop: 0,
      marginBottom: 0,
      cols: 0,
      mobileCols: -1,
      mobileCutoff: MOBILE_MAX_WIDTH,
      class: "",
      placeItems: "center",
      gap: "1rem",
      withPadding: true,
      style: {},
    },
    _props,
  );

  const { store } = useGlobalContext();

  props.cols = Math.max(props.cols, props.mobileCols, 1);
  props.mobileCols = props.mobileCols <= 0 ? props.cols : props.mobileCols;

  const children_array = children(() => props.children).toArray();

  const [cols, setCols] = createSignal(props.cols);

  const handleResize = () => {
    setCols(
      store.innerWidth <= props.mobileCutoff ? props.mobileCols : props.cols,
    );
  };

  createEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    onCleanup(() => window.removeEventListener("resize", handleResize));
  });

  const visualChildren = createMemo(() => {
    if (!props.columnFirst) return children_array;

    const rows = Math.ceil(children_array.length / cols());
    return children_array
      .map((child, index) => {
        const column = Math.floor(index / rows);
        const row = index % rows;
        return { child, order: row * cols() + column };
      })
      .sort((a, b) => a.order - b.order)
      .map(({ child }) => child);
  });

  const overflowCount = () => visualChildren().length % cols();
  const centerOverflow = () =>
    Boolean(props.centerOnOverflow && overflowCount() > 0);
  const regularChildren = () =>
    centerOverflow()
      ? visualChildren().slice(0, -overflowCount())
      : visualChildren();
  const overflowChildren = () =>
    centerOverflow() ? visualChildren().slice(-overflowCount()) : [];
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
        },
        props.style,
      )}
    >
      <div
        class={`text-column !grid list-none`}
        style={{
          "grid-template-columns": `repeat(${cols()}, 1fr)`,
          "place-items": props.placeItems,
          animation: "appear 2s ease 0s 1 normal forwards",
          gap: props.gap,
        }}
      >
        <For each={regularChildren()}>
          {(child) => <span class="w-max">{child}</span>}
        </For>
        {centerOverflow() && (
          <div
            class="col-span-full flex justify-center"
            style={{
              gap: props.gap,
              width: "100%",
              "justify-self": "stretch",
            }}
          >
            <For each={overflowChildren()}>
              {(child) => (
                <span
                  class="flex w-max"
                  style={{
                    width: cellWidth(),
                    "justify-content": props.placeItems,
                  }}
                >
                  {child}
                </span>
              )}
            </For>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grid;
