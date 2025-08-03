import { useState } from 'react';
import { ToggleTab, Button, Header } from '@/components';
import { groupCinemasByTheater } from '@/utils/groupCinemasByTheater';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TheaterListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryTab = new URLSearchParams(location.search).get('tab');
  const defaultTab: 'IMAX' | 'Dolby Cinema' =
    queryTab?.toLowerCase() === 'dolby' ? 'Dolby Cinema' : 'IMAX';

  const [selectedTab, setSelectedTab] = useState<'IMAX' | 'Dolby Cinema'>(defaultTab);
  const [selectedCinema, setSelectedCinema] = useState<string | null>(null);
  const [selectedHall, setSelectedHall] = useState<string | null>(null);

  const cinemas = groupCinemasByTheater(selectedTab);

  return (
    <div className="flex min-h-screen flex-col pt-11">
      <Header leftSection="BACK" onBackClick={() => navigate('/home')}>
        영화관 리스트
      </Header>
      {/* 탭 */}
      <div className="flex justify-center px-5">
        <div className="w-[375px]">
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

      {/* 리스트 */}
      <div className="scrollbar-hidden max-h-[calc(100vh-136px)] overflow-y-auto pt-5">
        <div className="flex flex-col items-center gap-3">
          {Object.entries(cinemas).map(([theaterName, halls]) => {
            const isSelected = selectedCinema === theaterName;
            const isMulti = halls.length > 1;
            return (
              <div key={theaterName} className="w-full px-5">
                <Button
                  onClick={() => {
                    if (!isMulti) {
                      navigate(`/theaters/${halls[0].auditoriumId}`);
                    } else {
                      setSelectedCinema(theaterName);
                      setSelectedHall(null);
                    }
                  }}
                  variant="secondary-assistive"
                  color="gray"
                  size="lg"
                  fontType="title-3"
                  className="w-full justify-start rounded-lg text-left"
                  selected={isSelected}
                >
                  {theaterName}
                </Button>

                {isSelected && isMulti && (
                  <div className="mx-auto mt-2 ml-10 grid grid-cols-2 gap-2 px-1">
                    {halls.map((hall) => (
                      <Button
                        key={hall.auditoriumId}
                        onClick={() => {
                          navigate(`/theaters/${hall.auditoriumId}`);
                        }}
                        variant="secondary-assistive"
                        color="gray"
                        size="sm"
                        selected={selectedHall === hall.auditoriumId}
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
    </div>
  );
}
