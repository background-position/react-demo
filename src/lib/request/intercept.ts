import type { Axios, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import instance from './cache'
const queryInterceptor = (config: InternalAxiosRequestConfig) => {
  const {
    headers,
    method,
    url,
    params,
    data,
    timeout,
    timeoutErrorMessage,
    withCredentials,
    adapter,
    transformRequest,
    transformResponse,
    validateStatus,
    maxContentLength
  } = config

  const { __use_catch__ } = params || data || {}
  if (__use_catch__) {
    const catchData = instance.getCatch(url as string)
    if (catchData) {
      return Promise.resolve(catchData)
      // 取消请求
    }
  }
  return {
    headers,
    method,
    url,
    params,
    data,
    timeout,
    timeoutErrorMessage,
    withCredentials,
    adapter,
    transformRequest,
    transformResponse,
    validateStatus,
    maxContentLength
  }
}
const responseInterceptor = (response: AxiosResponse) => {
  const { config, data, status, statusText, headers } = response
  const { url, params, data: reqData } = config
  // 进行缓存
  const { __use_catch__ } = params || reqData || {}
  if (__use_catch__) {
    instance.setCatch(url as string, data)
  }
  return response
}
export { queryInterceptor, responseInterceptor }
