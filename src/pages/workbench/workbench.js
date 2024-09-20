import Project from "./project/project";
import "./workbench.css";
import { useState } from "react";

import DynamicDragList from "./workSpace/index";
const Workbench = () => {
  const [flash, setFlash] = useState(false);
  const [items, setItems] = useState([]);
  const [missionId, setMissionId] = useState(null);
  //存储每个项目的层级数据便于直接渲染展示
  const [MissionListData, setMissionListData] = useState([]);
  return (
    <div className="workbench">
      {/* 左边项目模块 */}
      <div className="work_project">
        <Project
          flash={flash}
          missionId={missionId}
          setMissionId={setMissionId}
          items={items}
          setItems={setItems}
          setMissionListData={setMissionListData}
        />
      </div>
      {/* 中间选择组件模块 */}
      {/* <div className="work_model">
        <Workmodel></Workmodel>
      </div> */}
      {/* 右边工作台 */}
      {/* <div className="work_bench">

            </div> */}
      <DynamicDragList
        setFlash={setFlash}
        flash={flash}
        MissionListData={MissionListData}
      />
    </div>
  );
};
export default Workbench;
