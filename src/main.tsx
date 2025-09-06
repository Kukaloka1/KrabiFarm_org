import React from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "@/lib/i18n";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
