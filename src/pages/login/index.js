import React from "react";
import { useState } from "react";
import "./login.css";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { Alert } from 'antd';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [alert, setAlert] = useState({ message: '', type: '' });
  return (
    <div className="main">
      {alert.message && <Alert message={alert.message} type={alert.type} className="alert_message"/>}
      <LeftSide isLogin={isLogin} alert={alert} setAlert={setAlert} />
      <RightSide isLogin={isLogin} setIsLogin={setIsLogin} alert={alert} setAlert={setAlert} />
    </div>
  );
};

export default Login;
