import { KakaoIcon, NaverIcon, RunningGIF, SEEATLogo } from '@/assets';

const LoginPage = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleKakaoLogin = () => {
    window.location.href = `${BASE_URL}/oauth2/authorization/kakao`;
  };

  const handleNaverLogin = () => {
    window.location.href = `${BASE_URL}/oauth2/authorization/naver`;
  };

  return (
    <div className="relative h-screen w-full">
      <div className="flex h-full flex-col items-center justify-start pt-[180px]">
        <img src={RunningGIF} alt="러닝 팝콘" className="mb-4 h-auto w-[385px]" />
        <SEEATLogo className="mb-10" />
      </div>

      {/* 소셜 로그인 버튼 */}
      <div className="absolute bottom-40 left-0 w-full">
        <div className="flex w-full flex-col gap-4 px-6">
          {/* 카카오 로그인 */}
          <button
            onClick={handleKakaoLogin}
            className="bg-kakao text-title-3 rounded-m flex h-12 w-full cursor-pointer items-center justify-center gap-2 py-6.5 text-gray-950"
          >
            <KakaoIcon className="h-6 w-6" />
            카카오로 시작하기
          </button>

          {/* 네이버 로그인 */}
          <button
            onClick={handleNaverLogin}
            className="bg-naver rounded-m text-title-3 flex h-12 cursor-pointer items-center justify-center gap-2 py-6.5"
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
