import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import Spacer from "./Spacer";

type SolutionProps = ParentProps &
  SharedProps & {
    solution_number: number;
  };

export const SectionDivider = () => {
  return <>
    <Spacer />
    <img class="slice" src="/images/section_divider.svg" />
  </>;
};

export const StarDivider = (props: SharedProps) => {
  return <div class="star-divider text-center" style={props.style}>*&ensp;&ensp;*&ensp;&ensp;*&ensp;&ensp;*</div>;
};
