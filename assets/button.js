import React, { useState } from "react";
import { Heading } from "spectacle";

const Button = () => {
  const [color, setColor] = useState("Tomato");

  return (
    <>
      <Heading textColor={color}>{color}</Heading>
      <button
        onClick={() => setColor(color === "Tomato" ? "DodgerBlue" : "Tomato")}
      >
        <span>Click me</span>
      </button>
    </>
  );
};

export default Button;
