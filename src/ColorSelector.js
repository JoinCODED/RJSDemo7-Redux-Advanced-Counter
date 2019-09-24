import React from "react";
import { connect } from "react-redux";

// Data
import colors from "./colors";

// Actions
import { changeColor } from "./stores/actions";

function ColorSelector(props) {
  const colorButtons = colors.map(color => {
    const size = 10;
    return (
      <div
        key={color}
        className="btn"
        onClick={() => props.changeColor(color)}
        style={{ backgroundColor: color, height: size, width: size }}
      />
    );
  });
  return <div className="col-lg-6 btn-group m-5">{colorButtons}</div>;
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    changeColor: color => dispatch(changeColor(color))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSelector);
