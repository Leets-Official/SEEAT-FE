interface ScreenBarProps {
  width?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const ScreenBar = ({
  width = '100%',
  bgColor = 'bg-gray-400',
  textColor = 'text-black',
  className = '',
}: ScreenBarProps) => {
  return (
    <div
      className={`text-caption-2 py-1 text-center ${bgColor} ${textColor} ${className} `}
      style={{ width, height: '28px', marginBottom: '24px' }}
    >
      SCREEN
    </div>
  );
};

export default ScreenBar;
