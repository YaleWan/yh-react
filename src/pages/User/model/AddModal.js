import React, { Component } from "react";
import { Modal, Form, Input, Radio } from "antd";

class AddModal extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { visible, form, modalInfo } = this.props;
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="用户账号" {...formItemLayout}>
              {getFieldDecorator("account", {
                initialValue: modalInfo ? modalInfo.account : "",
                rules: [
                  {
                    
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="用户名称" {...formItemLayout}>
              {getFieldDecorator("username", {
                initialValue: modalInfo ? modalInfo.username : "",
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="固定电话" {...formItemLayout}>
              {getFieldDecorator("tel", {
                initialValue: modalInfo ? modalInfo.tel : ""
              })(<Input />)}
            </Form.Item>

            <Form.Item label="手机号码" {...formItemLayout}>
              {getFieldDecorator("phone", {
                initialValue: modalInfo ? modalInfo.phone : ""
              })(<Input />)}
            </Form.Item>
            <Form.Item label="电子邮箱" {...formItemLayout}>
              {getFieldDecorator("email", {
                initialValue: modalInfo ? modalInfo.email : ""
              })(<Input />)}
            </Form.Item>

            <Form.Item label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: modalInfo ? modalInfo.sex : 0
              })(
                <Radio.Group>
                  <Radio value="0">男</Radio>
                  <Radio value="1">女</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="备注" {...formItemLayout}>
              {getFieldDecorator("remark", {
                initialValue: modalInfo ? modalInfo.remark : ''
              })(<Input.TextArea />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedAddModalForm = Form.create({ name: "addModal" })(AddModal);
export default WrappedAddModalForm;
