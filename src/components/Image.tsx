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
  let { on_mobile } = useOnMobile();
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
  const scaledDownWidth = () => Math.min(1, (innerWidth() - 32.0) / naturalWidth());

  const handleResize = () => {
    set_innerWidth(window.innerWidth);
    if (on_mobile() && scaledDownWidth() < 1) {
      set_scale(scaledDownWidth());
      set_scaled_down(true);
    }
    // only putting this test if !on_mobile()
    // because the '.naturalWidth' property
    // is not reliably working on iPhone 12
    else if (!on_mobile()) {
      set_scale(1);
      set_scaled_down(false);
    }
  };
  
  createEffect(() => {
    window.addEventListener("resize", handleResize);
    onCleanup(() => { window.removeEventListener("resize", handleResize); });
  });
  
  onMount(() => {
    window.requestAnimationFrame(() => { handleResize(); });
    if (on_mobile()) {
      set_scaled_down(true);
      set_scale(scaledDownWidth());
    }
    setTimeout(() => { set_after_first_load(true); }, 2000);
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
            onClick={(event) => {
              const newScaledDown = on_mobile() ? !scaled_down() : false;
              set_scaled_down(newScaledDown);
              set_after_first_load(true);
              set_scale(newScaledDown ? scaledDownWidth() : 1);
              set_recent_click(true);
              setTimeout(
                () => { set_recent_click(false); },
                100
              )
            }}
            class={twJoin(
              "scrollbar-hidden sm:overflow-x-visible m-auto h-[inherit]",
              on_mobile() && scaled_down() && "max-width-screen",
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
