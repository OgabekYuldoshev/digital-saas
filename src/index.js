import "core-js";
import "./bootstrap";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ConnectedRouter } from "connected-react-router";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import config from "./connections";
import { persist, store } from "./store";
import { history } from "./services";
import "./assets/styles/index.scss";
import App from "./App";
import { Auth } from "./module/auth/containers";
import "antd/dist/antd.min.css";

const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Suspense fallback="">
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persist}>
          <QueryClientProvider client={queryClient}>
            <Auth>
              <ConnectedRouter {...{ history }}>
                {config.app.env === "development" && (
                  <ReactQueryDevtools position="bottom-right" />
                )}
                <App />
              </ConnectedRouter>
            </Auth>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
)


