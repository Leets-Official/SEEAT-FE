import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBasic from '@/components/common/Header/HeaderBasic';
import Button from '@/components/common/Button';
import MoreVerticalIcon from '@/assets/icons/more_vertical.svg?react';

const GENRES = [
  '액션', '호러', '스릴러', '코미디',
  'SF', '로맨스', '판타지', '미스터리',
  '범죄', '모험', '전쟁', '역사',
  '뮤지컬', '애니메이션', '드라마',
];
const MAX_SELECTABLE_GENRES = 3;

export default function SelectGenre() {
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState<string[]>(['SF', '호러', '로맨스']);

  const handleGenreClick = (genre: string) => {
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
    <div className="flex h-screen flex-col bg-gray-900 p-4">
      <HeaderBasic onBackClick={() => navigate(-1)}>
        <div className="flex-1 flex justify-end">
          <button onClick={() => console.log('More button clicked')}>
            <MoreVerticalIcon className="w-6 h-6" />
          </button>
        </div>
      </HeaderBasic>

      <main className="flex-grow pt-4">
        <h2 className="text-title-2 text-white mb-2">좋아하는 장르를 선택해주세요</h2>
        
        <p className="text-caption-2 text-red-300 mb-6">최대 {MAX_SELECTABLE_GENRES}개까지 선택할 수 있어요.</p>
        
        <div className="w-[317px] h-[164px] flex flex-wrap content-start gap-2">
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