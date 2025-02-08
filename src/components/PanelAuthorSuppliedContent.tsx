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
            label="Slopes"
            on_mobile="Slopes"
            href="chapter1" />
        </ul>
      </div>
    </>
  );
};

export default PanelAuthorSuppliedContent;