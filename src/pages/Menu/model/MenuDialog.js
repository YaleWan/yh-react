import React, { Component } from "react";
import { Modal, Form, Input, Select } from "antd";
const { Option } = Select;

class MenuDialog extends Component {
  render() {
    const { visible, form, menuInfo } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 }
    };

    return (
      <div>
        <Modal
          title="新增用户"
          visible={visible}
          onOk={this.props.save}
          onCancel={this.props.cacelModel}
        >
          <Form>
            <Form.Item label="名称" {...formItemLayout}>
              {getFieldDecorator("title", {
                initialValue: menuInfo.title || "",
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="类型" {...formItemLayout}>
              {getFieldDecorator("type", {
                initialValue: menuInfo.type || "1",
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(
                <Select>
                  <Option value="0">目录</Option>
                  <Option value="1">菜单</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item label="方法" {...formItemLayout}>
              {getFieldDecorator("key", {
                initialValue: menuInfo.key || ""
              })(<Input />)}
            </Form.Item>

            <Form.Item label="备注" {...formItemLayout}>
              {getFieldDecorator("remark", {
                initialValue: menuInfo.remark || ""
              })(<Input.TextArea />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedAddModalForm = Form.create({ name: "MenuDialog" })(MenuDialog);
export default WrappedAddModalForm;
