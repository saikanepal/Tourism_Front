import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SiderBarProvider } from "./Context/SiderBarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SiderBarProvider>
      <App />
    </SiderBarProvider>
  </React.StrictMode>
);
