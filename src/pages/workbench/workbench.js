import Project from "./project/project";
import "./workbench.css";
import { useState } from "react";

import DynamicDragList from "./workSpace/index";
const Workbench = () => {
  const [flash, setFlash] = useState(false);
  const [items, setItems] = useState([]);
  const [missionId, setMissionId] = useState(0);
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
        />
      </div>
      {/* 中间选择组件模块 */}
      {/* <div className="work_model">
        <Workmodel></Workmodel>
      </div> */}
      {/* 右边工作台 */}
      {/* <div className="work_bench">

            </div> */}
      <DynamicDragList setFlash={setFlash} flash={flash} />
    </div>
  );
};
export default Workbench;
