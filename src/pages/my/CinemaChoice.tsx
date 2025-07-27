import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBasic from '@/components/common/Header/HeaderBasic';
import Button from '@/components/common/Button';
import MoreVerticalIcon from '@/assets/icons/more_vertical.svg?react';

const SPECIAL_FORMATS = ['IMAX', 'Dolby Cinema'];
const THEATERS = [
  '남양주현대아울렛 스페이스원',
  '대구 신세계(동대구)',
  '대전신세계아트앤사이언스',
  '송도(트리플스트리트)',
  '수원AK플라자(수원역)',
  '안성스타필드',
  '코엑스',
  '하남스타필드',
];

const MAX_SELECTABLE_THEATERS = 2;

export default function CinemaChoice() {
  const navigate = useNavigate();
  const [selectedTheaters, setSelectedTheaters] = useState<string[]>(['남양주현대아울렛 스페이스원']);
  const [activeFormat, setActiveFormat] = useState<string | null>(null);

  const handleTheaterClick = (theater: string) => {
    setSelectedTheaters((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(theater);
      if (isAlreadySelected) {
        return prevSelected.filter((t) => t !== theater);
      }
      if (prevSelected.length < MAX_SELECTABLE_THEATERS) {
        return [...prevSelected, theater];
      }
      return prevSelected;
    });
  };

  const handleConfirmSelection = () => {
    console.log('선택된 영화관:', selectedTheaters);
    navigate(-1); 
  };

  return (
    <div className="flex h-screen flex-col bg-gray-900 p-4">
      <HeaderBasic onBackClick={() => navigate(-1)}>
        <div className="flex-1 flex justify-end">
          <button onClick={() => console.log('More button clicked')}>
            <MoreVerticalIcon className="w-6 w-6" />
          </button>
        </div>
      </HeaderBasic>

      <main className="flex-grow pt-4">
        <h2 className="text-title-2 text-white mb-2">자주 가는 영화관을 선택해주세요</h2>
        <p className="text-caption-2 text-red-300 mb-6">최대 {MAX_SELECTABLE_THEATERS}개까지 선택할 수 있어요.</p>

        {/* 특별관 선택 버튼 */}
        <div className="flex items-center gap-x-2 mb-4">
          {SPECIAL_FORMATS.map((format) => (
            <Button
              key={format}
              variant={activeFormat === format ? 'secondary' : 'secondary-assistive'}
              color={activeFormat === format ? 'red' : 'gray'}
              className="flex-1"
              onClick={() => setActiveFormat(activeFormat === format ? null : format)}
            >
              {format}
            </Button>
          ))}
        </div>

        {/* 영화관 목록 */}
        <div className="flex flex-col gap-y-3">
          {THEATERS.map((theater) => (
            <Button
              key={theater}
              variant="secondary-assistive"
              size="md"
              rounded="lg"
              className="w-full justify-start text-white"
              fontType="body-1"
              selected={selectedTheaters.includes(theater)}
              onClick={() => handleTheaterClick(theater)}
            >
              {theater}
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
          disabled={selectedTheaters.length === 0}
        >
          선택하기
        </Button>
      </footer>
    </div>
  );
}