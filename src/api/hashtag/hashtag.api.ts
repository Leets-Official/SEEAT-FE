import type { ApiResponse } from '@/types/api-response';
import api from '../api';
import type { Hashtag } from '@/types/hashtag';

export const getHashtags = async (): Promise<Hashtag[]> => {
  const res = await api.get<ApiResponse<Hashtag[]>>('/hashtag');
  return res.data.data;
};

//상영관별 해시태그
export const getTheaterTags = async (auditoriumId: string): Promise<Hashtag[]> => {
  const res = await api.get<ApiResponse<Hashtag[]>>(`/hashtag/${auditoriumId}`);
  return res.data.data;
};
