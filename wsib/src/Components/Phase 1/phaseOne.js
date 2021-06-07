import React, { Component } from "react";
import "./phaseOne.css";

class PhaseOne extends Component {
  state = {
    colorOne: 'blue',
    colorTwo: 'purple'
  }

  onChangeButtonOne = () => {
    if (this.state.colorOne === 'blue') {
      this.setState({ colorOne: 'green' });
    } else {
      this.setState({ colorOne: 'blue' });
    }
  }

  onChangeButtonTwo = () => {
    if (this.state.colorTwo === 'purple') {
      this.setState({ colorTwo: 'red' });
    } else {
      this.setState({ colorTwo: 'purple' });
    }
  }

  render() {
    return (
      <div className="phaseOne">
        <h1 className="phaseTitle"> Phase 1 </h1>
        <button className="htmlButton" style={{ backgroundColor: this.state.colorOne }} onClick={this.onChangeButtonOne}>Click Me If You Like WSIB!</button>
        <button className="htmlButton" style={{ backgroundColor: this.state.colorTwo }} onClick={this.onChangeButtonTwo}>Click Me If You Want To Get Hired!</button>
      </div>
    );
  }
}

export default PhaseOne;
