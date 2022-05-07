import { ControlOutlined, MoreOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, PageHeader, Table, Tag } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Box from "../../../components/Box";
import classes from "./AutoPosting.module.scss";
import { data } from "./data";

const AutoPosting = () => {
  const history = useHistory();
  const menu = (
    <Menu>
      <Menu.Item icon={<SendOutlined />}>Send Message</Menu.Item>
      <Menu.SubMenu icon={<ControlOutlined />} title="Change Role">
        <Menu.Item>ADMIN</Menu.Item>
        <Menu.Item>USER</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Position",
      key: "type",
      dataIndex: "type",
      render: (type) => <Tag color="orange">{type}</Tag>,
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (role) => <Tag color="success">{role}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <MoreOutlined />
        </Dropdown>
      ),
    },
  ];
  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="AutoPosting"
        extra={[
          <Button
            type="primary"
            onClick={() => history.push("/smm/posting/create")}
            key="1"
          >
            Create posting
          </Button>,
        ]}
      />
      <Box>
        <h2>List</h2>
        <Table columns={columns} dataSource={data} />
      </Box>
    </div>
  );
};

export default AutoPosting;
