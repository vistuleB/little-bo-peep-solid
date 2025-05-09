import PanelTitle from "./PanelTitle";
import PanelItem from "./PanelItem";

const PanelAuthorSuppliedContent = () => {
  return (
    <>
      <div id="bootcamp">
        <PanelTitle label="Bootcamps" />
        <ul>
          <PanelItem
            article_type={1}
            label="Sets"
            on_mobile="Sets"
            href="bootcamp1" />
        </ul>
      </div>
    </>
  );
};

export default PanelAuthorSuppliedContent;