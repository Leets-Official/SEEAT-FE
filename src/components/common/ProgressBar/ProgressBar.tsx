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
        <div className="relative h-2 w-full overflow-hidden bg-gray-800">
          <div
            className="absolute top-0 left-0 h-full bg-red-400 transition-all duration-500 ease-in-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* 진행 텍스트 */}
      <div className="text-title-1 mb-3 px-6">{`${currentStep}/${totalSteps}`}</div>
    </>
  );
};

export default ProgressBar;
