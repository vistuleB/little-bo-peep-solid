import { createSignal } from "solid-js";

const HAMBURGER_MENU_HEIGHT = 56;

const Nav = () => {
  return (
    <>
      <nav class="select-none w-full">
        <div class="border-b select-none flex justify-center items-center fixed sm:absolute bg-white z-40 w-full h-14 left-0">
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

  return (
    <div
      class="slice select-none w-full h-full border-r-0 font-clickerscript"
      id="Header"
    >
      <div class="font-clickerscript text-3xl self-end mt-auto mb-auto py-2 sm:px-0" style="transform:translate(0, 0.1em);">
        <a href="/" onClick={() => setRoute("/")}>
          Little Bo Peep
        </a>
      </div>
    </div>
  );
};

export default Nav;
