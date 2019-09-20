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
            <Form.Item label="角色名" {...formItemLayout}>
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
