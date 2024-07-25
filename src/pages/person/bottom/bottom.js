import "./bottom.css"
import MessageList from"./message/message"
import { Tabs } from 'antd';
const onChange = (key) => { 
    console.log(key);
};
const items = [
    {
        key: '1',
        label: '我的消息',
        children: <MessageList type={'1'}></MessageList>,
    },
    {
        key: '2',
        label: '我的作品',
        children: <MessageList type={'2'}></MessageList>,
    },
    {
        key: '3',
        label: '我的申请',
        children: <MessageList type={'3'}></MessageList>,
    },
];
const Mymessage = () => {
    return(
        <Tabs
        className="mytab"
            onChange={onChange}
            type="card"
            items={items}
           
        />
    )
};
export default Mymessage;