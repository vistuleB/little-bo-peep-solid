import { ParentProps, Show } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

type ImageOrSideImageProp = {
  side_image?: boolean;
  local_url?: string;
};

function ImageOrSideImage(
  props: ParentProps &
    JSX.ImgHTMLAttributes<HTMLImageElement> &
    ImageOrSideImageProp,
) {
  let { store } = useGlobalContext();

  const ImageTag = (
    <img
      ref={props.ref}
      onLoad={props.onLoad}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt || ""}
      class={twJoin(
        props.class,
        store.show_areas &&
          (props.side_image
            ? "top-bottom-background-divide"
            : "left-right-background-divide"),
        props.local_url && "pointer-events-auto",
      )}
      style={props.style || ""}
      // style={(props.style || "") + (props.local_url ? " z-index: 10;" : "")}
    />
  );

  return (
    <Show when={props.local_url} fallback={ImageTag}>
      {ImageTag}
      <span class="t-3003 t-3003-i">
        <span class="t-3003-i-url">{props.local_url}</span>
      </span>
    </Show>
  );
}

export default ImageOrSideImage;
