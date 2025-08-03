import type { ApiResponse } from '@/types/api-response';
import api from '../api';
import type { BestCinema } from '@/types/bestCinema';

export const getBestCinemas = async (): Promise<BestCinema[]> => {
  const res = await api.get<
    ApiResponse<{
      content: BestCinema[];
      hasNext: boolean;
      page: number;
      size: number;
    }>
  >('/api/v1/home/auditoriums', {
    params: { page: 1, size: 4 },
  });

  return res.data?.data?.content;
};
