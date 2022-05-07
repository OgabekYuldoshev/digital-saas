import { LikeOutlined } from "@ant-design/icons";
import { PageHeader, Row, Col, Statistic } from "antd";
import Box from "../../components/Box";
import DoughnutCP from "../../components/DonuteChart";
import LineCP from "../../components/LineChart";
import classes from "./DashboardPage.module.scss";

const Darshboard = () => {
  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Dashboard"
      />
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Box>
            <Statistic title="Active Users" value={112893} />
          </Box>
        </Col>
        <Col span={6}>
          <Box>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Box>
        </Col>
        <Col span={6}>
          <Box>
            <Statistic title="Amount" value={1230200} />
          </Box>
        </Col>
        <Col span={6}>
          <Box>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <DoughnutCP />
          </Box>
        </Col>

        <Col span={12}>
          <Box>
            <LineCP />
          </Box>
        </Col>
      </Row>
    </div>
  );
};

export default Darshboard;
