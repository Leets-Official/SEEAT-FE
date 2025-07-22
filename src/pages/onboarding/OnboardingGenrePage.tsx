import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/common/Header/Header';
import Button from '@/components/common/Button';
import type { GenreType } from '@/types/onboarding';

const genreOptions = [
  '액션', '호러', '스릴러', '코미디',
  'SF', '로맨스', '판타지', '미스터리',
  '범죄', '모험', '전쟁', '역사',
  '뮤지컬', '애니메이션', '드라마',
] as GenreType[];

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

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (selectedGenres.length === 0) return;
    navigate('/onboarding/theater');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full max-w-[375px] mx-auto relative pb-32">
      {/* 상단 헤더 */}
      <Header title="" onBackClick={handleBack} />

      {/* 진행도 바 */}
      <div className="mt-6 mb-2">
        <div className="h-2 w-full bg-gray-800 relative">
          <div className="absolute left-0 top-0 h-full bg-red-400" style={{ width: '66.66%' }} />
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="px-6 mt-6">
        {/* 진행도 */}
        <div className="text-title-1 text-white mb-3">2/3</div>

        {/* 타이틀 */}
        <h1 className="text-title-2 text-white mb-1">좋아하는 장르를 선택해주세요</h1>
        <p className="text-caption-2 text-red-300 mb-6">최대 5개까지 추가할 수 있어요.</p>

        {/* 장르 선택 버튼 */}
        <div className="flex flex-wrap gap-3 mb-20">
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
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[375px] px-6">
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
