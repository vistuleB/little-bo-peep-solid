import TOCTitle from "./TOCTitle";
import TOCItem from "./TOCItem";
import { Spacer } from "./Spacer";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <a
        class="next_page"
        href="/article/chapter1" />
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem
            article_type={1}
            label="A Few Refreshers"
            on_mobile="A Few Refreshers"
            href="chapter1" />
          <TOCItem
            article_type={2}
            label="Slopes"
            on_mobile="Slopes"
            href="chapter2" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;