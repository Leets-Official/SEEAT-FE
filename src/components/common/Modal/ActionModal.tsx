import { useModalStore } from '@/store';
import BaseModal from './BaseModal';

interface ActionModalProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionModal = ({ onEdit, onDelete }: ActionModalProps) => {
  const { closeModal } = useModalStore();
  return (
    <BaseModal>
      <div className="flex flex-col gap-1 rounded-[12px] bg-gray-700 px-[12px] py-[8px] shadow-md">
        <button
          className="text-body-2 w-[100px] rounded-s px-2 py-2 hover:bg-gray-800 active:bg-gray-900"
          onClick={onEdit}
        >
          수정하기
        </button>
        <button
          className="text-body-2 w-[100px] rounded-s px-2 py-2 hover:bg-gray-800 active:bg-gray-900"
          onClick={onDelete}
        >
          삭제하기
        </button>
      </div>
    </BaseModal>
  );
};

export default ActionModal;
