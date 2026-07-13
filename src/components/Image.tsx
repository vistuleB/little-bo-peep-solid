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
import { MOBILE_TEXT_COLUMN_SIDE_INSET } from "~/constants";
import { useHeightChangeListenerContext } from "~/store/HeightChangeListenerProvider";
import { useLazyImages } from "~/store/LazyImageProvider";

const SHOW_DEBUG_COLORS = false;
const HEIGHT_CHANGE_RAF_MAX_MS = 800;

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    id?: string;
    width?: string;
    height?: string;
    intrinsicWidth?: string | number;
    intrinsicHeight?: string | number;
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
  let heightChangeAnimationFrame: number | undefined;
  let heightChangeAnimationFrameExpiresAt = 0;
  const { set_height_change_listener_store } =
    useHeightChangeListenerContext() || {};
  const lazy = useLazyImages();

  const currentViewportWidth = () =>
    typeof window === "undefined" ? 0 : window.innerWidth;

  const positiveNumber = (value: string | number | undefined) => {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : 0;
  };

  const [after_first_click, set_after_first_click] = createSignal(false);
  const [naturalImageWidth, setNaturalImageWidth] = createSignal(
    positiveNumber(merged.intrinsicWidth),
  );
  const [naturalImageHeight, setNaturalImageHeight] = createSignal(
    positiveNumber(merged.intrinsicHeight),
  );
  const [constrained, setConstrained] = createSignal(merged.constrained);
  const [transitionsEnabled, setTransitionsEnabled] = createSignal(false);
  const [viewportWidth, setViewportWidth] = createSignal(
    currentViewportWidth(),
  );

  const authorWidth = () => {
    const width = parseFloat(merged.width);
    return Number.isFinite(width) && width > 0 ? width : 0;
  };

  const displayWidth = () => authorWidth() || naturalImageWidth();

  const intrinsicAspectRatio = () => {
    if (merged.width && merged.height) return "";
    const width = naturalImageWidth();
    const height = naturalImageHeight();
    return width && height ? `${width} / ${height}` : "";
  };

  const useNativeDimensions = () => !merged.width && !merged.height;

  const imageStyleWidth = () => {
    if (merged.width) return merged.width;
    if (merged.height) return "auto";
    const width = displayWidth();
    return width ? `${width}px` : "";
  };

  const availableViewportWidth = () =>
    Math.max(0, viewportWidth() - MOBILE_TEXT_COLUMN_SIDE_INSET * 2);

  const targetScale = () => {
    const width = displayWidth();
    if (!width || !constrained()) return 1;
    return Math.min(1, availableViewportWidth() / width);
  };

  const scale = createMemo(() => ({
    scale: targetScale(),
    name: props.src,
    after_first_click: after_first_click(),
  }));

  const toggleConstrained = () => {
    setConstrained((beforeToggle) => !beforeToggle);
  };

  const notifyHeightChange = () => {
    set_height_change_listener_store?.(
      "re_calculate_height",
      (previous) => !previous,
    );
  };

  const notifyHeightChangeAcrossFrames = () => {
    notifyHeightChange();
    requestAnimationFrame(notifyHeightChange);
    window.setTimeout(notifyHeightChange, 50);
  };

  const stopHeightChangeAnimationFrameLoop = () => {
    if (heightChangeAnimationFrame === undefined) return;

    cancelAnimationFrame(heightChangeAnimationFrame);
    heightChangeAnimationFrame = undefined;
    heightChangeAnimationFrameExpiresAt = 0;
  };

  const startHeightChangeAnimationFrameLoop = () => {
    heightChangeAnimationFrameExpiresAt =
      performance.now() + HEIGHT_CHANGE_RAF_MAX_MS;

    if (heightChangeAnimationFrame !== undefined) return;

    const tick = () => {
      if (performance.now() > heightChangeAnimationFrameExpiresAt) {
        heightChangeAnimationFrame = undefined;
        heightChangeAnimationFrameExpiresAt = 0;
        notifyHeightChangeAcrossFrames();
        return;
      }

      notifyHeightChange();
      heightChangeAnimationFrame = requestAnimationFrame(tick);
    };

    heightChangeAnimationFrame = requestAnimationFrame(tick);
  };

  const disableTransitionsDuringWindowResizes = () => {
    clearTimeout(transitionTimeout);
    stopHeightChangeAnimationFrameLoop();
    setTransitionsEnabled(false);
  };

  const enableTransitionForToggle = () => {
    clearTimeout(transitionTimeout);
    setTransitionsEnabled(true);
    startHeightChangeAnimationFrameLoop();
    transitionTimeout = window.setTimeout(() => {
      setTransitionsEnabled(false);
      stopHeightChangeAnimationFrameLoop();
      notifyHeightChangeAcrossFrames();
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

    const width = displayWidth();
    if (window.innerWidth <= width) {
      enableTransitionForToggle();
      requestAnimationFrame(() => {
        toggleConstrained();
        notifyHeightChangeAcrossFrames();
      });
    }

    set_after_first_click(true);
  };

  const handleTransitionEnd = () => {
    clearTimeout(transitionTimeout);
    stopHeightChangeAnimationFrameLoop();
    setTransitionsEnabled(false);
    notifyHeightChangeAcrossFrames();
  };

  const handleWindowResize = () => {
    disableTransitionsDuringWindowResizes();
    setViewportWidth(currentViewportWidth());
  };

  const handleImageLoad = () => {
    const widthWasMissing = !naturalImageWidth();
    const heightWasMissing = !naturalImageHeight();

    if (widthWasMissing) setNaturalImageWidth(image_element.naturalWidth);
    if (heightWasMissing) setNaturalImageHeight(image_element.naturalHeight);

    if (widthWasMissing || heightWasMissing) {
      notifyHeightChangeAcrossFrames();
    }
  };

  const imageStyle = () => {
    const styleWidth = imageStyleWidth();
    const constrainedWidth =
      styleWidth &&
      `min(calc(100vw - 2 * var(--mobile-text-column-side-inset)), ${styleWidth})`;
    const width = constrained()
      ? constrainedWidth || "auto"
      : styleWidth || "auto";

    const debugColor = SHOW_DEBUG_COLORS
      ? `background-color:${debugBackground()};`
      : "";

    const height = merged.height || "auto";
    const aspectRatio = intrinsicAspectRatio();

    return `${debugColor}width:${width};height:${height};${aspectRatio ? `aspect-ratio:${aspectRatio};` : ""}max-width:none;box-sizing:border-box;${merged.style}`;
  };

  onMount(() => {
    setViewportWidth(currentViewportWidth());
    window.addEventListener("resize", handleWindowResize);
  });

  onCleanup(() => {
    clearTimeout(transitionTimeout);
    stopHeightChangeAnimationFrameLoop();
    window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <ScaleProvider scale={scale}>
      <div id={merged.id} class="w-full flex items-center justify-center">
        <div class={twJoin("relative flex items-center justify-center w-fit")}>
          <ImageOrSideImage
            ref={image_element}
            src={merged.src}
            loading={lazy ? "lazy" : undefined}
            width={useNativeDimensions() ? merged.intrinsicWidth : undefined}
            height={useNativeDimensions() ? merged.intrinsicHeight : undefined}
            side_image={false}
            local_url={merged.local_url}
            onLoad={handleImageLoad}
            onClick={handleClick}
            onTransitionEnd={handleTransitionEnd}
            style={imageStyle()}
            class={twJoin(
              merged.class,
              transitionsEnabled() && [
                "transition-[width,max-width]",
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
