import "./message.css"
import { Card } from 'antd';
import MessageCard from "./messagecard";
const MessageList = ({ type }) => (

        <div className="messagelist">
                <MessageCard type={type} status={'1'} num={'10'} />
                <MessageCard type={type} status={'1'} num={'90'} />
                <MessageCard type={type} status={'1'} num={'70'} />
                <MessageCard type={type} status={'0'} num={'30'} />
                <MessageCard type={type} status={'0'} num={'110'} />
                <MessageCard type={type} status={'0'} num={'110'} />
                <MessageCard type={type} status={'0'} num={'110'} />
                <MessageCard type={type} status={'0'} num={'110'} />
        </div>


);
export default MessageList;