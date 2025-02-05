import PanelTitle from "./PanelTitle";
import PanelItem from "./PanelItem";

const PanelAuthorSuppliedContent = () => {
  return (
    <>
      <div id="chapter">
        <PanelTitle label="Chapters" />
        <ul>
          <PanelItem
            article_type={1}
            label="A Few Refreshers"
            on_mobile="A Few Refreshers"
            href="chapter1" />
          <PanelItem
            article_type={2}
            label="Slopes"
            on_mobile="Slopes"
            href="chapter2" />
          <PanelItem
            article_type={3}
            label="Functions"
            on_mobile="Functions"
            href="chapter3" />
          <PanelItem
            article_type={4}
            label="Derivatives"
            on_mobile="Derivatives"
            href="chapter4" />
        </ul>
      </div>
      <div id="bootcamp">
        <PanelTitle label="Bootcamps" />
        <ul>
          <PanelItem
            article_type={1}
            label="Sets"
            on_mobile="Sets"
            href="bootcamp1" />
          <PanelItem
            article_type={2}
            label="Powers of 10"
            on_mobile="Powers of 10"
            href="bootcamp2" />
        </ul>
      </div>
    </>
  );
};

export default PanelAuthorSuppliedContent;