import { createEffect, createSignal, onCleanup } from "solid-js";
import { twJoin } from "tailwind-merge";
import {
  HAMBURGER_MENU_HEIGHT,
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
  HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY,
  MOBILE_MAX_WIDTH,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "../store/StoreProvider";
import { set_store } from "~/store";
import { join } from "path";
import { cwd } from "process";
import { readdir } from "fs/promises";
import { createAsync, query } from "@solidjs/router";

const navigate = (to: string = "/") => {
  let a = document.createElement("a")
  a.href = to
  document.body.appendChild(a)
  a.click()
}

const getArticles = query(async () => {
  "use server";
  const currentDir = cwd();
  const folderPath = join(currentDir, "src/routes/article");

  let fileNames = await readdir(folderPath).catch(err => console.log(err));
  fileNames = fileNames?.map(name => name.slice(0, name.length - 4))

  return [
    ...fileNames?.filter(name => name.startsWith("chapter")) || [],
    ...fileNames?.filter(name => name.startsWith("bootcamp")) || [],
  ]
 
}, "articles");



const PanelButton = () => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const open = () => store.panel_opened;
  const articles =  createAsync(() => getArticles());

  const [current_article, set_current_article] = createSignal(location.pathname);

  const getIndex = (articles: string[]) => {
 let current_article_sliced = current_article().startsWith("/article/") ? current_article().slice("/article/".length) : current_article();
    return articles.findIndex(a => a === current_article_sliced)
  }

  const getNextArticle = (articles: string[]) => {
    if (nextDisabled(articles)) return;

    if (current_article() == "/") {
      set_current_article(articles[0])
      navigate("/article/" + articles[0])
      return;
    }
    let current_article_index = getIndex(articles)
    if (current_article_index < articles.length - 1) {
      set_current_article(articles[current_article_index + 1])
      navigate(articles[current_article_index + 1])
      return;
    }
  }

  const getPrevArticle = (articles: string[]) => {
    if (prevDisabled(articles)) return;
    let current_article_index = getIndex(articles)
    if (current_article_index === 0 ) {
      set_current_article("/")
      navigate("/")
      return;
    }
    set_current_article(articles[current_article_index - 1])
    navigate(articles[current_article_index - 1])
    return;
  }

  const nextDisabled = (articles: string[]) => {
    return getIndex(articles) == articles.length - 1
  }

  const prevDisabled = (articles: string[]) => {
    return current_article() == "/"
  }

  // createEffect(()=>{
  //   if (articles()){
  //     getNextArticle(articles() || [])
  //   }
  // })

  const [opacity, set_opacity] = createSignal(1);
  const [scrollY, set_scrollY] = createSignal(0);
  const [scrollX, set_scrollX] = createSignal(0);
  const [innerWidth, set_innerWidth] = createSignal(0);
  const [scrollWidth, set_scrollWidth] = createSignal(0);

  const calc_opacity = () => {
    return Math.min(
      1.0,
      Math.max(0, 1.0 - (scrollY() - HAMBURGER_MENU_SCROLLY_START_FADE) / (HAMBURGER_MENU_SCROLLY_END_FADE - HAMBURGER_MENU_SCROLLY_START_FADE))
    );
  };

  const handleScroll = () => {
    set_scrollY(window.scrollY);
    set_scrollX(window.scrollX);
    set_opacity(calc_opacity());
  };

  const handleResize = () => {
    set_innerWidth(window.innerWidth);
    set_scrollWidth(document.body.scrollWidth);
  };

  createEffect(() => {
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <>
      {/* the background */}
      <div
        class={twJoin(
          "fixed right-0 z-40 h-14",
          scrollY() <= HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY &&
          !on_mobile() &&
          scrollX() + innerWidth() >= (scrollWidth() / 2) + (MOBILE_MAX_WIDTH / 2) && "h-[10rem]"
        )}
        style={{
          "width": "142px",
          "background-color":
            scrollY() > HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY || on_mobile()
              ? "transparent"
              : store.show_areas
              ? "#fff000"
              : "#fff",
        }}
      ></div>
      <div
        style="height:57px;" // I don't know if it's box-sizing model or what but I need to put 57px here to get height 56px in the (Chrome) inspector
        class={twJoin(
          "fixed right-0 z-50",
          on_mobile() && "border-l",
          !on_mobile() && !open() && scrollY() < 2 * HAMBURGER_MENU_HEIGHT && "border-b",
        )}
      >
        <div
          class="select-none flex items-center justify-center h-8 m-3 fill-[rgb(30,30,30)] hover:fill-stone-600 hover:!opacity-100"
          style={{ opacity: !open() && !on_mobile() ? opacity() : 1 }}
        >
          <button
            class={twJoin("w-8 mr-2", prevDisabled(articles() || []) && "cursor-not-allowed" )}
            onClick={() => { getPrevArticle(articles() || []) }}
          >
            <LeftArrow />
          </button>
          <button
            class={twJoin("w-8 mr-3", nextDisabled(articles() || []) && "cursor-not-allowed" )}
            onClick={() => { getNextArticle(articles() || []) }}
          >
            <RightArrow />
          </button>
          <button
            onClick={() => { set_store("panel_opened", !open()); }}
          >
            <PanelButtonIcon open={open()} />
          </button>
        </div>
      </div>
    </>
  );
};

const LeftArrow = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30">
      <path
        d="M18 7.5 L10.5 15 L18 22.5"
        stroke="black"
        stroke-linecap="round"
        stroke-width="2.6"
        fill="none"
      >
      </path>
    </svg>
  );
}

const RightArrow = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30">
      <path
        d="M12 7.5 L19.5 15 L12 22.5"
        stroke="black"
        stroke-linecap="round"
        stroke-width="2.6"
        fill="none"
      >
      </path>
    </svg>
  );
}

const PanelButtonIcon = (props: { open: boolean }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30">
      <rect
        x="5"
        y="6"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-1" : ""}`}
      ></rect>
      <rect
        x="5"
        y="13.5"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "opacity-0" : ""}`}
      ></rect>
      <rect
        x="5"
        y="21"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-2" : ""}`}
      ></rect>
    </svg>
  );
};

export default PanelButton;
