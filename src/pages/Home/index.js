import "./home.css"
import Notice from "./notice/notice"
import Apply from "./apply/apply"
import TwoBottomCard from "./bottomright/twocard"
import { Card } from "antd";
const Home = () => {
    return (
        <div className="home">

            <div className="top_bottom">
                <Apply></Apply>
            </div>

            <div className="bottom-content">
                <div className="left">
                    <Notice></Notice>
                </div>
                <div className="right">
                    <TwoBottomCard />
                </div>
            </div>
        </div>
    )
}
export default Home