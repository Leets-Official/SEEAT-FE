import SeatRow from './SeatRow';
import type { SeatRatingInfo } from '@/api/theater/theater.api';
import type { Seat } from '@/types/seat';
import { useRef } from 'react';

interface SeatMapProps {
  auditoriumId?: string;
  onSeatClick?: (seatId: string) => void;
  focusedSeatIds?: string[]; // seatFocus용
  selectedSeatNames?: string[]; // seatWrite 용
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

  // 전체 column 범위 계산
  const allColumns = seatData.map((s) => s.column);
  const minColumn = Math.min(...allColumns);
  const maxColumn = Math.max(...allColumns);

  // row별로 seat 분류
  seatData.forEach((seat) => {
    if (!seatRows[seat.row]) seatRows[seat.row] = [];
    seatRows[seat.row].push(seat);
  });

  return (
    <div className="flex flex-col gap-1">
      {Object.entries(seatRows)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([row, seats]) => {
          seats.sort((a, b) => a.column - b.column);

          // 전체 column 범위 기준으로 null 포함 filledRow 생성
          const filledRow: (Seat | null)[] = Array(maxColumn - minColumn + 1).fill(null);
          seats.forEach((seat) => {
            const index = seat.column - minColumn;
            filledRow[index] = seat;
          });

          return (
            <SeatRow
              key={row}
              rowSeats={filledRow}
              onSeatClick={onSeatClick}
              focusedSeatIds={focusedSeatIds}
              selectedSeatNames={selectedSeatNames}
              focusedRef={focusedRef}
              type={type}
            />
          );
        })}
    </div>
  );
};

export default SeatMap;
