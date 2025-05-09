import TOCTitle from "./TOCTitle";
import TOCItem from "./TOCItem";
import { Spacer } from "./Spacer";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <a
        class="prev_page"
        href="/article/bootcamp1" />
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItem
            article_type={1}
            label="Sets"
            on_mobile="Sets"
            href="bootcamp1" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;