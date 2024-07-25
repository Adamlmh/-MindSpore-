import { useState } from "react";
import "./message.css"
import { Card,Button } from 'antd';
import { agreeApply, disagreeApply } from "../../../../api"
const MessageCard = ({ modelName, time, name, type,  num, status, applicationId }) => {
    const [agree,setAgree]=useState(status)
    const choice=(msg)=>{
        if(msg==1){
            setAgree(1)
            const fetchData = async () => {
                try {
                    const response = await agreeApply(applicationId);
                    console.log(response);
                } catch (error) {
                    console.error('Error fetching models:', error);
                }
            };
            fetchData(); 
        }
        if(msg==2){
            setAgree(2)
            const fetchData = async () => {
                try {
                    const response = await disagreeApply(applicationId);
                    console.log(response);
                } catch (error) {
                    console.error('Error fetching models:', error);
                }
            };
            fetchData(); 
        }
    }
    return(

        <Card className="messagecard" hoverable>
        <div className="model_name_msg">{modelName}</div>
        <div className="model_time_msg msg_position">{time}</div>
            {type === '1' && <div className="model_apply_msg msg_position">申请人: {name}</div>}
            {type === '3' && <div className="model_apply_msg msg_position">{name}的模型</div>}
            {type === '1' &&agree==0 && <div><Button type="text" className="msg_apply_disagree" onClick={() => choice(2)}>拒绝</Button> <Button type="primary" className="msg_apply_agree" onClick={() => choice(1)}>通过</Button></div>}
            {type === '3' && status== '1' && <div className="my_apply_condition isagree">已通过</div>}
            {type === '3' && status == '0' && <div className="my_apply_condition isagree">待处理</div>}
            {type === '3' && status == '2' && <div className="my_apply_condition isdisagree">已拒绝</div>}
            {type === '2' && <div className="model_use_time">被调用次数：{num}</div>}
            {type === '1' && agree == 1 && <div className="my_choice choise_agree">已同意</div>}
            {type === '1' && agree == 2 && <div className="my_choice choise_disagree">已拒绝</div>}
           
    </Card>


);}
export default MessageCard;