import SharedProps from "./types/SharedProps";

export const TildeDivider = (props: SharedProps) => {
  return (
    <div
      class="text-center"
      style={`transform:translate(0, 0.4em);${props.style}`}>
      ~ ~ ~
    </div>
  );
};
