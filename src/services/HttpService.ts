import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export abstract class HttpService {
  private axios: AxiosInstance;

  protected get: (
    url: string,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse>;

  constructor(baseURL: string) {
    this.axios = axios.create({ baseURL });
    this.get = this.axios.get.bind(this.axios);
  }
}
