import { cn } from '@/utils/cn';
import { getSeatColor } from '@/utils/getSeatColor';
import { useState } from 'react';
import type { SeatItemProps } from '@/types/seat';

const SeatItem = ({
  seatId,
  seatLabel,
  hasReview = false,
  score,
  isWheelchair = false,
  onClick,
}: SeatItemProps) => {
  const [selected, setSelected] = useState(false);

  const bgColor = getSeatColor({ hasReview, score, isWheelchair });

  const handleClick = () => {
    setSelected((prev) => !prev);
    onClick?.(seatId);
  };
  const textColor =
    isWheelchair || (score !== undefined && score <= 1.5) ? 'text-gray-950' : 'text-white';

  return (
    <div
      className={cn(
        'text-caption-4 flex h-6 w-[40px] cursor-pointer items-center justify-center rounded-t-[8px] rounded-b-[2px] px-3 py-4 transition-colors',
        bgColor,
        textColor,
        selected && 'ring-1 ring-white',
      )}
      onClick={handleClick}
    >
      {seatLabel}
    </div>
  );
};

export default SeatItem;
