import { cn } from '@/utils/cn';
import { getSeatColor } from '@/utils/getSeatColor';
import { forwardRef, useState } from 'react';
import type { SeatItemProps } from '@/types/seat';

interface Props extends SeatItemProps {
  className?: string;
}

const SeatItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      seatId,
      seatLabel,
      hasReview = false,
      score,
      isWheelchair = false,
      onClick,
      isFocused = false,
      className,
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(false);

    // const bgColor = isFocused ? 'bg-red-400' : getSeatColor({ hasReview, score, isWheelchair });
    const bgColor = isFocused
      ? 'bg-red-400'
      : getSeatColor({
          hasReview,
          score,
          isWheelchair,
          disableHover: isFocused, // ← 포커스 모드일 땐 hover 제거
        });

    const handleClick = () => {
      if (isFocused) return;
      setSelected((prev) => !prev);
      onClick?.(seatId);
    };

    const textColor = isFocused
      ? 'text-white'
      : isWheelchair || (score !== undefined && score <= 1.5)
        ? 'text-gray-950'
        : 'text-white';

    return (
      <div
        ref={ref}
        className={cn(
          'text-caption-4 flex h-6 w-[40px] items-center justify-center rounded-t-[8px] rounded-b-[2px] px-3 py-4 transition-colors',
          bgColor,
          textColor,
          !isFocused && 'cursor-pointer',
          selected && !isFocused && 'ring-1 ring-white',
          className,
        )}
        onClick={handleClick}
      >
        {seatLabel}
      </div>
    );
  },
);

export default SeatItem;
