import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Button, ToggleTab, Header } from '@/components';
import { theaterData } from '@/types/onboarding';
import type { CinemaType, CinemaFormat } from '@/types/onboarding';
import ProgressBar from '@/components/common/ProgressBar/ProgressBar';

const OnboardingTheaterPage = () => {
  const navigate = useNavigate();
  const {
    selectedCinemas,
    setSelectedCinemas,
    setCinemaFormat,
  } = useOnboardingStore();

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>('IMAX');

  const handleToggleTab = (tab: string) => {
    const format = tab as CinemaFormat;
    setSelectedTab(format);
    setCinemaFormat(format);
  };

  const toggleTheater = (theater: CinemaType) => {
    const isSelected = selectedCinemas.includes(theater);
    if (isSelected) {
      setSelectedCinemas(selectedCinemas.filter((t) => t !== theater));
    } else {
      if (selectedCinemas.length >= 2) return;
      setSelectedCinemas([...selectedCinemas, theater]);
    }
  };

  const handleNext = () => {
    if (selectedCinemas.length === 0) return;
    navigate('/signup/complete');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full max-w-[375px] mx-auto relative pb-32">
      {/* 상단 헤더 */}
      <Header title="" onBackClick={handleBack} showLike={false} showBookmark={false} />

      {/* 진행도 바 */}
      <ProgressBar currentStep={3} totalSteps={3} />

      {/* 콘텐츠 영역 */}
      <div className="px-6 mt-6">
        <h1 className="text-title-2 text-white mb-1">자주 가는 영화관을 선택해주세요</h1>
        <p className="text-caption-2 text-red-300 mb-6">최대 2개까지 선택할 수 있어요.</p>

        <ToggleTab
          options={[
            { label: 'IMAX', value: 'IMAX' },
            { label: 'Dolby Cinema', value: 'Dolby' },
          ]}
          selected={selectedTab}
          onSelect={handleToggleTab}
          className="w-full mb-4"
        />

        <div className="h-3" />

        <div className="flex flex-col gap-3 mb-20">
          {theaterData[selectedTab].map((theater) => {
            const isSelected = selectedCinemas.includes(theater);
            return (
              <Button
                key={theater}
                onClick={() => toggleTheater(theater)}
                variant="secondary-assistive"
                selected={isSelected}
                className="w-full px-4 py-3 text-left rounded-md"
              >
                {theater}
              </Button>
            );
          })}
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[375px] px-6">
        <Button
          onClick={handleNext}
          disabled={selectedCinemas.length === 0}
          variant="primary"
          color="red"
          size="lg"
          fontType="title-3"
          className="w-full"
        >
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default OnboardingTheaterPage;
