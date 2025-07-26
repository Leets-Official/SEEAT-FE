import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Button, ToggleTab, Header } from '@/components';
import type { CinemaType, CinemaFormat } from '@/types/onboarding';

const theaterData: Record<CinemaFormat, CinemaType[]> = {
  IMAX: [],
  Dolby: [
    '남양주현대아울렛 스페이스원',
    '대구 신세계(동대구)',
    '대전신세계아트앤사이언스',
    '송도(트리플스트리트)',
    '수원AK플라자(수원역)',
    '안성스타필드',
    '코엑스',
  ],
};

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
      {/* 헤더 */}
      <Header title="" onBackClick={handleBack} showLike={false} showBookmark={false} />

      {/* 진행도 바 */}
      <div className="mt-6 mb-2">
        <div className="h-2 w-full bg-gray-800 relative">
          <div className="absolute left-0 top-0 h-full bg-red-400" style={{ width: '100%' }} />
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="px-6 mt-6">
        {/* 진행도 */}
        <div className="text-title-1 text-white mb-3">3/3</div>

        {/* 타이틀 & 설명 */}
        <h1 className="text-title-2 text-white mb-1">자주 가는 영화관을 선택해주세요</h1>
        <p className="text-caption-2 text-red-300 mb-6">최대 2개까지 선택할 수 있어요.</p>

        {/* 토글 탭 */}
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

        {/* 극장 리스트 */}
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
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingTheaterPage;
