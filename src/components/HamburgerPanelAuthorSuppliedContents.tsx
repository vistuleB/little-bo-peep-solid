import HamburgerPanelItem  from "~/components/HamburgerPanelItem";
import HamburgerPanelTitle  from "~/components/HamburgerPanelTitle";

const HamburgerPanelAuthorSuppliedContents = () => {
  return <>
    <div id="chapter">
      <HamburgerPanelTitle label="Chapters" />
      <ul>
        <HamburgerPanelItem
          article_type={1}
          href="chapter1"
        >
          Functions
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="chapter2"
        >
          Derivatives
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={3}
          href="chapter3"
        >
          The Trigonometric Functions
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;