import React, { useState, useEffect } from 'react';
import './center.css'
import { Card } from 'antd'
import { Pagination, Button, Modal } from 'antd';
import RightCard from "./rightCard/rightCard"
import Select from "./select/select"
import RightTop from "./rightTop/rightTop"
import { modelAllModelsApi, fetchRankApi } from "../../api/index"


const ResourceCenter = () => {
    const topimage = require('../../assest/images/topimage.jpg')
    const [current, setCurrent] = useState(1);
    const [maxNum, setMaxNum] = useState(1)
    const [models, setModels] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await modelAllModelsApi(localStorage.getItem('userId'));
                const responoseContent = await fetchRankApi()
                setModels(response.data); // 假设后端返回的数据在 response.data 中
                setMaxNum(responoseContent.data.length)

            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        fetchData();
    }, []);

    const onChange = async (page) => {
        try {
            await setCurrent(page);
            const response = await modelAllModelsApi(localStorage.getItem('userId'), page);
            await setModels(response.data); // 假设后端返回的数据在 response.data 中

        } catch (error) {
            console.error('Error fetching models:', error);
        }

    };

    return (
        <div className="big_box">
            <div className="top_image">
                <img src={topimage}></img>
            </div>
            <div className="centerPageBottom">

                <div className="select">
                    <Select />
                </div>
                <div className="rightCenter">
                    <div className="right_top">
                        <RightTop />
                    </div>
                    <div className="right_content">
                        <RightCard data={models} />
                    </div>
                </div>

            </div>
            <div className="bottom_pages">
                <Pagination current={current} onChange={onChange} total={maxNum} defaultPageSize={6} showSizeChanger={false} showQuickJumper />
            </div>

        </div>
    )
}

export default ResourceCenter;
