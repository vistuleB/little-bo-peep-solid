import {
  ParentProps,
  batch,
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
import { useLazyImages } from "~/store/LazyImageProvider";
import useConstrainedContent from "~/hooks/useConstrainedContent";
import styleJoin from "~/utils/styleJoin";
import { useGlobalContext } from "~/store/StoreProvider";
import { PAN_RECENTER_CONSTRAIN_IMAGE_EVENT } from "~/constants";

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
  let imageWrapper!: HTMLDivElement;
  const lazy = useLazyImages();
  const { store } = useGlobalContext();

  const positiveNumber = (value: string | number | undefined) => {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : 0;
  };

  const [naturalImageWidth, setNaturalImageWidth] = createSignal(
    positiveNumber(merged.intrinsicWidth),
  );
  const [naturalImageHeight, setNaturalImageHeight] = createSignal(
    positiveNumber(merged.intrinsicHeight),
  );

  const authorWidth = () => {
    const width = parseFloat(merged.width);
    return Number.isFinite(width) && width > 0 ? width : 0;
  };

  const displayWidth = () => authorWidth() || naturalImageWidth();
  const constrainedContent = useConstrainedContent({
    naturalWidth: displayWidth,
    initiallyConstrained: merged.constrained,
    clickDisabled: () => store.margin_mode,
  });

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

  const scale = createMemo(() => ({
    scale: constrainedContent.targetScale(),
    name: props.src,
    after_first_click: constrainedContent.afterFirstClick(),
  }));

  const handleImageLoad = () => {
    // Renderer metadata reserves space before loading; the loaded asset is
    // authoritative, including when an SVG was edited without regenerating.
    const width = image_element.naturalWidth;
    const height = image_element.naturalHeight;
    if (width <= 0 || height <= 0) return;

    if (width !== naturalImageWidth() || height !== naturalImageHeight()) {
      batch(() => {
        setNaturalImageWidth(width);
        setNaturalImageHeight(height);
      });
      constrainedContent.notifyHeightChangeAcrossFrames();
    }
  };

  const imageStyle = () => {
    const styleWidth = imageStyleWidth();
    const heightOnly = !merged.width && Boolean(merged.height);
    const availableWidth =
      "calc(100vw - 2 * var(--mobile-text-column-side-inset))";
    const constrainedWidth =
      styleWidth && !heightOnly
        ? `min(${availableWidth}, ${styleWidth})`
        : styleWidth;
    const width = constrainedContent.constrained()
      ? constrainedWidth || "auto"
      : styleWidth || "auto";

    const height = merged.height || "auto";
    const aspectRatio = intrinsicAspectRatio();

    return styleJoin(merged.style, {
      width,
      height,
      aspectRatio: aspectRatio || undefined,
      maxWidth:
        constrainedContent.constrained() && heightOnly
          ? availableWidth
          : "none",
      boxSizing: "border-box",
    });
  };

  onMount(() => {
    if (image_element.complete) handleImageLoad();
    const constrainFromPanRecenter = () => constrainedContent.constrain();
    imageWrapper.addEventListener(
      PAN_RECENTER_CONSTRAIN_IMAGE_EVENT,
      constrainFromPanRecenter,
    );
    onCleanup(() =>
      imageWrapper.removeEventListener(
        PAN_RECENTER_CONSTRAIN_IMAGE_EVENT,
        constrainFromPanRecenter,
      ),
    );
  });

  return (
    <ScaleProvider scale={scale}>
      <div id={merged.id} class="w-full flex items-center justify-center">
        <div
          ref={imageWrapper}
          class={twJoin("relative flex items-center justify-center w-fit")}
          data-pan-recenter-constrain-image={
            constrainedContent.constrained() ? undefined : "true"
          }
          data-horizontal-inspectable={
            constrainedContent.constrained() ? undefined : "true"
          }
        >
          <ImageOrSideImage
            ref={image_element}
            src={merged.src}
            loading={lazy ? "lazy" : undefined}
            width={useNativeDimensions() ? naturalImageWidth() || undefined : undefined}
            height={useNativeDimensions() ? naturalImageHeight() || undefined : undefined}
            side_image={false}
            local_url={merged.local_url}
            onLoad={handleImageLoad}
            onClick={constrainedContent.handleClick}
            onTransitionEnd={constrainedContent.handleTransitionEnd}
            style={imageStyle()}
            class={twJoin(
              merged.class,
              constrainedContent.transitionsEnabled() && [
                "transition-[width,max-width]",
                "duration-500",
                "ease-[cubic-bezier(0.4, 0, 0.2, 1)]",
              ],
              !constrainedContent.transitionsEnabled() && "transition-none",
            )}
          />
          {merged.children}
        </div>
      </div>
    </ScaleProvider>
  );
};

export default Image;
