import type { ReactNode } from 'react';
import { useModalStore } from '@/store/modalStore';
import { cn } from '@/utils/cn';

interface BaseModalProps {
  children: ReactNode;
}

const BaseModal = ({ children }: BaseModalProps) => {
  const { modalType, closeModal } = useModalStore();

  const isActionType = modalType === 'action';

  return (
    <>
      {!isActionType && <div className="fixed inset-0 z-40 bg-gray-800/10" onClick={closeModal} />}

      <div
        className={cn(
          'z-50',
          isActionType
            ? 'absolute top-[52px] right-4' // 액션시트모달 구현 시 알맞은 위치로 조정
            : 'fixed inset-0 flex items-center justify-center',
        )}
      >
        {children}
      </div>
    </>
  );
};

export default BaseModal;
