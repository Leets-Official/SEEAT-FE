import api from '../api';
import type { PopularReview } from '@/types/review';
import type { ApiResponse } from '@/types/api-response';

export const fetchPopularReviews = async (page: number, size: number): Promise<PopularReview[]> => {
  const res = await api.get<ApiResponse<{ content: PopularReview[] }>>('/home/reviews', {
    params: { page, size },
  });

  return res.data.data.content;
};
