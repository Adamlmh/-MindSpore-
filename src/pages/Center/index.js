import React from 'react';
import './center.css'
import { Card } from 'antd'
import { SettingOutlined } from '@ant-design/icons';




const ResourceCenter = () => {
    console.log(`555`)
    const topimage = require('../../assest/images/topimage.jpg')

    return (
        <div className="">
            <div className="top_image">
                <img src={topimage}></img>
            </div>
            <div className="select">
                <Card className="selectCard"
                >
                    <div className="selectCardTop">
                        <span>筛选</span>
                        <span>重置</span>
                        <span><SettingOutlined /></span>
                    </div>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <div className="right_top">
                <Card className="right_top_card"
                >
                    <div className="all_count">总数</div>
                    <div className="all_count_num">123456</div>
                    <input type="text" className="input_text" />
                    <button className="input_find">搜索</button>
                    <button className="input_submit">上传</button>
                </Card>
            </div>
            <div className="right_content">
                {/* <Card className="right_content_card"
                >
                </Card> */}
            </div>

        </div>
    )
}

export default ResourceCenter;
