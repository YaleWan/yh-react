import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { updateMenuName } from "../../store/menuName.js";
import "./index.css";

const { SubMenu } = Menu;

@connect(
  state => ({ menuName: state }),
  {
    updateMenuName
  }
)
class NavLeft extends Component {
  state = {
    currentKey: "",
    menuList: []
  };
  // 菜单点击
  handleClick = ({ item, key }) => {
    if (key == this.state.currentKey) {
      return false;
    }
    // 事件派发，自动调用reducer，通过reducer保存到store对象中

    this.props.updateMenuName(item.props.title);
    this.setState({
      currentKey: key
    });
    window.location.hash = "#" + key;
  };

  // 菜单渲染
  renderMenu = data => {
    if (!data) {
      return;
    }
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type="menu" />
                <span>{item.title}</span>
              </span>
            }
            key={item.id}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          title={item.title}
          key={item.key}
          // onClick={() => this.props.updateMenuName(item.title)}
        >
          <Icon type="menu" />
          <span>{item.title}</span>
        </Menu.Item>
      );
    });
  };
  homeHandleClick = () => {
    this.setState({
      currentKey: ""
    });
  };
  render() {
    const {history} = this.props
   
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/home']}
          selectedKeys = {[history.location.pathname]}
        >
          {this.renderMenu(this.props.menuList)}
        </Menu>
      </div>
    );
  }
}
export default withRouter(NavLeft);
