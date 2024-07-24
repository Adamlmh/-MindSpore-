import React, { useState } from 'react';
import { Card } from 'antd'
import { Pagination, Button, Modal } from 'antd';

const RightTop = () => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

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
                        <Button className="input_find">搜索</Button>
                        <Button className="input_submit" onClick={showModal} >上传</Button>
                    </div>
                </div>

                <Modal
                    title="Title"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>{modalText}</p>
                </Modal>
            </Card>
        </div>
    );
}

export default RightTop;
