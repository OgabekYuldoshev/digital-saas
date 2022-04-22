import React from "react";

import classes from "./Navbar.module.scss";
import Logo from "../../assets/images/logo.png";
import { Avatar, Dropdown, Image, Input, Menu } from "antd";
import { Link } from "react-router-dom";
import LangSwitch from "../../components/LangSwitch";
const { Search } = Input;

const Navbar = () => {
  const onSearch = (val) => {
    console.log(val);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Log Out</Menu.Item>
    </Menu>
  );

  return (
    <nav className={classes.wrapper}>
      <Link to="/">
        <Image width={200} preview={false} src={Logo} />
      </Link>
      <Search
        className={classes.search}
        placeholder="Search ..."
        onSearch={onSearch}
        enterButton
      />
      {/* <Dropdown overlay={menu}> */}
      <div className={classes.right}>
        <LangSwitch />
        <Dropdown placement="topRight" overlay={menu} trigger={['click']}>
          <Avatar size="large" src="https://joeschmoe.io/api/v1/random" />
        </Dropdown>
      </div>
      {/* </Dropdown> */}
    </nav>
  );
};

export default Navbar;
