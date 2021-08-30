import React, { Component } from "react";

export default class IncrementText extends Component {
  constructor() {
    super();

    this.state = {
      heading: 12,
      increment: 2,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTextSizeIncrease = this.handleTextSizeIncrease.bind(this);
    this.handleTextSizeDecrease = this.handleTextSizeDecrease.bind(this);
  }

  handleChange() {
    this.setState({
      increment: event.target.value,
    });
  }

  handleTextSizeIncrease() {
    for (let i = this.state.heading; i < 56; i++) {
      this.setState({
        heading: this.state.heading + parseInt(this.state.increment),
      });
    }
  }

  handleTextSizeDecrease() {
    for (let i = this.state.heading; i > 2; i--) {
      this.setState({
        heading: this.state.heading - this.state.increment,
      });
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: this.state.heading }}>{this.state.heading}px</h1>
        <input
          type="number"
          onChange={this.handleChange}
          placeholder="Increment by..."
        ></input>
        <button onClick={this.handleTextSizeIncrease}>Increase</button>
        <button onClick={this.handleTextSizeDecrease}>Decrease</button>
      </div>
    );
  }
}
