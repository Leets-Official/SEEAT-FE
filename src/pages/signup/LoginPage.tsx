import KakaoIcon from '@/assets/kakao-icon.svg';
import NaverIcon from '@/assets/naver-icon.svg';

function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#1E1E1E] px-6">
      <div className="mb-24 text-center">
        <h1 className="text-white">그래픽,,들어갈 자리,,</h1>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-4">
        <button className="flex h-12 w-full items-center justify-center gap-2 rounded bg-[#FEE500] text-sm font-semibold text-black">
          <img src={KakaoIcon} alt="Kakao" className="h-5 w-5" />
          카카오로 시작하기
        </button>

        <button className="flex h-12 w-full items-center justify-center gap-2 rounded bg-[#03C75A] text-sm font-semibold text-white">
          <img src={NaverIcon} alt="Naver" className="h-5 w-5" />
          네이버로 시작하기
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
