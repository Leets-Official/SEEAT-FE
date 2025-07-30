import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface CinemaTypeButtonProps {
  label: string;
  tab: string;
  className?: string;
}

const CinemaTypeButton = ({ label, tab, className }: CinemaTypeButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/theaters?tab=${tab}`)}
      className={cn(
        'rounded-m flex h-[163px] w-[166px] flex-col items-center bg-gray-800',
        className,
      )}
    >
      <div className="mt-5 aspect-square w-[60%] bg-gray-700" />
      <p className="mt-2 text-xl text-white">{label}</p>
    </button>
  );
};

export default CinemaTypeButton;
