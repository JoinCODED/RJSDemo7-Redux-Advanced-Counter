import React from "react";
import { connect } from "react-redux";

// Actions
import { changeColor } from "./redux/actionCreators";

const ColorButton = props => {
  const color = props.color;
  const height = 10;
  return (
    <div
      key={color}
      className="btn"
      onClick={() => props.changeColor(color)}
      style={{ backgroundColor: color, height: height }}
    />
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    changeColor: color => dispatch(changeColor(color))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton);
