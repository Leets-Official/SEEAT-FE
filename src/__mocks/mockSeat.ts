import type { Seat } from '../../src/types/seat';

export const mockSeats: Seat[] = [];

const rows = 'ABCDEFGHIJKLMNOP'.split('');
const columns = Array.from({ length: 23 }, (_, i) => i + 5); // 5~27

rows.forEach((row) => {
  columns.forEach((col) => {
    const hasReview = Math.random() < 0.3;
    const isWheelchair = row === 'A' && col >= 10 && col <= 13;

    const seat = {
      seatId: `13018${row}${col}`,
      row,
      column: col,
      hasReview,
      score: hasReview ? parseFloat((Math.random() * 5).toFixed(1)) : undefined,
      isWheelchair,
    };

    mockSeats.push(seat);
  });
});
