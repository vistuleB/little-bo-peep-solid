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
        props.class,
        "text-column",
        "border",
        "border-red-400",
        "px-4",
        "py-3",
        "mt-6",
        "mb-5",
        store.show_areas && "left-right-background-divide",
      )}
      style={`${props.style ?? ""}`}
    >
      {props.children}
    </div>
  );
};

export default BoxedText;
