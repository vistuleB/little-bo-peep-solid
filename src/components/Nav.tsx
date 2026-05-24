import { createEffect, createSignal, onMount } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  DESKTOP_COLUMN_WIDTH,
  MOBILE_MAX_WIDTH,
  TEXT_X_PADDING,
} from "~/constants";
import { twJoin } from "tailwind-merge";
import useScrollX from "~/hooks/useScrollX";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import HeaderBlob from "./HeaderBlob";
import containerWidth from "~/hooks/useContainerWidth";

const Nav = () => {
  let { store } = useGlobalContext();
  useScrollX();
  return (
    <>
      <div
        class={twJoin(
          "select-none w-full z-[60]",
          store.innerWidth < MOBILE_MAX_WIDTH && "!fixed",
          store.innerWidth >= MOBILE_MAX_WIDTH && "absolute",
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div class="relative select-none border-[var(--nav-border)] border-b bg-bg z-40 w-full h-14 left-0">
          <Title />
        </div>
      </div>
      <div class="h-14"></div>
    </>
  );
};

const Title = () => {
  const { getPage } = usePrevNextPage();
  const { store } = useGlobalContext();
  let headerBlob: HTMLAnchorElement | undefined;
  const [imageLoaded, setImageLoaded] = createSignal(false);

  onMount(() => {
    const img = headerBlob?.querySelector("img");
    if (!img) {
      setImageLoaded(true);
      return;
    }
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.addEventListener("load", () => setImageLoaded(true), { once: true });
    }
  });

  // Effect 1: Fixed tracking to recalculate position smoothly on resize
  createEffect(() => {
    if (!headerBlob || !imageLoaded()) return;

    // 1. Explicitly invoke and pull reactive dependencies into the effect scope
    const contWidth = containerWidth(); 
    const innerWidth = store.innerWidth; 

    // 2. Compute directly using the tracked variables instead of an untracked inner helper function
    const leftPos = innerWidth > MOBILE_MAX_WIDTH
      ? (contWidth - (DESKTOP_COLUMN_WIDTH - TEXT_X_PADDING * 2)) / 2
      : TEXT_X_PADDING;

    headerBlob.style.left = `${leftPos}px`;
  });

  // Effect 2: Kept exactly as your working version to preserve flicker elimination
  createEffect(() => {
    if (!headerBlob || !imageLoaded()) return;
    const blob = headerBlob;

    setTimeout(() => {
      const headerBlobHeight = blob.offsetHeight;
      const scale = 56 / headerBlobHeight;
      blob.style.transform = `scale(${scale})`;
      blob.style.opacity = "1";
    }, 20);
  });

  return (
    <a
      class="mr-auto absolute origin-top-left opacity-0"
      ref={headerBlob}
      href="/"
      onClick={() => getPage("/")}>
      <HeaderBlob />
    </a>
  );
};

export default Nav;
