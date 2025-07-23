export interface Seat {
  seatId: string;
  row: string;
  column: number;
  hasReview: boolean;
  score?: number;
  isWheelchair: boolean;
}
