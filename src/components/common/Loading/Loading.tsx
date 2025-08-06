import Lottie from 'lottie-react';
import loadingJson from '@/assets/lotties/LoadingLottie.json

interface LoadingProps {
  size?: number; 
  className?: string;
}

const Loading = ({ size = 80, className }: LoadingProps) => {
  return (
    <div className={`flex items-center justify-center bg-gray-800/20 ${className}`}>
      <Lottie
        animationData={loadingJson}
        loop
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Loading;
