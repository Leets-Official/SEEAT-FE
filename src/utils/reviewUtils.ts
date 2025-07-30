import type { ReviewSummary } from '@/types/review';

export const getTopReviewByLikes = (reviews: ReviewSummary[], count: number) => {
  return [...reviews].sort((a, b) => b.heartCount - a.heartCount).slice(0, count);
};
