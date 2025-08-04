import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Button } from '@/components';
import type { GenreType } from '@/types/onboarding';

const GENRES: GenreType[] = ['액션', '로맨스', 'SF', '호러', '코미디', '다큐', '애니메이션'];
const MAX_SELECTABLE_GENRES = 3;

export default function SelectGenre() {
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState<GenreType[]>(['SF', '호러', '로맨스']);

  const handleGenreClick = (genre: GenreType) => {
    setSelectedGenres((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(genre);
      if (isAlreadySelected) {
        return prevSelected.filter((g) => g !== genre);
      }
      if (prevSelected.length < MAX_SELECTABLE_GENRES) {
        return [...prevSelected, genre];
      }
      return prevSelected;
    });
  };

  const handleConfirmSelection = () => {
    console.log('선택된 장르:', selectedGenres);
    navigate(-1);
  };

  return (
    <div className="flex h-screen flex-col p-4">
      <Header leftSection="BACK" rightSection="KEBAB" className="bg-gray-900" />

      <main className="flex-grow pt-4">
        <h2 className="text-title-2 mb-2 text-white">좋아하는 장르를 선택해주세요</h2>

        <p className="text-caption-2 mb-6 text-red-300">
          최대 {MAX_SELECTABLE_GENRES}개까지 선택할 수 있어요.
        </p>

        <div className="flex h-[164px] w-[317px] flex-wrap content-start gap-2">
          {GENRES.map((genre) => (
            <Button
              key={genre}
              variant="secondary-assistive"
              size="sm"
              rounded="lg"
              fontType="body-1"
              selected={selectedGenres.includes(genre)}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </Button>
          ))}
        </div>
      </main>

      <footer className="py-4">
        <Button
          onClick={handleConfirmSelection}
          variant="primary"
          color="red"
          size="lg"
          rounded="lg"
          className="w-full"
          fontType="title-3"
          disabled={selectedGenres.length === 0}
        >
          선택하기
        </Button>
      </footer>
    </div>
  );
}
