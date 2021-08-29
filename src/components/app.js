import React, { Component } from "react";

import AlignMe from "./align-me";
import HideMe from "./hide-me";
import IncrementNumber from "./increment-number";
import IncrementText from "./increment-text";
import ColorMe from "./color-me";
import ToggleClock from "./toggle-clock";
import { breakStatement } from "babel-types";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="component">
          <AlignMe />
        </div>
        <div className="component">
          <HideMe />
        </div>
        <div className="component">
          <IncrementNumber />
        </div>
        <div className="component">
          <IncrementText />
        </div>
        <div className="component">
          <ColorMe />
        </div>
        <div className="component">
          <ToggleClock />
        </div>
      </div>
    );
  }
}
