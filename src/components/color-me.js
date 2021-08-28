import React, { Component } from "react";

export default class ColorMe extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Color Me</h1>
        <input placeholder="Color..."></input>
        <input placeholder="Message..."></input>
        <button>Submit</button>
      </div>
    );
  }
}
