import api from '@/api/api';
import type { ApiResponse } from '@/types/api-response';
import type { GenreEnType } from '@/types/movieGenre';

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
  return response.data;
};
