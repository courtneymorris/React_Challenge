import React, { Component } from "react";

export default class ColorMe extends Component {
  constructor() {
    super();

    this.state = {
      textColor: "black",
      heading: "Color Me",
    };

    this.newColor = this.state.textColor;
    this.newHeading = this.state.heading;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeHeading = this.handleChangeHeading.bind(this);
  }

  handleChangeColor(event) {
    this.newColor = event.target.value;
  }

  handleChangeHeading(event) {
    this.newHeading = event.target.value;
  }

  handleSubmit(event) {
    this.setState({
      textColor: this.newColor,
      heading: this.newHeading,
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.textColor }}>{this.state.heading}</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="color"
              name="textColor"
              placeholder="Color..."
              onChange={this.handleChangeColor}
            ></input>
            <input
              type="text"
              name="heading"
              placeholder="Message..."
              onChange={this.handleChangeHeading}
            ></input>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
