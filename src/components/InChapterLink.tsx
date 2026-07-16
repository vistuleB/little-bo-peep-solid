import { onMount, ParentProps } from "solid-js";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";
import { twJoin } from "tailwind-merge";

const IN_CHAPTER_SCROLL_STATE = "__lbpInChapterScroll";
const IN_CHAPTER_TARGET_STATE = "__lbpInChapterTarget";
const HISTORY_WAIT_FRAME_LIMIT = 60;

let popstateListenerInstalled = false;
let scrollToTargetFromHistory:
  | ((target: string, remainingFrames?: number) => void)
  | undefined;

const historyStateObject = () =>
  window.history.state &&
  typeof window.history.state === "object" &&
  !Array.isArray(window.history.state)
    ? window.history.state
    : {};

const canRestoreScrollY = (y: number) => {
  const scrollHeight =
    document.scrollingElement?.scrollHeight || document.body.scrollHeight;
  return y <= Math.max(0, scrollHeight - window.innerHeight);
};

const restoreScrollFromState = (
  state: unknown,
  remainingFrames = HISTORY_WAIT_FRAME_LIMIT,
) => {
  if (!state || typeof state !== "object") return;
  const scroll = (state as Record<string, unknown>)[IN_CHAPTER_SCROLL_STATE];
  if (!scroll || typeof scroll !== "object") return;

  const { y } = scroll as { x?: unknown; y?: unknown };
  if (typeof y !== "number") return;

  if (!canRestoreScrollY(y) && remainingFrames > 0) {
    requestAnimationFrame(() => {
      restoreScrollFromState(state, remainingFrames - 1);
    });
    return;
  }

  requestAnimationFrame(() => {
    window.scrollTo(0, y);
  });
};

const installPopstateListener = (
  scrollToInChapter: (targetId: string, scrollDuration?: number) => void,
) => {
  scrollToTargetFromHistory = (
    target,
    remainingFrames = HISTORY_WAIT_FRAME_LIMIT,
  ) => {
    if (document.getElementById(target) || remainingFrames <= 0) {
      scrollToInChapter(target, 0);
      return;
    }

    requestAnimationFrame(() => {
      scrollToTargetFromHistory?.(target, remainingFrames - 1);
    });
  };

  if (popstateListenerInstalled) return;
  popstateListenerInstalled = true;

  window.addEventListener("popstate", (event) => {
    if (!event.state || typeof event.state !== "object") return;
    const state = event.state as Record<string, unknown>;
    const target = state[IN_CHAPTER_TARGET_STATE];

    if (typeof target === "string" && target) {
      requestAnimationFrame(() => {
        scrollToTargetFromHistory?.(target);
      });
      return;
    }

    restoreScrollFromState(event.state);
  });
};

const InChapterLink = (
  props: ParentProps & { href: string; class?: string },
) => {
  const { scrollToInChapter } = useScrollToInChapter();

  onMount(() => {
    installPopstateListener(scrollToInChapter);
  });

  const handleClick = (e: Event) => {
    e.preventDefault();

    const url = new URL((e.currentTarget as HTMLAnchorElement).href);
    let id = url.searchParams.get("id") || url.hash.slice(1) || "";
    const currentState = historyStateObject();
    window.history.replaceState(
      {
        ...currentState,
        [IN_CHAPTER_SCROLL_STATE]: {
          x: 0,
          y: window.scrollY,
        },
      },
      "",
      window.location.href,
    );

    const nextState = {
      ...currentState,
      [IN_CHAPTER_TARGET_STATE]: id,
    };
    delete nextState[IN_CHAPTER_SCROLL_STATE];
    window.history.pushState(nextState, "", url);

    scrollToInChapter(id, 200);
  };

  return (
    <a
      href={props.href}
      class={twJoin(props.class, "in-chapter-link")}
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
};

export default InChapterLink;
