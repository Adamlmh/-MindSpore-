import { Flex, Form } from "antd";
import WithPasswordLogin from "./withPasswordLogin";
import Register from "./Register";
function RightSide({ isLogin, setIsLogin, alert, setAlert }) {


  return (
    <div className="rightSide">
      <Form className="login-container">
        <div className="login_title">
          <div className="top_name">万千魔型</div>
          <div className="left_name"></div>
          <div className="right_name"></div>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <span
              className={isLogin ? "account_login active" : "account_login"}
              onClick={() => setIsLogin(true)}
              style={{ whiteSpace: "nowrap" }}
            >
              账号登录
            </span>

            <span
              className={isLogin ? "account_login " : "account_login active"}
              onClick={() => setIsLogin(false)}
              style={{ whiteSpace: "nowrap" }}
            >
              账号注册
            </span>
          </div>
        </div>
        {isLogin ? <WithPasswordLogin alert={alert} setAlert={setAlert} /> : <Register alert={alert} setAlert={setAlert} />}
      </Form>
    </div>
  );
}
export default RightSide;
