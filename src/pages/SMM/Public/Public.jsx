import React, { useState } from "react";
import { PageHeader, Row, Col, Modal, Button } from "antd";
import LineChart from "../../../components/LineChart";
import Box from "../../../components/Box";
import View from "./View";
// import classes from "./Public.module.scss";

const Public = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Publicatsiya"
        extra={[
          <Button onClick={() => setModal(true)} type="primary">
            My Account
          </Button>,
        ]}
      />
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Box>
            <LineChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <LineChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <LineChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <LineChart title="Ogebek" />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <LineChart title="Ogebek" />
          </Box>
        </Col>
      </Row>

      <Modal
        visible={modal}
        onCancel={() => setModal(false)}
        width={800}
        footer={null}
      >
        <View />
      </Modal>
    </>
  );
};

export default Public;
