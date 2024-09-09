import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./stores";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import globalErrorHandling from "./globalErrorHandler"; // 引入全局错误处理器
// 初始化全局错误处理器
globalErrorHandling();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
