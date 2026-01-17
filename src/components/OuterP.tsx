import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";

const OuterP = (props: ParentProps & SharedProps) => {
  const { store } = useGlobalContext();

  return (
    <p
      class={twJoin(
        "text-column",
        props.class,
        store.show_areas && "left-right-background-divide"
      )}
      style={`${props.style}`}
    >
      {props.children}
    </p>
  );
};

export default OuterP;
