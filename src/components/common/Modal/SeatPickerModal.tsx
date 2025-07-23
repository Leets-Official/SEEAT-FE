import { SeatMap } from '@/components';
import { useModalStore } from '@/store/modalStore';
import { CloseIcon } from '@/assets';

interface SeatPickerModalProps {
  theaterType: 'IMAX' | 'Dolby Cinema';
  theaterName: string;
  auditoriumId: string;
}

const SeatPickerModal = ({ theaterType, theaterName, auditoriumId }: SeatPickerModalProps) => {
  const { closeModal } = useModalStore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
      <div className="bg-bg relative w-[90%] max-w-[600px] rounded-2xl">
        {/* 헤더 */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-title-3">좌석을 선택해주세요</div>
          <CloseIcon onClick={closeModal} />
        </div>

        <p className="text-body-2 btn-text-gray-500 mb-4 text-left">
          {`${theaterType} ${theaterName}`}
        </p>

        {/* 스크롤 가능한 좌석 영역 */}
        <div className="max-h-[400px] overflow-auto rounded-xl p-4">
          <div className="min-w-[500px]">
            <SeatMap auditoriumId={auditoriumId} isMock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatPickerModal;
