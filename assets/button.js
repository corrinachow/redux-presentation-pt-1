import React, { useState } from "react";
import { Heading } from "spectacle";

const Button = () => {
  const [color, setColor] = useState("Tomato");

  return (
    <>
      <Heading size={4} textColor={color}>
        {color}
      </Heading>
      <button
        style={{
          fontSize: "1.5rem",
          color: "#121212",
          padding: "0.5rem",
          marginTop: "1rem",
          background: "#eee",
          border: "none",
          borderRadius: "4px"
        }}
        onClick={() => setColor(color === "Tomato" ? "DodgerBlue" : "Tomato")}
      >
        <span>Click me</span>
      </button>
    </>
  );
};

export default Button;
