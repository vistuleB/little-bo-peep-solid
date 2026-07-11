type MathJaxWindow = Window & {
  MathJax?: {
    typesetPromise?: (elements: HTMLElement[]) => Promise<unknown>;
  };
};

let typesetQueue: Promise<void> = Promise.resolve();

const typesetMathJax = async (
  elements: Array<HTMLElement | null | undefined>,
) => {
  const requestedElements = elements.filter(
    (element): element is HTMLElement =>
      element !== null && element !== undefined,
  );

  if (requestedElements.length === 0) return false;

  const run = async () => {
    const mathJax = (window as MathJaxWindow).MathJax;
    const connectedElements = requestedElements.filter(
      (element) => element.isConnected,
    );

    if (!mathJax?.typesetPromise || connectedElements.length === 0) {
      return false;
    }

    try {
      await mathJax.typesetPromise(connectedElements);
      return true;
    } catch (error) {
      console.error("MathJax typesetting failed", error);
      return false;
    }
  };

  const result = typesetQueue.then(run, run);
  typesetQueue = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
};

export default typesetMathJax;
