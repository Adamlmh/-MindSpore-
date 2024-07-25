import { Form, Input, Button } from "antd";
import { useRef } from "react"
import { accountLogin } from "../../api/index"
import { Await, useNavigate } from "react-router-dom"

function WithPasswordLogin({ alert, setAlert }) {

  const navigate = useNavigate()
  const passwordRef = useRef()
  const usernameRef = useRef()


  const setAlertTimeout = (setter, alert, duration = 3000) => {
    setter(alert)
    setTimeout(() => {
      setter({ message: '', type: "" })
    }, duration)
  }

  const login_In = async () => {
    const password = passwordRef.current.input.value
    const email = usernameRef.current.input.value

    if (!email) {
      setAlertTimeout(setAlert, { message: 'Please enter your email.', type: 'error' });
      return;
    }
    if (!password) {
      setAlertTimeout(setAlert, { message: 'Please enter your password.', type: 'error' });
      return;
    }

    try {
      const response = await accountLogin(email, password);
      console.log(response)
      if (response.code == 1) {
        await setAlertTimeout(setAlert, { message: '登录成功', type: 'success' });
        localStorage.setItem('token', response.data.token)
        navigate('/home')
      }
      else {
        setAlertTimeout(setAlert, { message: response.msg, type: 'error' });
      }
    } catch (error) {
      console.error('Error fetching models:', error);
    }
  }

  return (
    <div>
      <Form.Item
        name="username"
        className="username"
        style={{ width: "300px" }}
      >
        <div className="input-container">
          <label htmlFor="username">邮箱</label>
          <Input id="username" name="username" placeholder="请输入邮箱" ref={usernameRef} />
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        className="password"
        style={{ width: "300px" }}
      >
        <div className="input-container">
          <label htmlFor="password">密码</label>
          <Input.Password
            id="password"
            name="password"
            placeholder="请输入密码"
            ref={passwordRef}
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
              type="primary"
              htmlType="submit"
              className="sign-in-button"
              onClick={login_In}
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
    </div>
  );
}
export default WithPasswordLogin;
