import { useNavigate } from 'react-router-dom';
import { ToggleTab, Button, ReviewStepLayout } from '@/components';
import { useState, useEffect } from 'react';
import { useReviewStore } from '@/store';
import { cinemaData } from '@/constants';

export default function CinemaSelect() {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  const [selectedTab, setSelectedTab] = useState<'IMAX' | 'Dolby Cinema'>('IMAX');
  const [selectedCinema, setSelectedCinema] = useState('');
  const cinemas = cinemaData[selectedTab];

  const handleNext = () => {
    navigate('/review/info', { state: { cinema: selectedCinema } });
  };

  return (
    <ReviewStepLayout
      onClickNext={handleNext}
      onClickBack={() => navigate('/review/info')}
      disabled={!selectedCinema}
      nextLabel="선택 완료"
    >
      {/* 탭 */}
      <div className="mb-4 flex justify-center">
        <div className="w-[335px]">
          <ToggleTab
            options={['IMAX', 'Dolby Cinema']}
            selected={selectedTab}
            onSelect={(option) => setSelectedTab(option as 'IMAX' | 'Dolby Cinema')}
          />
        </div>
      </div>

      {/* 영화관 목록 */}
      <div className="scrollbar-hidden max-h-[calc(100vh-44px-56px-160px)] overflow-y-auto">
        <div className="flex flex-col items-center gap-3 pb-[160px]">
          {cinemas.map((cinema) => (
            <div key={cinema} className="w-full max-w-[335px]">
              <Button
                onClick={() => setSelectedCinema(cinema)}
                variant="secondary-assistive"
                color="gray"
                size="lg"
                fontType="title-3"
                className="w-full justify-start rounded-lg text-left"
                selected={selectedCinema === cinema}
              >
                {cinema}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ReviewStepLayout>
  );
}
