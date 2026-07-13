import { createContext, ParentProps, useContext } from "solid-js";

const LazyImageContext = createContext(false);

export const LazyImageProvider = (props: ParentProps) => (
  <LazyImageContext.Provider value={true}>
    {props.children}
  </LazyImageContext.Provider>
);

export const useLazyImages = () => useContext(LazyImageContext);
