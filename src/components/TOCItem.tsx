import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

const TOCItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  const { store } = useGlobalContext();

  const our_width = () =>
    store.innerWidth > MOBILE_MAX_WIDTH
      ? DESKTOP_COLUMN_WIDTH
      : store.innerWidth;

  return (
    <div
      onclick={() => {
        window.location.href = `/article/${props.href}`;
      }}
      class="cursor-pointer relative m-auto leading-[2.4rem] text-3xl"
      style={`width:${our_width() - 32}px;direction:rtl;`}
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
