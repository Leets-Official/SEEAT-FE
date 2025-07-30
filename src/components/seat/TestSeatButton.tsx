import { useModalStore } from '@/store';
import { ConfirmModal, SeatPickerModal } from '@/components';

export const TestSeatModalButton = () => {
  const { openModal, modalType, closeModal } = useModalStore();

  const handleOpen = () => {
    openModal('seatPicker');
  };

  const handleOpenConfirm = () => {
    openModal('confirm');
  };

  return (
    <>
      <button onClick={handleOpen} className="bg-primary rounded px-4 py-2 text-white">
        좌석 선택 모달 열기
      </button>

      <button onClick={handleOpenConfirm} className="bg-primary rounded px-4 py-2 text-white">
        confirm 모달 열기
      </button>

      {modalType === 'seatPicker' && (
        <SeatPickerModal theaterType="IMAX" theaterName="CGV 강남" auditoriumId="13018" />
      )}

      {modalType === 'confirm' && (
        <ConfirmModal
          title="후기를 등록하시겠어요?"
          // subWarningText="탈퇴하면 7일 후 다시 가입할 수 있어요."
          subtitle="등록한 후기는 마이페이지에서 확인할 수 있어요."
          confirmText="등록하기"
          cancelText="취소"
          onCancel={closeModal}
        />
      )}
    </>
  );
};
