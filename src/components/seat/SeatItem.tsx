import { cn } from '@/utils/cn';
import { getSeatColor } from '@/utils/getSeatColor';
import { forwardRef, useState } from 'react';
import type { SeatItemProps } from '@/types/seat';

interface Props extends SeatItemProps {
  className?: string;
  isFocused?: boolean; // seatFocus용 prop
  isSelected?: boolean; // seatWrite용 prop
  mode?: 'seatPicker' | 'seatFocus' | 'seatWrite';
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
      isSelected = false,
      mode = 'seatPicker',
      className,
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(false);
    const isWrite = mode === 'seatWrite';
    const isPicker = mode === 'seatPicker';

    const isActive = isFocused || (isWrite && isSelected) || (isPicker && selected);

    const bgColor = isActive ? 'bg-red-400' : getSeatColor({ hasReview, score, isWheelchair });

    const handleClick = () => {
      if (mode === 'seatFocus') return; // focus 모달은 클릭 비활성
      if (isPicker) setSelected((prev) => !prev); // picker는 로컬 상태 관리
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
        data-seat-focus={isFocused ? 'true' : undefined}
        className={cn(
          'text-caption-4 flex h-6 w-[40px] items-center justify-center rounded-t-[8px] rounded-b-[2px] px-3 py-4 transition-colors',
          bgColor,
          textColor,
          mode !== 'seatFocus' && 'cursor-pointer',
          selected && mode !== 'seatFocus' && 'ring-1 ring-white',
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
