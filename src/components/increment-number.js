import React, { Component } from "react";

export default class IncrementNumber extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      incrementBy: 1,
    };
  }

  handleCountUp() {
    // TODO
  }

  handleCountDown() {
    // TODO
  }

  render() {
    return (
      <div>
        <button>Up</button>
        <h1>0</h1>
        <button>Down</button>
      </div>
    );
  }
}
