import React, { Component } from "react";

export default class Color extends Component {
  constructor(props) {
    super();

    this.state = {
      color: "black",
      text: "Color Me!",
      colorInput: "black",
      textInput: "Color Me!",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    this.setState({
      color: this.state.colorInput,
      text: this.state.textInput,
    });
  }

  render() {
    return (
      <div className="color-wrapper">
        <h3 style={{ color: this.state.color }}>{this.state.text}</h3>
        <input
          name="colorInput"
          value={this.state.colorInput}
          type="text"
          onChange={this.handleChange}
        />
        <input
          name="textInput"
          value={this.state.textInput}
          type="text"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
