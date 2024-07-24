import React from 'react';
import { Card } from 'antd'

const rightTop = () => {
    return (
        <div>
            <Card className="right_top_card"
            >
                <div className="all_count">总数</div>
                <div className="all_count_num">123456</div>
                <input type="text" className="input_text" />
                <button className="input_find">搜索</button>
                <button className="input_submit">上传</button>
            </Card>
        </div>
    );
}

export default rightTop;
