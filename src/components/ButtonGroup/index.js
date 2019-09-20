import React, { Component } from "react";
import { findButtons } from "../../Api/system";
import { Button } from "antd";
import "./index.css";

export default class ButtonGroup extends Component {
  state = {
    buttons: []
  };
  async componentDidMount() {
    const { data } = await findButtons(this.props.id);
    this.setState({
      buttons: data
    });
  }
  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        {this.state.buttons.map(item => {
          return (
            <Button
              key={item.id}
              icon={item.icon}
              type="primary"
              onClick={() => this.props.clickEvents(item.event)}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
    );
  }
}
