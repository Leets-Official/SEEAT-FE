import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header, ToggleTab } from '@/components';
import type { CinemaFormat, CinemaType } from '@/types/onboarding';

const IMAX_THEATERS: CinemaType[] = ['CGV 용산', '메가박스 성수'];
const DOLBY_CINEMA_THEATERS: CinemaType[] = ['CGV 강남', '롯데시네마 홍대', '메가박스 코엑스'];

const THEATERS_BY_FORMAT: Record<CinemaFormat, CinemaType[]> = {
  IMAX: IMAX_THEATERS,
  Dolby: DOLBY_CINEMA_THEATERS,
};

const MAX_SELECTABLE_THEATERS = 2;

export default function CinemaChoice() {
  const navigate = useNavigate();
  const [selectedTheaters, setSelectedTheaters] = useState<CinemaType[]>([]);
  const [activeFormat, setActiveFormat] = useState<CinemaFormat>('Dolby');

  const handleTheaterClick = (theater: CinemaType) => {
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

  const handleFormatSelect = (format: string) => {
    setActiveFormat(format as CinemaFormat);
    setSelectedTheaters([]);
  };

  const currentTheaters = THEATERS_BY_FORMAT[activeFormat];

  return (
    <div className="flex h-screen flex-col bg-gray-900 p-4">
      <Header
        leftSection="BACK"
        rightSection="KEBAB"
        onKebabClick={() => console.log('케밥버튼 클릭')}
      />

      <main className="flex-grow pt-4">
        <h2 className="text-title-2 mb-2 text-white">자주 가는 영화관을 선택해주세요</h2>
        <p className="text-caption-2 mb-6 text-red-300">
          최대 {MAX_SELECTABLE_THEATERS}개까지 선택할 수 있어요.
        </p>

        <ToggleTab
          options={[
            { label: 'IMAX', value: 'IMAX' },
            { label: 'Dolby Cinema', value: 'Dolby' },
          ]}
          selected={activeFormat}
          onSelect={(selectedValue) => handleFormatSelect(selectedValue)}
        />

        {/* 영화관 목록 */}
        <div className="mt-4 flex flex-col gap-y-3">
          {currentTheaters.map((theater) => (
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
