import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header } from '@/components';
import Input from '@/components/common/Input/Input';
import ProgressBar from '@/components/common/ProgressBar/ProgressBar';
import { useOnboardingStore } from '@/store/useOnboardingStore';

const OnboardingNicknamePage = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const setNickname = useOnboardingStore((state) => state.setNickname);

  const handleNext = () => {
    setNickname(input);
    console.log('닉네임: ', input);
    navigate('/onboarding/genre');
  };

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[375px] bg-gray-900 pb-32 text-white">
      {/* 상단 헤더 */}
      <Header leftSection="BACK" onBackClick={() => navigate('/login')} className="bg-gray-900" />
      {/* 진행도 바 */}
      <ProgressBar currentStep={1} totalSteps={3} />

      {/* 콘텐츠 영역 */}
      <div className="mt-6 px-6">
        {/* 타이틀 */}
        <h1 className="text-title-2 mb-10">프로필을 만들어주세요</h1>

        {/* 프로필 이미지 (예시용 박스) */}
        <div className="mb-10 flex justify-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-100 text-sm text-black">
            갤러리 아이콘
          </div>
        </div>

        {/* 닉네임 입력 */}
        <div className="mb-2">
          <Input
            label=""
            value={input}
            onChange={setInput}
            placeholder="닉네임을 입력해주세요"
            placeholderColorType="gray"
          />
        </div>

        <p className="text-caption-3 ml-1 text-gray-500">10자 이내로 작성해주세요.</p>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-8 left-1/2 w-full max-w-[375px] -translate-x-1/2 px-6">
        <Button
          onClick={handleNext}
          disabled={!input.trim()}
          variant="primary"
          color="red"
          size="lg"
          fontType="title-3"
          className="w-full"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingNicknamePage;
