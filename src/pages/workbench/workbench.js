import Project from "./project/project";
import "./workbench.css"
import Workmodel from "./workmodel/workmodel";

const Workbench=()=>{
    return(
        <div className="workbench">
            <div className="work_project">
                <Project />
            </div>
            <div className="work_model">
                <Workmodel></Workmodel>
            </div>
        </div>
    )
}
export default Workbench;