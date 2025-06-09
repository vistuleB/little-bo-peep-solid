import { createSignal, ParentProps } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { HAMBURGER_MENU_HEIGHT, MOBILE_MAX_WIDTH } from "~/constants";
import { Component } from "solid-js";
import usePrevNextArticle from "~/hooks/usePrevNextArticle";
import { twJoin } from "tailwind-merge";
import SharedProps from "./types/SharedProps";
import OutlinedText from "./OutlinedText";

const SectionsBreadcrumbs = (props: ParentProps) => {
  const [visible, setVisible] = createSignal(true);
  const [recentlyClosed, setRecentlyClosed] = createSignal(false);

  const { store } = useGlobalContext();

  const delta = 18;
  const top = HAMBURGER_MENU_HEIGHT + delta;
  const sticky = () => store.scrollY > top - delta;

  const { getPrevArticle, prevDisabled, getNextArticle, nextDisabled } =
    usePrevNextArticle();

  return (
    <div
      id="breadcrumbs"
      style={{
        position: "fixed",
        "z-index": 30,
        top: (sticky() ? delta : top - store.scrollY) + "px",
        left: "0",
        width: "fit-content",
        padding: "0 26px",
        "max-width": "300px",
      }}>
      {/* Ultra Hot corner */}
      <div
        style={{
          border: store.show_areas ? "5px solid rgb(181, 25, 25)" : "none",
          width: "50px",
          height: "50px",
          position: "absolute",
          top: -1 * delta + "px",
          left: "0",
          "z-index": 20,
        }}
        onMouseOver={() => setVisible(true)}></div>

      {/* Hot corner */}
      <div
        style={{
          border: store.show_areas ? "5px solid rgb(249, 150, 150)" : "none",
          width: "150px",
          height: "200px",
          position: "absolute",
          top: -1 * delta + "px",
          left: "0",
        }}
        onMouseOver={() => setVisible(!recentlyClosed())}
        onMouseLeave={() => setRecentlyClosed(false)}></div>

      <div
        style={{
          transform: `translateY(${visible() ? "0" : "-120%"})`,
          opacity: visible() && store.innerWidth >= MOBILE_MAX_WIDTH ? 1 : 0,
          transition: "all 0.5s ease-in-out",
        }}>
        <ul>
          <li class="breadcrumb-prev-next flex gap-2">
            <OutlinedText
              onClick={() => getPrevArticle(true)}
              class={twJoin(
                prevDisabled() && "!text-gray-600 cursor-default",
                "underline cursor-pointer",
              )}>
              &lt;&lt;prev
            </OutlinedText>
            <OutlinedText
              onClick={() => getNextArticle(true)}
              class={twJoin(
                nextDisabled() && "!text-gray-600 cursor-default",
                "underline cursor-pointer",
              )}>
              next&gt;&gt;
            </OutlinedText>
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
    </div>
  );
};

export const BreadcrumbItem = (props: ParentProps & SharedProps) => {
  return (
    <>
      <li id={props.id} class={props.class}>
        <OutlinedText>{props.children}</OutlinedText>
      </li>
    </>
  );
};

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
