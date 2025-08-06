import api from '../api';
import type { ReviewSummary } from '@/types/review';
export interface getAuditoriumReviewsParams {
  auditoriumId: string;
  page?: number;
  size?: number;
  sort?: 'latest';
}

export interface getAuditoriumReviewsResponse {
  content: ReviewSummary[];
  hasNext: boolean;
  page: number;
  size: number;
}

export const getAuditoriumReviews = async ({
  auditoriumId,
  page = 1,
  size = 10,
  sort = 'latest',
}: getAuditoriumReviewsParams): Promise<getAuditoriumReviewsResponse> => {
  const res = await api.get(`reviews/auditorium/${auditoriumId}`, {
    params: { page, size, sort },
  });
  return res.data.data;
};
