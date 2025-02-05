import { createSignal, createContext, useContext } from "solid-js";
import { ParentProps } from "solid-js";
import SharedProps from "../components/types/SharedProps";

const ScaleContext = createContext<() => number>();

type ScaleProps = {
  scale: () => number;
};

export function ScaleProvider(
    props: ParentProps & SharedProps & ScaleProps
) {
  return (
    <ScaleContext.Provider value={props.scale}>
      {props.children}
    </ScaleContext.Provider>
  );
}

export function useScale() {
  const scale = useContext(ScaleContext);
  if (!scale) return () => 1;
  return scale;
}
