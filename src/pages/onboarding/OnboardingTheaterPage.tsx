import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Button, ToggleTab, Header, ProgressBar } from '@/components';
import type { CinemaType, CinemaFormat } from '@/types/onboarding';
import type { Theater } from '@/types/theater';
import { useTheatersQuery } from '@/hooks/queries/useTheatersQuery';
import TheaterList from '@/components/common/Theater/TheaterList';

const OnboardingTheaterPage = () => {
  const navigate = useNavigate();
  const { selectedCinemas, setSelectedCinemas, setCinemaFormat } = useOnboardingStore();

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>('IMAX');

  const { data: theaters } = useTheatersQuery({ type: selectedTab, page: 1, size: 10 });

  const handleToggleTab = (tab: string) => {
    const format = tab as CinemaFormat;
    if (format === selectedTab) return;
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

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[375px] pb-32">
      {/* 상단 헤더 */}
      <Header leftSection="BACK" />
      {/* 진행도 바 */}
      <ProgressBar currentStep={3} totalSteps={3} />

      {/* 콘텐츠 영역 */}
      <div className="mt-6 px-6">
        <h1 className="text-title-2 mb-1 text-white">자주 가는 영화관을 선택해주세요</h1>
        <p className="text-caption-2 mb-6 text-red-300">최대 2개까지 선택할 수 있어요.</p>

        <ToggleTab
          options={[
            { label: 'IMAX', value: 'IMAX' },
            { label: 'Dolby Cinema', value: 'Dolby' },
          ]}
          selected={selectedTab}
          onSelect={handleToggleTab}
          className="mb-4 w-full"
        />

        <div className="h-3" />

        <TheaterList data={theaters ?? []} selected={selectedCinemas} onSelect={toggleTheater} />
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-8 left-1/2 w-full max-w-[375px] -translate-x-1/2 px-6">
        <Button
          onClick={handleNext}
          disabled={selectedCinemas.length === 0}
          variant="primary"
          color="red"
          size="lg"
          fontType="title-3"
          className="w-full"
        >
          선택완료
        </Button>
      </div>
    </div>
  );
};

export default OnboardingTheaterPage;
