import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Upload,
  Drawer,
  Form,
  Input,
  Row,
  Space,
  message,
  Radio,
} from "antd";
import axios from "axios";
import Loading from "./loading";
import { postNewTaskApi, uploadImgApi } from "../../../api";
const UploadMessage = ({ dataresult, setFlash, flash, rawList }) => {
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [showLoading, setShowLoading] = useState(false);
  //服务器选择按钮的状态
  const [ServerChoose, setServerChoose] = useState("auto");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    form.resetFields();
    setFileList([]);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleRemove = () => {
    setFileList([]);
  };
  const handleChange = ({ fileList: newFileList }) => {
    // 限制只允许一个文件
    if (newFileList.length > 1) {
      message.warning("只能上传一张图片");
      return;
    }

    // 检查文件类型
    const isImage = newFileList[0]?.type.startsWith("image/");
    if (!isImage) {
      message.warning("只能上传图片文件");
      return;
    }

    setFileList(newFileList);
  };
  const onFinish = async (values) => {
    const { description } = values;
    // 检查是否文本和图片都存在或都不存在
    if (!description && fileList.length === 0) {
      message.warning("请输入文本或上传图片，二者必选其一");
      return;
    }
    if (description && fileList.length > 0) {
      message.warning("只能选择文本或图片，不能同时选择");
      return;
    }
    const formData = new FormData();
    // formData.append("description", description);
    // formData.append("dataresult", hiddenData); // 添加 dataresult

    fileList.forEach((file) => {
      formData.append("multipartFile", file.originFileObj);
    });

    try {
      let response = null;

      // 如果有图片上传，先上传给后台
      if (fileList.length > 0) {
        response = uploadImgApi(formData);
        // response = await axios.post(
        //   "http://10.21.56.119:8082/upload",
        //   formData,
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //       Authorization: `Bearer ${localStorage.getItem("token")}`, // 添加 token 到请求头
        //     },
        //   }
        // );
      }

      let data = {
        image: response ? response.data.data : "",
        content: description ? description : "",
        modelList: dataresult,
        answer: "",
        errorText: "",
      };

      setShowLoading(true);
      //发请求给AI服务器跑模型
      //先判断cup情况选择服务器
      // 获取两个服务器的cpu使用率
      let cup_use1 = null;
      let cup_use2 = null;
      let urlServer = null;
      if (ServerChoose === "auto") {
        cup_use1 = await axios.get("http://10.21.56.118:11451/get_cpu_usage");
        cup_use2 = await axios.get("http://10.21.56.119:11451/get_cpu_usage");
        // 比较两个服务器的cpu使用率，如果第一个服务器的cpu使用率小于等于第二个服务器的cpu使用率，则使用第一个服务器，否则使用第二个服务器
        console.log(cup_use1.data);

        if (cup_use1.data <= cup_use2.data) {
          urlServer = "http://10.21.56.118:11451/post_json";
        } else {
          urlServer = "http://10.21.56.119:11451/post_json";
        }
      } else if (ServerChoose === "server1") {
        console.log(123);

        urlServer = "http://10.21.56.118:11451/post_json";
      } else if (ServerChoose === "server2") {
        console.log(122);
        urlServer = "http://10.21.56.119:11451/post_json";
      }

      response = await axios.post(urlServer, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.errorText) {
        message.error(response.data.errorText);
        setShowLoading(false);
        return;
      }

      response = response.data;

      data = {
        ...data,
        answer: response.answer,
        missionName: values.missionName,
        userId: localStorage.getItem("userId"),
        modelList: JSON.stringify(rawList),
        formattedModelList: dataresult,
      };
      // 发给后台服务器存储当前结果
      await postNewTaskApi(data);
      onClose();
      setShowLoading(false);
      message.success("成功啦,请点击查看结果~");
      setFlash(!flash);
    } catch (error) {
      setShowLoading(false);
      message.error("Upload failed");
      console.error("Error:", error);
    }
  };
  if (showLoading) {
    return <Loading />;
  }
  return (
    <div key={1}>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        上传
      </Button>
      <Drawer
        title="运行项目"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button onClick={() => form.submit()} type="primary">
              运行
            </Button>
          </Space>
        }
      >
        <Radio.Group
          value={ServerChoose}
          onChange={(e) => setServerChoose(e.target.value)}
          style={{ marginBottom: "20px" }}
        >
          <Radio.Button value="auto">智能选择</Radio.Button>
          <Radio.Button value="Server1">服务器1</Radio.Button>
          <Radio.Button value="Server2">服务器2</Radio.Button>
        </Radio.Group>
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
        >
          <Form.Item
            label="项目名称"
            name="missionName"
            rules={[
              {
                required: true,
                message: "请输入项目名字",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="请输入文本"
                rules={[
                  {
                    message: "请输入文本",
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="hiddenData" initialValue={dataresult} hidden>
            <Input />
          </Form.Item>
          <Form.Item
            label="上传图片"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              beforeUpload={() => false}
              onChange={handleChange}
              maxCount={1} // 允许最多上传一张文件
              accept="image/*" // 只接受图片文件
            >
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
            {fileList.length > 0 && (
              <Button
                icon={<DeleteOutlined />}
                onClick={handleRemove}
                style={{ marginLeft: 16 }}
              >
                取消上传
              </Button>
            )}
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default UploadMessage;
