import mainColumnWidth from "~/hooks/useMainColumnWidth";
import { ParentProps } from "solid-js";

const ArticleTitle = (props: ParentProps & { banner?: string }) => (
  <div class="text-column">
    <h1 class="mobile-title article-title sm:text-4xl">
      {props.banner} {props.children}
    </h1>
  </div>
);

export default ArticleTitle;
