import { ParentProps } from "solid-js";
import Nav from "./Nav";
import { useGlobalContext } from "~/store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";
import LoadingGraphic from "./LoadingGraphic";
import containerWidth from "~/hooks/useContainerWidth";
import { useLocation } from "@solidjs/router";
import { swipeArrivalPreparation } from "~/utils/routeTransitionPolicy";

const Container = (props: ParentProps) => {
  let { store } = useGlobalContext();
  const location = useLocation();

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

  const preparingDeepSwipeArrival = () =>
    swipeArrivalPreparation(store, location.pathname) === "deep" &&
    store.horizontal_arrival_phase === "preparing";

  const positioningSwipeDestination = () =>
    swipeArrivalPreparation(store, location.pathname) !== "none" &&
    (store.horizontal_arrival_phase === "positioning-destination" ||
      store.horizontal_arrival_phase === "preparing") &&
    store.horizontal_arrival_offset === 0;

  const contentReady = () =>
    (store.saved_scroll_finished || store.scroll_is_at_0) &&
    !preparingDeepSwipeArrival() &&
    !positioningSwipeDestination();

  const centeredSceneLeft = () => (store.innerWidth - containerWidth()) / 2;

  return (
    <>
      <div
        id="ContainerViewport"
        class="relative overflow-x-hidden"
        style={{
          width: "100vw",
          background: "var(--background-rgb)",
          "overscroll-behavior-x": "none",
          "touch-action": "pan-y pinch-zoom",
        }}
      >
        <div
          id="Container"
          class="relative"
          style={{
            width: containerWidth() + "px",
            "margin-left": centeredSceneLeft() + "px",
          }}
        >
          <EarlyImages />
          {store.show_areas &&
            store.pageNecessaryMargin > 0 &&
            marginShowAreaDivs()}
          {store.show_areas && midLineDiv()}
          <Nav />
          <div style={{ opacity: contentReady() ? 1 : 0 }}>
            {props.children}
          </div>
          <LoadingGraphic visible={store.spinner_currently_visible} />
          <div
            class="h-14"
            style={{
              background: store.show_areas ? "teal" : "#0000",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

const EarlyImages = () => {
  return (
    <div style="overflow:hidden;position:absolute;top:0px;left:0px;pointer-events:none;width:1px;height:1px;">
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
