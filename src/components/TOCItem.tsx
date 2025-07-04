import { ParentProps } from "solid-js";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const TOCItem = (props: ParentProps & {
  href: string;
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
        <div class="toc-item-title">
          <span class="bg-white" style="direction:ltr;">&lrm;&thinsp;{props.children}&lrm;</span>
        </div>
      </div>
    </div>
  );
};

export default TOCItem;
