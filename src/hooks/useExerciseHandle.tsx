import { createEffect } from "solid-js";
import { useExercisesContext } from "~/store/ExercisesStoreProvider";
import elementPosOnPage from "~/utils/elementPosOnPage";
import smoothScrollTo from "~/utils/smoothScrollTo";

const useExerciseHandle = () => {
  const { exercises_store, set_exercises_store } = useExercisesContext();

  const handleExerciseLink = (e: Event) => {
    e.preventDefault();
    const href = new URL((e.target as HTMLAnchorElement).href);
    const link_article = href.pathname.split("/").pop();
    const current_article = href.pathname.split("/").pop();
    const id = href.hash.slice(1);

    if (link_article !== current_article) {
      return;
    }

    // find exercise index with id
    let target_exo = document.getElementById(id);
    if (exercises_store.list_view) {
      smoothScrollTo(elementPosOnPage(target_exo) - 50, 100);
      return;
    }
    let exo_number = Number(target_exo?.innerText?.match(/\d+/)?.[0]);
    set_exercises_store("selected_exo", exo_number);
    smoothScrollTo(
      elementPosOnPage(document.getElementById("exercises-btns")),
      100,
    );
  };

  createEffect(() => {
    const links = document.querySelectorAll(".exercise-link");
    links.forEach((link) => {
      link.addEventListener("click", handleExerciseLink);
    });
  });
};

export default useExerciseHandle;
