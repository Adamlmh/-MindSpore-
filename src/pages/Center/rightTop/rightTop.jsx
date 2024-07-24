import React, { useState } from 'react';
import { Card } from 'antd'
import { Pagination, Button, Modal, Input, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const RightTop = () => {

    //弹窗
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        fileList.forEach(file => {
            message.loading('Uploading...', 2.5)
                .then(() => message.success(`${file.name} uploaded successfully`, 2.5))
                .catch(() => message.error(`${file.name} upload failed`, 2.5));
        });

        // Clear fileList after upload
        setFileList([]);
        setTimeout(() => {

            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    //大文件上传
    const props = {
        name: 'file',
        multiple: false,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };


    const [fileList, setFileList] = useState([]);

    const handleFileChange = (info) => {
        let fileList = [...info.fileList];

        // Limit the number of uploaded files
        fileList = fileList.slice(-2);

        // Save file list to state
        setFileList(fileList);
    };

    const handleUpload = () => {
        // Simulate uploading
        fileList.forEach(file => {
            message.loading('Uploading...', 2.5)
                .then(() => message.success(`${file.name} uploaded successfully`, 2.5))
                .catch(() => message.error(`${file.name} upload failed`, 2.5));
        });

        // Clear fileList after upload
        setFileList([]);
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
                    title="上传"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    className="jumo_modal"
                >
                    <Input placeholder="模型名称" />
                    <Input placeholder="标签" />
                    <Input placeholder="描述" />
                    <p className="title_topic">文件</p>
                    <Dragger
                        fileList={fileList}
                        onChange={handleFileChange}
                        showUploadList={true}
                        beforeUpload={() => false} // Prevent auto-upload
                        style={{ width: '150px' }}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text"></p>
                        <p className="ant-upload-hint">

                        </p>
                    </Dragger>
                </Modal>
            </Card>
        </div>
    );
}

export default RightTop;
