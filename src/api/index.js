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
    method: "get"
  })
}

export function allModelsApi() {
  return service({
    url: "/model/allModel",
    method: "get"
  })
}

export function sendVerificationCode(email) {
  const data = {
    email: email
  };
  return service({
    url: "/account/register/sendVerificationCode",
    method: "post",
    data
  })
}

export function accountController(email, password, verificationCode) {
  const data = {
    email,
    password,
    verificationCode
  };
  return service({
    url: "/account/register",
    method: "post",
    data
  })
}

export function accountLogin(email, password) {
  const data = {
    email,
    password,
  };
  return service({
    url: "/account/login",
    method: "post",
    data
  })
}
// 首页排行版
export function fetchRankApi() {
  return service({
    url: "/model/modelRank",
    method: "get"
  })
}
// 首页各申请数
export function fetchAllApplicationApi(userId) {
const data={
  userId
}
  return service({
    url: "/application/myApplicationCount",
    method: "get",
   params:data
  })
}
// 首页最近任务展示
export function fetchRecentTaskApi(userId) {
  const data = {
    userId
  }
  return service({
    url: "http://47.120.64.48:8080askjfdsdhf",
    method: "get",
    params: data
  })
}
//获取资源中心
export function modelAllModelsApi(userId, page, name) {
  const data = {
    userId,
    page,
    name
  }
  return service({
    url: "http://47.120.64.48:8080/model/allModels",
    method: 'get'
  })
}
//个人主页下个人信息
export function accounthomePageInfo(userId) {
  const params = {
    userId: userId
  }
  return service({
    url: "http://47.120.64.48:8080/account/homePageInfo",
    method: 'get',
    params
  })
}