import React, { useState } from 'react';
import './center.css'
import { Card } from 'antd'
import { Pagination } from 'antd';
import RightCard from "./rightCard/rightCard"
import Select from "./select/select"
import RightTop from "./rightTop/rightTop"


const ResourceCenter = () => {
    const topimage = require('../../assest/images/topimage.jpg')
    const [current, setCurrent] = useState(3);


    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
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
                <div className="right">
                    <div className="right_top">
                        <RightTop />
                    </div>
                    <div className="right_content">
                        <RightCard />
                    </div>
                </div>
            </div>
            <div className="bottom_pages">
                <Pagination current={current} onChange={onChange} total={500} defaultPageSize={6} showSizeChanger={false} showQuickJumper />
            </div>
        </div>
    )
}

export default ResourceCenter;
