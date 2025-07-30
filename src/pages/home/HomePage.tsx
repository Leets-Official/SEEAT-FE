import { HomeHeader, ReviewCard, BestCinemaCard, BottomNavigation, Image } from '@/components';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlusIcon } from '@/assets';
import { reviewSummaryMock, bestCinemas, getRandomImage } from '@/__mocks';
import { getTopReviewByLikes } from '@/utils/reviewUtils';
import CinemaTypeButton from '@/components/home/CinemaTypeButton';

const HomePage = () => {
  const navigate = useNavigate();
  const imgUrl = getRandomImage(375, 210);

  //좋아요 순으로 정렬
  const popularReviews = getTopReviewByLikes(reviewSummaryMock, 3);

  const handleGoToPopular = () => {
    navigate('/review/popular');
  };

  return (
    <div className="flex min-h-screen flex-col py-5">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <HomeHeader />
      </div>
      {/* 이미지?*/}
      <div className="mx-auto w-full max-w-[430px] bg-gray-700 pt-6">
        <Image src={imgUrl} aspectRatio="aspect-[375/210]" className="w-full" />
      </div>
      <div className="mx-auto w-full px-5">
        {/*영화관 리스트 선택*/}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-title-3">영화관 리스트</p>
          </div>
          <div className="flex justify-center gap-3">
            <CinemaTypeButton label="IMAX" tab="imax" />
            <CinemaTypeButton label="Dolby Cinema" tab="dolby" />
          </div>
        </div>

        {/*인기 있는 후기*/}
        <div className="mt-12">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-title-3">인기 있는 후기</p>
            <button onClick={handleGoToPopular}>
              <ArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {popularReviews.map((review) => (
              <ReviewCard
                key={review.id}
                imageUrl={getRandomImage(82, 82)}
                tags={review.hashtags.map((tag) => tag.hashTagName)}
                title={review.movieSeatInfo.theaterName}
                description={review.content}
                likeCount={review.heartCount}
                onClick={() => navigate(`/review/${review.id}`)}
              />
            ))}
          </div>
        </div>

        {/*베스트 상영관*/}
        <div className="mt-12 pb-[172px]">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-title-3">베스트 상영관</p>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-2 gap-y-3">
            {bestCinemas.map((cinema) => (
              <BestCinemaCard
                key={cinema.rank}
                rank={cinema.rank}
                imageUrl={cinema.imageUrl}
                title={cinema.auditoriumName}
                rating={cinema.avgRating}
                reviewCount={cinema.reviewCount}
                onClick={() => navigate(`/theaters/${cinema.auditoriumId}`)}
              />
            ))}
          </div>
        </div>
      </div>
      {/*플로팅 버튼*/}
      <div className="sticky bottom-20 z-40 mx-auto mt-10 flex w-full max-w-[430px] justify-end px-5">
        <button
          onClick={() => navigate('/review')}
          className="rounded-m flex h-12 w-12 items-center justify-center bg-red-400 text-white shadow-md"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>

      {/*바텀네비*/}
      <BottomNavigation />
    </div>
  );
};
export default HomePage;
