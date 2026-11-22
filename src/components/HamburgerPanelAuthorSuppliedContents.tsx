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
          Motion in Two Dimensions
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={6}
          href="chapter6"
        >
          Trigonometry I
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={7}
          href="chapter7"
        >
          The Product Rule
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={8}
          href="chapter8"
        >
          Dimensional Analysis
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={9}
          href="chapter9"
        >
          Derivative(s) of {" "}
          <Math>
            $x^2$
          </Math>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={10}
          href="chapter10"
        >
          Leibnizian Notation
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={11}
          href="chapter11"
        >
          The Lambert Projection
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={12}
          href="chapter12"
        >
          The Fundamental Theorem of Calculus
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={13}
          href="chapter13"
        >
          Trigonometry II
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
          The Pythagorean Theorem
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;