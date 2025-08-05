import api from '@/api/api';
import type { UserGradeResponse } from '@/types/level';
import type { ApiError } from '@/types/api-response';

export const getUserGrade = async (): Promise<UserGradeResponse> => {
  try {
    const { data } = await api.get<UserGradeResponse>('/profile/grades');
    return data; 
  } catch (err) {
    const apiError = err as ApiError;
    console.error('레벨 정보 로딩 에러:', apiError);
    throw apiError;
  }
};