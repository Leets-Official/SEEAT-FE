import { useState } from 'react';
import { Button } from '@/components';
import type { Theater } from '@/types/theater';

interface Props {
  data: Theater[];
  selected: string[];
  onSelect: (auditoriumId: string) => void;
  onAuditoriumClick?: (auditoriumId: string) => void; // 클릭 prop 추가
  observerRef?: React.RefObject<HTMLDivElement>;
}

const TheaterList = ({ data, selected, onSelect, onAuditoriumClick, observerRef }: Props) => {
  const [expandedTheater, setExpandedTheater] = useState<string | null>(null);

  // theaterName 기준으로 그룹화
  const grouped = data.reduce<Record<string, Theater[]>>((acc, cur) => {
    if (!acc[cur.theaterName]) acc[cur.theaterName] = [];
    acc[cur.theaterName].push(cur);
    return acc;
  }, {});

  const isTheaterSelected = (theaterName: string): boolean => {
    const auditoriums = grouped[theaterName];
    return auditoriums.some((a) => selected.includes(a.auditoriumId));
  };

  const isAuditoriumSelected = (id: string) => selected.includes(id);

  return (
    <div className="max-h-[calc(100vh-320px)] overflow-y-auto">
      <div className="flex flex-col gap-3">
        {Object.entries(grouped).map(([theaterName, auditoriums]) => {
          const isExpanded = expandedTheater === theaterName;

          return (
            <div key={theaterName}>
              {/* 상위 영화관 버튼 */}
              <Button
                onClick={() => setExpandedTheater(isExpanded ? null : theaterName)}
                variant="secondary-assistive"
                selected={isTheaterSelected(theaterName)}
                className="w-full justify-start px-4 py-3"
              >
                {theaterName}
              </Button>

              {/* 하위 관 목록 */}
              {isExpanded && (
                <div className="mt-2 flex flex-wrap justify-end gap-2 px-1">
                  {auditoriums.map((auditorium) => {
                    const isSelected = isAuditoriumSelected(auditorium.auditoriumId);

                    return (
                      <Button
                        key={auditorium.auditoriumId}
                        onClick={() => {
                          if (onAuditoriumClick) {
                            onAuditoriumClick(auditorium.auditoriumId); // 페이지 이동
                          } else {
                            onSelect(auditorium.auditoriumId); // 선택만
                          }
                        }}
                        selected={isSelected}
                        variant="secondary-assistive"
                        size="md"
                      >
                        {auditorium.auditoriumName}
                      </Button>
                    );
                  })}
                  {/* <div ref={observerRef} className="h-1" /> */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheaterList;
