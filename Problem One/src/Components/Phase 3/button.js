import React from "react";
import "./button.css";

const Button = (props) => {
    const {colourChange, colour, msg} = props;
  return (
    <button
      className="htmlButtonHooks"
      onClick={colourChange}
      style={{ backgroundColor: colour }}
    >
      {msg}
    </button>
  );
};

export default Button;
