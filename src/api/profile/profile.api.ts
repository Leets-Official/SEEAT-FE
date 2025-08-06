import api from '@/api/api';
import type { UserProfile } from '@/types/user';
import type { ApiError, ApiResponse } from '@/types/api-response'; 


export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await api.get<ApiResponse<UserProfile>>('/profile');
        return response.data.data; 
  } catch (err) {
    const apiError = err as ApiError;
    console.error('프로필 로딩 에러:', apiError);
    throw apiError;
  }
};