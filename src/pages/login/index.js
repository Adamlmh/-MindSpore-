import React from "react";
import { Form, Input, Button, message } from "antd";
import "./login.css";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import "../../mock/mock";
import { loginApi } from "../../api/index";

const Login = () => {
  const navigate = useNavigate();

  //跳转到免密登录
  const jump_to_noaccount_login = () => {
    navigate("/main/noaccount", { replace: true });
  };

  //跳转到注册页面
  const jump_to_register = () => {
    navigate("/main/register", { replace: true });
  };
  // 登录请求
  const login = async () => {
    const response = await loginApi();
  };

  //手动修改图片
  const backgroundRef = React.useRef();
  // const backgroundImage = require("../../assest/images/login.jpg");
  // React.useEffect(() => {
  //   backgroundRef.current.style.backgroundImage = `url(${backgroundImage})`;
  // });

  return (
    <div className="Big_Div" ref={backgroundRef}>
      <Form className="login-container">
        <div className="login_title">
          <div className="top_name">万千魔型</div>
          <div className="left_name"></div>
          <div className="right_name"></div>
          <span className="account_login active">账号登录</span>
          <span className="noaccount_login" onClick={jump_to_noaccount_login}>
            免密登录
          </span>
        </div>
        <Form.Item name="username" className="username">
          <div className="input-container">
            <label htmlFor="username">手机号/用户名/邮箱</label>
            <Input id="username" name="username" placeholder="请输入账号" />
          </div>
        </Form.Item>
        <Form.Item name="password" className="password">
          <div className="input-container">
            <label htmlFor="password">密码</label>
            <Input.Password
              id="password"
              name="password"
              placeholder="请输入密码"
            />
          </div>
        </Form.Item>
        <Form.Item className="login-button">
          <div className="button-container">
            <div className="forget-remember">
              <div className="remember-me checkbox-container">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="remember-choose"
                />
                <label htmlFor="rememberMe" className="rememberMe_text">
                  记住我
                </label>
              </div>
            </div>
            <div className="button-click">
              <Button
                type="default"
                className="sign-up-button"
                onClick={jump_to_register}
              >
                注册
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="sign-in-button"
                onClick={login}
              >
                登录
              </Button>
            </div>
            <div className="agree-terms checkbox-container">
              <input type="checkbox" id="agreeTerms" />
              <label className="agreeTerms agree_text checkbox-label">
                已同意<a href="#">《服务条款》</a>和<a href="#">《隐私政策》</a>
              </label>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
