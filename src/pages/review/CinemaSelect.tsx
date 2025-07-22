import { useNavigate } from 'react-router-dom';
import { ToggleTab, Button, ReviewStepLayout } from '@/components';
import { useState, useEffect } from 'react';
import { useReviewStore } from '@/store';
import { cinemaData } from '@/constants';

export default function CinemaSelect() {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<'IMAX' | 'Dolby Cinema'>('IMAX');
  const [selectedCinema, setSelectedCinema] = useState<string | null>(null);
  const [selectedHall, setSelectedHall] = useState<string | null>(null);

  const cinemas = cinemaData[selectedTab];
  const selectedCinemaData = cinemas.find((c) => c.name === selectedCinema);
  const hasMultipleHalls =
    selectedCinemaData &&
    Array.isArray(selectedCinemaData.halls) &&
    selectedCinemaData.halls.length > 1;

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  const handleNext = () => {
    navigate('/review/info', { state: { cinema: { name: selectedCinema, hall: selectedHall } } });
  };

  return (
    <ReviewStepLayout
      onClickNext={handleNext}
      onClickBack={() => navigate('/review/info')}
      disabled={!selectedCinema || (hasMultipleHalls && !selectedHall)}
      nextLabel="선택 완료"
    >
      {/* 탭 */}
      <div className="mb-4 flex justify-center pt-5">
        <div className="w-full">
          <ToggleTab
            options={['IMAX', 'Dolby Cinema']}
            selected={selectedTab}
            onSelect={(option) => {
              setSelectedTab(option as 'IMAX' | 'Dolby Cinema');
              setSelectedCinema(null);
              setSelectedHall(null);
            }}
          />
        </div>
      </div>

      {/* 영화관 목록 */}
      <div className="scrollbar-hidden max-h-[calc(100vh-236px)] overflow-y-auto pt-5">
        <div className="flex flex-col items-center gap-3 pb-[160px]">
          {cinemas.map(({ name, halls }) => {
            const isThisSelected = selectedCinema === name;
            const isMulti = Array.isArray(halls) && halls.length > 1;

            return (
              <div key={name} className="w-full">
                <Button
                  onClick={() => {
                    setSelectedCinema(name);
                    if (Array.isArray(halls) && halls.length === 1) {
                      setSelectedHall(halls[0]);
                    } else {
                      setSelectedHall(null); // 상영관 수동 선택 요구
                    }
                  }}
                  variant="secondary-assistive"
                  color="gray"
                  size="lg"
                  fontType="title-3"
                  className="w-full justify-start rounded-lg text-left"
                  selected={isThisSelected}
                >
                  {name}
                </Button>

                {/* 상영관 선택 (2관 이상인 경우만 표시) */}
                {isThisSelected && isMulti && (
                  <div className="mx-auto mt-2 ml-10 grid grid-cols-2 gap-2 px-1">
                    {halls.map((hall) => (
                      <Button
                        key={hall}
                        onClick={() => setSelectedHall(hall)}
                        variant="secondary-assistive"
                        color="gray"
                        size="sm"
                        selected={selectedHall === hall}
                        className="w-full"
                      >
                        {hall}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </ReviewStepLayout>
  );
}
