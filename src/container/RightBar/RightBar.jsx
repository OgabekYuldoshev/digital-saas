import { Button, Modal } from "antd";
import React from "react";

import classes from "./RightBar.module.scss";

const RightBar = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <Button type="primary" block>
          Add
        </Button>
        <Modal title="Basic Modal">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      <div>hello</div>
    </div>
  );
};

export default RightBar;
