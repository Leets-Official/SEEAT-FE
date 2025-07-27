import type { ApiError, ApiResponse } from '@/types/api-response';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터 - 모든 요청에 Authorization 헤더를 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    const res = response.data as ApiResponse<any>;

    if (!res.success) {
      const apiError: ApiError = {
        message: res.message || '알 수 없는 오류가 발생했습니다.',
        code: res.code,
        error: Array.isArray(res.error) ? res.error : null,
      };

      return Promise.reject(apiError);
    }

    return res.data;
  },
  (error) => {
    const status = error.response?.status;
    const resData = error.response?.data as ApiResponse<any> | undefined;

    const apiError: ApiError = {
      message: resData?.message || '네트워크 오류 또는 서버 에러가 발생했습니다.',
      code: resData?.code || status || 'UNKNOWN',
      error: Array.isArray(resData?.error) ? resData?.error : null,
    };

    return Promise.reject(apiError);
  },
);

export default api;
