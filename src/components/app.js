import React, { Component } from "react";

import AlignMe from "./traditional-components/align-me";
import HideMe from "./traditional-components/hide-me";
import IncrementNumber from "./traditional-components/increment-number";
import IncrementText from "./traditional-components/increment-text";
import ColorMe from "./traditional-components/color-me";
import ToggleClock from "./traditional-components/toggle-clock";

import Resizer from "./traditional-components/alex-increment-text";
import Color from "./traditional-components/alex-color-me";

import Alignment from "./hooks/hook-align-me";
import Toggle from "./hooks/hook-hide-me";
import ColorHook from "./hooks/hook-color-me";
import Counter from "./hooks/hook-increment-number";

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
        <h1>Using Traditional Components</h1>
        <hr />
        <h2>My Solutions</h2>
        <hr />

        <div>
          <AlignMe />
        </div>

        <hr />

        <div>
          <HideMe />
        </div>

        <hr />

        <div>
          <IncrementNumber />
        </div>

        <hr />

        <div>
          <IncrementText />
        </div>

        <hr />

        <div>
          <ColorMe />
        </div>

        <hr />

        <div>
          <ToggleClock />
        </div>

        <hr />
        <h2>Alex's Solutions</h2>
        <hr />

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
      </div>
    );
  }
}
