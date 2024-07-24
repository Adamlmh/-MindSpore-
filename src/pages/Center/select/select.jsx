import React from 'react';
import { Card } from 'antd'
import { RedoOutlined } from '@ant-design/icons';

const select = () => {

    const image_data = ['图像分类', '目标检测', '图像超分', '语义分割', '关键检测', '文本识别', '文本检测', '缺陷检测', '图像抠图', '视频分类'];
    const text_data = ['文本分类', '阅读理解', '自然语言', '情绪分类']
    const data_show = (data) => {
        return data.map((item) => {
            return (<div className="select_div"><span>{item}</span></div>)
        })
    }



    return (
        <div >
            <Card className="selectCard"
            >
                <div className="selectCardTop">
                    <span>筛选</span>
                    <span>
                        <span>
                            <RedoOutlined />
                        </span>
                        <span className="resert">
                            重置
                        </span>
                    </span>
                </div>
                <div className="from">
                    <p>来源</p>
                </div>
                <div className="select_image">
                    <p>图像</p>
                    <div className="select_image_box">
                        {data_show(image_data)}
                    </div>
                </div>
                <div className="select_text">
                    <p>文本</p>
                    <div className="select_text_box">
                        {data_show(text_data)}
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default select;
