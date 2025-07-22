import KakaoIcon from '@/assets/kakao-icon.svg';
import NaverIcon from '@/assets/naver-icon.svg';

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 px-6">
      {/* 그래픽 자리 */}
      <div className="mb-24 text-center">
        <h1 className="text-title-2 text-yellow-warn">그래픽,,들어갈 자리,,</h1>
      </div>

      {/* 로그인 버튼 영역 */}
      <div className="flex flex-col w-full max-w-xs gap-4">
        {/* 카카오 로그인 */}
        <button className="flex items-center justify-center gap-2 w-full h-12 rounded bg-[#FEE500] text-black text-body-1 font-semibold">
          <img src={KakaoIcon} alt="Kakao" className="w-5 h-5" />
          카카오로 시작하기
        </button>

        {/* 네이버 로그인 */}
        <button className="flex items-center justify-center gap-2 w-full h-12 rounded bg-[#03C75A] text-white text-body-1 font-semibold">
          <img src={NaverIcon} alt="Naver" className="w-5 h-5" />
          네이버로 시작하기
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
