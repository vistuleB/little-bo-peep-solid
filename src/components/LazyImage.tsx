import { createSignal, onCleanup, onMount, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { JSX } from "solid-js/jsx-runtime";
import { useGlobalContext } from "~/store/StoreProvider";
// import EventHandlerUnion from "";
// import EventHandler from "";

function LazyImage(
  props: ParentProps & JSX.ImgHTMLAttributes<HTMLImageElement>
  // props: LazyImageProps
) {
  const [isVisible, setIsVisible] = createSignal(false);
  let imgRef: HTMLImageElement | undefined;
  let {store} = useGlobalContext();

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (imgRef) observer.observe(imgRef);

    onCleanup(() => observer.disconnect());
  });

  return (
    <img
      ref={imgRef}
      // src={isVisible() ? props.src : ""}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt || ""}
      class={props.class || ""}
      style={props.style || ""}
      classList={{"bg-red-500": store.show_areas}}
      loading="lazy"
    />
  );
}

export default LazyImage;
