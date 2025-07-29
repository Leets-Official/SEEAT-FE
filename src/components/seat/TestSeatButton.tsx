import { useModalStore } from '@/store/modalStore';

export const TestSeatModalButton = () => {
  const { openModal } = useModalStore();

  const handleOpen = () => {
    openModal('seatPicker', {
      theaterType: 'IMAX',
      theaterName: 'CGV 강남',
      auditoriumId: '13018',
    });
  };

  return (
    <button onClick={handleOpen} className="bg-primary rounded px-4 py-2 text-white">
      좌석 선택 모달 열기
    </button>
  );
};
