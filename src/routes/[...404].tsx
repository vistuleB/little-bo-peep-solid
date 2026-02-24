import { A } from "@solidjs/router";
import useNoScrollRestoration from "~/hooks/useNoScrollRestoration";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

export default function NotFound() {
  useNoScrollRestoration();

  return (
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        src="/non-build-img/404.png"
        alt="404 - Page not found"
        style={`max-width:${mainColumnWidth() * 0.7}px;max-height:65vh;`}
      />
    </div>
  );
}
