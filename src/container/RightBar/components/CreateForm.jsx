import { Col, Input, Row, Button, message } from "antd";
import Create from "../../../module/note/form/Create";
import React from "react";
const { TextArea } = Input;

const CreateForm = ({ onClose }) => {
  return (
    <Create
      onError={() => {
        onClose();
        message.error("Internal errors!");
      }}
      onSuccess={() => {
        onClose();
        message.success("Note successful created!");
      }}
    >
      {({ handleChange }) => (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <TextArea
              onChange={handleChange}
              name="description"
              rows={4}
              placeholder="text"
            />
          </Col>
          <Col span={24}>
            <Button htmlType="submit" type="primary" block>
              Submit
            </Button>
          </Col>
        </Row>
      )}
    </Create>
  );
};

export default CreateForm;
