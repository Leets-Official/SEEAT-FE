import { useNavigate } from 'react-router-dom';
import { ChevronIcon } from '@/assets';

interface ReviewHeaderProps {
  showBack?: boolean;
  onClickBack?: () => void;
}

const ReviewHeader = ({ showBack = true, onClickBack }: ReviewHeaderProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (onClickBack) {
      onClickBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="mx-auto flex h-[24px] w-full max-w-[430px] items-center bg-gray-900 px-5">
      {showBack && (
        <button onClick={handleBack}>
          <ChevronIcon className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
};

export default ReviewHeader;
