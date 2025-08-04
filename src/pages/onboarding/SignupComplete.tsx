import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';
import RunningGIF from '@/assets/gif/running_alt.gif';

const SignupComplete = () => {
  const nav = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-6 pt-32 pb-10">
      <div className="flex flex-col items-center">
        <img src={RunningGIF} alt="러닝 팝콘" className="mb-12 h-auto w-[385px]" />
        <h1 className="text-title-1 mb-6 text-center">가입을 축하합니다!</h1>
        <p className="text-body-2 text-center text-gray-500">
          seeat에서 완벽한 영화 생활 즐기러
          <br />
          바로 출발해볼까요?
        </p>
      </div>

      <Button onClick={() => nav('/home')} fontType="title-3" className="w-full">
        시작하기
      </Button>
    </div>
  );
};

export default SignupComplete;
