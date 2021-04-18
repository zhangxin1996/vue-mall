import axios from 'axios'

export function request1(config) {
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h8",
    timeout: 10000
  });

  // 2. 请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    console.log(err);
  })

  // 3. 发送真正的网络请求
  return instance(config);
}

