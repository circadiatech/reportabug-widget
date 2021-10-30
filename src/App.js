import React from "react";
import Header from "./Header";
import FixedButton from "./Components/FixedButton";
import "./index.css";

export default function App({ config }) {
  return (
    <div className="text-center">
      <Header />
      <h1>React Bug Widget</h1>
      <FixedButton />
    </div>
  );
}
