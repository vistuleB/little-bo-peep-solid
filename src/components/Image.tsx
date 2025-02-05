import { createContext, createEffect, createSignal, onCleanup, ParentProps, useContext } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import useOnMobile from "../hooks/useOnMobile";
import LazyImage from "./LazyImage";
import { useGlobalContext } from "~/store/StoreProvider";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    id?: string;
    width?: string;
    height?: string;
    padding_left?: number;
    padding_right?: number;
  };

const ScaleContext = createContext<(() => number)>();

const Image = (props: ImageProps) => {
  let { on_mobile } = useOnMobile();
  
  let [scale, set_scale] = createSignal(1.0);
  let [scaled_down, set_scaled_down] = createSignal(false);
  let [recent_click, set_recent_click] = createSignal(false);
  const [innerWidth, set_innerWidth] = createSignal(0);
  let {_, set_store } = useGlobalContext();

  let image_ref: HTMLImageElement | undefined;
  const naturalWidth = () => {
    let toReturn = (image_ref) ? image_ref.naturalWidth : 3000;
    // console.log("image_ref is: ", image_ref);
    return toReturn;
  }
  const scaledDownWidth = () => Math.min(1, (innerWidth() - 32.0) / naturalWidth());

  const fmt = (num: number) => { return (Math.round(num * 100) / 100).toFixed(2); }

  const handleResize = () => {
    set_innerWidth(window.innerWidth);
    if (on_mobile() && scaledDownWidth() < 1) {
      set_scale(scaledDownWidth());
      set_scaled_down(true);
    }
    else {
      if (scale() != 1) {
        set_store("title", `${fmt(innerWidth() - 32)}  ${fmt(naturalWidth())}`);
      }
      set_scale(1);
      set_scaled_down(false);
    }
  };

  createEffect(() => {
    setTimeout(() => { handleResize(); }, 10);
    window.addEventListener("resize", handleResize);
    onCleanup(() => { window.removeEventListener("resize", handleResize); });
  });


  return (
    <ScaleContext.Provider value={scale}>
      <div
        id={props.id}
        style={{
          "padding-left": `${props.padding_left || 0}`,
          "padding-right": `${props.padding_right || 0}`,
        }}
        class={twJoin(
          "relative left-1/2 -translate-x-1/2 col-start-2 scrollbar-hidden sm:overflow-x-visible transition-all w-max bg-slate-200",
          props.class
        )}>
        <div
          style={{
            height: props.height,
            width: props.width,
          }}
          class="left-1/2 -translate-x-1/2 relative w-max">
          <LazyImage
            ref={image_ref}
            onClick={(event) => {
              const newScaledDown = on_mobile() ? !scaled_down() : false;
              set_scaled_down(newScaledDown);
              set_scale(newScaledDown ? scaledDownWidth() : 1);
              set_recent_click(true);
              setTimeout(
                () => { set_recent_click(false); },
                100
              )
            }}
            class={twJoin(
              "scrollbar-hidden sm:overflow-x-visible m-auto transition-all h-[inherit]",
              on_mobile() && scaled_down() && "max-width-screen",
              recent_click() && "bg-reddish"
            )}
            style={props.style}
            src={props.src}
          />
        </div>
        {props.children}
      </div>
    </ScaleContext.Provider>
  );
};

export default Image; 

export const useScale = () => {
  const scale = useContext(ScaleContext);
  if (!scale) {
    console.log("wurning returning 520 scale; hm");
  }
  if (!scale) return () => 1;
  return scale;
};