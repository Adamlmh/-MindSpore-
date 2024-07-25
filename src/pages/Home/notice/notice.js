import React, { useEffect, useState } from 'react';
import { Card, List} from 'antd';
import "./notice.css"
import { fetchRankApi } from "../../../api"
const Notice = () => {
   const [data,setData]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchRankApi();
               
                setData(response.data)
            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        fetchData();
    }, []);
    return(
        <Card
            title="排行榜"
            extra={<a href="#">更多</a>}
            className='notice'
            hoverable
        >
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>
                    <div className="list-item-container">
                        <p className="modelname">{item.modelName}</p>
                        <div className="right-container">
                            <p className="modelsign">{item.characterType===1?'【官方】':'【用户】'}</p>
                            <p className="modeltime">{item.createTime}</p>
                        </div>
                    </div>
                </List.Item>}
            />
        </Card>

    )
       

};
export default Notice;