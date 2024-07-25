import "./datacenter.css"
import { Card } from 'antd';
const Datacenter=()=>{
    return(
       
            <Card
                className="datacenter"
                size="small"
                title="数据中心"
            hoverable
            >
                <div className="datacenterBox">
                <div className="datapic_left"></div>
                <div className="datapic_right"></div>
                </div>
                
            </Card>
        
    )
}
export default Datacenter;