import React, { Component } from "react";
import { Tree } from "antd";
import { findAllMenu } from "../../Api/system";
const { TreeNode } = Tree;

export default class MenuTree extends Component {
  state = {
    menuData: []
  };
  async componentDidMount() {
    const { data } = await findAllMenu();
    this.setState({
      menuData: data
    });
  }
  renderTreeNodes = data => {
    if (!data) {
      return;
    }
    return data.map(item => {
      if (item.children) {
        return (
          <TreeNode
            title={item.title}
            key={item.id}
            dataRef={item}
            defaultExpandAll
          >
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.id} title={item.title} dataRef={item} />;
    });
  };
  
  render() {
    const { menuData } = this.state;
    return (
      <div style={{ height: "350px", overflowY: "scroll" }}>
        <Tree onSelect={this.props.onTreeNodes} defaultExpandAll>
          {this.renderTreeNodes(menuData)}
        </Tree>
      </div>
    );
  }
}
