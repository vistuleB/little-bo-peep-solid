type MathJaxWindow = Window & {
  __LBP_MATHJAX_SETUP_LOADED__?: boolean;
  __LBP_MATHJAX_READY__?: boolean;
  MathJax?: {
    startup?: {
      promise?: Promise<unknown>;
    };
    typesetPromise?: (elements: HTMLElement[]) => Promise<unknown>;
  };
};

const MATHJAX_READY_TIMEOUT_MS = 10000;
const MATHJAX_READY_POLL_MS = 50;

let typesetQueue: Promise<void> = Promise.resolve();

const wait = (ms: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, ms));

const waitForMathJax = async () => {
  const startedAt = Date.now();
  const mathJaxWindow = window as MathJaxWindow;

  while (Date.now() - startedAt < MATHJAX_READY_TIMEOUT_MS) {
    const mathJax = mathJaxWindow.MathJax;
    if (mathJaxWindow.__LBP_MATHJAX_SETUP_LOADED__ && mathJax?.typesetPromise) {
      if (mathJax.startup?.promise && !mathJaxWindow.__LBP_MATHJAX_READY__) {
        try {
          await mathJax.startup.promise;
        } catch (error) {
          console.error("MathJax startup failed", error);
          return mathJax;
        }
      }
      return mathJax;
    }
    await wait(MATHJAX_READY_POLL_MS);
  }

  return mathJaxWindow.MathJax;
};

const typesetMathJax = async (
  elements: Array<HTMLElement | null | undefined>,
) => {
  const requestedElements = elements.filter(
    (element): element is HTMLElement =>
      element !== null && element !== undefined,
  );

  if (requestedElements.length === 0) return false;

  const run = async () => {
    const mathJax = await waitForMathJax();
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
