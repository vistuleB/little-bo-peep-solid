import { createEffect, createSignal, } from "solid-js";
import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

const setUpParentAndWidth = (
  parent: HTMLDivElement,
  span: HTMLSpanElement,
):void => {
  parent.style.width = MOBILE_MAX_WIDTH + "px";
  parent.style.height = "0px;";
  parent.style.position = 'absolute';
  parent.style.top = '0px';
  parent.style.visibility = 'hidden';
  span.style.font = "Baskerville, serif";
  span.style.fontSize = "1.875rem";
  span.style.height = 'auto';
  span.style.width = 'auto';
  span.style.whiteSpace = 'nowrap';
  parent.appendChild(span);
  document.body.appendChild(parent);
}

const TOCItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  let { store, } = useGlobalContext();
  const [our_width, set_our_width] = createSignal(store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth);

  const parentDiv = document.createElement("div");
  const textSpan = document.createElement("span");
  setUpParentAndWidth(parentDiv, textSpan);

  const getTextWidth = (text: string):number => {
    textSpan.innerHTML = text;
    return Math.ceil(textSpan.offsetWidth);
  }

  const [first_half, set_first_half] = createSignal(props.label);
  const [second_half, set_second_half] = createSignal("");

  // for now just a hack, too lazy to set up full
  // solution:
  createEffect(() => {
    set_our_width(store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth);
    if (props.label === "The Trigonometric Functions") {
      console.log(getTextWidth(props.label));
      if (getTextWidth(props.label) > our_width() - 60) {
        set_first_half("The Trigonometric");
        set_second_half("Functions");
      } else {
        set_first_half(props.label);
        set_second_half("");
      }
    }
  });

  return (
    <>
      <a
        href={`/article/${props.href}`}
        class="text-column flex items-baseline justify-between !leading-[2.4rem] text-3xl"
        style={`width:${our_width()}px;`}
      >
        <span class="block !w-fit">{props.article_type}</span>
        <span class="dots !w-auto"></span>
        <span class="text-right">{first_half()}</span>
      </a>
      {
        (second_half() === "") ? (
          <></>
        ) : (
          <a
            href={`/article/${props.href}`}
            class="text-column flex items-baseline justify-between !leading-[2.4rem] text-3xl"
            style={`width:${our_width()}px;`}
          >
            <span class="dots !w-auto"></span>
            <span class="text-right">{second_half()}</span>
          </a>
        )
      }
    </>
  );
};

export default TOCItem;