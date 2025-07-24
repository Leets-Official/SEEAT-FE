import { useState } from 'react';
import { ToggleTab, Button, Header } from '@/components';
import { cinemaData } from '@/constants';
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

  const cinemas = cinemaData[selectedTab];

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 pt-11">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <Header
          title="영화관 리스트"
          showBack
          onBackClick={() => navigate('/home')}
          showLike={false}
          showBookmark={false}
        />
      </div>
      {/* 탭 */}
      <div className="flex justify-center px-5 pt-5">
        <div className="w-[375px]">
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

      {/* 리스트 */}
      <div className="scrollbar-hidden max-h-[calc(100vh-136px)] overflow-y-auto pt-5">
        <div className="flex flex-col items-center gap-3">
          {cinemas.map(({ name, halls }) => {
            const isSelected = selectedCinema === name;
            const isMulti = Array.isArray(halls) && halls.length > 1;

            return (
              <div key={name} className="w-full px-5">
                <Button
                  onClick={() => {
                    setSelectedCinema(name);
                    if (!Array.isArray(halls) || halls.length === 0) {
                      // (받아온 데이터에서)관이 없는 경우
                      navigate(`/theaters/${selectedTab}/${encodeURIComponent(name)}`);
                    } else if (halls.length === 1) {
                      // 관이 1개인 경우
                      navigate(`/theaters/${selectedTab}/${encodeURIComponent(name)}`);
                    } else {
                      // 관이 2개 이상인 경우
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
                  {name}
                </Button>

                {isSelected && isMulti && (
                  <div className="mx-auto mt-2 ml-10 grid grid-cols-2 gap-2 px-1">
                    {halls.map((hall) => (
                      <Button
                        onClick={() => {
                          navigate(
                            `/theaters/${selectedTab}/${encodeURIComponent(`${name} (${hall})`)}`,
                          );
                        }}
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
    </div>
  );
}
