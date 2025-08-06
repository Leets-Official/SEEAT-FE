import api from '../api';
import type { ApiResponse } from '@/types/api-response';
import type { ReviewDetail } from '@/types/review';

export const getReviewDetail = async (reviewId: number) => {
  const res = await api.get<ApiResponse<ReviewDetail>>(`/reviews/${reviewId}`);
  return res.data.data;
};
