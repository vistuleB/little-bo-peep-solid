// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

function resolveMathJAXEnv(): string {
  const version_offline = `${import.meta.env.MATHJAX_VERSION}-${import.meta.env.OFFLINE_MODE}`;
  switch (version_offline) {
    case "3-true":
      return "/mathjax3/tex-svg.js";

    case "4-true":
      return "/mathjax4/tex-svg.js";

    case "3-false":
      return "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.min.js";

    case "4-false":
      return "https://cdn.jsdelivr.net/npm/mathjax@4.1.3/tex-svg.js";

    default:
      console.warn("Cannot parse MATHJAX related env");
      console.error(
        "MATHJAX_VERSION should be 3 or 4 and OFFLINE_MODE should be true or false",
      );
      console.warn("Defaulting to CDN mathjax version 3");
      return "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.min.js";
  }
}

function resolvePreviewImageURL(): string {
  const publicURL = process.env.PUBLIC_URL?.replace(/\/$/, "");
  const path = "/images/lbp_preview.png";
  return publicURL ? `${publicURL}${path}` : path;
}

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Baskerville Calculus, an interactive calculus textbook."
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Baskerville Calculus" />
          <meta
            property="og:description"
            content="An interactive calculus textbook."
          />
          <meta property="og:image" content={resolvePreviewImageURL()} />
          <meta name="twitter:card" content="summary_large_image" />
          {
            import.meta.env.VITE_ENV === "LOCAL" ? (
              <>
                <link rel="icon" href="/favicon-local.svg" />
                <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/apple-touch-icon-local.png"
                />
                <link
                  rel="apple-touch-startup-image"
                  href="/apple-touch-icon-local.png"
                />
              </>
            ) : (
              <>
                <link rel="icon" href="/favicon-dev.ico" />
                <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/apple-touch-icon-dev.png"
                />
                <link
                  rel="apple-touch-startup-image"
                  href="/apple-touch-icon-dev.png"
                />
                <link
                  rel="mask-icon"
                  href="/safari-pinned-tab-dev.svg"
                  color="#5bbad5"
                />
                <link
                  rel="apple-touch-icon-precomposed"
                  href="/apple-touch-icon-dev.png"
                />
                <script
                  defer
                  src="https://cloud.umami.is/script.js"
                  data-website-id="6ef76d0c-cf74-4368-ad72-55a1f5091018"
                ></script>
              </>
            )
            // : (
            //   <>
            //     <link rel="icon" href="/favicon.ico" />
            //     <link
            //       rel="apple-touch-icon"
            //       sizes="180x180"
            //       href="/apple-touch-icon.png"
            //     />
            //     <link
            //       rel="apple-touch-startup-image"
            //       href="/apple-touch-icon.png"
            //     />
            //     <link
            //       rel="mask-icon"
            //       href="/safari-pinned-tab.svg"
            //       color="#5bbad5"
            //     />
            //     <link
            //       rel="apple-touch-icon-precomposed"
            //       href="/apple-touch-icon.png"
            //     />
            //   </>
            // )
          }

          <meta name="format-detection" content="telephone=no" />
          <script
            innerHTML={`window.env = { VITE_ENV: "${import.meta.env.VITE_ENV}" };`}
          />
          <script src="/extras.js" defer={true} />
          <script src="/mathjax_setup.js" />
          <script
            type="text/javascript"
            src={resolveMathJAXEnv()}
            defer={true}
          />

          <title>Baskerville Calculus</title>

          {assets}
        </head>
        {/* needed width:0 to avoid an overlapping
        div that was fucking with pointer events: */}
        <body style="width:0;">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
