import { ControlOutlined, MoreOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Modal, PageHeader, Table, Tag } from 'antd';
import React, { useState } from 'react'
import Box from '../../components/Box';
import classes from './Commands.module.scss';
import { data } from "./data"
import InvitedPeople from './components/InvitedPeople';

const Commands = () => {
  const [modal, setModal] = useState(false)
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Position',
      key: 'type',
      dataIndex: 'type',
      render: type => (
        <Tag color="orange">
          {type}
        </Tag>
      ),
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role',
      render: role => (
        <Tag color="success">
          {role}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
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
        title="Commands"
        extra={[
          <Button
            type="primary"
            onClick={() => setModal(true)}
            key="1"
          >
            Invite others
          </Button>,
        ]}
      />
      <Box>
        <h2>List</h2>
        <Table columns={columns} dataSource={data} />
        <Modal title="Invite other people" visible={modal} onCancel={() => setModal(false)} footer={null}>
          <InvitedPeople />
        </Modal>
      </Box>
    </div>
  )
}

export default Commands