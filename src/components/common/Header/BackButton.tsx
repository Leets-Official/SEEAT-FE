import ChevronIcon from '@/assets/icons/chevron.svg?react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const nav = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      nav(-1);
    }
  };

  return (
    <button onClick={handleClick}>
      <ChevronIcon className="h-6 w-6" />
    </button>
  );
};
