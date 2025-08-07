import SeatRow from './SeatRow';
import { useEffect, useRef, useState } from 'react';
import type { Seat } from '@/types/seat';
import type { SeatRatingInfo } from '@/api/theater/theater.api';
import { getSeatLayout } from '@/api/theater/theater.api';
import type { ApiError } from '@/types/api-response';

interface SeatMapProps {
  auditoriumId?: string;
  onSeatClick?: (seatId: string) => void;
  focusedSeatIds?: string[];
  selectedSeatNames?: string[];
  seatData?: SeatRatingInfo[];
  type?: 'seatFocus' | 'seatPicker' | 'seatWrite';
}

const SeatMap = ({
  auditoriumId,
  onSeatClick,
  focusedSeatIds = [],
  selectedSeatNames = [],
  seatData = [],
  type = 'seatPicker',
}: SeatMapProps) => {
  const [autoSeatData, setAutoSeatData] = useState<Seat[]>([]);
  const focusedRef = useRef<HTMLDivElement>(null);

  //  seatFocus 모드일 때만 서버에서 좌석 배치도 불러오기
  useEffect(() => {
    const fetch = async () => {
      if (type === 'seatFocus' && auditoriumId) {
        try {
          const data = await getSeatLayout(auditoriumId);
          const parsedData: Seat[] = data.map((seat) => ({
            ...seat,
            column: Number(seat.column),
          }));
          setAutoSeatData(parsedData);
        } catch (error) {
          const apiError = error as ApiError;
          console.error('좌석 정보 로딩 실패', apiError.error, apiError.message);
        }
      }
    };
    fetch();
  }, [type, auditoriumId]);

  // 사용할 seatData 결정
  const dataToRender = type === 'seatFocus' ? autoSeatData : seatData;

  //  row별로 그룹핑 + 전체 column 범위 추출
  const seatRows: Record<string, Seat[]> = {};
  const allColumns = new Set<number>();

  dataToRender.forEach((seat) => {
    if (!seatRows[seat.row]) seatRows[seat.row] = [];
    seatRows[seat.row].push(seat);
    allColumns.add(seat.column);
  });

  const minColumn = Math.min(...Array.from(allColumns));
  const maxColumn = Math.max(...Array.from(allColumns));

  return (
    <div className="flex flex-col gap-1">
      {Object.entries(seatRows)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([row, seats]) => (
          <SeatRow
            key={row}
            rowSeats={seats}
            onSeatClick={onSeatClick}
            focusedSeatIds={focusedSeatIds}
            selectedSeatNames={selectedSeatNames}
            focusedRef={focusedRef as React.RefObject<HTMLDivElement>}
            type={type}
            minColumn={minColumn}
            maxColumn={maxColumn}
          />
        ))}
    </div>
  );
};

export default SeatMap;
