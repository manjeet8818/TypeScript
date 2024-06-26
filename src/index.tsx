import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!); // The '!' tells TypeScript that rootElement will not be null.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
