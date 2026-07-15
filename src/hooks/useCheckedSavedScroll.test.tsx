import { createStore } from "solid-js/store";
import { render } from "solid-js/web";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const testContext = vi.hoisted(() => ({
  value: undefined as
    | {
        store: Record<string, unknown>;
        set_store: (...args: unknown[]) => void;
      }
    | undefined,
}));

vi.mock("~/store/StoreProvider", () => ({
  useGlobalContext: () => testContext.value,
}));

vi.mock("@solidjs/router", () => ({
  useLocation: () => ({ pathname: "/article/chapter3", hash: "" }),
  useSearchParams: () => [{}, vi.fn()],
}));

vi.mock("~/utils/routeLoading", () => ({
  finishRouteLoad: vi.fn(),
  markDestinationRouteMounted: vi.fn(),
}));

vi.mock("~/hooks/useScrollToInChapter", () => ({
  default: () => ({ scrollToInChapter: vi.fn() }),
}));

vi.mock("~/utils/horizontalMotionDiagnostic", () => ({
  horizontalDiagnosticExplicitCenter: vi.fn(),
}));

import useCheckedSavedScroll from "./useCheckedSavedScroll";

describe("useCheckedSavedScroll", () => {
  let dispose: (() => void) | undefined;

  beforeEach(() => {
    vi.useFakeTimers();
    localStorage.clear();

    const [store, setStore] = createStore({
      pending_route_started_at: 1,
      pending_navigation_kind: "standard" as "standard" | "swipe",
      pending_arrival_direction: null,
      arrival_route_path: "",
      pending_route_target: "top" as "top" | "saved-scroll" | "hash",
      horizontal_arrival_phase: "idle",
      suppress_scroll_memory: false,
      route_scroll_in_progress: false,
      saved_scroll_finished: false,
      rest_mounting_finished_for_route_started_at: 1,
    });
    testContext.value = {
      store,
      set_store: setStore as (...args: unknown[]) => void,
    };

    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) =>
      window.setTimeout(() => callback(performance.now()), 16),
    );
    vi.stubGlobal("cancelAnimationFrame", (id: number) =>
      window.clearTimeout(id),
    );
    vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);
  });

  afterEach(() => {
    dispose?.();
    dispose = undefined;
    testContext.value = undefined;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.useRealTimers();
    document.body.replaceChildren();
  });

  it("does not restore the outgoing route again when swipe identity changes", async () => {
    const host = document.createElement("div");
    document.body.appendChild(host);

    const Harness = () => {
      useCheckedSavedScroll();
      return null;
    };
    dispose = render(() => <Harness />, host);

    await vi.advanceTimersByTimeAsync(200);
    expect(window.scrollTo).toHaveBeenCalledTimes(1);

    testContext.value?.set_store("pending_navigation_kind", "swipe");
    await vi.advanceTimersByTimeAsync(200);

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
