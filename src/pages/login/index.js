import React from "react";
import { Form, Input, Button, message } from "antd";
import "./login.css";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <Form className="login-container" onFinish={handleSubmit}>
      <div className="login_title">
        <div className="account_login">账号登录</div>
        <div className="noaccount_login">免密登录</div>
      </div>
      <div className="login_title"></div>
      <Form.Item name="username" className="username">
        <div>
          <h3>手机号/用户名/邮箱</h3>
          <Input placeholder="请输入账号" />
        </div>
      </Form.Item>
      <Form.Item name="password" className="password">
        <div>
          {" "}
          <h3>密码</h3>
          <Input.Password placeholder="请输入账号" />
        </div>
      </Form.Item>
      <Form.Item className="login-button">
        <div>
          <div className="forget_rember">
            <div className="rember_div">
              <input type="checkbox" className="rember_choose" />
              <label className="remberMe">记住我</label>
            </div>
            <span className="forgetPassword">忘记密码</span>
          </div>
          <div className="button_click">
            <Button onClick={handleSubmit} className="sing_up_button">
              注册
            </Button>
            <Button onClick={handleSubmit} className="sing_in_button">
              登录
            </Button>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Login;
