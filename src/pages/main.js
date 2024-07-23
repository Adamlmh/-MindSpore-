import React from "react";
import { Outlet } from 'react-router-dom';
// import { Layout } from 'antd'

const Main = () => {
  return (
    <div>
      <Outlet />
    </div>)
};

export default Main;
