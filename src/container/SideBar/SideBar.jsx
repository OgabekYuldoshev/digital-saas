import { Menu } from "antd";
import React from "react";

import classes from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <Menu className={classes.wrapper} mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        Задании
      </Menu.Item>
      <Menu.Item key="2">
        Планы
      </Menu.Item>
      <Menu.Item key="3">
        SMM
      </Menu.Item>
      <Menu.Item key="4">
        ADS
      </Menu.Item>
      <Menu.Item key="5">
        SEM
      </Menu.Item>
      <Menu.Item key="6">
        SEO
      </Menu.Item>
      <Menu.Item key="7">
        ADS Data
      </Menu.Item>
      <Menu.Item key="8">
        Команда
      </Menu.Item>
    </Menu>
  );
};

export default SideBar;
