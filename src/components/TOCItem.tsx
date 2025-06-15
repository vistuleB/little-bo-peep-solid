import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

const TOCItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  const { store } = useGlobalContext();

  const our_width = () =>
    store.innerWidth > MOBILE_MAX_WIDTH
      ? DESKTOP_COLUMN_WIDTH
      : store.innerWidth;

  return (
    <a
      href={`/article/${props.href}`}
      class="text-column flex items-baseline justify-between !leading-[2.4rem] text-3xl"
      style={`width:${our_width()}px;`}>
      <div class="w-full inline-flex items-baseline">
        <span class="">{props.article_type}</span>
        <span class="dots min-w-[5rem] lg:min-w-[12rem]"></span>
        <span class="text-right">{props.label}</span>
      </div>
    </a>
  );
};

export default TOCItem;
