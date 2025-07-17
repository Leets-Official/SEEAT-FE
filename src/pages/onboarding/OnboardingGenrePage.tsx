import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleTab from '@/components/common/ToggleTab/ToggleTab';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import type { GenreType } from '@/types/onboarding';

const genreOptions: GenreType[] = ['액션', '로맨스'];

const OnboardingGenrePage = () => {
  const navigate = useNavigate();
  const { setGenre } = useOnboardingStore();
  const [selectedGenre, setSelectedGenre] = useState<GenreType | ''>('');

  const handleNext = () => {
    if (!selectedGenre) {
      alert('하나 이상의 장르를 선택해주세요!');
      return;
    }

    setGenre([selectedGenre]);
    navigate('/signup/onboarding/theater');
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 px-6 py-8">
      <ToggleTab
        options={genreOptions}
        selected={selectedGenre}
        onSelect={(genre) => setSelectedGenre(genre as GenreType)} // optional
      />

      <button onClick={handleNext} className="w-full max-w-sm bg-white text-black hover:opacity-90">
        다음
      </button>
    </div>
  );
};

export default OnboardingGenrePage;
