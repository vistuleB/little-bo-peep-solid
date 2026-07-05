import HamburgerPanelItem  from "~/components/HamburgerPanelItem";
import HamburgerPanelTitle  from "~/components/HamburgerPanelTitle";

const HamburgerPanelAuthorSuppliedContents = () => {
  return <>
    <div id="bootcamp">
      <HamburgerPanelTitle label="Bootcamps" />
      <ul>
        <HamburgerPanelItem
          article_type={1}
          href="bootcamp1"
        >
          <span class="t-3003-c">
            Components Playground
            <span class="t-3003">
              ./src/content/playground/playground.wly:2:11
            </span>
          </span>
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;