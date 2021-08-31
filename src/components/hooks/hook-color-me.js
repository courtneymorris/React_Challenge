import React, { useState, useEffect } from "react";

export default function color() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Color Me!");
  const [colorInput, setColorInput] = useState("black");
  const [textInput, setTextInput] = useState("Color Me!");

  useEffect(() => {
    console.log("Use Effect");
    window.onkeypress = (event) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };

    return () => (window.onkeypress = null);
  });

  const handleSubmit = () => {
    setColor(colorInput);
    setText(textInput);
  };

  return (
    <div className="">
      <h3 style={{ color }}>{text}</h3>
      <input
        type="text"
        value="colorInput"
        onChange={(event) => setColorInput(event.target.value)}
      />
      <input
        type="text"
        value="textInput"
        onChange={(event) => setTextInput(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
