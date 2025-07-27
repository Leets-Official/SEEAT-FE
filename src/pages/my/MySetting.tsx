// src/pages/my/MySetting.tsx

import KakaoIcon from '@/assets/icons/kakaoset.svg?react';
import HeaderBasic from '@/components/common/Header/HeaderBasic';
// react-router-dom에서 useNavigate를 import합니다.
import { useNavigate } from 'react-router-dom';

export default function MySettingPage() {
  const userEmail = 'ihatemonday@gmail.com';
  const appVersion = '1.0.0';
  // useNavigate 훅을 초기화합니다.
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('로그아웃 되었습니다.');
  };

  const handleWithdrawal = () => {
    if (confirm('정말로 회원탈퇴 하시겠습니까?')) {
      alert('회원탈퇴 처리되었습니다.');
    }
  };

  // 뒤로가기 버튼 클릭 시 이전 페이지로 이동하도록 수정합니다.
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-[400px] px-4">
        {/* onBackClick 핸들러는 이미 handleGoBack으로 연결되어 있습니다. */}
        <HeaderBasic onBackClick={handleGoBack}>
          <h1 className="text-title-3">설정</h1>
        </HeaderBasic>

        {/* 설정 목록 */}
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