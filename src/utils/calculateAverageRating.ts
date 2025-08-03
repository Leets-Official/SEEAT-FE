export const calculateAverageRating = (reviews: { rating: number }[]): number => {
  if (!reviews.length) return 0;

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
};
