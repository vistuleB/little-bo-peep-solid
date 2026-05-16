import { A } from "@solidjs/router";
import { onMount, onCleanup } from "solid-js";
import useNoScrollRestoration from "~/hooks/useNoScrollRestoration";
import mainColumnWidth from "~/hooks/useMainColumnWidth";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import { useGlobalContext } from "~/store/StoreProvider";

export default function NotFound() {
  useNoScrollRestoration();
  const { getPage } = usePrevNextPage();
  const { store, set_store } = useGlobalContext();

  const handleResize = () => {
    let oldInnerWidth = store.innerWidth;
    let oldScrollWidth = store.scrollWidth;

    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);

    let _dummy =
      store.scrollY +
      store.innerHeight +
      store.scrollHeight +
      store.scrollWidth;

    if (
      oldInnerWidth != store.innerWidth ||
      oldScrollWidth != store.scrollWidth
    ) {
      window.scroll({
        left: (store.scrollWidth - store.innerWidth) / 2,
        behavior: "instant",
      });
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "0") {
      e.preventDefault();
      getPage("/");
    }
    if (e.key === "1") {
      e.preventDefault();
      getPage("/article/chapter1");
    }
    if (e.key === "2") {
      e.preventDefault();
      getPage("/article/chapter2");
    }
    if (e.key === "3") {
      e.preventDefault();
      getPage("/article/chapter3");
    }
    if (e.key === "4") {
      e.preventDefault();
      getPage("/article/chapter4");
    }
    if (e.key === "5") {
      e.preventDefault();
      getPage("/article/chapter5");
    }
    if (e.key === "9") {
      e.preventDefault();
      getPage("/article/bootcamp1");
    }
    if (e.key === "8") {
      e.preventDefault();
      getPage("/article/bootcamp2");
    }
  };

  onMount(() => {
    set_store("pageNecessaryMargin", 0);
    set_store("maxElementWidth", 0);

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        src="/non-build-img/404.png"
        alt="404 - Page not found"
        style={`max-width:${mainColumnWidth() * 0.7}px;max-height:65vh;`}
      />
    </div>
  );
}
