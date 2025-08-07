import api from '@/api/api';
import type { UserGradeResponse } from '@/types/level';

export const getUserGrade = async (): Promise<UserGradeResponse> => {
  try {
    const response = await api.get<{ data: UserGradeResponse }>('/profile');
    return response.data.data; // ✅ 두 번 접근
  } catch (err) {
    console.error('레벨 정보 로딩 에러:', err);
    throw err;
  }
};
