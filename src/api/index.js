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
