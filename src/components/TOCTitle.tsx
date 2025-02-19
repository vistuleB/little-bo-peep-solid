import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

const TOCTitle = (props: { label: string }) => {
  let { store, } = useGlobalContext();

  return (
    <h1
      class="text-column flex items-baseline justify-between font-baskerville-italic mb-5 !text-[2.2rem] !leading-9"
      style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;`}
    >
      <img src="/images/toc_deco_line_left_endmark.svg" style="height:1em;"/>
      <span class="body_line" style="margin-right:0.6em;"></span>
      <span class="text-right">{props.label}</span>
      <span class="body_line" style="margin-left:0.6em;"></span>
      <img src="/images/toc_deco_line_right_endmark.svg" style="height:1em;"/>
    </h1>
    // <h1 
    //   class="text-column !text-[2.1rem] !leading-7 font-baskerville-italic mb-5 !justify-between items-center"
    //   style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;`}
    //   >
    //   <div class="flex items-center justify-between gap-4">
    //     <div class="flex-1">
    //       <img src="/images/title_line.svg" class="w-full" />
    //     </div>

    //     <div class="whitespace-nowrap">
    //       <p class="">{props.label}</p>
    //     </div>

    //     <div class="flex-1">
    //       <img src="/images/title_line.svg" class="w-full rotate-180" />
    //     </div>
    //   </div>
    // </h1>
  );
};

export default TOCTitle;