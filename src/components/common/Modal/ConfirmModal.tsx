interface ConfirmModalProps {
  title: string;
  subtitle?: string;
  subWarningText?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ConfirmModal = ({
  title,
  subtitle,
  subWarningText,
  cancelText = '취소',
  confirmText = '등록하기',
  onCancel,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <div className="w-[360px] rounded-[12px] bg-[#424242] px-4 pt-6 pb-5 shadow-lg">
      {title && <h2 className="text-title-3 text-center text-white">{title}</h2>}
      {subtitle && <p className="text-body-2 text-center text-white">{subtitle}</p>}
      {subWarningText && (
        <p className="text-body-2 text-yellow-warn text-center">{subWarningText}</p>
      )}

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={onCancel}
          className="h-[55px] w-[155px] rounded-[12px] bg-[#7D7D7D] text-[#E0E0E0]"
        >
          {cancelText}
        </button>
        <button
          onClick={onConfirm}
          className="h-[55px] w-[155px] rounded-[12px] bg-[#EF5350] text-white"
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
