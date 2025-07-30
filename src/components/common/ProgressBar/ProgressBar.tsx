interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <>
      {/* 진행도 바 */}
      <div className="mt-6 mb-2">
        <div className="h-2 w-full bg-gray-800 relative">
          <div
            className="absolute left-0 top-0 h-full bg-red-400"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* 진행 텍스트 */}
      <div className="text-title-1 text-white mb-3 px-6">
        {`${currentStep}/${totalSteps}`}
      </div>
    </>
  );
};

export default ProgressBar;
