import React, { Component } from "react";
import Button from "./button";
import "./phaseTwo.css";

class PhaseTwo extends Component {
  state = {
    colorOne: "blue",
    colorTwo: "purple",
  };

  onChangeButtonOne = () => {
    if (this.state.colorOne === "blue") {
      this.setState({ colorOne: "green" });
    } else {
      this.setState({ colorOne: "blue" });
    }
  };

  onChangeButtonTwo = () => {
    if (this.state.colorTwo === "purple") {
      this.setState({ colorTwo: "red" });
    } else {
      this.setState({ colorTwo: "purple" });
    }
  };

  render() {
    return (
      <div className="phaseTwo">
        <h1 className="phaseTitle"> Phase 2 </h1>
        <Button
          colour={this.state.colorOne}
          colourChange={() => this.onChangeButtonOne()}
          msg={"Click Me If You Like WSIB"}
        />
        <Button
          colour={this.state.colorTwo}
          colourChange={() => this.onChangeButtonTwo()}
          msg={"Click Me If You Want To Get Hired!"}
        />
        <br />
        <br />
      </div>
    );
  }
}

export default PhaseTwo;
