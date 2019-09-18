import React, { Component } from "react";
import { Modal, Form, Input, Select } from "antd";
const { Option } = Select;

class ButtonDialog extends Component {
  render() {
    const { visible, form, buttonInfo } = this.props;
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
            <Form.Item label="按钮名称" {...formItemLayout}>
              {getFieldDecorator("name", {
                initialValue: buttonInfo.name || "",
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="执行方法" {...formItemLayout}>
              {getFieldDecorator("event", {
                initialValue: buttonInfo.event || "",
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(
                <Input />
              )}
            </Form.Item>

            <Form.Item label="图标样式" {...formItemLayout}>
              {getFieldDecorator("icon", {
                initialValue: buttonInfo.icon || ""
              })(<Input />)}
            </Form.Item>

            <Form.Item label="备注" {...formItemLayout}>
              {getFieldDecorator("remark", {
                initialValue: buttonInfo.remark || ""
              })(<Input.TextArea />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedAddModalForm = Form.create({ name: "ButtonDialog" })(ButtonDialog);
export default WrappedAddModalForm;
