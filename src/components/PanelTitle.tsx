import useOnMobile from "~/hooks/useOnMobile";

const PanelTitle = (props: { label: string }) => {
  const { on_mobile } = useOnMobile();

  return (
    <h1 
      class="font-baskerville-italic mt-[5px] mb-[7px] flex justify-between !text-3xl items-baseline !leading-9 "
    >
      <img src="/images/toc_deco_line_left_endmark.svg" style="height:1em;"/>
      <span class="body_line" style="margin-right:0.6em;"></span>
      <span class="text-right">{props.label}</span>
      <span class="body_line" style="margin-left:0.6em;"></span>
      <img src="/images/toc_deco_line_right_endmark.svg" style="height:1em;"/>
    </h1>
  );
};

export default PanelTitle;