import React, { Component } from "react";

export default class Contanier extends Component {
  render() {
    return (
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        {this.props.children}
      </div>
    );
  }
}
