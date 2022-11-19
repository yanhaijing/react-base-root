import { message } from 'antd';
import axios from 'axios';
import { stringify } from 'query-string';

// 这里设置axios的统一配置
const axiosInstance = axios.create({
  baseURL: '/',
});

// 经过 10ms 后会检查这个错误是否被处理了，如果没处理，执行报错弹窗，跳转等逻辑
const ProcessedCheckTimeout = 10;
const processedErrorSet = new WeakSet<Error>();

// 自己处理了错误可以调用下这个函数
export function exceptionProcessed(error: unknown) {
  if (error instanceof Error) {
    processedErrorSet.add(error);
  }
}

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    const sourceUrl = config.url ?? '';

    // NOTE: 请求中添加时间戳 + 来源
    const commonQsString = stringify({ _t: Date.now() });
    config.url =
      sourceUrl + (sourceUrl.includes('?') ? '&' : '?') + commonQsString;

    config.withCredentials = true;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      window.setTimeout(() => {
        if (!processedErrorSet.has(error)) {
          window.location.href =
            'login' + window.encodeURIComponent(window.location.href);
        }
      }, ProcessedCheckTimeout);
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    console.log('yan1', error);

    if (axios.isAxiosError(error)) {
      // @ts-expect-error
      const msg = error.response.data.message ?? '网络请求错误，请重试';
      window.setTimeout(() => {
        if (!processedErrorSet.has(error)) {
          message.error(msg);
        }
      }, ProcessedCheckTimeout);
    }
    return Promise.reject(error);
  }
);

export const httpClient = axiosInstance;
