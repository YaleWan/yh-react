import React from "react";
import { Table,Form,Input,Button } from "antd";
import ButtonGroup from "../../components/ButtonGroup";


export default function User() {
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    }
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ];
  return (
    <div>
        <Form layout="inline">
          <Form.Item label='用户名'>
              <Input />
          </Form.Item>
          <Form.Item label='用户名'>
              <Input />
          </Form.Item>
          <Form.Item>
              <Button type='primary'>查询</Button>
              <Button>重置</Button>
          </Form.Item>
        </Form>
        <ButtonGroup id ='3'></ButtonGroup>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}
