import React from "react";
import { Header, FixedButton } from "./components";
import ScreenshotButton from "./components/ScreenshotButton";

export default function App({ config }) {
  return (
    <div className="text-center">
      <Header title={config.title} />
      <ScreenshotButton />
      <FixedButton />
    </div>
  );
}
