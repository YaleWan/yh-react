import React, { Component } from "react";
import { Menu, Icon } from "antd";
import "./index.css";
import { connect } from "react-redux";
import { updateMenuName } from "../../store/menuName.js";
import menuList from "../../config/menuConfig.js";

const { SubMenu } = Menu;

@connect(
  state => ({ menuName: state }),
  {
    updateMenuName
  }
)
class NavLeft extends Component {
  state = {
    currentKey: ""
  };
  // 菜单点击
  handleClick = ({ item, key }) => {
    if (key == this.state.currentKey) {
      return false;
    }
    // 事件派发，自动调用reducer，通过reducer保存到store对象中

    this.setState({
      currentKey: key
    });
    // hashHistory.push(key);
  };
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);
    console.log('menuTreeNode', menuTreeNode)

    this.setState({
      menuTreeNode
    });
  }
  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (!item.children) {
        return (
          <Menu.Item title={item.title} key={item.key}>
            <Icon type="user" />
            {item.title}
          </Menu.Item>
        );
      }
      return (
        <SubMenu
          title={
            <span>
              <Icon type="menu" />
              <span>User</span>
            </span>
          }
          key={item.key}
        >
          {this.renderMenu(item.children)}
        </SubMenu>
      );
    });
  };
  homeHandleClick = () => {
    this.setState({
      currentKey: ""
    });
  };
  render() {
    return (
      <div>
        <Menu onClick={this.handleClick} theme="dark" mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
export default NavLeft;
