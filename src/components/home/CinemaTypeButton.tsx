import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface CinemaTypeButtonProps {
  tab: string;
  className?: string;
  children: ReactNode;
}

const CinemaTypeButton = ({ tab, className, children }: CinemaTypeButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/theaters?tab=${tab}`)}
      className={cn(
        'rounded-m flex h-[132px] w-[163px] flex-col items-center border border-gray-800 bg-gray-950 px-3 py-5',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default CinemaTypeButton;
