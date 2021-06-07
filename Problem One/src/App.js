import React, { Component } from "react";
import "./App.css";
import PhaseOne from "./Components/Phase 1/phaseOne";
import PhaseTwo from "./Components/Phase 2/phaseTwo";
import PhaseThree from "./Components/Phase 3/phaseThree";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhaseOne/>
        <PhaseTwo/>
        <PhaseThree/>
      </div>
    );
  }
}

export default App;
