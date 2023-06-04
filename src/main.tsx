import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { invoke } from "@tauri-apps/api";

invoke("greet", { name: "World " }).then((response) => console.log(response));

import init, { greet } from "../hello-wasm/pkg/hello_wasm.js";
init().then(() => {
  greet("WebAssembly");
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
