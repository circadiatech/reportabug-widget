import React from "react";
import ScreenshotButton from "./components/ScreenshotButton";
import { Header, FixedButton } from "./components";

export default function App({ config }) {
  return (
    <div className="text-center">
      <Header title={config.title} />
      <ScreenshotButton />
      <FixedButton />
    </div>
  );
}
