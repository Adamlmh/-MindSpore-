import React from 'react';
import { Card } from 'antd'

const rightTop = () => {
    return (
        <div>
            <Card className="right_top_card"
            >
                <div className="bigdiv">
                    <div className="right_top_card_left">
                        <div>总数</div>
                        <div>123456</div>
                    </div>

                    <div className="right_top_card_right">
                        <input type="text" className="input_text" />
                        <button className="input_find">搜索</button>
                        <button className="input_submit">上传</button>
                    </div>

                </div>

            </Card>
        </div>
    );
}

export default rightTop;
