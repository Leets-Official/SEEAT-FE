// components/layouts/ReviewStepLayout.tsx
import type { ReactNode } from 'react';
import { Button, ReviewHeader } from '@/components';

interface ReviewStepLayoutProps {
  title: string;
  children: ReactNode;
  onClickNext: () => void;
  onClickBack: () => void;
  nextLabel?: string;
  disabled?: boolean;
}

export default function ReviewStepLayout({
  title,
  children,
  onClickNext,
  onClickBack,
  nextLabel = '다음',
  disabled = false,
}: ReviewStepLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 py-6">
      {/* 하단 버튼 여백 고려 */}
      <ReviewHeader onClickBack={onClickBack} />
      <div className="flex flex-col gap-6 px-5 pt-4">
        <div className="w-full max-w-[430px] text-left">
          <h2 className="text-title-2 text-white">{title}</h2>
        </div>

        <div className="items-center gap-6">{children}</div>
        {/* 고정 하단 버튼 */}
        <div className="fixed right-0 bottom-0 left-0 z-10 mx-auto w-full max-w-[430px] px-5 pt-4 pb-6">
          <Button
            variant="primary"
            color="red"
            size="lg"
            className="w-full"
            onClick={onClickNext}
            disabled={disabled}
          >
            {nextLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
