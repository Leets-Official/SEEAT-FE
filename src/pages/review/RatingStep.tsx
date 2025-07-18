import { useReviewStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import { StarFill, StarHalf, StarLine } from '@/assets';
import { ReviewStepLayout } from '@/components';
import { useEffect } from 'react';

const RatingStep = () => {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);
  const { rating, setRating } = useReviewStore();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;
    const clickedHalf = clickX < width / 2;
    const finalValue = clickedHalf ? value - 0.5 : value;
    setRating(finalValue);
  };

  const handleNext = () => {
    navigate('/review/tag'); // 원하는 다음 경로로 설정
  };

  return (
    <ReviewStepLayout
      title="관람했던 상영관은 어땠나요?"
      onClickNext={handleNext}
      onClickBack={() => navigate('/review/info')}
      disabled={rating === 0}
    >
      {/* 점수 출력 */}
      <p className="mb-3 text-center text-[40px] font-extrabold text-white">
        {rating > 0 ? `${rating.toFixed(1)}점` : '- 점'}
      </p>

      {/* 별점 선택 영역 */}
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
    </ReviewStepLayout>
  );
};

export default RatingStep;
