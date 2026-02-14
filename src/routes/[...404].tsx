import { A } from "@solidjs/router";
import useNoScrollRestoration from "~/hooks/useNoScrollRestoration";

export default function NotFound() {
  useNoScrollRestoration();

  return (
    <div class="mb-8">
      <img
        src="/non-build-img/404.png"
        alt="404 - Page not found"
        class="max-w-full h-auto mx-auto"
        style="max-height: 400px;"
      />
    </div>
  );
}
