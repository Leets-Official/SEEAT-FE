import { useState } from 'react';
import { Button } from '@/components';
import type { Theater } from '@/types/theater';

interface Props {
  data: Theater[];
  selected: string[];
  onSelect: (auditoriumId: string) => void;
  onAuditoriumClick?: (auditoriumId: string) => void;
  observerRef?: React.RefObject<HTMLDivElement>;
}

const TheaterList = ({ data, selected, onSelect, onAuditoriumClick }: Props) => {
  const [expandedTheater, setExpandedTheater] = useState<string | null>(null);

  // 그룹화: theaterName 기준
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
                  {(() => {
                    // auditoriumId 기준 중복 제거
                    const uniqueAuditoriums = Array.from(
                      new Map(auditoriums.map((a) => [a.auditoriumId, a])).values(),
                    );

                    return uniqueAuditoriums.map((auditorium) => {
                      const isSelected = isAuditoriumSelected(auditorium.auditoriumId);

                      return (
                        <Button
                          key={auditorium.auditoriumId}
                          onClick={() => {
                            if (onAuditoriumClick) {
                              onAuditoriumClick(auditorium.auditoriumId);
                            } else {
                              onSelect(auditorium.auditoriumId);
                            }
                          }}
                          selected={isSelected}
                          variant="secondary-assistive"
                          size="md"
                          className="min-w-2xs"
                        >
                          {auditorium.auditoriumName}
                        </Button>
                      );
                    });
                  })()}
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
