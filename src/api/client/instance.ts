import axios from 'axios';
import { API_CONFIG } from './config';

declare module 'axios' {
  export interface AxiosRequestConfig {
    useApiKey?: boolean;
  }
}

export const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
