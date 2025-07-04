import HamburgerPanelTitle from "./HamburgerPanelTitle";
import HamburgerPanelItem from "./HamburgerPanelItem";
import { Math } from "./Math";

const HamburgerPanelAuthorSuppliedContents = () => {
  return <>
    <div id="chapter">
      <HamburgerPanelTitle label="Chapters" />
      <ul>
        <HamburgerPanelItem
          article_type={1}
          href="chapter1">
          <Math>
            $n \ra n + 1$
          </Math>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="chapter2">
          Slopes
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={3}
          href="chapter3">
          Functions
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={4}
          href="chapter4">
          Derivatives
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={5}
          href="chapter5">
          The Trigonometric Functions
        </HamburgerPanelItem>
      </ul>
    </div>
    <div id="bootcamp">
      <HamburgerPanelTitle label="Bootcamps" />
      <ul>
        <HamburgerPanelItem
          article_type={1}
          href="bootcamp1">
          Sets
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="bootcamp2">
          Powers of 10
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;