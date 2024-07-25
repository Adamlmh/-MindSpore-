import "./message.css"
import { Card,Button } from 'antd';
const MessageCard = ({modelname,time,name,type,status,num}) => {
    return(

    <Card className="messagecard">
        <div className="model_name_msg">模型名称{modelname}</div>
        <div className="model_time_msg msg_position">2024-07-15{time}</div>
        <div className="model_apply_msg msg_position">申请人 xxx{name}</div>
        {type === '1' && <div><Button type="text" className="msg_apply_disagree">拒绝</Button> <Button type="primary" className="msg_apply_agree">通过</Button></div>}
            {type === '3' && status === '1' && <div className="my_apply_condition isagree">已通过</div>}
            {type === '3' && status === '0' && <div className="my_apply_condition isdisagree">已拒绝</div>}
            {type === '2' && <div className="model_use_time">被调用次数：{num}</div>}
           
           
    </Card>


);}
export default MessageCard;