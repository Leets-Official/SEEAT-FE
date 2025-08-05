import { useNavigate, useParams } from 'react-router-dom';
import { Header, ReviewCard } from '@/components';
import type { ReviewSummary } from '@/types/review';
import {
  type AuditoriumReviewSort,
  getAuditoriumReviews,
} from '@/api/review/getAuditoriumReviews.api';
import { useState, useEffect } from 'react';
import type { ApiError } from '@/types/api-response';
import SortDropdown from '@/components/common/DropDown/SortDropdown';
const TheaterReviewListPage = () => {
  const { auditoriumId } = useParams<{ auditoriumId: string }>();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState<ReviewSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState<AuditoriumReviewSort>('latest');

  useEffect(() => {
    if (!auditoriumId) return;
    const fetchReviews = async () => {
      try {
        const res = await getAuditoriumReviews({
          auditoriumId,
          page: 1,
          size: 10,
          sort: selectedSort,
        });
        setReviews(res.content);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('리뷰 불러오기 실패:', apiError.error, apiError.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [auditoriumId, selectedSort]);

  return (
    <div className="flex min-h-screen flex-col pt-11 pb-5">
      <Header
        leftSection="BACK"
        onBackClick={() => navigate('/theaters')}
        className="bg-gray-900"
      />
      <div className="mx-auto w-full max-w-[430px] space-y-3 px-5 pt-5">
        <div className="flex justify-end">
          <SortDropdown
            selected={selectedSort}
            onChange={(value) => setSelectedSort(value as AuditoriumReviewSort)}
          />
        </div>

        {loading ? (
          <div>불러오는 중...</div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-400">아직 등록된 후기가 없습니다.</p>
        ) : (
          reviews.map((review) => (
            <ReviewCard
              key={review.reviewId}
              imageUrl={review.thumbnailUrl}
              tags={review.hashtags.map((h) => h.hashTagName)}
              title={review.title}
              description={review.content}
              likeCount={review.heartCount}
              onClick={() => navigate(`/review/${review.reviewId}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default TheaterReviewListPage;
