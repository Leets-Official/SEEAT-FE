import api from '../api';
import type { PopularReview } from '@/types/review';

export const fetchPopularReviews = async (page: number, size: number): Promise<PopularReview[]> => {
  const res = await api.get('/api/v1/home/reviews', {
    params: { page, size },
  });

  return res.data.data.content;
};
