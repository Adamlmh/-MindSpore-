import React, { useState } from 'react';
import { Card, Alert, message } from 'antd';
import { CheckOutlined, EllipsisOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { applyModel } from "../../../api/index"

const RightCard = ({ data }) => {
    console.log(data)
    // 将 data 解构出来
    // const dataShow = () => {
    // if (data.data) {
    //     let content = data.data
    //     let modelsData = [];
    //     for (let i = 0; i < content.length; i++) {
    //         modelsData.push(
    //             <Card key={i} className="right_content_card">
    //                 <div className="right_content_card_div">
    //                     <div className="offical_or_user_tag">
    //                         <div>官方</div>
    //                     </div>
    //                     <h2>{content[i].modelName}</h2>
    //                     <p>2024-07-15</p>
    //                     <div>
    //                         <ul className=".right_content_card_divul">
    //                             {/* li 元素应该放在 Card 的外层 */}
    //                             <p className=".right_content_card_divulli">图像分类</p>
    //                             <p lassName=".right_content_card_divulli">目标检测</p>
    //                             <p lassName=".right_content_card_divulli">语义分割</p>
    //                             <p lassName=".right_content_card_divulli">关键检测</p>
    //                         </ul>
    //                     </div>
    //                     <div className="information_in_rightCard">
    //                         <div>
    //                             <span>发布者:</span>
    //                             <span>xxx</span>
    //                         </div>
    //                         <div>
    //                             <span>数据集:</span>
    //                             <span>xxx:</span>
    //                         </div>
    //                         <div>
    //                             <span>描述:</span>
    //                             <span>{content[i].description}</span>
    //                         </div>
    //                     </div>
    //                     <div className="button_div">
    //                         <button className="CheckOutlined"><span><CheckOutlined /></span></button>
    //                         <button className="EllipsisOutlined"><span><EllipsisOutlined /></span></button>
    //                     </div>
    //                 </div>
    //             </Card>
    //         );
    //     }
    //     return modelsData;
    const [alert, setAlert] = useState({ message: '', type: '' });
    const [isDisabled, setIsDisabled] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: '已成功申请，请等候同意',
        });
        setIsDisabled(true); // 禁用点击
        setTimeout(() => {
            setIsDisabled(false); // 恢复点击
        }, 2000);
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Error fetching models',
        });
    };

    const setAlertTimeout = (setter, data, duration = 1500) => {
        setIsDisabled(true); // 禁用点击
        setter({ message: data.message, type: data.type });
        setTimeout(() => {
            setter({ message: '', type: '' });
            setIsDisabled(false); // 恢复点击
        }, duration);
    };

    const applyModelClick = async (e) => {
        let eParent = e.target;
        while (!eParent.id) {
            eParent = eParent.parentNode;
        }
        try {
            const response = await applyModel(eParent.id, localStorage.getItem('userId'));
            success()
        } catch (error) {
            error()
        }
    };

    const buttonReturn = (sign, divid) => {
        if (sign === 0) {
            return <button className="CheckOutlined" onClick={applyModelClick} id={divid}><span><VerticalAlignBottomOutlined /> </span></button>;
        }
        if (sign === 1) {
            return <button className="CheckOutlined" id={divid}><span><CheckOutlined /> </span></button>;
        }
        if (sign === 2) {
            return <button className="CheckOutlined" id={divid}><span><EllipsisOutlined /> </span></button>;
        }
    };

    const dataShow = () => {
        if (data.data) {
            return data.data.map((item, index) => (
                <Card key={index} className="right_content_card" hoverable={true}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                    <div className="right_content_card_div">
                        <div className="offical_or_user_tag">
                            <div>{item.characterType ? '用户' : '官方'}</div>
                        </div>
                        <h2>{item.modelName}</h2>
                        <p>{item.createTime}</p>
                        <div>
                            <ul className="right_content_card_divul">
                                <p className="right_content_card_divulli">图像分类</p>
                                <p className="right_content_card_divulli">目标检测</p>
                                <p className="right_content_card_divulli">图像超分</p>
                                <p className="right_content_card_divulli">文本检测</p>
                            </ul>
                        </div>
                        <div className="information_in_rightCard">
                            <div>
                                <span>模型ID:</span>
                                <span>{item.modelId}</span>
                            </div>
                            <div>
                                <span>版本号:</span>
                                <span>{item.version}</span>
                            </div>
                            <div>
                                <span>描述:</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    </div>
                    <div className="button_div">
                        {buttonReturn(item.sign, item.modelId)}
                    </div>
                </Card>
            ));
        }
    };
    return (
        <div className={isDisabled ? 'disabled right_content_grid' : 'right_content_grid'}>
            {alert.message && <Alert message={alert.message} type={alert.type} className="alert_message" />}
            {dataShow()}
            {contextHolder}
        </div>
    );
};

export default RightCard;