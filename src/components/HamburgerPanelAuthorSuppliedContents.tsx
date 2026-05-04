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
          A Few Refreshers
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="chapter2"
        >
          Slopes
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={3}
          href="chapter3"
        >
          Functions
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={4}
          href="chapter4"
        >
          Derivatives
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={5}
          href="chapter5"
        >
          The Trigonometric Functions
        </HamburgerPanelItem>
      </ul>
    </div>
    <div id="bootcamp">
      <HamburgerPanelTitle label="Bootcamps" />
      <ul>
        <HamburgerPanelItem
          article_type={1}
          href="bootcamp1"
        >
          Sets
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="bootcamp2"
        >
          Powers of 10
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={3}
          href="bootcamp3"
        >
          Components Playground
        </HamburgerPanelItem>
      </ul>
    </div>
    <div id="appendix">
      <HamburgerPanelTitle label="Appendices" />
      <ul>
        <HamburgerPanelItem
          article_type={1}
          href="appendix1"
        >
          Exercise Graveyard
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;