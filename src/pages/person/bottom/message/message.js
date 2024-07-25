import "./message.css"
import { Card, Pagination } from 'antd';
import MessageCard from "./messagecard";
const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
};
const MessageList = ({ type }) => (

        <div className="messagebox">
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
                <div className="msg_page">
                        <Pagination showQuickJumper defaultCurrent={2} total={500} align="center" onChange={onChange} />
                </div>
                
        </div>


);
export default MessageList;