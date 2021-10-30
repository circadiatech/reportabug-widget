import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const init = (config) => {
  ReactDOM.render(
    <App config={config} />,
    document.getElementById("app-widget")
  );
};
