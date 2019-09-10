import React, { Component } from "react";
import { Menu } from "antd";
import "./index.css";

export default class NavTop extends Component {
  render() {
    return (
      <div>
        <div className="logo">后台管理系统</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.props.curSystemId]}
          
          style={{ lineHeight: "64px" }}
          onClick={this.props.onClickSystem}

        >
          {this.props.menuList.map(item => {
            return (
              <Menu.Item
                key={item.id}
              >
                {item.title}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}
