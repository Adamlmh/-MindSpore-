import Mymessage from "./bottom/bottom"
import Datacenter from "./datacenter/datacenter"
import Information from "./information/information"
import "./person.css"
const Person = () => {
    return (
        <div className="person_message">
            {/* 个人信息上方模块---两张卡片 */}
            <div className="person_top">

                {/* 左上角个人信息具体展示 */}
                <div className="person_topleft">
<Information></Information>
                </div>
                {/* 右上角数据中心 */}
                <div className="person_topright">
                    <Datacenter></Datacenter>
                </div>
            </div>
            {/* 个人信息下方模块---消息 作品 申请展示 */}
            <div className="person_bottom">
<Mymessage></Mymessage>
            </div>
        </div>
    )
}
export default Person