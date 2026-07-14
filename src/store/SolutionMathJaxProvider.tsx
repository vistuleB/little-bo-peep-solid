import { batch, createContext, ParentProps, useContext } from "solid-js";
import typesetMathJaxElements from "~/utils/typesetMathJax";

export type SolutionMathJaxEntry = {
  ref: HTMLElement;
  pending: () => boolean;
  setTypesetting: (typesetting: boolean) => void;
  complete: () => void;
};

export type SolutionMathJaxController = {
  entries: Set<SolutionMathJaxEntry>;
  preparation?: Promise<boolean>;
};

const SolutionMathJaxContext = createContext<SolutionMathJaxController>();

export const createSolutionMathJaxController =
  (): SolutionMathJaxController => ({
    entries: new Set(),
  });

export const prepareSolutionMathJax = (
  controller: SolutionMathJaxController,
) => {
  if (controller.preparation) return controller.preparation;

  const entries = [...controller.entries].filter(
    (entry) => entry.ref.isConnected && entry.pending(),
  );
  if (entries.length === 0) return Promise.resolve(false);

  entries.forEach((entry) => entry.setTypesetting(true));
  controller.preparation = typesetMathJaxElements(
    entries.map((entry) => entry.ref),
  )
    .then((succeeded) => {
      if (succeeded) {
        batch(() => entries.forEach((entry) => entry.complete()));
      }
      return succeeded;
    })
    .finally(() => {
      entries.forEach((entry) => entry.setTypesetting(false));
      controller.preparation = undefined;
    });

  return controller.preparation;
};

export const SolutionMathJaxProvider = (
  props: ParentProps<{ controller: SolutionMathJaxController }>,
) => (
  <SolutionMathJaxContext.Provider value={props.controller}>
    {props.children}
  </SolutionMathJaxContext.Provider>
);

export const useSolutionMathJax = () => useContext(SolutionMathJaxContext);
