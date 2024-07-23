import axios from 'axios';

// 创建一个 Axios 实例
const instance = axios.create({

  timeout: 10000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json'
    // 在这里可以添加其他默认的请求头
  }
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加 token
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    console.log(response)
    // 对响应数据做些什么，例如统一处理错误码
    if (response.status !== 200) {
      // 自定义处理逻辑，例如弹出错误提示
      alert('请求出错');
    }
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    alert('网络异常，请稍后重试');
    return Promise.reject(error);
  }
);

export default instance;


