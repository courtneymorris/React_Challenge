import React, { Component } from "react";

export default class Resizer extends Component {
  constructor(props) {
    super();

    this.state = {
      size: 12,
      sizeInput: 1,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(newSize) {
    this.setState({
      size: newSize,
    });
  }

  render() {
    const formattedSize = `${this.state.size}px`;
    return (
      <div className="resizer-wrapper">
        <h3 style={{ fontSize: formattedSize }}>{formattedSize}</h3>
        <input
          type="number"
          value={this.state.sizeInput}
          onChange={(event) =>
            this.setState({ sizeInput: event.target.valueAsNumber })
          }
        />
        <button
          onClick={() =>
            this.handleResize(this.state.size + this.state.sizeInput)
          }
        >
          Increase
        </button>
        <button
          onClick={() =>
            this.handleResize(this.state.size - this.state.sizeInput)
          }
        >
          Decrease
        </button>
      </div>
    );
  }
}
