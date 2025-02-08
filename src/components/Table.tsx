import { ParentProps, createSignal, createEffect, onCleanup, onMount } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import useOnMobile from "../hooks/useOnMobile";

const Table = (props: ParentProps & SharedProps) => {
  const [innerWidth, set_innerWidth] = createSignal(window.innerWidth);
  let [scale, set_scale] = createSignal(1.0);
  let [scaled_down, set_scaled_down] = createSignal(false);
  let [recent_click, set_recent_click] = createSignal(false);
  let [after_first_load, set_after_first_load] = createSignal(false);
  let table_ref: HTMLTableElement | undefined;
  let { on_mobile } = useOnMobile();

  const tableWidth = () => {
    let toReturn = (table_ref) ? table_ref.offsetWidth : 3000;
    return toReturn;
  }

  const tableHeight = () => {
    let toReturn = (table_ref) ? table_ref.offsetHeight : 3000;
    return toReturn;
  }

  const scaledDownWidth = () => Math.min(1, (innerWidth() - 64.0) / tableWidth());

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
    setTimeout(() => {
      set_after_first_load(true); 
    }, 2000);
  });

  const handleResize = () => {
    set_innerWidth(window.innerWidth);
    if (on_mobile() && scaledDownWidth() < 1) {
      set_scale(scaledDownWidth());
      set_scaled_down(true);
    }
    // else if (!on_mobile()) {
    //   set_scale(1);
    //   set_scaled_down(false);
    // }
  };

  return (
    <div style={props.style}>
      <table 
        class={twJoin(
          props.class,
          "scrollbar-hidden sm:overflow-x-visible m-auto h-[inherit]",
          recent_click() && "bg-green",
          after_first_load() && "transition-all",
        )}
        ref={table_ref}
        onClick={(_) => {
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
        style={`transform:scale(${scale()});margin-top:${tableHeight() * (scale() - 1)/2}px;margin-bottom:${tableHeight() * (scale() - 1)/2}px;`}
      >
        {props.children}
      </table>
    </div>
  );
};

export default Table;
