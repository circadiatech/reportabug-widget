import React from "react";
import Header from "./Header";

export default function App({ config }) {
  console.log("CONFIG", config);
  return (
    <div>
      <Header />
      <h1>React Bug Widget</h1>
    </div>
  );
}
