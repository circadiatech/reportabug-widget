import React from "react";
import Header from "./components/Header";

export default function App({ config }) {
  return (
    <div>
      <Header title={config.title} />
    </div>
  );
}
