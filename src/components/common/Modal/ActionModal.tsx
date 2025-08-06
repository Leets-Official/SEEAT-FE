import BaseModal from './BaseModal';

interface ActionModalProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionModal = ({ onEdit, onDelete }: ActionModalProps) => {
  return (
    <BaseModal>
      <div className="rounded-m flex h-[84px] w-[100px] flex-col items-center justify-center gap-1 bg-gray-600 px-3 py-3 shadow-md">
        <button
          className="text-body-2 w-full rounded-s py-2 hover:bg-gray-800 active:bg-gray-900"
          onClick={onEdit}
        >
          수정하기
        </button>
        <button
          className="text-body-2 w-full rounded-s py-2 hover:bg-gray-800 active:bg-gray-900"
          onClick={onDelete}
        >
          삭제하기
        </button>
      </div>
    </BaseModal>
  );
};

export default ActionModal;
