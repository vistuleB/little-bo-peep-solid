import { createSignal, ParentProps } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { MOBILE_MAX_WIDTH } from "~/constants";

const SectionsBreadcrumbs = (props: ParentProps) => {
  const [visible, setVisible] = createSignal(true);
  const [recentlyClosed, setRecentlyClosed] = createSignal(false);
  const { store } = useGlobalContext();
  const top = 80;
  const delta = 20;
  const sticky = () => store.scrollY > top - delta;

  return (
    <div
      id="breadcrumbs"
      style={{
        opacity: visible() && store.innerWidth >= MOBILE_MAX_WIDTH ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        "z-index": 100,
        position: sticky() ? "fixed" : "absolute",
        top: (sticky() ? delta : top) + "px",
        left: sticky()
          ? "0"
          : (store.scrollWidth - store.innerWidth) / 2 + "px",
        width: "fit-content",
        padding: "0 20px",
        "max-width": "300px",
      }}
      onMouseOver={() => setVisible(!recentlyClosed())}
      onMouseLeave={() => setRecentlyClosed(false)}>
      <ul>{props.children}</ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mt-2 cursor-pointer"
        onClick={() => {
          setVisible(false);
          setRecentlyClosed(true);
        }}>
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    </div>
  );
};

export default SectionsBreadcrumbs;
