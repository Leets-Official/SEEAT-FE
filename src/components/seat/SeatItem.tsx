import { cn } from '@/utils/cn';
import { getSeatColor } from '@/utils/getSeatColor';

type SeatItemProps = {
  seatId: string;
  seatLabel: string;
  hasReview?: boolean;
  score?: number;
  isWheelchair?: boolean;
  selected?: boolean;
  onClick?: (seatId: string) => void;
};

export default function SeatItem({
  seatId,
  seatLabel,
  hasReview = false,
  score,
  isWheelchair = false,
  selected = false,
  onClick,
}: SeatItemProps) {
  const bgColor = getSeatColor({ hasReview, score, isWheelchair });

  return (
    <div
      className={cn(
        'text-caption-4 flex h-6 w-[30px] cursor-pointer items-center justify-center rounded-t-[8px] rounded-b-[2px] px-4.5 py-3.5 text-white transition-colors',
        bgColor,
        selected && 'ring-1 ring-white',
      )}
      onClick={() => onClick?.(seatId)}
    >
      {seatLabel}
    </div>
  );
}
