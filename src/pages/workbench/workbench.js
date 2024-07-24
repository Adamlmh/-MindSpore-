import Project from "./project/project";
import "./workbench.css";

import DynamicDragList from "./workSpace/index";
const Workbench = () => {
  return (
    <div className="workbench">
      {/* 左边项目模块 */}
      <div className="work_project">
        <Project />
      </div>
      {/* 中间选择组件模块 */}
      {/* <div className="work_model">
        <Workmodel></Workmodel>
      </div> */}
      {/* 右边工作台 */}
      {/* <div className="work_bench">

            </div> */}
      <DynamicDragList />
    </div>
  );
};
export default Workbench;
