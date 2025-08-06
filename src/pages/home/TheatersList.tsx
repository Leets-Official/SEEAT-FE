import { useState } from 'react';
import { ToggleTab, Header, TheaterList } from '@/components';
import { useLocation, useNavigate } from 'react-router-dom';
import type { CinemaFormat } from '@/types/onboarding';
import { useTheatersQuery } from '@/hooks/queries/useTheatersQuery';

export default function TheaterListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryTab = new URLSearchParams(location.search).get('tab');
  const initialTab: CinemaFormat = queryTab === 'dolby' ? 'Dolby' : 'IMAX';

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>(initialTab);
  const [selectedAuditorium, setSelectedAuditorium] = useState<string | null>(null);

  const { data: theaters } = useTheatersQuery({ type: selectedTab, page: 1, size: 10 });

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab as CinemaFormat);
    setSelectedAuditorium(null);
  };

  return (
    <div className="flex min-h-screen flex-col pt-11">
      <Header leftSection="BACK" onBackClick={() => navigate('/home')} className="bg-gray-900">
        영화관 리스트
      </Header>
      {/* 탭 */}
      <div className="flex justify-center px-5 pt-5">
        <div className="w-[375px]">
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
      <div className="mt-5 px-5">
        {/* 리스트 */}

        <TheaterList
          data={theaters ?? []}
          selected={selectedAuditorium ? [selectedAuditorium] : []}
          onSelect={(id) => setSelectedAuditorium(id)}
          onAuditoriumClick={(auditoriumId) => {
            navigate(`/theaters/${auditoriumId}`);
          }}
        />
      </div>
    </div>
  );
}
