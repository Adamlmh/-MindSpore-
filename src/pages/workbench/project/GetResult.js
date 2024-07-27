// import React, { useEffect, useState } from "react";
// import { Button, Drawer } from "antd";
// const GetResult = ({ missionId, items }) => {
//   items[missionId] = {};
//   useEffect(() => {}, [missionId]);
//   const [open, setOpen] = useState(false);
//   const showDrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showDrawer}>
//         查看结果
//       </Button>
//       <Drawer title="查看结果" onClose={onClose} open={open}>
// {  if(items[missionId]){
//               <p>输入：</p>
//         <p>
//           {items[missionId].content
//             ? items[missionId].content
//             : items[missionId].image}
//         </p>
//         <br></br>
//         <p>输出：</p>
//         <p>{items[missionId].answer}</p>
//   }}
//       </Drawer>
//     </>
//   );
// };
// export default GetResult;

// import React, { useEffect, useState } from "react";
// import { Button, Drawer } from "antd";

// const GetResult = ({ missionId, items }) => {
//   // 初始化 items[missionId] 为一个空对象
//   items[missionId] = items[missionId] || {};

//   const [open, setOpen] = useState(false);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";

const GetResult = ({ missionId, items }) => {
  // 初始化 items[missionId] 为一个空对象
  items[missionId] = items[missionId] || {};

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Render the content based on items[missionId]
  const renderContent = () => {
    if (items[missionId]) {
      return (
        <>
          <p>输入：</p>
          <p>
            {items[missionId].content
              ? items[missionId].content
              : items[missionId].image}
          </p>
          <br />
          <p>输出：</p>
          <p>{items[missionId].answer}</p>
        </>
      );
    }
    return <p>数据未加载</p>;
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        查看结果
      </Button>
      <Drawer title="查看结果" onClose={onClose} open={open}>
        {renderContent()}
      </Drawer>
    </>
  );
};

export default GetResult;
