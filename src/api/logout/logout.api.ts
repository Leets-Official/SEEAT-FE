import type { ApiResponse } from '@/types/api-response';
import api from '../api';

export const postLogout = async (): Promise<ApiResponse<null>> => {
  const res = await api.post<ApiResponse<null>>('/users/logout');
  return res.data;
};

export const deleteUser = async (): Promise<ApiResponse<null>> => {
  const res = await api.delete<ApiResponse<null>>('/profile');
  return res.data;
};