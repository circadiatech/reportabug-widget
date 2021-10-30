import React from "react";
import Header from "./Header";
import TakeABug from "./components/reportABug";

export default function App({ config }) {
  return (
    <div>
      <Header title={config.title} />
      <TakeABug />
    </div>
  );
}
