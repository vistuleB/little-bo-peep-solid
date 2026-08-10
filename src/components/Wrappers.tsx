import { JSX, ParentProps } from "solid-js";
import { SectionDivider } from "./SectionDivider";
import { useGlobalContext } from "~/store/StoreProvider";

interface ExampleProps {
  style?: string | JSX.CSSProperties;
  class?: string;
  id?: string;
}

export const Section = (
  props: ParentProps & { divider?: boolean; id?: string },
) => {
  const { store } = useGlobalContext();
  const show_section_dividers = () => store.show_section_dividers;

  return (
    <>
      <section id={`${props.id}`}>{props.children}</section>
      {show_section_dividers() && <SectionDivider />}
    </>
  );
};

export const Example = (props: ParentProps<ExampleProps>) => {
  return (
    <div
      class={props.class}
      style={props.style}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export const Note = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const SolutionNote = (props: ParentProps & { id?: string }) => {
  return <div id={props.id}>{props.children}</div>;
};

export const NoBreak = (props: ParentProps) => {
  return <span class="nobreak">{props.children}</span>;
};

export const InTextWarning = (props: ParentProps) => {
  return <span class="in-text-warning">{props.children}</span>;
};

export const Pause = () => {
  return <div class="spacer-150" />;
};
