import api from '@/api/api';
import type { ReviewItem } from '@/types/review';

interface PageRequest {
  page: number;
  size: number;
}

interface PaginatedReviewResponse {
  content: ReviewItem[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;    
}

export const getMyReviews = async (
  params: PageRequest
): Promise<PaginatedReviewResponse> => {
  const res = await api.get('/profile/reviews', { params });
  return res.data.data;
};