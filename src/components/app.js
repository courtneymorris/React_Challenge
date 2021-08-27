import React, { Component } from "react";

import AlignMe from "./align-me";
import HideMe from "./hide-me";
import IncrementNumber from "./increment-number";
import IncrementText from "./increment-text";
import ColorMe from "./color-me";
import ToggleClock from "./toggle-clock";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AlignMe />
        <HideMe />
        <IncrementNumber />
        <IncrementText />
        <ColorMe />
        <ToggleClock />
      </div>
    );
  }
}
