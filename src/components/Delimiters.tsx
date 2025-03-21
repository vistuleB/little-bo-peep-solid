import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";
import { DESKTOP_COLUMN_WIDTH, MOBILE_MAX_WIDTH } from "~/constants";

export const CentralDisplay = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  let { store } = useGlobalContext();
  return (
    <div
      class={twJoin(
        props.class,
        "slice text-center block",
        store.show_areas && "bg-[#ebe3a0b0]",
      )}
      style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;${props.style}`}>
      <span class="block pl-[2em] pr-[2em]" style={props.style}>
        {props.children}
      </span>
    </div>
  );
};

export const CentralDisplayItalic = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  let { store } = useGlobalContext();
  return (
    <div
      class={twJoin(
        props.class,
        "slice text-center block pl-[2em] pr-[2em]",
        store.show_areas && "bg-[#ebe3a0b0]",
      )}
      style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;`}>
      <i class="block pl-[2em] pr-[2em]" style={props.style}>
        {props.children}
      </i>
    </div>
  );
};
