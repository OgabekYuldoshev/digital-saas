import React from "react";
import { Row, Col, DatePicker, Select, Input } from "antd";
import DonuteChart from "../../../components/DonuteChart";
import Box from "../../../components/Box";
import classes from "./Account.module.scss";

const { RangePicker } = DatePicker;
const { Search } = Input;
const View = () => {
  return (
    <>
      <Search style={{ margin: "20px 0" }} placeholder="Link" enterButton />
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
    </>
  );
};

export default View;
