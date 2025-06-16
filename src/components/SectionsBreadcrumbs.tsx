import {
  children,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  ParentProps,
} from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { HAMBURGER_MENU_HEIGHT, MOBILE_MAX_WIDTH } from "~/constants";
import { Component } from "solid-js";
import usePrevNextArticle from "~/hooks/usePrevNextArticle";
import { twJoin } from "tailwind-merge";
import SharedProps from "./types/SharedProps";
import OutlinedText from "./OutlinedText";
import { useLocalStorage } from "solidjs-hooks";

const SectionsBreadcrumbs = (props: ParentProps) => {
  const { store } = useGlobalContext();

  const [visible, setVisible] = useLocalStorage(
    "sections-breadcrumbs-visible",
    true,
  );

  const [outSideHovered, setOutSideHovered] = createSignal(false);
  let children_list = children(() => props.children).toArray();

  const delta = 18;
  const top = HAMBURGER_MENU_HEIGHT + delta;
  const sticky = () => store.scrollY > top - delta;

  let ref: HTMLUListElement | undefined;

  const { getPrevArticle, prevDisabled, getNextArticle, nextDisabled } =
    usePrevNextArticle();

  onMount(() => {
    const isMouseOverElement = (
      element: HTMLElement | null,
      { x, y }: MouseEvent,
    ) => {
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      );
    };

    const hotCorner = document.getElementById("hot-corner");

    const handler = (e: MouseEvent) => {
      if (isMouseOverElement(hotCorner, e)) {
        setTimeout(() => {
          setOutSideHovered(false);
        }, 100);
        return;
      }
      setOutSideHovered(true);
    };

    (window as any).MathJax.typesetPromise([ref]);
    ref?.querySelectorAll(".math").forEach((math) => {
      (math as HTMLElement).style.opacity = "1";
    });

    document.body.addEventListener("mouseover", handler);
    onCleanup(() => {
      document.body.removeEventListener("mouseover", handler);
    });
  });

  return (
    <>
      {/* Ultra Hot corner */}
      <div
        style={{
          border: store.show_areas ? "5px solid rgb(181, 25, 25)" : "none",
          width: "150px",
          height: "50px",
          position: "fixed",
          top: (sticky() ? 0 : HAMBURGER_MENU_HEIGHT - store.scrollY) + "px",
          left: "0",
          "z-index": 20,
        }}
        onMouseEnter={() => setVisible(true)}></div>
      {/* Hot corner */}
      <div
        id="hot-corner"
        style={{
          border: store.show_areas ? "5px solid rgb(249, 150, 150)" : "none",
          width: "150px",
          height: "200px",
          position: "fixed",
          top: (sticky() ? 0 : HAMBURGER_MENU_HEIGHT - store.scrollY) + "px",
          left: "0",
          "z-index": 10,
        }}
        onMouseEnter={() => {
          setVisible(visible() || outSideHovered());
        }}></div>
      <div
        id="breadcrumbs"
        style={{
          position: sticky() ? "fixed" : "absolute",
          "z-index": visible() ? 25 : 0,
          top: (sticky() ? delta : top) + "px",
          width: "fit-content",
          padding: "0 26px",
          "max-width": "300px",
          left: sticky() ? "0" : store.scrollX + "px",
          display: store.innerWidth <= MOBILE_MAX_WIDTH ? "none" : "block",
        }}>
        <div
          style={{
            transform: `translateY(${visible() ? "0" : "-120%"})`,
            opacity: visible() ? 1 : 0,
            transition: `all ${Math.min(300 + children_list.length * 50, 600)}ms ease-in-out`,
          }}>
          <ul ref={ref}>
            <li class="breadcrumb-prev-next flex gap-2">
              <OutlinedText
                onClick={() => getPrevArticle(true)}
                class={twJoin(
                  prevDisabled() && "!text-stone-300 cursor-default",
                  "underline cursor-pointer",
                )}>
                &lt;&lt;prev
              </OutlinedText>
              <OutlinedText
                onClick={() => getNextArticle(true)}
                class={twJoin(
                  nextDisabled() && "!text-stone-300 cursor-default",
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
            }}
          />
        </div>
      </div>
    </>
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

const CloseCircleIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
  props,
) => {
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
      onMouseOver={props.onMouseOver}
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
