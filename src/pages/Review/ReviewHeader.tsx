import { useNavigate } from 'react-router-dom';
import { ChevronIcon } from '@/assets';

interface ReviewHeaderProps {
  showBack?: boolean;
  onBackClick?: () => void;
}

const ReviewHeader = ({ showBack = true, onBackClick }: ReviewHeaderProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
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
