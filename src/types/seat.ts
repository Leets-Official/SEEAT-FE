export type ReviewType = 'REVIEWED' | 'NO_REVIEW' | 'LOW_RATED' | 'HIGH_RATED';

export interface Seat {
  seatId: string;
  row: string;
  column: number;
}
export interface ReviewedSeat extends Seat {
  totalReviews?: number;
  averageRating?: number;
  isWheelchair?: boolean;
  type?: ReviewType;
}

export interface SeatItemProps extends ReviewedSeat {
  seatLabel: string;
  onClick?: (seatId: string) => void;
}
