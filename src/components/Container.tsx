import { ParentProps } from "solid-js";
import Nav from "./Nav";
import { useGlobalContext } from "~/store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";
import LoadingGraphic from "./LoadingGraphic";
import containerWidth from "~/hooks/useContainerWidth";

const Container = (props: ParentProps) => {
  let { store } = useGlobalContext();

  const marginWidth = () => (containerWidth() - mainColumnWidth()) / 2;

  const marginBeyondNecessaryMargin = () =>
    marginWidth() - store.pageNecessaryMargin;

  const marginShowAreaDivs = () => {
    return (
      <>
        <div
          style={`position:absolute;top:0;left:${marginBeyondNecessaryMargin()}px; width:${store.pageNecessaryMargin}px;height:100%;background-color:rgba(255, 0, 0, 0.2);border:2px solid red;pointer-events:none;z-index:1000;`}
        />
        <div
          style={`position:absolute;top:0;right:${marginBeyondNecessaryMargin()}px;width:${store.pageNecessaryMargin}px;height:100%;background-color:rgba(255, 0, 0, 0.2);border: 2px solid red;pointer-events:none;z-index:1000;`}
        />
      </>
    );
  };

  const midLineDiv = () => {
    return (
      <div
        style={`position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: ${store.maxElementWidth}px; height: 100%; background-color: rgba(0, 0, 0, 0); border: 2px solid teal; pointer-events: none; z-index: 999;`}
      />
    );
  };

  const contentReady = () =>
    store.saved_scroll_finished || store.scroll_is_at_0;

  return (
    <>
      <div
        id="Container"
        class="-z-10 relative overflow-hidden"
        style={{
          width: containerWidth() + "px",
        }}
      >
        <EarlyImages />
        {/* <div class="relative"> */}
        {store.show_areas &&
          store.pageNecessaryMargin > 0 &&
          marginShowAreaDivs()}
        {store.show_areas && midLineDiv()}
        <Nav />
        <div style={{ opacity: contentReady() ? 1 : 0 }}>{props.children}</div>
        {store.spinner_currently_visible && <LoadingGraphic />}
        {/* </div> */}
        <div
          class="h-14"
          style={{
            background: store.show_areas ? "teal" : "#0000",
          }}
        ></div>
      </div>
    </>
  );
};

const EarlyImages = () => {
  return (
    <div style="overflow:hidden;position:absolute;top:0px;left:0px;pointer-events:none;width:1px;height:1px;">
      <img src="/non-build-img/loading_screen.png" style="position:absolute" />
      <img src="/build-img/svgo-svg/anTr.svg" style="position:absolute" />
      <img src="/build-img/svgo-svg/Z39o.svg" style="position:absolute" />
      <img src="/build-img/svgo-svg/9z9J.svg" style="position:absolute" />
      <img src="/build-img/svgo-svg/tYyP.svg" style="position:absolute" />
      <img src="/build-img/svgo-svg/1s4r.svg" style="position:absolute" />
      <img src="/build-img/svgo-svg/hiZe.svg" style="position:absolute" />
      <img src="/build-img/svgo-svg/fuoV.svg" style="position:absolute" />
      <b>Load the bold font!</b>
      <i>Load the italic font!</i>
    </div>
  );
};

export default Container;
