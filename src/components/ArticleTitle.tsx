import mainColumnWidth from "~/hooks/useMainColumnWidth";
import { ParentProps } from "solid-js";

const ArticleTitle = (props: ParentProps & { banner?: string }) => (
  <div class="text-column" style={`width:${mainColumnWidth()}px;`}>
    <h1 class="mobile-title sm:text-4xl pt-5 md:pt-6 lg:pt-7 pb-4 lg:pb-5">
      {props.banner} {props.children}
    </h1>
  </div>
);

export default ArticleTitle;
