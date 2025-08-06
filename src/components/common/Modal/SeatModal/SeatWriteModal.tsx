import { useEffect, useRef, useState } from 'react';
import { CloseIcon } from '@/assets';
import ScreenBar from '@/components/seat/ScreenBar';
import SeatMap from '@/components/seat/SeatMap';
import { useSelectedSeatsStore } from '@/store';
import { Button } from '@/components';
import { getSeatLayout } from '@/api/theater/theater.api';
import type { SeatRatingInfo } from '@/api/theater/theater.api';
import type { ApiError } from '@/types/api-response';
import { useReviewStore } from '@/store';

interface SeatWriteModalProps {
  auditoriumId: string;
  theaterName: string;
  onClose: (seatNames: string[]) => void;
}

const SeatWriteModal = ({ auditoriumId, theaterName, onClose }: SeatWriteModalProps) => {
  const [seatData, setSeatData] = useState<SeatRatingInfo[]>([]);
  const { addSeat, addSeatId } = useReviewStore();
  useEffect(() => {
    const fetchSeatLayout = async () => {
      try {
        const res = await getSeatLayout(auditoriumId);
        const parsed = res.map((seat) => ({
          ...seat,
          column: Number(seat.column),
          totalReviews: 0,
          averageRating: 0,
          type: 'NO_REVIEW',
          isWheelchair: false,
        }));
        setSeatData(parsed);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('좌석 배치도 조회 실패:', apiError.message, apiError.error);
      }
    };

    fetchSeatLayout();
  }, [auditoriumId]);

  // 선택 좌석 전역상태 관리
  const { selectedSeats, toggleSeat } = useSelectedSeatsStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleSeatClick = (seatId: string) => {
    toggleSeat(seatId);
    console.log('seatId : ', seatId);
  };
  const handleComplete = () => {
    const selectedSeatObjs = seatData.filter((seat) => selectedSeats.includes(seat.seatId));

    selectedSeatObjs.forEach((seat) => {
      addSeat(`${seat.row}${seat.column}`);
      addSeatId(seat.seatId);
    });

    const selectedNames = selectedSeatObjs.map((seat) => `${seat.row}${seat.column}`);
    onClose(selectedNames);
  };

  const isDisabled = selectedSeats.length === 0;

  useEffect(() => {
    const container = scrollContainerRef.current;
    const inner = innerRef.current;
    if (container && inner) {
      const scrollX = (inner.scrollWidth - container.clientWidth) / 2;
      container.scrollTo({ left: scrollX });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gray-800/20" onClick={() => onClose} />

      <div className="relative z-10 flex h-full items-center justify-center p-3">
        <div className="relative w-full max-w-md rounded-lg bg-gray-950 px-2 py-3 md:max-h-3/4 md:max-w-2xl lg:max-h-4/5 lg:max-w-5xl">
          <div className="mb-1 flex items-center justify-between px-2">
            <div className="text-title-3">좌석을 선택해주세요</div>
            <CloseIcon className="cursor-pointer" onClick={() => onClose} />
          </div>

          <div className="text-body-2 btn-text-gray-500 mb-4 px-2 text-left">{theaterName}</div>

          <div className="max-h-[400px] overflow-auto p-4" ref={scrollContainerRef}>
            <div ref={innerRef} className="flex min-w-max flex-col items-center">
              <ScreenBar />
              <SeatMap
                type="seatWrite"
                seatData={seatData}
                auditoriumId={auditoriumId}
                onSeatClick={handleSeatClick}
                selectedSeatNames={selectedSeats}
              />
            </div>
          </div>
          <div className="px-4" onClick={() => onClose}>
            <Button className="mt-5 w-full" disabled={isDisabled} onClick={handleComplete}>
              선택 완료
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatWriteModal;
