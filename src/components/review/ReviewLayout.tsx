// components/layouts/ReviewStepLayout.tsx
import type { ReactNode } from 'react';
import { Button, Header } from '@/components';

interface ReviewStepLayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
  onClickNext: () => void;
  onClickBack: () => void;
  nextLabel?: string;
  disabled?: boolean;
}

export default function ReviewStepLayout({
  title,
  description,
  children,
  onClickNext,
  onClickBack,
  nextLabel = '다음',
  disabled = false,
}: ReviewStepLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 pt-11 pb-5">
      {/* 하단 버튼 여백 고려 */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <Header title="" showBack onBackClick={onClickBack} showLike={false} showBookmark={false} />
      </div>
      <div className={`flex flex-col gap-6 overflow-y-auto px-5 pb-[100px] ${title ? 'pt-4' : ''}`}>
        {title && (
          <div className="w-full max-w-[430px] text-left">
            <h2 className="text-title-2 text-white">{title}</h2>
            {description && <p className="text-caption-3 pt-1 text-red-300">{description}</p>}
          </div>
        )}

        <div className="items-center gap-6">{children}</div>
        {/* 고정 하단 버튼 */}
        <div className="fixed right-0 bottom-[10px] left-0 z-10 mx-auto w-full max-w-[430px] px-5 pt-4 pb-6">
          <Button className="w-full" onClick={onClickNext} disabled={disabled} fontType="title-3">
            {nextLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
