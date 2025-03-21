import { ParentProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

type LazyImageProp = {
  side_image?: boolean;
};

function LazyImage(
  props: ParentProps & JSX.ImgHTMLAttributes<HTMLImageElement> & LazyImageProp,
) {
  let { store } = useGlobalContext();

  return (
    <img
      ref={props.ref}
      onLoad={props.onLoad}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt || ""}
      class={twJoin(
        props.class,
        store.show_areas &&
          (props.side_image ? "divide-vertically" : "divide-horizontally"),
      )}
      style={props.style || ""}
      // loading="lazy"
    />
  );
}

export default LazyImage;
