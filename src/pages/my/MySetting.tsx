import KakaoIcon from '@/assets/icons/kakao_icon.svg?react';
import { ConfirmModal, Header } from '@/components';
import { useModalStore } from '@/store/modalStore';

export default function MySettingPage() {
  const userEmail = 'ihatemonday@gmail.com';
  const appVersion = '1.0.0';
  const { openModal, modalType, closeModal } = useModalStore();

  const handleLogout = () => {
    openModal('logoutConfirm');
  };

  const handleWithdrawal = () => {
    openModal('withdrawalConfirm');
  };

  return (
    <div className="min-h-screen">
      <Header leftSection="BACK">설정</Header>
      <main className="mx-auto flex flex-col divide-y divide-gray-800 px-6 pt-[78px]">
        <div className="flex h-[56px] w-full items-center justify-between">
          <span className="text-title-3 text-white">계정</span>
          <div className="flex items-center gap-x-2 text-gray-400">
            <KakaoIcon className="h-5 w-5" />
            <span className="text-body-1">{userEmail}</span>
          </div>
        </div>
        <div className="flex h-[56px] w-full items-center justify-between">
          <span className="text-title-3 text-white">버전 정보</span>
          <span className="text-body-1 text-gray-400">{appVersion}</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-title-3 flex h-[56px] w-full items-center text-left text-white"
        >
          로그아웃
        </button>
        <button
          onClick={handleWithdrawal}
          className="text-title-3 flex h-[56px] w-full items-center text-left text-red-400"
        >
          회원탈퇴
        </button>
      </main>

      {modalType === 'logoutConfirm' && (
        <ConfirmModal
          title="로그아웃하시겠어요?"
          confirmText="취소"
          cancelText="로그아웃하기"
          reverseButton
        />
      )}

      {modalType === 'withdrawalConfirm' && (
        <ConfirmModal
          title="탈퇴하시겠어요?"
          subWarningText="탈퇴하면 7일 후 다시 가입할 수 있어요."
          cancelText="탈퇴하기"
          confirmText="취소"
          reverseButton
          onConfirm={() => {
            console.log('회원탈퇴 처리');
            closeModal();
          }}
        />
      )}
    </div>
  );
}
