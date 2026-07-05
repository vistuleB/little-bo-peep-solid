import {
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
  ParentProps,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import ImageOrSideImage from "./ImageOrSideImage";
import { useScale } from "~/store/ScaleProvider";
import { TEXT_X_PADDING } from "~/constants";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const LINE_HEIGHT = 30;

/*
SideImage positions an out-of-flow image by aligning an image-side pivot to a
parent-side anchor. The parent is the relatively positioned element that owns
this component.

Horizontal placement:
- ImageRight anchors on the right edge of the parent rectangle and uses the
  image's left-center point as its pivot.
- ImageLeft anchors on the left edge of the parent rectangle and uses the
  image's right-center point as its pivot.
- atLeastAsWide widens the semantic parent rectangle, centered on the actual
  parent, to at least the main text width before the anchor is chosen.
- offsetX is then applied away from the parent, multiplied by the parent scale.

Vertical placement:
- line = 0 anchors halfway down the parent rectangle.
- line > 0 anchors (line - 0.5) unscaled line heights from the top.
- line < 0 anchors (0.5 - abs(line)) unscaled line heights from the bottom.
- offsetY is added after the line calculation and multiplied by the parent scale.
*/

type UserFacingSideImageProps = ParentProps &
  SharedProps & {
    src: string;
    offsetX?: string;
    offsetY?: string;
    atLeastAsWide?: boolean;
    line?: number | string;
    childrenX?: string | number;
    childrenY?: string | number;
    padding?: string | number;
    local_url?: string;
  };

type InternalSideImageProps = UserFacingSideImageProps & {
  side: "left" | "right";
  offsetX: string;
  offsetY: string;
  atLeastAsWide: boolean;
  line: number | string;
};

const SideImage = (props: InternalSideImageProps) => {
  let parentRef: HTMLDivElement | undefined;
  const scale = useScale();
  const [parentWidth, setParentWidth] = createSignal(0);
  const textWidth = () => mainColumnWidth() - 2 * TEXT_X_PADDING;
  const sideScale = () => scale().scale;
  const widthInflationOffset = () =>
    props.atLeastAsWide ? Math.max(0, (textWidth() - parentWidth()) / 2) : 0;

  const maybeChildren = () => {
    if (props.children) {
      return (
        <div
          class="absolute z-10"
          style={{
            top: `${props.childrenY}`,
            left: `${props.childrenX}`,
          }}
        >
          {props.children}
        </div>
      );
    }
    return <></>;
  };

  onMount(() => {
    const measureParent = () => {
      if (parentRef) setParentWidth(parentRef.getBoundingClientRect().width);
    };
    const observer = new ResizeObserver(measureParent);

    measureParent();
    if (parentRef) observer.observe(parentRef);

    onCleanup(() => observer.disconnect());
  });

  return (
    <div
      ref={parentRef}
      class="absolute"
      style="left:0;top:0;width:100%;height:100%;background-color:none;margin:0;padding:0;pointer-events:none;"
    >
      <div
        style={{
          left: getLeft(
            props.side,
            props.offsetX,
            sideScale(),
            widthInflationOffset(),
          ),
          right: getRight(
            props.side,
            props.offsetX,
            sideScale(),
            widthInflationOffset(),
          ),
          top: getTop(props.line, props.offsetY, sideScale()),
          transform: "translateY(-50%)",
          padding: `${props.padding}`,
          "transform-origin": getTransformOrigin(props.side),
          scale: sideScale(),
          "z-index": 20,
        }}
        class="flex shrink-0 transition-opacity duration-300 lg:transition-none lg:opacity-100 absolute w-max"
      >
        <ImageOrSideImage
          class={twJoin(props.class, "max-w-max", "cloud")}
          style={props.style}
          src={props.src}
          side_image={true}
          local_url={props.local_url}
        />
        {maybeChildren()}
      </div>
    </div>
  );
};

export const ImageRight = ({
  line = 0,
  offsetX = "0px",
  offsetY = "0px",
  atLeastAsWide = false,
  ...props
}: UserFacingSideImageProps) => {
  let internalProps: InternalSideImageProps = mergeProps(props, {
    side: "right",
    offsetX,
    offsetY,
    atLeastAsWide,
    line: line,
  });

  return <SideImage {...internalProps}></SideImage>;
};

export const ImageLeft = ({
  line = 0,
  offsetX = "0px",
  offsetY = "0px",
  atLeastAsWide = false,
  ...props
}: UserFacingSideImageProps) => {
  let internalProps: InternalSideImageProps = mergeProps(props, {
    side: "left",
    offsetX,
    offsetY,
    atLeastAsWide,
    line: line,
  });

  return <SideImage {...internalProps}></SideImage>;
};

const getLeft = (
  side: "left" | "right",
  offsetX: string,
  scale: number,
  widthInflationOffset: number,
): string => {
  return side === "right"
    ? `calc(100% + ${widthInflationOffset}px + (${offsetX}) * ${scale})`
    : "";
};

const getRight = (
  side: "left" | "right",
  offsetX: string,
  scale: number,
  widthInflationOffset: number,
): string => {
  return side === "left"
    ? `calc(100% + ${widthInflationOffset}px + (${offsetX}) * ${scale})`
    : "";
};

const getTop = (
  lineValue: number | string,
  offsetY: string,
  scale: number,
): string => {
  const line = Number(lineValue);
  let top = "";
  if (line > 0) {
    top = `calc(0% + ${(line - 0.5) * LINE_HEIGHT}px * ${scale} + (${offsetY}) * ${scale})`;
  } else if (line < 0) {
    top = `calc(100% + ${(0.5 + line) * LINE_HEIGHT}px * ${scale} + (${offsetY}) * ${scale})`;
  } else {
    top = `calc(50% + (${offsetY}) * ${scale})`;
  }
  return top;
};

const getTransformOrigin = (side: "left" | "right") =>
  side === "right" ? "left center" : "right center";
