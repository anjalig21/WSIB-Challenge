import React, { useState } from "react";
import "./phaseThree.css";
import Button from "./button";

const PhaseThree = () => {
  const [colorOne, setColorOne] = useState("blue");
  const [colorTwo, setColorTwo] = useState("purple");

  const onChangeButtonOne = () => {
    if (colorOne === "blue") {
      setColorOne("green");
    } else {
      setColorOne("blue");
    }
  };

  const onChangeButtonTwo = () => {
    if (colorTwo === "purple") {
      setColorTwo("red");
    } else {
      setColorTwo("purple");
    }
  };

  return (
    <div className="phaseThree">
      <h1 className="phaseTitle"> Phase 3 </h1>
      <Button
        colour={colorOne}
        colourChange={() => onChangeButtonOne()}
        msg={"Click Me If You Like WSIB"}
      />
      <Button
        colour={colorTwo}
        colourChange={() => onChangeButtonTwo()}
        msg={"Click Me If You Want To Get Hired!"}
      />
      <br />
      <br />
    </div>
  );
};

export default PhaseThree;
