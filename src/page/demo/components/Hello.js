import React from "react";

class Hello extends React.Component{
  render() {
    return(
      <h5>Hello <b className="blue-text">{this.props.text}</b></h5>
    )
  }
}

export default Hello;
