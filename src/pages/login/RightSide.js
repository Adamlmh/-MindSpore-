import { Form } from "antd";
import { NavLink } from "react-router-dom";
import WithPasswordLogin from "./withPasswordLogin";
function RightSide() {
  return (
    <div className="rightSide">
      <Form className="login-container">
        <div className="login_title">
          <div className="top_name">万千魔型</div>
          <div className="left_name"></div>
          <div className="right_name"></div>
          <NavLink
            to={"/main/login"}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            {({ isActive }) => (
              <span
                className={isActive ? "account_login active" : "account_login"}
              >
                账号登录
              </span>
            )}
          </NavLink>

          <NavLink to={"/main/noaccount"}>
            <span className="noaccount_login">免密登录</span>
          </NavLink>
        </div>
        <WithPasswordLogin />
      </Form>
    </div>
  );
}
export default RightSide;
