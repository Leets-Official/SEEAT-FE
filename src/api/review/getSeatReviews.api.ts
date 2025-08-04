import type { SeatReviewBlock } from '@/types/review';
import api from '../api';
import type { ApiResponse } from '@/types/api-response';

//좌석별 리뷰 조회
export interface getSeatReviewResponse {
  content: SeatReviewBlock[];
  hasNext: boolean;
  page: number;
  size: number;
}

export const getSeatReview = async ({
  seatId,
  page,
  size,
  sort = 'latest',
}: {
  seatId: string;
  page: number;
  size: number;
  sort?: 'latest' | 'popular';
}): Promise<getSeatReviewResponse> => {
  const response = await api.get<ApiResponse<getSeatReviewResponse>>(`/reviews/seat/${seatId}`, {
    params: {
      page,
      size,
      sort,
    },
  });
  return response.data.data;
};
