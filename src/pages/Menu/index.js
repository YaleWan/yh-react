import React, { Component } from "react";
import { Row, Col, Tree, Card, Icon } from "antd";
const { TreeNode, DirectoryTree } = Tree;

export default class Menu extends Component {
  onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  onExpand = () => {
    console.log("Trigger Expand");
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <Card
              title="菜单树"
              style={{height:'450px'}}
              extra={
                <div>
                  <Icon type="plus" style={{ paddingRight: "10px" }} />
                  <Icon type="edit" style={{ paddingRight: "10px" }} />
                  <Icon type="delete" style={{ paddingRight: "10px" }} />
                  <Icon type="sync" spin style={{ paddingRight: "10px" }} />
                </div>
              }
            >
              <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={this.onSelect}
                onExpand={this.onExpand}
                style={{ overflowY: "scroll",height:'350px'}}
              >
                <TreeNode title="parent 0" key="0-0">
                  <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                  <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                </TreeNode>
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                  <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                </TreeNode>
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                  <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                </TreeNode>
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                  <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                </TreeNode>
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                  <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                </TreeNode>
              </DirectoryTree>
            </Card>
          </Col>
          <Col span={16}>
            <Card title="菜单信息"></Card>
            <Card
              title="菜单按钮"
              extra={
                <div>
                  <Icon type="plus" style={{ paddingRight: "10px" }} />
                  <Icon type="edit" style={{ paddingRight: "10px" }} />
                  <Icon type="delete" style={{ paddingRight: "10px" }} />
                </div>
              }
            ></Card>
          </Col>
        </Row>
      </div>
    );
  }
}
