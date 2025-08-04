import { bestReviewMock } from '@/__mocks';
import { Header, ReviewCard } from '@/components';
import { useNavigate } from 'react-router-dom';
import { getTopReviewByLikes } from '@/utils/reviewUtils';

const PopularReviewPage = () => {
  const navigate = useNavigate();
  const top10Reviews = getTopReviewByLikes(bestReviewMock, 10);
  return (
    <div className="flex min-h-screen flex-col pt-11 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50">
        <Header onBackClick={() => navigate(-1)} className="bg-gray-900">
          인기 있는 후기
        </Header>
      </div>
      <div className="mx-auto w-full space-y-3 px-5 pt-5">
        {top10Reviews.map((review) => (
          <ReviewCard
            key={review.reviewId}
            imageUrl={review.thumbnailUrl}
            tags={review.hashtags}
            title={review.reviewTitle}
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
