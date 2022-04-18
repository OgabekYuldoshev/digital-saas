import { Layout } from "antd";
import Footer from "../../container/Footer";
import Navbar from "../../container/Navbar";
import RightBar from "../../container/RightBar";
import SideBar from "../../container/SideBar";
import classes from "./Layouts.module.scss";

const BaseLayouts = ({ children }) => {
  return (
    <Layout className={classes.wrapper}>
      <Layout.Header className={classes.header}>
        <Navbar />
      </Layout.Header>
      <Layout>
        <Layout.Sider className={classes.sidebarRight}>
          <SideBar />
        </Layout.Sider>
        <Layout.Content className={classes.content}>{children}</Layout.Content>
        <Layout.Sider className={classes.sidebarLeft}>
          <RightBar />
        </Layout.Sider>
      </Layout>
      <Layout.Footer className={classes.footer}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default BaseLayouts;
