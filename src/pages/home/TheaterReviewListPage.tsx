import { useNavigate, useParams } from 'react-router-dom';
import { getRandomImage, reviewSummaryMock } from '@/__mocks';
import { Header, ReviewCard } from '@/components';

const TheaterReviewListPage = () => {
  const { cinemaName } = useParams<{ cinemaName: string }>();

  const navigate = useNavigate();
  const ImgURL = getRandomImage(81, 81);

  /* 묵데이터에서 리뷰 가져오는 로직 */
  const decodeCinemaName = decodeURIComponent(cinemaName ?? '');
  const selectedReviews = reviewSummaryMock.filter(
    (review) => review.movieSeatInfo.theaterName === decodeCinemaName,
  );

  return (
    <div className="flex min-h-screen max-w-[430px] flex-col bg-gray-900 pt-11 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <Header
          title=""
          showBack
          onBackClick={() => navigate('/theaters')}
          showBookmark={false}
          showLike={false}
        />
      </div>
      <div className="mx-auto w-full max-w-[430px] space-y-3 px-5 pt-5">
        {selectedReviews.length === 0 ? (
          <p className="text-center text-gray-400">아직 등록된 후기가 없습니다.</p>
        ) : (
          selectedReviews.map((review) => (
            <ReviewCard
              key={review.id}
              imageUrl={ImgURL}
              tags={review.hashtags.map((h) => h.hashTagName)}
              title={decodeURIComponent(cinemaName ?? '')}
              description={review.content}
              likeCount={review.heartCount}
              onClick={() => navigate(`/review/${review.id}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default TheaterReviewListPage;
