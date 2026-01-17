import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

export const CentralDisplay = (
  props: ParentProps & SharedProps & { indent?: boolean }
) => {
  let { store } = useGlobalContext();
  return (
    <div
      class={twJoin(
        props.class,
        "text-column text-center block  pl-[2em] pr-[2em]",
        store.show_areas && "bg-[#ebe3a0b0]"
      )}
      style={`${props.style ?? ""}`}
    >
      {props.children}
    </div>
  );
};

export const CentralDisplayItalic = (
  props: ParentProps & SharedProps & { indent?: boolean }
) => {
  let { store } = useGlobalContext();
  return (
    <div
      class={twJoin(
        props.class,
        "text-column text-center block pl-[2em] pr-[2em]",
        store.show_areas && "bg-[#ebe3a0b0]"
      )}
      style={`${props.style ?? ""}`}
    >
      <em>{props.children}</em>
    </div>
  );
};
