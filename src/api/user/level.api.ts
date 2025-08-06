import api from '@/api/api';
import type { UserGradeResponse } from '@/types/level';

export const getUserGrade = async (): Promise<UserGradeResponse> => {
  try {
    const { data } = await api.get<{ data: UserGradeResponse }>('/profile/grades');
    return data.data; 
  } catch (err) {
    console.error('레벨 정보 로딩 에러:', err);
    throw err;
  }
};
