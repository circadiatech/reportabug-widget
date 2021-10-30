import React from "react";
import Header from "./components/Header";
import ScreenshotButton from "./components/ScreenshotButton";
import FixedButton from "./Components/FixedButton";

export default function App({ config }) {
  return (
    <div>
      <Header title={config.title} />
      <ScreenshotButton />
      <FixedButton />
    </div>
  );
}
