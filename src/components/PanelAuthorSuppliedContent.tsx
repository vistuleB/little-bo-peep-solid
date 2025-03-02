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
            label="The Trigonometric Functions"
            on_mobile="The Trigonometric Functions"
            href="chapter1" />
        </ul>
      </div>
    </>
  );
};

export default PanelAuthorSuppliedContent;