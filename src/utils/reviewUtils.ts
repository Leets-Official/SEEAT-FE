export const getTopReviewByLikes = <T extends { heartCount: number }>(
  reviews: T[],
  count: number,
) => {
  return [...reviews].sort((a, b) => b.heartCount - a.heartCount).slice(0, count);
};
