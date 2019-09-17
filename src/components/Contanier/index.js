import React, { Component } from "react";

export default class Contanier extends Component {
  componentWillMount() {
    this.setState({
      height: document.body.clientHeight
    });
  }
  render() {
    const {height} = this.state
    return (
      <div style={{ padding: 24, background: "#fff" ,height:height-130}}>
        {this.props.children}
      </div>
    );
  }
}
