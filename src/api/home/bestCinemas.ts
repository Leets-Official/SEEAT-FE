import api from '../api';
import type { BestCinema } from '@/types/bestCinema';

export const getBestCinemas = async (): Promise<BestCinema[]> => {
  const res = await api.get('/api/v1/home/auditoriums', {
    params: { page: 1, size: 4 },
  });

  return res.data?.data?.content;
};
