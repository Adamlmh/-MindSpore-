import React from "react";
import { Form, Input, Button, message } from "antd";
import "./index.css";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };
  const jump_to_login = () => {
    navigate("/main/login", { replace: true });
  };

  //手动修改图片
  const backgroundRef = React.useRef()




  return (
    <div className="Big_Div" ref={backgroundRef}>
      <Form className="login-container" >
        <div className="login_title">
          <div className="top_name">万千模型</div>
          <div className="left_name"></div>
          <div className="right_name"></div>
          <span className="account_register">账号注册</span>
        </div>
        <Form.Item name="username" className="username">
          <Input id="username" name="username" placeholder="手机号/用户名/邮箱" />
        </Form.Item>
        <Form.Item name="password" className="password">
          <Input.Password id="password" name="password" placeholder="密码" />
        </Form.Item>
        <Form.Item className="login-button">
          <div className="">
            <Input.Password id="re_password" className="re_Password password" placeholder="密码" />
            <div className="agree-terms">
              <input type="checkbox" id="agreeTerms" />
              <label className="agreeTerms">已同意<a href="#">《服务条款》</a>和<a href="#">《隐私政策》</a></label>
            </div>
            <Button type="default" className="sign-up-button_in_register" onClick={handleSubmit} >
              注册
        </Button>
            <Button type="primary" className="sign-in-button_in_register" onClick={jump_to_login}>
              登录
               </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
