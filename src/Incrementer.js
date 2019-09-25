import React from "react";
import { connect } from "react-redux";

// Actions
import { increment } from "./redux/actions";

function Incrementer(props) {
  const step = props.step;

  const prefix = step > 0 ? "Inc" : "Dec";

  if (!step)
    return (
      <div className="component">
        <p>I DO NOTHING</p>
      </div>
    );

  return (
    <div className="col-lg-6 my-2">
      <div className="component">
        <p>
          {prefix.toUpperCase()}REMENTER by {Math.abs(step)}
        </p>
        <p>{props.counter}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={() => props.incrementCounter(step)}
        >
          {prefix}rement
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: step => dispatch(increment(step))
  };
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Incrementer);
