import { JSX, ParentProps } from "solid-js";
import { SectionDivider } from "./SectionDivider";
import { useGlobalContext } from "~/store/StoreProvider";
import { Spacer } from "./Spacer";

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
    <div class={props.class} style={props.style} id={props.id}>
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

// Notes promoted from exercise solutions into the main text. The renderer
// gives their paragraphs OuterP wrappers, while figures keep their own layout.
export const OldSolutionNote = SolutionNote;

export const NoBreak = (props: ParentProps) => {
  return <span class="nobreak">{props.children}</span>;
};

export const InTextWarning = (props: ParentProps) => {
  return <span class="in-text-warning">{props.children}</span>;
};

export const Pause = () => {
  return <Spacer />;
};
