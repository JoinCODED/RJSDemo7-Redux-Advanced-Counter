import React from "react";
import { connect } from "react-redux";

// Actions
import { increment } from "./stores/actions";

function Incrementer(props) {
  return (
    <div className="col-lg-6">
      <div className="component">
        <p>INCREMENTER</p>
        <p>{props.counter}</p>
        <p>{props.copyMe}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={props.incrementCounter}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(increment(1))
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
