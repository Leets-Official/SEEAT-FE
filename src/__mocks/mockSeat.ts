import type { Seat } from '@/types/seat';

type SeatModalType = 'seatFocus' | 'seatPicker' | 'seatWrite';

const rows = 'ABCDEFGHIJKLMNOP'.split('');
const columns = Array.from({ length: 23 }, (_, i) => i + 5);

export const getMockSeats = (
  type: SeatModalType = 'seatPicker',
  focusedSeatIds: string[] = [],
): Seat[] => {
  const seats: Seat[] = [];

  rows.forEach((row) => {
    columns.forEach((col) => {
      const shouldExist = Math.random() < 0.7;
      if (!shouldExist) return;

      const seatId = `13018${row}${col}`;
      const isFocused = focusedSeatIds.includes(seatId);

      let hasReview = false;
      let averageRating: number | undefined = undefined;
      let isWheelchair = false;

      if (type === 'seatPicker') {
        hasReview = Math.random() < 0.3;
        averageRating = hasReview ? parseFloat((Math.random() * 5).toFixed(1)) : undefined;
        isWheelchair = row === 'A' && col >= 10 && col <= 13;
      }

      if (type === 'seatFocus') {
        hasReview = isFocused;
        averageRating = isFocused ? parseFloat((Math.random() * 5).toFixed(1)) : undefined;
      }

      seats.push({
        seatId,
        row,
        column: col,
        hasReview,
        averageRating,
        isWheelchair,
      });
    });
  });

  return seats;
};
