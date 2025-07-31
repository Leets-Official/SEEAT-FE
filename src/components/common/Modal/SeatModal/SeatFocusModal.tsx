import { useEffect, useRef } from 'react';
import { CloseIcon } from '@/assets';
import { useModalStore } from '@/store/modalStore';
import SeatMap from '@/components/seat/SeatMap';
import ScreenBar from '@/components/seat/ScreenBar';

interface SeatFocusModalProps {
  auditoriumId: string;
  theaterName: string;
  selectedSeatNumbers: string[];
}

const SeatFocusModal = ({
  auditoriumId,
  theaterName,
  selectedSeatNumbers,
}: SeatFocusModalProps) => {
  const { closeModal } = useModalStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const seatIds = selectedSeatNumbers.map((num) => `${auditoriumId}${num}`);

  useEffect(() => {
    const container = containerRef.current;
    const target = container?.querySelector('[data-seat-focus="true"]') as HTMLDivElement;
    if (container && target) {
      const top = target.offsetTop - container.offsetTop - 100;
      container.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gray-800/20" onClick={closeModal} />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div
          className="max-h-[90vh] w-[350px] overflow-auto rounded-lg bg-gray-950 px-3 py-4"
          ref={containerRef}
        >
          <div className="mb-1 flex items-center justify-between">
            <div className="text-title-3">{selectedSeatNumbers.join(', ')}</div>
            <CloseIcon className="cursor-pointer" onClick={closeModal} />
          </div>

          <div className="text-body-2 btn-text-gray-500 mb-4 text-left">{theaterName}</div>

          <div className="pb-4">
            <ScreenBar />
            <SeatMap type="seatFocus" auditoriumId={auditoriumId} focusedSeatIds={seatIds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatFocusModal;
