import React from "react";
import { useState } from "react";
import "./login.css";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="main">
      <LeftSide isLogin={isLogin} />
      <RightSide isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default Login;
