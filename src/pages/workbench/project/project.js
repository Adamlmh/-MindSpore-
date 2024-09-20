import "./project.css";
import { Button, Card, Modal, Input } from "antd";
import { PlusOutlined, DatabaseOutlined } from "@ant-design/icons";
import GetResult from "./GetResult";
import { useEffect, useState } from "react";
import { fetchTaskHistory } from "../../../api";
const Project = ({
  flash,
  missionId,
  setMissionId,
  items,
  setItems,
  setMissionListData,
}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // const [items, setItems] = useState([]);
  const [newitems, setNewItems] = useState([]);
  //追踪选中卡片的索引
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    const fetchTaskHistoryAPI = async () => {
      try {
        const response = await fetchTaskHistory();
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching task history:", error);
      }
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
  const handleClick = (key, index) => {
    setMissionId(key);
    setSelectedCardIndex(index);
    setMissionListData(items[index]);
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
        <GetResult missionId={missionId} items={items} />
      </div>

      {newitems.map(({ missionName }, index) => (
        <Card
          style={{
            width: 210,
            marginTop: 16,
            backgroundColor: selectedCardIndex === index ? "#f0f0f0" : "#fff", // 根据选中状态设置背景色
            border:
              selectedCardIndex === index
                ? "2px solid #1890ff"
                : "1px solid #d9d9d9", // 改变边框高亮
          }}
        >
          <h4
            key={index}
            onClick={() => {
              handleClick(index, index);
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
