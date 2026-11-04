import { batch, createContext, ParentProps, useContext } from "solid-js";
import typesetMathJaxElements from "~/utils/typesetMathJax";

const SOLUTION_MATHJAX_CHUNK_SIZE = 1;

export type SolutionMathJaxEntry = {
  ref: HTMLElement;
  pending: () => boolean;
  setTypesetting: (typesetting: boolean) => void;
  complete: (updateScrollHeight?: boolean) => void;
  updateScrollHeight: () => void;
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

const nextFrame = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

const typesetSolutionMathJaxEntries = async (
  entries: SolutionMathJaxEntry[],
) => {
  let completedAny = false;

  for (let i = 0; i < entries.length; i += SOLUTION_MATHJAX_CHUNK_SIZE) {
    const chunk = entries
      .slice(i, i + SOLUTION_MATHJAX_CHUNK_SIZE)
      .filter((entry) => entry.ref.isConnected);

    if (chunk.length === 0) continue;

    const succeeded = await typesetMathJaxElements(
      chunk.map((entry) => entry.ref),
    );
    if (!succeeded) return false;

    batch(() => chunk.forEach((entry) => entry.complete(false)));
    completedAny = true;

    if (i + SOLUTION_MATHJAX_CHUNK_SIZE < entries.length) {
      await nextFrame();
    }
  }

  return completedAny;
};

export const prepareSolutionMathJax = (
  controller: SolutionMathJaxController,
) => {
  if (controller.preparation) return controller.preparation;

  const entries = [...controller.entries].filter(
    (entry) => entry.ref.isConnected && entry.pending(),
  );
  if (entries.length === 0) return Promise.resolve(false);

  entries.forEach((entry) => entry.setTypesetting(true));
  controller.preparation = typesetSolutionMathJaxEntries(entries)
    .then((succeeded) => {
      if (succeeded) {
        entries[0]?.updateScrollHeight();
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
