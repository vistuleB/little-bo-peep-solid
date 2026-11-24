import { ParentProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export default function SourceFragment(
  props: ParentProps<{
    file: string;
    line: string | number;
    block?: boolean;
  }>,
) {
  return (
    <Dynamic
      component={props.block ? "div" : "span"}
      style={{ display: "contents" }}
      data-wly-file={props.file}
      data-wly-line={props.line}
      data-wly-revision={import.meta.env.EDITOR_REVISION || ""}
    >
      {props.children}
    </Dynamic>
  );
}
