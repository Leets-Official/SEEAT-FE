import SeatRow from './SeatRow';
import { getMockSeats } from '@/__mocks/mockSeat';
import type { Seat } from '@/types/seat';
import { useRef } from 'react';

interface SeatMapProps {
  auditoriumId?: string;
  onSeatClick?: (seatId: string) => void;
  focusedSeatIds?: string[]; // seatFocus용
  selectedSeatNames?: string[]; // seatWrite 용
  isMock?: boolean; // 목데이터용
  type?: 'seatFocus' | 'seatPicker' | 'seatWrite';
}

const SeatMap = ({
  onSeatClick,
  focusedSeatIds = [],
  selectedSeatNames = [],
  type = 'seatPicker',
}: SeatMapProps) => {
  const seatRows: Record<string, Seat[]> = {};
  const focusedRef = useRef<HTMLDivElement>(null!);

  const mockSeats = getMockSeats(type, focusedSeatIds);
  // row별로 묶기
  mockSeats.forEach((seat) => {
    if (!seatRows[seat.row]) seatRows[seat.row] = [];
    seatRows[seat.row].push(seat);
  });

  return (
    <div className="flex flex-col gap-1">
      {Object.entries(seatRows)
        .sort(([a], [b]) => a.localeCompare(b)) // row 정렬: A, B, C...
        .map(([row, seats]) => {
          // column 정렬
          seats.sort((a, b) => a.column - b.column);

          const min = seats[0].column;
          const max = seats[seats.length - 1].column;

          const filledRow: (Seat | null)[] = Array(max - min + 1).fill(null);

          seats.forEach((seat) => {
            const index = seat.column - min;
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
