import { cn } from '@/utils/cn';

interface ScreenBarProps {
  width?: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const ScreenBar = ({
  width = 400,
  bgColor = 'bg-gray-400',
  textColor = 'text-black',
  className = '',
}: ScreenBarProps) => {
  return (
    <div
      className={cn(
        'text-caption-4 mx-auto rounded-md py-1 text-center',
        bgColor,
        textColor,
        className,
      )}
      style={{ width }}
    >
      SCREEN
    </div>
  );
};

export default ScreenBar;
