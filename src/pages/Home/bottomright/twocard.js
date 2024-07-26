import React, { useEffect, useState } from 'react';
import { fetchRecentTaskApi } from '@/api';
import { Card, List } from 'antd';
import "./twocard.css"
// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

const TwoBottomCard= () => {
    const [data, setData] = useState({})
    const userId = localStorage.getItem("userId")
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetchRecentTaskApi(userId);
                setData(response.data)
                console.log(data);
            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        fetchData();
    }, []);
    return(
    <div className='cont'>
        <Card
            title="最近工程"
            className='top_card'
            hoverable
        >
            <List
                size="small"
                bordered
                // dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </Card>
        <Card
            hoverable
            size="small"
            title="数据反馈"
            extra={<a href="#">更多</a>}
           className='bottom_card'
        >
            <div className='image'></div>
        </Card>
    </div>
);}
export default TwoBottomCard;
