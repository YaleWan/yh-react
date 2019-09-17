import React from "react";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import Contanier from "./components/Contanier";
import Bread from "./components/Bread";
import { Layout } from "antd";
import { findAllMenu } from "./Api/system";

const { Header, Sider, Content } = Layout;

export default class Admin extends React.Component {
  state = {
    collapsed: false,
    data: [],
    curSystemId: "1",
    menuList: [],
    height: ""
  };
  componentWillMount() {
    this.setState({
      height: document.body.clientHeight
    });
  }
  async componentDidMount() {
    const { data } = await findAllMenu();

    this.setState({
      menuList: data[this.state.curSystemId - 1],
      data: data
    });
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  clickSystem = ({ key: id }) => {
    this.setState({
      curSystemId: id,
      menuList: this.state.data[id - 1]
    });
  };
  render() {
    const { height } = this.state;
    return (
      <Layout>
        <Header
          className="header"
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
        >
          <NavTop
            menuList={this.state.data}
            onClickSystem={this.clickSystem}
            curSystemId={this.state.curSystemId}
          />
        </Header>
        <Layout style={{ height: height - 64, marginTop: 64 }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <NavLeft menuList={this.state.menuList.children} />
          </Sider>
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <Bread />
              <Contanier {...this.props} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
