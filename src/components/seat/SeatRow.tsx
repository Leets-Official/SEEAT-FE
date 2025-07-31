import SeatItem from './SeatItem';
import type { Seat } from '@/types/seat';
import { getSeatLabel } from '@/utils/getSeatLabel';

interface SeatRowProps {
  rowSeats: (Seat | null)[];
  onSeatClick?: (seatId: string) => void;
  focusedSeatIds?: string[];
  focusedRef?: React.RefObject<HTMLDivElement>;
}

const SeatRow = ({ rowSeats, onSeatClick, focusedSeatIds = [], focusedRef }: SeatRowProps) => {
  console.log('focus ID: ', focusedSeatIds);
  return (
    <div className="flex gap-1">
      {rowSeats.map((seat, idx) =>
        seat ? (
          <SeatItem
            key={seat.seatId}
            seatId={seat.seatId}
            seatLabel={getSeatLabel(seat.row, seat.column)}
            hasReview={seat.hasReview}
            score={seat.score}
            isWheelchair={seat.isWheelchair}
            onClick={onSeatClick}
            row={seat.row}
            column={seat.column}
            isFocused={focusedSeatIds.includes(seat?.seatId ?? '')}
            ref={focusedSeatIds?.includes(seat.seatId) ? focusedRef : undefined}
          />
        ) : (
          <div key={idx} className="pointer-events-none invisible">
            <SeatItem
              seatId="blank"
              seatLabel=""
              hasReview={false}
              score={undefined}
              isWheelchair={false}
              row={''}
              column={0}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default SeatRow;
