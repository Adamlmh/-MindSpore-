import React, { useState, useRef } from 'react';
import { Card } from 'antd'
import { Button, Input, message, Upload, Drawer, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



const RightTop = ({ onData, maxNum }) => {
    const { TextArea } = Input;
    //弹窗
    const searchRef = useRef()
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


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



    //搜索
    const sendDataToParent = () => {
        const newData = {
            userId: localStorage.getItem('userId'),
            page: 1,
            name: searchRef.current.value
        }
        onData(newData); //
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
