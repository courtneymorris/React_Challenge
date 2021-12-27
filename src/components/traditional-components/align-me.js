import React, { Component } from "react";

export default class AlignMe extends Component {
  constructor() {
    super();

    this.state = {
      alignText: "center",
    };

    this.handleAlignLeft = this.handleAlignLeft.bind(this);
    this.handleAlignCenter = this.handleAlignCenter.bind(this);
    this.handleAlignRight = this.handleAlignRight.bind(this);
  }

  handleAlignLeft() {
    this.setState({
      alignText: "left",
    });
  }
  handleAlignCenter() {
    this.setState({
      alignText: "center",
    });
  }
  handleAlignRight() {
    this.setState({
      alignText: "right",
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: this.state.alignText }}>Align Me</h1>
        <div>
          <button className="align-left" onClick={this.handleAlignLeft}>
            Left
          </button>
          <button className="align-center" onClick={this.handleAlignCenter}>
            Center
          </button>
          <button className="align-right" onClick={this.handleAlignRight}>
            Right
          </button>
        </div>
      </div>
    );
  }
}
