import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { PieChartOutlined, BulbOutlined } from "@ant-design/icons";
const Setweight = ({
  Name,
  modelId,
  setLists,
  weight,
  lists,
  index,
  question,
}) => {
  // const needChangeList = lists[index].items;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [oldweight, setOldweight] = useState(weight);
  const [oldquestion, setOldquestion] = useState(question);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // 更新 weight
    const updatedList = updateWeightByModelId(
      lists[index].items,
      modelId,
      oldweight,
      oldquestion
    );

    // 更新 lists 状态
    setLists(
      lists.map((list, i) =>
        i === index ? { ...list, items: updatedList } : list
      )
    );

    // 关闭 Modal
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const changeWeight = (event) => {
    const value = event.target.value;
    // 允许输入数字和小数点，并且限制小数点出现的次数不超过1次
    const isNumber =
      !isNaN(value) &&
      value.indexOf(".") === value.lastIndexOf(".") &&
      value.split(".").length - 1 <= 1;
    setOldweight(isNumber ? value : "");
  };
  const changeQuestion = (event) => {
    const value = event.target.value;
    setOldquestion(value);
  };

  const updateWeightByModelId = (list, modelId, newWeight, newQuestion) => {
    return list.map((item) =>
      item.modelId === modelId
        ? { ...item, weight: newWeight, question: newQuestion }
        : item
    );
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          width: "100%",
        }}
      >
        <span
          style={{
            display: "block", // 让 span 元素撑满按钮容器
            maxWidth: "100%", // 确保文本宽度不超过按钮
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {Name}
        </span>
      </Button>
      <Modal
        title="自定义信息"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="确定" // 自定义确定按钮的文本
        cancelText="取消" // 自定义取消按钮的文本
      >
        <Input
          placeholder="请输入权重"
          prefix={<PieChartOutlined />}
          value={oldweight}
          onChange={changeWeight}
          pattern="\d+(\.\d{0,})?" // 正则表达式，允许输入数字和小数点，小数点后最多两位数字
          title="请输入权重（数字或小数）" // 提示信息
          required // 必填项
        />
        {question && (
          <Input
            placeholder="请输入提示词"
            prefix={<BulbOutlined />}
            style={{ marginTop: "10px" }}
            value={oldquestion}
            onChange={changeQuestion}
            title="请输入提示词"
          />
        )}
      </Modal>
    </div>
  );
};
export default Setweight;
