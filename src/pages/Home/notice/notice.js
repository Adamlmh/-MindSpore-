import React from 'react';
import { Card, List} from 'antd';
import "./notice.css"
const Notice = () => {
    let data = [
        '发布物理模型dam__GB_MAPsdfgsdfjsklfjsklfjsjskdlfjgsiokdjgisjfgijsdfklgj',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
    ];
    return(
        <Card
            title="排行榜"
            extra={<a href="#">更多</a>}
            className='notice'
        >
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>
                    <div className="list-item-container">
                        <p className="modelname">{item}</p>
                        <div className="right-container">
                            <p className="modelsign">【官方】</p>
                            <p className="modeltime">2021</p>
                        </div>
                    </div>
                </List.Item>}
            />
        </Card>

    )
       

};
export default Notice;