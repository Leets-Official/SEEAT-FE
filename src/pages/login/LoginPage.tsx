import { KakaoIcon, NaverIcon } from '@/assets';
import LogoIcon from '@/assets/icons/seeat_logo.svg?react';

const LoginPage = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleKakaoLogin = () => {
    console.log('카카오 로그인');
    window.location.href = `${BASE_URL}/oauth2/authorization/kakao`;
  };

  const handleNaverLogin = () => {
    console.log('네이버 로그인');
    window.location.href = `${BASE_URL}/oauth2/authorization/naver`;
  };

  return (
    <div className="relative h-screen w-full">
      {/* 중앙 그래픽 자리 */}
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-center text-white">그래픽,,들어갈 자리,,</h1>

        {/* SEEAT 로고 */}
        <LogoIcon className="mt-[30px] mb-10 h-auto w-[106px]" />
      </div>

      {/* 소셜 로그인 버튼 */}
      <div className="absolute bottom-40 left-0 w-full">
        <div className="flex w-full flex-col gap-4 px-6">
          {/* 카카오 로그인 */}
          <button
            onClick={handleKakaoLogin}
            className="bg-kakao text-title-3 rounded-m flex h-12 w-full cursor-pointer items-center justify-center gap-2 py-6 text-gray-950"
          >
            <KakaoIcon className="h-6 w-6" />
            카카오로 시작하기
          </button>

          {/* 네이버 로그인 */}
          <button
            onClick={handleNaverLogin}
            className="bg-naver rounded-m text-title-3 flex h-12 cursor-pointer items-center justify-center gap-2 py-6"
          >
            <NaverIcon className="h-6 w-6" />
            네이버로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
