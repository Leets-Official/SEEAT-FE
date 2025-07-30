import { useModalStore } from '@/store';
import { SeatPickerModal } from '@/components';

export const TestSeatModalButton = () => {
  const { openModal, modalType } = useModalStore();

  const handleOpen = () => {
    openModal('seatPicker');
  };

  return (
    <>
      <button onClick={handleOpen} className="bg-primary rounded px-4 py-2 text-white">
        좌석 선택 모달 열기
      </button>

      {modalType === 'seatPicker' && (
        <SeatPickerModal theaterType="IMAX" theaterName="CGV 강남" auditoriumId="13018" />
      )}
    </>
  );
};
