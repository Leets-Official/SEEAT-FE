import { useState } from 'react';
import { Button } from '@/components';
import type { Theater } from '@/types/theater';

interface Props {
  data: Theater[];
  selected: string[];
  onSelect: (auditoriumId: string) => void;
  onAuditoriumClick?: (auditoriumId: string) => void; // 클릭 prop 추가
}

const TheaterList = ({ data, selected, onSelect, onAuditoriumClick }: Props) => {
  const [expandedTheater, setExpandedTheater] = useState<string | null>(null);

  // theaterName 기준으로 그룹화
  const grouped = data.reduce<Record<string, Theater[]>>((acc, cur) => {
    if (!acc[cur.theaterName]) acc[cur.theaterName] = [];
    acc[cur.theaterName].push(cur);
    return acc;
  }, {});

  const isAuditoriumSelected = (id: string) => selected.includes(id);

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(grouped).map(([theaterName, auditoriums]) => {
        const isSelected = selected.includes(theaterName);

        const isExpanded = expandedTheater === theaterName;

        return (
          <div key={theaterName}>
            {/* 상위 영화관 버튼 */}
            <Button
              onClick={() => setExpandedTheater(isExpanded ? null : theaterName)}
              variant="secondary-assistive"
              selected={isSelected}
              className="w-full justify-items-start px-4 py-3"
            >
              {theaterName}
            </Button>

            {/* 하위 관 목록 */}
            {isExpanded && (
              <div className="mt-2 flex flex-wrap gap-2 px-1">
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
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TheaterList;
