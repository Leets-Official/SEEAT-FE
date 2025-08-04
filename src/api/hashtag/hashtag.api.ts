import type { ApiResponse } from '@/types/api-response';
import api from '../api';
import type { Hashtag } from '@/types/hashtag';

export const getHashtags = async (): Promise<Hashtag[]> => {
  const res = await api.get<ApiResponse<Hashtag[]>>('/hashtag');
  return res.data.data;
};
