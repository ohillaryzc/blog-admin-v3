import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosConfigType extends AxiosRequestConfig {
  loading?: boolean;
  interceptor?: Interceptor;
}

interface Interceptor {
  requestInterceptor: (res: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorErr: (err: Error) => any;
  responseInterceptor: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorErr: (err: Error) => any;
}

export default class Api {
  service: AxiosInstance;
  config: AxiosConfigType;
  interceptor?: Interceptor;
  loading: boolean;

  constructor(config: AxiosConfigType) {
    this.config = config;
    this.interceptor = config.interceptor;
    this.loading = config.loading??true;
    this.service = axios.create(config);
  }
}
