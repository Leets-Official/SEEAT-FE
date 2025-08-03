import api from '@/api/api';
import type { GenreEnType } from '@/types/movieGenre';

export interface RegisterPayload {
  nickname: string;
  genres: GenreEnType[];
  auditoriumId: string[];
}

export const postRegister = async (data: RegisterPayload, tempUserKey: string) => {
  const response = await api.post('/users', data, {
    headers: {
      'Temp-User-Key': tempUserKey,
    },
  });
  return response.data;
};
