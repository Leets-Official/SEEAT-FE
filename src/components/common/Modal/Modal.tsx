import { useModalStore } from '@/store/modalStore';
import ConfirmModal from './ConfirmModal';
import SeatPickerModal from './SeatPickerModal';

const ModalLayout = () => {
  const { isOpen, modalType, modalProps, closeModal } = useModalStore();

  if (!isOpen || !modalType) return null;

  let content = null;

  switch (modalType) {
    case 'confirm':
      content = <ConfirmModal {...modalProps} />;
      break;
    case 'seatPicker':
      content = <SeatPickerModal {...modalProps} />;
      break;
    default:
      return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">{content}</div>
  );
};

export default ModalLayout;
