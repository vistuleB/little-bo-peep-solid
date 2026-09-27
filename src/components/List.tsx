import { ParentProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

type ListMarkerType =
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
  marker?: ListMarkerType;
  markerPrefix?: string;
  markerSuffix?: string;
  markerFontFamily?: string;
}

const markerMap: Record<ListMarkerType, string> = {
  "disc": "list-disc",
  "decimal": "list-marker list-type-decimal",
  "lower-alpha": "list-marker list-type-lower-alpha",
  "upper-alpha": "list-marker list-type-upper-alpha",
  "lower-roman": "list-marker list-type-lower-roman",
  "upper-roman": "list-marker list-type-upper-roman",
  "lower-alpha-paren": "list-marker list-type-lower-alpha",
  "upper-alpha-paren": "list-marker list-type-upper-alpha",
  "lower-roman-paren": "list-marker list-type-lower-roman",
  "upper-roman-paren": "list-marker list-type-upper-roman",
};

export const List = (props: ParentProps & ListProps) => {
  // Determine tag: 'ul' for discs, 'ol' for everything else
  const Tag = () => (props.marker === "disc" ? "ul" : "ol");

  const effectivePrefix = () => {
    if (props.markerPrefix !== undefined) return props.markerPrefix;
    if (props.marker?.endsWith("-paren")) return "(";
    return "";
  };

  const effectiveSuffix = () => {
    if (props.markerSuffix !== undefined) return props.markerSuffix;
    if (props.marker?.endsWith("-paren")) return ")";
    if (props.markerPrefix !== undefined) return "";
    return ".";
  };

  const customMarker = () =>
    props.marker?.endsWith("-paren") ||
    props.markerPrefix !== undefined ||
    props.markerSuffix !== undefined;

  const defaultMarkerFont = "Baskerville Regular";

  return (
    // recently removed: 'from_list_primitive' class, whose
    // remnants you can still (?) find in app.css:
    <div class={twJoin("text-column", props.class)}>
      <Dynamic
        component={Tag()}
        style={`${props.style ?? ""};--marker-prefix:"${effectivePrefix()}";--marker-suffix:"${effectiveSuffix()}";--marker-font-family:"${props.markerFontFamily?props.markerFontFamily:defaultMarkerFont}"`}
        class={twJoin(
          "pl-10 pr-4", // was "px-4 ml-6" until recently
          "flex flex-col",
          markerMap[props.marker ?? "disc"],
          props.marker !== "disc" && customMarker() && "list-custom-marker",
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
