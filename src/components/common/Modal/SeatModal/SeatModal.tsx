import type { CinemaFormat } from '@/types/onboarding';
import SeatFocusModal from './SeatFocusModal';
import SeatPickerModal from './SeatPickerModal';
import SeatWriteModal from './SeatWriteModal';
import { useModalStore } from '@/store';

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
  focusedSeatIds: string[];
  theaterType?: CinemaFormat; // IMAX / DOLBY
  selectedSeatNumbers?: string[]; // seatFocus에서만 사용
}

const SeatModal = ({
  type,
  auditoriumId,
  theaterName,
  selectedSeatNumbers,
  focusedSeatIds,
}: SeatModalProps) => {
  switch (type) {
    case 'seatFocus':
      return (
        <SeatFocusModal
          onClose={() => useModalStore.getState().closeModal()}
          auditoriumId={auditoriumId}
          theaterName={theaterName ?? ''}
          selectedSeatNumbers={selectedSeatNumbers ?? []}
          focusedSeatIds={focusedSeatIds}
        />
      );
    case 'seatPicker':
      return (
        <SeatPickerModal
          auditoriumId={auditoriumId}
          theaterName={theaterName ?? ''}
          onClose={() => useModalStore.getState().closeModal()}
        />
      );
    case 'seatWrite':
      return (
        <SeatWriteModal
          auditoriumId={auditoriumId}
          theaterName={theaterName ?? ''}
          onClose={() => useModalStore.getState().closeModal()}
        />
      );
    default:
      return null;
  }
};

export default SeatModal;
