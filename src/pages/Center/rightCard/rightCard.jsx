import React from 'react';
import { Card } from 'antd'
import { CheckOutlined, RedoOutlined, EllipsisOutlined } from '@ant-design/icons';

const rightCard = () => {

    //暂用先用这个渲染
    const dataShow = () => {
        console.log(`555`)
        let data = [];
        for (let i = 0; i < 6; i++) {
            data.push(<Card className="right_content_card">
                <div className="right_content_card_div">
                    <div className="offical_or_user_tag">
                        <div>官方</div>
                    </div>
                    <h2>模型名称</h2>
                    <p>2024-07-15</p>
                    <div>
                        <ul>
                            <li key={1}>图像分类</li>
                            <li key={2}>图像分类</li>
                            <li key={3}>图像分类</li>
                            <li key={4}>图像分类</li>

                        </ul>
                    </div>
                    <div className="information">
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
                            <span>xxx:</span>
                        </div>
                    </div>
                    <div className="button_div">
                        <button className="CheckOutlined"><span><CheckOutlined /></span></button>
                        <button className="EllipsisOutlined"><span><EllipsisOutlined /></span></button>
                    </div>
                </div>
            </Card>)
        }
        console.log(data)
        return data
    }







    return (
        <div className="right_content_grid">
            {dataShow()}
        </div>
    );
}

export default rightCard;
