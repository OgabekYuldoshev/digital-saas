import classes from "./CreatePage.module.scss";
import {
  Button,
  PageHeader,
  Upload,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  message,
} from "antd";
import Box from "../../../../components/Box";
import { InboxOutlined } from "@ant-design/icons";
import { CreateTask } from "../../../../module/task/form";
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CreateTaskPage = () => {
  return (
    <CreateTask>
      {({ handleChange, setFieldValue }) => (
        <div className={classes.wrapper}>
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Create tasks"
            // subTitle="This is a subtitle"
            extra={[
              <Button type="primary" htmlType="submit" key="1">
                Add
              </Button>,
            ]}
          />

          <Row gutter={[16, 16]}>
            <Col span={16}>
              <Box>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <TextArea
                      placeholder="Task desc"
                      onChange={handleChange}
                      name="description"
                    />
                  </Col>
                  <Col span={24}>
                    <div>
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit
                          from uploading company data or other band files
                        </p>
                      </Dragger>
                    </div>
                  </Col>
                </Row>
              </Box>
            </Col>
            <Col span={8}>
              <Box>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <DatePicker
                      onChange={(_, val) => setFieldValue("deadline", val)}
                      className={classes.full}
                    />
                  </Col>
                  <Col span={24}>
                    <Select
                      className={classes.full}
                      placeholder="Select user"
                      onChange={(e) => setFieldValue("pinned_to", e)}
                    >
                      <Option value={1}>Lucy</Option>
                    </Select>
                  </Col>
                </Row>
              </Box>
            </Col>
          </Row>
        </div>
      )}
    </CreateTask>
  );
};

export default CreateTaskPage;
