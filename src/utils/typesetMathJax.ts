type MathJaxWindow = Window & {
  MathJax?: {
    typesetPromise?: (elements: HTMLElement[]) => Promise<unknown>;
  };
};

const typesetMathJax = async (
  elements: Array<HTMLElement | null | undefined>,
) => {
  const mathJax = (window as MathJaxWindow).MathJax;
  const validElements = elements.filter(
    (element): element is HTMLElement =>
      element !== null && element !== undefined,
  );

  if (!mathJax?.typesetPromise || validElements.length === 0) return false;

  try {
    await mathJax.typesetPromise(validElements);
    return true;
  } catch (error) {
    console.error("MathJax typesetting failed", error);
    return false;
  }
};

export default typesetMathJax;
