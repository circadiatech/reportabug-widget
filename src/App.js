import React from "react";
import Header from "./Header";

export default function App({ config }) {
  return (
    <div>
      <Header title={config.title} />
    </div>
  );
}
