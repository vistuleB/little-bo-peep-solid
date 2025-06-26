import { ParentProps } from "solid-js";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const TOCItemNewStyle = (props: ParentProps & {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  return (
    <div
      class="text-column"
      style={`width:${mainColumnWidth()}px;`}
    >
      <div
        onclick={() => {
          window.location.href = `/article/${props.href}`;
        }}
        class="cursor-pointer relative m-auto leading-[2.4rem] text-3xl"
        style="direction:rtl"
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
          {props.children}
        </div>
        <div class="toc-item-title">{props.label}</div>
      </div>
    </div>
  );
};

export default TOCItemNewStyle;
