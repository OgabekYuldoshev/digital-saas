import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { PageHeader, Row, Col, Avatar, Tooltip, Typography } from "antd";
import Box from "../../components/Box";
import classes from "./DashboardPage.module.scss";

const Darshboard = () => {
  return <div className={classes.wrapper}>
    <PageHeader
      className="site-page-header"
      onBack={() => window.history.back()}
      title="Dashboard"
    />
    <Row gutter={[24, 24]}>
      <Col span={6}>
        <Box>
          <Typography>Online User</Typography>
          <div className={classes.online}>
            <Avatar.Group
              maxCount={2}
              size="large"
              maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
            >
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Tooltip>
              <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
          </div>
        </Box>
      </Col>
      <Col span={6}>
        <Box>
          Users
        </Box>
      </Col>
      <Col span={6}>
        <Box>
          Amounts
        </Box>
      </Col>
      <Col span={6}>
        <Box>
          Employee composition
        </Box>
      </Col>

      <Col span={12}>
        <Box>
          Some thing
        </Box>
      </Col>

      <Col span={12}>
        <Box>
          Project tracked
        </Box>
      </Col>
    </Row>
  </div>;
};

export default Darshboard;
