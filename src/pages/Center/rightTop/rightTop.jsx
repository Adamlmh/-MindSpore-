import React, { useState, useRef } from 'react';
import { Card } from 'antd'
import { Pagination, Button, Modal, Input, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { allModelsApi, modelAllModelsApi } from "../../../api/index"
const { Dragger } = Upload;

const RightTop = ({ onData, maxNum }) => {

    //弹窗
    const searchRef = useRef()
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

    //搜索
    const sendDataToParent = () => {
        const newData = {
            userId: localStorage.getItem('userId'),
            page: 1,
            name: searchRef.current.value
        }
        onData(newData); // 调用父组件传递的回调函数，传递数据
    };


    return (

        <Card className="right_top_card"
            hoverable={true}
        >
            <div className="bigdiv">
                <div className="right_top_card_left">
                    <div style={{ fontSize: 20, fontWeight: 700 }}>总数:</div>
                    <div style={{ fontSize: 20, fontWeight: 700 }}>{maxNum}</div>
                </div>

                <div className="right_top_card_right">
                    <Input className="input_text" ref={searchRef} placeholder="请输入" />
                    <Button className="input_find" onClick={sendDataToParent} >搜索</Button>
                    {/* <Button className="input_submit" onClick={showModal} >上传</Button> */}
                </div>
            </div>
        </Card>

    );
}

export default RightTop;
