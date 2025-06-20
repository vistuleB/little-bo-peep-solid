import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const VerticalChunk = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  const { store } = useGlobalContext();

  return (
    <p
      class={twJoin(
        "slice",
        props.indent && "indent-10",
        props.class,
        store.show_areas && "divide-horizontally",
      )}
      style={`width:${mainColumnWidth()}px;${props.style}`}>
      {props.children}
    </p>
  );
};

export default VerticalChunk;
