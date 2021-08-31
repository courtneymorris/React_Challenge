import React, { useState } from "react";

export default function textResizer() {
  const [fontSize, setFontSize] = useState(14);
  const [incrementInput, setIncrementInput] = useState(2);

  const formattedSize = `${fontSize}px`;

  return (
    <div className="">
      <h3 style={{ fontSize: formattedSize }}>{formattedSize}</h3>

      <div className="input-box-wrapper">
        <input
          type="number"
          onChange={(event) => setIncrementInput(event.target.valueAsNumber)}
        />
      </div>

      <div className="buttons-wrapper">
        <button onClick={() => setFontSize(fontSize + incrementInput)}>
          Increase Font Size
        </button>
        <button onClick={() => setFontSize(fontSize - incrementInput)}>
          Decrease Font Size
        </button>
      </div>
    </div>
  );
}
