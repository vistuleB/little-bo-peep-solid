import { ParentProps } from "solid-js";
import { twJoin } from "tailwind-merge";
import SharedProps from "./types/SharedProps";
import { SectionDivider } from "./SectionDivider";
import { useGlobalContext } from "~/store/StoreProvider";

export const Section = (props: ParentProps & { divider?: boolean }) => {
  const { store, set_store } = useGlobalContext();
  const show_section_dividers = () => store.show_section_dividers;

  return (
    <>
      <>{props.children}</>
      {show_section_dividers() && <SectionDivider />}
    </>
  );
};

export const Example = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const NoBreak = (props: ParentProps) => {
  return <span class="nobreak">{props.children}</span>;
};

export const Pause = () => {
  return <div class="spacer" />;
};

export const WriterlyBlankLine = () => {
  return <></>;
};

export const CustomBlock = (props: ParentProps & SharedProps) => {
  return (
    <span class={props.class} style={props.style}>
      {props.children}
    </span>
  );
};
