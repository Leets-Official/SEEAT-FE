interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="px-6 mt-6 mb-2">
      {/* 진행 바 */}
      <div className="h-2 w-full bg-gray-800 relative">
        <div
          className="absolute left-0 top-0 h-full bg-red-400"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* 텍스트 */}
      <div className="text-title-1 text-white mt-2">{`${currentStep}/${totalSteps}`}</div>
    </div>
  );
};

export default ProgressBar;
