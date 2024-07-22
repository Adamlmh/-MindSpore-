import React from "react";
import { Form, Input, Button, message } from "antd";
import "./index.css";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  const jump_to_login = () => {
    navigate("/login", { replace: true });
  };
  const jump_to_register = () => {
    navigate("/register", { replace: true });
  };

  //手动修改图片
  const backgroundRef = React.useRef()
  const backgroundImage = require('../../assest/images/login.jpg')
  React.useEffect(() => {
    backgroundRef.current.style.backgroundImage = `url(${backgroundImage})`
  })

  return (
    <div className="Big_Div" ref={backgroundRef}>
      <Form className="login-container" onFinish={handleSubmit}>
        <div className="login_title">
          <div className="top_name">万千模型</div>
          <div className="left_name"></div>
          <div className="right_name"></div>
          <span className="account_login" onClick={jump_to_login}>账号登录</span>
          <span className="noaccount_login active">免密登录</span>
        </div>
        <Form.Item name="username" className="username">
          <div className="input-container">
            <label htmlFor="username">手机号</label>
            <Input id="username" name="username" />
          </div>
        </Form.Item>
        <Form.Item name="password" className="password">
          <div className="input-container">
            <label htmlFor="password">验证码</label>
            <Input.Password id="password" name="password" placeholder="请输入验证码" className="phone_password" />
            <button className="send_password">发送验证码</button>
          </div>
        </Form.Item>
        <Form.Item className="login-button">
          <div className="button-container">
            <div className="forget-remember">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" className="remember-choose" />
                <label htmlFor="rememberMe">记住我</label>
              </div>
            </div>
            <div className="button-click">
              <Button type="default" className="sign-up-button" onClick={jump_to_register}>
                注册
        </Button>
              <Button type="primary" htmlType="submit" className="sign-in-button">
                登录
        </Button>
            </div>
            <div className="agree-terms">
              <input type="checkbox" id="agreeTerms" />
              <label className="agreeTerms">已同意<a href="#">《服务条款》</a>和<a href="#">《隐私政策》</a></label>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;