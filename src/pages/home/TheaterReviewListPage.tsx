import { useNavigate, useParams } from 'react-router-dom';
import { getRandomImage, reviewSummaryMock } from '@/__mocks';
import { Header, ReviewCard } from '@/components';
import { cinemaData } from '@/constants';

const TheaterReviewListPage = () => {
  const { auditoriumId } = useParams<{ auditoriumId: string }>();
  const navigate = useNavigate();
  const ImgURL = getRandomImage(81, 81);

  /* 묵데이터에서 리뷰 가져오는 로직 */
  const cinema = Object.values(cinemaData)
    .flat()
    .find((c) => c.auditoriumId === auditoriumId);

  const theaterName = cinema?.theaterName ?? '영화관 정보 없음';
  const auditoriumName = cinema?.auditoriumName ?? '상영관 정보 없음';

  const selectedReviews = reviewSummaryMock.filter(
    (review) =>
      review.movieSeatInfo.theaterName === theaterName &&
      review.movieSeatInfo.auditoriumName === auditoriumName,
  );

  return (
    <div className="flex min-h-screen max-w-[430px] flex-col bg-gray-900 pt-11 pb-5">
      <Header leftSection="BACK" onBackClick={() => navigate('/theaters')} />
      <div className="mx-auto w-full max-w-[430px] space-y-3 px-5 pt-5">
        {selectedReviews.length === 0 ? (
          <p className="text-center text-gray-400">아직 등록된 후기가 없습니다.</p>
        ) : (
          selectedReviews.map((review) => (
            <ReviewCard
              key={review.id}
              imageUrl={ImgURL}
              tags={review.hashtags.map((h) => h.hashTagName)}
              title={`${theaterName} (${auditoriumName})`}
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
