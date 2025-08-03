import api from '../api';
import type { ApiResponse } from '@/types/api-response';

export interface ReviewCreateRequest {
  seatIds: string[];
  title: string;
  movieTitle: string;
  rating: number;
  content: string;
  hashtags: number[];
  imageUrl: string[];
}

export const postReview = async (data: ReviewCreateRequest) => {
  const res = await api.post<ApiResponse<null>>('/api/v1/reviews', data);
  return res.data.data;
};
