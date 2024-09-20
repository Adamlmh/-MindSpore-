import React from "react";
import { Card } from "antd";
import { CloudSyncOutlined } from "@ant-design/icons";

const select = () => {
  const image_data = [
    "图像分类",
    "目标检测",
    "图像超分",
    "语义分割",
    "关键检测",
    "文本识别",
    "文本检测",
    "缺陷检测",
    "图像抠图",
    "视频分类",
  ];
  const text_data = ["文本分类", "阅读理解", "自然语言", "情绪分类"];
  const data_show = (data) => {
    return data.map((item) => {
      return (
        <div className="select_div">
          <span>{item}</span>
        </div>
      );
    });
  };

  return (
    <Card className="selectCard" hoverable={true}>
      <div className="selectCardTop">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            width: 50,

          }}
        >
          <span style={{ fontSize: 20, fontWeight: 700 }}>筛选</span>
          <p style={{ fontSize: 14, fontWeight: 700 }}>来源</p>
        </div>
        <span
          style={{
            width: 65,
            display: "flex",
            justifyContent: "space-around",
            height: 30,
            alignItems: "center",
          }}
        >
          <span>
            <CloudSyncOutlined style={{ fontSize: 16 }} />
          </span>
          <span className="resert" style={{ fontWeight: 700, fontSize: 20 }}>
            重置
          </span>
        </span>
      </div>

      <div className="select_image">
        <p style={{ fontWeight: 700 }}>图像</p>
        <div className="select_image_box">{data_show(image_data)}</div>
      </div>
      <div className="select_text">
        <p style={{ fontWeight: 700 }}>文本</p>
        <div className="select_text_box">{data_show(text_data)}</div>
      </div>
    </Card>
  );
};

export default select;
