import "./project.css";
import { Button, Card, Modal, Input } from "antd";
import { PlusOutlined, DatabaseOutlined } from "@ant-design/icons";
import GetResult from "./GetResult";
import { useEffect, useState } from "react";
import { fetchTaskHistory } from "../../../api";
const items = [
  {
    key: "1",
    label: <label className="model_label">新建项目1</label>,
    icon: <DatabaseOutlined />,
  },
  {
    key: "2",
    label: <label>新建项目2</label>,
    icon: <DatabaseOutlined />,
  },
];
const Project = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [newitems, setNewItems] = useState([]);
  useEffect(() => {
    const fetchTaskHistoryAPI = async () => {
      const response = await fetchTaskHistory();
      console.log(response.data);
      setItems(response.data);
    };
    fetchTaskHistoryAPI();
  }, []);
  useEffect(() => {
    const newitems = items.map(({ missionName }, index) => ({
      missionName,
      index,
    }));
    setNewItems(newitems);
  }, [items]);
  const onChange = (e) => setInputValue(e.target.value);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="project">
      <div className="TwoButton" style={{ display: "flex", gap: "5px" }}>
        <Button
          className="add"
          icon={<PlusOutlined />}
          type="text"
          style={{ flexGrow: 1 }}
          onClick={showModal}
        >
          新建项目
        </Button>
        <Modal
          title="项目名"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText={"提交"}
          cancelText={"取消"}
        >
          <Input
            placeholder="请输入项目名"
            value={inputValue}
            onChange={onChange}
          ></Input>
        </Modal>
        <GetResult style={{ flexGrow: 1 }} />
      </div>

      {newitems.map(({ missionName }) => (
        <Card
          style={{
            width: 210,
            marginTop: 16,
          }}
        >
          <h3 style={{ cursor: "pointer" }}>{missionName}</h3>
        </Card>
      ))}
    </div>
  );
};

export default Project;
