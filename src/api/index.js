import service from "../utils/axios";
//由于发请求拿数据是异步过程，所以在组件调用API接口时，需要使用async和await来处理
//例子：
// const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginApi({ username, password });
//       console.log('Login successful:', response);
//       // 处理登录成功逻辑
//     } catch (error) {
//       console.error('Login failed:', error);
//       setError('Login failed. Please try again.'); // 显示错误信息给用户
//     }
//   };
//登录API
export async function loginApi(data) {
  return service({
    url: "/login",
    method: "post",
    data,
  });
}

//注册API
export function registerApi() {
  const data = {
    password: 123456,
    email: "123456@qq.com",
  };
  return service({
    url: "/register",
    method: "post",
    data,
  });
}

export function modelRankApi() {
  return service({
    url: "/model/modelRank",
    method: "get",
  });
}

export function allModelsApi() {
  return service({
    url: "/model/allModel",
    method: "get",
  });
}

export function sendVerificationCode(email) {
  const data = {
    email: email,
  };
  return service({
    url: "/account/register/sendVerificationCode",
    method: "post",
    data,
  });
}

export function accountController(email, password, verificationCode) {
  const data = {
    email,
    password,
    verificationCode,
  };
  return service({
    url: "/account/register",
    method: "post",
    data,
  });
}

export function accountLogin(email, password) {
  const data = {
    email,
    password,
  };
  return service({
    url: "/account/login",
    method: "post",
    data,
  });
}

//工作台拿到模型列表API
export function getModelsApi() {
  return service({ url: "/mission/queryUserCanUseModel", method: "get" });
}

// 首页排行版
export function fetchRankApi() {
  return service({
    url: "/model/modelRank",
    method: "get",
  });
}
// 首页各申请数
export function fetchAllApplicationApi(userId) {
  const data = {
    userId
  }
  return service({
    url: "/application/myApplicationCount",
    method: "get",
    params: data
  })
}
//获取资源中心
export function modelAllModelsApi(userId, page = 1, name = '') {
  const params = {
    userId,
    page,
    name
  };
  return service({
    url: "http://47.120.64.48:8080/model/allModels",
    method: "get",
    params
  });
}
//顶部个人信息
export function accounthomePageInfo(userId) {
  const params = {
    userId: userId,
  };
  return service({
    url: "http://47.120.64.48:8080/account/homePageInfo",
    method: "get",
    params,
  });
}
// 个人中心 我的消息
export function fetchMyMessage(userId, page) {
  const params = {
    userId,
    page
  };
  return service({
    url: "http://47.120.64.48:8080/application/receivedApplication",
    method: "get",
    params,
  });
}
// 个人中心 我的模型
export function fetchMyModel(userId, page) {
  const params = {
    userId,
    page
  };
  return service({
    url: "http://47.120.64.48:8080/model/myModel",
    method: "get",
    params,
  });
}
// 个人中心 我的申请

export function fetchMyApply(userId, page) {
  const params = {
    userId,
    page
  };
  return service({
    url: "http://47.120.64.48:8080/application/myApplication",
    method: "get",
    params,
  });
}
//个人中心的个人信息
export function accountpersonalCenterInfo(userId) {
  const params = {
    userId: userId,
  };
  return service({
    url: "http://47.120.64.48:8080/account/personalCenterInfo",
    method: "get",
    params,
  });
}
// 个人中心 同意
export function agreeApply(applicationId) {
  const data = {
    applicationId
  };
  return service({
    url: "http://47.120.64.48:8080/application/passApplication",
    method: "post",
    data,
  });
}
// 个人中心 拒绝
export function disagreeApply(applicationId) {
  const data = {
    applicationId
  };
  return service({
    url: "http://47.120.64.48:8080/application/rejectApplication",
    method: "post",
    data,
  });
}