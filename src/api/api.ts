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
    const res = response.data;

    if (!res.success) {
      const message = res.message || '알 수 없는 오류가 발생했습니다.';

      if (String(res.code).startsWith('401')) {
        console.error(`인증 오류 (${res.code}): ${message}`);
      }

      return Promise.reject({
        message,
        code: res.code,
        error: res.error,
      });
    }

    return res.data;
  },

  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';

    return Promise.reject({
      message,
      code: status,
      error: error.response?.data?.error ?? null,
    });
  },
);

export default api;
