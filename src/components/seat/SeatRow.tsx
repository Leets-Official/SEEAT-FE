import SeatItem from './SeatItem';
import type { ReviewedSeat } from '@/types/seat';
import { getSeatLabel } from '@/utils/getSeatLabel';

interface SeatRowProps {
  rowSeats: ReviewedSeat[];
  onSeatClick?: (seatId: string) => void;
  focusedSeatIds?: string[];
  selectedSeatNames?: string[];
  focusedRef?: React.RefObject<HTMLDivElement>;
  type?: 'seatFocus' | 'seatPicker' | 'seatWrite';
  minColumn: number;
  maxColumn: number;
}

const SeatRow = ({
  rowSeats,
  onSeatClick,
  focusedSeatIds = [],
  selectedSeatNames = [],
  focusedRef,
  type = 'seatPicker',
  minColumn,
  maxColumn,
}: SeatRowProps) => {
  const filledRow: (ReviewedSeat | null)[] = Array(maxColumn - minColumn + 1).fill(null);

  rowSeats.forEach((seat) => {
    const index = seat.column - minColumn;
    filledRow[index] = seat;
  });

  return (
    <div className="flex gap-1">
      {filledRow.map((seat, idx) =>
        seat ? (
          <SeatItem
            key={seat.seatId}
            seatId={seat.seatId}
            mode={type}
            seatLabel={getSeatLabel(seat.row, seat.column)}
            isWheelchair={seat.isWheelchair}
            onClick={onSeatClick}
            type={seat.type}
            row={seat.row}
            column={seat.column}
            isFocused={type === 'seatFocus' && focusedSeatIds.includes(seat.seatId)}
            isSelected={type === 'seatWrite' && selectedSeatNames.includes(seat.seatId)}
            ref={
              type === 'seatFocus' && focusedSeatIds.includes(seat.seatId) ? focusedRef : undefined
            }
          />
        ) : (
          <div key={idx} className="pointer-events-none invisible">
            <SeatItem seatId="blank" seatLabel="" isWheelchair={false} row={''} column={0} />
          </div>
        ),
      )}
    </div>
  );
};

export default SeatRow;
