import React, { Component } from "react";

import Incrementer from "./Incrementer";
import Decrementer from "./Decrementer";

class App extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    let newNumber = this.state.counter + 1;
    this.setState({ counter: newNumber });
  };

  decrementCounter = () => {
    let newNumber = this.state.counter - 1;
    this.setState({ counter: newNumber });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <Incrementer increment={this.incrementCounter} />
          <Decrementer decrement={this.decrementCounter} />
        </div>
      </div>
    );
  }
}

export default App;
