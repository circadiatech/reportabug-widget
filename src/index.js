import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const init = (config) => {
  const widgetDiv = document.createElement("div");
  widgetDiv.setAttribute("id", "app-widget");
  document.body.appendChild(widgetDiv);

  ReactDOM.render(
    <App config={config} />,
    document.querySelector("#app-widget")
  );
};