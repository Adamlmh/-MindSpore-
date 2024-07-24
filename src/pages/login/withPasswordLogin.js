import { Form, Input, Button } from "antd";

function WithPasswordLogin() {
  return (
    <div>
      <Form.Item
        name="username"
        className="username"
        style={{ width: "300px" }}
      >
        <div className="input-container">
          <label htmlFor="username">邮箱</label>
          <Input id="username" name="username" placeholder="请输入邮箱" />
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
              // onClick={login}
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