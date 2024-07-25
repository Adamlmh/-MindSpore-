import React, { useEffect, useState } from 'react';
import "./apply.css"
import { Card } from "antd";
import { fetchAllApplicationApi } from "../../../api"
const Apply=()=>{
    const [data,setData]=useState({})
    const userId = localStorage.getItem("userId")
    useEffect(() => {
        const fetchData = async () => {
            try {
        
                const response = await fetchAllApplicationApi(userId);
                setData(response.data)
            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        fetchData();
    }, []);
    return (
<div className="apply">

            {/* <h3>我的申请</h3> */}

            <div className="show">
                <div className="show_content all">
                    <div className="show_name">
                        <h3 className="name">全部</h3>
                        <h1 className="sum">{data.allApplication}</h1>
                    </div>
                </div>
                <div className="show_content wait">
                    <div className="show_name">
                        <h3 className="name">作品</h3>
                        <h1 className="sum">{data.remainApplication}</h1>
                    </div>
                </div>
                <div className="show_content wait_check">
                    <div className="show_name">
                        <h3 className="name">待审核</h3>
                        <h1 className="sum">{data.remainApplication}</h1>
                    </div>
                </div>
                <div className="show_content disagree">
                    <div className="show_name">
                        <h3 className="name">驳回</h3>
                        <h1 className="sum">{data.rejectedApplication}</h1>
                    </div>
                </div>
                <div className="show_content agree">
                    <div className="show_name">
                        <h3 className="name">通过</h3>
                        <h1 className="sum">{data.passedApplication}</h1>
                    </div>
                </div>
            </div>
</div>
    )
}
export default Apply;