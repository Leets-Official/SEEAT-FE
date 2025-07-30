import { useNavigate } from 'react-router-dom';
import { ToggleTab, Button, ReviewStepLayout } from '@/components';
import { useState, useEffect } from 'react';
import { useReviewStore } from '@/store';
import { groupCinemasByTheater } from '@/utils/groupCinemasByTheater';

export default function CinemaSelect() {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<'IMAX' | 'Dolby Cinema'>('IMAX');
  const [selectedCinema, setSelectedCinema] = useState<string | null>(null);
  const [selectedHall, setSelectedHall] = useState<string | null>(null);

  const cinemas = groupCinemasByTheater(selectedTab);

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
      disabled={!selectedCinema || (cinemas[selectedCinema]?.length > 1 && !selectedHall)}
      nextLabel="선택 완료"
    >
      {/* 탭 */}
      <div className="mb-4 flex justify-center pt-5">
        <div className="w-full">
          <ToggleTab
            options={[
              { label: 'IMAX', value: 'IMAX' },
              { label: 'Dolby Cinema', value: 'Dolby Cinema' },
            ]}
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
          {Object.entries(cinemas).map(([theaterName, halls]) => {
            const isThisSelected = selectedCinema === theaterName;
            const isMulti = Array.isArray(halls) && halls.length > 1;

            return (
              <div key={theaterName} className="w-full">
                <Button
                  onClick={() => {
                    setSelectedCinema(theaterName);
                    if (halls.length === 1) {
                      setSelectedHall(halls[0].auditoriumName);
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
                  {theaterName}
                </Button>

                {/* 상영관 선택 (2관 이상인 경우만 표시) */}
                {isThisSelected && isMulti && (
                  <div className="mx-auto mt-2 ml-10 grid grid-cols-2 gap-2 px-1">
                    {halls.map((hall) => (
                      <Button
                        key={hall.auditoriumId}
                        onClick={() => setSelectedHall(hall.auditoriumName)}
                        variant="secondary-assistive"
                        color="gray"
                        size="sm"
                        selected={selectedHall === hall.auditoriumName}
                        className="w-full"
                      >
                        {hall.auditoriumName}
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
