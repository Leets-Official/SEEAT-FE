import { useModalStore } from '../../../store/modalStore';

const Modal = () => {
  const { isOpen, modalProps, closeModal } = useModalStore();

  if (!isOpen) return null;

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
      <div className="bg-[#424242] w-[360px] min-h-[200px] rounded-[12px] shadow-lg px-[16px] pt-[28px] pb-[24px] flex flex-col items-center gap-[28px]">
        {title && (
          <h2 className="text-white text-[20px] font-medium text-center">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-white text-[16px] font-normal leading-[1.5] text-center">
            {subtitle}
          </p>
        )}
        {subWarningText && (
          <p className="text-[14px] text-yellow-400 font-normal text-center">
            {subWarningText}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleCancel}
            className="w-[155px] h-[55px] bg-[#7D7D7D] text-[#F5F5F5] text-[16px] font-bold rounded-[12px]"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className="w-[155px] h-[55px] bg-[#EF5350] text-white text-[16px] font-bold rounded-[12px]"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
