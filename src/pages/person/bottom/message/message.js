import "./message.css"
import React, { useEffect, useState } from 'react';
import { fetchMyModel, fetchMyMessage, fetchMyApply } from "../../../../api"
import { Card, Pagination } from 'antd';
import MessageCard from "./messagecard";

const MessageList = ({ type }) => {
        
        const [myModel, setMyModel] = useState({ data: [] })
        const [myMessage, setMyMessage] = useState({ data: [] })
        const [myApply, setMyApply] = useState({ data: [] })
        const [total,setTotal]=useState(0)
        const [page, setPage] = useState(1)
        const userId = localStorage.getItem("userId")
        const onChange = (pageNumber) => {
                setPage(pageNumber)
        };
        useEffect(() => {
                if(type==='2'){
                        const fetchData = async () => {
                                try {

                                        const response = await fetchMyModel(userId, page);
                                        setMyModel(response.data)
                                        setTotal(response.data.total)
                                        // console.log(response.data);
                                } catch (error) {
                                        console.error('Error fetching models:', error);
                                }
                        };
                        fetchData(); 
                }
                if(type==='1'){
                        const fetchData = async () => {
                                try {
                                        const response = await fetchMyMessage(userId, page);
                                        setMyMessage(response.data)
                                        console.log(response.data);
                                        setTotal(response.data.total)
                                        // console.log(response.data);
                                } catch (error) {
                                        console.error('Error fetching models:', error);
                                }
                        };
                        fetchData(); 
                }      
        }, [page]);
        // console.log(total);
        return (

        <div className="messagebox">
                <div className="messagelist">
                        {type==='2'&&myModel.data.map((item)=>{return(
                                <MessageCard type={type}
                                        num={item.useTimes}
                                        time={item.createTime}
                                        modelName={item.modelName}
                                        name={userId} />
                        )})}
                                {type === '1' && myMessage.data.map((item) => {
                                        return (
                                                <MessageCard type={type}
                                                        time={item.applyTime}
                                                        modelName={item.modelName}
                                                        name={item.applicantName} />
                                        )
                                })}
                        <MessageCard type={type} agree={'1'} num={'10'} />
                                <MessageCard type={type} agree={'1'} num={'90'} />
                                <MessageCard type={type} agree={'1'} num={'70'} />
                                <MessageCard type={type} agree={'0'} num={'30'} />
                        <MessageCard type={type} agree={'0'} num={'110'} />
                                <MessageCard type={type} agree={'0'} num={'110'} />
                                <MessageCard type={type} agree={'0'} num={'110'} />
                                <MessageCard type={type} agree={'0'} num={'110'} />
                </div>
                <div className="msg_page">
                        <Pagination showQuickJumper defaultCurrent={2} total={total} align="center" onChange={onChange} />
                </div>
                
        </div>


);}
export default MessageList;