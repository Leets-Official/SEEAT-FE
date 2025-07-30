import { SeatMap } from '@/components';
import { useModalStore } from '@/store/modalStore';
import { CloseIcon } from '@/assets';
import ScreenBar from '@/components/seat/ScreenBar';
import { useEffect, useRef } from 'react';
import BaseModal from './BaseModal';
import { useNavigate } from 'react-router-dom';

interface SeatPickerModalProps {
  theaterType: 'IMAX' | 'Dolby Cinema';
  theaterName: string;
  auditoriumId: string;
}

const SeatPickerModal = ({ auditoriumId }: SeatPickerModalProps) => {
  const { closeModal } = useModalStore();
  const nav = useNavigate();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleSeatClick = (seatId: string) => {
    closeModal();
    nav(`/seat/review/${seatId}`);
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
    <BaseModal>
      <div className="relative w-[90%] max-w-[350px] rounded-lg bg-gray-950 px-2 py-3 text-white">
        {/* 헤더 */}
        <div className="mb-1 flex items-center justify-between px-2">
          <div className="text-title-3">좌석의 후기를 볼 수 있어요</div>
          <CloseIcon className="cursor-pointer" onClick={closeModal} />
        </div>

        <div className="text-body-2 btn-text-gray-500 mb-4 px-2 text-left">
          후기가 궁금한 좌석을 선택해 주세요.
        </div>

        {/* 스크롤 가능한 좌석 영역 */}
        <div className="max-h-[400px] overflow-auto p-4" ref={scrollContainerRef}>
          <div ref={innerRef} className="flex min-w-max flex-col items-center">
            <ScreenBar />
            <SeatMap auditoriumId={auditoriumId} isMock onSeatClick={handleSeatClick} />
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default SeatPickerModal;
