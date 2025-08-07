import { useReviewStore } from '@/store';
import { useNavigate, useParams } from 'react-router-dom';
import { StarFill, StarHalf, StarLine } from '@/assets';
import { ReviewStepLayout } from '@/components';
import { useEffect } from 'react';
import { calculateRatingClick } from '@/utils/rating';

const RatingStep = () => {
  const { isInitialized, rating, setRating } = useReviewStore();
  const navigate = useNavigate();
  const { reviewId } = useParams<{ reviewId: string }>();
  const isEdit = !!reviewId;

  useEffect(() => {
    if (!isInitialized && !isEdit) {
      navigate('/review');
    }
  }, [isInitialized, isEdit, navigate]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
    const finalValue = calculateRatingClick(e, value);
    setRating(finalValue);
  };

  const handleNext = () => {
    if (isEdit) {
      navigate(`/review/edit/${reviewId}/tag`);
    } else {
      navigate('/review/tag');
    }
  };

  return (
    <ReviewStepLayout
      title="관람했던 상영관은 어땠나요?"
      onClickNext={handleNext}
      disabled={rating === 0}
    >
      {/* 점수 출력 */}
      <p className="mb-3 text-center text-[40px] font-extrabold text-white">
        {rating > 0 ? `${rating.toFixed(1)}점` : '0 점'}
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
