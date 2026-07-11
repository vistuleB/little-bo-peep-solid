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
  const localUrl = () => props.local_url || "";

  const ImageTag = (
    <img
      ref={props.ref}
      onLoad={props.onLoad}
      onClick={props.onClick}
      onTransitionEnd={props.onTransitionEnd}
      src={props.src}
      width={props.width}
      height={props.height}
      loading={props.loading}
      alt={props.alt || ""}
      class={twJoin(
        "block",
        props.class,
        store.show_areas &&
          (props.side_image
            ? "top-bottom-background-divide"
            : "left-right-background-divide"),
        props.local_url && "pointer-events-auto",
      )}
      style={props.style || ""}
    />
  );

  return (
    <span class="relative inline-block">
      <Show when={props.local_url} fallback={ImageTag}>
        {ImageTag}
        <span class="t-3003 t-3003-i">
          <span class="t-3003-i-url">
            <span class="t-3003-i-path">{props.local_url}</span>
            {"\u00a0\u00a0"}
            <span class="t-3003-i-copy" data-copy-src={localUrl()}>
              ⧉
            </span>
          </span>
        </span>
      </Show>
    </span>
  );
}

export default ImageOrSideImage;
