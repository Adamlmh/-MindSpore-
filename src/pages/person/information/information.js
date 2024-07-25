import "./information.css"
import { List, Input, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import { accountpersonalCenterInfo } from "../../../api/index"

const data = [
    {
        key: '用户名：',
        text: 'Racing car sprays burning fuel into crowd.sdfadjsfakdsjfakdsjfkadf'
    },
    {
        key: '邮箱：',
        text: 'Racing car sprays burning fuel into crowd.'
    },
    {
        key: '手机号：',
        text: 'Racing car sprays burning fuel into crowd.'
    },
    {
        key: '个性签名：',
        text: 'Racing car sprays burning fuel into crowd.'
    },
];

const Information = () => {
    const [status, setStatus] = useState('修改');
    const [disabled, setDisabled] = useState(true);
    const [userinformation, setUserinformation] = useState(data);
    const [image, setimage] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await accountpersonalCenterInfo(localStorage.getItem('userId'));
                const newUserInfo = [...userinformation]; // 创建一个副本
                newUserInfo[0].text = response.data.username;
                newUserInfo[1].text = response.data.email;
                newUserInfo[3].text = response.data.description || '暂无个性签名';
                setUserinformation(newUserInfo);
                setimage(response.data.image)

            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        fetchData();
    }, []);



    const btnClick = () => {
        setDisabled(!disabled);
        if (status === '修改') {
            setStatus('完成');
        } else {
            setStatus('修改');
        }
    };

    const handleInputChange = (index, e) => {
        const { value } = e.target;
        const newUserInfo = [...userinformation];
        newUserInfo[index].text = value;
        setUserinformation(newUserInfo);
    };

    return (
        <div className="information">
            {/* 头像 */}
            <div className="personal_header">
                <div className="head_image">
                    <img src={image}></img>
                </div>
            </div>
            {/* 信息展示 */}
            <div className="all_message">
                <List
                    className="mylist_message"
                    dataSource={userinformation}
                    renderItem={(item, index) => (
                        <List.Item style={{ border: 'none', whiteSpace: 'nowrap' }}>
                            <p className="text_key">{item.key}</p>
                            <Input
                                className="text_information"
                                disabled={disabled}
                                value={item.text}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        </List.Item>
                    )}
                />
            </div>
            {/* 修改按钮 */}

        </div>
    );
};

export default Information;