import KakaoIcon from '@/assets/icons/kakao_icon.svg?react';
import { ConfirmModal, HeaderBasic } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '@/store/modalStore';

export default function MySettingPage() {
  const userEmail = 'ihatemonday@gmail.com';
  const appVersion = '1.0.0';
  const navigate = useNavigate();
  const { openModal, modalType, closeModal } = useModalStore();

  const handleLogout = () => {
    openModal('logoutConfirm');
  };

  const handleWithdrawal = () => {
    openModal('withdrawalConfirm');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-[400px] px-4">
        <HeaderBasic onBackClick={handleGoBack}>
          <h1 className="text-title-3">설정</h1>
        </HeaderBasic>

        <main className="mx-auto mt-6 flex w-[335px] flex-col divide-y divide-gray-800">
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
    </div>
  );
}
