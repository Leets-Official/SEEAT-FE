import { useEffect, useRef } from 'react';
import { CloseIcon } from '@/assets';
import SeatMap from '@/components/seat/SeatMap';
import ScreenBar from '@/components/seat/ScreenBar';
import { getSeatLabel } from '@/utils/getSeatLabel';

interface SeatFocusModalProps {
  auditoriumId: string;
  theaterName: string;
  selectedSeatNumbers: string[];
  focusedSeatIds: string[];
  onClose: () => void;
}

const SeatFocusModal = ({
  auditoriumId,
  theaterName,
  selectedSeatNumbers,
  onClose,
  focusedSeatIds,
}: SeatFocusModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const seatIds = selectedSeatNumbers.map((num) => getSeatLabel(auditoriumId, num));

  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      const target = container?.querySelector('[data-seat-focus="true"]') as HTMLDivElement;

      if (container && target) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const scrollTop = container.scrollTop + (targetRect.top - containerRect.top) - 100;
        const scrollLeft = container.scrollLeft + (targetRect.left - containerRect.left) - 50;

        container.scrollTo({
          top: scrollTop,
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [focusedSeatIds]);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gray-800/20" onClick={onClose} />

      {/* 모달 */}
      <div className="relative z-10 flex h-full items-center justify-center p-3">
        <div className="relative w-full max-w-md rounded-lg bg-gray-950 px-2 py-3 md:max-h-3/4 md:max-w-2xl lg:max-h-4/5 lg:max-w-5xl">
          {/* 헤더 */}
          <div className="mb-1 flex items-center justify-between px-2">
            <div className="text-title-3">{selectedSeatNumbers.join(', ')}</div>
            <CloseIcon className="cursor-pointer" onClick={onClose} />
          </div>

          <div className="text-body-2 btn-text-gray-500 mb-4 px-2 text-left">{theaterName}</div>

          {/* 스크롤 가능한 좌석 영역 */}
          <div className="max-h-[400px] overflow-auto p-4" ref={containerRef}>
            <div ref={innerRef} className="flex min-w-max flex-col items-center">
              <ScreenBar />
              <SeatMap type="seatFocus" auditoriumId={auditoriumId} focusedSeatIds={seatIds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatFocusModal;
