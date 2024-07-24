import "./information.css"
import {List ,Input, Button} from 'antd';
import {EditOutlined  } from '@ant-design/icons';
const data = [
    {
        key:'用户名：',
        text:'Racing car sprays burning fuel into crowd.sdfadjsfakdsjfakdsjfkadf'
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
const Information = () => (
 
        <div className=" information">
            {/* 头像 */}
            <div className="personal_header">
                <div className="head_image">
                <Input type="file" className="shangchuan" />
                </div>
                
            </div>
            {/* 信息展示 */}
            <div className="all_message">
            <List
                className="mylist_message"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item style={{ border: 'none', whiteSpace:'nowrap'}}>
                       <p className="text_key">{item.key}</p>
                       <p className="text_information">{item.text}</p>
                    </List.Item>
                )}
            />
            </div>
            {/* 修改按钮 */}
        <Button type="primary" icon={<EditOutlined />} className="mymessage_btn">修改</Button>
        </div>
     
);
export default Information;