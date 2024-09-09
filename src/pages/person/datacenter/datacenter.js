import MyECharts from "./echarts";
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
            <MyECharts></MyECharts>
                
            </Card>
        
    )
}
export default Datacenter;