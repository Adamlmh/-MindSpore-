import React, { useState, useRef } from 'react';
import { Card } from 'antd'
import { Button, Input, message, Upload, Drawer, Form, Flex } from 'antd';
import { InboxOutlined, LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { allModelsApi, modelAllModelsApi } from "../../../api/index"
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const RightTop = ({ onData, maxNum }) => {
    const { TextArea } = Input;
    //弹窗
    const searchRef = useRef()
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
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
                    <Button className="input_submit" onClick={showDrawer} >上传</Button>
                </div>
            </div>
            <Drawer
                onClose={onClose}
                open={open}
                title={'上传模型'}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div style={{ minHeight: '600px', height: 'calc(100% - 50px)', }}>
                    <h3 style={{ marginBottom: '10px' }}>模型标题</h3>
                    <TextArea

                        rows={1}
                        style={{
                            backgroundColor: '#f0f0f0',
                            resize: 'none',
                            marginBottom: '30px',
                        }}
                    />
                    <h3 style={{ marginBottom: '10px' }}>模型简介</h3>
                    <TextArea

                        rows={5}
                        style={{
                            backgroundColor: '#f0f0f0',
                            resize: 'none',
                        }}
                    />
                    <Upload {...props} style={{}}>
                        <Button icon={<UploadOutlined />} style={{ width: '330px', height: '50px', marginTop: '50px' }}>点击上传文件</Button>
                    </Upload>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        style={{ width: '330px', height: '50px' }}
                        onClick={onClose}
                    >
                        确定
                </Button>
                </div>

            </Drawer>
        </Card>

    );
}

export default RightTop;
