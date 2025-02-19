import { mergeProps, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import LazyImage from "./LazyImage";
import { useGlobalContext } from "~/store/StoreProvider";
import { useScale } from "~/store/ScaleProvider";
import { DESKTOP_COLUMN_WIDTH, MOBILE_MAX_WIDTH } from "~/constants";

type UserFacingSideImageProps = ParentProps &
  SharedProps & {
    src: string;
    squiggle?: boolean;
    width?: string;
    offset_y?: string;
    offset_x?: string;
    line?: number;
    squiggle_y?: string | number;
    children_y?: string | number;
    children_x?: string | number;
    clickable_on_desktop?: boolean;
    padding?: string | number;
    popup?: boolean;
  };

type InternalSideImageProps = UserFacingSideImageProps & {
  side: string;
  offset_x: string;
  offset_y: string;
  line: number;
};

const SideImage = (props: InternalSideImageProps) => {
  let container_ref: HTMLDivElement | undefined;
  const { store } = useGlobalContext();
  const show_squiggles = () => store.show_squiggles;
  const scale = useScale();

  let maybeChildren = () => {
    if (props.children) {
      return <div
        class="absolute z-10"
        style={`top: ${props.children_y}; left: ${props.children_x}`}>
        {props.children}
      </div>;
    }
    return <></>;
  }

  return (
    <div
      ref={container_ref}
      class="absolute" style="left:0;top:0;width:100%;height:100%;background-color:none;margin:0;padding:0;pointer-events:none;"
      >
      <div
        style={{
          left: getLeft(props.side, props.offset_x, scale().scale, store.innerWidth),
          right: getRight(props.side, props.offset_x, scale().scale, store.innerWidth),
          top: getTop(props.line, props.offset_y, scale().scale),
          transform: `translateY(calc(-50%))`,
          padding: `${props.padding}`,
          "transform-origin": `0 top 0`,
          scale: scale().scale,
          "z-index": 20,
        }}
        class="flex shrink-0 transition-opacity duration-300 lg:transition-none lg:opacity-100 absolute w-max">
        <LazyImage
          class={twJoin(props.class, !props.width && "max-w-max", "cloud")}
          style={props.style}
          src={props.src}
          side_image={true}
        />
        {maybeChildren()}
      </div>

      {show_squiggles() && props.squiggle && (
        <div
          class="squiggle block sm:hidden absolute"
          style={{
            left: props.side === "right" ? "50%" : "0",
            right: props.side === "right" ? "0" : "50%",
            top: `${props.squiggle_y}`,
            transform: "translate(-50%, -50%)",
            padding: "2.6rem",
          }}>
          <img
            loading="lazy"
            src="/images/squiggle.png"
            class="h-11 min-w-[45px]"
          />
        </div>
      )}
    </div>
  );
};

export const ImageRight = ({
  line = 0,
  offset_x = "0px",
  offset_y = "0px",
  ...props
}: UserFacingSideImageProps) => {
  let internalProps : InternalSideImageProps = mergeProps(
    props,
    {
      side: "right",
      offset_x: offset_x,
      offset_y: offset_y,
      line: line,
    },
  )

  return (<SideImage {...internalProps}></SideImage>);
};

export const ImageLeft = ({
  line = 0,
  offset_x = "0px",
  offset_y = "0px",
  ...props
}: UserFacingSideImageProps) => {
  let internalProps : InternalSideImageProps = mergeProps(
    props,
    {
      side: "left",
      offset_x: offset_x,
      offset_y: offset_y,
      line: line,
    }
  )

  return (<SideImage {...internalProps}></SideImage>);
};

const getLeft = (
  side: string,
  offset_x: string,
  scale: number,
  innerWidth: number,
): string => {
  let text_width = innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : innerWidth;
  let added = Math.max(0, (text_width - DESKTOP_COLUMN_WIDTH) / 2);
  return side === "right" ? `calc(100% + ${offset_x} * ${scale} + ${added}px * ${scale})`: "";
}

const getRight = (
  side: string,
  offset_x: string,
  scale: number,
  innerWidth: number,
): string => {
  let column_width = innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : innerWidth;
  let added = Math.max(0, (column_width - DESKTOP_COLUMN_WIDTH) / 2);
  return side === "left" ? `calc(100% + ${offset_x} * ${scale} + ${added}px * ${scale})`: "";
}

const getTop = (
  line: number, 
  offset_y: string,
  scale: number,
) : string => {
  let line_height = 30;
  let top = "";
  if (line > 0) {
    top = `calc(0% + ${(line - 0.5) * line_height}px * ${scale} + ${offset_y} * ${scale})`;
  } else if (line < 0) {
    top = `calc(100% + ${(0.5 + line) * line_height}px * ${scale} + ${offset_y} * ${scale})`;
  } else {
    top = `calc(50% + ${offset_y} * ${scale})`
  }
  return top;
};
