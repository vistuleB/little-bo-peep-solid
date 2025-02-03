import TOCTitle from "./TOCTitle";
import TOCItem from "./TOCItem";
import Spacer from "./Spacer";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
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
          <TOCItem
            article_type={3}
            label="Functions"
            on_mobile="Functions"
            href="chapter3" />
          <TOCItem
            article_type={4}
            label="Derivatives"
            on_mobile="Derivatives"
            href="chapter4" />
        </ul>
      </div>
      <Spacer />
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItem
            article_type={1}
            label="Sets"
            on_mobile="Sets"
            href="bootcamp1" />
          <TOCItem
            article_type={2}
            label="Powers of 10"
            on_mobile="Powers of 10"
            href="bootcamp2" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;