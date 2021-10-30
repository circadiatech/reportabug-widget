import React from "react";
import { Header, FixedButton } from "./components";

export default function App({ config }) {
  return (
    <div className="text-center">
      <Header title={config.title} />
      <FixedButton />
    </div>
  );
}
