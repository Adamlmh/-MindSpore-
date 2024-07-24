import "./message.css"
import { List, Input, Pagination,Button } from 'antd';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',

];

const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
};
const MessageList = () => (
       
        <List
            className="messageList"
        header={<div className="messageList_head">
            <div className="message_cue">有24条未读消息</div>
            <div className="mymessage_topright">
                <div className="message_search">
                    <Input />
                </div>
                <div className="message_sign">
                    <Button className="sign_agree" >全部标记为已读</Button>
                </div>
            </div>
        </div>}
        footer={<Pagination showQuickJumper align="center" defaultCurrent={2} total={500} onChange={onChange} />}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    {item}
                </List.Item>
            )}
        />
       

);
export default MessageList;