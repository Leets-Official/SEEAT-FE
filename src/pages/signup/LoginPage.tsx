import KakaoIcon from '@/assets/icons/kakao_icon.svg';
import NaverIcon from '@/assets/icons/naver_icon.svg';

function LoginPage() {
  return (
    <div className="relative h-screen w-full bg-[#1E1E1E]">
      {/* 중앙 그래픽 자리 */}
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-white text-center">그래픽,,들어갈 자리,,</h1>
      </div>

      {/* 소셜 로그인 버튼 */}
      <div className="absolute bottom-40 left-0 w-full px-6">
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          {/* 카카오 로그인 */}
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded bg-kakao text-sm font-semibold text-black">
            <img src={KakaoIcon} alt="Kakao" className="h-5 w-5" />
            카카오로 시작하기
          </button>

          {/* 네이버 로그인 */}
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded bg-naver text-sm font-semibold text-white">
            <img src={NaverIcon} alt="Naver" className="h-5 w-5" />
            네이버로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
