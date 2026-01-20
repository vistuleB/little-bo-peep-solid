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
  markerPrefix?: string;
  markerSuffix?: string;
  markerBold?: boolean;
}

const markerMap: Record<ListMarker, string> = {
  disc: "list-disc",
  decimal: "list-custom-decimal",
  "lower-alpha": "list-custom-lower-alpha",
  "upper-alpha": "list-custom-upper-alpha",
  "lower-roman": "list-custom-lower-roman",
  "upper-roman": "list-custom-upper-roman",
  "lower-alpha-paren": "list-custom-lower-alpha",
  "upper-alpha-paren": "list-custom-upper-alpha",
  "lower-roman-paren": "list-custom-lower-roman",
  "upper-roman-paren": "list-custom-upper-roman",
};

export const List = (props: ParentProps & ListProps) => {
  // Determine tag: 'ul' for discs, 'ol' for everything else
  const Tag = () => (props.type === "disc" ? "ul" : "ol");

  const effectivePrefix = () => {
    if (props.markerPrefix !== undefined) return props.markerPrefix;
    if (props.type?.endsWith("-paren")) return "(";
    return "";
  };

  const effectiveSuffix = () => {
    if (props.markerSuffix !== undefined) return props.markerSuffix;
    if (props.type?.endsWith("-paren")) return ")";
    if (props.markerPrefix !== undefined) return "";
    return ".";
  };

  return (
    <div class={twJoin("text-column", props.class)}>
      <Dynamic
        component={Tag()}
        style={`${props.style ?? ""}; --marker-prefix: "${effectivePrefix()}"; --marker-suffix: "${effectiveSuffix()}"; --marker-font-weight: ${props.markerBold ? "bold" : "normal"}`}
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
    <li
      class={twJoin(
        "relative",
        props.class,
        store.show_areas && "left-right-background-divide",
      )}
      style={props.style}
    >
      {props.children}
    </li>
  );
};
