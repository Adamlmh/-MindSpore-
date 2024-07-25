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
} from "antd";
import axios from "axios";

const UploadMessage = ({ dataresult }) => {
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();

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
      if (fileList.length > 0) {
        response = await axios.post(
          "http://47.120.64.48:8080/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`, // 添加 token 到请求头
            },
          }
        );
      }

      const data = {
        image: response ? response.data.data : null,
        content: description,
        modelList: dataresult,
      };
      await axios.post("http://139.159.156.117:8080", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      message.success("Upload successful");
      onClose();
    } catch (error) {
      message.error("Upload failed");
      console.error("Error:", error);
    }
  };

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
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
        >
          <Form.Item
            label="项目名称"
            name="missonName"
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
