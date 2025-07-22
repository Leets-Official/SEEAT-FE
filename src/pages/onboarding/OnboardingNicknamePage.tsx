import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import Input from '@/components/common/Input/Input';
import Header from '@/components/common/Header/Header';

const OnboardingNicknamePage = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    console.log('닉네임:', input);
    navigate('/onboarding/genre');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto bg-gray-900 text-white relative pb-32">
      {/* 상단 헤더 */}
      <Header title="" onBackClick={handleBack} />

      {/* 진행도 바 */}
      <div className="mt-6 mb-2">
        <div className="h-2 w-full bg-gray-800 relative">
          <div className="absolute left-0 top-0 h-full bg-red-400" style={{ width: '33.33%' }} />
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="px-6 mt-6">
        {/* 진행도 */}
        <div className="text-title-1 text-white mb-3">1/3</div>

        {/* 타이틀 */}
        <h1 className="text-title-2 mb-10">프로필을 만들어주세요</h1>

        {/* 프로필 이미지 (예시용 박스) */}
        <div className="flex justify-center mb-10">
          <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center text-black text-sm">
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
            showBackground={true}
          />
        </div>

        <p className="text-caption-3 text-gray-500 ml-1">10자 이내로 작성해주세요.</p>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[375px] px-6">
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
