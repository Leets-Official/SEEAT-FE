import SeatItem from './SeatItem';
import { mockSeats } from '@/__mocks/mockSeat';
import type { Seat } from '@/types/seat';

interface SeatMapProps {
  auditoriumId?: string;
  onSeatClick?: (seatId: string) => void;
  isMock?: boolean;
}

const SeatMap = ({ onSeatClick }: SeatMapProps) => {
  const seatRows: Record<string, Seat[]> = {};

  mockSeats.forEach((seat) => {
    if (!seatRows[seat.row]) seatRows[seat.row] = [];
    seatRows[seat.row].push(seat);
  });

  Object.values(seatRows).forEach((rowSeats) => rowSeats.sort((a, b) => a.column - b.column));

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(seatRows).map(([row, seats]) => (
        <div key={row} className="flex gap-1">
          {seats.map((seat) => (
            <SeatItem
              key={seat.seatId}
              seatId={seat.seatId}
              seatLabel={`${seat.row}${seat.column}`}
              hasReview={seat.hasReview}
              score={seat.score}
              isWheelchair={seat.isWheelchair}
              onClick={onSeatClick}
              row={''}
              column={0}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;
