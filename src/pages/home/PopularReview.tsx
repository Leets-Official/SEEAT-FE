import { Header, ReviewCard } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPopularReviews } from '@/api/popular';
import type { PopularReview } from '@/types/review';

const PopularReviewPage = () => {
  const navigate = useNavigate();
  const [popularReviews, setPopularReviews] = useState<PopularReview[]>([]);

  useEffect(() => {
    const loadPopular = async () => {
      try {
        const data = await fetchPopularReviews(1, 10);
        setPopularReviews(data.content);
      } catch (error) {
        console.error('불러오기 실패', error);
      }
    };
    loadPopular();
  }, []);

  return (
    <div className="flex min-h-screen flex-col pt-11 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50">
        <Header onBackClick={() => navigate(-1)}>인기 있는 후기</Header>
      </div>
      <div className="mx-auto w-full space-y-3 px-5 pt-5">
        {popularReviews.map((review) => (
          <ReviewCard
            key={review.reviewId}
            imageUrl={review.thumbnailUrl}
            tags={review.hashtags}
            title={review.title}
            description={review.content}
            likeCount={review.heartCount}
            onClick={() => navigate(`review/${review.reviewId}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularReviewPage;
