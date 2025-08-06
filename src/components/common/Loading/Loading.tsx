import Lottie from 'lottie-react';
import loadingJson from '@/assets/lotties/LoadingLottie.json';

interface LoadingProps {
  size?: number;
  className?: string;
  fullscreen?: boolean; // 전체화면 오버레이 여부
}

const Loading = ({ size = 80, className = '', fullscreen = true }: LoadingProps) => {
  if (fullscreen) {
    return (
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center bg-gray-900/40 ${className}`}
      >
        <Lottie animationData={loadingJson} loop style={{ width: size, height: size }} />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Lottie animationData={loadingJson} loop style={{ width: size, height: size }} />
    </div>
  );
};

export default Loading;
