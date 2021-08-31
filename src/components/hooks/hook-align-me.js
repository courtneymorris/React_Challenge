import React, { useState } from "react";

export default function alignment(props) {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="alignment-wrapper">
      <h3 style={{ textAlign: alignment }}>Align Me!</h3>

      <div className="buttons-wrapper">
        <button onClick={() => setAlignment("left")}>Left</button>
        <button onClick={() => setAlignment("center")}>Center</button>
        <button onClick={() => setAlignment("right")}>Right</button>
      </div>
    </div>
  );
}
