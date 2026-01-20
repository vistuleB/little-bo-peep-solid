import { ParentProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

type ListMarker =
  | "disc"
  | "decimal"
  | "lower-alpha"
  | "upper-alpha"
  | "lower-roman"
  | "upper-roman"
  | "lower-alpha-paren"
  | "upper-alpha-paren"
  | "lower-roman-paren"
  | "upper-roman-paren";

interface ListProps extends SharedProps {
  type?: ListMarker;
}

const markerMap: Record<ListMarker, string> = {
  disc: "list-disc",
  decimal: "list-decimal",
  "lower-alpha": "list-[lower-alpha]",
  "upper-alpha": "list-[upper-alpha]",
  "lower-roman": "list-[lower-roman]",
  "upper-roman": "list-[upper-roman]",
  "lower-alpha-paren": "list-none counter-lower-alpha-paren",
  "upper-alpha-paren": "list-none counter-upper-alpha-paren",
  "lower-roman-paren": "list-none counter-lower-roman-paren",
  "upper-roman-paren": "list-none counter-upper-roman-paren",
};

export const List = (props: ParentProps & ListProps) => {
  // Determine tag: 'ul' for discs, 'ol' for everything else
    const Tag = () => (props.type === "disc" ? "ul" : "ol");
  
  return (
    <div class={twJoin("text-column", props.class)}>
      <Dynamic
        component={Tag()}
        style={`${props.style ?? ""}`}
        class={twJoin(
          "px-4 ml-6",
          "flex flex-col",
          markerMap[props.type ?? "disc"],
        )}
        >
        {props.children}
      </Dynamic>
    </div>
  );
};

export const Item = (props: ParentProps & SharedProps) => {
  const { store } = useGlobalContext();
  return (
    <li class={twJoin("relative", props.class, store.show_areas && "left-right-background-divide")} style={props.style}>
      {props.children}
    </li>
  );
};
