import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { CheckOutlined, EllipsisOutlined } from '@ant-design/icons';

const RightCard = ({ data }) => {
    // 将 data 解构出来
    const dataShow = () => {
        if (data.data) {
            let content = data.data
            let modelsData = [];
            for (let i = 0; i < content.length; i++) {
                modelsData.push(
                    <Card key={i} className="right_content_card">
                        <div className="right_content_card_div">
                            <div className="offical_or_user_tag">
                                <div>官方</div>
                            </div>
                            <h2>{content[i].modelName}</h2>
                            <p>2024-07-15</p>
                            <div>
                                <ul className=".right_content_card_divul">
                                    {/* li 元素应该放在 Card 的外层 */}
                                    <p className=".right_content_card_divulli">图像分类</p>
                                    <p lassName=".right_content_card_divulli">图像分类</p>
                                    <p lassName=".right_content_card_divulli">图像分类</p>
                                    <p lassName=".right_content_card_divulli">图像分类</p>
                                </ul>
                            </div>
                            <div className="information_in_rightCard">
                                <div>
                                    <span>发布者:</span>
                                    <span>xxx</span>
                                </div>
                                <div>
                                    <span>数据集:</span>
                                    <span>xxx:</span>
                                </div>
                                <div>
                                    <span>描述:</span>
                                    <span>{content[i].description}</span>
                                </div>
                            </div>
                            <div className="button_div">
                                <button className="CheckOutlined"><span><CheckOutlined /></span></button>
                                <button className="EllipsisOutlined"><span><EllipsisOutlined /></span></button>
                            </div>
                        </div>
                    </Card>
                );
            }
            return modelsData;
        }
    };

    return (
        <div className="right_content_grid">
            {dataShow()}
        </div>
    );
};

export default RightCard;