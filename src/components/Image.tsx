import {
  ParentProps,
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
  // Props
  const merged = mergeProps(
    {
      height: "",
      width: "",
      constrained: true,
    },
    props,
  );

  // Variables
  let image_element!: HTMLImageElement;
  let transitionTimeout: number | undefined;
  const currentViewportWidth = () =>
    typeof window === "undefined" ? 0 : window.innerWidth;
  let intrinsic_image_width = 0;

  // Signals
  const [after_first_click, set_after_first_click] = createSignal(false);
  const [scale, set_scale] = createSignal({
    scale: 1.0,
    name: props.src,
    after_first_click: false,
  });
  const [constrained, setConstrained] = createSignal(merged.constrained);
  const [transitionsEnabled, setTransitionsEnabled] = createSignal(false);
  const [viewportWidth, setViewportWidth] = createSignal(
    currentViewportWidth(),
  );

  // Functions
  // -- Helpers
  const toggleConstrained = () => {
    setConstrained((beforeToggle) => {
      if (beforeToggle === true) {
        set_scale({
          scale: 1.0,
          name: props.src,
          after_first_click: after_first_click(),
        });
      }
      return !beforeToggle;
    });
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

  const updateImageScale = () => {
    // scale = current rendered width / original (intrinsic) width.
    // Denominator is the ORIGINAL width (author width attr, else natural
    // width), NOT the load-time rendered width — otherwise scale is always
    // 1 on load (the bug the old <Image> component never recovered from).
    let scale = intrinsic_image_width
      ? image_element.offsetWidth / intrinsic_image_width
      : 1;
    set_scale({
      scale,
      name: props.src,
      after_first_click: after_first_click(),
    });
  };

  // -- Event Handlers
  const handleClick = (event: any) => {
    event.stopPropagation();
    if (window.innerWidth <= intrinsic_image_width) {
      enableTransitionForToggle();
      requestAnimationFrame(toggleConstrained);
    }
    set_after_first_click(true);
  };

  const handleTransitionEnd = () => {
    updateImageScale();
    clearTimeout(transitionTimeout);
    setTransitionsEnabled(false);
  };

  const handleWindowResize = () => {
    disableTransitionsDuringWindowResizes();
    setViewportWidth(currentViewportWidth());
    requestAnimationFrame(updateImageScale);
  };

  const handleImageLoad = () => {
    requestAnimationFrame(() => {
      intrinsic_image_width =
        parseInt(merged.width) || image_element.naturalWidth;
      updateImageScale();
    });
  };

  const imageStyle = () => {
    const constrainedWidth =
      merged.width &&
      `min(${viewportWidth()}px, calc(${merged.width} + ${TEXT_X_PADDING * 2}px))`;
    const width = constrained()
      ? constrainedWidth || `${viewportWidth()}px`
      : merged.width || "100%";
    const padding = constrained() ? `padding:0 ${TEXT_X_PADDING}px;` : "";

    return `width:${width};max-width:none;box-sizing:border-box;max-height:${merged.height};${padding}${merged.style}`;
  };

  // Lifecycle Events

  onMount(() => {
    setViewportWidth(currentViewportWidth());
    window.addEventListener("resize", handleWindowResize);
  });

  onCleanup(() => {
    clearTimeout(transitionTimeout);
    window.removeEventListener("resize", handleWindowResize);
  });

  // Component
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
