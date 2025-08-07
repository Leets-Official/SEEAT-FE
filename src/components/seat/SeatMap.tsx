import SeatRow from './SeatRow';
import type { SeatRatingInfo } from '@/api/theater/theater.api';
import type { Seat } from '@/types/seat';
import { useRef } from 'react';

interface SeatMapProps {
  auditoriumId?: string;
  onSeatClick?: (seatId: string) => void;
  focusedSeatIds?: string[]; // seatFocus용
  selectedSeatNames?: string[]; // seatWrite용
  seatData?: SeatRatingInfo[];
  type?: 'seatFocus' | 'seatPicker' | 'seatWrite';
}

const SeatMap = ({
  onSeatClick,
  focusedSeatIds = [],
  selectedSeatNames = [],
  type = 'seatPicker',
  seatData = [],
}: SeatMapProps) => {
  const seatRows: Record<string, Seat[]> = {};
  const focusedRef = useRef<HTMLDivElement>(null!);
  const allColumns = new Set<number>();

  // row별로 묶기 + 전체 column 수 수집
  seatData.forEach((seat) => {
    if (!seatRows[seat.row]) seatRows[seat.row] = [];
    seatRows[seat.row].push(seat);
    allColumns.add(seat.column);
  });

  const minColumn = Math.min(...Array.from(allColumns));
  const maxColumn = Math.max(...Array.from(allColumns));

  return (
    <div className="flex flex-col gap-1">
      {Object.entries(seatRows)
        .sort(([a], [b]) => a.localeCompare(b)) // row 정렬
        .map(([row, seats]) => {
          return (
            <SeatRow
              key={row}
              rowSeats={seats}
              onSeatClick={onSeatClick}
              focusedSeatIds={focusedSeatIds}
              selectedSeatNames={selectedSeatNames}
              focusedRef={focusedRef}
              type={type}
              minColumn={minColumn}
              maxColumn={maxColumn}
            />
          );
        })}
    </div>
  );
};

export default SeatMap;
