import { Affix, Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./SideBar.module.scss";

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <Affix offsetTop={60}>
      <Menu
        className={classes.wrapper}
        mode="inline"
        defaultSelectedKeys={[pathname]}
      >
        <Menu.Item key="/dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/tasks">
          <Link to="/tasks">Задании</Link>
        </Menu.Item>
        <Menu.Item key="/plans">
          <Link to="/plans">Планы</Link>
        </Menu.Item>
        <Menu.SubMenu title="SMM" key="/smm">
          <Menu.Item key="/smm/account">
            <Link to="/smm/account">Account</Link>
          </Menu.Item>
          <Menu.Item key="/smm/public">
            <Link to="/smm/public">Posts</Link>
          </Menu.Item>
          <Menu.Item key="/smm/posting">
            <Link to="/smm/posting">Auto Posting</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="/adsm">
          <Link to="/ads">ADS</Link>
        </Menu.Item>
        <Menu.Item key="/sem">
          <Link to="/sem">SEM</Link>
        </Menu.Item>
        <Menu.Item key="/seo">
          <Link to="/seo">SEO</Link>
        </Menu.Item>
        <Menu.SubMenu title="ADS Data" key="/ads">
          <Menu.Item key="/ads/list">
            <Link to="/ads/list">ADS List</Link>
          </Menu.Item>
          <Menu.Item key="/ads/calculate">
            <Link to="/ads/calculate">ADS Calculate</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Команда" key="/command">
          <Menu.Item key="/command/list">
            <Link to="/command/list">Users</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Settings" key="/settings">
          <Menu.Item key="/settings/profile">
            <Link to="/settings/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/settings/networks">
            <Link to="/settings/networks">Social networks</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Affix>
  );
};

export default SideBar;
