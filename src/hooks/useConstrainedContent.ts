import { Accessor, createSignal, onCleanup, onMount } from "solid-js";
import { MOBILE_TEXT_COLUMN_SIDE_INSET } from "~/constants";
import { useHeightChangeListenerContext } from "~/store/HeightChangeListenerProvider";

const HEIGHT_CHANGE_RAF_MAX_MS = 800;
const TRANSITION_CLEANUP_DELAY_MS = 600;

export const availableViewportWidth = (viewportWidth: number) =>
  Math.max(0, viewportWidth - MOBILE_TEXT_COLUMN_SIDE_INSET * 2);

const currentViewportWidth = () =>
  typeof window === "undefined" ? 0 : window.innerWidth;

type ConstrainedContentOptions = {
  naturalWidth: Accessor<number>;
  initiallyConstrained: boolean;
};

const useConstrainedContent = (options: ConstrainedContentOptions) => {
  let transitionTimeout: number | undefined;
  let heightChangeAnimationFrame: number | undefined;
  let heightChangeAnimationFrameExpiresAt = 0;
  const { set_height_change_listener_store } =
    useHeightChangeListenerContext() || {};
  const [afterFirstClick, setAfterFirstClick] = createSignal(false);
  const [constrained, setConstrained] = createSignal(
    options.initiallyConstrained,
  );
  const [transitionsEnabled, setTransitionsEnabled] = createSignal(false);
  const [viewportWidth, setViewportWidth] = createSignal(
    currentViewportWidth(),
  );

  const availableWidth = () => availableViewportWidth(viewportWidth());

  const targetScale = () => {
    const width = options.naturalWidth();
    if (!width || !constrained()) return 1;
    return Math.min(1, availableWidth() / width);
  };

  const notifyHeightChange = () => {
    set_height_change_listener_store?.(
      "re_calculate_height",
      (previous) => !previous,
    );
  };

  const notifyHeightChangeAcrossFrames = () => {
    notifyHeightChange();
    requestAnimationFrame(notifyHeightChange);
    window.setTimeout(notifyHeightChange, 50);
  };

  const stopHeightChangeAnimationFrameLoop = () => {
    if (heightChangeAnimationFrame === undefined) return;

    cancelAnimationFrame(heightChangeAnimationFrame);
    heightChangeAnimationFrame = undefined;
    heightChangeAnimationFrameExpiresAt = 0;
  };

  const startHeightChangeAnimationFrameLoop = () => {
    heightChangeAnimationFrameExpiresAt =
      performance.now() + HEIGHT_CHANGE_RAF_MAX_MS;

    if (heightChangeAnimationFrame !== undefined) return;

    const tick = () => {
      if (performance.now() > heightChangeAnimationFrameExpiresAt) {
        heightChangeAnimationFrame = undefined;
        heightChangeAnimationFrameExpiresAt = 0;
        notifyHeightChangeAcrossFrames();
        return;
      }

      notifyHeightChange();
      heightChangeAnimationFrame = requestAnimationFrame(tick);
    };

    heightChangeAnimationFrame = requestAnimationFrame(tick);
  };

  const disableTransitions = () => {
    clearTimeout(transitionTimeout);
    stopHeightChangeAnimationFrameLoop();
    setTransitionsEnabled(false);
  };

  const enableTransitionForToggle = () => {
    clearTimeout(transitionTimeout);
    setTransitionsEnabled(true);
    startHeightChangeAnimationFrameLoop();
    transitionTimeout = window.setTimeout(() => {
      setTransitionsEnabled(false);
      stopHeightChangeAnimationFrameLoop();
      notifyHeightChangeAcrossFrames();
    }, TRANSITION_CLEANUP_DELAY_MS);
  };

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (options.naturalWidth() > availableWidth()) {
      enableTransitionForToggle();
      requestAnimationFrame(() => {
        setConstrained((beforeToggle) => !beforeToggle);
        notifyHeightChangeAcrossFrames();
      });
    }
    setAfterFirstClick(true);
  };

  const handleTransitionEnd = (event?: TransitionEvent) => {
    if (
      event &&
      event.propertyName !== "width" &&
      event.propertyName !== "max-width"
    ) {
      return;
    }

    disableTransitions();
    notifyHeightChangeAcrossFrames();
  };

  const handleWindowResize = () => {
    disableTransitions();
    setViewportWidth(currentViewportWidth());
  };

  onMount(() => {
    setViewportWidth(currentViewportWidth());
    window.addEventListener("resize", handleWindowResize);
  });

  onCleanup(() => {
    disableTransitions();
    window.removeEventListener("resize", handleWindowResize);
  });

  return {
    afterFirstClick,
    availableWidth,
    constrained,
    handleClick,
    handleTransitionEnd,
    notifyHeightChangeAcrossFrames,
    targetScale,
    transitionsEnabled,
  };
};

export default useConstrainedContent;
