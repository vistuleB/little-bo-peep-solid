import SharedProps from "./types/SharedProps";
import { Spacer } from "./Spacer";

export const SectionDivider = () => {
  return <>
    <Spacer />
    <img class="slice" src="/images/section_divider.svg" />
  </>;
};

export const StarDivider = (props: SharedProps) => {
  return <div class="text-center" style={`transform:translate(0, 0.4em);${props.style}`}>*&ensp;&ensp;*&ensp;&ensp;*&ensp;&ensp;*</div>;
};
