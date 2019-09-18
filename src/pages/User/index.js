import ButtonGroup from "../../components/ButtonGroup";
import TableModel from "../../components/Table";
import React, { Component } from "react";
import Search from "./model/Search";
import AddModal from "./model/AddModal";
import { addUser, findUser, delUser } from "../../Api/system.js";
import { message } from "antd";
import moment from "moment";

export default class User extends Component {
  state = {
    visible: false, //弹出框是否显示
    username: "", //用户名
    account: "", //用户账号
    type: 0, //判断是新增还是修改，0位新增，1位修改
    modalInfo: {}, //弹出框信息
    selectedRowKeys: [], //选中table行的key值
    selectedRows: [] //选中table行的信息
  };
  // 初始化获取数据
  componentDidMount() {
    this.getUserInfo();
  }
  // 获取用户信息
  async getUserInfo() {
    const query = {
      username: this.state.username,
      account: this.state.account
    };
    const { data } = await findUser(query);
    this.setState({
      userInfo: data
    });
  }
  // 执行对应按钮的点击事件
  clickEvents = event => this[event]();

  //新增用户
  addUser() {
    this.setState({
      type: "0",
      visible: true,
      modalInfo: {}
    });
  }
  //删除用户
  async delUser() {
    if (!this.state.selectedRowKeys || this.state.selectedRowKeys.length == 0) {
      return message.error("请至少选择一条数据进行删除！");
    }
    const { data } = await delUser(this.state.selectedRowKeys);
    if (data.code === 200) {
      // 删除成功提示信息
      message.success(data.message);
      this.state.selectedRowKeys = [];
      this.state.selectedRows = [];
      // 重新请求数据
      this.getUserInfo();
    } else {
      message.error(data.message);
    }
  }
  //关闭新增弹出框
  cacelModel = () => {
    this.setState({
      visible: false
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  //保存新增
  save = () => {
    const { form } = this.formRef.props;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      const { type, selectedRowKeys } = this.state;
      const { data } = await addUser(values, type, selectedRowKeys[0]);

      if (data.code === 200) {
        message.success(data.message);
        this.getUserInfo();
      } else {
        message.error(data.message);
      }
      this.state.selectedRowKeys = [];
      this.state.selectedRows = [];
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  //修改用户
  editUser() {
    if (
      !this.state.selectedRowKeys ||
      this.state.selectedRowKeys.length !== 1
    ) {
      return message.error("请选择一条数据进行修改！");
    }
    this.setState({
      type: "1",
      visible: true,
      modalInfo: this.state.selectedRows[0]
    });
  }

  // 用户账号输入框change事件
  accountChange = e => {
    this.setState({
      account: e.target.value
    });
  };
  // 用户名输入框change事件
  usernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
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
        key: "sex",
        render: val => (val ? "女" : "男")
      },
      {
        title: "手机号码",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "创建时间",
        dataIndex: "createdAt",
        key: "createdAt",
        render: val => moment(val).format("YYYY-MM-DD HH:mm:ss")
      },
      {
        title: "修改时间",
        dataIndex: "updatedAt",
        key: "updatedAt",
        render: val => moment(val).format("YYYY-MM-DD HH:mm:ss")
      },
      {
        title: "备注",
        dataIndex: "remark",
        key: "remark"
      }
    ];
    const { selectedRowKeys, selectedRows } = this.state;
    const rowSelection = {
      selectedRowKeys,
      selectedRows,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log("sel :", selectedRowKeys);
        this.setState({
          selectedRowKeys,
          selectedRows
        });
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };

    return (
      <div>
        <Search
          username={this.state.username}
          account={this.state.account}
          onAccountChange={this.accountChange}
          onUsernameChange={this.usernameChange}
          search={this.getUserInfo.bind(this)}
        />
        <ButtonGroup id="3" clickEvents={this.clickEvents}></ButtonGroup>
        <TableModel
          rowSelection={rowSelection}
          dataSource={this.state.userInfo}
          columns={columns}
          rowKey="id"
        />
        <AddModal
          modalInfo={this.state.modalInfo}
          visible={this.state.visible}
          cacelModel={this.cacelModel}
          save={this.save.bind(this)}
          wrappedComponentRef={this.saveFormRef}
        />
      </div>
    );
  }
}
