import axios from 'axios'
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { queryInterceptor, responseInterceptor } from './intercept'
const client = Axios.create({
  // 你的配置
})
// 请求拦截器
axios.interceptors.request.use(queryInterceptor)
// 返回拦截器
axios.interceptors.response.use(responseInterceptor)
export default client
