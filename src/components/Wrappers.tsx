import { ParentProps } from "solid-js";
import { SectionDivider } from "./SectionDivider";
import { useGlobalContext } from "~/store/StoreProvider";

export const Section = (
  props: ParentProps & { divider?: boolean; section_number: number },
) => {
  const { store } = useGlobalContext();
  const show_section_dividers = () => store.show_section_dividers;

  return (
    <>
      <span class="section w-full block" id={`${props.section_number}`}></span>
      <>{props.children}</>
      {show_section_dividers() && <SectionDivider />}
    </>
  );
};

export const Example = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const Note = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const SolutionNote = (props: ParentProps & { id: string }) => {
  return <div id={props.id}>{props.children}</div>;
};

export const NoBreak = (props: ParentProps) => {
  return <span class="nobreak">{props.children}</span>;
};

export const Pause = () => {
  return <div class="spacer-150" />;
};

export const WriterlyBlankLine = () => {
  return <></>;
};
