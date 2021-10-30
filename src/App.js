import React from "react";
import { Header } from "./components";
import FixedButton from "./Components/FixedButton";

export default function App({ config }) {
  return (
    <div className="text-center">
      <Header title={config.title} />
      <FixedButton />
    </div>
  );
}
