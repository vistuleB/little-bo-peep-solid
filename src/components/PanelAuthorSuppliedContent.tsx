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
            label="Derivatives"
            on_mobile="Derivatives"
            href="chapter1" />
        </ul>
      </div>
    </>
  );
};

export default PanelAuthorSuppliedContent;