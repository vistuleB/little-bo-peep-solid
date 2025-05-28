import { createEffect, createSignal, onMount } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import elementPosOnPage from "~/utils/elementPosOnPage";

const useBreadcrumbs = () => {
  const { store } = useGlobalContext();
  const [sectionsPositions, setSectionsPositions] = createSignal<number[]>([]);
  const highlightedSection = () => {
    const indexOfNextSection = sectionsPositions().findIndex(
      (pos) => pos >= store.scrollY + 50,
    );

    return Math.max(
      0,
      indexOfNextSection === -1
        ? sectionsPositions().length - 1
        : indexOfNextSection - 1,
    );
  };

  onMount(async () => {
    await setTimeout(() => {}, 5000);
    const sections = document.querySelectorAll(".section");
    setSectionsPositions(
      Array.from(sections).map((section) =>
        elementPosOnPage(section as HTMLElement),
      ),
    );
  });

  createEffect(() => {
    document.querySelectorAll(".breadcrumb")?.forEach((el) => {
      el.classList.remove("highlighted");
    });
    document
      .getElementById("breadcrumb-" + highlightedSection())
      ?.classList.add("highlighted");
  });
};

export default useBreadcrumbs;
