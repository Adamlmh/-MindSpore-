import "./datacenter.css"
import { Card } from 'antd';
const Datacenter=()=>{
    return(
       
            <Card
                className="datacenter"
                size="small"
                title="数据中心"
            hoverable
                extra={<a href="#">更多</a>}
                
            >
                
            </Card>
        
    )
}
export default Datacenter;