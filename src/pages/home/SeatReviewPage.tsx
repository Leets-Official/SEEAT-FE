import { seatReviewMock } from '@/__mocks';
import { Header, ReviewCard, StarRating } from '@/components';
import { calculateAverageRating } from '@/utils/calculateAverageRating';
import { useNavigate, useParams } from 'react-router-dom';

const SeatReviewPage = () => {
  const { seatId } = useParams<{ seatId: string }>();
  const navigate = useNavigate();

  //추후 API 연결로 대체...
  const filteredReviews = seatReviewMock.filter((review) => review.seatId === (seatId ?? ''));
  const seatInfo = filteredReviews[0]?.movieSeatInfo;
  const theaterName = seatInfo?.theaterName || '';
  const seatLabel = seatInfo?.seatNumber || '';

  return (
    <div className="flex min-h-screen max-w-[430px] flex-col bg-gray-900 pt-11 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <Header onBackClick={() => navigate('')} />
      </div>
      <div className="mx-auto w-full max-w-[430px] space-y-3 px-5 pt-5">
        <div className="flex items-center space-x-2">
          <div className="text-title-1 text-white">{seatLabel ?? ''}</div>
          <span className="text-body-1 text-gray-500">{theaterName}</span>
        </div>
        <div className="flex items-center space-x-1">
          <StarRating color="red" rating={calculateAverageRating(filteredReviews)} />
          <span className="text-title-2 text-white">{calculateAverageRating(filteredReviews)}</span>
          <span className="text-title-2 text-gray-500">({filteredReviews.length})</span>
        </div>
        <div className="my-5 border border-gray-800" />
        {filteredReviews.length === 0 ? (
          <div className="text-gray-500">해당 좌석의 리뷰가 없습니다</div>
        ) : (
          <div className="gap-3 space-y-4">
            {filteredReviews.map((review) => (
              <ReviewCard
                key={review.reviewId}
                title="리뷰제목"
                variant="rating"
                imageUrl={review.imageInfo[0]?.imageUrl}
                tags={review.hashtags.map((tag) => tag.hashTagName)}
                rating={review.rating}
                date={review.createdAt}
                likeCount={review.heartCount}
                onClick={() => navigate(`review/${review.reviewId}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatReviewPage;
