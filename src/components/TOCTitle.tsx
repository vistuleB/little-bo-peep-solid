import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { TOCTitleLeftEndmarkSVG, TOCTitleRightEndmarkSVG } from "./TOCTitleEndmarks";

const TOCTitle = (props: { label: string }) => {
  let { store, } = useGlobalContext();
  return (
    <h1
      class="text-column flex items-baseline justify-between font-baskerville-italic mb-5 !text-[2.2rem] !leading-9"
      style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;`}
    >
      <TOCTitleLeftEndmarkSVG />
      <span class="body_line" style="margin-right:0.6em;"></span>
      <span class="text-right">{props.label}</span>
      <span class="body_line" style="margin-left:0.6em;"></span>
      <TOCTitleRightEndmarkSVG />
    </h1>
  );
};

export default TOCTitle;