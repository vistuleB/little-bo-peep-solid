import { useLocation } from "@solidjs/router";
import { createEffect, ParentProps } from "solid-js";
import SVGDefs from "~/components/SVGDefs";
import { ensurePrerenderedMathJaxRouteCache } from "~/utils/prerenderedMathJax";

export default (props: ParentProps) => {
  const location = useLocation();

  createEffect(() => {
    ensurePrerenderedMathJaxRouteCache(location.pathname);
  });

  return (
    <>
      {props.children}
      <SVGDefs />
    </>
  );
};
