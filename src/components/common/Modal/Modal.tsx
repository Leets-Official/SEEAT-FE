import { useModalStore } from '@/store/modalStore';
import SeatPickerModal from './SeatPickerModal';

const Modal = () => {
  const { isOpen, modalProps, modalType, closeModal } = useModalStore();

  if (!isOpen) return null;

  switch (modalType) {
    case 'seatPicker':
      return <SeatPickerModal {...(modalProps as any)} />;
    case 'confirm':
      break; // 아래 공통 confirm 모달 렌더링으로 넘어감
    default:
      return null;
  }

  const {
    title = '',
    subtitle = '',
    subWarningText = '',
    cancelText = '취소',
    confirmText = '등록하기',
    onConfirm,
    onCancel,
  } = modalProps;

  const handleCancel = () => {
    onCancel?.();
    closeModal();
  };

  const handleConfirm = () => {
    onConfirm?.();
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex min-h-[200px] w-[360px] flex-col items-center gap-[28px] rounded-[12px] bg-[#424242] px-[16px] pt-[28px] pb-[24px] shadow-lg">
        {title && <h2 className="text-title-3 text-center text-white">{title}</h2>}
        {subtitle && <p className="text-body-2 text-center text-white">{subtitle}</p>}
        {subWarningText && (
          <p className="text-body-2 text-yellow-warn text-center">{subWarningText}</p>
        )}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="text-title-3 h-[55px] w-[155px] rounded-[12px] bg-[#7D7D7D] text-[16px] text-[#E0E0E0]"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className="text-title-3 h-[55px] w-[155px] rounded-[12px] bg-[#EF5350] text-white"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
