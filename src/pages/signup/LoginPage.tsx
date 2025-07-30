import KakaoIcon from '@/assets/icons/kakao_icon.svg?react';
import NaverIcon from '@/assets/icons/naver_icon.svg?react';
import SeeatLogo from '@/assets/icons/seeat_logo.svg?react';

function LoginPage() {
  return (
    <div className="relative h-screen w-full bg-[#1E1E1E]">
      {/* 중앙 그래픽 자리 */}
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-center text-white">그래픽,,들어갈 자리,,</h1>

        {/* SEEAT 로고 */}
        <SeeatLogo className="mt-[30px] mb-10 h-auto w-[106px]" />
      </div>

      {/* 소셜 로그인 버튼 */}
      <div className="absolute bottom-40 left-0 w-full px-6">
        <div className="mx-auto flex w-full max-w-xs flex-col gap-4">
          {/* 카카오 로그인 */}
          <button className="bg-kakao flex h-12 w-full items-center justify-center gap-2 rounded text-sm font-semibold text-black">
            <KakaoIcon className="h-5 w-5" />
            카카오로 시작하기
          </button>

          {/* 네이버 로그인 */}
          <button className="bg-naver flex h-12 w-full items-center justify-center gap-2 rounded text-sm font-semibold text-white">
            <NaverIcon className="h-5 w-5" />
            네이버로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
