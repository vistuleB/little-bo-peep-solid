import { Accessor, createContext, ParentProps, useContext } from "solid-js";

export type ScaleState = {
  scale: number;
  name: string;
  after_first_click: boolean;
};

type ScaleProviderProps = ParentProps<{
  scale: Accessor<ScaleState>;
}>;

const defaultScale: Accessor<ScaleState> = () => ({
  scale: 1,
  name: "no_name",
  after_first_click: false,
});

const ScaleContext = createContext<Accessor<ScaleState>>();

export const ScaleProvider = (props: ScaleProviderProps) => (
  <ScaleContext.Provider value={props.scale}>
    {props.children}
  </ScaleContext.Provider>
);

export const useScale = () => useContext(ScaleContext) || defaultScale;
