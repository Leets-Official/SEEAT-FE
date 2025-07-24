import SeatRow from './SeatRow';
import { mockSeats } from '@/__mocks/mockSeat';
import type { Seat } from '@/types/seat';

interface SeatMapProps {
  auditoriumId?: string;
  onSeatClick?: (seatId: string) => void;
  isMock?: boolean;
}

const SeatMap = ({ onSeatClick }: SeatMapProps) => {
  const seatRows: Record<string, Seat[]> = {};

  // row별로 묶기
  mockSeats.forEach((seat) => {
    if (!seatRows[seat.row]) seatRows[seat.row] = [];
    seatRows[seat.row].push(seat);
  });

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(seatRows)
        .sort(([a], [b]) => a.localeCompare(b)) // row 정렬: A, B, C...
        .map(([row, seats]) => {
          // column 정렬
          seats.sort((a, b) => a.column - b.column);

          const min = seats[0].column;
          const max = seats[seats.length - 1].column;

          // 공백 포함해서 채우기
          const filledRow: (Seat | null)[] = Array(max - min + 1).fill(null);
          seats.forEach((seat) => {
            const index = seat.column - min;
            filledRow[index] = seat;
          });

          return <SeatRow key={row} rowSeats={filledRow} onSeatClick={onSeatClick} />;
        })}
    </div>
  );
};

export default SeatMap;
