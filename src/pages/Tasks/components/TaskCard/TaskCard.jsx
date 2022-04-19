import { Card } from "antd";
import React from "react";

import classses from "./TaskCard.module.scss";

const TaskCard = ({ task }) => {
  return (
    <Card className={classses.wrapper} size="small" title="Small size card">
      <p>{task?.content}</p>
    </Card>
  );
};

export default TaskCard;
