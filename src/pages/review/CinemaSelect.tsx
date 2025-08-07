import { useNavigate } from 'react-router-dom';
import { ToggleTab, ReviewStepLayout, TheaterList } from '@/components';
import { useState, useEffect } from 'react';
import { useReviewStore } from '@/store';
import { useTheatersQuery } from '@/hooks/queries/useTheatersQuery';
import type { CinemaFormat } from '@/types/onboarding';

export default function CinemaSelect() {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>('IMAX');
  const [selectedAuditorium, setSelectedAuditorium] = useState<string | null>(null);

  const { data: theaters } = useTheatersQuery({ type: selectedTab, page: 1, size: 10 });

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab as CinemaFormat);
    setSelectedAuditorium(null);
  };

  const handleNext = () => {
    const selected = theaters?.find((d) => d.auditoriumId === selectedAuditorium);
    if (!selected) return;

    navigate('/review/info', {
      state: {
        cinema: {
          id: selected.auditoriumId,
          name: selected.theaterName,
          hall: selected.auditoriumName,
        },
      },
    });
  };

  return (
    <ReviewStepLayout onClickNext={handleNext} disabled={!selectedAuditorium} nextLabel="선택 완료">
      {/* 탭 */}
      <div className="mb-4 flex justify-center pt-5">
        <div className="w-full">
          <ToggleTab
            options={[
              { label: 'IMAX', value: 'IMAX' },
              { label: 'Dolby Cinema', value: 'Dolby' },
            ]}
            selected={selectedTab}
            onSelect={handleTabChange}
          />
        </div>
      </div>

      {/* 영화관 목록 */}
      <TheaterList
        data={theaters ?? []}
        selected={selectedAuditorium ? [selectedAuditorium] : []}
        onSelect={(id) => setSelectedAuditorium(id)}
      />
    </ReviewStepLayout>
  );
}
