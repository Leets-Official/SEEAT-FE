import SeatRow from './SeatRow';
import type { SeatRatingInfo } from '@/api/theater/theater.api';
import type { Seat } from '@/types/seat';
import { getSeatLayout } from '@/api/theater/theater.api';
import { useEffect, useRef, useState } from 'react';
import type { ApiError } from '@/types/api-response';

interface SeatMapProps {
  auditoriumId?: string;
  onSeatClick?: (seatId: string) => void;
  focusedSeatIds?: string[]; // seatFocus용
  selectedSeatNames?: string[]; // seatWrite 용
  seatData?: SeatRatingInfo[];
  type?: 'seatFocus' | 'seatPicker' | 'seatWrite';
}

const SeatMap = ({
  auditoriumId,
  onSeatClick,
  focusedSeatIds = [],
  selectedSeatNames = [],
  type = 'seatPicker',
  seatData = [],
}: SeatMapProps) => {
  const [autoSeatData, setAutoSeatData] = useState<Seat[]>([]);
  const focusedRef = useRef<HTMLDivElement>(null!);

  // row별로 묶기
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

  const dataToRender = type === 'seatFocus' ? autoSeatData : seatData;

  const seatRows: Record<string, Seat[]> = {};
  dataToRender.forEach((seat) => {
    if (!seatRows[seat.row]) seatRows[seat.row] = [];
    seatRows[seat.row].push(seat);
  });

  return (
    <div className="flex flex-col gap-1">
      {Object.entries(seatRows)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([row, seats]) => {
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
