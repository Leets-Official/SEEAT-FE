import api from '@/api/api';
import type { ApiResponse } from '@/types/api-response';
import type { GenreEnType } from '@/types/movieGenre';

// 회원가입
export interface RegisterPayload {
  nickname: string;
  genres: GenreEnType[];
  auditoriumId: string[];
}

export const postRegister = async (
  data: RegisterPayload,
  tempUserKey: string,
): Promise<ApiResponse<null>> => {
  const response = await api.post<ApiResponse<null>>('/users', data, {
    headers: {
      'Temp-User-Key': tempUserKey,
    },
  });

  const accessToken = response.headers['authorization'] || response.headers['Authorization'];
  console.log('accessToken : ', response.headers);

  if (!accessToken) {
    throw new Error('accessToken이 응답 헤더에 없습니다.');
  }

  localStorage.setItem('accessToken', accessToken.replace('Bearer ', ''));

  return response.data;
};

// 로그아웃

// 닉네임 중복 검사
export const checkNicknameDuplicate = async (nickname: string) => {
  const res = await api.get('/users', {
    params: { nickname },
  });

  return res.data.data;
};
