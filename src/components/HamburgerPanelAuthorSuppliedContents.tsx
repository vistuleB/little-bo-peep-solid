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
          <HamburgerPanelItem
            article_type={3}
            label="Functions"
            on_mobile="Functions"
            href="chapter3" />
          <HamburgerPanelItem
            article_type={4}
            label="Derivatives"
            on_mobile="Derivatives"
            href="chapter4" />
          <HamburgerPanelItem
            article_type={5}
            label="The Trigonometric Functions"
            on_mobile="The Trigonometric Functions"
            href="chapter5" />
        </ul>
      </div>
      <div id="bootcamp">
        <HamburgerPanelTitle label="Bootcamps" />
        <ul>
          <HamburgerPanelItem
            article_type={1}
            label="Sets"
            on_mobile="Sets"
            href="bootcamp1" />
          <HamburgerPanelItem
            article_type={2}
            label="Powers of 10"
            on_mobile="Powers of 10"
            href="bootcamp2" />
        </ul>
      </div>
    </>
  );
};

export default HamburgerPanelAuthorSuppliedContents;