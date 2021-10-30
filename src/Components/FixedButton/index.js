import React from "react";
import "./button.css";

function index() {
  return (
    <div role="group" className="buttonDiv">
      <button
        type="button"
        className="floatingButton"
        style={{
          position: "fixed",
          bottom: "48px",
          right: "30px",
          zIndex: "50",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "18px",
            display: "none",
            color: "#ffffff",
          }}
        >
          <strong>Report A Bug</strong>
        </p>
      </button>
    </div>
  );
}

export default index;
