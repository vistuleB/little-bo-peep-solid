let savedDocumentOverflowX: string | undefined;
let savedBodyOverflowX: string | undefined;

export const lockHorizontalDocumentScroll = () => {
  if (savedDocumentOverflowX !== undefined) return;

  savedDocumentOverflowX = document.documentElement.style.overflowX;
  savedBodyOverflowX = document.body.style.overflowX;
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";
};

export const unlockHorizontalDocumentScroll = () => {
  if (savedDocumentOverflowX === undefined) return;

  document.documentElement.style.overflowX = savedDocumentOverflowX;
  document.body.style.overflowX = savedBodyOverflowX || "";
  savedDocumentOverflowX = undefined;
  savedBodyOverflowX = undefined;
};
