import { Form, Input, Button } from "antd";
import { useState } from "react";
function Register() {
  //发生验证码倒计时
  const [seconds, setSeconds] = useState(60);
  const [disabled, setDisabled] = useState(false);

  const startCountdown = () => {
    setDisabled(true);
    let interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setSeconds(60);
      setDisabled(false);
    }, 60000);
  };
  return (
    <div>
      <Form.Item
        name="username"
        className="username"
        style={{ width: "300px", margin: "10px auto" }}
      >
        <div className="input-container">
          <Input id="username" name="username" placeholder="请输入邮箱" />
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        className="password"
        style={{ width: "300px", margin: "10px auto" }}
      >
        <div className="input-container">
          <Input.Password
            id="first_password"
            name="first_password"
            placeholder="请输入密码"
          />
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        className="password"
        style={{ width: "300px", margin: "10px auto" }}
      >
        <div className="input-container">
          <Input.Password
            id="second_password"
            name="second_password"
            placeholder="确认密码"
          />
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        className="password"
        style={{ width: "300px", margin: "10px auto" }}
      >
        <div
          className="input-container"
          style={{ display: "flex", flexWrap: "nowrap" }}
        >
          <Input.Password
            id="captcha"
            name="captcha"
            placeholder="请输入验证码"
            className="phone_password"
          />
          <button
            className={disabled ? "disabled_send_password" : "send_password"}
            onClick={startCountdown}
            disabled={disabled}
          >
            {" "}
            {disabled ? `重新发送(${seconds}s)` : "发送验证码"}
          </button>
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
            <Button type="primary" htmlType="submit" className="sign-in-button">
              注册
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
    </div>
  );
}
export default Register;
