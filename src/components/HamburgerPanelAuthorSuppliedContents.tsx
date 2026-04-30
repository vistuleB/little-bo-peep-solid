import HamburgerPanelItem  from "~/components/HamburgerPanelItem";
import HamburgerPanelTitle  from "~/components/HamburgerPanelTitle";
import { Math }  from "~/components/Math";

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
        <HamburgerPanelItem
          article_type={6}
          href="chapter6"
        >
          Dimensional Analysis
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={7}
          href="chapter7"
        >
          The Derivative of {" "}
          <Math>
            $x^2$
          </Math>
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
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;