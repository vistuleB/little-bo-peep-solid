import { createSignal } from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { twJoin } from "tailwind-merge";

const HAMBURGER_MENU_HEIGHT = 56;

const Nav = () => {
  let { store, } = useGlobalContext();
  return (
    <>
      <nav class={twJoin(
        "select-none w-full",
        store.innerWidth < MOBILE_MAX_WIDTH && "!fixed",
        store.innerWidth >= MOBILE_MAX_WIDTH && "absolute",
      )}>
        <div
          class={twJoin(
            "border-b select-none flex justify-center items-center bg-white z-40 w-full h-14 left-0",
          )}>
          <Title />
        </div>
      </nav>
      <div
        style={{ top: `${HAMBURGER_MENU_HEIGHT - 1.0}px` }}
        class="h-0 border-b !fixed  z-50"
      ></div>
      <div class="h-14"></div>
    </>
  );
};

const Title = () => {
  const [route, setRoute] = createSignal("/");
  let { store } = useGlobalContext();

  return (
    <div
      class="select-none w-full h-full border-r-0"
      id="Header"
    >
      <div 
        class="font-clickerscript text-3xl self-end mt-auto mb-auto py-2 slice"
        style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;transform:translate(0, 0.1em);`}
        >
        <a href="/" onClick={() => setRoute("/")}>
          {store.title}
          {/* {`${window.innerWidth}`} */}
        </a>
      </div>
    </div>
  );
};

export default Nav;
