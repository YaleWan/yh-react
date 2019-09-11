import React, { Component } from "react";
import { Form, Input, Button} from "antd";

export default class Search extends Component {
  render() {
    return (
      <div>
        <Form layout="inline">
          <Form.Item label="用户账号">
            <Input />
          </Form.Item>
          <Form.Item label="用户名称">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
