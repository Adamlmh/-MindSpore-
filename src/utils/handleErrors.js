// src/utils/errorHandling.js
import { message } from "antd";

const handleErrors = (error) => {
  if (error.response) {
    const { status } = error.response;
    switch (true) {
      case status >= 200 && status < 300:
        break;
      case status >= 500 && status < 600:
        message.error(`服务器错误: ${status}`);

        break;
      case status === 403:
        message.error("禁止访问: 403 Forbidden");

        break;
      case status === 404:
        message.error("未找到: 404 Not Found");

        break;
      default:
        message.error(`错误状态码: ${status}`);

        break;
    }
  } else if (error.request) {
    message.error("请求发出, 网络错误");
  } else {
    message.error("请求错误: " + error.message);
  }
};

export default handleErrors;
