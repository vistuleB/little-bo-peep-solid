import { useGlobalContext } from "~/store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const TOCItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  const { store } = useGlobalContext();

  return (
    <div
      onclick={() => {
        window.location.href = `/article/${props.href}`;
      }}
      class="cursor-pointer relative m-auto leading-[2.4rem] text-3xl"
      style={`width:${mainColumnWidth() - 32}px;direction:rtl;`}
    >
      <div class="toc-item-lead-wrapper">
        <div>
          <span>{props.article_type}</span>
          <span class="toc-item-lead-dots">
            ..........................................................................................................................................................................
          </span>
        </div>
      </div>
      <div
        class="toc-item-title-outline"
        style="--toc-label-stroke-color: white"
        aria-hidden="true"
      >
        {props.label}
      </div>
      <div class="toc-item-title">{props.label}</div>
    </div>
  );
};

export default TOCItem;
