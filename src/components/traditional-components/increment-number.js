import React, { Component } from "react";

export default class IncrementNumber extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      incrementUp: 1,
      incrementDown: -1,
    };

    this.handleCountUp = this.handleCountUp.bind(this);
    this.handleCountDown = this.handleCountDown.bind(this);
  }

  handleCountUp() {
    this.setState({
      counter: this.state.counter + this.state.incrementUp,
    });
  }

  handleCountDown() {
    this.setState({
      counter: this.state.counter + this.state.incrementDown,
    });
  }

  render() {
    return (
      <div className="increment-num">
        <button onClick={this.handleCountUp}>Up</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleCountDown}>Down</button>
      </div>
    );
  }
}
