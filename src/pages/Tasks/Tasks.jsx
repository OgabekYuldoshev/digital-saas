import classes from "./TasksPage.module.scss";
import { useQueryParams } from "react-router-query-hooks";
import Draggable from "./components/Draggable";
import { Button, PageHeader, Modal } from "antd";
import useList from "../../module/task/hooks/useList";
import { useHistory } from "react-router-dom";
import View from "./containers/View";

const Darshboard = () => {
  const [query, { pushQuery }] = useQueryParams();
  const history = useHistory();
  const { items } = useList();

  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Tasks"
        // subTitle="This is a subtitle"
        extra={[
          <Button
            type="primary"
            onClick={() => history.push("/tasks/create")}
            key="1"
          >
            Add task
          </Button>,
        ]}
      >
        <Modal centered visible={!!query.task} onCancel={() => pushQuery("")}>
          <View />
        </Modal>
      </PageHeader>
      <div className={classes.draggable}>
        {items && <Draggable items={items} />}
      </div>
    </div>
  );
};

export default Darshboard;
