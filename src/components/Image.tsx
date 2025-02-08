import { MOBILE_MAX_WIDTH } from "~/constants";
import { createEffect, createSignal, onCleanup, onMount, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import useOnMobile from "../hooks/useOnMobile";
import LazyImage from "./LazyImage";
import { ScaleProvider } from "~/store/ScaleProvider";

type ImageProps = ParentProps & SharedProps & {
  src: string;
  id?: string;
  width?: string;
  height?: string;
  padding_left?: number;
  padding_right?: number;
};

const Image = (props: ImageProps) => {
  let [scale, set_scale] = createSignal(1.0);
  let [scaled_down, set_scaled_down] = createSignal(false);
  let [recent_click, set_recent_click] = createSignal(false);
  const [innerWidth, set_innerWidth] = createSignal(0);
  let [after_first_load, set_after_first_load] = createSignal(false);
  let image_ref: HTMLImageElement | undefined;

  const naturalWidth = () => {
    let toReturn = (image_ref) ? image_ref.naturalWidth : 3000;
    return toReturn;
  }

  const scaled_down_scale = () => Math.min(1, (innerWidth() - 32.0) / naturalWidth());
  const our_on_mobile = () => (innerWidth() <= MOBILE_MAX_WIDTH);

  const reset_scale = () => {
    if (our_on_mobile() && scaled_down_scale() < 1) {
      set_scale(scaled_down_scale());
      set_scaled_down(true);
    } else {
      set_scale(1);
      set_scaled_down(false);
    }
  }

  const handleResize = () => {
    let previous_innerWidth = innerWidth();
    let new_innerWidth = window.innerWidth;
    if (previous_innerWidth == new_innerWidth) return;
    let previous_on_mobile = our_on_mobile();
    set_innerWidth(new_innerWidth);
    if (previous_on_mobile != our_on_mobile() || !previous_on_mobile) reset_scale();
  };
  
  createEffect(() => {
    window.requestAnimationFrame(() => { handleResize(); reset_scale(); });
    setTimeout(() => { reset_scale(); }, 50);
    setTimeout(() => { set_after_first_load(true); }, 2000);
    window.addEventListener("resize", handleResize);
    onCleanup(() => { window.removeEventListener("resize", handleResize); });
  });

  return (
    <ScaleProvider scale={scale}>
      <div
        id={props.id}
        style={{
          "padding-left": `${props.padding_left || 0}`,
          "padding-right": `${props.padding_right || 0}`,
        }}
        class={twJoin("left-1/2 -translate-x-1/2 relative w-max bg-slate-200", props.class)}>
        <div 
          style={{
            height: props.height,
            width: props.width,
          }}
        >
          <LazyImage
            ref={image_ref}
            onClick={(_) => {
              const newScaledDown = our_on_mobile() ? !scaled_down() : false;
              set_scaled_down(newScaledDown);
              set_after_first_load(true);
              set_scale(newScaledDown ? scaled_down_scale() : 1);
              set_recent_click(true);
              setTimeout(
                () => { set_recent_click(false); },
                100
              )
            }}
            class={twJoin(
              "scrollbar-hidden sm:overflow-x-visible m-auto h-[inherit]",
              our_on_mobile() && scaled_down() && "max-width-screen",
              recent_click() && "bg-reddish",
              after_first_load() && "transition-all",
            )}
            style={props.style}
            src={props.src}
          />
        </div>
        {props.children}
      </div>
    </ScaleProvider>
  );
};

export default Image; 
