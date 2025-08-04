import api from '../api';
import type { BestCinema } from '@/types/bestCinema';
import type { ApiResponse } from '@/types/api-response';

export const getBestCinemas = async (page: number, size: number): Promise<BestCinema[]> => {
  const res = await api.get<ApiResponse<{ content: BestCinema[] }>>('/api/v1/home/auditoriums', {
    params: { page, size },
  });

  return res.data?.data?.content;
};
