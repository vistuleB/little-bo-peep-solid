import { createSignal, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import useOnMobile from "../hooks/useOnMobile";
import LazyImage from "./LazyImage";
import { ScaleProvider } from "~/store/ScaleProvider";

const GenericSideImageContainer = (props: ParentProps & SharedProps) => {
  let [scale, set_scale] = createSignal(1.0);
  return (
    <ScaleProvider scale={scale}>
      <div class={twJoin("relative w-max bg-slate-200", props.class)}>
        {props.children}
      </div>
    </ScaleProvider>
  );
};

export default GenericSideImageContainer; 
