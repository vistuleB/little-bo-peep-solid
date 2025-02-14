import { MOBILE_MAX_WIDTH } from "~/constants";
import { createEffect, createSignal, onCleanup, onMount, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
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
  let [recent_click, set_recent_click] = createSignal(0);
  const [innerWidth, set_innerWidth] = createSignal(0);
  let [after_first_click, set_after_first_click] = createSignal(false);
  let image_ref: HTMLImageElement | undefined;

  const imageWidth = () => {
    return (image_ref) ? Math.max(image_ref.naturalWidth, image_ref.offsetWidth) : 3000;
  }

  const scaled_down_scale = () => Math.min(1, (innerWidth() - 32.0) / imageWidth());
  const our_on_mobile = () => (innerWidth() <= MOBILE_MAX_WIDTH);

  const reset_scale = () => {
    if (our_on_mobile() && (scaled_down_scale() < 1 || scaled_down())) {
      set_scale(scaled_down_scale());
      set_scaled_down(true);
    } else {
      set_scale(1);
      set_scaled_down(false);
    }
  }

  const handleResize = () => {
    // backup
    let previous_innerWidth = innerWidth();
    let previous_on_mobile = our_on_mobile();

    // update
    let new_innerWidth = window.innerWidth;
    if (previous_innerWidth == new_innerWidth) return;
    set_innerWidth(new_innerWidth);

    // we only want to reset scale as a result of
    // resize if we are not on mobile, or if the on_mobile
    // status has changed (true -> false, false -> true)
    if (previous_on_mobile != our_on_mobile() || !previous_on_mobile) reset_scale();
  };

  createEffect(() => {
    // if (our_on_mobile()) set_scaled_down(true);
    window.requestAnimationFrame(() => { handleResize(); reset_scale(); });
    // setTimeout(() => { reset_scale(); }, 2000);
    window.addEventListener("resize", handleResize);
    onCleanup(() => { window.removeEventListener("resize", handleResize); });
  });

  return (
    <ScaleProvider scale={scale}>
      <div
        id={props.id}
        // style={{
        //   "padding-left": `${props.padding_left || 0}`,
        //   "padding-right": `${props.padding_right || 0}`,
        // }}
        class={twJoin("left-1/2 -translate-x-1/2 relative", props.class)}>
        <div 
          // style={{
          //   height: props.height,
          //   width: props.width,
          // }}
        >
          <LazyImage
            ref={image_ref}
            onClick={(_) => {
              // should we scale? (if it's the first click we should def. scale up)
              const should_be_scaled_down = our_on_mobile() && !scaled_down() && after_first_click();

              // do the scale
              set_scaled_down(should_be_scaled_down);
              set_scale(should_be_scaled_down ? scaled_down_scale() : 1);

              // bookkeeping other things
              set_after_first_click(true);
              set_recent_click(should_be_scaled_down ? 1 : 2);
              setTimeout(() => { set_recent_click(0); }, 100)
              set_innerWidth(window.innerWidth); // (refreshing for safety, since we have all these bugs)
            }}
            class={twJoin(
              "scrollbar-hidden sm:overflow-x-visible m-auto h-[inherit]",
              (our_on_mobile() && (scaled_down() || !after_first_click())) && "max-width-screen",
              (our_on_mobile() && (scaled_down() || !after_first_click())) && "bg-slate-500",  // dark gray means "max-width-screen"
              !(our_on_mobile() && (scaled_down() || !after_first_click())) && "bg-slate-200", // light gray means not "max-width-screen"

              // (our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 0 && "bg-slate-500",  // dark means "max-width-screen"
              // !(our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 0 && "bg-slate-200", // light means not "max-width-screen"
              // (our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 1 && "bg-reddish-dark", // dark red means "max-width-screen" & recent "scale down" click
              // !(our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 1 && "bg-reddish",     // light red means not "max-width-screen" & recent "scale down" click
              // (our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 2 && "bg-yellowish-dark", // dark yellow means "max-width-screen" & recent "scale up" click
              // !(our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 2 && "bg-yellowish",     // light yellow means not "max-width-screen" & recent "scale up" click

              after_first_click() && "transition-all",
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
