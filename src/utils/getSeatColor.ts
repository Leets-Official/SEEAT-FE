export function getSeatColor({
  hasReview = false,
  score,
  isWheelchair = false,
}: {
  hasReview?: boolean;
  score?: number;
  isWheelchair?: boolean;
}) {
  if (isWheelchair) return 'bg-mint-default hover:bg-mint-hover';
  if (!hasReview) return 'bg-seat1-default hover:bg-gray-400';
  if (score !== undefined) {
    if (score >= 4.5) return 'bg-red-400 hover:bg-red-350';
    if (score <= 1.5) return 'bg-gray-400 hover:bg-gray-200';
    return 'bg-red-300 hover:bg-red-200';
  }
  return 'bg-gray-300 hover:bg-gray-400';
}
