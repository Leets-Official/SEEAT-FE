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
    <div className="flex h-screen flex-col items-center justify-between px-6 py-10">
      {/* 로고 영역 */}
      <div className="mt-24 flex flex-col items-center">
        <img src={RunningGIF} alt="러닝 팝콘" className="mb-4 h-auto w-[385px]" />
        <SEEATLogo className="mb-8" />
      </div>

      {/* 로그인 버튼 영역 */}
      <div className="w-full max-w-md">
        <div className="flex w-full flex-col gap-4">
          <button
            onClick={handleKakaoLogin}
            className="bg-kakao text-title-3 rounded-m flex h-12 w-full cursor-pointer items-center justify-center gap-2 text-gray-950"
          >
            <KakaoIcon className="h-6 w-6" />
            카카오로 시작하기
          </button>

          <button
            onClick={handleNaverLogin}
            className="bg-naver rounded-m text-title-3 mb-16 flex h-12 w-full cursor-pointer items-center justify-center gap-2"
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
