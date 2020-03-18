import React from "react";

// Data
import colors from "./colors";

// Components
import ColorButton from "./ColorButton";

const ColorSelector = () => {
  const colorButtons = colors.map(color => (
    <ColorButton key={color} color={color} />
  ));
  return <div className="col-lg-6 btn-group m-5">{colorButtons}</div>;
};

export default ColorSelector;
