import React from 'react';
import { Card } from 'antd'
import { SettingOutlined } from '@ant-design/icons';

const select = () => {
    return (
        <div >
            <Card className="selectCard"
            >
                <div className="selectCardTop">
                    <span>筛选</span>
                    <span>   <SettingOutlined />重置</span>

                </div>
                <div className="from">
                    <h3>来源</h3>
                    <div className="from_offical"><span>官方</span></div>
                    <div className="from_user"><span>用户</span></div>
                </div>
                <div className="select_image">
                    <h3>图像</h3>
                    <div className="select_image_div"><span>图像分类</span></div>

                </div>


            </Card>
        </div>
    );
}

export default select;
