import { Form, Input, Button } from "antd";
import { useState,useRef } from "react";
function Register({alert,setAlert}) {
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
  // 点击注册按钮
  const emailRef=useRef(null);
  const firstPasswordRef=useRef(null);
  const secondPasswordRef=useRef(null);
  const yzmRef=useRef(null);
  const [emailStatus, setEmailStatus] = useState('');
  const [firstPasswordStatus, setFirstPasswordStatus] = useState('');
  const [secondPasswordStatus, setSecondPasswordStatus] = useState('');
  const [yzmStatus, setYzmStatus] = useState('');

  const setStatus = (setter, status, duration = 3000) => {
    setter(status);
    setTimeout(() => {
      setter('');
    }, duration);
  };
const setAlertTimeout=(setter,alert,duration=3000)=>{
  setter(alert);
  setTimeout(() => {
    setter({ message: '', type: '' });
  }, duration);
}
  const registerClick = () => {
    const email = emailRef.current.input.value;
    const firstPassword = firstPasswordRef.current.input.value;
    const secondPassword = secondPasswordRef.current.input.value;
    const yzm = yzmRef.current.input.value;

    if (!email) {
      setStatus(setEmailStatus, 'warning');
      setAlertTimeout(setAlert, { message: 'Please enter your email.', type: 'error' });
      return;
    }
    if (!firstPassword) {
      setStatus(setFirstPasswordStatus, 'warning');
      setAlertTimeout(setAlert, { message: 'Please enter your password.', type: 'error' });
      return;
    }
    if (!secondPassword) {
      setStatus(setSecondPasswordStatus, 'warning');
      setAlertTimeout(setAlert, { message: 'Please confirm your password.', type: 'error' });
      return;
    }
    if (firstPassword !== secondPassword) {
      setStatus(setSecondPasswordStatus, 'error');
      setAlertTimeout(setAlert, { message: 'Passwords do not match.', type: 'error' });
      return;
    }
    if (!yzm) {
      setStatus(setYzmStatus, 'warning');
      setAlertTimeout(setAlert, { message: 'Please enter the captcha.', type: 'error' });
      return;
    }

  
  };
  return (
    <div>
      <Form.Item
        name="username"
        className="username"
        style={{ width: "300px", margin: "10px auto" }}
      >
        <div className="input-container">
          <Input id="username" name="username" ref={emailRef} placeholder="请输入邮箱" status={emailStatus}/>
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
            ref={firstPasswordRef}
            status={firstPasswordStatus}
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
            ref={secondPasswordRef}
            status={secondPasswordStatus}
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
            ref={yzmRef}
            status={yzmStatus}
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
            <Button type="primary" htmlType="submit" onClick={registerClick} className="sign-in-button">
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
