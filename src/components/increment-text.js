import React, { Component } from "react";

export default class IncrementText extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>12px</h1>
        <input placeholder="Increment by..."></input>
        <button>Decrease</button>
        <button>Increase</button>
      </div>
    );
  }
}
