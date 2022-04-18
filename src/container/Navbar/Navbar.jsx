import React from "react";

import classes from "./Navbar.module.scss";
import Logo from "../../assets/images/logo.png";
import { Avatar, Image, Input } from "antd";
import { Link } from "react-router-dom";
import LangSwitch from "../../components/LangSwitch";
const { Search } = Input;

const Navbar = () => {
  const onSearch = (val) => {
    console.log(val);
  };

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
        <Avatar size="large" src="https://joeschmoe.io/api/v1/random" />
      </div>
      {/* </Dropdown> */}
    </nav>
  );
};

export default Navbar;
