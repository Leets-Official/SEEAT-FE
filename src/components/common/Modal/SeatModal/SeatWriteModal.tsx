import { useEffect, useRef } from 'react';
import { CloseIcon } from '@/assets';
import { useModalStore } from '@/store/modalStore';
import ScreenBar from '@/components/seat/ScreenBar';
import SeatMap from '@/components/seat/SeatMap';
import { useSelectedSeatsStore } from '@/store';
import { Button } from '@/components';

interface SeatWriteModalProps {
  auditoriumId: string;
  theaterName: string;
}

const SeatWriteModal = ({ auditoriumId, theaterName }: SeatWriteModalProps) => {
  const { closeModal } = useModalStore();
  const { selectedSeats, toggleSeat } = useSelectedSeatsStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleSeatClick = (seatId: string) => {
    toggleSeat(seatId);
    console.log('seatId : ', seatId);
  };

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
      <div className="absolute inset-0 bg-gray-800/20" onClick={closeModal} />

      <div className="relative z-10 flex h-full items-center justify-center p-3">
        <div className="relative w-full max-w-md rounded-lg bg-gray-950 px-2 py-3 md:max-h-3/4 md:max-w-2xl lg:max-h-4/5 lg:max-w-5xl">
          <div className="mb-1 flex items-center justify-between px-2">
            <div className="text-title-3">좌석을 선택해주세요</div>
            <CloseIcon className="cursor-pointer" onClick={closeModal} />
          </div>

          <div className="text-body-2 btn-text-gray-500 mb-4 px-2 text-left">{theaterName}</div>

          <div className="max-h-[400px] overflow-auto p-4" ref={scrollContainerRef}>
            <div ref={innerRef} className="flex min-w-max flex-col items-center">
              <ScreenBar />
              <SeatMap
                type="seatWrite"
                auditoriumId={auditoriumId}
                onSeatClick={handleSeatClick}
                selectedSeatNames={selectedSeats}
              />
            </div>
          </div>
          <div className="px-4" onClick={closeModal}>
            <Button className="mt-5 w-full">선택 완료</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatWriteModal;
