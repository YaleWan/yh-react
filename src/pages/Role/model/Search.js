import React, { Component } from "react";
import { Form, Input, Button } from "antd";

export default class Search extends Component {
  render() {
    return (
      <div>
        <Form layout="inline">
          <Form.Item label="名称">
            <Input
              value={this.props.account}
              onChange={this.props.onAccountChange}
            />
          </Form.Item>          
          <Form.Item>
            <Button type="primary" onClick={this.props.search}>
              查询
            </Button>
            <Button>重置</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
