import React, { Component } from "react";
import { Table } from "antd";

export default class TableModel extends Component {
  render() {
    return <Table {...this.props}></Table>;
  }
}
