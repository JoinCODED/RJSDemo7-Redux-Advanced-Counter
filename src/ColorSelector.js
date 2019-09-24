import React from "react";
import colors from "./colors";

function ColorSelector() {
  const colorButtons = colors.map(color => {
    const size = 10;
    return (
      <div
        className="btn"
        style={{ backgroundColor: color, height: size, width: size }}
      />
    );
  });
  return <div className="col-lg-6 btn-group m-5">{colorButtons}</div>;
}

export default ColorSelector;
