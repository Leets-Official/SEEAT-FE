import api from '../api';
import type { ApiResponse } from '@/types/api-response';

interface ReviewUpdateRequest {
  title: string;
  rating: number;
  content: string;
  hashtags: string[];
  images: string[];
}

export const patchReview = async (reviewId: number, body: ReviewUpdateRequest) => {
  const res = await api.patch<ApiResponse<ReviewUpdateRequest>>(`/reviews/${reviewId}`, body);
  return res.data;
};
