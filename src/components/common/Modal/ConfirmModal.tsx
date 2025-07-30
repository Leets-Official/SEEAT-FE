import { Button, BaseModal } from '@/components';

interface ConfirmModalProps {
  title: string;
  subtitle?: string;
  subWarningText?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  reverseButton?: boolean; // 버튼 순서 반전
}

const ConfirmModal = ({
  title,
  subtitle,
  subWarningText,
  cancelText = '취소',
  confirmText = '등록하기',
  onCancel,
  onConfirm,
  reverseButton = false,
}: ConfirmModalProps) => {
  const CancelButton = (
    <Button fontType="title-3" color="gray" className="w-full" onClick={onCancel}>
      {cancelText}
    </Button>
  );

  const ConfirmButton = (
    <Button fontType="title-3" className="w-full" onClick={onConfirm}>
      {confirmText}
    </Button>
  );

  return (
    <BaseModal>
      <div className="w-[335px] rounded-l bg-gray-800 px-4 pt-6 pb-5 shadow-md">
        <div className="p-1">
          {title && <div className="text-title-3 text-center">{title}</div>}
          {subtitle && <div className="text-body-2 my-1 text-center">{subtitle}</div>}
          {subWarningText && (
            <div className="text-body-2 text-yellow-warn my-1 text-center">{subWarningText}</div>
          )}
        </div>

        <div className="mt-5 flex gap-3">
          {reverseButton ? (
            <>
              {ConfirmButton}
              {CancelButton}
            </>
          ) : (
            <>
              {CancelButton}
              {ConfirmButton}
            </>
          )}
        </div>
      </div>
    </BaseModal>
  );
};

export default ConfirmModal;
