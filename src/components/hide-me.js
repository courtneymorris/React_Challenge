import React, { Component } from "react";

export default class HideMe extends Component {
  constructor() {
    super();

    this.state = {
      heading: "Hide Me",
      isShowing: true,
      buttonText: "Hide Me",
    };

    this.toggleShown = this.toggleShown.bind(this);
  }

  toggleShown() {
    if (this.state.isShowing) {
      this.setState({ heading: "", isShowing: false, buttonText: "Show Me" });
    } else {
      this.setState({
        heading: "Hide Me",
        isShowing: true,
        buttonText: "Hide Me",
      });
    }
  }

  render() {
    return (
      <div>
        <h1 isShowing={this.state.isShowing}>{this.state.heading}</h1>
        <button onClick={this.toggleShown}>{this.state.buttonText}</button>
      </div>
    );
  }
}
