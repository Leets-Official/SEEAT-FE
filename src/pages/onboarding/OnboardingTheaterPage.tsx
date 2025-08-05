import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Button, ToggleTab, Header, ProgressBar, TheaterList } from '@/components';
import type { CinemaFormat } from '@/types/onboarding';
import { useTheatersQuery } from '@/hooks/queries/useTheatersQuery';
import { useRegisterMutation } from '@/hooks/mutations/useRegisterMutation';

const OnboardingTheaterPage = () => {
  const navigate = useNavigate();
  const { nickname, selectedGenres, selectedCinemas, setSelectedCinemas, setCinemaFormat } =
    useOnboardingStore();

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>('IMAX');

  const { data: theaters } = useTheatersQuery({ type: selectedTab, page: 1, size: 10 });
  const { mutate } = useRegisterMutation();

  const handleToggleTab = (tab: string) => {
    const format = tab as CinemaFormat;
    if (format === selectedTab) return;
    setSelectedTab(format);
    setCinemaFormat(format);
  };

  const toggleTheater = (auditoriumId: string) => {
    const isSelected = selectedCinemas.includes(auditoriumId);
    if (isSelected) {
      setSelectedCinemas(selectedCinemas.filter((id) => id !== auditoriumId));
    } else {
      if (selectedCinemas.length >= 2) return;
      setSelectedCinemas([...selectedCinemas, auditoriumId]);
    }
  };

  const handleNext = () => {
    if (selectedCinemas.length === 0) return;

    const tempUserKey = localStorage.getItem('tempKey');
    console.log('데이터: ', nickname, selectedGenres, selectedCinemas);
    if (!tempUserKey) {
      console.error('임시 유저 키가 없습니다.');
      return;
    }

    mutate(
      {
        data: {
          nickname,
          genres: selectedGenres,
          auditoriumId: selectedCinemas,
        },
        tempUserKey,
      },
      {
        onSuccess: () => {
          navigate('/signup/complete');
        },
        onError: (error: any) => {
          console.error('회원가입 실패', error);
        },
      },
    );
  };

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[375px] pb-32">
      {/* 상단 헤더 */}
      <Header leftSection="BACK" />
      {/* 진행도 바 */}
      <ProgressBar currentStep={3} totalSteps={3} />

      {/* 콘텐츠 영역 */}
      <div className="mt-6 px-6">
        <h1 className="text-title-2 mb-1">자주 가는 영화관을 선택해주세요</h1>
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
