import { useState } from 'react';
import { Button } from '@/components';
import type { Theater } from '@/types/theater';

interface Props {
  data: Theater[];
  selected: string[];
  onSelect: (theaterName: string) => void;
}

const TheaterList = ({ data, selected, onSelect }: Props) => {
  const [expandedTheater, setExpandedTheater] = useState<string | null>(null);

  // theaterName 기준으로 그룹화
  const grouped = data.reduce<Record<string, Theater[]>>((acc, cur) => {
    if (!acc[cur.theaterName]) acc[cur.theaterName] = [];
    acc[cur.theaterName].push(cur);
    return acc;
  }, {});

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
                {auditoriums.map((auditorium) => (
                  <Button
                    key={auditorium.auditoriumId}
                    onClick={() => onSelect(auditorium.theaterName)}
                    variant="secondary-assistive"
                    size="md"
                  >
                    {auditorium.auditoriumName}
                  </Button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TheaterList;
