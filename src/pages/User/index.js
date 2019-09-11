import ButtonGroup from "../../components/ButtonGroup";
import TableModel from "./model/Table";
import React, { Component } from "react";
import Search from "./model/Search";
import AddModal from "./model/AddModal";
import {addUser} from '../../Api/system.js'

export default class User extends Component {
  state = {
    visible: false
  };
  clickEvents = event => {
    if (event == "addUser") {
      this.addUser();
    }
  };
  //新增
  addUser() {
    this.setState({
      visible: true
    });
  }
  cacelModel = () => {
    this.setState({
      visible: false
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  save = ()=> {
    const { form } = this.formRef.props;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }

      const {data} = await addUser(values)
      console.log('data.message :', data.message);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  render() {
    const dataSource = [
      {
        key: "1",
        account: "admin",
        username: "管理员",
        sex: "男",
        phone: "1377377777",
        createTime: "2019-9-10",
        editTime: "2019-9-19",
        remark: "无"
      },
      {
        key: "2",
        account: "admin",
        username: "管理员",
        sex: "男",
        phone: "1377377777",
        createTime: "2019-9-10",
        editTime: "2019-9-19",
        remark: "无"
      }
    ];

    const columns = [
      {
        title: "用户账号",
        dataIndex: "account",
        key: "account"
      },
      {
        title: "用户名称",
        dataIndex: "username",
        key: "username"
      },
      {
        title: "性别",
        dataIndex: "sex",
        key: "sex"
      },
      {
        title: "手机号码",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "创建时间",
        dataIndex: "createTime",
        key: "createTime"
      },
      {
        title: "修改时间",
        dataIndex: "editTime",
        key: "editTime"
      },
      {
        title: "备注",
        dataIndex: "remark",
        key: "remark"
      }
    ];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };

    return (
      <div>
        <Search />
        <ButtonGroup id="3" clickEvents={this.clickEvents}></ButtonGroup>
        <TableModel
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns}
        />
        <AddModal
          visible={this.state.visible}
          cacelModel={this.cacelModel}
          save={this.save.bind(this)}
          wrappedComponentRef={this.saveFormRef}
        />
      </div>
    );
  }
}
