import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { NavContextProvider } from "./store/NavContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </React.StrictMode>
);
