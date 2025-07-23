import { mockSeats } from '@/__mocks/mockSeat';
import SeatItem from '../seat/SeatItem';
import { getSeatLabel } from '@/utils/getSeatLabel';

const SeatExamples = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {mockSeats.map((seat) => (
        <SeatItem
          key={seat.seatId}
          seatId={seat.seatId}
          seatLabel={getSeatLabel(`${seat.row}`, `${seat.column}`)}
          hasReview={seat.hasReview}
          score={seat.score}
          isWheelchair={seat.isWheelchair}
          onClick={() => console.log(`Selected seat: ${seat.seatId}`)}
        />
      ))}
    </div>
  );
};
export default SeatExamples;
