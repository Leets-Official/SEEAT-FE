import api from './api';
import type { PopularReviewResponse } from '@/types/review';
export const fetchPopularReviews = async (
  page: number,
  size: number,
): Promise<PopularReviewResponse> => {
  return await api.get('/api/v1/home/reviews', {
    params: { page, size },
  });
};
