import type { ReviewType } from '@/types/seat';

export function getSeatColor({
  type,
  isWheelchair = false,
  disableHover = false,
}: {
  type: ReviewType;
  isWheelchair?: boolean;
  disableHover?: boolean;
}) {
  if (isWheelchair) {
    return disableHover ? 'bg-mint-default' : 'bg-mint-default hover:bg-mint-hover';
  }
  switch (type) {
    case 'NO_REVIEW':
      return disableHover ? 'bg-seat1-default' : 'bg-seat1-default hover:bg-gray-400';
    case 'HIGH_RATED':
      return disableHover ? 'bg-red-400' : 'bg-red-400 hover:bg-red-350';
    case 'LOW_RATED':
      return disableHover ? 'bg-gray-400' : 'bg-gray-400 hover:bg-gray-200';
    case 'REVIEWED':
      return disableHover ? 'bg-red-300' : 'bg-red-300 hover:bg-red-200';
    default:
      return disableHover ? 'bg-gray-300' : 'bg-gray-300 hover:bg-gray-400';
  }
}
