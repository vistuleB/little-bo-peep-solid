import { onCleanup, onMount } from "solid-js";
import useScrollToInChapter from "./useScrollToInChapter";
import { useGlobalContext } from "~/store/StoreProvider";

// Companion to ThisPageLink. Following an in-chapter link pushes a new history
// entry and stamps the outgoing entry with `llpScroll` (the reader's scroll
// position at the moment they jumped). When the user then hits the browser
// back/forward buttons, the route does NOT remount (only the query changes), so
// the normal mount-time scroll restoration (useCheckedSavedScroll) never fires.
// This hook fills that gap: on every popstate we either restore the stamped
// reading position or, going forward to an anchor, re-run the in-chapter jump.
const usePageScrollHistory = () => {
  const { store } = useGlobalContext();
  const { scrollToInChapter } = useScrollToInChapter();

  onMount(() => {
    const onPopState = () => {
      const savedScroll = window.history.state?.llpScroll;

      // Back to a spot we previously left from: restore it exactly. The page is
      // already rendered (same route), so we can scroll immediately. Mirror the
      // horizontal centering used elsewhere for saved-scroll restoration.
      if (typeof savedScroll === "number") {
        window.scrollTo(
          (document.body.scrollWidth - window.innerWidth) / 2,
          savedScroll,
        );
        return;
      }

      // Forward to an anchor target (no stamped position): re-run the jump.
      const url = new URL(window.location.href);
      const id = url.searchParams.get("id") || url.hash.slice(1);
      if (id) scrollToInChapter(id, store.animations ? 200 : 0);
    };

    window.addEventListener("popstate", onPopState);
    onCleanup(() => window.removeEventListener("popstate", onPopState));
  });
};

export default usePageScrollHistory;
