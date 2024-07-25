import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'

import "./layout.css"
import { LogoutOutlined, HomeOutlined, CodepenOutlined, DatabaseOutlined, ExclamationCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Layout, Menu, theme, Button } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Outlet } from 'react-router-dom';
const { Header, Content, Sider } = Layout;


const Guidance = () => {
  
    // const {
    //     token: { groupTitleColor },
    // } = theme.useToken();

    const navigate = useNavigate();

    const handleMenuClick = (key) => {
        // console.log('Clicked key:', key);
        // 可以根据 key 值执行相应的操作，比如导航到不同的页面等
        navigate(key)
    };
    const getkey = (msg) => {
        // console.log(msg.key)
    }



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
                        <div className='person_head'></div>
                        <div className='person_name'>name</div>
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
                        selectedKeys={'1'} onClick={getkey}>
                        <div className='all_menu'>
                            <div className='top_menu' >
                                <MenuItem key='1' icon={<HomeOutlined />} className='menu_item' onClick={() => handleMenuClick('/home')}  >首页</MenuItem>
                                <MenuItem key='2' icon={<DatabaseOutlined />} className='menu_item' onClick={() => handleMenuClick('/center')}>资源中心</MenuItem>
                                <MenuItem key='3' icon={<CodepenOutlined />} className='menu_item' onClick={() => handleMenuClick('/workbench')}>工作台</MenuItem>
                                <MenuItem key='4' icon={<UserOutlined />} className='menu_item' onClick={() => handleMenuClick('/person')}>个人信息</MenuItem>
                            </div>
                            <div className='bottom_menu'>
                                <MenuItem key='5' icon={<ExclamationCircleOutlined />} className='menu_item' onClick={() => handleMenuClick('1')}>帮助</MenuItem>
                                <div key='6' className='menu_item more_about'><a href='#'>更多</a>    |    <a href='#'>关于</a></div>
                                <MenuItem key='7' icon={<LogoutOutlined />} className='menu_item' onClick={() => handleMenuClick('1')}>退出登录</MenuItem>
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