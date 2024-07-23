import React from 'react';
import { Card, List} from 'antd';
import "./notice.css"
const Notice = () => {
    let data = [
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
        '发布物理模型dam__GB_MAP',
    ];
    return(
        <Card
            title="通知"
            extra={<a href="#">更多</a>}
            className='notice'
        >
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </Card>

    )
       

};
export default Notice;