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
        children: <MessageList></MessageList>,
    },
    {
        key: '2',
        label: '我的作品',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: '我的申请',
        children: 'Content of Tab Pane 3',
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