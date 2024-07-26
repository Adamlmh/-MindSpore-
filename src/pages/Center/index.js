import React, { useState, useEffect } from 'react';
import './center.css';
import { Pagination, Alert } from 'antd';
import RightCard from "./rightCard/rightCard";
import Select from "./select/select";
import RightTop from "./rightTop/rightTop";
import { modelAllModelsApi, fetchRankApi } from "../../api/index";
import { useDispatch } from 'react-redux';
import { setMobanList } from '../../stores/modules/moban';

const ResourceCenter = () => {
    const topimage = require('../../assest/images/topimage.jpg');
    const [current, setCurrent] = useState(1);
    const [maxNum, setMaxNum] = useState(1);
    const [models, setModels] = useState([]);
    const [information, setInformation] = useState({ userId: localStorage.getItem('userId'), page: 1, name: '' });
    const dispatch = useDispatch();


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await modelAllModelsApi(information.userId, information.page, information.name);
                const responseContent = await fetchRankApi();
                setModels(response.data);
                setMaxNum(responseContent.data.length);
            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };

        fetchData();
    }, [information]); // 添加 information 作为 useEffect 的依赖项

    const onChange = async (page) => {
        try {
            setCurrent(page); // 先更新 current 状态

            setInformation(prevInformation => ({
                ...prevInformation,
                page: page // 更新 information 的 page
            }));
        } catch (error) {
            console.error('Error fetching models:', error);
        }
    };

    const handleChildData = async (dataFromChild) => {
        const { userId, page, name } = dataFromChild;
        try {
            setCurrent(1);
            setInformation(prevInformation => ({
                ...prevInformation,
                page: 1,// 更新 information 的 page
                name: name
            }));
            // const response = await modelAllModelsApi(userId, page, name);
        } catch (error) {
            console.error('Error fetching models:', error);
        }

    };

    return (
        <div className="big_box">

            <div className="top_image">
                <img src={topimage} alt="topimage" />
            </div>
            <div className="centerPageBottom">
                <div className="select">
                    <Select />
                </div>
                <div className="rightCenter">
                    <div className="right_top">
                        <RightTop onData={handleChildData} maxNum={maxNum} />
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
    );
};

export default ResourceCenter;

