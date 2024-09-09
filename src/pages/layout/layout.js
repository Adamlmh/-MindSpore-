import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import "./layout.css"
import { LogoutOutlined, HomeOutlined, CodepenOutlined, DatabaseOutlined, ExclamationCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Layout, Menu, Button } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Outlet } from 'react-router-dom';
import { accounthomePageInfo } from "../../api/index"
const { Header, Content, Sider } = Layout;


const Guidance = () => {

    const navigate = useNavigate();
    const divImageRef = useRef()
    const path=window.location.pathname
    const [selectedKey, setSelectedKey] = useState(path);
    const handleMenuClick = (key) => {
        setSelectedKey(key)
        navigate(key)
    };

    //获取用户信息
    const [userInformation, setUserInformation] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await accounthomePageInfo(localStorage.getItem('userId'));
                setUserInformation(response.data); // 假设后端返回的数据在 response.data 中
            } catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        fetchData();

    }, []);

    return (
        <Layout>
            <Header
                className='head'
            >
                <div className='demo_logo'>
                    <div className='logo'></div>
                    <div className='logo_name' >万千魔型</div>
                </div>
                <div className='right_head'>
                    <div className='search'>
                        <Input className='search_input' type='text' placeholder='搜索' />
                        <Button className='search_btn' type='text'><i className="iconfont icon-sousuo"></i></Button>
                    </div>
                    <div className='person'>
                        <div className='person_head'  ><img src={userInformation.image}></img> </div>
                        <div className='person_name'>{userInformation.username}</div>
                    </div>
                    <div className='more'>
                        <div className='icon'></div>
                        <div className='icon'></div>
                    </div>
                </div>

            </Header>
            <Layout >
                <Sider
                    className='sider'
                    theme='light'
                    width={160}
                >
                    <Menu className='menu'
                        mode='inline'
                        
                        >
                        <div className='all_menu'>
                            <div className='top_menu' >
                                <Menu
                                    defaultSelectedKeys={[selectedKey]}>
                                    <MenuItem key='/home' icon={<HomeOutlined />} className='menu_item' onClick={() => handleMenuClick('/home')}  >首页</MenuItem>
                                <MenuItem key='/center' icon={<DatabaseOutlined />} className='menu_item' onClick={() => handleMenuClick('/center')}>资源中心</MenuItem>
                                <MenuItem key='/workbench' icon={<CodepenOutlined />} className='menu_item' onClick={() => handleMenuClick('/workbench')}>工作台</MenuItem>
                                <MenuItem key='/person' icon={<UserOutlined />} className='menu_item' onClick={() => handleMenuClick('/person')}>个人信息</MenuItem>
                                </Menu>
                            </div>
                            <div className='bottom_menu'>
                                <Menu>
                                <MenuItem key='5' icon={<ExclamationCircleOutlined />} className='menu_item' >帮助</MenuItem>
                                <div key='6' className='menu_item more_about'><a href='#'>更多</a>    |    <a href='#'>关于</a></div>
                                <MenuItem key='7' icon={<LogoutOutlined />} className='menu_item' onClick={() => handleMenuClick('/login')}>退出登录</MenuItem>
                                </Menu>
                            </div>
                        </div>

                    </Menu>
                </Sider>
                <Layout
                    style={{
                        // minWidth:'600px',
                        backgroundColor: '#f2f6fd'
                    }}
                >
                    <div style={{ minWidth: "500px !important" }}>
                        <Content
                            className='content'
                        >
                            <Outlet></Outlet>
                        </Content>
                    </div>

                </Layout>
            </Layout>
        </Layout>
    );
};
export default Guidance;