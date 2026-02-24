import { A } from "@solidjs/router";
import { onMount, onCleanup } from "solid-js";
import useNoScrollRestoration from "~/hooks/useNoScrollRestoration";
import mainColumnWidth from "~/hooks/useMainColumnWidth";
import usePrevNextPage from "~/hooks/usePrevNextPage";

export default function NotFound() {
  useNoScrollRestoration();
  const { getPage } = usePrevNextPage();

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
    window.addEventListener("keydown", handleKeydown);

    onCleanup(() => {
      window.removeEventListener("keydown", handleKeydown);
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
