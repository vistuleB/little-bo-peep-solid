import { useSearchParams } from "@solidjs/router";
import { createEffect, onCleanup, onMount } from "solid-js";
import { useExercisesContext } from "~/store/ExercisesStoreProvider";
import { useGlobalContext } from "~/store/StoreProvider";
import elementPosOnPage from "~/utils/elementPosOnPage";
import smoothScrollTo from "~/utils/smoothScrollTo";

const useExerciseHandle = () => {
  const { exercises_store, set_exercises_store } = useExercisesContext();
  const { store } = useGlobalContext();
  const [searchParams, _] = useSearchParams();

  onMount(() => {
    if (searchParams && searchParams.id) {
      setTimeout(() => {
        goToExo(searchParams.id as string);
      }, 500);
    }
  });

  const getHeight = (el: HTMLElement | null) => {
    return el?.getBoundingClientRect().height || 0;
  };

  const goToExo = (id: string) => {
    // find exercise index with id
    let target_exo = document.getElementById(id);
    if (exercises_store.list_view) {
      smoothScrollTo(
        elementPosOnPage(target_exo) -
          store.innerHeight / 2 +
          getHeight(target_exo) / 2,
        100,
      );
      return;
    }
    let exo_number = Number(target_exo?.innerText?.match(/\d+/)?.[0]);
    set_exercises_store("selected_exo", exo_number);
    if (target_exo && target_exo.getBoundingClientRect().top < 0) {
      smoothScrollTo(
        elementPosOnPage(document.getElementById("exercises-btns")),
        100,
      );
    }
  };

  const handleExerciseLink = (e: Event) => {
    e.preventDefault();
    const href = new URL((e.target as HTMLAnchorElement).href);
    const link_article = href.pathname.split("/").pop();
    const current_article = location.pathname.split("/").pop();
    const id = href.hash.slice(1);

    if (link_article !== current_article) {
      let custom_anchor = document.createElement("a");
      href.hash = "";
      href.searchParams.set("id", id);
      custom_anchor.href = href.href;
      custom_anchor.click();
      return;
    }
    goToExo(id);
  };

  createEffect(() => {
    const links = document.querySelectorAll(".exercise-link");
    links.forEach((link) => {
      link.addEventListener("click", handleExerciseLink);
    });

    onCleanup(() => {
      links.forEach((link) => {
        link.removeEventListener("click", handleExerciseLink);
      });
    });
  });
};

export default useExerciseHandle;
