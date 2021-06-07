import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  render() {
    return (
      <button
        className="htmlButtonProps"
        onClick={this.props.colourChange}
        style={{ backgroundColor: this.props.colour }}
      >
        {this.props.msg}
      </button>
    );
  }
}

export default Button;
