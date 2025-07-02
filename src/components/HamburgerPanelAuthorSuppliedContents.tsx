import HamburgerPanelTitle from "./HamburgerPanelTitle";
import HamburgerPanelItem from "./HamburgerPanelItem";
import { Math } from "./Math";

const HamburgerPanelAuthorSuppliedContents = () => {
  return <>
    <div id="chapter">
      <HamburgerPanelTitle label="Chapters" />
      <ul>
        <HamburgerPanelItem href="chapter1">
          <Math>
            $n \ra n + 1$
          </Math>
        </HamburgerPanelItem>
        <HamburgerPanelItem href="chapter2">
          Slopes
        </HamburgerPanelItem>
        <HamburgerPanelItem href="chapter3">
          Functions
        </HamburgerPanelItem>
        <HamburgerPanelItem href="chapter4">
          Derivatives
        </HamburgerPanelItem>
        <HamburgerPanelItem href="chapter5">
          The Trigonometric Functions
        </HamburgerPanelItem>
      </ul>
    </div>
    <div id="bootcamp">
      <HamburgerPanelTitle label="Bootcamps" />
      <ul>
        <HamburgerPanelItem href="bootcamp1">
          Sets
        </HamburgerPanelItem>
        <HamburgerPanelItem href="bootcamp2">
          Powers of 10
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;