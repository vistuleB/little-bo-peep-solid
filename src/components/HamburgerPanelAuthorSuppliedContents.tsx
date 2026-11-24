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
          <span class="t-3003-c">
            A Few Refreshers
            <span class="t-3003">
              ./src/content/ch1/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="chapter2"
        >
          <span class="t-3003-c">
            Slopes
            <span class="t-3003">
              ./src/content/ch2/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={3}
          href="chapter3"
        >
          <span class="t-3003-c">
            Functions
            <span class="t-3003">
              ./src/content/ch3/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={4}
          href="chapter4"
        >
          <span class="t-3003-c">
            Derivatives
            <span class="t-3003">
              ./src/content/ch4/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={5}
          href="chapter5"
        >
          <span class="t-3003-c">
            Motion in Two Dimensions
            <span class="t-3003">
              ./src/content/ch4a_motion/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={6}
          href="chapter6"
        >
          <span class="t-3003-c">
            Trigonometry I
            <span class="t-3003">
              ./src/content/ch5/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={7}
          href="chapter7"
        >
          <span class="t-3003-c">
            The Product Rule
            <span class="t-3003">
              ./src/content/ch5a_product/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={8}
          href="chapter8"
        >
          <span class="t-3003-c">
            Dimensional Analysis
            <span class="t-3003">
              ./src/content/ch6/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={9}
          href="chapter9"
        >
          <span class="t-3003-c">
            Derivative(s) of {" "}
            <span class="t-3003">
              ./src/content/ch6a_square/__parent.wly:2:11
            </span>
          </span>
          <Math>
            $x^2$
          </Math>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={10}
          href="chapter10"
        >
          <span class="t-3003-c">
            Leibnizian Notation
            <span class="t-3003">
              ./src/content/ch7_leibniz/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={11}
          href="chapter11"
        >
          <span class="t-3003-c">
            The Lambert Projection
            <span class="t-3003">
              ./src/content/ch8_vectors/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={12}
          href="chapter12"
        >
          <span class="t-3003-c">
            The Fundamental Theorem of Calculus
            <span class="t-3003">
              ./src/content/ch9_linearity/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={13}
          href="chapter13"
        >
          <span class="t-3003-c">
            Trigonometry II
            <span class="t-3003">
              ./src/content/ch9a_trig2/__parent.wly:2:11
            </span>
          </span>
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
          <span class="t-3003-c">
            Sets
            <span class="t-3003">
              ./src/content/bt1/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="bootcamp2"
        >
          <span class="t-3003-c">
            Powers of 10
            <span class="t-3003">
              ./src/content/bt2/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={3}
          href="bootcamp3"
        >
          <span class="t-3003-c">
            The Pythagorean Theorem
            <span class="t-3003">
              ./src/content/bt3/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;