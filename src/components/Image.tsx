import {
  ParentProps,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import ImageOrSideImage from "./ImageOrSideImage";
import { ScaleProvider } from "~/store/ScaleProvider";
import { TEXT_X_PADDING } from "~/constants";

const SHOW_DEBUG_COLORS = false;

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    id?: string;
    width?: string;
    height?: string;
    local_url?: string;
    constrained?: boolean;
  };

const Image = (props: ImageProps) => {
  const merged = mergeProps(
    {
      height: "",
      width: "",
      constrained: true,
    },
    props,
  );

  let image_element!: HTMLImageElement;
  let transitionTimeout: number | undefined;

  const currentViewportWidth = () =>
    typeof window === "undefined" ? 0 : window.innerWidth;

  const [after_first_click, set_after_first_click] = createSignal(false);
  const [naturalImageWidth, setNaturalImageWidth] = createSignal(0);
  const [constrained, setConstrained] = createSignal(merged.constrained);
  const [transitionsEnabled, setTransitionsEnabled] = createSignal(false);
  const [viewportWidth, setViewportWidth] = createSignal(
    currentViewportWidth(),
  );

  const authorWidth = () => {
    const width = parseFloat(merged.width);
    return Number.isFinite(width) && width > 0 ? width : 0;
  };

  const imageIntrinsicWidth = () => authorWidth() || naturalImageWidth();

  const imageStyleWidth = () => {
    if (merged.width) return merged.width;
    const intrinsicWidth = imageIntrinsicWidth();
    return intrinsicWidth ? `${intrinsicWidth}px` : "";
  };

  const targetScale = () => {
    const intrinsicWidth = imageIntrinsicWidth();
    if (!intrinsicWidth || !constrained()) return 1;
    return Math.min(1, viewportWidth() / intrinsicWidth);
  };

  const scale = createMemo(() => ({
    scale: targetScale(),
    name: props.src,
    after_first_click: after_first_click(),
  }));

  const toggleConstrained = () => {
    setConstrained((beforeToggle) => !beforeToggle);
  };

  const disableTransitionsDuringWindowResizes = () => {
    clearTimeout(transitionTimeout);
    setTransitionsEnabled(false);
  };

  const enableTransitionForToggle = () => {
    clearTimeout(transitionTimeout);
    setTransitionsEnabled(true);
    transitionTimeout = window.setTimeout(() => {
      setTransitionsEnabled(false);
    }, 600);
  };

  const debugBackground = () => {
    const currentScale = scale().scale;
    const isConstrained = constrained();
    if (isConstrained && currentScale < 1) return "#8b0000";
    if (isConstrained) return "#ffb3b3";
    if (currentScale < 1) return "#12b886";
    return "#a5d8ff";
  };

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();

    const intrinsicWidth = imageIntrinsicWidth();
    if (window.innerWidth <= intrinsicWidth) {
      enableTransitionForToggle();
      requestAnimationFrame(toggleConstrained);
    }

    set_after_first_click(true);
  };

  const handleTransitionEnd = () => {
    clearTimeout(transitionTimeout);
    setTransitionsEnabled(false);
  };

  const handleWindowResize = () => {
    disableTransitionsDuringWindowResizes();
    setViewportWidth(currentViewportWidth());
  };

  const handleImageLoad = () => {
    setNaturalImageWidth(image_element.naturalWidth);
  };

  const imageStyle = () => {
    const styleWidth = imageStyleWidth();
    const constrainedWidth =
      styleWidth &&
      `min(${viewportWidth()}px, calc(${styleWidth} + ${TEXT_X_PADDING * 2}px))`;
    const width = constrained()
      ? constrainedWidth || "auto"
      : styleWidth || "auto";
    const padding = constrained() ? `padding:0 ${TEXT_X_PADDING}px;` : "";

    const debugColor = SHOW_DEBUG_COLORS
      ? `background-color:${debugBackground()};`
      : "";

    return `${debugColor}width:${width};max-width:none;box-sizing:border-box;max-height:${merged.height};${padding}${merged.style}`;
  };

  onMount(() => {
    setViewportWidth(currentViewportWidth());
    window.addEventListener("resize", handleWindowResize);
  });

  onCleanup(() => {
    clearTimeout(transitionTimeout);
    window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <ScaleProvider scale={scale}>
      <div id={merged.id} class="w-full flex items-center justify-center">
        <div class={twJoin("flex items-center justify-center", "w-full")}>
          <ImageOrSideImage
            ref={image_element}
            src={merged.src}
            onLoad={handleImageLoad}
            onClick={handleClick}
            onTransitionEnd={handleTransitionEnd}
            style={imageStyle()}
            class={twJoin(
              transitionsEnabled() && [
                "transition-[width,max-width,padding]",
                "duration-500",
                "ease-[cubic-bezier(0.4, 0, 0.2, 1)]",
              ],
              !transitionsEnabled() && "transition-none",
            )}
          />
          {merged.children}
        </div>
      </div>
    </ScaleProvider>
  );
};

export default Image;
