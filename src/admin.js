import React from "react";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import Contanier from "./components/Contanier";
import Bread from "./components/Bread"
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

export default class Admin extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout>
        <Header className="header">
          <NavTop />
        </Header>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <NavLeft />
          </Sider>
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <Bread />
              <Contanier />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
