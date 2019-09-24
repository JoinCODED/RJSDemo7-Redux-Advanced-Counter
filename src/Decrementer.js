import React from "react";
import { connect } from "react-redux";

// Actions
import { increment } from "./stores/actions";

function Decrementer(props) {
  return (
    <div className="col-lg-6">
      <div className="component">
        <p>DECREMENTER</p>
        <p>{props.counter}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={props.decrementCounter}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    decrementCounter: () => dispatch(increment(-1))
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
)(Decrementer);
