import React, { Component } from "react";
import { Row, Col, Card, Icon, Descriptions, Table, message } from "antd";
import MenuTree from "../../components/MenuTree";
import "./index.css";
import { findButtons, handleMenu, delMenu, handleButton ,delButton } from "../../Api/system";
import ButtonDialog from "./model/ButtonDialog";
import MenuDialog from "./model/MenuDialog";

export default class Menu extends Component {
  state = {
    curTree: {},
    buttons: [],
    menuVisible: false,
    buttonVisible:false,
    menuInfo: {},
    buttonInfo:{},
    menuType: "0",
    buttonType:'0',
    selectedRowKeys: [], //选中table行的key值
    selectedRows: [] //选中table行的信息

  };
  // 新增菜单
  addMenu = () => {
    if (this.state.curTree.type == "1") {
      return message.error("只能在目录下新建菜单！");
    }
    this.setState({
      menuType: "0",
      menuVisible: true,
      menuInfo: {}
    });
  };
  // 修改菜单
  editMenu = () => {
    // console.log('this. :', this);
    if (!this.state.curTree.id) {
      return message.error("请选择一条数据进行修改！");
    }
    this.setState({
      menuType: "1",
      menuVisible: true,
      menuInfo: this.state.curTree
    });
  };
  // 删除菜单
  delMenu = async () => {
    if (!this.state.curTree.id) {
      return message.error("请选择一条数据进行删除！");
    }
    if(this.state.curTree.children){
      return message.error("当前目录下存在菜单！")
    }
    const { data } = await delMenu(this.state.curTree.id);
    if (data.code == 200) {
      message.success(data.message);
    } else {
      message.error(data.message);
    }
  };
  // 保存菜单
  saveMenu = () => {
    const { form } = this.menuRef.props;
    const { curTree, menuType } = this.state;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      
      
      const menuInfo = {
        ...values,
        pid: menuType == "1" ? curTree.pid : curTree.id
      };

      // 如果pid为空的话，那么说明此时在根目录下
      // 将pid赋值为0，
      // 同时判断是否为菜单（根目录下只能为目录）
      
      if(!curTree.id){
        menuInfo.pid = 0
        if(menuInfo.type == 1){
          return message.error('根菜单下只能为目录！')
        }
      }
      const { data } = await handleMenu(menuInfo, menuType, curTree.id);
      if (data.code == 200) {
        message.success(data.message);
      } else {
        message.error(data.message);
      }
      this.setState({
        menuVisible: false
      });
    });
  };
  // 保存按钮
  saveButton = async ()=>{
    const {form} = this.buttonRef.props;
    const {buttonType,selectedRowKeys,curTree} = this.state
    form.validateFields(async (err,values) =>{
      if(err){
        return;
      }
      const buttonInfo = {
        ...values,
        pid:curTree.id
      }
      const {data} = await handleButton(buttonInfo,buttonType,selectedRowKeys[0])
      if (data.code == 200) {
        message.success(data.message);
      } else {
        message.error(data.message);
      }
      this.setState({
        buttonVisible: false
      });
    })
  }
  // 新增按钮
  addButton = ()=>{
    if (this.state.curTree.type == "0") {
      return message.error("目录下禁止新增按钮！");
    }
    this.setState({
      buttonType: "0",
      buttonVisible: true,
      buttonInfo: {}
    });
  }
  // 修改按钮
  editButton = () => {
    if (
      !this.state.selectedRowKeys ||
      this.state.selectedRowKeys.length !== 1
    ) {
      return message.error("请选择一条数据进行修改！");
    }
    this.setState({
      buttonType: "1",
      buttonVisible: true,
      buttonInfo: this.state.selectedRows[0]
    });
  }
  // 删除按钮
  delButton = async () => {
    if (!this.state.selectedRowKeys || this.state.selectedRowKeys.length == 0) {
      return message.error("请至少选择一条数据进行删除！");
    }
    const { data } = await delButton(this.state.selectedRowKeys);
    if (data.code === 200) {
      // 删除成功提示信息
      message.success(data.message);
      this.state.selectedRowKeys = [];
      this.state.selectedRows =[]
    } else {
      message.error(data.message);
    }
  }
  // 关闭弹出框
  cacelModel = () => {
    this.setState({
      menuVisible: false,
      buttonVisible:false
    });
  };
  // 获取菜单弹出框信息
  menuDialogRef = formRef => {
    this.menuRef = formRef;
  };
  // 获取按钮弹出框信息
  buttonDialogRef = formRef => {
    this.buttonRef = formRef;
  };
  // 刷新按钮
  reload = () => {
    window.location.reload();
  };
  // 点击菜单获取对应的按钮
  onTreeNodes = async (selectedKeys, e) => {
    console.log('object :', e.node.props.dataRef);
    const { data } = await findButtons(e.node.props.dataRef.id);
    this.setState({
      curTree: e.node.props.dataRef,
      buttons: data
    });
  };
  render() {
    const columns = [
      {
        title: "按钮名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "方法名",
        dataIndex: "event",
        key: "event"
      }
    ];
    const { selectedRowKeys, selectedRows } = this.state;
    const rowSelection = {
      selectedRowKeys,
      selectedRows,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        });
      },
      getCheckboxProps: record => ({
        name: record.name
      })
    };
    const { curTree } = this.state;
    return (
      <Row>
        <Col span={8}>
          <Card
            style={{ height: "450px" }}
            title="菜单树"
            extra={
              <div>
                <Icon type="plus" onClick={this.addMenu} />
                <Icon type="edit" onClick={this.editMenu} />
                <Icon type="delete" onClick={this.delMenu} />
                <Icon type="sync" onClick={this.reload} />
              </div>
            }
          >
            <MenuTree onTreeNodes={this.onTreeNodes}></MenuTree>
          </Card>
        </Col>
        <Col span={16} style={{ height: "450px" }}>
          <Card title="菜单信息" style={{ height: "40%" }}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="名称">
                {curTree.title}
              </Descriptions.Item>
              <Descriptions.Item label="类型">
                {curTree.type == 0 ? "目录" : "菜单"}
              </Descriptions.Item>
              <Descriptions.Item label="方法">{curTree.key}</Descriptions.Item>
              <Descriptions.Item label="排序">{curTree.key}</Descriptions.Item>
              <Descriptions.Item label="备注">
                {curTree.remark}
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Card
            style={{ height: "60%" }}
            title="菜单按钮"
            extra={
              <div>
                <Icon type="plus" onClick = {this.addButton} />
                <Icon type="edit" onClick = {this.editButton}/>
                <Icon type="delete" onClick = {this.delButton}/>
              </div>
            }
          >
            <Table
              dataSource={this.state.buttons}
              rowSelection={rowSelection}
              columns={columns}
              rowKey="id"
              scroll={{ y: 100 }}
              pagination={false}
            />
          </Card>
        </Col>
        <MenuDialog
          menuInfo={this.state.menuInfo}
          visible={this.state.menuVisible}
          cacelModel={this.cacelModel}
          save={this.saveMenu}
          wrappedComponentRef={this.menuDialogRef}
        />
        <ButtonDialog 
          buttonInfo = {this.state.buttonInfo}
          visible = {this.state.buttonVisible}
          cacelModel = {this.cacelModel}
          save={this.saveButton}
          wrappedComponentRef={this.buttonDialogRef}
        />
      </Row>
    );
  }
}
