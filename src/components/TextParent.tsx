import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";

const TextParent = (props: ParentProps & SharedProps) => {
  const { store } = useGlobalContext();

  return (
    <div
      class={twJoin(
        "text-column",
        props.class,
        store.show_areas && "left-right-background-divide"
      )}
      style={`${props.style}`}
    >
      {props.children}
    </div>
  );
};

export default TextParent;
