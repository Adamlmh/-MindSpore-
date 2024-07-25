import "./project.css";
import { Button, Menu, Modal } from "antd";
import { PlusOutlined, DatabaseOutlined } from "@ant-design/icons";
import GetResult from "./GetResult";
import { useState } from "react";
const items = [
  {
    key: "1",
    label: (
      <label className="model_label">
        <div className="project_name">新建项目1</div>
        <span className="project_icon">
          <Button className="iconbtn" type="text" shape="circle" size="small">
            <i className="iconfont bianji icon-bianji"></i>{" "}
          </Button>
          <Button className="iconbtn" shape="circle" type="text" size="small">
            <i className="iconfont bianji icon-shanchu"></i>{" "}
          </Button>
        </span>{" "}
      </label>
    ),
    icon: <DatabaseOutlined />,
  },
  {
    key: "2",
    label: (
      <label>
        新建项目2{" "}
        <span className="project_icon">
          <Button className="iconbtn" type="text" shape="circle" size="small">
            <i className="iconfont bianji icon-bianji"></i>{" "}
          </Button>
          <Button className="iconbtn" shape="circle" type="text" size="small">
            <i className="iconfont bianji icon-shanchu"></i>{" "}
          </Button>
        </span>{" "}
      </label>
    ),
    icon: <DatabaseOutlined />,
  },
];
const Project = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
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
          <Modal
            title="Title"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
        </Button>
        <GetResult style={{ flexGrow: 1 }} />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="workbench_menu"
        items={items}
      />
    </div>
  );
};

export default Project;
