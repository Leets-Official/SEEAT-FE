import { useState } from 'react';
import { Button } from '@/components';
import { StarFill, StarHalf, StarLine } from '@/assets';
import ReviewHeader from './ReviewHeader';

interface RatingStepProps {
  onNext: () => void;
}

const RatingStep = ({ onNext }: RatingStepProps) => {
  const [rating, setRating] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;
    const clickedHalf = clickX < width / 2;
    const finalValue = clickedHalf ? value - 0.5 : value;
    setRating(finalValue);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 py-6">
      <ReviewHeader />
      {/* 타이틀 */}
      <div className="flex flex-col gap-6 px-5 pt-4">
        <div className="w-full max-w-[430px] text-left">
          <h2 className="text-title-2 leading-snug text-white">관람했던 상영관은 어땠나요?</h2>
        </div>
        {/* 점수 */}
        <p className="mb-3 text-center text-[40px] font-extrabold text-white">
          {rating > 0 ? `${rating.toFixed(1)}점` : '- 점'}
        </p>

        {/* 별점 아이콘 */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => {
            let icon;
            if (rating >= i) {
              icon = <StarFill className="h-10 w-10 text-white" />;
            } else if (rating + 0.5 === i) {
              icon = <StarHalf className="h-10 w-10 text-white" />;
            } else {
              icon = <StarLine className="h-10 w-10 text-white" />;
            }

            return (
              <div key={i} className="relative cursor-pointer" onClick={(e) => handleClick(e, i)}>
                {icon}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto flex flex-col items-start gap-[10px] px-[20px] py-[10px]">
        <Button className="w-full" onClick={onNext} disabled={rating === 0}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default RatingStep;
