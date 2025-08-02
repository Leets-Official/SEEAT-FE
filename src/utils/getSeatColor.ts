export function getSeatColor({
  hasReview = false,
  score,
  isWheelchair = false,
  disableHover = false,
}: {
  hasReview?: boolean;
  score?: number;
  isWheelchair?: boolean;
  disableHover?: boolean;
}) {
  if (isWheelchair) {
    return disableHover ? 'bg-mint-default' : 'bg-mint-default hover:bg-mint-hover';
  }
  if (!hasReview) {
    return disableHover ? 'bg-seat1-default' : 'bg-seat1-default hover:bg-gray-400';
  }
  if (score !== undefined) {
    if (score >= 4.5) return disableHover ? 'bg-red-400' : 'bg-red-400 hover:bg-red-350';
    if (score <= 1.5) return disableHover ? 'bg-gray-400' : 'bg-gray-400 hover:bg-gray-200';
    return disableHover ? 'bg-red-300' : 'bg-red-300 hover:bg-red-200';
  }
  return disableHover ? 'bg-gray-300' : 'bg-gray-300 hover:bg-gray-400';
}
