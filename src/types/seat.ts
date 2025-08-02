export interface Seat {
  seatId: string;
  row: string;
  column: number;
  hasReview: boolean;
  score?: number;
  isWheelchair: boolean;
}

export interface SeatItemProps extends Seat {
  seatLabel: string;
  onClick?: (seatId: string) => void;
  isFocused?: boolean;
}
