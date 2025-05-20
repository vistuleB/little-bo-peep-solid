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
        </ul>
      </div>
    </>
  );
};

export default PanelAuthorSuppliedContent;