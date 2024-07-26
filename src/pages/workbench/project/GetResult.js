import React, { useState } from "react";
import { Button, Drawer } from "antd";
const GetResult = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        查看结果
      </Button>
      <Drawer title="查看结果" onClose={onClose} open={open}>
        <p>输入：</p>
        <p>Some contents...</p>

        <br></br>
        <p>输出：</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default GetResult;
