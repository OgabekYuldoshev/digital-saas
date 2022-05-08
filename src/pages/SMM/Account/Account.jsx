import React, { useState } from "react";
import { PageHeader, Row, Col, DatePicker, Select, Modal, Button } from "antd";
import DonuteChart from "../../../components/DonuteChart";
import Box from "../../../components/Box";
import View from "./View";
import classes from "./Account.module.scss";

const { RangePicker } = DatePicker;

const Account = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Accounting"
        extra={[
          <Button onClick={() => setModal(true)} type="primary">
            Compare
          </Button>,
        ]}
      />
      <Row className={classes.filter} gutter={[16, 16]}>
        <Col span={6}>
          <RangePicker />
        </Col>
        <Col span={6}>
          <Select placeholder="Select social..." />
        </Col>
      </Row>
      <div className={classes.statistics}>
        <Box>
          <Row gutter={[16, 16]}>
            <Col span={8} className={classes.statistic}>
              <span>24</span>
              <p>публикаций</p>
            </Col>
            <Col span={8} className={classes.statistic}>
              <span>24</span>
              <p>подписчиков</p>
            </Col>
            <Col span={8} className={classes.statistic}>
              <span>24</span>
              <p>подписок</p>
            </Col>
          </Row>
        </Box>
      </div>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Box>
            <DonuteChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <DonuteChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <DonuteChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <DonuteChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <DonuteChart title="Ogebek" />
          </Box>
        </Col>
      </Row>

      <Modal
        visible={modal}
        onCancel={() => setModal(false)}
        width={1000}
        footer={null}
      >
        <View />
      </Modal>
    </>
  );
};

export default Account;
