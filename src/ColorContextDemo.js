import React, { useContext } from "react";
import { ColorContext } from "./App";

function ColorContextDemo() {
  const mycolors = useContext(ColorContext);
  return (
    <div>
      <div style={{ backgroundColor: mycolors.red }}>
        <h2> Hi </h2>
      </div>
      <div style={{ backgroundColor: mycolors.green }}>
        <h2> Hello </h2>
      </div>
      <div style={{ backgroundColor: mycolors.blue }}>
        <h2> How r you? </h2>
      </div>
    </div>
  );
}

export default ColorContextDemo;
