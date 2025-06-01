import { createSignal, ParentProps } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { HAMBURGER_MENU_HEIGHT, MOBILE_MAX_WIDTH } from "~/constants";

const SectionsBreadcrumbs = (props: ParentProps) => {
  const [visible, setVisible] = createSignal(true);
  const [recentlyClosed, setRecentlyClosed] = createSignal(false);
  const { store } = useGlobalContext();

  const delta = 18;
  const top = HAMBURGER_MENU_HEIGHT + delta;
  const sticky = () => store.scrollY > top - delta;

  const {
    getPrevArticle,
    prevDisabled,
    set_prevDisabled,
    getNextArticle,
    nextDisabled,
    set_nextDisabled,
  } = usePrevNextArticle();

  return (
    <div
      id="breadcrumbs"
      style={{
        opacity: visible() && store.innerWidth >= MOBILE_MAX_WIDTH ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        "z-index": 100,
        position: "fixed",
        top: (sticky() ? delta : top - store.scrollY) + "px",
        left: "0",
        width: "fit-content",
        padding: "0 26px",
        "max-width": "300px",
      }}
      onMouseOver={() => setVisible(!recentlyClosed())}
      onMouseLeave={() => setRecentlyClosed(false)}>
      <ul>
        <li class="breadcrumb-prev-next flex gap-2">
          <span
            class={twJoin(
              prevDisabled() && "!text-gray-600 cursor-default",
              "underline cursor-pointer",
            )}
            onClick={getPrevArticle}>
            &lt;&lt;prev
          </span>
          <span
            class={twJoin(
              nextDisabled() && "!text-gray-600 cursor-default",
              "underline cursor-pointer",
            )}
            onClick={getNextArticle}>
            next&gt;&gt;
          </span>
        </li>
        {props.children}
      </ul>
      <CloseCircleIcon
        class="mt-2 cursor-pointer"
        onClick={() => {
          setVisible(false);
          setRecentlyClosed(true);
        }}
      />
    </div>
  );
};

import { Component } from "solid-js";
import usePrevNextArticle from "~/hooks/usePrevNextArticle";
import { twJoin } from "tailwind-merge";

type CloseCircleIconProps = {
  class?: string;
  onClick?: () => void;
};

const CloseCircleIcon: Component<CloseCircleIconProps> = (props) => {
  const iconSize = 28;
  const circleRadius = 24;
  const crossSize = 10;
  const strokeWidth = 2.5;
  const strokeColor = "currentColor";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox={`0 0 ${iconSize * 2} ${iconSize * 2}`}
      fill="none"
      stroke={strokeColor}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={props.class}
      onClick={props.onClick}>
      <circle cx={iconSize} cy={iconSize} r={circleRadius}></circle>
      <line
        x1={iconSize + crossSize}
        y1={iconSize - crossSize}
        x2={iconSize - crossSize}
        y2={iconSize + crossSize}></line>
      <line
        x1={iconSize - crossSize}
        y1={iconSize - crossSize}
        x2={iconSize + crossSize}
        y2={iconSize + crossSize}></line>
    </svg>
  );
};

export default SectionsBreadcrumbs;
