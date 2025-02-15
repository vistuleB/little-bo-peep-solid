import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

const TOCItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  let { store, } = useGlobalContext();

  return (
    <a
      href={`/article/${props.href}`}
      class="text-column flex items-baseline justify-between !leading-9 lg:!leading-10 !text-3xl"
      style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;`}
    >
      <span class="block !w-fit">{props.article_type}</span>
      <span class="dots !w-auto"></span>
      <span class="sm:hidden !w-auto">
        {props.on_mobile == "" ? props.label : props.on_mobile}
      </span>
      <span class="hidden sm:block !w-auto">{props.label}</span>
    </a>
  );
};

export default TOCItem;