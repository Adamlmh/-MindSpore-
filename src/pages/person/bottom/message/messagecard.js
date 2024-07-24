import "./message.css"
import { Card,Button } from 'antd';
const MessageCard = ({modelname,time,name,key}) => {
    console.log(key);
    return(

    <Card className="messagecard">
        <div className="model_name_msg">模型名称{modelname}</div>
        <div className="model_time_msg msg_position">2024-07-15{time}</div>
        <div className="model_apply_msg msg_position">申请人 xxx{name}</div>
        {/* {key === '1' && <div><Button type="text" className="msg_apply_disagree">拒绝</Button> <Button type="primary" className="msg_apply_agree">通过</Button></div>} */}
            <div><Button type="text" className="msg_apply_disagree">拒绝</Button> <Button type="primary" className="msg_apply_agree">通过</Button></div>
        
    </Card>


);}
export default MessageCard;