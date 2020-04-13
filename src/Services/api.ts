import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

const AxiosConfig: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
};

export class API {
  private readonly apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = axios.create(AxiosConfig);
  }

  protected get<T, R = AxiosResponse<T[]>>(url: string): Promise<R> {
    return this.apiInstance.get(url);
  }

  protected post<T, R = AxiosResponse<T>>(url: string, data: T): Promise<R> {
    return this.apiInstance.post(url, data);
  }

  protected put<T, R = AxiosResponse<T>>(url: string, data: T): Promise<R> {
    return this.apiInstance.put(url, data);
  }

  protected delete(url: string): Promise<any> {
    return this.apiInstance.delete(url);
  }
}
