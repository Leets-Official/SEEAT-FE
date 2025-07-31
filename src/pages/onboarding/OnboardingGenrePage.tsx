import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header } from '@/components';
import { genreOptions } from '@/types/onboarding';
import type { GenreType } from '@/types/onboarding';
import ProgressBar from '@/components/common/ProgressBar/ProgressBar';

const OnboardingGenrePage = () => {
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState<GenreType[]>([]);

  const toggleGenre = (genre: GenreType) => {
    const isSelected = selectedGenres.includes(genre);
    if (isSelected) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      if (selectedGenres.length >= 5) return;
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleNext = () => {
    if (selectedGenres.length === 0) return;
    navigate('/onboarding/theater');
  };

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[375px] bg-gray-900 pb-32 text-white">
      {/* 상단 헤더 */}
      <Header leftSection="BACK" />

      {/* 진행도 바 */}
      <ProgressBar currentStep={2} totalSteps={3} />

      {/* 콘텐츠 영역 */}
      <div className="mt-6 px-6">
        {/* 타이틀 */}
        <h1 className="text-title-2 mb-1 text-white">좋아하는 장르를 선택해주세요</h1>
        <p className="text-caption-2 mb-6 text-red-300">최대 5개까지 추가할 수 있어요.</p>

        {/* 장르 선택 버튼 */}
        <div className="mb-20 flex flex-wrap gap-3">
          {genreOptions.map((genre) => {
            const isSelected = selectedGenres.includes(genre);
            return (
              <Button
                key={genre}
                variant="secondary-assistive"
                selected={isSelected}
                onClick={() => toggleGenre(genre)}
                fontType="body-1"
                className="px-4 py-1"
              >
                {genre}
              </Button>
            );
          })}
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-8 left-1/2 w-full max-w-[375px] -translate-x-1/2 px-6">
        <Button
          onClick={handleNext}
          disabled={selectedGenres.length === 0}
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

export default OnboardingGenrePage;
