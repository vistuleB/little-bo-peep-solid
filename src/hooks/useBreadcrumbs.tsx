import { onCleanup, onMount } from "solid-js";

const useBreadcrumbs = () => {
  onMount(async () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let section_idx = Number(entry.target.getAttribute("id")) - 1;
          document.querySelectorAll(".breadcrumb")?.forEach((el) => {
            el.classList.remove("highlighted");
          });

          document
            .getElementById("breadcrumb-" + section_idx)
            ?.classList.add("highlighted");
        }
      },
      {
        rootMargin: "-600px",
      },
    );

    await setTimeout(() => {}, 2000);
    document.getElementById("breadcrumb-0")?.classList.add("highlighted");
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
    onCleanup(() => observer.disconnect());
  });
};

export default useBreadcrumbs;
