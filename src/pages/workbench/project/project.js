import "./project.css";
import { Button, Card, Modal, Input } from "antd";
import { PlusOutlined, DatabaseOutlined } from "@ant-design/icons";
import GetResult from "./GetResult";
import { useEffect, useState } from "react";
import { fetchTaskHistory } from "../../../api";
const Project = ({ flash, missionId, setMissionId, items, setItems }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // const [items, setItems] = useState([]);
  const [newitems, setNewItems] = useState([]);
  useEffect(() => {
    const fetchTaskHistoryAPI = async () => {
      const response = await fetchTaskHistory();
      setItems(response.data);
    };
    fetchTaskHistoryAPI();
  }, [flash]);
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
  const handleClick = (key) => {
    setMissionId(key);
    console.log(items[missionId]);
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
        <GetResult
          style={{ flexGrow: 1 }}
          missionId={missionId}
          items={items}
        />
      </div>

      {newitems.map(({ missionName }, index) => (
        <Card
          style={{
            width: 210,
            marginTop: 16,
          }}
        >
          <h4
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            style={{ cursor: "pointer" }}
          >
            {missionName}
          </h4>
        </Card>
      ))}
    </div>
  );
};

export default Project;
