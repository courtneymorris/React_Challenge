import React, { Component } from "react";

import AlignMe from "./traditional-components/align-me";
import HideMe from "./traditional-components/hide-me";
import IncrementNumber from "./traditional-components/increment-number";
import IncrementText from "./traditional-components/increment-text";
import ColorMe from "./traditional-components/color-me";
import ToggleClock from "./traditional-components/toggle-clock";

import Resizer from "./traditional-components/another-increment-text";
import Color from "./traditional-components/another-color-me";

import Alignment from "./hooks/hook-align-me";
import Toggle from "./hooks/hook-hide-me";
import ColorHook from "./hooks/hook-color-me";
import Counter from "./hooks/hook-increment-number";
import HookResizer from "./hooks/hook-increment-text";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      colorExists: true,
    };
  }
  render() {
    return (
      <div className="app">
        {/* <h1>Using Traditional Components</h1>
        <hr />   */}

        <div className="section">
          <AlignMe />
        </div>

        <hr />

        <div className="section">
          <HideMe />
        </div>

        <hr />

        <div className="section">
          <IncrementNumber />
        </div>

        <hr />

        <div className="section">
          <IncrementText />
        </div>

        <hr />

        <div className="section">
          <ColorMe />
        </div>

        <hr />

        <div className="section">
          <ToggleClock />
        </div>

        <hr />
        {/* 
        <div>
          <Resizer />
        </div>

        <hr />

        <div>
          <Color />
        </div>

        <hr />
        <h1>Using Hooks</h1>
        <hr />

        <div>
          <Alignment />
        </div>

        <hr />

        <div>
          <Toggle />
        </div>

        <hr />

        <div>
          <ColorHook />
        </div>

        <hr />

        <div>
          <Counter />
        </div>

        <hr />

        <div>
          <HookResizer />
        </div> */}
      </div>
    );
  }
}
