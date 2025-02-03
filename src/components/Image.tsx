import { createEffect, createSignal, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import useOnMobile from "../hooks/useOnMobile";
import LazyImage from "./LazyImage";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    id?: string;
    width?: string;
    height?: string;
    padding_left?: number;
    padding_right?: number;
  };

const Image = (props: ImageProps) => {
  let { on_mobile } = useOnMobile();
  let [scaled_down, set_scaled_down] = createSignal(false);
  let [scale_value, set_scale_value] = createSignal(1.0);
  let [image_original_width, set_image_original_width] = createSignal(1.0);
  let image_ref: HTMLImageElement | undefined;

  createEffect(() => {
    if (on_mobile()) {
      set_scaled_down(true);
    }
  });

  createEffect(() => {
    // re_calculate on scaled_down change
    scaled_down();
    if (image_ref && image_ref?.naturalWidth > 0.0) {
      let image_width = image_ref.naturalWidth;
      if (window.innerWidth < image_width && scaled_down()) {
        set_scale_value(window.innerWidth / (image_width + 32.0));
      } else {
        set_scale_value(1.0);
      }
    } else {
      set_scale_value(1.0);
    }
    // dispatch event to scale down side images with it
    setTimeout(() => {
      let custom_event = new CustomEvent("image_scale");
      let _ = window.dispatchEvent(custom_event);
    }, 10);
  });

  return (
    <div
      id={props.id}
      style={{
        "padding-left": `${props.padding_left || 0}`,
        "padding-right": `${props.padding_right || 0}`,
      }}
      class={twJoin(
        "relative left-1/2 -translate-x-1/2 col-start-2 scrollbar-hidden sm:overflow-x-visible transition-all w-max",
        props.class
      )}>
      <div
        style={{
          height: props.height,
          width: props.width,
        }}
        data-scale_side_images={scale_value()}
        class="left-1/2 -translate-x-1/2 relative w-max">
        <LazyImage
          onClick={() => {
            // if on_mobile.get() && !margin_mode.get() {
            if (on_mobile()) {
              console.log("heard click");
              set_scaled_down(!scaled_down());
            } else {
              set_scaled_down(false);
            }
            // } else if !margin_mode.get() {
            //   set_scaled_down.set(false);
            // }
          }}
          ref={image_ref}
          class={twJoin(
            "scrollbar-hidden sm:overflow-x-visible m-auto transition-all h-[inherit]",
            on_mobile() && scaled_down() && "max-width-screen"
          )}
          style={props.style}
          src={props.src}
        />
      </div>
      {props.children}
    </div>
  );
};

export default Image;
