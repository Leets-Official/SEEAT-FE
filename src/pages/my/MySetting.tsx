import KakaoIcon from '@/assets/kakao-icon.svg?react';
import { HeaderBasic } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '@/store/modalStore';

export default function MySettingPage() {
  const userEmail = 'ihatemonday@gmail.com';
  const appVersion = '1.0.0';
  const navigate = useNavigate();
  const { openModal } = useModalStore();

  const handleLogout = () => {
    openModal({
      title: '로그아웃 하시겠습니까?',
      subtitle: '현재 계정에서 로그아웃됩니다.',
      confirmText: '로그아웃',
      cancelText: '취소',
      onConfirm: () => {
      console.log('로그아웃 처리');
      },
    });
  };

  const handleWithdrawal = () => {
    openModal({
      title: '정말로 회원탈퇴 하시겠습니까?',
      subtitle: '회원탈퇴 시 모든 정보가 삭제됩니다.',
      subWarningText: '탈퇴 후에는 복구가 불가능합니다.',
      confirmText: '회원탈퇴',
      cancelText: '취소',
      onConfirm: () => {
      console.log('회원탈퇴 처리');
      },
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto w-full max-w-[400px] px-4">
        <HeaderBasic onBackClick={handleGoBack}>
          <h1 className="text-title-3">설정</h1>
        </HeaderBasic>

        <main className="mt-6 w-[335px] mx-auto flex flex-col divide-y divide-gray-800">
          <div className="flex w-full h-[56px] items-center justify-between">
            <span className="text-title-3 text-white">계정</span>
            <div className="flex items-center gap-x-2 text-gray-400">
              <KakaoIcon className="h-5 w-5" />
              <span className="text-body-1">{userEmail}</span>
            </div>
          </div>
          <div className="flex w-full h-[56px] items-center justify-between">
            <span className="text-title-3 text-white">버전 정보</span>
            <span className="text-body-1 text-gray-400">{appVersion}</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full h-[56px] flex items-center text-left text-title-3 text-white"
          >
            로그아웃
          </button>
          <button
            onClick={handleWithdrawal}
            className="w-full h-[56px] flex items-center text-left text-title-3 text-red-400"
          >
            회원탈퇴
          </button>
        </main>
      </div>
    </div>
  );
}
