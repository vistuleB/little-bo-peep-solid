import { Meta, MetaProvider } from "@solidjs/meta";
import { StoreProvider } from "./store/StoreProvider";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import HeaderButtons from "./components/HeaderButtons";
import Container from "~/components/Container";
import { Suspense } from "solid-js";
import "./app.css";
import { setLayoutConstantsAsCssVars } from "./constants";

export default function App() {
  setLayoutConstantsAsCssVars();
  return (
    <MetaProvider>
      <Meta property="og:image" content="images/lbp_preview.png"></Meta>
      <StoreProvider>
        <Router
          root={(props) => (
            <>
              <HeaderButtons />
              {/* <HamburgerPanel/> */}
              <Container>
                <Suspense>{props.children}</Suspense>
              </Container>
            </>
          )}
        >
          <FileRoutes />
        </Router>
      </StoreProvider>
    </MetaProvider>
  );
}
