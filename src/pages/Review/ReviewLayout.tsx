import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronIcon } from '@/assets';

interface ReviewLayoutProps {
  children: ReactNode;
  showBack?: boolean;
  onBackClick?: () => void;
}

const ReviewLayout = ({ children, showBack = true, onBackClick }: ReviewLayoutProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto flex h-[44px] w-full max-w-[375px] items-center px-4">
        {showBack && (
          <button onClick={handleBack}>
            <ChevronIcon className="h-5 w-5 text-white" />
          </button>
        )}
      </div>

      {/*본문 콘텐츠 여기에*/}
      <div className="mx-auto w-full max-w-[375px] px-4 pt-4 pb-6">{children}</div>
    </div>
  );
};

export default ReviewLayout;
