import { Button, Modal } from "antd";
import React, { useState } from "react";
import classes from "./RightBar.module.scss";
import { CreateForm, CardNote } from "./components"

const RightBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div>
        <Button type="primary" block onClick={() => setIsModalVisible(true)}>
          Add
        </Button>
        <Modal centered title="NotePad" visible={isModalVisible} onOk={() => setIsModalVisible(true)} onCancel={() => setIsModalVisible(false)}>
          <CreateForm />
        </Modal>
      </div>
      <div className={classes.viewer}>
        <CardNote />
        <CardNote />
      </div>
    </div>
  );
};

export default RightBar;
