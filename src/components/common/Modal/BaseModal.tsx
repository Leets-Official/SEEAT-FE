import type { ReactNode } from 'react';
import { useModalStore } from '@/store/modalStore';

interface BaseModalProps {
  children: ReactNode;
}

const BaseModal = ({ children }: BaseModalProps) => {
  const { modalType, closeModal } = useModalStore();
  const isActionType = modalType === 'action';

  // 액션 시트 모달일 때 위치
  if (isActionType) {
    return (
      <>
        <div className="fixed inset-0 z-40 bg-gray-800/20" onClick={closeModal} />
        <div className="absolute top-[22px] right-1 z-50" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 모달 외부 클릭 시 모달 닫힘 */}
      <div className="absolute inset-0 bg-gray-800/20" onClick={closeModal} />
      <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default BaseModal;
