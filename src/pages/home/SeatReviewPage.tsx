import { getSeatReview } from '@/api/review/getSeatReviews.api';
import { Header, ReviewCard, StarRating } from '@/components';
import type { ApiError } from '@/types/api-response';
import type { SeatReviewBlock } from '@/types/review';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SeatReviewPage = () => {
  const { seatId } = useParams<{ seatId: string }>();
  const navigate = useNavigate();

  const [seatData, setSeatData] = useState<SeatReviewBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!seatId) return;
    const load = async () => {
      try {
        const res = await getSeatReview({ seatId, page: 1, size: 10 });
        console.log('res', res);
        setSeatData(res.content[0]);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('불러오기 실패:', apiError.message, apiError.error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [seatId]);

  if (!seatId) {
    return <div>좌석 ID가 없습니다.</div>;
  }

  const theaterName = seatData?.theaterName || '';
  const seatLabel = seatData?.seatName || '';
  const reviews = seatData?.reviews || [];
  const averageRating = seatData?.averageRating || 0;
  const reviewCount = seatData?.reviewCount || 0;

  return (
    <div className="flex min-h-screen flex-col pt-11 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <Header onBackClick={() => navigate('')} className="bg-gray-900" />
      </div>
      <div className="mx-auto w-full max-w-[430px] space-y-3 px-5 pt-5">
        {!loading && !seatData && (
          <div className="text-gray-500">데이터를 불러오지 못했습니다.</div>
        )}
        {loading ? (
          <div className="text-caption-3">불러오는 중...</div>
        ) : (
          <div>
            <div className="flex items-center space-x-2">
              <div className="text-title-1 text-white">{seatLabel}</div>
              <span className="text-body-1 text-gray-500">{theaterName}</span>
            </div>
            <div className="flex items-center space-x-1">
              <StarRating color="red" rating={averageRating} />
              <span className="text-title-2 text-white">{averageRating.toFixed(1)}</span>
              <span className="text-title-2 text-gray-500">({reviewCount})</span>
            </div>
            <div className="my-5 border border-gray-800" />
            {reviews.length === 0 ? (
              <div className="text-gray-500">해당 좌석의 리뷰가 없습니다</div>
            ) : (
              <div className="gap-3 space-y-4">
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.reviewId}
                    title={review.title}
                    variant="rating"
                    imageUrl={review.thumbnailUrl}
                    tags={review.hashtags.map((tag) => tag.hashTagName)}
                    rating={review.rating}
                    date={review.createdAt}
                    likeCount={review.heartCount}
                    onClick={() => navigate(`/review/${review.reviewId}`)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatReviewPage;
