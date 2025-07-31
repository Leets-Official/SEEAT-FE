import SeatFocusModal from './SeatFocusModal';
import SeatPickerModal from './SeatPickerModal';
import SeatWriteModal from './SeatWriteModal';

/*
 * seatFocus: 리뷰 상세 조회 > 좌석 정보 클릭 시
 * seatWrite: 후기 작성 > 좌석 선택 시
 * seatPicker: 영화관 상세 조회 > 좌석 후기 조회 시
 */

export type SeatModalType = 'seatFocus' | 'seatPicker' | 'seatWrite';

interface SeatModalProps {
  type: SeatModalType;
  auditoriumId: string;
  theaterName?: string;
  theaterType?: 'IMAX' | 'Dolby Cinema';
  selectedSeatId?: string; // seatFocus에서만 사용
}

const SeatModal = ({
  type,
  auditoriumId,
  theaterName,
  theaterType,
  selectedSeatId,
}: SeatModalProps) => {
  switch (type) {
    case 'seatFocus':
      return (
        <SeatFocusModal
          auditoriumId={auditoriumId}
          theaterName={theaterName ?? ''}
          selectedSeatId={selectedSeatId ?? ''}
        />
      );
    case 'seatPicker':
      return (
        <SeatPickerModal
          auditoriumId={auditoriumId}
          theaterType={theaterType ?? 'IMAX'}
          theaterName={theaterName ?? ''}
        />
      );
    case 'seatWrite':
      return <SeatWriteModal auditoriumId={auditoriumId} theaterName={theaterName ?? ''} />;
    default:
      return null;
  }
};

export default SeatModal;
