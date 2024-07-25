import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
const Setweight = ({ Name, modelId, setLists, weight, lists, index }) => {
  // const needChangeList = lists[index].items;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [oldweight, setOldweight] = useState(weight);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // 更新 weight
    const updatedList = updateWeightByModelId(
      lists[index].items,
      modelId,
      oldweight
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

  const updateWeightByModelId = (list, modelId, newWeight) => {
    return list.map((item) =>
      item.modelId === modelId ? { ...item, weight: newWeight } : item
    );
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {Name}
      </Button>
      <Modal
        title="权重"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="确定" // 自定义确定按钮的文本
        cancelText="取消" // 自定义取消按钮的文本
      >
        <Input
          value={oldweight}
          onChange={changeWeight}
          pattern="\d+(\.\d{0,})?" // 正则表达式，允许输入数字和小数点，小数点后最多两位数字
          title="请输入数字或小数" // 提示信息
        />
      </Modal>
    </>
  );
};
export default Setweight;
