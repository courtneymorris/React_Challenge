import React, { Component } from "react";

import AlignMe from "./traditional-components/align-me";
import HideMe from "./traditional-components/hide-me";
import IncrementNumber from "./traditional-components/increment-number";
import IncrementText from "./traditional-components/increment-text";
import ColorMe from "./traditional-components/color-me";
import ToggleClock from "./traditional-components/toggle-clock";

import Resizer from "./alex-increment-text";
import Color from "./alex-color-me";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>My Solutions:</h1>

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
        <h1>Alex's Solutions:</h1>
        <hr />

        <div>
          <ToggleClock />
        </div>

        <hr />

        <div>
          <Resizer />
        </div>

        <hr />

        <div>
          <Color />
        </div>
      </div>
    );
  }
}
