import { MOBILE_MAX_WIDTH } from "~/constants";
import {
  mergeProps,
  ParentProps,
  children,
  For,
  createEffect,
  onCleanup,
  createSignal,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { TEXT_X_PADDING } from "~/constants";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";
import styleJoin from "~/utils/styleJoin";

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

  let parentSpan: HTMLDivElement | undefined;

  createEffect(() => {
    if (!props.columnFirst) return;
    // modify each child order in the grid so the grip will be filled top to bottom instead of left to right
    const children = parentSpan?.children || [];
    const rows = Math.ceil(children.length / cols());
    for (let i = 0; i < children.length; i++) {
      const elementCol = Math.ceil((i + 1) / rows);
      const elementRow = (i % rows) + 1;
      const precedingElementsInPrevRows = (elementRow - 1) * cols();
      const precedingElementsInCurrRow = elementCol - 1;
      let number = precedingElementsInPrevRows + precedingElementsInCurrRow;
      children[i].setAttribute("style", `order: ${number}`);
    }
  });

  return (
    <div
      class={`text-column ${props.class}`}
      style={styleJoin(
        {
          marginTop: `${props.marginTop}px`,
          marginBottom: `${props.marginBottom}px`,
          paddingInline: props.withPadding ? `${TEXT_X_PADDING}px` : "0",
        },
        props.style,
      )}>
      <div
        ref={parentSpan}
        class={`text-column !grid list-none`}
        style={{
          "grid-template-columns": `repeat(${cols()}, 1fr)`,
          "place-items": props.placeItems,
          animation: "appear 2s ease 0s 1 normal forwards",
          gap: props.gap,
        }}>
        <For each={children_array}>
          {(child, index) => {
            const isLastInRow =
              children_array.length - index() < cols() &&
              children_array.length % cols() !== 0;
            return (
              <span
                class={twJoin("w-max", isLastInRow && "col-span-full w-max")}>
                {child}
              </span>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default Grid;
