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
            Dimensional Analysis
            <span class="t-3003">
              ./src/content/ch6/__parent.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="chapter2"
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
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;