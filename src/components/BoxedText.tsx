import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const BoxedText = (props: ParentProps & SharedProps) => {
  const { store } = useGlobalContext();

  return (
    <div
      class={twJoin(
        "text-column",
        "border",
        "border-red-400",
        "py-2 px-2",
        "my-4",
        props.class,
        store.show_areas && "left-right-background-divide",
      )}
      style={`${props.style}`}
    >
      {props.children}
    </div>
  );
};

export default BoxedText;
