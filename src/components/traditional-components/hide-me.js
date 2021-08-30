import React, { Component } from "react";

export default class HideMe extends Component {
  constructor() {
    super();

    this.state = {
      heading: "Hide Me",
      isShown: true,
      buttonText: "Hide Me",
    };

    this.toggleShown = this.toggleShown.bind(this);
  }

  toggleShown() {
    if (this.state.isShown) {
      this.setState({ heading: "", isShown: false, buttonText: "Show Me" });
    } else {
      this.setState({
        heading: "Hide Me",
        isShown: true,
        buttonText: "Hide Me",
      });
    }
  }

  render() {
    return (
      <div>
        <h1 isShown={this.state.isShown}>{this.state.heading}</h1>
        <button onClick={this.toggleShown}>{this.state.buttonText}</button>
      </div>
    );
  }
}
