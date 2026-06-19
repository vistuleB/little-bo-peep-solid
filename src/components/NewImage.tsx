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

type NewImageProps = ParentProps &
  SharedProps & {
    src: string;
    id?: string;
    width?: string;
    height?: string;
    local_url?: string;
    constrained?: boolean;
  };

const NewImage = (props: NewImageProps) => {
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
  let intrinsic_image_width: number;
  let resizeTimeout: number | undefined;

  // Signals
  const [after_first_click, set_after_first_click] = createSignal(false);
  const [scale, set_scale] = createSignal({
    scale: 1.0,
    name: props.src,
    after_first_click: false,
  });
  const [constrained, setConstrained] = createSignal(merged.constrained);
  const [transitionsEnabled, setTransitionsEnabled] = createSignal(true);

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
    setTransitionsEnabled(false);

    // Debounce the enabling of transitions after window hasn't fired a resize event
    const debounce_millis = 150;
    // Reset timer when a window resize event fires
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      setTransitionsEnabled(true);
    }, debounce_millis);
  };

  const updateImageScale = () => {
    // scale = current rendered width / original (intrinsic) width.
    // Denominator is the ORIGINAL width (author width attr, else natural
    // width), NOT the load-time rendered width — otherwise scale is always
    // 1 on load (the bug the old <Image> component never recovered from).
    let scale = image_element.offsetWidth / intrinsic_image_width;
    set_scale({
      scale,
      name: props.src,
      after_first_click: after_first_click(),
    });
  };

  // 4-color debug background keyed on (constrained, scale): the alpha test
  // images let this show through. Expectation on load: everything dark red
  // (constrained && scale < 1) on a narrow screen, light red where the image
  // already fits (scale == 1). Green should never appear.
  const debugBackground = () => {
    const s = scale().scale;
    const c = constrained();
    if (c && s < 0.999) return "#8b0000"; // dark red
    if (!c && s < 0.999) return "#12b886"; // green  (should be impossible)
    if (c) return "#ffb3b3"; // light red  (constrained, scale == 1)
    return "#a5d8ff"; // light blue (unconstrained, scale == 1)
  };

  // -- Event Handlers
  const handleClick = (event: any) => {
    event.stopPropagation();
    if (window.innerWidth <= intrinsic_image_width) {
      toggleConstrained();
    }
    set_after_first_click(true);
  };

  const handleTransitionEnd = () => {
    updateImageScale();
  };

  const handleWindowResize = () => {
    disableTransitionsDuringWindowResizes();
    updateImageScale();
  };

  const handleImageLoad = () => {
    requestAnimationFrame(() => {
      intrinsic_image_width =
        parseInt(merged.width) || image_element.naturalWidth;
      updateImageScale();
    });
  };

  // Lifecycle Events

  onMount(() => {
    window.addEventListener("resize", handleWindowResize);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handleWindowResize);
  });

  // Component
  return (
    <ScaleProvider scale={scale}>
      <div id={merged.id} class="w-full flex items-center justify-center">
        <div
          class={twJoin("flex items-center justify-center", "w-full")}
          style={`max-width:${merged.width};max-height:${merged.height};${merged.style}`}>
          <ImageOrSideImage
            ref={image_element}
            src={merged.src}
            onLoad={handleImageLoad}
            onClick={handleClick}
            onTransitionEnd={handleTransitionEnd}
            style={`background-color:${debugBackground()}`}
            class={twJoin(
              "transition-[height,width,max-width,padding]",
              "duration-500",
              "ease-[cubic-bezier(0.4, 0, 0.2, 1)]",
              transitionsEnabled() ? "" : "transition-none",
              constrained() ? "img-screen max-[900px]:px-[16px]" : "img-full",
            )}
          />
          {merged.children}
        </div>
      </div>
    </ScaleProvider>
  );
};

export default NewImage;
