import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Container from "~/components/Container";

import "./app.css";
import { StoreProvider } from "./store/StoreProvider";
import PanelButton from "./components/PanelButton";
import Panel from "./components/Panel";

export default function App() {
  return (
    <StoreProvider>
      <Router root={(props) => (
          <>
            <PanelButton />
            <Panel />
            <Container>
              <Suspense>{props.children}</Suspense>
            </Container>
          </>
        )}>
        <FileRoutes />
      </Router>
    </StoreProvider>
  );
}
