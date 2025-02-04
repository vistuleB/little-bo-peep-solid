import {
  mergeProps,
  ParentProps,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import useOnMobile from "../hooks/useOnMobile";
import LazyImage from "./LazyImage";
import { useGlobalContext } from "~/store/StoreProvider";
import { useScale } from "./Image";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    squiggle?: boolean;
    width?: string;
    img_position?: "top" | "bottom" | "center";
    y?: string | number;
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

type SideImageProps = Partial<ImageProps> & {
  side: "left" | "right";
  parentStyles?: {
    [key: string]: string;
  };
};

const SideImage = (_props: SideImageProps) => {
  let container_ref: HTMLDivElement | undefined;
  const { store } = useGlobalContext();
  const scale = useScale();
  const show_squiggles = () => store.show_squiggles;

  const props = mergeProps(
    {
      offset_x: "0px",
      offset_y: "0px",
      img_position: "center",
      padding: "",
      squiggle_y: "30%",
    },
    _props
  );

  let innerStyles = () => ({
    left: props.side === "right" ? props.offset_x : "",
    right: props.side === "left" ? props.offset_x : "",
    top: `calc(50% + ${props.offset_y.includes("%") ? "0px" : props.offset_y})`,
    transform: `translateY(calc(-50% + ${getInnerTransform(
      props.img_position
    )} + ${props.offset_y.includes("%") ? props.offset_y : "0px"}))`,
    padding: `${props.padding}`,
    scale: `${scale()}`,
    "transform-origin": `0 top 0`, // (have no idea why this works...)
  });

  return (
    <div
      ref={container_ref}
      style={props.parentStyles}
      class="absolute !w-1 !p-0 !ps-0 !pe-0 h-1"
      >
      <div
        style={innerStyles()}
        class="flex shrink-0 transition-opacity duration-300 lg:transition-none lg:opacity-100  z-10 absolute w-max">
        <div
          class="absolute z-10"
          style={`top: ${props.children_y}; left: ${props.children_x}`}>
          {props.children}
        </div>

        <LazyImage
          class={twJoin(props.class, !props.width && "max-w-max")}
          style={props.style}
          src={props.src}
        />
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
  y = "center",
  ...props
}: ImageProps) => {
  let parent_styles = () => ({
    left: "100%",
    top: getTopPos(y, line, 30),
  });

  return (
    <SideImage
      side="right"
      parentStyles={parent_styles()}
      {...props}></SideImage>
  );
};

export const ImageLeft = (
  { line = 0, y = "center", ...props }: ImageProps
) => {
  const { on_mobile } = useOnMobile();

  let line_height = () => (on_mobile() ? 28.0 : 32.5);
  let parent_styles = () => ({
    right: "100%",
    top: getTopPos(y, line, line_height()),
  });

  return (
    <SideImage
      side="left"
      parentStyles={parent_styles()}
      {...props}></SideImage>
  );
};

const getTopPos = (y: string | number, line: number, line_height: number) => {
  let top = "";
  if (line > 0) {
    top = (line - 0.5) * line_height + "px";
  } else if (line < 0.0) {
    top = `calc(100% + ${(0.5 + line) * line_height}px)`;
  } else {
    let map = {
      bottom: "100%",
      top: "0",
      center: "50%",
    };
    top = typeof y === "string" ? map[y as keyof typeof map] : `${y}`;
  }
  return top;
};

const getInnerTransform = (img_position: string) => {
  let map = {
    bottom: "-50%",
    top: "50%",
  };

  return map[img_position as keyof typeof map] || "0%";
};
