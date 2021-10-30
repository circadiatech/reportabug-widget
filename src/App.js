import React from "react";
import Header from "./components/Header";
import FixedButton from "./Components/FixedButton";

export default function App({ config }) {
  return (
    <div>
      <Header title={config.title} />
      <FixedButton />
    </div>
  );
}
