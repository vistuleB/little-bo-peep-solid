import { mergeProps, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import LazyImage from "./LazyImage";
import { useGlobalContext } from "~/store/StoreProvider";
import { useScale } from "~/store/ScaleProvider";

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
  left: string;
  right: string;
  top: string;
};

const SideImage = (props: InternalSideImageProps) => {
  let container_ref: HTMLDivElement | undefined;
  const { store } = useGlobalContext();
  const show_squiggles = () => store.show_squiggles;

  let innerStyles = () => ({
    left: props.left,
    right: props.right,
    top: props.top,
    transform: `translateY(calc(-50%))`,
    padding: `${props.padding}`,
    "transform-origin": `0 top 0`,
    zIndex: 20,
  });

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
      class="absolute" style="left:0;top:0;width:100%;height:100%;background-color:none;margin:0;padding:0;"
      >
      <div
        style={innerStyles()}
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
  const scale = useScale();

  let internalProps : InternalSideImageProps = mergeProps(
    props,
    {
      right: getRight("right", offset_x, scale()),
      left: getLeft("right", offset_x, scale()),
      top: getTop(line, 30, offset_y, scale()),
      side: "right",
    }
  )

  return (<SideImage {...internalProps}></SideImage>);
};

export const ImageLeft = ({
  line = 0,
  offset_x = "0px",
  offset_y = "0px",
  ...props
}: UserFacingSideImageProps) => {
  const scale = useScale();

  let internalProps : InternalSideImageProps = mergeProps(
    props,
    {
      right: getRight("left", offset_x, scale()),
      left: getLeft("left", offset_x, scale()),
      top: getTop(line, 30, offset_y, scale()),
      side: "left",
    }
  )

  return (<SideImage {...internalProps}></SideImage>);
};

const getLeft = (
  side: string,
  offset_x: string,
  scale: number,
): string => {
  return side === "right" ? `calc(100% + ${offset_x} * ${scale}`: "";
}

const getRight = (
  side: string,
  offset_x: string,
  scale: number,
): string => {
  return side === "left" ? `calc(100% + ${offset_x} * ${scale}`: "";
}

const getTop = (
  line: number, 
  line_height: number,
  offset_y: string,
  scale: number,
) : string => {
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
