import HamburgerPanelTitle from "./HamburgerPanelTitle";
import HamburgerPanelItem from "./HamburgerPanelItem";

const HamburgerPanelAuthorSuppliedContents = () => {
  return (
    <>
      <div id="chapter">
        <HamburgerPanelTitle label="Chapters" />
        <ul>
          <HamburgerPanelItem
            article_type={1}
            label="A Few Refreshers"
            on_mobile="A Few Refreshers"
            href="chapter1" />
          <HamburgerPanelItem
            article_type={2}
            label="Slopes"
            on_mobile="Slopes"
            href="chapter2" />
        </ul>
      </div>
    </>
  );
};

export default HamburgerPanelAuthorSuppliedContents;